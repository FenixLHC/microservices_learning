const axios = require('axios')
const response = require("../utils/response")

module.exports = async (req, res) => {
    const {data} = await axios.get('http://localhost:3004/Planet')
  
    response(res,200,data)
}