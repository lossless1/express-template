const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../utils/db/sequelize');

const basename = path.basename(__filename);
const db = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));

    // if you want to initialize each model you can uncomment below row
    // model.sync({ force: true });

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
