
let propina = document.getElementById("scale"); // Porcentaje propina
let partes_iguales =  document.getElementById("_checkbox");
let todos_pagan = false;
let propinaDisplay = document.getElementById("propinaDisplay");
let parcial = document.querySelector(".parcial");
let subtotal =  document.querySelector(".subtotal");
let subtotal_label =  document.querySelector(".subtotal-label");
let cuenta = document.querySelector('.cuenta'); //Suma total de la cuenta
let personas =  document.querySelector(".personas"); //N de personas
let total = document.querySelector(".total");
//Bubbly button 

let animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

//General functionality

function tipChange() {	  //función para el slider de propina  
 total.textContent = '';
 propinaDisplay.textContent =  propina.value + ' %';
}

subtotal.style.visibility = "hidden";
parcial.style.visibility = "visible";
subtotal_label.textContent = 'Ingresa tu consumo';

function partsChange() { //Función para el checkbox
 total.textContent = '';
 subtotal.textContent = '';
 parcial.value = 0;
 todos_pagan = !todos_pagan;
 if(todos_pagan){
    parcial.style.visibility = "hidden";
    subtotal_label.textContent = 'Subtotal (sin propina) ';
    subtotal.style.visibility = "visible";
 }else {
    subtotal.style.visibility = "hidden";
    parcial.style.visibility = "visible";
    subtotal_label.textContent = 'Ingresa tu consumo';
 }
}
let errMessage = '';

function calcular() {
    total.textContent = '';
    let datosValidos = true; 
    datosValidos = validar();
    if(datosValidos){
        let propinaPorcentual = propina.value/100;
        let factor = (1 + propinaPorcentual);

        total.textContent = todos_pagan==true?
        '$ ' + (cuenta.value*factor)/personas.value:
        '$ ' + (parseInt(parcial.value) + parseInt(((cuenta.value*propinaPorcentual)/personas.value)));

        subtotal.textContent = todos_pagan==true?
        '$ ' + cuenta.value/personas.value:
        '';
    }else{
        alert(errMessage);
    }
    console.group('Datos');
        console.log('Cuenta: ', cuenta.value);
        console.log('Propina: ',propina.value);
        console.log('Personas: ', personas.value);
        console.log('Parcial: ',parcial.value);
        console.log(errMessage);
     console.groupEnd();
}

function validar(){
    if(cuenta.value<=0 || personas.value<=0){
        errMessage = 'No has llenado todos los valores o son incorrectos'
        return false;
    } else if(todos_pagan===false && parcial.value==0){
        errMessage = 'Olvidaste ingresar tu consumo personal' 
        return false;
    }else {
        return true;
    }
}

