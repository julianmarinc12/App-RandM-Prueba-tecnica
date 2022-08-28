import './Home.css'
import camara from '../images/camera-movie.png';
import muerto from '../images/icono-de-muerto.png';
import vivo from '../images/icono-de-vivo.png';
import lupa from '../images/icono-de-busqueda.png';




export const Home = () => {


  return (
    <>
    <div className='marcadores'>
      <div className='home-personajes'>
        <div className='personajes'>
          <img src={camara} alt="" />
        </div>
        <h1 className='personaje'>Personajes</h1>
      </div>
      <div className='info-personajes'>

        <h2 className='total'>Total de personajes: 75</h2>

        <div className='vivosmuertos'>
          <h2 className='vivos_muertos'>
            <img src={vivo} alt="" />  Persoajes vivos: 22  |  <img src={muerto} alt="" />  Personajes muertos: 0 
          </h2>
        </div>

        <div className="buscador">
          <form action="#">
            <input type="image" src={lupa} className="image_buscar"/>
            <input type="text" className="buscar" placeholder='Buscar'/>
          </form>
        </div>

      </div>
    </div>


    
    </>
  )
}
