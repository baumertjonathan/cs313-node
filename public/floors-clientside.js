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
		$("#ulFloors").append("<li>" + filler.floor + ": shine score: " + filler.shineScore + ", scuff score: " + filler.scuffScore + "<li>")
		}
	})
	
	
	
}