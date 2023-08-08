// swagger.js
const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');

const app = express();

const port = 3000;

const options = {
  info: {
    version: '1.0.0',
    title: 'API Documentation',
    description: 'API documentation for the API Server using ethers.js and ccxt',
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './src/**/*.js',
};

expressJSDocSwagger(app)(options);

app.listen(port, () => {
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
