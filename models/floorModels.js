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

function getFloorByName(floor, callback){
	
	var sql = "SELECT * FROM floors WHERE location=$1::text";
	var params = [floor];
	
	pool.query(sql, params, function(err, db_results) {

		if (err) {
			throw err;
		} else {
			// We got some successful results from the DB
			 console.log("Back from the DB with: ")
			 console.log(db_results);

			var results = {
					//success:true,
					list:db_results.rows
				};
				
				callback(null, results);
						
		}

	});
		
};

function getIsATest(){
	var isATest ={isatest:true}
	return isATest;
};

function submitRating(floor, shineScore, scuffScore, dirtScore, tileScore, callback){
	var sql = "INSERT INTO floors (location, shine_score, scuff_score, dirt_score, tile_score) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text)";
	var params = [floor, shineScore, scuffScore, dirtScore, tileScore];
	pool.query(sql, params, function(err, dbResult){
		if(err){
			throw err;
		}else{
			console.log("inserted record for: ")
			console.log(floor);
			callback(null, dbResult);
		}
	});
	
	
};


module.exports = {
	getAllFloors: getAllFloors, 
	getFloorByName: getFloorByName,
	getIsATest: getIsATest, 
	submitRating: submitRating
};