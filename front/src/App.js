import './App.css';
import Cards from "./components/Cards/Cards.jsx"
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Fooder from './components/Fooder/Fooder';
import { useState, useEffect  } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
// const API_KEY = "1286efed4b4f.fa1078598682d4931df1"

// const email = "robertwow656@gmail.com"
// const password = "123456"
const URL = 'http://localhost:3001/rickandmorty/login/'; //URL del Back-End


function App() {
   const [ access, setAccess ] = useState(false)
   const [ characters, setCharacters ] = useState([]) //destructuring con arrays porque useState retorna un array
   const location = useLocation() //saber en que ruta esta parado el usuario
   const navigate = useNavigate()

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
      
      } catch (error) {
         
      }
      
   }

   useEffect(() => {// por si access esta en false no deje ingresar a otras rutas
      !access && navigate('/');
   }, [access]);



   const onSearch = async (id) => { // funcion que trae las Cards de la api  
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`) //link para hacer la peticion al servidor "BACK"  //Link de la api   NOTA >>> axios trabaja como AJAX
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
      
   }




   const onClose = (id) => { //funcion que elimina una Card con el boton x
      const charactersFiltered = characters.filter(character => character.id !== id) //filtra y guarda en un array los personajes que su id sean diferentes al id que esta por parametro y asi hace que el que sea de igual id no lo guarde y se va eliminar
      setCharacters(charactersFiltered)
   }
   

   return (
      <div className='App'>
         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} setAccess={setAccess} /> : null //para que la navbar no se muestre en la pagina principal donde esta el form, osea la ruta "/"
         }

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
         
         {
            location.pathname !== "/" && <Fooder/> 
         }
         

      </div>
   );
}

export default App;
