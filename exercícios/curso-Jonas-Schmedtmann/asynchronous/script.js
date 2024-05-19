'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//     request.send();

//     request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} million people</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//         <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//         </div>
//     </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend', html)
//         countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('Iceland')

const renderCountry = function(data, classname = "") {
    const html = `
        <article class="country ${classname}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(2)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
    </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    // Render country 1
    renderCountry(data)

    // Get neighbour country (2)
    if(!data.borders) return;
    const neighbour = data.borders;

    neighbour.map(nei => {
          // AJAX call country 2
     const request2 = new XMLHttpRequest();
     request2.open('GET', `https://restcountries.com/v3.1/alpha/${nei}`);
     request2.send();

     request2.addEventListener('load', function() {
        const [data2] = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour')
     })
        
    })
    });
}

getCountryAndNeighbour('andorra')

setTimeout(() => {
    console.log('1 second passed')
    setTimeout(() => {
        console.log('2 second passed')
        setTimeout(() => {
            console.log('3 second passed')
            setTimeout(() => {
                console.log('4 second passed')
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


