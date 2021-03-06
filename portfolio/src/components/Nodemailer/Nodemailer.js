require('dotenv').config();
const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages!");
    }
});

let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'davidjwalton2020@gmail.com',
    subject: '',
    text: ''
};

function sendMail(props) {
    mailOptions.text = props;
    transporter.sendMail(mailOptions.text, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email has been sent: " + info.response);
        }
    });
}



module.exports = sendMail;