const fs = require('fs');
const colors = require('colors');

const multiplicarTabla = ( base, hasta ) => {
    return new Promise(( resolve, reject ) => {
        let salida = `======================\n     Tabla del ${ base }     \n======================\n`;
        let salidaConsola = `======================\n     ${ colors.inverse('Tabla del '+base) }     \n======================\n`;
        let err = true;
        for (let i = 1; i <= hasta; i++) {
            const resultado = base * i;
            salida += (`${ base } x ${ i } = ${ resultado }\n`);
            salidaConsola += (`${ colors.red(base) } x ${ colors.blue.underline(i) } = ${ colors.brightYellow(resultado) }\n`);
            if(!resultado) err = false;
        }
        ( err )
            ? resolve( { salida, salidaConsola } )
            : reject( colors.red(`La variable ${ base } no es un valor aceptado!` ));
    })
}

const crearArchivo = async( base = 0, listar = false, hasta = 10 ) => {
    const nombreArchivo = `Tabla del ${ base }.txt`;

    try {
        const multiplicar = await multiplicarTabla( base, hasta );
        const archivo = await fs.writeFileSync( `./salida/${ nombreArchivo }`, multiplicar.salida );

        if(listar){
            console.log(multiplicar.salidaConsola);
        }
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}