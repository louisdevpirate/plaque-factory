const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function createPlaceholder() {
  const width = 1200;
  const height = 630;
  
  // Create a gray placeholder image
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="10%" y="10%" width="80%" height="80%" fill="#e5e7eb" rx="8"/>
    </svg>
  `;
  
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'placeholder.png');
  
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
  
  console.log('✅ Placeholder image created at:', outputPath);
}

createPlaceholder().catch(console.error);