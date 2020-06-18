const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        towns.array.forEach(towns => {
            let eachTown = document.createElement('article');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');

            h2.innerHTML = `${towns.name}`;
            eachTown.appendChild(h2);

            h3.innerHTML = `${towns.motto}`;
            eachTown.appendChild(h3);

            para1.innerHTML = `Year Founded: ${towns.yearFounded}`;
            eachTown.appendChild(para1);

            para2.innerHTML = `Population: ${towns.currentPopulation}`;
            eachTown.appendChild(para2);
            
            para3.innerHTML = `Annual Rain Fall: ${towns.averageRainfall}`;
            eachTown.appendChild(para3);

            document.querySelector('div.town-info').appendChild(eachTown);
            
        });
    });