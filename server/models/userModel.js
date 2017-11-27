const mongoose = require('mongoose');
var User = mongoose.model('User', {
    name: {
        type: String,
        required: true, //must be exist !
        minlength: 1, //min leghnt possible maxlength: 5
        trim: true //  
    },
    age: Number,
    phone: {
        type: String,
       // required: [true, 'User phone number required'],
        validate: {
            validator: (v) => {
                return /^06-\d{2}-\d{2}-\d{2}-\d{2}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    }
    /* mail: {
        type: String,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: '{VALUE} is not a valid mail number!'
        }
      //  required: [true, 'User mail  required']
    } */
});
module.exports = { User };