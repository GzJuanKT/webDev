// que es un array?
// - es una lista de elementos.
const array = [1,'jajaja', true, false];

// que es un objeto?
// - Es una lista de elementos, PERO cada elemento tiene un nombre CLAVE
const obj = {
    nombre:'Fulanito',
    edad: 3,
};
for (const objKey in obj) {
    console.log(`KEY: ${objKey}, VALOR: ${obj[objKey]}`)
}
// Cuando es mejor usar objetos o arrays?

// - Si necesitas almacenar una colección de elementos que se pueden acceder por índice,
// entonces un array es la opción correcta. Los arrays son más eficientes en términos de memoria
// y procesamiento para almacenar elementos que se acceden por su índice numérico.

// - Si necesitas almacenar elementos que se acceden por una clave, entonces un objeto es la opción correcta.
// Los objetos son más eficientes en términos de tiempo de acceso para almacenar elementos que se acceden por su clave.

// - Si necesitas almacenar información relacionada con una entidad, como los detalles de un usuario o una configuración de aplicación,
// entonces un objeto es una buena opción. Los objetos pueden representar objetos del mundo real y son más intuitivos de trabajar en esta situación.

// - Si necesitas operar en una colección de elementos de manera iterativa, como en un ciclo for, entonces un array es la
// opción correcta. Los arrays son fáciles de recorrer de manera iterativa y realizar operaciones en cada elemento.

// Puedo mezclar arrays con objetos o incluso objetos con arrays?
// - Si. Los arrays pueden guardar objetos, y los objetos pueden guardar arrays entre sus propiedades

const datos = {
    nombre:'Juan',
    apellido: 'Ramos',
    comidaFav: ['Pollo', 'Pastas', 'Guacamole'],
    bebidaFav: ['Pepsi', 'Kola Roman'],
}

