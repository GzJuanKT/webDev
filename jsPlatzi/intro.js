let nombre = 'Juan David';
let apellido = 'Ramos';
let usPlatzi = 'GzJuanKT';
let edad = 18;
let email = 'juandadelacruz2004@hotmail.com'
let mayorEdad = true;
let dineroAhorrado = 500000
let deudas = 140000

console.log('Nombre completo: '+nombre+' '+apellido)
console.log('Dinero real: '+(dineroAhorrado-deudas))

const tipoDeSuscripcion = "ExpertPlus";

// switch (tipoDeSuscripcion) {
//     case "Free":
//         console.log("Solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         break;
//     case "Expert":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         break;
//     case "ExpertPlus":
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         break;
// }

// if (tipoDeSuscripcion === 'Free') {
//     console.log('Solo puedes tomar los cursos gratis');
// }
// else if (tipoDeSuscripcion === 'Basic'){
//     console.log('Puede tomar casi todos los cursos de Platzi durante un mes');
// }
// else if (tipoDeSuscripcion === 'Expert'){
//     console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
// }
// else{
//     console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año')
// }

function tipoSuscripcion(suscripcion){
    if (suscripcion === 'Free') {
        console.log('Solo puedes tomar los cursos gratis');
        return;
    }
    if (suscripcion === 'Basic'){
        console.log('Puede tomar casi todos los cursos de Platzi durante un mes');
        return;
    }
    if (suscripcion === 'Expert'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
        return;
    }
    if (suscripcion === 'ExpertPlus'){
        console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año')
        return;
    }
    console.log('Este tipo de suscripcion no existe.')
}

tipoSuscripcion(tipoDeSuscripcion);

for (let i = 10; i > 0; i--) {
    console.log(i)
    if (i === 4){
        break;
    }
}

let i = 0;
while(i<10){
    console.log('WHILE: '+i++);

}

i = 10;
while(i>0){
    console.log('WHILE DESC: '+ i--)
}


// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let numeros = [1,2,3,4,5]
// for (let j = 0; j < numeros.length; j++) {
//     console.log('FOR I: '+j)
// }
// function prueba(array){
//
//     return array[0];
// }
// console.log(prueba(numeros));

function pruebaDos(array = []){
    for (let j = 0; j < array.length; j++) {
        console.log(j);
    }
}
pruebaDos(numeros);

// Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos
//  uno por uno, (No se vale imprimir el objeto completo)
function pruebaTres(obj = {}){
    for (const objKey in obj) {
        console.log(`VALOR: ${obj[objKey]}`)
    }
}
const objeto = {
    nombre:'Fulanito',
    edad: 3,
};
pruebaTres(objeto)

// Otra forma =>
function imprimirValoresObj(obj){
    const objToArray = Object.values(obj);
    for (let j = 0; j < objToArray.length; j++) {
        console.log(objToArray[j])
    }
}
imprimirValoresObj(objeto);