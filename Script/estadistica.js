let array=[1,2,3,4,5,6,7,8,9,10];

/// con metodo de For
function calcularPromedio(arr){
     let suma=0;
    for(let i =0; i < arr.length; i++){
        suma=suma+arr[i];
    }
    let promedio= suma/arr.length;
    console.log('el promodeio es '+ promedio);
    
}
calcularPromedio(array);
//////////////////////////////////////////

////con metodo .reduce()
let arr2=[1,2,3,4,5,6,7,8,9,10];
function calcularPromedioReduce(arr){

    function sumaTodosElementos (valorAcumulado,valorFinal){ 
        return valorAcumulado+ valorFinal;
    }
    
    let promedio =arr.reduce(sumaTodosElementos)/arr.length;
    console.log(promedio);
    
    //////////////////////////////////////////
    // otra forma de escribir el codigo 
    // let sumaTotal=arr.reduce((valorAcumulado,valorFinal)=>{
    //     return valorAcumulado+valorFinal;
    // })
    // let promedio=sumaTotal/arr.length;
    // console.log(promedio);

}
calcularPromedioReduce(arr2);