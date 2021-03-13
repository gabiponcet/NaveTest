'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('navers_projects', [{
      naver_id: 'bc99b716-c084-4511-ac65-2c440fa74374',
      project_id: '7720b896-1bde-41c2-b077-5a23d122310b',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('navers_projects', null, {});
  }
};
