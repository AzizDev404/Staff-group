const mognoose = require('mongoose');
const Schema = mognoose.Schema;

const userSchema = new Schema({
    full_name:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true,
        unique: true
    },
    nickname:{
        type: String,
        required: true
    },
    direction:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

module.exports = mognoose.model('User', userSchema);
