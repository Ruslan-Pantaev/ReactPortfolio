const express = require('express');
const router = express.Router();
const assert = require('assert');
const {ObjectId} = require('mongodb');
const codeControlApi = require('../../../validation/codeControlApi');


// @route       GET api/codecontrol/problemSets/test
// @description test problemSets route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "problemSets works"}));

// @route       POST api/codecontrol/problemSets/save
// @description create/insert new problem set based on username and apiKey query params
// @access      Public
router.post('/newLessonSet', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.body.instructorUsername })
    .then(instructor => {
      if (instructor != null) {

        // inserting new problem set
        db.collection('lessonSets').insertOne(req.body, function(err, res2) {
          assert.equal(err, null);
          var msg = "success: new lesson set inserted for: " + req.body.instructorUsername;
          console.log(msg);
          return res.status(200).json({msg: msg});
        });
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       POST api/codecontrol/problemSets/save
// @description create/insert new problem set based on username and apiKey query params
// @access      Public
router.post('/pushProblemSet', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.body.instructorUsername })
    .then(instructor => {
      if (instructor != null) {

        db.collection('lessonSets').findOneAndUpdate(
          { "username": req.body.instructorIsername,
            "courseSectionNum": req.body.courseSectionNum,
            "term": req.body.term
          },
          { "$push": { "problemSets": req.body } },
          { "upsert": true, "multi": true, "sort": [] }, // options
          (err, stats) => {
            if (err) {
              var errMsg = 'error: lessonSet not found';
              return res.status(400).json({msg: errMsg});
            } else {
              var successMsg = "successs: pushed a new problemSet";
              console.log(successMsg);
              return res.status(200).json({msg: successMsg});
            }
          }
        );
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       GET api/codecontrol/problemSets/
// @description find all problem sets for the instructor using username and apiKey [temp] request-header
// @access      Public
router.get('/', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup instructor by atomic/unique username
  // retrieve instructor's _id ObjectId field and ref to problem set's instructor_id field
  // this will reference the correct instructor to the correct problem set
  db.collection('instructors').findOne({ username: req.headers.temp2 })
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

// @route       GET api/codecontrol/problemSets/load
// @description get problem set based on using username, problemSetsNum and apiKey [temp] request-header
//              this will allow users to load any previous problem sets
// @access      Public
router.get('/load', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.headers.instructorUsername })
    .then(instructor => {
      if (instructor != null) {

        db.collection('lessonSets').findOne({ instructorUsername: instructor.username, courseSectionNum: req.headers.courseSectionNum })
          .then(problemSet => {
            if (problemSet != null) {
              var succesMsg = 'success: problem set found for: ' + req.headers.username;
              console.log(succesMsg);
              return res.status(200).json(problemSet);
            } else {
              var errMsg = 'error: problem set not found';
              console.log(errMsg);
              return res.status(400).json({msg: errMsg});
            }
          }).catch(err => console.log(err));
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       GET api/codecontrol/problemSets/delete
// @description get problem set using username, problemSetsNum and apiKey [temp] request-header
//              using get request since we have to look up instructor first
// @access      Public
router.get('/delete', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.headers.username })
    .then(instructor => {
      if (instructor != null) {

        db.collection('problemSets').deleteOne({ instructor_id: instructor._id, sessionNum: req.headers.sessionNum })
          .then(problemSet => {
            if (problemSet != null) {
              var succesMsg = 'success: problem set deleted for: ' + req.headers.username;
              console.log(succesMsg);
              return res.status(200).json(problemSet);
            } else {
              var errMsg = 'error: problem set not found';
              console.log(errMsg);
              return res.status(400).json({msg: errMsg});
            }
          }).catch(err => console.log(err));
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

module.exports = router;
