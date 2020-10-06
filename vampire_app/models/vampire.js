const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: {type: String, required: true, unique: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: {type: String},
    dob: {type: Date},
    loves: [{type: String}],
    location: {type: String},
    gender: {type: String},
    victims: {type: Number, min:1},
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;