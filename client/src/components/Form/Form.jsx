import Style from "./Form.module.css"
import validation from "../Validation/Validation"
import { useState } from "react"

const Form = ({ login }) => {

    const [ userData, setUserData ] = useState({
        email: "",
        password: "",
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value //Bracket Notation porque es una propiedad del objeto que es variable, puede ser email o password
        })
        
        setErrors(validation({ //ejecuto validation y lo que va a setear es su retorno, si quiero chequear cual es el retorno, esta en el archivo validation
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit  = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={Style.container}>
            <form onSubmit={handleSubmit} className={Style.form}>
                <h1 className={Style.tittle}>Log In</h1>
                <label htmlFor="email"className={Style.labels} >Email </label>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} className={Style.inputs} placeholder="ingrese su email" />
                    {errors.email ? <p className={Style.errors} >{errors.email}</p> : null}
                

                <label htmlFor="password"className={Style.labels} >Password </label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} className={Style.inputs} placeholder="ingrese su contraseña" />
                    {errors.password ? <p className={Style.errors} >{errors.password}</p> : null}
                
                <button className={Style.button}>Ingresar</button>
            </form>
        </div>
    )

}

export default Form