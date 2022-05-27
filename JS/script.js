if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}




function ready() {

  const planets = [
    {
        name:'Earth',
        gravity: 9.8
    },
    {
        name:'Mercury',
        gravity: 3.61
    },
    {
        name:'Venus',
        gravity: 8.83
    },
    {
        name:'Mars',
        gravity: 3.75
    },
    {
        name:'Jupiter',
        gravity: 26.0
    },
    {
        name:'Saturn',
        gravity: 11.2
    },
    {
        name:'Uranus',
        gravity: 10.5
    },
    {
        name:'Neptune',
        gravity: 13.3
    },
    {
        name:'Pluto',
        gravity: 0.61
    },
    {
        name:'Moon',
        gravity:1.62
    }
]

  document.getElementsByClassName("calculateBtn")[0].addEventListener("click", getResultButtonFunc)

  function getResultButtonFunc (e) {

    let theResult
    //Getting the Input Mass
    const massInKg = document.getElementsByClassName("mass-In-Kg")[0].value

  //Getting the Selected Planet 
  const selectedPlanet = document.getElementsByClassName("select-planet")[0].value;
  getMassFunc(massInKg, selectedPlanet) 
  
    console.log(massInKg, selectedPlanet);

    for (let i = 0; i < planets.length; i++) {
      if (planets[i].name.toLowerCase() === selectedPlanet.toLowerCase()) {
        theResult = massInKg *  planets[i].gravity
        let roundedResult = theResult.toFixed(2)
        let thePlanet = selectedPlanet.toUpperCase()
        
        console.log(theResult)
        let divDisplay = document.getElementsByClassName("get-result-container")[0] 

        divDisplay.innerHTML = `                
        
        <p id="thePlanetResult">The weight of the object on <span id="planet">${thePlanet}</span> </p>
        <div class="resultCon">
            <p id="theReturnResult">${roundedResult}N</p>
        </div>
        `
      } 
    }
  }
  
  function getMassFunc(mass, planet) {
  
    if (mass <= 0 || planet == "") {
      alert("Please enter a valid mass in Number and check the selected planet")
      return
    }
  }
  
}

