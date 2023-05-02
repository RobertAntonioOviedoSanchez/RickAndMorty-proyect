const { getCharById } = require("../controllers/getCharById")
const { login } = require("../controllers/login")
const { postFav, deleteFav } = require("../controllers/handleFavorites")

const router = require("express").Router() //importar Router de express

//RUTAS, cuando el usuario entre a cada ruta, se va a ejecutar una de estas funciones, que dentro de ellas van a ejecutar sus respectivos controladores
router.get("/character/:id", (req, res) => {
    getCharById(req, res)
})

router.get("/login", login) //asi tambien sirve, el login se ejecuta cuando se entre a esta ruta y toma automaticamente al req y res

router.post("/fav", (req, res) => {
    postFav(req, res)
})

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
})


module.exports = router