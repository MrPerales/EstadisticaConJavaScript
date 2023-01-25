const precioItem= document.querySelector('#precio');
const porcentajeDeDescuento=document.querySelector('#descuento');
const bnt=document.querySelector('.calcular');
const resultado=document.querySelector('.resultado');
const inputCupon=document.querySelector('#cupon');


bnt.addEventListener('click',calcularDescuento);

const listCupones=[];

listCupones.push({
    name:'Super',
    discount:5
})
listCupones.push({
    name:'Basic',
    discount:60 
});
listCupones.push({
    name:'Normal',
    discount:25
})
listCupones.push({
    name:'Hyper',
    discount:75
})


function calcularDescuento(){
    const price=Number(precioItem.value) ;
    //const discount=Number(porcentajeDeDescuento.value);
    const valorCupon=inputCupon.value;

    //Condicion para que solo acepte numeros y si no le ponen numeros muesta el mensaje 
    if(!price || !valorCupon){
        resultado.innerText=" Favor de llenar el formulario";
        return;
    }
    // if((discount>0) && (discount<100)){
    //     const descuento =((price) * (100-discount.value))/100;
    //     resultado.innerText= 'Total a pagar : $ ' + descuento;
    // }
    ////Para buscar el cupon el metodo find te regresa todo el objeto {}
    // y el metodo filter te regresa un Array con el objeto[{}]
    listCupones.find(item => {
        if(item.name == valorCupon){
            let descuento =((price) * (100 - item.discount))/100;
            return resultado.innerText=`El precio es de ${price} pero solo vas apagar : $${descuento}`;
        }else{
            resultado.innerText='El cupon es incorrecto '
            //return console.log('adios');
                
        }
    });
    /////////////////////////////////////////////////////
    /////Otra forma de poner lo mismo de arriba 
   


   ///////////////////////////////////////////////////////
   //Resolviendo lo de los cupones pero con un objeto 
//    const cuponesObj={
//     'super':30,
//     'normal':22,
//     'basic':20,
//     'hyper':60
//    }
//    ///si dentro del objeto cuponesObj tenemos uno que se llame igual 
//    if(cuponesObj[valorCupon]){
//         const descuento =((price) * (100 -cuponesObj[valorCupon]))/100;
//         return resultado.innerText=`El precio es de ${price} pero solo vas apagar : $${descuento}`;
//    }else{
//         resultado.innerText='El cupon es incorrecto '
//    }


}

