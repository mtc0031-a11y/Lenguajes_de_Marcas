// Ahora buscamos los ID que pusiste en el HTML: "personaje", "obstaculo" y "marcador"
const personaje = document.getElementById("personaje"); 
const obstaculo = document.getElementById("obstaculo"); 
const elementoPuntaje = document.getElementById("marcador"); 
let puntaje = 0;

// Función para saltar
function saltar() {
    if (personaje.classList.contains("animate-jump")) return; 
    
    personaje.classList.add("animate-jump");
    
    setTimeout(() => {
        personaje.classList.remove("animate-jump");
    }, 500);
}

// Pulsar la tecla espacio
window.addEventListener("keydown", (evento) => {
    if (evento.code === "Space") saltar();
});

// Verificación de colisión
const verificarEstado = setInterval(() => {
    // Calculamos posiciones reales en la pantalla
    let personajeSuperior = parseInt(window.getComputedStyle(personaje).getPropertyValue("top"));
    let obstaculoIzquierda = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));

    // Lógica de choque
    if (obstaculoIzquierda < 50 && obstaculoIzquierda > 0 && personajeSuperior >= 150) {
        obstaculo.style.animation = "none";
        alert("¡Has perdido! Puntaje final: " + Math.floor(puntaje));
        location.reload(); 
    } else {
        puntaje += 0.01; 
        elementoPuntaje.innerHTML = `Puntos: ${Math.floor(puntaje)}`;
    }
}, 10);