import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nickdevlab.com',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      assetsDir: '_assets',
    },
  },
});
