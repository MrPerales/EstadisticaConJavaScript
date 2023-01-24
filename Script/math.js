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

console.groupEnd('triangulo');