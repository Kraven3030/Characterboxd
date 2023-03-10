// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express');
const app = express();
require('dotenv').config();
const path = require("path")
const PORT = process.env.PORT;
const methodOverride = require('method-override');
const passport = require('./config/passport')()
const cors = require('cors');
const userCtrl = require('./controllers/users');
const reviewCtrl = require('./controllers/reviews');



// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
// Allows Cross origin
app.use(cors())
// Parse the body data
app.use(express.urlencoded({ extended: true }))
// Access to extended express library
app.use(express.json())
app.use(passport.initialize())
// Method-override allows us to interpret POST requests from the browser as another request
app.use(methodOverride('_method'));
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))

//Controllers
app.use('/users', userCtrl);
app.use('/reviews', reviewCtrl);

// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});


// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})