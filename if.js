var Papel = 1;
var Piedra = 2;
var Tijera = 3;

function aleatorio(max) {
    return Math.ceil(Math.random() * max);
  }

var jugador = 2;
var com = aleatorio(3);

usado.innerHTML = "COM ha usado " + com;

juega();

function juega() {
    if (jugador == 2 && com == 1 || jugador == 1 && com == 3 || jugador == 3 && com == 2) {
    element.innerHTML = "Perdiste";
} 
else if(jugador === com){
    element.innerHTML = "Empate";
}
else{      
    element.innerHTML = "Ganaste";
}
}