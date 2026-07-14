import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cafecito.tech',
  redirects: {
    '/company/': '/docs/overview/',
    '/docs/company-info/': '/docs/overview/',
  },
});
