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

        db.collection('sessions').findOne({ username: req.body.username, sessionNum: req.body.sessionNum })
          .then(session => {
            if (session != null) {

              // update req.body with player_id field (player._id)
              req.body.player_id = player._id
              // update req.body with session_id field (session._id)
              req.body.session_id = session._id

              // inserting new stats obj
              db.collection('gameStats').insertOne(req.body, function(err, res2) {
                // assert.equal(err, null);
                if (err) {
                  console.log(err)
                } else {
                  console.log("success: new stats inserted for: " + req.body.username);
                  return res.status(200).json(res2);
                }
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

// @route       POST api/codecontrol/stats/pushMovementEvent
// @description find player's stats obj and push an event
//              using username, sessionNum and apiKey body fields
// @access      Public
router.post('/pushMovementEvent', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('players').findOne({ username: req.body.username })
    .then(player => {
      if (player != null) {

        db.collection('gameStats').findOneAndUpdate(
          { "username": req.body.username,
            "sessionNum": req.body.sessionNum
          },
          { "$push": { "movementEvents": req.body } },
          { "upsert": false, "multi": true, "sort": [] }, // options
          (err, stats) => {
            if (err) {
              var errMsg = 'error: gameStats not found';
              return res.status(400).json({msg: errMsg});
            } else {
              var successMsg = "successs: pushed a new movement event";
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

// @route       POST api/codecontrol/stats/pushChallengeEvent
// @description find player's stats obj and push an event
//              using username, sessionNum and apiKey body fields
// @access      Public
router.post('/pushChallengeEvent', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('players').findOne({ username: req.body.username })
    .then(player => {
      if (player != null) {

        db.collection('gameStats').findOneAndUpdate(
          { "username": req.body.username,
            "sessionNum": req.body.sessionNum
          },
          { "$push": { "challengeEvents": req.body } },
          { "upsert": false, "multi": true, "sort": [] }, // options
          (err, stats) => {
            if (err) {
              var errMsg = 'error: gameStats not found';
              return res.status(400).json({msg: errMsg});
            } else {
              var successMsg = "successs: pushed a new challenge event";
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

// @route       GET api/codecontrol/stats/
// @description find all stats for the player using username and apiKey [temp] request-header
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

        // player exists so find all stats for that player
        // player._id is the player's unique Mongo ObjectID
        db.collection('gameStats').find({ player_id: player._id }).toArray( (err, stats) => {
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
// @description get stats using username, sessionNum and apiKey [temp] request-header
//              stats are referenced to the correct player and session
// @access      Public
router.get('/load', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

    // bug fix - on aws linux server, req.headers.sessionNum is undefined...
    console.log(req.headers.temp2) // username
    console.log(req.headers.temp3) // sessionNum

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to stats's player_id field
  // also query the session_id
  // this will reference the stats to the correct player and session
  db.collection('players').findOne({ username: req.headers.temp2 })
    .then(player => {
      if (player != null) {

        // player exists
        // we have a choice here => load based on sessionNum or session_id
        db.collection('gameStats').findOne({ username: req.headers.temp2, sessionNum: req.headers.temp3 })
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
