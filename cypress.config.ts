import { defineConfig } from 'cypress';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  e2e: {
    baseUrl: 'https://kocham-gry.vercel.app',
  },
});
