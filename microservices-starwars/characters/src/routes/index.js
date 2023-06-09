const { Router } = require("express")
const controllers = require("../controllers")
const middleware = require("../middleware")

const router = Router()

router.get("/:id", controllers.getCharacterById)

router.get("/", controllers.getCharacters)

router.post('/', middleware.characterValidation, controllers.createCharacter)

module.exports = router