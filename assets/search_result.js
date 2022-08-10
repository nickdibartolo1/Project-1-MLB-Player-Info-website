var resultContentEl = document.querySelector('#result-text');
var searchContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var searchBtnEl = document.querySelector('#search-btn');
var DATA;


function handleSearchFormSubmit(event) {
	event.preventDefault();
	//console.log("search form submit running");
	var searchInputVal = document.querySelector('#search-input').value;
	var searchInput = document.querySelector('#search-input');
	//console.log(searchInputVal)

	//hides results each time you click search
	getApi()
}

function getApi() {
	var playerName = document.getElementById("search-input").value;
	//searchBtnEl.addEventListener('click', getApi);


	var myApiUrl = "https://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + playerName + "%25'";
	console.log(playerName);
	$.get(myApiUrl, function (data) {

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
		var weight = data.search_player_all.queryResults.row.weight;
		var birthState=data.search_player_all.queryResults.row.birth_state;
		var bats =data.search_player_all.queryResults.row.bats;
		var throws=data.search_player_all.queryResults.row.throws;
		var college=data.search_player_all.queryResults.row.college;
		var birthCountry=data.search_player_all.queryResults.row.birth_country;
		var birthDate=data.search_player_all.queryResults.row.birth_date;
		var highSchool = data.search_player_all.queryResults.row.high_school;
		var debutDate = data.search_player_all.queryResults.row.pro_debut_date
		$("#result-content").append(
			"<h4>Name: "+name+"</h4>"+
			"<h4>Birth Date: "+birthDate+"</h4>"+
			"<h4>Birth City: "+birthCity+", "+birthState+", "+birthCountry+"</h4>"+
			"<h4>High School: "+highSchool+"</h4>"+
			"<h4>College: "+college+"</h4>"+
			"<h4>Team: "+team+"</h4>"+
			"<h4>Debut Date: "+debutDate+"</h4>"+
			"<h4>Height: "+heightFt+" ft "+heightInches+" inches</h4>"+	
			"<h4>Weight: "+weight+"</h4>"+
			"<h4>Position: "+position+"</h4>"+
			"<h4>Bats: "+bats+" "+"Throws:"+" "+throws+"</h4>"

			

		);
		$("#result-content").show();

	})

}




searchFormEl.addEventListener('submit', handleSearchFormSubmit);




//DATA.search_player_all.queryResults.row.birth_city
