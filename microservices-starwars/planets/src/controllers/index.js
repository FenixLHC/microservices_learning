const catchedAsync = require("../utils/catchedAsync")

module.exports = {
    getPlanets: catchedAsync(require("./getPlanets")),
    getPlanetById: catchedAsync(require('./getPlanetById')),
    createPlanet: catchedAsync(require("./createPlanet"))
}