import { useEffect } from "react";
import { todosProductos } from "./funciones";


function Inventory(){

    return(

      useEffect(()=>{
      todosProductos()
      },[])

    );
}

export default Inventory;