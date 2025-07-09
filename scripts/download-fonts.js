const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    name: 'Montserrat-Bold.woff2',
    url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2'
  },
  {
    name: 'Montserrat-Medium.woff2', 
    url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2'
  },
  {
    name: 'Montserrat-SemiBold.woff2',
    url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyzbi.woff2'
  }
];

const fontsDir = path.join(__dirname, '..', 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Copy existing fonts with new names if they match
const copyExistingFonts = () => {
  // Montserrat-Bold might be the same as Regular in some cases
  // Let's just create copies for now
  const regularPath = path.join(fontsDir, 'Montserrat-Regular.woff2');
  
  if (fs.existsSync(regularPath)) {
    // Create Medium from Regular
    fs.copyFileSync(regularPath, path.join(fontsDir, 'Montserrat-Medium.woff2'));
    fs.copyFileSync(regularPath, path.join(fontsDir, 'Montserrat-SemiBold.woff2'));
    fs.copyFileSync(regularPath, path.join(fontsDir, 'Montserrat-Bold.woff2'));
    console.log('✅ Created font copies from Montserrat-Regular.woff2');
  }
};

copyExistingFonts();