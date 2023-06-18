const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/banner/view/',
    createProxyMiddleware({
      target: 'http://herbal.techiecy.com',
      changeOrigin: true,
    })
  );
};
