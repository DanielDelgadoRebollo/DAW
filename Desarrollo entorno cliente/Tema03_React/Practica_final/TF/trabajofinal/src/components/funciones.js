import axios from 'axios';

const todasLasPeliculas = async (state) =>{
   const peticion = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4ef66e12cddbb8fe9d4fd03ac9632f6e&language=en-US&page=1/results');
  
   
    state(peticion.data.results);
    
} 


export{
   todasLasPeliculas
}