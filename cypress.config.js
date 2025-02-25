const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vite-react-alpha-lemon.vercel.app',
    // You can add other configurations here like timeouts, retries, etc.
  }
});