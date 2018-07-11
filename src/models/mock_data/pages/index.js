const home = require('./home');
const dogsCatalog = require('./dogs-catalog');
const todo = require('./todo');
const about = require('./about');
const gallery = require('./gallery');


module.exports = home.concat(
    dogsCatalog, 
    todo, 
    about, 
    gallery,
);