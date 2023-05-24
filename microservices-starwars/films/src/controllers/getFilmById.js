const axios = require('axios')
const response = require("../utils/response")

module.exports = async (req, res) => {
    const {id} = req.params
    const {data} = await axios.get(`http://database:3004/Film/${id}`)
  
    response(res,200,data)
}