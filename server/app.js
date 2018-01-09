"use strict";
var express = require("express");
var bodyparser = require("body-parser");
var passport = require("passport");
require("./strategies/google.strategy");
var app = require("express")();
var cors = require("cors");
app.use(cors());
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  next();
});
var path = require("path");
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "../dist"));
// app.get('/', function(req, res) {
//     //res.json("In Home page");
//     res.sendFile(path.join(__dirname,'../dist/index.html')); // load the single view file (angular will handle the page changes on the front-end)
// });
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [

      "https://www.googleapis.com/auth/plus.me",
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read",
    ]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    console.log(`user data is ${JSON.stringify(req.user)}`);
    console.log("after call back");
    res.send("In Home");
    // Successful authentication, redirect home.
    //res.redirect('/dashboard');
  }
);
app.get(
  "/auth/facebook",
  passport.authenticate('facebook',{authType: 'rerequest'}));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    //console.log(req.user);
    res.send("In Home");
    // Successful authentication, redirect home.
    //res.redirect('/dashboard');
  }
);

app.listen(3000, (req, res) => {
  console.log(`Server started on port 3000`);
});
