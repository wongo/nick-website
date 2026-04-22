import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nickdevlab.com',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      assetsDir: 'assets',
    },
  },
});
