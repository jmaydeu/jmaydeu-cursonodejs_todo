const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripció de la tasca a realitzar'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si está completat'
};


const argv = require('yargs').command('crear', 'Crea una tasca', {
    descripcion
}).command('actualizar', 'Actualitza una tasca', {
    descripcion,
    completado
}).command('borrar', 'Borra una tasca', {
    descripcion
}).help().argv;


module.exports = {
    argv
}