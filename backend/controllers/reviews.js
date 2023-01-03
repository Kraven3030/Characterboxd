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
router.post('/create', isAuthenticated, async (req, res) => {
    const newReview = {
        mediaId: req.body.mediaId,
        movieName: req.body.movieName,
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

//==========================
//    REVIEWS BY USER ID
//==========================
router.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    db.User.findById(
        req.params.id,
        (err, user) => {
            if (err) {
                res.sendStatus(500)
                console.log(err)
            } else {

                console.log(user)
                if (user) {
                    db.Review.find(
                        { 'reviewer': req.params.id },
                        { movieName: true, title: true, body: true, _id: true },
                        (err, reviews) => {
                            const result = {
                                user: user.username,
                                reviews: [reviews]
                            }
                            res.json(result)
                        }
                    )
                }
            }
        }
    )
})


//==================
//   UPDATE ROUTE
//==================
router.put('/update', isAuthenticated, async (req, res) => {
    const updatedReview = await db.Review.findByIdAndUpdate(
        req.body.reviewId,
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
            res.sendStatus(200)
        })
});

//==========================
//   REVIEWS BY MEDIA ID
//==========================
router.get('/:id', async (req, res) => {

    const populatedReviews = await 
    Review.find({ "mediaId": req.params.id }).populate('reviewer')
    res.json(populatedReviews)
})

module.exports = router