const axios = require('axios')
const response = require("../utils/response")

module.exports = async (req, res) => {
    const {id} = req.params
    const {data} = await axios.get(`http://localhost:3004/Planet/${id}`)
  
    response(res,200,data)
}