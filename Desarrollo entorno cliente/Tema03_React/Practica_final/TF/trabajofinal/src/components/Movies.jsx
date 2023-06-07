import React,{useEffect, useState } from 'react';
import { todasLasPeliculas } from './funciones';
import Image from 'react-bootstrap/Image';

function Movies(){

const [ peliculas, setPeliculas] = useState();


    useEffect(()=>{
        todasLasPeliculas(setPeliculas);
},[])



return (
    <>
    {peliculas != null ? (
        peliculas.map(pelicula =>(
    <div className="card border-dark mb-3 text-center " style={{margin:'20px'}}>
       
      <div className="overflow" style={{marginTop:'20px'}}>
        <Image src={'https://image.tmdb.org/t/p/original'+pelicula.poster_path} rounded width={'200px'}/>
      </div>
      <div className="card-body ">
        <h4 className="card-title text-dark"  >{pelicula.original_title}</h4>
        <p className="card-text text-dark">{pelicula.overview}</p>
        </div>
    </div>

        ))
    ) : ('No hay personajes')}
    
    
    </>
)

}

export default Movies;






