const mongoDB = require('./src/connectors/database/mongodb');
const dogs = require('./src/models/mock_data/dogs');


// Adding all dogs
// mongoDB.add('Dogs', dogs, null);

// Adding one dog
// mongoDB.add('Dogs', {id: 6, name: 'Test', age: 15, gender: 'F'} , null);