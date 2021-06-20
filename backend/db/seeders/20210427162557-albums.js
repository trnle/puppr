'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      { name: "Dreamy", description: "Blissful moments with my two dogs", userId: 1 },
      { name: "Misty trails", description: null, userId: 1 },
      { name: "Odie", description: "Odie as a puppy", userId: 2 },
      { name: "Outdoor adventures", description: null, userId: 2 },
      { name: "Happy huskies", description: "Time in the Arctic Circle", userId: 3 },
      { name: "Hikes", description: "Hikes and trails with my dog", userId: 4 },
      { name: "Beach Days", description: null, userId: 4 },
      { name: "The Best of Friends", description: "Just two pups having fun", userId: 5 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
