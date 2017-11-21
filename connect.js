const MongoClient = require('mongodb').MongoClient;
//WITH promise  ES6
/* MongoClient.connect('mongodb://afaf:afaf@ds059195.mlab.com:59195/my_first_db')
    .then(() => console.log('connected successfelly to mongodb !'))
    .catch(() => console.log('Unable to connect ')); */
//WITH CALLBACK
 MongoClient.connect('mongodb://localhost:27017/dbtest', (err, db) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('connected successfelly to mongodb ')
});
  /*  db.collection('users').insertOne({
        name: 'Afafato',
        age: 23
    })
    .then((result)=>{
        console.log('user is saved successfelly!');
        console.log(JSON.stringify(result.ops));
    })
    .catch(()=>{
        console.log('user can"t saved !');
    })
    db.close();
});

 */