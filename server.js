const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT||3000;
const floorController = require("./controllers/floorController.js");
const floorModels = require("./models/floorModels.js");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//app.set("views", "views");
//app.set("view engine", "ejs");

app.get("/dump", floorController.getFloorList);
app.get("/display", floorController.getFloorByName);
app.get("/test", floorController.doTest);
//app.get("/submission",  floorController.getSubmissionRating);
//app.post("/subission", floorController.submitRating);


app.listen(PORT, function(){
	console.log("server listening on port " + PORT);
});