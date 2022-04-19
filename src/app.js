import axios from 'axios'

const countryListDiv = document.getElementById("countryList");

async function getData() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data
        countries.sort((b, a) => b.population - a.population);
        printIt(countries)
    } catch (e) {
        console.error(e);
    }
}

function printIt(data) {
    countryListDiv.innerHTML = data.map((country) => {
        return `
        <div class="countryContainer">
            <div class="nameAndFlag">
                <img src="${country.flag}" alt="dé vlag van hét land">
                <div>    </div>
                <h5 class="${colorPicker(country.region)}">${country.name}</h5>
             </div>
             <div class="population">
             has a population of ${country.population}
             </div>
       </div>`
    }).join("")
}

getData()


function colorPicker(region) {
    switch (region) {
        case 'Africa':
            return "blue";
        case 'Americas':
            return "green";
        case 'Asia':
            return "red";
        case 'Europe':
            return "yellow";
        case 'Oceana':
            return "purple";
        default:
            return "white";
    }
}