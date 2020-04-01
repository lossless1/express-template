const fs = require('fs');
const path = require('path');

const initRoutes = (app) => {
  const readDir = fs.readdirSync(__dirname);
  readDir
    .filter((dir) => dir !== 'index.js')
    .forEach((dir) => {
      const route = require(path.resolve(__dirname, dir));
      app.use('/', route);
    });
};
module.exports = initRoutes;
