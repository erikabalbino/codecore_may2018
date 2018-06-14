const net = require('net');
const readline = require('readline');

const getUserInputInterface = readline.createInterface({
input: process.stdin,
output: process.stdout
});

const connectionToServer = net.Socket();

// Connecting to a server
connectionToServer.connect(5000, 'localhost', () => {
    // Asking a question for the user
    getUserInputInterface.question('Enter something to reverse:', userInput => {
        // Sending the userInput back to the server
        connectionToServer.write(userInput);
    });
});

// receivind data from server and showing on client side the response
connectionToServer.on('data',  serverResponse => {
    console.log('The server send a response!');
    console.log(serverResponse.toString());
});
