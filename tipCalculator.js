
let propina = document.getElementById("scale");
let partes_iguales =  document.getElementById("_checkbox");
let todos_pagan = false;

function tipChange() {	  //función para el slider de propina  
 console.log(propina.value);
}

function partsChange() { //Función para el checkbox
 todos_pagan = !todos_pagan;
}

