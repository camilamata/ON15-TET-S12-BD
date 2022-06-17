const controller = require("../controller/artistController")

const express = require("express")

const router = express.Router()

router.post("/artists/register", controller.registerArtist)
router.get("/artists", controller.getAllArtists)
router.get("/artists/:id", controller.getById)
router.get("/artists/name", controller.getByName)

module.exports = router