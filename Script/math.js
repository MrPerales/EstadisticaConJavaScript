console.group('cuadrado');
 const ladoCaudrado=5;
 const perimetroCuadrado= ladoCaudrado*4;
 const areaCuadrado=ladoCaudrado*ladoCaudrado;

console.log({
    ladoCaudrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado){
    
    return {
        perimetro:lado*4,
        area:lado*lado
    }
}

console.groupEnd('cuadrado');
 
 
 
console.group('triangulo');

 const ladoTriangulo1=6;
 const ladoTriangulo2=6;
 const trianguloBase=4;
 const alturaTriangulo=5.5;

 const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+trianguloBase;
 const areaTriangulo=(trianguloBase*alturaTriangulo)/2;

 console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    trianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
 })

function calcularTriangulo(lado1,lado2,base,altura){
    return{
        perimetro:lado1+lado2+base,
        area:(base*altura)/2
    }
}

function calcularAlturaTriangulo(lado1,lado2,base){
    if((lado1 == lado2) & (lado1!=base) & (lado2!=base)){
        
         //formula
         return Math.sqrt( (lado1**2)-( Math.pow(lado2,2) /4) )


    }else{
        console.warm('Este es no es un triangulo isosceles');
    }
}
function calcularAlturaEscaleno(lado1,lado2,base){
    if((lado1 != lado2) & (lado1 != base) & (lado2 != base)){
        //formula
        //sacamos el semiperimertro (a+b+c)/2
        const semiperimertro =(lado1+lado2+base)/2;
        const division=(2/lado1);
        const resta1= semiperimertro-lado1;
        const resta2= semiperimertro-lado2;
        const resta3= semiperimertro-base;
    
       //const altura =division*Math.sqrt((semiperimertro)*(resta1)* (resta2 )*( resta3))
      
      return Math.trunc(division*Math.sqrt((semiperimertro)*(resta1)* (resta2 )*( resta3)))
      // return Math.floor(altura);
    }else{
        console.warm('Este es no es un triangulo isosceles');
    }
}



console.groupEnd('triangulo');

console.group('cirle');

const radioCircle=3;
const diametroCircle=radioCircle*2;
const PI=3.1416;

const circunferencia=diametroCircle*PI;
const areaCircle=(radioCircle**2)*PI;// '**' = '^' potencia /

console.log({
    radioCircle,
    diametroCircle,
    PI,
    circunferencia,
    areaCircle
})

function calcularCircle(radio){
    const diametro= radio*2;
    const radioAlCuadrador=Math.pow(radio,2);//lo mismo que poner radio elevado al cuadrado
    return {
        circunferencia:diametro*Math.PI, //Math.PI 
        area:radioAlCuadrador*Math.PI.toFixed(3)//para saber cuantos numeros despues del punto
    }
}



console.groupEnd('circle');