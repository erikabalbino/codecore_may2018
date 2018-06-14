const express = require("express");
const morgan = require("morgan");
const app = express();

// This configures our express app to "ejs" to
// render its views (the HTML it responds with.)
app.set("view engine", "ejs");

// Calling "morgan" returns a middleware function that
// we pass as a argument to app.use(). Everytime
// a request will be made to our this middleware function
// will be called.
app.use(morgan("dev"));

// URL http://localhost:4545/hello_world
// scheme  | host     | port | path

// The "scheme" identifies the protocol being used.
// Typically, HTTP or HTTPS, but could be SSH, FTP, TCP, etc.

// The "host" identifies the domain or IP that is running
// the server.

// The "path" which identifies the specific resource
// a client makes a request to.

// The following method creates a "route" wich a callback
// that responds to a request.
// The tells our app to respond to request at the path
// "/hello_world" with the "Hello, World!".

// The first argument of app.get() is a path written as
// a string. The second argument is called that must
// complete a response to the client.
app.get("/hello_world", (request, response) => {
    // The "request" argument is an object that represents
    // the request being made by the client. It contains
    // information about the client and everything the client
    // is asking for.
  
    // The "response" argument is an object that represents
    // the server's reply to the client. Through the course
    // of a express app we will build the response then
    // finally send it.
    response.send("Hello, World!");
});

app.get("/", (request, response) => {
    // `response.render(<ejs-filename>)` is used to
    // render an template from the "views/" directory.
    // Replace <ejs-filename> with a path to a file
    // beginning after the "views/" directory ignoring
    // the file extension.

    // The call below is looking for a file at
    // `./views/welcome.ejs`
    response.render("Welcome")
});

// "/survey" is the URL path to get this route.
app.get("/survey", (request, response) => {
    // To make use of query string data, access with the query
    // property on the request object. Express will have converted to
    // a JavaScript object.
    console.log("Query string:", request.query);
    // "survey" in render() is the EXACT name of file inside of
    // "views/" without the extension (i.e. .ejs).
    response.render("survey");
});

// .../survey?fullName=Steve&timeOfDay=Morning&colour=%23942192
//     path  | query string

// A "query" is a way to represent in a url using the
// URL Encoding format.
// Following a url's path a query beings with "?".
// It is followed by key's and value's that correspong to
// the input's name and value respectively when form is submitted.
// ?[key]=[value]&[key]=[value]&[key]=[value]

app.get("/survey/results", (request, response) => {
    // Use response.send() with variables to check to display in the
    // browser as JSON. Here we use to display the contents
    // of `request.query`.
    // response.send(request.query);
  
    const fullName = request.query.fullName;
    const timeOfDay = request.query.timeOfDay;
    const color = request.query.color;
  
    // (optional) `response.render` can take an object as
    // a second argument. All property-value pairs of that
    // object will become variables named after the property
    // inside of the template's ejs file.
    response.render("surveyResults", {
      fullName: fullName,
      timeOfDay: timeOfDay,
      color: color
    });
});

const PORT = 4545;
const DOMAIN = "localhost"; //127.0.0.1
app.listen(PORT, DOMAIN, () => {
    // app.listen() takes an optional third argument
    // which is callback that will called once the
    // server is ready to accept requests.
    console.log(`💻 Server is listening on http://${DOMAIN}:${PORT}`);
    
})