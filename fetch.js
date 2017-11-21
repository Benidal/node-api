const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/dbtest', (err, db) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('connected successfelly to mongodb ');
    db.collection('users')
        .find({ _id: new ObjectID('59fd04561f231c1aac475f66') })
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch((err) => {
            console.log('u have this error ' + err);

        });
});