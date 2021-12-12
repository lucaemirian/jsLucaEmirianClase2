function Usuario(nombre, edad, mail) {
    this.nombre = nombre;

    this.edad = edad;

    this.mail = mail;
}

   


const usuario1 = new Usuario('Luca', 25, 'lucaemirian@gmail.com')

const usuario2 = new Usuario('Pablo', 27, 'pablito@gmail.com')

const usuario3 = new Usuario('Marcos', 30, 'marc01hotmail.com')

const usuario4 = new Usuario('Martin', 15, 'tincho@gmail.com')






console.log ( usuario1 )
console.log ( usuario2 )
console.log ( usuario3 )
console.log ( usuario4 )

const values = Object.values (usuario3)
console.log(values)

class Registro {

    constructor(nombre, edad, mail) {
        this.nombre = nombre;
        this.edad = edad;
        this.mail = mail;
    }
}
















