const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type: String, ref: 'characters'}],
    planets: [{type: String, ref: 'planets'}],
})

filmSchema.statics.list = async function () {
    return await this.find()
    .populate('characters',['_id','name'])
    // .populate('planets', ['_id', 'name'])
}

filmSchema.statics.get = async function(id) {
    return await this.findById(id)
    .populate('characters',['_id','name'])
    // .populate('planets', ['_id', 'name'])
}

filmSchema.statics.create = async function(film) {
        const newItem = new this(film)
        return await newItem.save()
    }

module.exports = filmSchema