const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const { response } = require("express");

const getCharById = async (req, res) => {
    try {//try -- todo lo que quiero hacer
        const { id } = req.params; //tomar el id que esta en la URL como parametro
        const { data } = await axios(`${URL}/${id}`) //peticion a la api dependiendo el id para que tome el personaje especifico

        if(!data.id && !data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`) //que primero evalue si no existe, en caso que no exista, dar un error
        
        //hacer lo siguiente si no lanzó el error
        //en caso de que si exista, hacer lo siguiente:
        const character = { //armar personaje con los datos que llegaron de la api
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin.name,
            gender: data.gender,
            image: data.image,
        }

        return res.status(200).json(character) //enviar info en formato JSON
            
        

    } catch (error) { //catch -- para manejo de errores
        return error.message.includes("ID") //si el error viene del try, error.message deberia tener el texto que lance en el try, por eso hago operador ternario
        ? res.status(404).send(error.message)// enviar error si falla el try -- lanza error 404 si hay fallas en los datos u otra parte
        : res.status(500).send(error.message)//enviar error si falla el servidor -- se lanza el error 500 si falla la api ejm: mal la url
    }
}


    
    



module.exports = {
    getCharById
}