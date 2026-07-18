const { execSync } = require('child_process');

try {
  console.log('--- GIT ADD ---');
  console.log(execSync('git add .', { encoding: 'utf-8' }));
  
  console.log('--- GIT COMMIT ---');
  try {
    console.log(execSync('git commit -m "Update portfolio for medical industry"', { encoding: 'utf-8' }));
  } catch (e) {
    console.log('Nothing to commit or commit failed:', e.message);
  }

  console.log('--- GIT PUSH ---');
  try {
    console.log(execSync('git push', { encoding: 'utf-8' }));
  } catch (e) {
    console.log('Push failed:', e.message);
  }

  console.log('--- VERCEL DEPLOY ---');
  try {
    console.log(execSync('npx vercel --prod --yes', { encoding: 'utf-8' }));
  } catch (e) {
    console.log('Vercel deploy failed:', e.stdout || e.message);
  }
} catch (err) {
  console.error('Error during execution:', err.message);
}
