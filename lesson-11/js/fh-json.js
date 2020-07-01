const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const southern = towns.filter(town => (town.name == 'Fish Haven'));

        southern.forEach(town => {

            let eachTown = document.createElement('article');
            let h3 = document.createElement('h3');
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');

            eachTown.appendChild(ul)

            h3.innerHTML = `Upcoming Events`;
            eachTown.appendChild(h3);

            li1.innerHTML = `${town.events[2]}`;
            ul.appendChild(li1);

            li2.innerHTML = `${town.events[3]}`;
            ul.appendChild(li2);

            li3.innerHTML = `${town.events[0]}`;
            ul.appendChild(li3);

            li4.innerHTML = `${town.events[1]}`;
            ul.appendChild(li4);

            document.querySelector('div.new-town-info').appendChild(eachTown);
        });

    });