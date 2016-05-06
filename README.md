# mongoware

[![npm](https://img.shields.io/npm/v/mongoware.svg?style=flat-square)](https://www.npmjs.com/package/mongoware)
[![npm](https://img.shields.io/npm/dt/mongoware.svg?style=flat-square)](https://www.npmjs.com/package/mongoware)

A simple MongoDB middleware

## Installation

Use [NPM](https://npmjs.com) for install **mongoware** on your project:

```
npm install mongoware
```

## Usage

First, you must import **mongoware** on your project:

```javascript
//Import mongoware
var db = require('mongoware');
```

### db.Connect(options, callback)

Use the `Connect` method to connect to a MongoDB database. You must provide an object with the following elements:

- `user`: username of the mongodb database.
- `pass`: password of the mongodb database.
- `host`: mongodb host. For local hosts, use `localhost`.
- `port`: mongodb port.
- `db`: database name.
- `auth` (optionally): authentication database name.

The `callback` argument is a function that returns an error if something wrong occurs. If all is ok, it will return `null`.

Example of use:

```javascript
//Connect to the database
db.Connect({ user: 'my-user', pass: 'my-pass', host: 'localhost', port: 27017, db: 'testdb' }, function(err){

	//Check for an error
	if(err)
	{
		//Something wrong occurs
	}

	//All done, continue!

});
```

### db.Get()

Return the database.

### db.GetCollection(c)

Return a collection.

### db.Close(callback)

Close the connection to the database.


## License

Under the [MIT LICENSE](LICENSE).
