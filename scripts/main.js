//Cambia el texto que aparece en el Titulo h1
/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';
*/
// Aparece una ventana indicando que no clickees
/*document.querySelector('html').onclick = function(){
    alert('¡Ouch! ¡Deja de pincharme!');
}*/

// Cambia la imagen cuando clickeas en ella
let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
        miImage.setAttribute('src','images/firefox-icon2.png');
    } else {
        miImage.setAttribute('src','images/firefox-icon.png');
    }
}

// Crea un boton para ingresar nombre de usuario
// y personalizar el texto de h1
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
