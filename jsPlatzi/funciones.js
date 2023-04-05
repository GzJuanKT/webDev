function fullName(name, lastName){
    return name + ' ' + lastName;
}
function saludo(name, lastName, nickName){
    const completeName = fullName(name, lastName);
    console.log('Mi nombre completo es: '+completeName+`.\nPero prefiero que me digas: ${nickName}.`);
}
saludo('Juan David','Ramos', 'Juanda');
//
// app que le pregunte a un usuario cuanto es 2+2. SI responde bien, mostramos msg de congrats
// Pero si responde mal, volvemos a empezar.

// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// r1.question('Cual es tu nombre? ', (nombre) => {
//     console.log(`hola, ${nombre}`);
//     r1.close();
// })

// let operacion;
// do {
//     operacion = parseInt(prompt('Cuanto es 2 + 2?'));
//     if (operacion === 4){
//         console.log('Felicidades la respuesta es correcta.')
//     }
// } while (operacion !== 4);

// otra forma
let resultado;
while(resultado == 4){
    let pregunta = parseInt(prompt('Cuanto es 2+2?'));
    if (pregunta === resultado){
        console.log('Congrats, la respuesta es verdadera.')
    };
};

