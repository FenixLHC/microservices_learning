const { Router } = require("express")
const store = require('../database')
// const controllers = require("../controllers")
// const middleware = require("../middlewares")

const router = Router()

router.get('/', (req,res) => {
    res.status(200).json('Hola')
})

router.get('/:model/:id',async (req, res) => {
    const {model, id} = req.params
    const response = await store[model].get(id)
    res.status(200).json(response)
})

router.get('/:model', async (req, res) => {
    const {model} = req.params
    console.log(model)
    const response = await store[model].list()
    res.status(200).json(response)
})

router.post('/:model', async (req, res) => {
    const {model} = req.params
    const item = req.body
    const response = await store[model].create(item)
    res.status(200).json(response)
})

module.exports = router