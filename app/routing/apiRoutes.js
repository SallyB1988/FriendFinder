// ===================================================
// Load Data
// ===================================================
var friendsData = require("../data/friends.js")
// ===================================================
// Routing
// ===================================================

module.exports = function(app) {
  // API GET Requests
  // Handles when user visits a page.

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Handles when user submits a form (thus adding data to the server.)
  // When a user submits form data (a JSON object), the JSON is pushed
  // to the JavaScript array (friendsArray)
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have been
    // entered into the database or not.
    // It will do this by returning the value "true" after post has occurred.
    // This is received as 'data' in the .post function in survey.html.
    // (I don't think this is really necessary...)

    friendsData.push(req.body);   // add new friend to the friendsData array so it
                                  // can be used later to determine the best match
    res.json(true);
  })

}

