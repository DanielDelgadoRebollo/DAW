/*fetch('https://run.mocky.io/v3/16f71bfa-7bee-476f-ab6b-71348547a9d3').then((res) =>{
   return res.json();
})
.then((res) => {
console.log(res)
})
.catch((rej)=>{
    console.log(`Ha habido algun tipo de fallo: ${rej}`);
});
*/

async function obtenerCryptos(){
    let resultado = await fetch('https://run.mocky.io/v3/16f71bfa-7bee-476f-ab6b-71348547a9d3');
    let resultadoJSON = await resultado.json();
    return resultadoJSON;
}

obtenerCryptos().then((res)=>{
      res.forEach(element => {
        document.getElementById("select_categorias").innerHTML += `<option value="${element.id}">${element.id}</option>`;
      });
})
.catch((err)=>{
    console.log("Error al pasar el json");
})

