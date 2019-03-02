const express = require('express');
const router = express.Router();
const assert = require('assert');
const codeControlApi = require('../../../validation/codeControlApi');


// @route       GET api/stats/test
// @description test stats route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "stats works"}));

// @route       POST api/codecontrol/stats/save
// @description create/insert new stats based on username, sessionNum and apiKey query params
//              stats obj has a session_id field that references stats to a particular session
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

        // player._id is the player's unique Mongo ObjectID
        db.collection('sessions').findOne({ player_id: player._id, sessionNum: req.body.sessionNum })
          .then(session => {
            if (sessions != null) {

              // update req.body with player_id field (player._id)
              req.body.player_id = player._id
              // update req.body with session_id field (session._id)
              req.body.session_id = session._id

              // inserting new stats obj
              db.collection('stats').insertOne(req.body, function(err, res) {
                assert.equal(err, null);
                console.log("success: new stats inserted for: " + req.body.username);
                return res.status(200).json(res);
              });
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

// @route       GET api/codecontrol/stats/
// @description find all stats for the player based on username and apiKey query params
// @access      Public
router.get('/', (req, res) => {
  if (codeControlApi.isValidApiCall(req.query.apiKey)) {
    delete req.query.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to session's player_id field
  // this will reference the correct player to the correct session
  db.collection('players').findOne({ username: req.query.username })
    .then(player => {
      if (player != null) {

        // player exists so find all stats for that player
        // player._id is the player's unique Mongo ObjectID
        db.collection('stats').find({ player_id: player._id }).toArray( (err, stats) => {
          // assert.equal(err, null);
          if (err) {
            return res.status(400).json(err);
          }
          var successMsg = "Found the following stats: " + stats;
          console.log(successMsg);
          return res.status(200).json(stats)
        });
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       GET api/codecontrol/stats/load
// @description get stats based on username, sessionNum and apiKey query params
//              stats are referenced to the correct player and session
// @access      Public
router.get('/load', (req, res) => {
  if (codeControlApi.isValidApiCall(req.query.apiKey)) {
    delete req.query.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to stats's player_id field
  // also query the session_id
  // this will reference the stats to the correct player and session
  db.collection('players').findOne({ username: req.query.username })
    .then(player => {
      if (player != null) {

        // player exists
        // we have a choice here => load based on sessionNum or session_id
        db.collection('stats').findOne({ player_id: player._id, sessionNum: req.query.sessionNum })
          .then(stats => {
            if (stats != null) {
              var succesMsg = 'success: stats found for session: ' + stats.session_id;
              console.log(succesMsg);
              return res.status(200).json(stats);
            } else {
              var errMsg = 'error: stats not found';
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
