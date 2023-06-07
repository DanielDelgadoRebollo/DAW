import axios from 'axios'

const todosProductos = async() => {
 const peticion = axios.get("https://fakestoreapi.com/products");
 console.log(peticion)
}

export{
    todosProductos
}