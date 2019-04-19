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

    // THIS CHANGES THE SCORES AND TOTAL FROM STRINGS TO INTEGERS BEFORE POSTING TO THE SERVER!!
    var temp = req.body.scores;
    for(let i = 0; i < temp.length; i++){
      req.body.scores[i] = parseInt(req.body.scores[i])
    }
    req.body.total = parseInt(req.body.total);

    // I STILL DO NOT UNDERSTAND THE NEXT TWO LINES!!!
    // I thought the .post method would just append the newFriend data (from line 116 in survey.html)
    // to the server data.  Why do I have to append it to friendsData and
    // then send it as the response?
    friendsData.push(req.body);   // add new friend to the friendsData array so it
                                  // can be used later to determine the best match
    res.json(friendsData);
  })

}

