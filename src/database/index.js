const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Naver = require('../models/Naver');
const Project = require('../models/Project');

const connection = new Sequelize(dbconfig);

Naver.init(connection);
Project.init(connection);

Naver.associate(connection.models);
Project.associate(connection.models);

module.exports = connection;
