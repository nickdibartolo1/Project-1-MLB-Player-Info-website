function getApi() {
	var playerName = "Judge"
	var myApiUrl = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='"+ playerName + "%25'"

	fetch(myApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
	  console.log(data.search_player_all.queryResults)
		
	})

}
getApi()

function hittingApi() {
	var hittingUrl = "http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='493316'"
	
	fetch(hittingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
	  console.log(data.sport_career_hitting.queryResults)
		
	})

}
hittingApi()

function pitchingApi() {
	var pitchingUrl = "http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='592789'"

	fetch(pitchingUrl)
	.then(function (response) {
		return response.json();
	  })
	  .then(function (data) {
		console.log(data)
		console.log(data.sport_career_pitching.queryResults)
		  
	  })
}
pitchingApi()