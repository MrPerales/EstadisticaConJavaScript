const FuncionesMatematicas={};

/// con metodo de For
// function calcularPromedio(arr){
//      let suma=0;
//     for(let i =0; i < arr.length; i++){
//         suma=suma+arr[i];
//     }
//     let promedio= suma/arr.length;
//     console.log('el promodeio es '+ promedio);
    
// }
// calcularPromedio(array);
//////////////////////////////////////////
////con metodo .reduce()
// let arr2=[1,2,3,4,5,6,7,8,9,10];
FuncionesMatematicas.calcularPromedioReduce = function calcularPromedioReduce(arr){

    function sumaTodosElementos (valorAcumulado,valorFinal){ 
        return valorAcumulado+ valorFinal;
    }
    
    let promedio =arr.reduce(sumaTodosElementos)/arr.length;
    //console.log(promedio);
    
    // otra forma de escribir el codigo 
    // let sumaTotal=arr.reduce((valorAcumulado,valorFinal)=>{
    //     return valorAcumulado+valorFinal;
    // })
    // let promedio=sumaTotal/arr.length;
    // console.log(promedio);

}
// calcularPromedioReduce(arr2);

FuncionesMatematicas.isPair = function isPair(arr){
    return !(arr.length % 2);
}
FuncionesMatematicas.isOdd = function isOdd(arr){
    return (arr.length % 2);
}
FuncionesMatematicas.ordenarArray = function ordenarArray(arrDesordenado){

    function ordenarArraySort(valorAcumulado,nuevoValor){
        return valorAcumulado -nuevoValor;
        //return 5-10 -> -5 por lo tanto return -1;
        //return 5-5 -> 0  por lo tanto return 0;
        //return 10-5 -> 5 por lo tanto return 1;
    }
    const arr =arrDesordenado.sort(ordenarArraySort);

    return arr;
   //////////////////////////// otra forma
    // arr.sort((a,b)=>{
    //     if(a==b){
    //         return 0;
    //     }
    //     if(a<b){
    //         return -1;
    //     }
    //     return 1;
    // })
    // console.log(arr)
    // return true;
}
FuncionesMatematicas.calcularMediana = function calcularMediana(arrDesordenado){
    const arr= FuncionesMatematicas.ordenarArray(arrDesordenado)
    const arrayIsPair=FuncionesMatematicas.isPair(arr);
    
    if(arrayIsPair){ //si es par ejecuta lo sig
        // encontramos la posicion de la mitad
        let position1= arr.length/2;
        //le restamos uno ya que comienza a contar desde el 0 en adelante
        let position2= (position1)-1;
        let arrayMitades=[arr[position1],arr[position2]];
        FuncionesMatematicas.calcularPromedioReduce(arrayMitades);
        return 
    
    }else{
        //para saber la posicion y  asi poder mostrar el valor que esta en esa posicion de el array
        const indexMitadListaImpar= Math.floor(arr.length/2);  
        const medianaListaImpar= arr[indexMitadListaImpar];
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
    
        return medianaListaImpar;
    
    }
    
   
}

//[ [0,1] , [0,1] , [0,1] , [0,1] ] 
// recibira el arreglo y el numero de la posicion que quera comparar 
FuncionesMatematicas.ordenarArrayBidimencional = function ordenarArrayBidimencional(arrDesordenadoBidemensional,i){

    function ordenarArraySort(valorAcumulado,nuevoValor){

        //cada objeto paso a ser un elemnto del array y se puede acceder a su elemnto en este caso el 1
        // ya que [key][valor]
        /////////// 0    1 
        return valorAcumulado[i]- nuevoValor[i];
    }
    const arr =arrDesordenadoBidemensional.sort(ordenarArraySort);

    return arr;
}


let array=[40,10,20,40,10,10,20,30];
function calcularModa(arr){
    //creamos un objeto para guardar las veces que se repiten 
   const arrayCount={};
    //recorremos la lista con un for
    for(let i=0; i<arr.length ; i++){
        // creamos una variable solo para pasar el valor a la variable item para que sea la key
        let item=arr[i];
        //si ya la key ya estaba agregale el valor o sumale uno al anterior
        if(arrayCount[item]){
            arrayCount[item]+=1;
        }else{//si no estaba la key ponle valor uno 
            arrayCount[item]=1;

        } 
    }
    // cambiamos el objeto {} a array []
    const arrayList =Object.entries(arrayCount);
    //guardamos el array ordenado en la variable
    const arrayOrdenadoBidimensional= FuncionesMatematicas.ordenarArrayBidimencional(arrayList,1);
    const arrayOrdenadoMaxNumber=arrayOrdenadoBidimensional[arrayOrdenadoBidimensional.length-1];
    // console.log(arrayCount);
    // console.log('');
    // console.log(arrayList);
    // console.log('');
    // console.log(arrayOrdenadoBidimensional);

    // console.log('');
    // console.log(arrayOrdenadoMaxNumber);

    console.log('la moda es '+ arrayOrdenadoMaxNumber[0]);
    //posicion 0 por que es el key y no las veces que se repite
    const moda =arrayOrdenadoMaxNumber[0];
    return moda

}
// calcularModa(array); 

// calcularMediana(array);


////DESAFIO ////////////
// En este desafío debes convertir las llaves y valores de un objeto 
// en propiedades (id y name) de un objeto dentro de un array.
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
  };

function solucion(obj){
    //convertimos el objeto en array y lo guardamos en la variable 
    const array=Object.entries(obj);
    //creamos un nuevo array VACIO para guardar los datos 
    const newArray=[];
    //con el CICLO FOR vamos a llenar el 'newArray'
    for(let i=0 ;i< array.length;i++){
        //con el metodo push agregamos los objetos 
        newArray.push({
            
            id: array[i][0]
        })
    } 

}




////resultado 
//   [
//     {
//       id: "123",
//       name: 'Juanito Alcachofa',
//     },
//     {
//       id: "456",
//       name: 'Juanita Alcaparra',
//     },
//   ]
