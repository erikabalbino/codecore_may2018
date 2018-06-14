const net = require('net');

const server = net.createServer(socket => {
	socket.on('data', data => {
		let list = `${data}`.split(','); // list = [1,2,3,4,5];
		console.log('Data from client: ' + list);
		const max = Math.max.apply(Math, list);
		// max is an integer
		// socket.write requires a buffer of bytes, or a string, NOT an integer
		// max+'' converts returns max as a string
		socket.write(`${max}`);
	});
});

server.listen(4000);
console.log('Server listening on port 4000');
