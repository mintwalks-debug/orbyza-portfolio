const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npx vite build', { encoding: 'utf8' });
  fs.writeFileSync('build-log.txt', output);
} catch (error) {
  fs.writeFileSync('build-log.txt', error.stdout + '\n' + error.stderr);
}
