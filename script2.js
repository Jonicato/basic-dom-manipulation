const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
//const paragraph = document.getElementsByClassName('.paragraph');
const pid = document.querySelector('#pid');
//const pid = document.getElementById('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({h1, p, paragraph, pid, input});

/* InnerHTML nos permite modificar el contenido de nuestras etiquetas */
/* InnerText solo mete texto plano y no código en nuestro HTML */
h1.innerHTML = 'Hello, World!! Now, I can manipulate and play with the DOM <br> This shit doesnt work!!!';
/* getAttribute nos ayuda a leer los atributos de nuestros elementos HTML */
console.log(h1.getAttribute('class'));
/* setAttribute nos permite modificar ciertos atributos de los elementos de nuestra página */
h1.setAttribute('class', 'subtitle');
/* classList.add nos permite añadir clases al atributo de clase en nuestras etiquetas HTML */
h1.classList.add('fake');
/* classList.add nos permite remover clases del atributo de clase en nuestras etiquetas HTML */
h1.classList.remove('fake');
/* Con toggle podemos agregar y quitar la clase cada que ejecutemos */
h1.classList.toggle('fake');
/* contains nos devuelve un true/false, dependiendo de si la etiqueta tiene o no la clase que le estamos indicando */
h1.classList.contains('fake');

/* Con estas funciones podemos cambiar el valor de cualquier atributo del input */
input.placeholder = 'Ingresa algo papanatas'
input.value = 'Jonicato'

/* createElement nos ayuda a crear el elemento HTML que nosotros queramos */
const img = document.createElement('img')
img.setAttribute('src', 'https://images.pexels.com/photos/13081054/pexels-photo-13081054.jpeg?cs=srgb&dl=pexels-martinque-13081054.jpg&fm=jpg');
img.setAttribute('width', '200px');

//console.log(img)

/* Eliminamos el contenido que tiene dentro el párrafo del HTML */
pid.innerHTML = '';
/* append y appendChild agrega el contenido que enviamos después del contenido que ya tiene el elemento al cual le estamos añadiendo contenido nuevo */
pid.append(img);