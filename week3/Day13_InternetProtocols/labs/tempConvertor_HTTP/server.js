const http = require('http');
const url = require('url');

const server = http.createServer( (request, response) => {
    //Geting params from client(web browser)
    const params = url.parse(request.url, true).query;
    const fTemp = parseInt(params.temp);
    const cTemp = Math.round((fTemp - 32) * 5/9);
    let color = 'red';
    if (cTemp < 10) {
        color = 'blue'
    }
    //Send response to the client
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<!DOCTYPE html>
    <html>
        <head>
            <title>HTTP server</title>
            <style>
             h1 {
                 color: ${color};
             }
            </style>
        </head>
        <body>
            <h1>${params.temp}&#8457 is ${cTemp}&#8451</h1>
        </body>
    </html>
    `);
    //Ending the responsee from server to client
    response.end();
});

// function convert(data) {
//     return Math.round((data - 32) * 5/9) ;
// }

server.listen(4000);
console.log('HTTP is up and running on port 4000');