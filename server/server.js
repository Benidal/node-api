var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoDB');
var User = mongoose.model('Users', {
    name: {
        type: String,
        required: true, //must be exist !
        minlength: 1, //min leghnt possible maxlength: 5
        trim: true //  
    },
    age: Number,
    phone: {
        type: String,
        required: [true, 'User phone number required'],
        validate: {
            validator: (v) => {
                return /^06-\d{2}-\d{2}-\d{2}-\d{2}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    mail: {
        type: String,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: '{VALUE} is not a valid mail number!'
        },
        required: [true, 'User mail  required']
    }
});

/* var newUser = new User({
    name: 'Ofa',
    age: 23
});
newUser.save().then((docs) => {
    console.log('User saved successfelly ', docs);

}).catch(() => {
    console.log('Unable to  save the user ');
}); */
newerUser = new User({
        name: 'Afaf',
        age: 55,
        phone: '06-14-44-45-33',
        mail:'a.ben@gmail.com'
    }).save()
    .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('unable to save cuz  :\n' + err);
    });