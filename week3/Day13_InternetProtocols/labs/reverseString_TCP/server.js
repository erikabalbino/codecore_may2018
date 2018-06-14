const net = require('net');

// Create connection between client and server
const server = net.createServer ( connectionToClient => {
    // Receive the data from client
    connectionToClient.on('data', clientData => {
        const clientStr = clientData.toString();
        console.log(`Data received from client: ${clientStr}`);
        const reversedStr = clientStr.split("").reverse().join("");
        // Send data back to the client
        connectionToClient.write(`Response to be sent to client: ${reversedStr}`);
    });
});

server.listen(5000);
console.log('Server is up and running on port 5000');