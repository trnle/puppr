'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { firstName: "Jax", lastName: "Strong", username: "jaxy", email: "jaxy@mail.com", hashedPassword: bcrypt.hashSync("password") },
      { firstName: "Nina", lastName: "Bean", username: "ninabean", email: "beanie@mail.com", hashedPassword: bcrypt.hashSync("beanie") },
      { firstName: "Simone", lastName: "Simmy", username: "simone", email: "simmy@mail.com", hashedPassword: bcrypt.hashSync("simoney") },
      { firstName: "Blue", lastName: "Cray", username: "blue", email: "blue@mail.com", hashedPassword: bcrypt.hashSync("bluepuppy") },
      { firstName: "Mochi", lastName: "Le", username: "momo", email: "mochi@mail.com", hashedPassword: bcrypt.hashSync("momo") },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
