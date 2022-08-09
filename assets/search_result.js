var resultTextEl = document.querySelector('#result-text');
var searchContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var searchBtnEl = document.querySelector('#search-btn');
// var playerName = document.getElementById("search-input");
// var formatName = document.getElementById("format-input");
console.log(searchFormEl)
function handleSearchFormSubmit(event) {
	event.preventDefault();
	console.log("search form submit running");
	var searchInputVal = document.querySelector('#search-input').value;
	var searchInput = document.querySelector('#search-input');
	console.log(searchInputVal)


	//	searchBtnEl.addEventListener('click', handleSearchFormSubmit);
	getApi()
}

function getApi() {
	var playerName = document.getElementById("search-input").value;
	//searchBtnEl.addEventListener('click', getApi);


	var myApiUrl = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + playerName + "%25'"
	console.log(playerName)
	
	fetch(myApiUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data.search_player_all.queryResults)

		})
		.then(function (locRes) {
			// write query to page so user knows what they are viewing
			resultTextEl.textContent = locRes.search.query;

			console.log(locRes);

			if (!locRes.results.length) {
				console.log('No results found!');
				resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
			} else {
				resultContentEl.textContent = '';
				for (var i = 0; i < locRes.results.length; i++) {
					printResults(locRes.results[i]);
				}
			}
		})
		.catch(function (error) {
			console.error(error);
		});


}


// function hittingApi() {
// 	var hittingUrl = "http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='493316'"


// 	fetch(hittingUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data.sport_career_hitting.queryResults)

// 		})

// }
// // hittingApi()

// function pitchingApi() {
// 	var pitchingUrl = "http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='592789'"

// 	fetch(pitchingUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data.sport_career_pitching.queryResults)

// 		})
// }
// pitchingApi()

function printResults(resultObj) {
	console.log(resultObj);

	// set up `<div>` to hold result content
	var resultCard = document.createElement('div');
	resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

	var resultBody = document.createElement('div');
	resultBody.classList.add('card-body');
	resultCard.append(resultBody);

	var titleEl = document.createElement('h3');
	titleEl.textContent = resultObj.title;

	var bodyContentEl = document.createElement('p');
	bodyContentEl.innerHTML =
		'<strong>Date:</strong> ' + resultObj.date + '<br/>';

	if (resultObj.subject) {
		bodyContentEl.innerHTML +=
			'<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
	} else {
		bodyContentEl.innerHTML +=
			'<strong>Subjects:</strong> No subject for this entry.';
	}

	if (resultObj.description) {
		bodyContentEl.innerHTML +=
			'<strong>Description:</strong> ' + resultObj.description[0];
	} else {
		bodyContentEl.innerHTML +=
			'<strong>Description:</strong>  No description for this entry.';
	}

	var linkButtonEl = document.createElement('a');
	linkButtonEl.textContent = 'Read More';
	linkButtonEl.setAttribute('href', resultObj.url);
	linkButtonEl.classList.add('btn', 'btn-dark');

	resultBody.append(titleEl, bodyContentEl, linkButtonEl);

	resultContentEl.append(resultCard);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);