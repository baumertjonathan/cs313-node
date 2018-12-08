function submitRating(){
	
	
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