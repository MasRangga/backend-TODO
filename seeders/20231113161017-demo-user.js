"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "andi",
        lastName: "agung",
        email: "andi@gmail.com",
        password: "1234",
      },
      {
        firstName: "dandi",
        lastName: "agung",
        email: "dandi@gmail.com",
        password: "123",
      },
      {
        firstName: "tomo",
        lastName: "agung",
        email: "tomo@gmail.com",
        password: "123",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
