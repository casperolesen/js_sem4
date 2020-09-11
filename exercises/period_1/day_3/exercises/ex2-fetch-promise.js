const fetch = require('node-fetch');

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    fetch(`https://swapi.dev/api/people/${id}/`)
        .then(res => res.json())
        .then(data => {
            console.log(`Name: ${data.name}`);
            first_film_url = data.films[0]
            fetch(first_film_url)
        .catch(error => console.log(error))
            .then(res => res.json())
            .then(data => {
                console.log(`First Film: ${data.title}`);
                species_url = data.species[0]
                fetch(species_url)
            .catch(error => console.log(error))
                .then(res => res.json())
                .then(data => {
                    console.log(`First species: ${data.name}`);
                    homeworld_url = data.homeworld;
                    fetch(homeworld_url)
                .catch(error => console.log(error))
                    .then(res => res.json())
                    .then(data => {
                        console.log(`Homeworld for Specie: ${data.name}`);
                    })
                    .catch(error => console.log(error))
                })
            })
        })
}
getPlanetforFirstSpeciesInFirstMovieForPerson(1)