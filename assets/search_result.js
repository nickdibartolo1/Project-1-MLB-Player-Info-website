var resultContentEl = document.querySelector('#result-text');
var searchContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var searchBtnEl = document.querySelector('#search-btn');
var DATA;
// var playerName = document.getElementById("search-input");
// var formatName = document.getElementById("format-input");

function handleSearchFormSubmit(event) {
	event.preventDefault();
	//console.log("search form submit running");
	var searchInputVal = document.querySelector('#search-input').value;
	var searchInput = document.querySelector('#search-input');
	//console.log(searchInputVal)
	//hides results each time you click search

	//	searchBtnEl.addEventListener('click', handleSearchFormSubmit);
	getApi()
}

function getApi() {
	var playerName = document.getElementById("search-input").value;
	//searchBtnEl.addEventListener('click', getApi);


	var myApiUrl = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + playerName + "%25'";
	console.log(playerName);
	$.get(myApiUrl,function(data){

		console.log("success");
		console.log(data);

		$("#result-content").hide();
		$("#result-content").empty();

		var name=data.search_player_all.queryResults.row.name_first + " "+data.search_player_all.queryResults.row.name_last;
		var birthCity=data.search_player_all.queryResults.row.birth_city;
		var heightFt=data.search_player_all.queryResults.row.height_feet;
		var heightInches=data.search_player_all.queryResults.row.height_inches;
		var team=data.search_player_all.queryResults.row.team_full;
		var position=data.search_player_all.queryResults.row.position;

		$("#result-content").append(
			"<h6>Name: "+name+"</h6>"+
			"<h6>Birth City: "+birthCity+"</h6>"+
			"<h6>Height: "+heightFt+" ft "+heightInches+" inches</h6>"+
			"<h6>Team: "+team+"</h6>"+
			"<h6>Position: "+position+"</h6>"

		);

		$("#result-content").show();

	})

}

	


searchFormEl.addEventListener('submit', handleSearchFormSubmit);




//DATA.search_player_all.queryResults.row.birth_city
