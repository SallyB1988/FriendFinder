var friendsData = require("../data/friends.js")

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

    var temp = req.body.scores;
    for(let i = 0; i < temp.length; i++){
      req.body.scores[i] = parseInt(req.body.scores[i])
    }
    req.body.total = parseInt(req.body.total);
    friendsData.push(req.body);   // add new friend to the friendsData array so it
                                  // can be used later to determine the best match
    res.json(friendsData);
  })

}

