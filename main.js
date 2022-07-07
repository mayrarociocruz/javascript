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