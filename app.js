var config = require('node-conf').load(process.env.NODE_ENV);
var commandQueue = require('mf-commandQueue')(config);

commandQueue.commandMap.restart = function(msg,cb){
	console.log('Restart requested -- it has been fun while it lasted, soon I will rise like the phoenix with new code!');
	process.exit(0);
};