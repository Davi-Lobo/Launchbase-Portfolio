const express = require('express');
const nunjucks = require('nunjucks');


const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
   express: server 
});

server.get("/", function(req, res) {
    return res.render("about");
});

server.get("/videos", function(req, res) {
    return res.render("videos");
});

server.listen(5000, function() {
    console.log('Node server is running...')
});