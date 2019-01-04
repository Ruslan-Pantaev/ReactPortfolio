'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const keys = require('./config')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    console.log(req.body)

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: keys.account, // generated ethereal user
                pass: keys.password // generated ethereal password
            }
        });

        let mailOptions = {
            from: '"Contact-Portfolio" <contact@rpantaev.com>', // sender address
            to: keys.account, // list of receivers
            subject: 'New Message!', // Subject line
            // text: 'Hello world?', // plain text body
            html: htmlEmail, // html body
            // replyTo: '"Fred Foo 👻" <foo@example.com>'
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info.messageId);
        });
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})