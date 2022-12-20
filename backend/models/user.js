//==================
//   DEPENDENCIES  
//==================

const mongoose = require('mongoose')
const Schema = mongoose.Schema


//==================
//   USER SCHEMA  
//==================

const userSchema = new Schema(
     {
        username: {
            type: String,
            unique: true,
            required: true 
        },

        password: {
            type: String,
            required: true,
        }
    }
);

//=============================
//   MODEL USING USER SCHEMA  
//=============================

const User = mongoose.model('User', userSchema);

//===================
//   EXPORT MODEL  
//===================

module.exports = User;
