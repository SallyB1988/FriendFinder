// ===================================================
// Need the path package to get the correct file path for our html
// ===================================================
var path = require("path");

// ===================================================
// Routing
// ===================================================

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // Route to access js file containing questions.
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
