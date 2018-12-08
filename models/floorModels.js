const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;

 console.log("DB URL: " + db_url);
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
	
	var sql = "SELECT * FROM floors";
	
	pool.query(sql, function(err, db_results) {

		if (err) {
			throw err;
		} else {
			// We got some successful results from the DB
			 console.log("Back from the DB with: ")
			 console.log(db_results);

			var results = {
					success:true,
					list:db_results.rows
				};
				
				return results;
						
		}

	});
		
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