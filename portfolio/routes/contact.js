const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

// POST route from contact form
router.post('/contact', (req, res) => {
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    })
    const mailOpts = {
        from: req.body.first_name + ' &lt;' + req.body.email + '&gt;',
        to: GMAIL_USER,
        subject: `Message from contact form on ${req.body.first_name}`,
        text: `${req.body.first_name} ${req.body.last_name} (${req.body.email}) says: ${req.body.message}`
    }

    if (req.body && req.body.verification && req.body.verification === 'send') {
        smtpTrans.sendMail(mailOpts, (error) => {
            if (error) {
                console.log('Failed contact form attempt: ')
                console.log(mailOpts)
                res.render('contact-failure')
            } else {
                res.render('contact-success')
            }
        })
    } else {
        res.render('contact-failure')
    }
})

module.exports = router