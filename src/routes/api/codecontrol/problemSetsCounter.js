// TODO
// remove this route since it is not being used

const express = require('express');
const cors = require('cors');
const router = express.Router();
const assert = require('assert');
const codeControlApi = require('../../../validation/codeControlApi');


// enabling cors
router.all('*', cors());

// @route       GET api/codecontrol/problemSetsCounter/test
// @description test problemSetsCounter route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "problemSetsCounter works"}));

// @route       GET api/codecontrol/problemSetsCounter/update
// @description get atomic ProblemSetsNum and increment using username and apiKey [temp] request-header
//              for a new instructor, the mongodb upsert flag will create a new problemSetsCounter obj
// @access      Public
router.get('/update', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup instructor by atomic/unique username
  // retrieve instructor's _id ObjectId field and ref to problemSetsCounter's instructor_id field
  // this will reference the correct player to the correct sessionNum

  // if a problemSetsCounter obj doesn't exist yet for a new instructor,
  // the upsert flag will insert/create a new one
  db.collection('instructors').findOne({ username: req.headers.username })
  .then(instructor => {
    if (instructor != null) {

      // instructor exists so find correct problemSetsCounter ref (based on instructor_id) and increment problemSetsNum
      db.collection('problemSetsCounter').findOneAndUpdate(
        { "instructor_id": instructor._id }, // instructor._id is the instructor's unique Mongo ObjectID
        { "$inc": { "problemSetsNum": 1 } },
        { "upsert": true, "returnOriginal": false, "sort": [] }, // options
        (err, problemSetsCounter) => {
          if (err) {
            return res.status(400).json({msg: errMsg});
          } else {
            assert.equal(err, null);
            var successMsg = "session num: " + problemSetsCounter.value.problemSetsNum;
            console.log(successMsg)
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

// @route       GET api/codecontrol/problemSetsCounter/
// @description get latest/current problemSetsNum using username and apiKey [temp] request-header
//              useful for listing how many problem sets a user can choose to load from
// @access      Public
router.get('/', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve instructor's _id ObjectId field and ref to problemSetsCounter's instructor_id field
  // this will reference the correct instructor to the correct problemSetsNum
  db.collection('instructors').findOne({ username: req.headers.username })
    .then(instructor => {
      if (instructor != null) {

        // instructor exists so find sessionNum
        db.collection('problemSetsCounter').findOne({ instructor_id: instructor._id }) // player._id is the player's unique Mongo ObjectID
          .then(problemSetsCounter => {
            if (problemSetsCounter != null) {
              return res.status(200).json({msg: problemSetsCounter.problemSetsNum});
            } else {
              var errMsg = 'error: username not found';
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
