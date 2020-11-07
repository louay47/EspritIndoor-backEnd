const mongoose = require('../config/database');
const userSchema = mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    state: {
        type: Boolean,
        default:true
    },   
    lastName: {
        type: String
    },
    firstName: {
        type: String
    },
    photo: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default:false
    },
    isStudent: {
        type: Boolean,
        default:true

    },
    isProfessor: {
        type: Boolean,
        default:false

    },
    isGuest: {
        type: Boolean,
        default:false

    },
    friends : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    events : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evenement'
    }]
    },
    {
    timestamps: true,
    versionKey: false
    });
module.exports = mongoose.model('User', userSchema);