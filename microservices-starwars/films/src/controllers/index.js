const catchedAsync = require("../utils/catchedAsync")

module.exports = {
    getFilms: catchedAsync(require("./getFilms")),
    getFilmById: catchedAsync(require('./getFilmById')),
    createFilm: catchedAsync(require("./createFilm"))
}