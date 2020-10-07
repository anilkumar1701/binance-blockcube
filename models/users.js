const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
Joi.objectId = require('joi-objectid')(Joi);

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    address:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    }
},
{
    timestamps: {
        createdAt : true,
        updatedAt : true,
    }
});



const User = mongoose.model('User', userSchema);
exports.User = User;



