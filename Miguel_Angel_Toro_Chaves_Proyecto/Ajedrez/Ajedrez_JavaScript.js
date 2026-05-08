const tablero = document.getElementById('tablero');

const piezasIniciales = {// array de las piezas del ajedrez
    0: ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'], // son las piezas importantes negras
    1: ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'], // son los peones negros
    6: ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'], // son los peones blancos
    7: ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']  // son las piezas importantes blancas
};

// Bucle para las FILAS
for (let fil = 0; fil < 8; fil ++) {
    
    //Bucle para las COLUMNAS
    for (let col = 0; col < 8; col++) {
        const cas = document.createElement('div');
        cas.classList.add('casilla');

        // este if es para el tablero
        if ((fil + col) % 2 === 0) {
            cas.classList.add('blanca');
        } else {
            cas.classList.add('negra');
        }

        // este es el if es para añadir piezas
        if (piezasIniciales[fil]) {
            cas.innerText = piezasIniciales[fil][col] || '';
        }

        tablero.appendChild(cas);
    }
}