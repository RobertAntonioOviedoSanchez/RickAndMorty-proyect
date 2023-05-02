import Style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions"
import { connect } from "react-redux"
import { useState, useEffect } from "react";

 function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [ isFav, setIsFav ] = useState(false)

   const handleFavorite = () => { //funcion para agregar a favoritos
      if (isFav) {
         setIsFav(false) //setear el estado local
         removeFav(id) //action de redux
      } else {
         setIsFav(true) //setear el estado local
         addFav({ id, name, status, species, gender, origin, image, onClose}) //action de redux
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => { //montaje
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={Style.containerCard}>
         <img src={image} alt={name} className={Style.imgCard} /> 

         <button onClick={handleFavorite} className={Style.favButton} >{isFav ? "❤️" : "🤍"}</button>
         
         <button onClick={() => onClose(id)} className={Style.deleteButton}>X</button> {/* callback para que se ejecute cuando se da click */}
         
         <NavLink to={`/detail/${id}`} className={Style.link} >
            <h2 className={Style.name} >{name}</h2>
          </NavLink>

         <h2 className={Style.description}>{species}</h2>
         <h2 className={Style.description}>{status}</h2>
         
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)