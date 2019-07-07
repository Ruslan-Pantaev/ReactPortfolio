const express = require('express');
const cors = require('cors');
const router = express.Router();
const assert = require('assert');
const bcrypt = require('bcryptjs');
const codeControlApi = require('../../../validation/codeControlApi');


// enabling cors
router.all('*', cors());

// @route       GET api/codecontrol/instructors/test
// @description test instructors route
// @access      Public
router.get('/test', cors(), (req, res) => res.json({msg: "instructors works"}));

// @route       GET api/codecontrol/instructors/findAll
// @description list all instructors using apiKey [temp] request-header
// @access      Public
router.get('/findAll', cors(), (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').find({}).toArray( (err, instructors) => {
    // assert.equal(err, null);
    if (err) {
      return res.status(400).json(err);
    }
    var successMsg = "Found the following instructors: " + instructors;
    console.log(successMsg);
    return res.status(200).json(instructors);
  });
});

// @route       GET api/codecontrol/instructors/findOne
// @description find a specific instructor using username and apiKey [temp] request-header
// @access      Public
router.get('/findOne', cors(), (req, res) => {
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
router.post('/register', cors(), (req, res) => {
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
router.post('/login', cors(), (req, res) => {
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
              return res.status(200).json(instructor);
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

// @route       GET api/codecontrol/instructors/loadAllCourses
// @description find all problem sets for the instructor using first [temp2] and last [temp3] names and apiKey [temp] request-header
// @access      Public
router.get('/loadAllCourses', cors(), (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup instructor by atomic/unique username
  // retrieve instructor's _id ObjectId field and ref to problem set's instructor_id field
  // this will reference the correct instructor to the correct problem set
  db.collection('instructors').findOne({ firstName: req.headers.temp2, lastName: req.headers.temp3 })
    .then(instructor => {
      if (instructor != null) {
        
        db.collection('lessonSets').find({ instructorUsername: instructor.username }).toArray( (err, lessonSets) => {
          // assert.equal(err, null);
          if (err) {
            return res.status(400).json(err);
          }
          var successMsg = "Found the following problem sets: " + lessonSets;
          console.log(successMsg);
          return res.status(200).json(lessonSets)
        });
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

module.exports = router;