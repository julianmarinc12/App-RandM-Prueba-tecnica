import './Character.css'
import { useFetch } from "../hooks/useFetch"
import muerto from '../images/icono-de-muerto.png';
import vivo from '../images/icono-de-vivo.png';
import imagen from '../images/icono-imagen.png';



export const Characters = () => {

  const {data,isLoading,hasError}=useFetch('https://rickandmortyapi.com/api/character')
  const {name,status,species,gender,origin,location,episode,created,id}= !!data&&data[1]
  console.log(data)

  return (
    <>
      {
        isLoading
          ?(
            <div>
              Loading........
            </div>
          )
          :(
          
            <div className="container-table">
              <table className="table" >
                <thead className=" encabezado">
                  <tr className='titulos'>
                    <th>Nombre</th>
                    <th>Vivo</th>
                    <th>Especie</th>
                    <th>Genero</th>
                    <th>Origen</th>
                    <th>Locación</th>
                    <th>Capitulos</th>
                    <th>Fecha</th>
                    <th>Ver imagen</th>
                  </tr>
                </thead>
                <tbody className='info-table'>
                  {
                    data.map(char => {
                      return(
                        <tr key={char.id}>
                          <td>{char.name}</td>
                          <td>
                            {
                              char.status === 'Alive'
                              ?(
                                <img src={vivo} alt="" />
                              )
                              :(
                                <img src={muerto} alt="" />
                              )
                            }
                          </td>
                          <td>{char.species}</td>
                          <td>{char.gender}</td>
                          <td>{char.origin.name}</td>
                          <td>{char.location.name}</td>
                          <td>{char.episode.length}</td>
                          <td>{char.created}</td>
                          <td><a href="imagen" className='link'><img src={imagen}/> Aciones</a></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          )
      }
      
     
      
      
    </>
    
  )
}
