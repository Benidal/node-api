const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb');
mongoClient.connect('mongodb://localhost:27017/dbtest', (err, db) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('connected successfelly to mongodb ');
    //to delete many document 
    /* db.collection('users')
        .deleteMany({
            name: 'Afaf'
        })
        .then((result) => {
            console.log(result);
        }); */
    //to delete one document ! 
    /*  db.collection('users')
         .deleteOne({
             name: 'Afaf'
         })
         .then((result) => {
             console.log(result);
         }); */

    db.collection('users')
        .findOneAndDelete({
            name: 'fafa'
        })
        .then((result) => {
            console.log(result);

        })
        .catch(() => {
            console.log('no document found ! ');
        });


});