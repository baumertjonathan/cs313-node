const {Pool} = require("pg");
const db_url = process.env.DATABASE_URL;
const  pool = new Pool({connectionString: db_url});



function getAllFloors(){
	var test = {
		topics: [
		{id:1, name:"floor"},
		{id:2, name:"shinescore"},
		{id:3, name:"scuffscore"}
		]
	}
	return test;
};

function getFloorByName(floor){
	
	var sql = "SELECT * FROM floors;";
	
	pool.query(sql, function(err, dbResults){
		if(err){
			throw err;
		}else{
			console.log("Back from the DB with: ");
			console.log("cbResults");
		}
		
	});
	
	var result = {
		list: [
		{floor:floor, shineScore:5, scuffScore:5},
		{floor:floor, shineScore:5, scuffScore:5},
		{floor:floor, shineScore:5, scuffScore:5}
	]}
	return result;
};

function getIsATest(){
	var isATest ={isatest:true}
	return isATest;
};

function submitRating(floor, shineScore, scuffScore){
	//submit information with provided info. 
	return {result:true};
};


module.exports = {
	getAllFloors: getAllFloors, 
	getFloorByName: getFloorByName,
	getIsATest: getIsATest, 
	submitRating: submitRating
};