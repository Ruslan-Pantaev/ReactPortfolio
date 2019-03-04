const express = require('express');
const router = express.Router();
const assert = require('assert');
const codeControlApi = require('../../../validation/codeControlApi');


// @route       GET api/codecontrol/sessions/test
// @description test sessions route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "sessions works"}));

// @route       POST api/codecontrol/sessions/save
// @description create/insert new session based on username and apiKey query params
// @access      Public
router.post('/save', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('players').findOne({ username: req.body.username })
    .then(player => {
      if (player != null) {
        // update player_id to correct MongoDB Bson Object
        req.body.player_id = player._id;

        // inserting new session
        db.collection('sessions').insertOne(req.body, function(err, res2) {
          assert.equal(err, null);
          console.log("success: new session inserted for: " + req.body.username);
          return res.status(200).json(res2);
        });
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       GET api/codecontrol/sessions/
// @description find all sessions for the player so that the player can choose 
//              session based on fields like 'dateTimeCreated' and 'timeElapsed'
//              using username and apiKey [temp] request-header
// @access      Public
router.get('/', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to session's player_id field
  // this will reference the correct player to the correct session
  db.collection('players').findOne({ username: req.headers.username })
    .then(player => {
      if (player != null) {
        
        // here we are finding all sessions for the player so that we can
        // display some session info like 'dateCreated' and 'length'
        // player._id is the player's unique Mongo ObjectID
        db.collection('sessions').find({ player_id: player._id }).toArray( (err, sessions) => {
          // assert.equal(err, null);
          if (err) {
            return res.status(400).json(err);
          }
          var successMsg = "Found the following sessions: " + sessions;
          console.log(successMsg);
          return res.status(200).json(sessions)
        });
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       GET api/codecontrol/sessions/load
// @description get session using username, sessionNum and apiKey [temp] request-header
//              this will allow players to load any previous sessions
// @access      Public
router.get('/load', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to session's player_id field
  // this will reference the correct player to the correct session
  db.collection('players').findOne({ username: req.headers.username })
    .then(player => {
      if (player != null) {

        // player exists so find session based on sessionNum
        // player._id is the player's unique Mongo ObjectID
        // req.query.sessionNum lets player load any session :)
        
        // we need to make a call to the latest/current session to see
        // how many sessions the user can choose from
        db.collection('sessions').findOne({ username: req.headers.username, sessionNum: req.headers.session_num })
          .then(session => {
            console.log(req.headers.session_num);
            if (session != null) {
              var succesMsg = 'success: session found for: ' + req.headers.username;
              console.log(succesMsg);
              return res.status(200).json(session);
            } else {
              var errMsg = 'error: session not found';
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
