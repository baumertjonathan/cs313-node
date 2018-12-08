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
	var name= req.body.name;
	var shinescore = 5;
	var scuffscore = 5;
	var results= floorModels.submitRating(name, shineScore, scuffScore);
	res.json(results);
};

module.exports = {
	getFloorList: getFloorList,
	doTest: doTest,
	submitRating: submitRating,
	getFloorByName: getFloorByName
};