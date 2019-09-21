const fs = require('fs');

let listadoporhacer = [];

const guardarDB = () =>{

	let data = JSON.stringify(listadoporhacer);
	fs.writeFile(`db/data.json`, data, (err) => {
	  if (err) throw new Error('No se pudo gravar');
	});

}
const cargarDB = () =>{
	try{
		listadoporhacer =  require('../db/data.json');
	}
	catch(error){
		listadoporhacer = [];
	}
}
const crear = (descripcion) =>{
	cargarDB();
	let porhacer = {
		descripcion,
		completado: false
	};

	listadoporhacer.push(porhacer);
	guardarDB();
	return porhacer;
}
const getListar = () =>{
	cargarDB();
	return listadoporhacer;
}
const Actualizar = (descripcion, completado) =>{
	cargarDB();
	let index = listadoporhacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	})
	if(index >= 0){
		listadoporhacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}

}
const borrado = (descripcion) =>{
	cargarDB();
	let index = listadoporhacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	})
	if(index >= 0){
		listadoporhacer.splice(index, 1);
		guardarDB();
		return true;
	}else{
		return false;
	}
}
module.exports = {
	crear,
	getListar,
	Actualizar,
	borrado
}