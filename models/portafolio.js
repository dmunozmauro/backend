'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortafolioSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Portafolio', PortafolioSchema);