const catchedAsync = require("../utils/catchedAsync")

module.exports = {
    getFilms: catchedAsync(require("./getFilms")),
    createFilm: catchedAsync(require("./createFilm"))
}