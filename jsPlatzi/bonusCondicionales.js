// const tipoDeSuscripcion = 'Expert';

// function tipoSuscripcion(suscripcion){
//     if (suscripcion === 'Free') {
//         console.log('Solo puedes tomar los cursos gratis');
//         return;
//     }
//     if (suscripcion === 'Basic'){
//         console.log('Puede tomar casi todos los cursos de Platzi durante un mes');
//         return;
//     }
//     if (suscripcion === 'Expert'){
//         console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
//         return;
//     }
//     if (suscripcion === 'ExpertPlus'){
//         console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año')
//         return;
//     }
//     console.log('Este tipo de suscripcion no existe.')
// }
// tipoSuscripcion(tipoDeSuscripcion);

// Replicar el mismo comportamiento pero con objetos o arrays.
const tipoSuscripcion = {
    Free:'Solo puedes tomar los cursos gratis',
    Basic:'Puede tomar casi todos los cursos de Platzi durante un mes',
    Expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};
const array = Object.keys(tipoSuscripcion)
console.log(array);
for (i in array) {
    console.log(array[i]);
    // if i == ''
}