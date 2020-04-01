const Sequelize = require('sequelize');
const debug = require('debug')('app:server');

const env = process.env.NODE_ENV || 'development';
const {
  dialect,
  host,
  username,
  password,
  storage = null,
  database,
} = require('../../../config/config')[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  storage,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => debug('Connection has been established successfully.'))
  .catch((err) => debug('Unable to connect to the database:', err));

module.exports = sequelize;
