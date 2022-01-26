let nombre = prompt ( 'Hola! Mi nombre es Luca, ¿Cuál es el tuyo?' )



if (!nombre && nombre == '') {
   alert('Para continuar debes cargar tu nombre!')
}

else {
    alert('Hola '+ nombre + ', mucho gusto!')
}


let servicio = prompt ( '¿Podrías indicarme en que servicio estas interesado?')

if (servicio <= 'remoto') {
    alert('Para continuar debes comunicarte por whatsapp, a continuación verá los valores')
}
else {
    alert('Por favor comunicate por telefono, a continuación verá los valores')
 }

const servicios = [ {id: 1, servicio: "Formateo de PC", valor: "$2800"},
                    {id: 2, servicio: "Limpieza de virus", valor: "$1500"},
                    {id: 3, servicio: "Instalacion de software", valor: "$2800"},
                    {id: 4, servicio: "Upgrade de Hardware", valor: "$2800"},
]


let servicio = document.getElementsByClassName ("service");
console.log(service[1].innerHTML);
console.log(service[2].innerHTML);
console.log(service[3].innerHTML);
console.log(service[4].innerHTML);


    



