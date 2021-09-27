const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//Proceso de obtención normal:
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// const base = 3;

//Proceso de obtención con YARGS:
// console.log( argv );
// console.log(`La base es: ${argv.base}`);

// console.clear();

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo( base, listar, hasta )
    .then( nombreArchivo => console.log(`El archivo "${ nombreArchivo }" ha sido creado.`))
    .catch( err => console.log(err));