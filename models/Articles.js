const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please Enter the Title"]
    },
    content : {
        type : String,
        required : [true, "Please Enter the Content"]
    }
});

const articleModel = mongoose.model('Article', articleSchema);

module.exports = articleModel;