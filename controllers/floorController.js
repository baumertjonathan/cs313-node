const floorModels = require("../models/floorModels.js");

function getFloorList(req, res){
		var result = floorModels.getAllFloors();
		res.json(result);
	
};

function getFloorByName(req, res){
	var floor = req.query.floor;
	floorModels.getFloorByName(floor, function(error, result){
	res.json(result);
	});
};

function getSubmissionRating(){
	res.json({submissionratinghere:true});
}

function doTest(req, res){
		console.log("THIS IS A TEST");
	var results = floorModels.getIsATest();
	res.json(results);
};

function submitRating(req,res){
	var floor = req.query.floor;
	var shineScore = req.query.shineScore; 
	var scuffScore = req.query.scuffScore;
	var dirtScore = req.query.dirtScore;
	var tileScore = req.query.tileScore;
	
	console.log("Controller receives: " + floor + " " + shineScore  + " " + scuffScore  + " " + dirtScore  + " " + tileScore);
	floorModels.submitRating(floor, shineScore, scuffScore, dirtScore, tileScore, function(req,res){;
		//res.json(results);
	});
};

module.exports = {
	getFloorList: getFloorList,
	doTest: doTest,
	submitRating: submitRating,
	getFloorByName: getFloorByName
};