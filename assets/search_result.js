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
	
	


searchFormEl.addEventListener('submit', handleSearchFormSubmit);




//DATA.search_player_all.queryResults.row.birth_city
