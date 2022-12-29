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

function isAuthenticated(req, res, next) {
    if (req.headers.authorization) {
        next()
    } else {
        res.sendStatus(401)
    }
}

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
                message: "Review created successfully"
            })
        })
});

//====================
//    READ ROUTES
//====================

//==========================
//   REVIEWS BY MEDIA ID
//==========================
router.get('/:id', async (req, res) => {
    Review.find(
        { "mediaId": req.params.id },
        { title: true, body: true, reviewer: true },
        (err, result) => {
            res.json(result)
        })
})

//==========================
//    REVIEWS BY USER ID
//==========================
router.get('/user/:id', (req, res) => {
    db.User.findById(
        { "_id": req.params.id },
        (err, user) => {
            db.Review.find(
                { 'reviewer': req.params.id },
                { title: true, body: true, _id: false },
                (err, review) => {
                    const result = {
                        user: user.username,
                        reviews: []
                    }
                    for (let review of reviews) {
                        result.reviews.push(...review.reviews)
                    }
                    res.json(result)
                }
            )
        }
    )
})


//==================
//   UPDATE ROUTE
//==================
router.put('/update', isAuthenticated, async (req, res) => {
    const updatedReview = await db.Review.findByIdAndUpdate(
        req.body.id,
        { title: req.body.title, body: req.body.body },
        { new: true }
    );
    res.json(updatedReview)
});


//==================
//   DELETE ROUTE
//==================

router.delete('/delete/:id', isAuthenticated, async (req, res) => {
    Review.findByIdAndRemove(req.params.id)
        .then(result => {
            console.log(result)
            res.sendStatus(200)
        })
});



module.exports = router