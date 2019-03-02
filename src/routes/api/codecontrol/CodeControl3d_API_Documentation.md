# Code Control 3D - API Documentation

### Overview
This API's endpoint is https://rpantaev.com/api/codecontrol. It handles all types of cool persistent data for the educational programming 3D game 'Code Control'.

The backend runs on an AWS EC2 Linux 16.04 t2.medium instance. It is built with Node.js and MongoDB. NGINX handles server-side routing over a secure https connection.

  - AWS EC2 Linux 16.04 t2.medium instance
  - Node.js
  - MongoDB
  - NGINX

### Notes
 - Passwords are not stored in plain text on our database. They are salted and hashed using the bcrypt hashing function (https://en.wikipedia.org/wiki/Bcrypt).
 - All API routes are PUBLIC but the database is securely username and password protected with only the minimum required privileges granted. All calls (except /test), are apiKey validated as well.

### Authors
> Inspired by the original 2D Code Control project.

(In alphabetical order): Kwan Holloway, Devorah Kletenik, Ruslan Pantaev (Lead Dev), Deborah Sturm, and Mike Williams


---

### API Routes
- players
  - @route       GET api/codecontrol/players/test
  
    @description test players route
    
    @access      Public

  - @route       GET api/codecontrol/players/findAll
  
    @description list all players using apiKey query param
    
    @access      Public

  - @route       GET api/codecontrol/players/findOne
  
    @description find specific player using username and apiKey query params
    
    @access      Public

  - @route       POST api/codecontrol/players/register
  
    @description salt + hash pw & insert new player using player obj and apiKey in body
    
    @access      Public

  - @route       POST api/codecontrol/players/login
  
    @description decrypt pw & login player using player obj and apiKey in body
    
    @access      Public

- sessionsCounter
  - @route       GET api/codecontrol/sessionsCounter/test
  
    @description test sessionsCounter route using apiKey query param
    
    @access      Public

  - @route       GET api/codecontrol/sessionsCounter/update
  
    @description get atomic sessionNum and increment using username and apiKey query params
    for a new player, the mongodb upsert flag will create a new sessionsCounter obj
    
    @access      Public

  - @route       GET api/codecontrol/sessionsCounter/
  
    @description get latest/current sessionNum using username and apiKey query params
    useful for listing how many sessions a user can choose to load from
    
    @access      Public

- sessions
  - @route       GET api/codecontrol/sessions/test
  
    @description test sessions route
    
    @access      Public

  - @route       POST api/codecontrol/sessions/save
  
    @description create/insert new session based on username and apiKey query params
    
    @access      Public

  - @route       GET api/codecontrol/sessions/
  
    @description find all sessions for the player so that the player can choose 
    session based on fields like 'dateTimeCreated' and 'timeElapsed'
    based on username and apiKey query params
    
    @access      Public

  - @route       GET api/codecontrol/sessions/load
  
    @description get session based on username, sessionNum and apiKey query params
    this will allow players to load any previous sessions
    
    @access      Public
 
- stats
  - @route       GET api/codecontrol/stats/test
  
    @description test stats route
    
    @access      Public

  - @route       POST api/codecontrol/stats/save
  
    @description create/insert new stats based on username, sessionNum and apiKey query params
    stats obj has a session_id field that references stats to a particular session
    
    @access      Public

  - @route       GET api/codecontrol/stats/
  
    @description find all stats for the player based on username and apiKey query params
    
    @access      Public

  - @route       GET api/codecontrol/stats/load
  
    @description get stats based on username, sessionNum and apiKey query params
    stats are referenced to the correct player and session
    
    @access      Public

- instructors
  - @route       GET api/codecontrol/instructors/test
  
    @description test instructors route
    
    @access      Public

  - @route       GET api/codecontrol/instructors/findAll
  
    @description list all instructors using apiKey query param
    
    @access      Public

  - @route       GET api/codecontrol/instructors/findOne
  
    @description find a specific instructor using username and apiKey query params
    
    @access      Public

  - @route       POST api/codecontrol/instructors/register
  
    @description salt + hash pw & insert new instructor using instructors obj and apiKey in body
    
    @access      Public

  - @route       POST api/codecontrol/instructors/login
  
    @description decrypt pw & login instructor using instructors obj and apiKey in body
    
    @access      Public

- problemSetsCounter
  - @route       GET api/codecontrol/problemSetsCounter/test
  
    @description test problemSetsCounter route
    
    @access      Public

  - @route       GET api/codecontrol/problemSetsCounter/update
  
    @description get atomic problemSetsNum and increment using username and apiKey query params
    for a new instructor, the mongodb upsert flag will create a new problemSetsCounter obj
    
    @access      Public

  - @route       GET api/codecontrol/problemSetsCounter/
  
    @description get latest/current problemSetsNum using username and apiKey query params
    useful for listing how many problem sets a user can choose to load from
    
    @access      Public

- problemSets
  - @route       GET api/codecontrol/problemSets/test
  
    @description test problemSets route
    
    @access      Public

  - @route       POST api/codecontrol/problemSets/save
  
    @description create/insert new problem set based on username and apiKey query params
    
    @access      Public

  - @route       GET api/codecontrol/problemSets/
  
    @description find all problem sets for the instructor based on username and apiKey query params
    
    @access      Public

  - @route       GET api/codecontrol/problemSets/load
  
    @description get problem set based on username, problemSetsNum and apiKey query params
                 this will allow users to load any previous problem sets
		 
    @access      Public

  - @route       GET api/codecontrol/problemSets/delete
  
    @description get problem set based on username, problemSetsNum and apiKey query params and delete it
                 using get request since we have to look up instructor first
		 
    @access      Public



### players Schema

```sh
{
	"_id"               : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"dateTimeCreated"   : DateTime,
	"firstName" : "first name value",
	"lastName"  : "last name value",
	"gender"    : "prefer not to say | m | f | other(string)",
	"age"       : "prefer not to say | (int)",
	"collegeName"          : "college name value | n/a",
	"collegeMajor"         : "college major value | n/a",
	"courseYear"           : "course year value | graduate | phD | n/a",
	"courseSectionNumber"  : "course section and number value | n/a",
	"instructorFullName"  : "course instructor full name value | n/a",
	"instructor_id"        : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx")  ref to instructor,
	"username" : "username value [REQUIRED]",
	"password" : "$2a$10$/HEaqmhFpn/5pkhRoH2g5.G4onXXm.UkuUbhNb45yYv8vRFh7jZCi [REQUIRED]"
}
```

### sessionsCounter Schema

```sh
{
	"_id"        : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"player_id"  : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx") ref to player [REQUIRED],
	"sessionNum" : "(int) initialized to zero and atomically incremented by one each session [REQUIRED]"
}
```

### sessions Schema

```sh
{
	"_id"             : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"player_id"       : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx") ref to player [REQUIRED],
	"sessionNum"      : "(int) updated from sessionsCounter collection upon new sessions [REQUIRED]",
	"dateTimeCreated" : DateTime,
	"fxVolume"        : (float),
	"musicVolume"     : (float),
	"position" : {
		playerTransformPositionX : (float),
		playerTransformPositionY : (float),
		playerTransformPositionZ : (float)
	}
}
```

### stats Schema

```sh
{
	"_id"             : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"player_id"       : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx") ref to player [REQUIRED],
	"session_id"      : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx") ref to session [REQUIRED],
	"sessionNum"      : "(int) [REQUIRED]",
	"dateTimeCreated" : DateTime,
	"timeElapsed"     : (float),
	"score"           : (int),
	"challengesTotal"     : (int),
	"challengesComplete"  : (int),
	"challengesRemaining" : (int),
	"challengesRemaining" : (int),
	"challengeEvents" : [
		{ "event"   : (what type of stat is this? Ex: "IDE"),
			"action" : (what did the player do? Ex: "Run Code", "Ask for help"),
			"value"  : (string) | (Number) | n/a
		}
	],
	"movementEvents" : [
		{ "event"   : (what type of stat is this? Ex: "Player died"),
			"action" : (what did the player do? Ex: "Jump", "Turn Left"),
			"value"  : (string) | (Number) | n/a
		}
	]
}
```

### instructors Schema

```sh
{
	"_id"             : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"dateTimeCreated" : DateTime,
	"firstName" : "first name value",
	"lastName"  : "last name value",
	"gender"    : "prefer not to say | m | f | other(string)",
	"age"       : "prefer not to say | (int)",
	"collegeName"         : "college name value | n/a",
	"collegeDept"         : "college dept value | n/a",
	"courseLevel"         : "undergraduate | graduate | phD | n/a",
	"courseSectionNumber" : "course section and number value | n/a",
	"username" : "username value [REQUIRED]",
	"password" : "$2a$10$/HEaqmhFpn/5pkhRoH2g5.G4onXXm.UkuUbhNb45yYv8vRFh7jZCi [REQUIRED]"
}
```

### problemSetsCounter Schema

```sh
{
	"_id"            : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"instructor_id"  : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx") ref to player [REQUIRED],
	"problemSetsNum" : "(int) initialized to zero and atomically incremented by one each session [REQUIRED]"
}
```

### problemSets Schema

```sh
{
	"_id"             : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx"),
	"instructor_id"   : ObjectId("xxxxxxxxxxxxxxxxxxxxxxxx") ref to instructor [REQUIRED],
	"problemSetsNum"  : "(int) updated from problemSetsCounter collection upon new problem sets [REQUIRED]",
	"dateTimeCreated" : DateTime,
	"TODO"            : (?)
}
```


### Usage

At the moment, these steps are for player registration, saving, loading and stats.
The dynamic problem sets / challenges API is complete, but needs further thought on implementation of schema.

| Step | API Call | Params |
| ------ | ------ | ------ |
| Register, Play, Save | | |
| 1 | https://rpantaev.com/api/codecontrol/players/register | POST x-www-form-urlencoded Body [apiKey, username, password] |
| 2 | https://rpantaev.com/api/codecontrol/sessionsCounter/update | GET key-value pairs Header [apiKey, username] |
| 3 | https://rpantaev.com/api/codecontrol/sessions/save | POST x-www-form-urlencoded Body [apiKey, username] **call to sessionsCounter for sessionNum made internally |
| 4 | https://rpantaev.com/api/codecontrol/sessionsCounter | GET key-value pairs Header [apiKey, username] **this will give you your latest/current sessionNum to pass to step 5 |
| 5 | https://rpantaev.com/api/codecontrol/stats/save | POST x-www-form-urlencoded Body [apiKey, username, sessionNum] |
| Log In, Load | | |
| 1 | https://rpantaev.com/api/codecontrol/players/login | POST x-www-form-urlencoded Body [apiKey, username, password] |
| 2 | https://rpantaev.com/api/codecontrol/sessionsCounter | GET key-value pairs Header [apiKey, username] **this will give you your latest/current sessionNum, from which you can specify the range of available sessions and stats to load |
| 3 | https://rpantaev.com/api/codecontrol/sessions/load | GET key-value pairs Header [apiKey, username, sessionNum] |
| 4 | https://rpantaev.com/api/codecontrol/stats/load | GET key-value pairs Header [apiKey, username, sessionNum] |
---

### Development

Want to contribute? Great!

This is a CUNY Brooklyn College Project with some funding from SIGCSE.
Reach out to kletenik@sci.brooklyn.cuny.edu for more info.

### Updates
**2019-3-2**
- update authors
- protect all routes/calls with a secret apiKey

**2019-2-27**
- init

License
----

MIT
