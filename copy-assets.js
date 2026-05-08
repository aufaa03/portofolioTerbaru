// Simple script to verify and copy assets
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'assets');
const dest = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
  console.log('Created public/images directory');
}

const files = fs.readdirSync(src);
files.forEach(file => {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
  console.log(`Copied: ${file}`);
});

console.log('\n✅ All assets copied to public/images/');
