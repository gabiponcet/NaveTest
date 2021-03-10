const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Naver = require('../models/Naver');

const connection = new Sequelize(dbconfig);

Naver.init(connection);

module.exports = connection;
