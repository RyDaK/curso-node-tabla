const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            description: 'Base de la operación',
            demandOption: true
        },
        'l' :{
            alias: 'listar',
            type: 'boolean',
            default: false,
            description: 'Lista o no la tabla'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: '10',
            description: 'Hasta que número multiplicará',
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
          throw ("La base tiene que ser un número.");
        }
        return true;
    })
    .argv;

module.exports = argv;