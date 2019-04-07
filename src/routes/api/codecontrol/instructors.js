const express = require('express');
const router = express.Router();
const assert = require('assert');
const bcrypt = require('bcryptjs');
const codeControlApi = require('../../../validation/codeControlApi');


// @route       GET api/codecontrol/instructors/test
// @description test instructors route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "instructors works"}));

// @route       GET api/codecontrol/instructors/findAll
// @description list all instructors using apiKey [temp] request-header
// @access      Public
router.get('/findAll', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').find().toArray( (err, instructors) => {
    // assert.equal(err, null);
    if (err) {
      return res.status(400).json(err);
    }
    var succesMsg = "Found the following instructors: " + instructors;
    console.log(successMsg);
    return res.status(200).json(instructors)
  });
});

// @route       GET api/codecontrol/instructors/findOne
// @description find a specific instructor using username and apiKey [temp] request-header
// @access      Public
router.get('/findOne', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.headers.username })
    .then(instructor => {
      if (instructor != null) {
        console.log('success: username found');
        console.log(instructor);
        return res.status(200).json(instructor);
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       POST api/codecontrol/instructors/register
// @description salt + hash pw & insert new instructor using instructors obj and apiKey in body
// @access      Public
router.post('/register', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // this ensures we only have unique usernames
  db.collection('instructors').findOne({ username: req.body.username })
    .then(instructor => {
      if (instructor == null) {

        // salt + hashing password in req
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            req.body.password = hash;

            // inserting new instructor
            db.collection('instructors').insertOne(req.body, function(err, res2) {
              assert.equal(err, null);
              console.log("success: new instructor inserted");
              return res.json(res2);
            });
          })
        })
      } else {
        var errMsg = 'error: username already exists';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       POST api/codecontrol/instructors/login
// @description decrypt pw & login instructor using instructors obj and apiKey in body
// @access      Public
router.post('/login', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.body.username })
    .then(instructor => {
      if (instructor != null) {
        // decrypt & validate/compare password
        bcrypt.compare(req.body.password, instructor.password)
          .then(isMatch => {
            if (isMatch) {
              var successMsg = 'success: instructor logged in';
              console.log(successMsg)
              // return res.status(200).json({msg: successMsg});
              return instructor;
            } else {
              var errMsg = 'error: password incorrect';
              console.log(errMsg);
              return res.status(400).json({msg: errMsg});
            }
          })
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

module.exports = router;