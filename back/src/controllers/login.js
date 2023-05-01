const users = require("../utils/users")

const login = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password) //buscar si los usuarios que estan en el archivo users.js son iguales a los datos que estan en la query

    return userFound //si userFound tiene algo
    ? res.status(200).json({ access: true }) //si da true enviar esto
    : res.status(200).json({ access: false }) // si no, enviar esto
}


module.exports = {
    login
}