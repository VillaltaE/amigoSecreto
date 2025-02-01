// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se inicializa lista de amigos
let amigos = [];
// Funcion para agregar amigo
function agregarAmigo() {
let amigo = document.getElementById('amigo').value;

if (amigo == "") {alert("Por favor, inserte un nombre.");}
  // Expresión regular que permite solo letras (sin espacios, números ni caracteres especiales)
  const regex = /^[a-zA-Z]+$/;

if (!regex.test(nombre)) {
    alert("El nombre solo debe contener letras, sin espacios, números ni caracteres especiales.");
    return; // Detiene la ejecución de la función
}
else {amigos.push(amigo);
    limpiarCaja();
    }
    recorreAmigos(amigos);
 }
 

// Esta función limpia la caja para colocar un nuevo nombre
function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo').value= '';       
}


//Esta función agrega nombres a la lista con tag <li>
function recorreAmigos(a) {     
    document.getElementById("listaAmigos").textContent = ""; 
      
    a.forEach((element)  =>  {
            if (element.trim() !== ""){
            //crear nuevo elemento <li>
            const nuevoElemento = document.createElement('li');
             nuevoElemento.textContent = element;
               //Agregar el nuevo <li> a la lista
            document.getElementById("listaAmigos") .appendChild(nuevoElemento);
                       }
            
                
        }  )        
                 
                }   




     // Función para sortear el amigo secreto          
                
    function sortearAmigo() {     
            if(document.getElementById("listaAmigos").textContent !== ""){
        // Obtener todos los elementos <li> de la lista
                const lista = document.getElementById("listaAmigos");
                const nombres = Array.from(lista.getElementsByTagName("li"));
                // Verificar que hay al menos un nombre en la lista
                if (nombres.length > 0) {
                // Seleccionar un nombre aleatorio
                    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
                    const ganador = nombres[indiceAleatorio].textContent;
                // Mostrar el mensaje con el ganador
                document.getElementById("resultado").textContent = `El ganador es: ${ganador}`;
            } else {
                alert("No hay nombres en la lista para seleccionar un ganador.");
                          
                        }
                    
                    
                    }   }                     
                    