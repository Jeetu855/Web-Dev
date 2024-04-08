const express = require("express");
const app = express(); //initialize an instance of express,calling express function which gives back app object
const bodyParser = require("body-parser"); //this module enables us to parse incoming request bodies in a middleware.
// Express.js server needs to know what type of data we are sending over network so it knows how to parse it
app.use(bodyParser.json());
const port = process.env.port || 3000; //Export PORT = 3000
/*
ECMA Script : Scripting lang. specification on which JS is based 
Guidelines and rules for scipting lang. design
JS : Scripting lang. which conforms to ECMA script specification
JS includes addtional features that are not a part of ECMA script like DOM manipulation

JS Interpreters : Chrome V8 and Firefox SpiderMonkey
Node.js : It is a runtime for JS, allows us to run JS outside the browser on or local machine
Written in C/C++
Bun : Runtime for JS as well, written in Zig

Things we can create with Node.js : CLI's, HTTP server, What is an HTTP server?
Most common protocol for Frontend to talk to backend

HTTP Server : Machine that exposes the backend to the world, we can connect to that server for our needs
Route = Path
URL is like a Contact In our phone, A contact is mapped to a phone number
URL is mapped to an IP address
RPC : Remote Procedure Call, calling a function on someone elses computer
HTTP request has :                                                HTTP Response has 
Method Path Version                                                Version StatusCode
Request Headers                                                     Response Headers
<line break>                                                        <Line  Break>
Request Body                                                        Response Data

URL -> DNS -> TCP -> Certificate Check -> Key Exchange -> Data Transfer
Why do we need anything like status codes etc : ans : its just the protocol
Express : External Library
fs already come with node but Express does not and we have to install it from the internet using npm install express
*/

//this is route handler, req -> deals with request and res -> deals with response
app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.send(`Hello World`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
