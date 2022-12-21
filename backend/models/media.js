//==================
//   DEPENDENCIES  
//==================
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//==================
//   MEDIA SCHEMA  
//==================

const mediaSchema = new Schema(
    {
        poster_path: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        genre_ids: [{
            type: Number
        }],
        id: {
            type: Number,
            required: true,
        },
        review_id: [{
            type: mongoose.ObjectId,
            ref: 'Review'
        }]
    }
) 

//=============================
//   MODEL USING ITEM SCHEMA  
//=============================

const Media = mongoose.model('Media', mediaSchema);

//===================
//   EXPORT MODEL  
//===================

module.exports = Media;
