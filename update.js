const {ObjectID ,MongoClient } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/dbtest', (err, db) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('connected successfelly to mongodb');
    db.collection('users').findOneAndUpdate(
        {_id : new ObjectID('5a148fdb432f796b44798acd')},
        {$set:{'name': 'Afaf ben '},
    $inc: {'age' : 1}},
        { returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });
    /*  db.collection('Users').find({
             _id: new ObjectID('5a148fdb432f796b44798ac7')
         })
         .toArray()
         .then((result) => {
             console.log(result);
         }); */

});