//==================
//   DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const bcrypt = require('bcrypt');
const saltRounds = 10;

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


//=================================
//   SIGN UP ROUTE / CREATE USER
//=================================
router.post('/signup', async (req, res) => {
    // Verify the request body has an username and password
    if (req.body.username && req.body.password) {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
        // Make a new user object with the request body and password
        let newUser = {
            username: req.body.username,
            password: hashPassword
        }
        // Check if a user exists with the same username and password
        User.findOne({ username: req.body.username })
            .then((user) => {
                // If a user doesn't exist...
                if (!user) {
                    // ...Create a new one.
                    User.create(newUser)
                        .then(user => {
                            // If the database creates a user successfully, assign a JWT to the user and send the JWT as the response
                            if (user) {
                                const payload = {
                                    id: user._id,
                                    username: user.username
                                }
                                const token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token,
                                    username: user.username,
                                    userId: user._id
                                })
                                // Send an error if the database fails to create a user
                            } else {
                                res.sendStatus(401)
                            }
                        })
                    // Send an error if the user already exists
                } else {
                    res.sendStatus(401)
                }
            })
        // Send an error if the request body does not have an username and password
    } else {
        res.sendStatus(401)
    }
})

//==================================
//   LOG IN ROUTE / FIND ONE USER
//==================================
router.post('/login', (req, res) => {
    // Attempt to find the user by their username and password in the database
    if (req.body.username && req.body.password) {
        User.findOne({ username: req.body.username }, async (err, user) => {
            if (err || user == null) {
                res.sendStatus(404)
            }
            // check to:
            // 1. make sure the user was found in the database
            // 2. make sure the user entered in the correct password
            const match = await bcrypt.compare(req.body.password, user.password)
            if (match === true) {
                const payload = { id: user._id, username: user.username }
                const token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token,
                    username: user.username,
                    userId: user._id
                })
            } else {
                res.sendStatus(401)
            }
        })
    } else {
        res.sendStatus(401)
    }
});

//==================
//   UPDATE ROUTE
//==================
router.put('/update/:id', isAuthenticated, async (req, res) => {

    // Verify the request body has an username and password
    if (req.body.username && req.body.password) {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
        // Make a new user object with the request body and password
        let updatedUser = {
            username: req.body.username,
            password: hashPassword
        }
        // Check if a user exists with the same username and password
        User.findOne({ username: req.body.username })
            .then((user) => {
                // If a user doesn't exist...
                if (!user) {
                    // ...Create a new one.
                    db.User.findByIdAndUpdate(req.params.id, updatedUser)
                        .then(user => {
                            // If the database creates a user successfully, assign a JWT to the user and send the JWT as the response
                            if (user) {
                                const payload = {
                                    id: req.params.id,
                                    username: updatedUser.username
                                }
                                const token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                                // Send an error if the database fails to create a user
                            } else {
                                res.sendStatus(401)
                            }
                        })
                    // Send an error if the user already exists
                } else {
                    res.sendStatus(401)
                }
            })
        // Send an error if the request body does not have an username and password
    } else {
        res.sendStatus(401)
    }
});

//==================
//   DELETE ROUTE
//==================
router.delete('/delete/:id', isAuthenticated, (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, user) => {
        res.redirect('/')
    })
});






// Token show
router.get('/token', isAuthenticated, async (req, res) => {
    const tokenString = req.headers.authorization
    const token = tokenString.replace("Bearer ", "");
    const decoded = jwt.decode(token, config.jwtSecret)
    const User = await db.User.findById(decoded.id)
    const userReviews = await db.Review.find({ reviewer: User._id })
    res.json({
        user: User,
        reviews: userReviews
    })
})

//=======================================
//   GET USER DATA (IF USER IS LOGGED IN)
//=======================================

router.get('/:id', async (req, res) => {
    const foundUser = await User.findById(req.params.id)
    if (foundUser) {
        res.json(foundUser)
    } else {
        res.sendStatus(404)
    }
})

module.exports = router

