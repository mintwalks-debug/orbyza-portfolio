const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'website dev');
const destDir = path.join(__dirname, 'public', 'screenshots');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const file of files) {
  if (file.endsWith('.png')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    console.log(`Copied ${file}`);
  }
}
