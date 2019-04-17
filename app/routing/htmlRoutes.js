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

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // If no matching route - default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}
