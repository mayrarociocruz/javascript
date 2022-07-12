/*let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = prompt("ingrese su edad");

let out = "este es "+ " "+ nombre + " " + "el doble de su edad es " + (edad*2);
alert(out)
//aparece el nombre y el doble de la edad
console.log('hola') aparece solo en la consola

//
for (let i=0; i<10; i++){
    alert(i);
} 
//cuenta del 1 al 10
*/

/*
//multiplica diez veces
let ingresarNumero = parseInt(prompt("Ingresar numero"));

for(let i = 1; i<= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + "x" + i + "=" + resultado );
}

//cuenta del uno al 4 se corta en el 5
for (let i = 1; i<=10; i++){
    if(i==5){
        break;
    }

alert(i);
}
*/
/*
let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);
*/

/*
let alumnos = '';

for (let i = 0; i < 5; i++) {
    alumnos += prompt("Para continuar ingresa de a uno los nombres de los miembros de tu grupo")+"\n";

}
alert("Tu grupo esta compuesto por: " + alumnos);
*/

let montoIngresado = parseInt(prompt("CALCULA LAS CUOTAS DE TU PRESTAMO, ingresando el monto deseado a continuacion"));
let montoAPagar

    const numeroDeCoutas = [3, 6, 9, 12, 18];


    for(let i = 0; i < 5; i++){
        if(montoIngresado <= 0){
            
            alert ("EL MONTO NO ES VALIDO!")
            break
        }
        montoAPagar = montoIngresado / numeroDeCoutas[i]
        alert("EN " + numeroDeCoutas[i] + " CUOTAS, PAGAS $ " + montoAPagar ); 
    }
/*
let cantidadRepeticiones = prompt("escriba la cantidad de veces que quiere que se repita su mensaje");
let mensajeParaRepetir = prompt("mensaje que desea repetir");

for( let i =0; i< cantidadRepeticiones; i++){
    alert (mensajeParaRepetir);
}
*/

/*
let ingresaNumero = prompt("ingresar un numeroo");

    for (let i = 0; i < ingresaNumero ; i++ ){
        if(i > 4){
            break;
        }
        alert ("lado");
    }

    */

    /*

for (let i = 1; i <= 10 ; i++){
    if( i==5){
        continue;
    }
//sentencia continue: en vez de cortar toda la ejecucion solo saltea esa etapa 
alert(i);
}

let numeroRandom = prompt("Ingrese un numero");

if((i >= 10) && (i <= 50)){
    alert ("esta dentro del rango" + numeroRandom);
}
else{
    alert("fuera de rango" + numeroRandom);
}

*/

//calculador de promedios

let trabajoPractico1 = parseInt(prompt("INGRESA LA NOTA DE TU TP N°1"));
let trabajoPractico2 = parseInt(prompt("INGRESA LA NOTA DE TU TP N°2"));
let trabajoPractico3 = parseInt(prompt("INGRESA LA NOTA DE TU TP N°3"));

function calculoDeNota(trabajoPractico1, trabajoPractico2, trabajoPractico3){

    return((trabajoPractico1 + trabajoPractico2 + trabajoPractico3) /3);  
}

let promedios = calculoDeNota(trabajoPractico1, trabajoPractico2, trabajoPractico3);

if(promedios > 6){
    alert("Felicidades! estas aprobado, tu promedio es de " + promedios);
}
else {
    alert("Lo siento, estas desaprobado, tu promedio es de " + promedios);
}
