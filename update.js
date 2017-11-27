const {
    ObjectID,
    MongoClient
} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/dbtest', (err, db) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('connected successfelly to mongodb');
    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5a148fdb432f796b44798acd')
    }, { //to update
        $set: {
            'name': 'Afaf ben '
        },
        //to increment age 
        $inc: {
            'age': 1
        }
    }, {
        returnOriginal: false //to get the new value 
    }).then((result) => {
        console.log(result);
    });
});