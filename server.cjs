const express = require('express');
const https = require('https');
const fs = require( 'fs');
const  commandLineArgs = require( 'command-line-args');

const api = require('./api-modules/api.cjs');


let app = express();
app.use(express.static(__dirname));


/**
 * @type CommandOptions
 * @param {port} string port
 * 
 */
const commandOptions = [
  { name: 'port', alias: 'p', defaultValue: '50021'}
];

/**
 * @type CommandOptions
 */
const options = commandLineArgs(commandOptions);


let server;

app.get('/afterschool/api/v1/default', (req, res) => {
	res.send({success: 'default works'});
});


// const apiSettings = {
//   get: [
//     {
//       path: '/afterschool/api/v1/student/:id',
//       operation: (req, res) => mainOp
//     },
//     {
//       path: '/afterschool/api/v1/students/:range',
//       operation: (req, res) => res.send({success: 'students'})
//     }

//   ],
//   post: [

//   ]
// }

api.apiSettings.get.forEach((op) => {
	// console.log('what is op ', op)
	app.get(op.path, op.operation);
});

	server = https.createServer({
		key: fs.readFileSync(__dirname + '/key.pem'),
		cert: fs.readFileSync(__dirname + '/cert.pem')
	}, app)
	.listen(options.port || 52121, function() {
		const host = server.address().address;
		console.log('api running on https://%s:%s', 'localhost', server.address().port);
	});
// }

// createServer(app);

// module.exports = { app, createServer };