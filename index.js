const express = require("express");
const server = express();
const cors = require("cors");
const PORT = 4000;
const fs = require("fs");

//using cors and middleware to parse JSON body
server.use(cors());
server.use(express.json()); //body parser

//Simple api to check
// server.get("/",(req,res)=>{
//     res.send("All good")
// })

//api logics with JSON data and W/O mvc approch
const jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// console.log("jsonData",jsonData);

server.get("/", (req, res) => {
  res.status(200).send({ success: true, data: jsonData });
});

server.post("/product", (req, res) => {
  const payload = req.body;
  jsonData.products.push(payload);
  res.status(200).send({ success: "true" });
  console.log("payload", payload);
});

server.delete("/:id", (req, res) => {
  const payload = req.params;
  console.log("payload", payload.id);
  const index = jsonData.products.findIndex((item) => item.id === payload.id);
  jsonData.products.splice(index, 1);
  res.status(200).send({ success: true });
});

server.put("/product", (req, res) => {
  const payload = req.body;
  const productIndex = jsonData.products.findIndex(
    (item) => item.id === payload.id
  );
  jsonData.products.splice(productIndex, 1, { ...payload });
  res.status(200).send({ success: true });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// ---------------------------------------------NODE Concepts----------------------------------------
// -Nodejs is runtime environment for JS

// JS engines
// Chrome - v8
// Firefox - spider monkey
// Safari - apple JS engine
// For ex : open terminal -> console and write [console.log('Hello') or 2+5] and enter , now JS engine will work and give us output
//CMD : if we try same in cmd we see error as there is no JS engine but after writing [node] it behaves same
// So we see that JS is also working outside the browser on CMD terminal as well with the help of Nodejs runtime env

// Note : We don't get window or alert in nodejs
// because alert is a part of window api and it opens a modal dialog in browser UI but in nodejs there is no UI to show popup.
// Browser runtime : has DOM and window apis
// Nodejs : has fs apis,process apis and networking tools

// hello.js
// -> node hello.js or node hello will run hello file on js

// Math.js
// Import export modules logic

// File.js      //fs

// How NodeJS works?
// All the request first queued in event quuesue first then the goes to event lookup
// Event loop always watch whether there is any request in event quesue or not after that it picks those request(FIFA)
// Now the request pickedup can be of 2 type i.e, blocking o/p (synchronous tasks) or non-blocking o/p(asynchronous tasks).
// If it's non-blocking nodejs will process it and directly send response to client
// if it's blocking o/p it will go thread pool

// Synchronous (sync) tasks → The code waits for the task to finish before moving to the next line.
// ASync task - They don’t block the event loop.The operation is sent off, and Node.js continues running other code while waiting for the result.
// EXAMPLE : refer to file.js and read file with consoles
// Thread : Thread is nothing but a worker
// thread pool is a set of background threads maintained by libuv to handle blocking operations off the main event loop
// it runs blocking tasks in parallel ,Once the work is complete, the results are sent back to the event loop via a callback.
// Default size = 4 threads (UV_THREADPOOL_SIZE = 4). O/P like fs,DNS etc uses thread pool
// We can increase the size in respect to the no of CPU cores if 4 core then 4 if 8 then 8
// Can be find by console.log(os.cpus().length) example in file.js

// HOW A URL WORKS?
// https://wwww.ritikchauhan.dev/
// https - secure protocol (req and res are encypted uses SSL certificate)
// wwww.ritikchauhan.dev - user friendly name of IP address of my server

//REQUEST METHOD
// GET,POST,PUT,PATCH,DELETE

//REST API's( REpresentational State Transfer API)
// REST APIs work by sending requests and receiving responses, typically in JSON format, between the client and server.
// Client-Server Architecture : The client (e.g., a mobile app, web browser) and server (e.g., a web service, database) are independent of each other.
// Statelessness:Each request from the client to the server must contain all the information necessary to understand the request. The server does not store any client context between requests.
// Uniform Interface:there should be a consistent and standardized way for clients to interact with server using standard HTTP methods.
// Cacheable: Responses from the server can be explicitly marked as cacheable or non-cacheable to improve performance.

// REQUEST HEADER
// It represent the meta data associated with API request and response.
// Carry info for the request and response body.
