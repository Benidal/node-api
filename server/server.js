var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { User } = require('./models/userModel');

var app = express();
app.use(bodyParser.json());
//for ressource creation ! 
app.post('/user', (req, res) => {
    var user = new User({
            "name": req.body.name,
            "phone": req.body.phone
        }).save()
        .then((docs) => {
            console.log('passe par la ');
            res.send(docs);
        }).catch((err) => {
            res.status(400).send();
            console.log('err'+err);
            
        });
});
app.listen(3000, () => {
    console.log(' Started on port 3000 ');
})