const mongoDB = require('./src/connectors/database/mongodb');
const dogs = require('./src/models/mock_data/dogs');

mongoDB.add('Dogs', dogs, null);