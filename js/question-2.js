const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b2601225543140c98d6f3fc3ffee85b6";

const resultsContainer = document.querySelector(".results");

async function getInformation() {
    //fetch
    const response = await fetch(url);
    
    //console.log(response);
    
    const data = await response.json();
    
    console.log(data);
    
    const facts = data.results;
    
    console.log(facts);
    
    //resultContainer.innerHTML = "";
    
    for (let i = 0; i < 8; i++) {
        let arraycount = facts[i].tags.length;
        
        resultsContainer.innerHTML += `<div class="results">${facts[i].name}<br><small>Rating: ${facts[i].rating} - Tags: ${arraycount}</small></div><br>`;
    }
}

getInformation();