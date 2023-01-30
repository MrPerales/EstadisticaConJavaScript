function busquedaPorNombre(personName){
    // al usar asi la arrow function no tiene que tener {} ya que cambia completamente
    return salarios.find(persona => persona.name == personName  );
}

function medianaPorPersona(personName){
    //accedemos en los valores de la key trabajos 
    const trabajo= busquedaPorNombre(personName).trabajos;
    //muestra el array con objetos { year: 2018, empresa: "Freelance", salario: 250 },......
    // console.log(trabajo);
    //ya tenemos el array ahora para separlo en otro array para que solo regrese los salarios
    //usamos la propiedad .map()
    //se puede usar cualquier nombre en lugar de item como salario pero seria algo confuso tener salario.salario
    const salarios = trabajo.map(item => item.salario);
    //mostramos el array de puros salario
    // console.log(salarios);
    //y tomamos la function de calcular mediana del Archivo estadisticas.js 
    const medianaSalarios=FuncionesMatematicas.calcularMediana(salarios);
    return medianaSalarios
}

function proyeccionPorPersona(personName){
    //variable para major legibilidad la cual esta apuntando al key Trabajos del array de obj salario
    const trabajos = busquedaPorNombre(personName).trabajos;
    // console.log(trabajos)
    let porcentajesCrecimiento=[];

    for(let i=1; i < trabajos.length ; i++){
        //para saber el porcentaje del crecimiento restamos el salario actual -salario anterior
        const salarioActual=trabajos[i].salario;
        const salarioAnterior=trabajos[i-1].salario;
        const crecimiento=salarioActual-salarioAnterior;
        // dividimos el resultado de la resta sobre el salario anterior para saber el porcentaje de Crecimiento
        const porcentajeCrecimiento=crecimiento/salarioAnterior;
        //lo agregamos al array 
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    //sacamos la mediana de ese array que creamos con la funcion matematica 
    const medianaPorcentajesCrecimiento=FuncionesMatematicas.calcularMediana(porcentajesCrecimiento);
    //una vez que tenemos la mediana tenemos que multiplicar el resultado con el ultimo salario 
    //para saber el aumento         trabajps.length-1 por que es la poscicion del ultimo salario
    const ultimoSalario=trabajos[trabajos.length-1].salario;
    const aumento = ultimoSalario*medianaPorcentajesCrecimiento;
    const nuevoSalario= ultimoSalario+aumento;
    return nuevoSalario; 
}

//Analisis empresarial 
/*{
    Insdustrias uno:{
        2018:[salarios,salarios,salarios];
        2019:....
        2020:....
        2021:....
    },
    {
    Industrias 2:{},
    industrias 3:{},
    }
}*/  
//creamos arreglo donde guardar todo 
const empresas={};
// persona es el ebjeto del array name:--,trabajos:--
for(persona of salarios ){
    //trabajo es el objeto dentro del objeto trabajos :{ year: 2018, empresa: 'Freelance', salario: 250, }
    for(trabajo of persona.trabajos ){
        //validamos si existe un objeto dentreo de empresas con el nombre de la empresa si no lo creamos  
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa]={};
            /*ya tenemos la estructura 
            Industrias 1:{},
            Industrias 2:{},*/
        }
        //ahora hacemos lo mismo pero ahora dentro del objeto empresas y asi poder meter los años y el sueldo 
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year]=[];
            /*Insdustrias uno:{
            2018:[];
            2019:[];
            */
           //solo falta insertar los salarios 
        }else{
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }
    }
}
console.log(empresas);

function medianaEmpresaYear(nombreEmpresa,year){
    if (!empresas[nombreEmpresa]){
        console.warn('La emprea no existe');
        return;
        // buscamos si tiene un apartado de years si no mandamos un console.warn
    }else if(!empresas[nombreEmpresa][year]){
        console.warn('La empresa no tiene registros de ese year');
        return;
    }else{
        return FuncionesMatematicas.calcularMediana(empresas[nombreEmpresa][year]);
    }
}