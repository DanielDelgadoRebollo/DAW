let desplegable = document.querySelector("#select_categorias");
let textAreaCrypto = document.querySelector('#floatingTextarea');

desplegable.addEventListener("change", function(){
    getCryptoData(desplegable.value);
})


async function getNameCryptos(){
    let resultado = await fetch('https://run.mocky.io/v3/16f71bfa-7bee-476f-ab6b-71348547a9d3');
    let resultadoJSON = await resultado.json();
    return resultadoJSON;
}

async function getCryptoData(){
    let resultado = await fetch('https://api.coingecko.com/api/v3/coins/0x' );
    let resultadoJSON = await resultado.json();
    return resultadoJSON;
}


getNameCryptos().then((res)=>{
      res.forEach(element => {
      desplegable.innerHTML += `<option value="${element.id}">${element.id}</option>`;
      });
})
.catch((err)=>{
    console.log("Error al pasar el json");
});6

getCryptoData().then((res)=>{
    res.forEach(element =>{
    textAreaCrypto.innerHTML = '';
    textAreaCrypto.innerHTML += `${element.description}`;
    console.log(element.description);
    });
}).catch((err)=>{
    console.log("Error al pasar el json bro");
});