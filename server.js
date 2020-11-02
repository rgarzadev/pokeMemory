// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

let db = require("./models")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("/public"));

// Routes
// // =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}); 
});
