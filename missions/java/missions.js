// JavaScript Document
/**/
const baseUrl = "https://api.spacexdata.com/v3/launches/upcoming";


fetch(baseUrl)
.then(function (response) {
	return response.json();
})
.then(function(json) {
	displayUpcomingMissions(json);
})
.catch(function(error) {
	console.log(error);
});

function displayUpcomingMissions(missions) {
	
	const missionsContainer = document.querySelector(".main-container2");
	
	let html = "";
	
	for (let i = 0; i < missions.length; i++) {
		html += `<div class="mission-card">
			<h5>${missions[i].mission_name}</h5>
<p><span>Rocket Name</span> ${missions[i].rocket.rocket_name}</p>
			<p><span>Launch Date</span> ${missions[i].launch_date_local}</p>
<p><span>Launch Location</span> ${missions[i].launch_site.site_name}</p>
<p><span>Flight Number</span> ${missions[i].flight_number}</p>	
<a class="card-link" href="${missions[i].links.reddit_campaign}">More Info</a>
		</div>`
	}
	missionsContainer.innerHTML = html;
	
}



const baseUrl2 = "https://api.spacexdata.com/v3/launches/past";


fetch(baseUrl2)
.then(function (response) {
	return response.json();
})
.then(function(json) {
	displayPastMissions(json);
})
.catch(function(error) {
	console.log(error);
});


function displayPastMissions(missions) {
	
	
	const missionsContainer = document.querySelector(".main-container4");
	
	let html = "";
	
	for (let i = 0; i < missions.length; i++) {
		html += `<div class="mission-card">
			<h5>${missions[i].mission_name}</h5>
<p><span>Rocket Name</span> ${missions[i].rocket.rocket_name}</p>
			<p><span>Launch Date</span> ${missions[i].launch_date_local}</p>
<p><span>Launch Location</span> ${missions[i].launch_site.site_name}</p>
<p><span>Flight Number</span> ${missions[i].flight_number}</p>	
<a class="card-link" href="${missions[i].links.reddit_campaign}">More Info</a>
		</div>`
	}
	missionsContainer.innerHTML = html;
}



const nextUrl = "https://api.spacexdata.com/v3/launches/next";


fetch(nextUrl)
.then(function (response) {
	return response.json();
})
.then(function(json) {
displayNextMission(json);
})
.catch(function(error) {
	console.log(error);
})

function displayNextMission(json) {
	console.dir(json);
	const missionResults = json;
	
	const name = document.querySelector("h5");
	name.innerHTML = missionResults.mission_name;
	const rocket = document.querySelector(".next1");
	rocket.innerHTML = missionResults.rocket.rocket_name;
	const flightNumber = document.querySelector(".next2");
	flightNumber.innerHTML = missionResults.flight_number;
	const launchDate = document.querySelector(".next3");
	launchDate.innerHTML = missionResults.launch_date_local;
	const launchLocation = document.querySelector(".next4");
	launchLocation.innerHTML = missionResults.launch_site.site_name_long;
	const details = document.querySelector(".next5");
	details.innerHTML = missionResults.details;
	
}



/*
	function nextLaunch(missions) {
		let nextHtml `<div class="next-mission-container">
			<h5>${missions[i].mission_name}</h5>
			<div class="next-img"><img class="rocket-ship" alt="Rocket Ship" src="../../imgs/17024507155_f0075ec7e5_k.jpg"></div>
			<div class="next-mission-col">
			<p><span>Location</span> ${missions[i].rocket.rocket_name}</p>
			<p><span>Location</span> ${missions[i].launch_date_local}</p>
			<p><span>Location</span> ${missions[i].launch_site.site_name_long}</p>
			<p><span>Location</span> ${missions[i].flight_number}</p>
			<p><span>Location</span> ${missions[i].details}</p>
			</div>
			
			</div>`;
		document.getElementsByClassName("next-missions").innerHTML = nextHtml;
		*/
