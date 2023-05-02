import Style from "./Detail.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import image from "../Detail/img-rym-detail.jpg"

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
// const API_KEY = "1286efed4b4f.fa1078598682d4931df1"


const Detail = () => {

    const { id } = useParams()
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`) //URL desde el servidor "BACK"
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); //el [id] permite que no se generen pedidos infinitos hacia la api y no nos baneen


    return(
        <div>
            <div className={Style.containerDetail}>
                <div className={Style.containerImage}>
                    <img src={image} alt="" className={Style.imageLeft} />
                </div>
                <div className={Style.containerCard}>
                    <h1 className={Style.name} >{character?.name}</h1> {/* {character?.name} es un renderizado condicional. Es decir que si en character hay algo, renderiza en este caso character.name */}

                    <div className={Style.containerInfo}>             
                        <img src={character?.image} alt={character?.name} className={Style.imgDetail} />

                        <div className={Style.containerTexto} >
                            <h2 className={Style.texto}>Status: {character?.status}</h2>
                            <h2 className={Style.texto}>Species: {character?.species}</h2>
                            <h2 className={Style.texto}>Gender: {character?.gender}</h2>
                            <h2 className={Style.texto}>Origin: {character?.origin?.name}</h2>
                        </div>     
                    </div>                       
                </div>
            
            </div>
        </div>
        
    )
}

export default Detail