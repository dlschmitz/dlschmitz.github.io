const rentalAPI = "https://dlschmitz.github.io/final-project/data/rental.json";

fetch(rentalAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing

        const rentals = jsonObject['rental_type'];

        rentals.forEach((data) => {

            let product = document.createElement('div');
            let h2 = document.createElement('h2');
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            let li5 = document.createElement('li');
            let image = document.createElement('img');

            product.appendChild(ul);

            h2.innerHTML = `${data.name}`;
            product.appendChild(h2);

            li1.innerHTML = `Max riders:${data.occupants}`;
            ul.appendChild(li1);

            li2.innerHTML = `Reservation for half day:${data.reservation_half}`;
            ul.appendChild(li2);

            li3.innerHTML = `Reservation for full day:${data.reservation_full}`;
            ul.appendChild(li3);

            li4.innerHTML = `Walk-in for half day:${data.walkin_half}`;
            ul.appendChild(li4);

            li5.innerHTML = `Walk-in for full day:${data.walkin_full}`;
            ul.appendChild(li5);

            image.setAttribute('src', `/final-project/image/${data.image}`);
            image.setAttribute('alt', `${data.name}`);
            product.appendChild(image);

            document.querySelector('div.rental').appendChild(product);
        });

    });