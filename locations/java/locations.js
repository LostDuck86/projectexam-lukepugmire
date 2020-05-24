// JavaScript Document

const baseUrl = "https://api.spacexdata.com/v3/launchpads";


fetch(baseUrl)
.then(function (response) {
	return response.json();
})
.then(function(json) {
	displayLocationsData(json);
})
.catch(function(error) {
	console.log(error);
});

function displayLocationsData(data) {
	
	const dataContainer = document.querySelector(".main-container1");
	
	let html = "";
	
	for (let i = 0; i < data.length; i++) {
		html += `<div class="location-div">
			<div class="col1"><div class="boxes"><h2>${data[i].location.name}</h2></div>
			<div class="boxes"><p class="info"><span>Designation</span> ${data[i].name}</p>
			<p class="info"><span>Region</span> ${data[i].location.region}</p>
			<p class="info"><span>Status</span> ${data[i].status}</p>
			<p class="info"><span>Attmepted Launches</span> ${data[i].attempted_launches}</p>
			<p class="info"><span>Succesful Launches</span> ${data[i].succesful_launches}</p></div>
            <div class="boxes"><p class="details"><span>Details</span> ${data[i].details}</p></div></div>
			<div class="col2"><div class="boxes"><iframe class="iframe" src="https://maps.google.com/maps?q=${data[i].location.latitude},${data[i].location.longitude}&hl=es&z=14&amp;output=embed"
 ></iframe> </div></div></div>`
	}
	dataContainer.innerHTML = html;
	
}

		
		
			
	
		
		 
		