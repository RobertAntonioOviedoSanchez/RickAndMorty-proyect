import Style from "./About.module.css"
import image from "../About/rym1.jpg"
import me from "../About/yo.jpg"

const About = () => {
    return(
        <div>
            <div className={Style.imgContainer}>
                <img src={image} alt="" className={Style.img} />
            </div>

            <h1 className={Style.h1}>Acerca de mi</h1>
            <div className={Style.containerP} >
                <p className={Style.p}>Mi nombre es Robert Oviedo, tengo 19 años y soy de Venezuela. Actualmente estoy cursando el Bootcamp de SoyHenry para poder adquirir todos los conocimientos que me ofrece la cursada y lograr conseguir un certificado y empleo como Full Stack Web Developer.</p>
                <p className={Style.p}>Este proyecto sobre Rick and Morty ha sido creado durante la instancia de Bootcamp. Mediante pasaba el tiempo y las clases, por medio de homeworks y horas de estudio logré crear este proyecto.</p>
                <img src={me} alt="" className={Style.imageMe} />
            </div>
        </div>
    )
}

export default About