import './Navbar.css'
import LogoRandM from '../images/Logo-RandM.png';
import Home from '../images/Home.png'
import campana from '../images/Icono_de_campana.png';






export const Navbar = () => {
  return (
    <>
    <nav className="nav">
      <div className='logoNav'>
      <img src={LogoRandM} />
      </div>
      <div className='homeBell'>
        <div className='home'>
          <a href=""><img src={Home} /></a>
        </div>
        <div className='bell'>
        <a href=""><img src={campana} /></a>
        </div>
      </div> 
    </nav>
    
      
    </>
  )
}
