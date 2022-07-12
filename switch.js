var Papel = 1;
var Piedra = 2;
var Tijera = 3;

function aleatorio(max) {
    return Math.ceil(Math.random() * max);
}

var jugador = 2;
var com = aleatorio(3);

switch (true) {
    case (jugador == 2 && com == 1):
        console.log("Perdiste!");
        break;
    case (jugador == 1 && com == 3):
        console.log("Perdiste!");
        break;
    case (jugador == 3 && com == 2):
        console.log("Perdiste!");
        break;
    case (jugador === com):
        console.log("Empate!");
        break;
    default:
        console.log("Ganaste");
        break;
}