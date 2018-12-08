function submitRating(){
	var floor = $("#floors").val();
	var shineScore = $("#shineScore").val();
	var scuffScore = $("#scuffScore").val();
	var dirtScore = $("#dirtScore").val();
	var tileScore = $("#tileScore").val();
	console.log("submission button has been pressed");
	//this part is not currently working, but will hopefully be implimented in the future.
	//$.get("/submit", {floor:floor, shineScore:shineScore, scuffScore:scuffScore, dirtScore:dirtScore, tileScore:tileScore}, function(data) {
	//	console.log("submitting to the server");
		
	//})
}

function searchByFloor(){
	var floor = $("#floorSearch").val();
	console.log("Floor: " + floor);
	
	$.get("/display", {floor:floor}, function(data) {
		console.log("back from the server with: ");
		console.log(data);
		
		for(var i = 0; i < data.list.length; i++){
		var filler = data.list[i];
		$("#ulFloors").append("<li>" + filler.location + ": shine score: " + filler.shine_score + ", scuff score: " + filler.scuff_score + ", dirt score: " + filler.dirt_score + ", tile score: " + filler.tile_score +"<li>")
		}
	})
	
	
	
}