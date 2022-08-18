const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btnCalcular = document.querySelector('#btnCalcular')
const result = document.querySelector('#result');

/* addEventListener(nombreEvento, function) */
/* form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    let suma = (parseInt(input1.value)) + (parseInt(input2.value));
    result.innerText = `El resultado de la suma es: ${suma}`;
} */

btnCalcular.addEventListener('click', sumarInputValues)
h1.addEventListener('copy', textoCopiado)
//h1.addEventListener('mousemove', textoCopiado)
input1.addEventListener('focus', focusInput1)
input2.addEventListener('focus', focusInput2)

function sumarInputValues(event) {
    //console.log({event});
    //event.preventDefault();
    let suma = (parseInt(input1.value)) + (parseInt(input2.value));
    result.innerText = `El resultado de la suma es: ${suma}`;
}

function textoCopiado() {
    alert('Has copiado el texto, capo!!!')
}

function focusInput1() {
    result.innerText = `Vamoh espabila!`;
}

function focusInput2() {
    result.innerText = `Ingresa algo rápido, capo`;
}