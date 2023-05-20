const planets = require('./planets.json')

module.exports = {
    list: async () => planets,
    create: async () => "Nuevo film"
}