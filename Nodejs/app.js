//execution order
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

console.log("HELLO FROM NODE JS");

const name = "Tharun"
function greet(user) {
    console.log(`Hello ${user}`);
}
greet(name)

//read a file

fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error");
        return;
    }
    console.log(data);
});


fs = require("fs")
fs.writeFile("data.txt", "This is nodejs",(err) =>{
    if(err){
        console.log("Error");
        return;
    }
    console.log("File written!");
});

// fs.mkdir("test", (err) =>{
//     if (err) throw err;
// });

fs.readdir(".",(err,files) => {
    console.log(files);
}); //for reading the directory or file

fs.appendFile("data.txt", "\nNew line" ,()=>{});

//delete file
fs.unlink("data.txt",()=> {});


//streams splitting large files into chunks for reducing the memory issue

stream = fs.createReadStream("data.txt","utf-8");

stream.on("data",(chunk) =>{
    console.log(chunk);
});

stream.on("end", () =>{
    console.log("Finished");
}); //runs when reading is complete

stream.on("error",(err) =>{
    console.log(err);
}); //runs if error happens

stream = fs.createWriteStream("data.txt");
stream.write("Hello");
stream.write("World");
stream.end();

//pipe is used to connect both streams
fs.createReadStream("data.txt").pipe(fs.createWriteStream("input.txt"));

//here we can read from one file and can move the same to the other file data will flow
//automatically it will push 

//for getting file information 
import fs from "fs/promises";
const stats = await fs.stat("data.txt");
console.log(stats.size);

// await fs.access("data.txt")

// await fs.rename("new.txt","data.txt")

//copy file 
await fs.copyFile("input.txt","data.txt")

//http module in node js --> it is a built in module allows you to 
// create web servers, handle client requests, send responses

//creating simple http server

import http from "http";

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Home Page");
    }
    else if(req.url === "/about"){
        res.end("About page");
    }
    else if(req.url === "/contact"){
        res.end("contact page");
    }
    else{
        res.statusCode = 404;
        res.end("page not found");
    }
});

// server.listen(3000, () =>{
//     console.log("server running on port 3000");
// });

// //for handling http methods(get/post)
// //these are request(req)
// http.createServer((req,res) =>{
//     if(req.method == "GET"){
//         res.end("GET request received");
//     }
//     else if(req.method === "POST"){
//         res.end("POST request received");
//     }
// }).listen(3000);

//response(res)

//used to send data 
// res.write()
// res.end()

//content types 
//html --> text/html css--> text/css  js --> application/Javascript  JSON --> application/json

//for unerstanding request(req) 

// req.url 
// req.method
// req.headers 

http.createServer((req,res) =>{
    console.log(req.url);
    console.log(req.method);
    res.end("Done");
}).listen(5000);

// static files --> files that are sent as-it is to the browser
// it will be sending files like HTML, CSS, Js directly from the server to the browser based on the request url

// res,writeHead() is used to set the http response status code and headers before sending data --> it will tell the browser what im sending
// headers means extra info about response

// Express js is a lightweight web framework for nodejs used to build web servers and APIs easily and faster
// without express routing is manual , code becomes long and messy and hard to manage apis
// because using http module alone, makes routing, parsing requests, sending responses, handling headers and managing apis so here the code becomes long, messy, and hard to maintain
// express = require("express");
// app = express();

app.get("/",(req,res) =>{
    res.send("Hello world");
});
app.listen(3000); //it is like it will provide ready made tools

// express is used in apis, routing, middleware , json handling, static file serving 

// CRUD in Node js

// Setup Server

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(3001, () => {
  console.log("server running on port 3000");
});

app.post("/users",(req,res) =>{
const user = req.body;
users.push(user);
res.send("user added");
})

app.get("/users",(req,res) =>{
res.json(users);
});

//error handling in express
// express has special middleware for errors 

//proper error middleware

app.use((err,req,res,next) =>{
console.error(err.message);
res.status(500).send("server error");
});

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});