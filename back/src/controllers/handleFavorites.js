let myFavorites = [];

const postFav = (req, res) => {
    try {
        const character = req.body; //tomar un personaje
        const characterFound = myFavorites.find(fav => fav.id === character.id)

        if(characterFound) throw Error("Ya existe ese personaje en favoritos")

        myFavorites.push(character) //pushear el personaje al array myFavorites

        return res.status(200).json(myFavorites)
    
    } catch (error) {
        return res.status(404).send(error.message)
    }
    
}


const deleteFav = (req, res) => {
    const { id } = req.params; //tomar el id que esta en la URL

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id)
    
    return res.status(200).json(myFavorites)
}


module.exports = {
    postFav,
    deleteFav,
}