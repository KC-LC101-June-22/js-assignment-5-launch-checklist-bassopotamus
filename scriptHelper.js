// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    }
    else if(pilotResult !== "Not a Number" || copilotResult !== "Not a Number" || fuelResult !== "Is a Number" || cargoResult !== "Is a Number"){
        alert("Make sure to enter valid information for each field!");
    }
    else{
        document.getElementById("pilotStatus").innerText = `Pilot ${pilot} is ready for launch`;

        document.getElementById("copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;

        if(fuelLevel < 10000){
            document.getElementById("fuelStatus").innerText = 'Fuel level too low for launch';
            document.getElementById("launchStatus").innerText = 'Shuttle Not Ready for Launch';
            document.getElementById("launchStatus").style.color = 'red';
        }

        if(cargoLevel > 10000){
            document.getElementById("cargoStatus").innerText = 'Cargo level too high for launch';
            document.getElementById("launchStatus").innerText = 'Shuttle Not Ready for Launch';
            document.getElementById("launchStatus").style.color = 'red';
        }

        document.getElementById("launchStatus").innerText = 'Shuttle is ready for launch';
        document.getElementById("launchStatus").style.color = 'green';


        showDiv.style.setProperty('visibility', 'visible');
        event.preventDefault();
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
