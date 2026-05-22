const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  console.log("Loading localhost...");
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000)); // wait for fallback timeout
  await page.screenshot({ path: 'public/screenshots/debug.png' });
  console.log("Localhost check done.");

  const urls = [
    "http://ivybridgestudy.com/",
    "http://neofatbury.co.in/",
    "http://chariotads.com/",
    "https://httpstakomaparkmdrealestatecom.vercel.app/",
    "https://skincamouflage.vercel.app/",
    "https://nova-spotify-clone.vercel.app/",
    "https://startup-com.vercel.app/",
    "https://crocs-rust.vercel.app/",
    "https://mintwalks.com/",
    "http://orbyza.com",
    "https://roamandroarsafari.co.in/"
  ];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const path = `public/screenshots/project${i + 1}.jpg`;
    console.log(`Taking screenshot for ${url}...`);
    try {
      const p = await browser.newPage();
      await p.setViewport({ width: 1280, height: 800 });
      await p.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      await p.screenshot({ path: path, type: 'jpeg', quality: 80 });
      await p.close();
      console.log(`Saved ${path}`);
    } catch (err) {
      console.log(`Failed ${url}: ${err.message}`);
    }
  }

  await browser.close();
})();
