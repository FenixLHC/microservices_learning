const mongoose = require('mongoose')
const { MONGO_URI } = require('../config/envs')

const conn = mongoose.createConnection('mongodb+srv://FenixDev:Godiva11**@cluster0.zwmbrrr.mongodb.net/Starwars')


module.exports = {
    Character : conn.model('characters', require('./schemas/characterSchema')),
    Film : conn.model('films', require('./schemas/filmSchema')),
    Planet : conn.model('planets', require('./schemas/planetSchema'))
}