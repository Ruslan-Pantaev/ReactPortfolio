'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const keys = require('./config')
const app = express()
const path = require('path');
const compression = require('compression');

// db config
const MongoClient = require('mongodb').MongoClient;
const mongoURI = keys.mongoURI;

// api routes
const players = require('./routes/api/codecontrol/players');
const sessionsCounter = require('./routes/api/codecontrol/sessionsCounter');
const sessions = require('./routes/api/codecontrol/sessions');
const stats = require('./routes/api/codecontrol/stats');
const instructors = require('./routes/api/codecontrol/instructors');
const problemSetsCounter = require('./routes/api/codecontrol/problemSetsCounter');
const problemSets = require('./routes/api/codecontrol/problemSets');

const PORT = process.env.PORT || 5000

let dbClient;
// connect to mongodb
// this connection will be reused by all routes
MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, client) => {
    try {
        dbClient = client;
        app.locals.db = client.db('codeControl3dDB');
        // const collection = db.collection('players');
        // app.listen(PORT, () => console.info(`REST API running on port ${PORT}`));
        console.log('Successfully connected to MongoDB');
    } catch { console.error(err) }
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(compression())

// allow cors for non-simple api responses
app.use(cors())
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// define api routes
app.use('/api/codecontrol/players', players);
app.use('/api/codecontrol/sessionsCounter', sessionsCounter);
app.use('/api/codecontrol/sessions', sessions);
app.use('/api/codecontrol/stats', stats);
app.use('/api/codecontrol/instructors', instructors);
app.use('/api/codecontrol/problemSetsCounter', problemSetsCounter);
app.use('/api/codecontrol/problemSets', problemSets);

// rpantaev.com contact form submission handler
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
                user: keys.account,
                pass: keys.password
            }
        });

        let mailOptions = {
            from: '"Contact-Portfolio" <contact@rpantaev.com>', // sender address
            to: keys.account,
            subject: 'New Message!',
            html: htmlEmail, // email body
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info.messageId);
        });
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

process.on('SIGINT', () => {
    dbClient.close();
    console.log('MongoDB session terminated')
    process.exit();
});
