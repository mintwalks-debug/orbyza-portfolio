import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        websiteDesign: resolve(__dirname, 'website-design.html'),
        socialMedia: resolve(__dirname, 'social-media.html'),
        socialMediaMarketing: resolve(__dirname, 'social-media-marketing.html'),
        ppcGoogleAds: resolve(__dirname, 'ppc-google-ads.html'),
        seo: resolve(__dirname, 'seo.html'),
        emailMarketing: resolve(__dirname, 'email-marketing.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/@react-three')) return 'fiber';
          if (id.includes('node_modules/gsap')) return 'gsap';
        }
      }
    }
  }
})
