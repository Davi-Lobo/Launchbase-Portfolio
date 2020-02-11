const express = require('express');
const nunjucks = require('nunjucks');

const videos = require("./data");

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
   express: server 
});

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/42360847?s=460&v=4",
        name: "Davi Lobo",
        role: "Web Developer",
        bio: "Web developer at Bleez E-commerce and Computer Science student at IFCE, Javascript, Node, React and R. Native in a near future.",
        bio2: "In my free time, I also like to detonate on Guitar Hero.",
        links: [
            { name: "Github", url: "https://github.com/Davi-Lobo"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/davi-lobo-gomes/"},
        ],
    }
    return res.render("about", { about });
});

server.get("/videos", function(req, res) {
    return res.render("videos", { items: videos });
});

server.get("/video", function(req, res) {
    const id = req.query.id;

    const video = videos.find(function(video) {
        return video.id == id;
    });

    if(!video) {
        return res.send("Video not found!");
    }

    return res.render("video", {item: video});
});

server.listen(5000, function() {
    console.log('Node server is running...')
});