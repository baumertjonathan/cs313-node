var express = require("express");
var app = express();
var port = 3000;
//connecting to database
/*
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/
//database connected

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

/*
app.get("/", function(req, res) {
	console.log("Received a request for /");

	res.write("This is the root.");
	res.end();
});

app.get("/display", function(req, res){
	console.log("display called");

	var cost = 5;
	var weight = 9;

	var params = {cost: cost, weight: weight}
	res.render("display", params);
		res.end();
});

app.get("/aTest", function(req, res) {
	res.write("this is a test");
	console.log("a test has been done");
	res.end();
});



*/
app.listen(port, () => console.log("example app listening on port 3000!"))