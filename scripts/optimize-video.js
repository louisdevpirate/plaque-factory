const { exec } = require('child_process');
const { promisify } = require('util');
const path = require('path');
const fs = require('fs').promises;
const sharp = require('sharp');

const execAsync = promisify(exec);

async function optimizeVideo() {
  const videoDir = path.join(__dirname, '../public/videos');
  const imagesDir = path.join(__dirname, '../public/images');
  
  console.log('🎬 Starting video optimization...');
  
  // Check if ffmpeg is installed
  try {
    await execAsync('ffmpeg -version');
  } catch (error) {
    console.error('❌ ffmpeg is not installed. Please install ffmpeg to optimize videos.');
    console.log('On macOS: brew install ffmpeg');
    console.log('On Ubuntu: sudo apt install ffmpeg');
    return;
  }
  
  const inputVideo = path.join(videoDir, 'ugc.mp4');
  const outputVideoMp4 = path.join(videoDir, 'ugc-optimized.mp4');
  const outputVideoWebm = path.join(videoDir, 'ugc-optimized.webm');
  const posterPath = path.join(imagesDir, 'video-poster.jpg');
  const posterWebpPath = path.join(imagesDir, 'video-poster.webp');
  
  // Get video info
  const { stdout: videoInfo } = await execAsync(`ffmpeg -i "${inputVideo}" 2>&1 | grep Duration`);
  console.log('📹 Video info:', videoInfo.trim());
  
  // Extract poster frame from video (at 2 seconds)
  console.log('🖼️  Extracting poster frame...');
  await execAsync(`ffmpeg -i "${inputVideo}" -ss 00:00:02 -vframes 1 -q:v 2 "${posterPath}" -y`);
  
  // Convert poster to WebP
  await sharp(posterPath)
    .resize(1920, null, { 
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: 85 })
    .toFile(posterWebpPath);
  
  // Remove the JPG poster
  await fs.unlink(posterPath);
  console.log('✅ Poster image created');
  
  // Optimize MP4 (H.264 codec, compressed)
  console.log('🎥 Optimizing MP4 video...');
  const mp4Command = `ffmpeg -i "${inputVideo}" \
    -c:v libx264 \
    -preset slow \
    -crf 23 \
    -vf "scale=1920:-2" \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    "${outputVideoMp4}" -y`;
  
  await execAsync(mp4Command);
  console.log('✅ MP4 optimization complete');
  
  // Create optimized WebM (VP9 codec)
  console.log('🎥 Creating optimized WebM...');
  const webmCommand = `ffmpeg -i "${inputVideo}" \
    -c:v libvpx-vp9 \
    -crf 30 \
    -b:v 0 \
    -vf "scale=1920:-2" \
    -c:a libopus \
    -b:a 128k \
    "${outputVideoWebm}" -y`;
  
  await execAsync(webmCommand);
  console.log('✅ WebM optimization complete');
  
  // Compare file sizes
  const originalSize = (await fs.stat(inputVideo)).size;
  const optimizedMp4Size = (await fs.stat(outputVideoMp4)).size;
  const optimizedWebmSize = (await fs.stat(outputVideoWebm)).size;
  
  console.log('\n📊 Size comparison:');
  console.log(`Original MP4: ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Optimized MP4: ${(optimizedMp4Size / 1024 / 1024).toFixed(1)}MB (${((1 - optimizedMp4Size / originalSize) * 100).toFixed(1)}% reduction)`);
  console.log(`Optimized WebM: ${(optimizedWebmSize / 1024 / 1024).toFixed(1)}MB (${((1 - optimizedWebmSize / originalSize) * 100).toFixed(1)}% reduction)`);
  
  console.log('\n✨ Video optimization complete!');
  console.log('📝 Update VideoSection.tsx to use:');
  console.log('   - ugc-optimized.mp4');
  console.log('   - ugc-optimized.webm');
  console.log('   - video-poster.webp');
}

optimizeVideo().catch(console.error);