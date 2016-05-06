//Import dependencies
var MongoClient = require('mongodb').MongoClient;

//Global database
var db = null;

//Connect to database
exports.Connect = function(opt, callback)
{
	//Check the database status
	if(db){ return callback(null); }

	//Create the url
	var url = 'mongodb://{user}:{pass}@{host}:{port}/{db}';

	//REplace the user and password
	url = url.replace('{user}', opt.user).replace('{pass}', opt.pass);

	//Replace the host and the port
	url = url.replace('{host}', opt.host).replace('{port}', opt.port);

	//Replace the database
	url = url.replace('{db}', opt.db);

	//Check for authentication database
	if(typeof opt.auth !== 'undefined')
	{
		//Save the authentication database
		url = url + '?authSource=' + opt.auth;
	}

	//Else, connect to database
	MongoClient.connect(url, function(err, database){

		//Check for error
		if(err){ return callback(err); }

		//Save the database connection
		db = database;

		//Do the callback
		callback(null);

	});

};

//Get the database
exports.Get = function(){ return db; };

//Get a collection
exports.GetCollection = function(c){ return db.collection(c); };

//Close the connection
exports.Close = function(callback){

	//Close the connection to the database
	db.close(function(err, result){

		//Destroy the database
		db = null;

		//Do the callback
		callback(err);
		
	});

};
