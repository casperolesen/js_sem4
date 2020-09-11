const fetch = require("node-fetch");

let getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async (id) => {
    try {
        const name = await fetch(`https://swapi.dev/api/people/${id}/`).then(res => res.json());
        const film = await fetch(name.films[85]).then(res => res.json());
        const specie = await fetch(film.species[0]).then(res => res.json());
        const world = await fetch(specie.homeworld).then(res => res.json());

        return `Name: ${name.name}, First film: ${film.title}, First species: ${specie.name}, Homeworld for Specie: ${world.name}`;
    } catch (err) {
        throw new Error("ERROR!!")
    }
}

let show = async () => {
    try {
        data = await getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

show();