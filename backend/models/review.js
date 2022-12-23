//==================
//   DEPENDENCIES  
//==================

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//===================
//   REVIEW SCHEMA  
//===================

const reviewSchema = new Schema(
    {
        mediaId: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        reviewer: {
            type: mongoose.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
);


//=============================
//   MODEL USING ITEM SCHEMA  
//=============================

const Review = mongoose.model('Review', reviewSchema);


//===================
//   EXPORT MODEL  
//===================



module.exports = Review

