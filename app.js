const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tasca = toDo.crear(argv.descripcion);
        console.log(tasca);
        break;

    case 'listar':
        let llista = toDo.llista();

        for (let tasca of llista) {
            console.log('=============================='.green);
            console.log(`Descripcion: ${ tasca.descripcion }`.red);
            console.log(`Completado: ${ tasca.completado }`.red);
            console.log('=============================='.green);
        }
        break;

    case 'actualizar':
        let actualitzat = toDo.actualitzar(argv.descripcion, argv.completado);
        console.log(actualitzat);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
    default:
        console.log('Acció no reconeguda');
}