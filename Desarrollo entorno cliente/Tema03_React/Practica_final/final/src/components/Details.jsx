import { useEffect, useState } from "react";
import { todasLasBanderas}  from "./funciones";



function Details(){
   const [banderas,setFlags] = useState([]);
  
   



  useEffect(()=>{
   
 todasLasBanderas(setFlags);
 

  },[setFlags]);

   return(
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
              <p>Capital : {e.capital}</p>
              <p>Population : {e.population}</p>
              <p>Region : {e.region}</p>

            </div>
          </div>
        </div>
      </div>
      ))}
  </div>
   );
}

export default Details;