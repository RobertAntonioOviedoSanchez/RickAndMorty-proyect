import Style from "./Favorites.module.css";
import image from "../Favorites/rym1.png"
import Card from "../Card/Card"
import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value)) //NOTA --- el argumento que recibe orderCards, va a ser el parametro que recibe la action en REDUX
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return(
        <div>
            <div className={Style.imgContainer}>
                <img src={image} alt="" className={Style.img} />
            </div>
            <h1 className={Style.h1}>Favorites</h1>
            <p className={Style.p}>En esta seccion se encuentran tus personajes favoritos. Puedes ordenarlos como quieras.</p>
            <p className={Style.p}>Ordenar por:</p>
            <div className={Style.containerSelects}>
                <select onChange={handleOrder} className={Style.select}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter} className={Style.select}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value="allCharacters">All Characters</option>
                </select>
            </div>
            
            <div className={Style.containerCards}>
                {
                    myFavorites?.map(fav => {
                        return(
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                species={fav.species}
                                gender={fav.gender}
                                image={fav.image}
                                onClose={fav.onClose}
                            />                       
                                
                        )
                    })
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites //estado global que viene de redux, creo que este es el parametro que toma la funcion Favorites
    }
}

export default connect (
   mapStateToProps,
   null
)(Favorites)
    
