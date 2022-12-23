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

//==================
//   DELETE ROUTE
//==================
router.delete('/:id', (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, user) => {
        res.redirect('/')
    })
});

//=================================
//   SIGN UP ROUTE / CREATE USER
//=================================
router.post('/signup', async (req, res) => {
    if (req.body.username && req.body.password) {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
        let newUser = {
            username: req.body.username,
            password: hashPassword
        }
        User.findOne({ username: req.body.username })
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                const payload = {
                                    id: newUser.id,
                                    username: newUser.username
                                }
                                const token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})

//==================================
//   LOG IN ROUTE / FIND ONE USER
//==================================

router.post('/login', (req, res) => { 
     if (req.body.username && req.body.password) {
         User.findOne({ username: req.body.username }, async (err, user) => {
            if (err || user == null) {
                res.sendStatus(404)
            } 
            const match = await bcrypt.compare(req.body.password, user.password)
            if (match === true) {
                const payload = {id: user._id, username: user.username}
                const token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token
                })
            } else {
                res.sendStatus(401)
                
            }
        })
    } else {
        res.sendStatus(401)
    }
});


            
            
            
module.exports = router

