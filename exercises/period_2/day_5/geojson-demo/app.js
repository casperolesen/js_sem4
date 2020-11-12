const express = require('express')
const app = express()
var gju = require('geojson-utils');
app.get('/', (req, res) => res.send('Geo Demo!'))

const gameArea = require('./gameData.js').gameArea.geometry;
const players = require('./gameData.js').players;

app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    const {lon, lat} = req.params;

    const point = {"type":"Point","coordinates":[lon, lat]}

    const status = gju.pointInPolygon(point, gameArea);
    const msg = status ? "Point was inside the tested polygon" : "Point was NOT inside tested polygon";

    const response = {
        status,
        msg
    }
    
    res.json(response);
    
})

app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', (req, res) => {
    const {lon, lat, rad} = req.params;

    const point = {"type":"Point", "coordinates":[lon, lat]}

    let nearbyPlayers = players.filter(player => {
        return gju.geometryWithinRadius(player.geometry, point, rad)
    });

    res.json(nearbyPlayers);
});

app.get('/geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {
    const {lon, lat, username} = req.params;
    
    const point = {"type":"Point", "coordinates":[lon, lat]}
    const player = players.find(p => p.properties.name == username);
    
    let distance;
    let response;
    if (!player) {
        response = {"msg": "User not found"}
    } else {
        const distance = gju.pointDistance(point, player.geometry);
        response = {distance, "to": username}
    }

    res.json(response);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))