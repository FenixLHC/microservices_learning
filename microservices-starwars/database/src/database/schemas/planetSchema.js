const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
        _id: String,
        name: String,
        rotation_period: String,
        orbital_period: String,
        diameter: String,
        climate: String,
        gravity: String,
        terrain: String,
        surface_water: String,
        residents: [{type: String, ref: 'characters'}],
        films: [{type: String, ref: 'films'}],
})

planetSchema.statics.list = async function() {
        return await this.find()
        // .populate('residents',['_id','name'])
        // .populate('films', ['_id', 'title'])
    }
    
planetSchema.statics.get = async function(id) {
    return await this.findById(id)
    // .populate('residents',['_id','name'])
    .populate('films', ['_id', 'title'])
}

planetSchema.statics.create = async function(planet) {
    const newItem = new this(planet)
    return await newItem.save()
}

module.export = planetSchema