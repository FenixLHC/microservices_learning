const axios = require('axios')
const response = require("../utils/response")

module.exports = async (req, res) => {
    const {data} = await axios.post('http://database:3004/Film',req.body)
  
    response(res,200,data)
}