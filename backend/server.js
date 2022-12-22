// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const methodOverride = require('method-override');
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
// Method-override allows us to interpret POST requests from the browser as another request
app.use(methodOverride('_method'));
//Controllers
app.use('/user', userCtrl);
app.use('/review', reviewCtrl);






// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+







// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})