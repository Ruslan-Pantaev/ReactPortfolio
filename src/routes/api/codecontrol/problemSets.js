const express = require('express');
const router = express.Router();
const assert = require('assert');

// TODO
// create http DELETE method to rm a problemSet

// @route       GET api/codecontrol/problemSets/test
// @description test problemSets route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "problemSets works"}));

// @route       POST api/codecontrol/problemSets/save
// @description create/insert new problem set based on username query param
// @access      Public
router.post('/save', (req, res) => {
  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.body.username })
    .then(instructor => {
      if (instructor != null) {

        // instructor exists so find problemSetsNum
        // instructor._id is the instructor's unique Mongo ObjectID
        db.collection('problemSetsCounter').findOne({ instructor_id: instructor._id })
          .then(problemSetsCounter => {
            if (problemSetsCounter != null) {

              // update req.body with instructor_id field (instructor._id)
              req.body.instructor_id = instructor._id
              // update req.body with problemSetsNum field (problemSetsCounter.problemSetsNum)
              req.body.problemSetsNum = problemSetsCounter.problemSetsNum

              // inserting new problem set
              db.collection('problemSets').insertOne(req.body, function(err, res) {
                assert.equal(err, null);
                console.log("success: new problem set inserted for: " + req.body.username);
                return res.status(200).json(res);
              });
            } else {
              var errMsg = 'error: problemSetsCounter does not yet exist, ' +
                'please make a call to rpantaev.com/api/problemSetsCounter/update';
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

// @route       GET api/codecontrol/problemSets/
// @description find all problem sets for the instructor based on username query param
// @access      Public
router.get('/', (req, res) => {
  const db = req.app.locals.db;

  // first lookup instructor by atomic/unique username
  // retrieve instructor's _id ObjectId field and ref to problem set's instructor_id field
  // this will reference the correct instructor to the correct problem set
  db.collection('instructors').findOne({ username: req.query.username })
    .then(instructor => {
      if (instructor != null) {
        
        // here we are finding all problem sets for the instructor
        // instructor._id is the instructor's unique Mongo ObjectID
        db.collection('problemSets').find({ instructor_id: instructor._id }).toArray( (err, problemSets) => {
          // assert.equal(err, null);
          if (err) {
            return res.status(400).json(err);
          }
          var successMsg = "Found the following problem sets: " + problemSets;
          console.log(successMsg);
          return res.status(200).json(problemSets)
        });
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       GET api/codecontrol/problemSets/load
// @description get problem set based on username and problemSetsNum query params
//              this will allow users to load any previous problem sets
// @access      Public
router.get('/load', (req, res) => {
  const db = req.app.locals.db;

  // first lookup instructor by atomic/unique username
  // retrieve instructor's _id ObjectId field and ref to problem sets's instructor_id field
  // this will reference the correct instructor to the correct problem set
  db.collection('instructors').findOne({ username: req.query.username })
    .then(instructor => {
      if (instructor != null) {

        // instructor exists so find problem set based on problemSetsNum
        // instructor._id is the instructor's unique Mongo ObjectID
        // req.query.problemSetsNum lets users load any problem set :)
        
        // we need to make a call to the latest/current problem set to see
        // how many problem sets the user can choose from
        db.collection('problemSets').findOne({ instructor_id: instructor._id, problemSetsNum: req.query.problemSetsNum })
          .then(problemSet => {
            if (problemSet != null) {
              var succesMsg = 'success: problem set found for: ' + req.query.username;
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
// @description get problem set based on username and problemSetsNum query params and delete it
// @access      Public
router.get('/delete', (req, res) => {
  const db = req.app.locals.db;

  db.collection('instructors').findOne({ username: req.query.username })
    .then(instructor => {
      if (instructor != null) {

        db.collection('problemSets').deleteOne({ instructor_id: instructor._id, sessionNum: req.query.sessionNum })
          .then(problemSet => {
            if (problemSet != null) {
              var succesMsg = 'success: problem set deleted for: ' + req.query.username;
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
