//==================
//   DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');
const Review = db.Review
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')

//==================
//     ROUTES
//==================

//==================
//   CREATE ROUTE
//==================

router.post('/create', async (req, res) => {
    const newReview = {
        mediaId: req.body.mediaId,
        title: req.body.title,
        body: req.body.body,
        reviewer: req.body.reviewer
    } 
    Review.create(newReview)
   .then(result => {
        console.log(result)
        res.status(200).json({
            message: "Review created successfully"})})});

//==================
//   UPDATE ROUTE
//==================
router.put('/update', async (req, res) => {
    const updatedReview = await db.Review.findByIdAndUpdate(
        req.body.id, 
        {title: req.body.title, body: req.body.body},
        { new: true }
        );
        res.json(updatedReview)
    });



//==================
//   DELETE ROUTE
//==================

router.delete('/delete/:id', async (req, res) => {
    Review.findByIdAndRemove(req.params.id)
   .then(result => {
        console.log(result)
        res.sendStatus(200)})});



module.exports = router