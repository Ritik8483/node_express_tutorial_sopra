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
// -Nodejs is runtime environment for JS,used for creating server side and networking web applications


// JS engines
// Chrome - v8
// Firefox - spider monkey
// Safari - apple JS engine
// For ex : open terminal -> write node -> console and write [console.log('Hello') or 2+5] and enter , now JS engine will work and give us output
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
// All the request first queued in event quueue first then the goes to event lookup
// Event loop always watch whether there is any request in event queue or not after that it picks those request(First-In, First-Out (FIFO))
// Now the request pickedup can be of 2 type i.e, blocking o/p (synchronous tasks) or non-blocking o/p(asynchronous tasks).
// If it's non-blocking nodejs will process it and directly send response to client
// if it's blocking o/p it will go thread pool

// Synchronous (sync) tasks → The code waits for the task to finish before moving to the next line.
// ASync task - They don’t block the event loop.The operation is sent off, and Node.js continues running 
// other code while waiting for the result.
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











// ---------------------------------------------

//MDB compass 
//1. copy connection string after clicking on 3 dots
//



// Node
// built on top of several components that together provide a server-side environment
// V8 — Google’s JavaScript engine that parses, compiles and executes JS to native machine code.
// libuv — a C library that provides the event loop, cross-platform async I/O primitives, and a thread pool
// for operations that can’t be done non-blockingly. 
// Node core (C++ + JS bindings) — glue code that exposes OS and libuv features as JS APIs 
// For example (fs, net, http, timers, etc.).
// Node-API (N-API) — stable ABI for writing native addons in C/C++ that interoperate with Node. 
// Userland (NPM modules, your app) — the JS libraries and apps that run on top of Node.


// SUMMARY
// Node.js is a single-threaded JavaScript runtime built on V8 and libuv.
//  JavaScript code runs on the main thread while libuv and the OS handle I/O; heavy or blocking work must be
//   offloaded to worker threads, separate processes, or the libuv thread pool. The event loop and microtask queue 
//   determine callback ordering — understanding these is crucial to write high-throughput, low-latency Node apps.


// 1. Explain the Event Loop in Node.js. How does it handle asynchronous operations?
// Event Loop handles non-blocking asynchronous operations
// Node.js runs JavaScript on a single thread (main thread), but uses libuv for handling I/O in a non-blocking way.
// Libuv is a multi-platform support library, written in C used for handling asynchronous I/O.
// Timers (setTimeout, setInterval)
// Pending Callbacks
// Idle, Prepare
// Poll (I/O callbacks)
// Check (setImmediate)
// Close Callbacks
// Microtasks (Promises, process.nextTick) run between phases.
// Pitfall: CPU-heavy tasks block the loop → delays all async tasks.



// 2.How does Node.js handle concurrency with a single thread?
// Node.js uses non-blocking I/O and delegates long-running tasks 
// (file I/O, DB queries, network requests) to libuv's thread pool.
// Concurrency is achieved by
// Event loop for async callbacks
// Thread pool for CPU-intensive tasks



// 3. What is the difference between process.nextTick(), setImmediate(), and setTimeout()?
// process.nextTick() callbacks are always executed before the event loop moves to the next phase.
// Process.nextTick
// Promise is resolved
// Time function is called
// setImmediate is called



// 4. What are Streams in Node.js and their types?
// Streams are event-based interfaces for working with data that is read/written sequentially.
// Types:
// Readable – Read from source (e.g., fs.createReadStream)
// Writable – Write to destination (e.g., fs.createWriteStream)
// Duplex – Both readable & writable (e.g., TCP sockets)
// Transform – Duplex + data transformation (e.g., zlib.createGzip)


// 5. What is Cluster mode in Node.js and why is it used?
// Node.js runs on a single thread, but modern CPUs have multiple cores.
// Cluster mode (via cluster module) allows creating multiple child processes (workers) that share the same server port.
// Improves performance by handling more requests in parallel.


// 6. How to handle uncaught exceptions and unhandled promise rejections in Node.js?
// process.on('uncaughtException', err => {
//     console.error('Uncaught Exception:', err);
//     process.exit(1);
// });
// process.on('unhandledRejection', err => {
//     console.error('Unhandled Rejection:', err);
// });


// 7. How to optimize performance in Node.js applications?
// Use Streams for large data instead of reading entire file.
// Enable Gzip compression for HTTP responses.
// Use Caching (Redis, memory).
// Avoid blocking operations (use async I/O).
// Increase thread pool size for heavy I/O:


// 8. What is the difference between CommonJS and ES Modules in Node.js?
// CommonJS (require)
// Synchronous loading
// ES Modules (import)
// Asynchronous loading
// Enable ESM by adding "type": "module" in package.json.


// 9. What is Middleware in Node.js?
// Middleware is a function with signature (req, res, next) that processes requests before reaching the final handler.
// Used for logging, authentication, error handling.
// app.use((req, res, next) => {
//     console.log(`Request for ${req.url}`);
//     next();
// });


// 10. How to handle file uploads in Node.js?
// Use multer for multipart/form-data:
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.send('File uploaded');
// });



// 11. Difference between process.nextTick() and Promise.then()?
// process.nextTick() runs before any microtasks queued in Promise jobs.

// Both run before moving to the next Event Loop phase.
// process.nextTick(() => console.log('nextTick'));
// Promise.resolve().then(() => console.log('promise'));
// nextTick
// promise


// 12. Difference between setImmediate() and setTimeout(fn, 0)?
// Answer:
// setImmediate() executes after poll phase.
// setTimeout(fn, 0) executes in timers phase (after at least 1ms).



// 13.How to prevent blocking the Event Loop?
// Answer:
// Offload CPU work to Worker Threads.
// Use batching for large loops.