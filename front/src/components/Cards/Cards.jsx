import Card from "../Card/Card.jsx"
import Style from "./Cards.module.css";
import image from "../Cards/rym2.jpg"

export default function Cards({ characters, onClose }) {
   return (
      <div>
         <div className={Style.imgContainer}>
            <img src={image} alt="RyM" className={Style.img} />
         </div>

         <h1 className={Style.h1}>Characters</h1>
         <p className={Style.parrafo}>Conoce los personajes de la maravillosa serie Rick & Morty.</p>
         <p className={Style.parrafo}>Si quieres conocer mas sobre los personajes, clickea el nombre del personaje que quieres conocer.</p>

         <div className={Style.cards}>
         {
            characters.map((character) => {
               return (
                  <Card
                     key={character.id}
                     id={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin.name}
                     image={character.image}
                     onClose={onClose}
                  /> 
               )
               
            })
         }
         </div>
   </div>
   ) 
}
