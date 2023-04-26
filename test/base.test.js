const { exec } = require('child_process');
let startServer;

before(async function () {
	startServer = exec('node mock-sfdc-server.js');
	startServer.stdout.on('data', function (data) {
		console.log(data.toString());
	});
	await sleep(1500);
});

after(async function () {
	startServer.kill();
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
