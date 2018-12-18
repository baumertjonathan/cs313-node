

function submitRating(){
	var floor = $("#floorSubmit").val();
	var shineScore = $("#shineScore").val();
	var scuffScore = $("#scuffScore").val();
	var dirtScore = $("#dirtScore").val();
	var tileScore = $("#tileScore").val();
	//console.log("submission button has been pressed");
	//console.log("values are: " + floor + " " + shineScore  + " " + scuffScore  + " " + dirtScore  + " " + tileScore);
	$.get("/submit", {floor:floor, shineScore:shineScore, scuffScore:scuffScore, dirtScore:dirtScore, tileScore:tileScore}, function(data) {
		//console.log("submitting to the server" + floor + " " + shineScore  + " " + scuffScore  + " " + dirtScore  + " " + tileScore);
		//console.log(floor);	
	})
}



function searchByFloor(){
	var floor = $("#floorSearch").val();
	//console.log("Floor: " + floor);
	
	$.get("/display", {floor:floor}, function(data) {
		//console.log("back from the server with: ");
		//console.log(data);
		
		for(var i = 0; i < data.list.length; i++){
		var filler = data.list[i];
		$("#ulFloors").append("<li>" + filler.location + ": shine score: " + filler.shine_score + ", scuff score: " + filler.scuff_score + ", dirt score: " + filler.dirt_score + ", tile score: " + filler.tile_score +"<li>")
		}
	})
	
	
	
}

function findAverage(){
		var floor = $("#floorSearch").val();
		//console.log("Floor for average: " + floor);
		var shineAvg = 0;
		var scuffAvg = 0;
		var dirtAvg = 0;
		var tileAvg = 0;
		
		$.get("/display", {floor:floor}, function(data) {
			//console.log("back from the server with: ");
			//console.log(data);
		
			for(var i = 0; i < data.list.length; i++){
			var filler = data.list[i];
			//console.log("ss: " + filler.shine_score);
			shineAvg += parseInt(filler.shine_score);
			scuffAvg += parseInt(filler.scuff_score);
			dirtAvg += parseInt(filler.dirt_score);
			tileAvg += parseInt(filler.tile_score);
			}
			//console.log("before devision: " + shineAvg);
			//console.log("length: " + data.list.length);
			
			shineAvg /= data.list.length;
			scuffAvg /= data.list.length;
			dirtAvg /= data.list.length;
			tileAvg /= data.list.length;
			
			
			$("#ulFloors").append("<li>" + floor + ": shine score average: " + shineAvg + ", scuff score average: " + scuffAvg + ", dirt score average: " + dirtAvg + ", tile score average: " + tileAvg +"<li>")
		
		})
}