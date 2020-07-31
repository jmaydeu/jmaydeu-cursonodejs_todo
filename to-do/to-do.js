const fs = require('fs');
const { describe } = require('yargs');

let listToDo = [];

const persist = () => {

    const data = new Uint8Array(Buffer.from(JSON.stringify(listToDo)));

    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error('No s\'han pogut guardar les dades', err);
        else
            console.log('Dades guardades correctament');
    });

}


const load = () => {
    try {

        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const crear = (descripcion) => {

    load();

    let toDo = {
        descripcion,
        completado: false
    }

    listToDo.push(toDo);

    persist();

    return toDo;

}

const llista = () => {
    load();
    return listToDo;
}

const actualitzar = (descripcion, completado = false) => {

    load();
    let index = listToDo.findIndex(tasca => tasca.descripcion === descripcion);

    if (index >= 0) {
        listToDo[index].completado = completado;
        persist();
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {

    load();
    let nouLlistat = listToDo.filter(tasca => tasca.descripcion !== descripcion);

    if (nouLlistat.length === listToDo.length) {
        return false;
    } else {
        listToDo = nouLlistat;
        persist();
        return true;
    }


    return true;
}


module.exports = {
    crear,
    llista,
    actualitzar,
    borrar
}