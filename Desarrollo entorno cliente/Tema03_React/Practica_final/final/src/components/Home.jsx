import { useEffect, useState } from "react";
import { todasLasBanderas}  from "./funciones";
import { Link } from "react-router-dom";

function Home() {
  const [banderas,setFlags] = useState([]);
  let vacio = [];
  
  


  useEffect(()=>{
   todasLasBanderas(setFlags);

  },[setFlags]);
   
  const handleOnClick = (e) =>{

    //Obtengo el pais que se encuentra asociado a la carta

    
    banderas.filter((event)=>{
      if(event.name == e.name){
         vacio = banderas;
         console.log(vacio.value);
      }
    })
    

    return vacio;
  }

  return (
    <div className='container'>
    {banderas && banderas.map((e) => (
        <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={e.flags.png} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{e.name.common}</h5>
              <button variant="primary" onClick={()=>(handleOnClick(e.name.common))}><Link to='/Details'>Ver detalles</Link> </button>
            </div>
          </div>
        </div>
      </div>
      ))}
  </div>
);
}
export default Home;