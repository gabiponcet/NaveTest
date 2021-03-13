'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('navers', [{
      id: 'bc99b716-c084-4511-ac65-2c440fa74374',
      name: 'Sandra Poncet',
      job_role: 'CEO',
      birthdate: '1958-07-24',
      admission_date: '2021-04-05',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('navers', null, {});
  }
};
