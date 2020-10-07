// const winston = require('winston');
const mongoose = require('mongoose');
// const config = require('config');

module.exports = function () {
    const db = 'mongodb+srv://anil:connect1234@ufms1.41glp.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(db,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.log(err))};