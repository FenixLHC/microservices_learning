const films = require('./films.json')

module.exports = {
    list: async () => {
        return films
    },
    create: async () => "Nuevo film"
}