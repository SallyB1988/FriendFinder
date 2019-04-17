// ===================================================
// Need the path package to get the correct file path for our html
// ===================================================
var path = require("path");

// ===================================================
// Routing
// ===================================================

module.exports = function(app) {
  // HTML GET Requests
  // Handles when user visits a page.

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // This weird route is so I can have a separate JS file for setting
  // up the Questions and JQuery for injecting the questions dynamically
  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.js"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // If no matching route - default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
