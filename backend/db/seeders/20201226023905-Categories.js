'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {name: 'Basics'},
      {name: 'Digital'},
      {name: 'Analog'},
      {name: 'Communication'},
      {name: 'Control'},
      {name: 'Sensors'},
      {name: 'Display'},
      {name: 'Strings'},
      {name: 'USB'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
