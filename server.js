var express = require("express");
//=================================================
// Setup Express configuration
//=================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/public",express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/public"));

// ================================================
// Router
// ================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
