var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use(express.static(__dirname + '/public'));
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/news",function(req,res){
  res.sendFile(path + "news.html");
});

router.get("/games",function(req,res){
  res.sendFile(path + "games.html");
});

router.get("/videos",function(req,res){
  res.sendFile(path + "videos.html");
});

router.get("/daily",function(req,res){
  res.sendFile(path + "daily.html");
});

router.get("/puzzles",function(req,res){
  res.sendFile(path + "puzzles.html");
});

router.get("/letters",function(req,res){
  res.sendFile(path + "letters.html");
});

router.get("/images",function(req,res){
  res.sendFile(path + "images.html");
});

router.get("/sounds",function(req,res){
  res.sendFile(path + "sounds.html");
});
router.get("/links",function(req,res){
  res.sendFile(path + "links.html");
});
router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(8999,function(){
  console.log("Live at Port 8999");
});