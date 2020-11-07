const mongoose = require('../config/database');
const commentSchema = mongoose.Schema({
       sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },    
    contenu: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('Comment', commentSchema);