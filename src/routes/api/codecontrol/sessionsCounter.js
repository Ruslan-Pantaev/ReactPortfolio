const express = require('express');
// const cors = require('cors');
const router = express.Router();
const assert = require('assert');
const codeControlApi = require('../../../validation/codeControlApi');


// enabling cors
// router.all('*', cors());

// @route       GET api/codecontrol/sessionsCounter/test
// @description test sessionCounter route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "sessionsCounter works"}));

// @route       GET api/codecontrol/sessionsCounter/update
// @description get atomic sessionNum and increment using username and apiKey [temp] request-header
//              for a new player, the mongodb upsert flag will create a new sessionsCounter obj
// @access      Public
router.get('/update', (req, res) => {
  // console.log("req.headers: " + req.headers.temp)
  // console.log("req.query: " + req.query.temp)

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to sessionCounter's player_id field
  // this will reference the correct player to the correct sessionNum

  // if a sessionCounter obj doesn't exist yet for a new player,
  // the upsert flag will insert/create a new one
  db.collection('players').findOne({ username: req.headers.username })
  .then(player => {
    if (player != null) {

      // player exists so find correct sessionCounter ref (based on player_id) and increment sessionNum
      db.collection('sessionsCounter').findOneAndUpdate(
        { "username": req.headers.username,
          "player_id": player._id
        }, // player._id is the player's unique Mongo ObjectID
        { "$inc": { "sessionNum": 1 } },
        { "upsert": true, "returnOriginal": false, "sort": [] }, // options
        (err, sessionsCounter) => {
          if (err) {
            return res.status(400).json({msg: errMsg});
          } else {
            assert.equal(err, null);
            var successMsg = "session num: " + sessionsCounter.value.sessionNum;
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

// @route       GET api/codecontrol/sessionsCounter/
// @description get latest/current sessionNum using username and apiKey [temp] request-header
//              useful for listing how many sessions a user can choose to load from
// @access      Public
router.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // first lookup player by atomic/unique username
  // retrieve player's _id ObjectId field and ref to sessionCounter's player_id field
  // this will reference the correct player to the correct sessionNum
  db.collection('players').findOne({ username: req.headers.username })
    .then(player => {
      if (player != null) {

        // player exists so find sessionNum
        db.collection('sessionsCounter').findOne({ player_id: player._id }) // player._id is the player's unique Mongo ObjectID
          .then(sessionsCounter => {
            if (sessionsCounter != null) {
              return res.status(200).json({msg: sessionsCounter.sessionNum});
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
