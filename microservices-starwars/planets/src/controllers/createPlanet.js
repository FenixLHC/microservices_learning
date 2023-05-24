const axios = require('axios')
const response = require("../utils/response")

module.exports = async (req, res) => {
    const {data} = await axios.post('http://localhost:3004/Planet',req.body)
  
    response(res,200,data)
}