const express = require('express');
const router = express.Router();
const assert = require('assert');
const bcrypt = require('bcryptjs');
const codeControlApi = require('../../../validation/codeControlApi');

// TODO
// Create http PATCH method to add / change instructor_id field

// @route       GET api/codecontrol/players/test
// @description test players route
// @access      Public
router.get('/test', (req, res) => res.json({msg: "players works"}));

// @route       GET api/codecontrol/players/findAll
// @description list all players using apiKey [temp] request-header
// @access      Public
router.get('/findAll', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('players').find({}).toArray( (err, players) => {
    // assert.equal(err, null);
    if (err) {
      return res.status(400).json(err);
    }
    var successMsg = "Found the following players: " + players;
    console.log(successMsg);
    return res.status(200).json(players)
  });
});

// @route       GET api/codecontrol/players/findOne
// @description find a specific player using username and apiKey [temp] request-header
// @access      Public
router.get('/findOne', (req, res) => {
  if (codeControlApi.isValidApiCall(req.headers.temp)) {
    delete req.headers.temp
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('players').findOne({ username: req.headers.username })
    .then(player => {
      if (player != null) {
        console.log('success: username found');
        console.log(player);
        return res.status(200).json(player);
      } else {
        var errMsg = 'error: username not found';
        console.log(errMsg);
        return res.status(400).json({msg: errMsg});
      }
    }).catch(err => console.log(err));
});

// @route       POST api/codecontrol/players/register
// @description salt + hash pw & insert new player using player obj and apiKey in body
// @access      Public
router.post('/register', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  // this ensures we only have unique usernames
  db.collection('players').findOne({ username: req.body.username })
    .then(player => {
      if (player == null) {

        // salt + hashing password in req
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            req.body.password = hash;

            // inserting new player
            db.collection('players').insertOne(req.body, function(err, res2) {
              assert.equal(err, null);
              console.log("success: new player inserted");
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

// @route       POST api/codecontrol/players/login
// @description decrypt pw & login player using player obj and apiKey in body
// @access      Public
router.post('/login', (req, res) => {
  if (codeControlApi.isValidApiCall(req.body.apiKey)) {
    delete req.body.apiKey
  } else {
    return res.status(400).json({msg: codeControlApi.err});
  }

  const db = req.app.locals.db;

  db.collection('players').findOne({ username: req.body.username })
    .then(player => {
      if (player != null) {
        // decrypt & validate/compare password
        bcrypt.compare(req.body.password, player.password)
          .then(isMatch => {
            if (isMatch) {
              var successMsg = 'success: logged in';
              console.log(successMsg)
              return res.status(200).json(player);
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
