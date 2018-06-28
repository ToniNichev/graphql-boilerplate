const mongoDB = require('./src/connectors/database/mongodb');
const dogs = require('./src/models/mock_data/dogs');


//mongoDB.add('Dogs', dogs, null);


let result =  new Promise((resolve, reject) => {
  mongoDB.find({}, 'Dogs', function(err, result) {
    if(err) {
      reject(err);
    }
    else {
      resolve(result);
    }
  });
}); 

console.log(result);


/*
function resolveAfter2Seconds(x) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

(async () => {
  var result = await = mongoDB.find({}, 'Dogs',
  console.log(x); // 10
})();
*/