const loadCountreis = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountreis();

const displayCountries = countries =>{
//     for (const country of countries) {
//         console.log(country);
//    }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        //console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountrybyName('${country.name}')"> Details</button>
        `

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
   })
}

const loadCountrybyName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaycountryDetail(data[0]));
}

const displaycountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h4>Name:${country.name}</h4>
    <p>Polulation:${country.population}</p>
    <img width="200px" src="${country.flag}">
    `
}