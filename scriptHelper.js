// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(name, diameter, star, distance, moons, imageUrl) {
    let divToUpdate = document.getElementById("missionTarget");

    divToUpdate.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {

    if(testInput === ""){
        return "Empty";
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else{
        return "Is a Number";
    }

}


function formSubmission(event, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotResult = validateInput(pilot);
    let copilotResult = validateInput(copilot);
    let fuelResult = validateInput(fuelLevel);
    let cargoResult = validateInput(cargoLevel);
    let showDiv = document.getElementById("faultyItems");

    if(pilotResult === "Empty" || copilotResult === "Empty" || fuelResult === "Empty" || cargoResult === "Empty"){
        alert("All fields are required!");
        event.preventDefault();
    }
    else if(pilotResult !== "Not a Number" || copilotResult !== "Not a Number" || fuelResult !== "Is a Number" || cargoResult !== "Is a Number"){
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
    }
    else{
        document.getElementById("pilotStatus").innerText = `Pilot ${pilot} is ready for launch`;

        document.getElementById("copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;

        if(fuelLevel < 10000){
            document.getElementById("fuelStatus").innerText = 'Fuel level too low for launch';
            document.getElementById("launchStatus").innerText = 'Shuttle Not Ready for Launch';
            document.getElementById("launchStatus").style.color = 'red';
        }
        else if(cargoLevel > 10000){
            document.getElementById("cargoStatus").innerText = 'Cargo level too high for launch';
            document.getElementById("launchStatus").innerText = 'Shuttle Not Ready for Launch';
            document.getElementById("launchStatus").style.color = 'red';
        }
        else{
            document.getElementById("fuelStatus").innerText = 'Fuel level high enough for launch';
            document.getElementById("cargoStatus").innerText = 'Cargo mass low enough for launch';
            document.getElementById("launchStatus").innerText = 'Shuttle is ready for launch';
            document.getElementById("launchStatus").style.color = 'green';
            
        }
        showDiv.style.setProperty('visibility', 'visible');
        event.preventDefault();
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randNum = Math.floor((Math.random() * planets.length));

    console.log(planets[randNum]);

    return planets[randNum];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
