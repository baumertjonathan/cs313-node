//database connection start
/*
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err){ 
	throw (err);
  }
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/
//database connection done

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