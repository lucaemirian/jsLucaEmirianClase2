let pedirNombre = prompt ( 'Hola! Mi nombre es Luca, ¿Cuál es el tuyo?' )



if (!nombre && nombre == '') {
   alert('Para continuar debes cargar tu nombre!')
}

else {
    alert('Hola '+ nombre + ', mucho gusto!')
}


let pedirEdad = prompt ( '¿Podrías indicarme cuantos años tenes?')

if (edad <= 18) {
    alert('Para continuar debes pedirle permiso a tus padres')
}
else {
    alert('¡Felicitaciones!, Tenes ' + edad + ' años, podes entrar en este sitio')
 }


<<<<<<< HEAD
=======

function crearUsuario( email, nombre, edad ) {
>>>>>>> 942db1958fe104ad4ce4077d6f1844602d43000f

function crearUsuario( email, nombre, edad ) {

    const nuevoUsuario = {
        email,
        nombre,
        edad,
    }

console.log( 'Se creo el usuario: ' + JSON.stringify(nuevoUsuario))

}

<<<<<<< HEAD
    const nuevoUsuario = {
        email,
        nombre,
        edad,
    }

console.log( 'Se creo el usuario: ' + JSON.stringify(nuevoUsuario))

}

const email = prompt('Por favor, para generar tu usuario debes ingresar una email válido')

crearUsuario ( email, nombre, edad )
=======
const email = prompt('Por favor, para generar tu usuario debes ingresar una email válido')

crearUsuario ( email, nombre, edad )
>>>>>>> 942db1958fe104ad4ce4077d6f1844602d43000f
