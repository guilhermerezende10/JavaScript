'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, classname = '') {
  const html = `
        <article class="country ${classname}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(2)} million people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
        </div>
    </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

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

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     if (!data.borders) return;
//     const neighbour = data.borders;

//     neighbour.map(nei => {
//       // AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${nei}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);
//         renderCountry(data2, 'neighbour');
//       });
//     });
//   });
// };

// getCountryAndNeighbour('germany')

// setTimeout(() => {
//     console.log('1 second passed')
//     setTimeout(() => {
//         console.log('2 second passed')
//         setTimeout(() => {
//             console.log('3 second passed')
//             setTimeout(() => {
//                 console.log('4 second passed')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const request = fetch('https://restcountries.com/v3.1/name/brazil');

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       data[0].borders.forEach(nei => {
//         if (!nei) return;

//         // Countries
//         fetch(`https://restcountries.com/v3.1/alpha/${nei}`)
//         .then(response => response.json())
//         .then(data => renderCountry(data[0], 'neighbour'));

//       })
//     })
// };

const getJSON = function (url, errorMsg = 'Somethin went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1

  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found.'
  )
    .then(data => {
      console.log(data)
      renderCountry(data[0]);

      const neighbour = data[0].borders;

      if (!neighbour) throw new Error('No neighbour found.');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        'Country not found.'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(err)
      renderError(
        `Something went wrong. ${err.message} Press F to pay respects.`
      );
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('usa');
