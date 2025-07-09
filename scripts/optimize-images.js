const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const carouselDir = path.join(__dirname, '../public/images/carousel');
  const blogDir = path.join(__dirname, '../public/images/blog');
  
  // Create optimized directories
  const optimizedCarouselDir = path.join(carouselDir, 'optimized');
  const optimizedBlogDir = path.join(blogDir, 'optimized');
  
  await fs.mkdir(optimizedCarouselDir, { recursive: true });
  await fs.mkdir(optimizedBlogDir, { recursive: true });
  
  // Process carousel images
  console.log('🖼️  Optimizing carousel images...');
  const carouselFiles = await fs.readdir(carouselDir);
  const carouselPngs = carouselFiles.filter(f => f.endsWith('.png') && !f.includes('optimized'));
  
  for (const file of carouselPngs) {
    const inputPath = path.join(carouselDir, file);
    const baseName = path.basename(file, '.png');
    
    // WebP version (primary)
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(path.join(optimizedCarouselDir, `${baseName}.webp`));
      
    // AVIF version (modern browsers)
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .avif({ quality: 80 })
      .toFile(path.join(optimizedCarouselDir, `${baseName}.avif`));
      
    // Optimized PNG fallback
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true,
        force: true
      })
      .toFile(path.join(optimizedCarouselDir, `${baseName}-optimized.png`));
      
    // Create responsive sizes
    const sizes = [640, 768, 1024, 1536];
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(path.join(optimizedCarouselDir, `${baseName}-${size}w.webp`));
    }
    
    console.log(`✅ Optimized ${file}`);
  }
  
  // Process blog images
  console.log('\n📝 Optimizing blog images...');
  const blogFiles = await fs.readdir(blogDir);
  const blogImages = blogFiles.filter(f => (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')) && !f.includes('optimized'));
  
  for (const file of blogImages) {
    const inputPath = path.join(blogDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    
    // WebP version
    await sharp(inputPath)
      .resize(1200, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(path.join(optimizedBlogDir, `${baseName}.webp`));
      
    // AVIF version
    await sharp(inputPath)
      .resize(1200, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .avif({ quality: 80 })
      .toFile(path.join(optimizedBlogDir, `${baseName}.avif`));
      
    // Optimized original format
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .resize(1200, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 85,
          progressive: true,
          optimizeScans: true
        })
        .toFile(path.join(optimizedBlogDir, `${baseName}-optimized${ext}`));
    }
    
    console.log(`✅ Optimized ${file}`);
  }
  
  // Process other images
  console.log('\n🎨 Optimizing other images...');
  const rootImagesDir = path.join(__dirname, '../public/images');
  const rootFiles = await fs.readdir(rootImagesDir);
  const rootImages = rootFiles.filter(f => 
    (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')) && 
    !f.includes('optimized') &&
    fs.statSync(path.join(rootImagesDir, f)).isFile()
  );
  
  for (const file of rootImages) {
    const inputPath = path.join(rootImagesDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputDir = path.join(rootImagesDir, 'optimized');
    
    await fs.mkdir(outputDir, { recursive: true });
    
    // WebP version
    await sharp(inputPath)
      .resize(1200, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${baseName}.webp`));
      
    console.log(`✅ Optimized ${file}`);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log('📊 Generating size report...');
  
  // Generate size comparison report
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  // Check carousel sizes
  for (const file of carouselPngs) {
    const originalPath = path.join(carouselDir, file);
    const optimizedPath = path.join(optimizedCarouselDir, `${path.basename(file, '.png')}.webp`);
    
    const originalStats = await fs.stat(originalPath);
    const optimizedStats = await fs.stat(optimizedPath);
    
    totalOriginal += originalStats.size;
    totalOptimized += optimizedStats.size;
    
    const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    console.log(`${file}: ${(originalStats.size / 1024 / 1024).toFixed(1)}MB → ${(optimizedStats.size / 1024 / 1024).toFixed(1)}MB (-${reduction}%)`);
  }
  
  console.log(`\n📉 Total reduction: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB (-${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
}

optimizeImages().catch(console.error);