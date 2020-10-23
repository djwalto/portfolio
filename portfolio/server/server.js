
const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer')

const app = express();
const bodyParser = require('body-parser');
const contactRoutes = require('../routes/contact');


app.use(bodyParser.urlencoded({ extended: true }))

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

app.use('/contact', contactRoutes);

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
