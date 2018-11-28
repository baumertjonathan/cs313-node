const express = require('express');
const app = express();

app.use(express.static('public'));
app.set("views", "views");
app.set("view engine", "ejs");

//database connection start
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
//database connection done

app.get("/display", function(req,res){
	console.log("display request");
	
	client.query('SELECT * FROM floors;', (err, res) => {
	if (err){ throw (err);}
	for (let row of res.rows){
		console.log(JSON.stringify(row));
	}
	client.end();
	});
	
	var floor = "Austin";
	var shine_score = "5";
	var params = {floor: floor, sr: shine_score};
	res.render("display", params);
	
});


app.listen(process.env.PORT || 3000, ()=>console.log("request made"));