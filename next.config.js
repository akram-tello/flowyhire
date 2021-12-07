const withPWA = require('next-pwa')

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        // disable: process.env.NODE_ENV === 'development'
    }
})

module.exports = {
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        path: false
      };
  
      return config;
    },
  };