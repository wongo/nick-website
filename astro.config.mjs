import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nickdevlab.com',
  base: '/',
  output: 'static',
  outDir: 'docs',
  // Keep the old /privacy/ URL working — it may already be filled into
  // Play Console / the OAuth consent screen.
  redirects: {
    '/privacy': '/submaster/privacy',
  },
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      assetsDir: 'assets',
    },
  },
});
