import axios from 'axios'

const todasLasBanderas = async(state) => {
 const peticion = axios.get("https://restcountries.com/v3.1/all");
 state((await peticion).data);
}

export{
    
    todasLasBanderas
    
}