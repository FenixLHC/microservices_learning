const Characters = require("../data")
const response = require("../utils/response")
module.exports = async (req, res) => {
    const characters = Characters.list()
    response(res,200,characters)
}