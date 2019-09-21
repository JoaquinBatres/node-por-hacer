const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crear, getListar, Actualizar, borrado} = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
	case 'crear':
		let tarea = crear(argv.descripcion);
		console.log(tarea);
	break;
	case 'listar':
		let listado = getListar();
		for (let tarea of listado) {
			console.log('=======Por Hacer========='.green);
			console.log(tarea.descripcion);
			console.log('Estado',tarea.completado);
			console.log('========================='.green);
		}
	break;
	case 'actualizar':
		let actualizado = Actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
	break;
	case 'borrar':
		let eliminado = borrado(argv.descripcion);
		console.log(eliminado);
	break;
	default: console.log("comando incorrecto");
}