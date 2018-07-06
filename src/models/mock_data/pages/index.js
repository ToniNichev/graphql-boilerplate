const home = require('./home');
const dogsCatalog = require('./dogs-catalog');
const todo = require('./todo');
const about = require('./about');


module.exports = home.concat(
    dogsCatalog, 
    todo, 
    about, 
);