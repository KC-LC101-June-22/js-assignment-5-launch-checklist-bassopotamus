// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;

    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;

    }).then(function () {
        let chosenPlanet = pickPlanet(listedPlanets);
        let name = chosenPlanet.name;
        let diameter = chosenPlanet.diameter;
        let star = chosenPlanet.star;
        let distance = chosenPlanet.distance;
        let image = chosenPlanet.image;
        let moons = chosenPlanet.moons;

        addDestinationInfo(name, diameter, star, distance, moons, image);
        
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
});
window.addEventListener("load", function() {

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        let pilot = document.querySelector("[name='pilotName']").value;
        let copilot = document.querySelector("[name='copilotName']").value;
        let fuelLevel = document.querySelector("[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("[name='cargoMass']").value;

        formSubmission(event, pilot, copilot, fuelLevel, cargoLevel);

    });
});