let Cats = require('./cats.js');
let Dogs = require('./dogs.js');

module.exports = {
  ...Cats,
  ...Dogs
};
