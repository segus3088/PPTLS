/*var nombre = "segus";
var apellido = "Salazar";

alert(nombre + "\n" + apellido);*/

// ------------------------------- Ejemplo Marte ------------------------------------- //

//var peso;
//var pesoEnMarte; //camelCase

//alert("¿Quieres saber tu peso en marte?");

//peso = prompt("¿Cúal es tu peso?", "70");
//peso = parseInt(peso); // recordar adicionarlo a la variable para que lo guarde como INT
// puede usarse tambine la function Number();
//pesoEnMarte = (peso / 9.81) * 3.711;
//console.log(peso);
//alert("Tu peso en marte es: " + pesoEnMarte + " Kg.");

// ------------------------------- Fin Ejemplo Marte --------------------------------- //

// ------------------------------- Ejemplo Piedra papel tijera lagarto spock ------------------------------------- //

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

opciones = ["Rock", "Paper", "Scissors", "Lizard", "spock"];

var opcUser, opcRobot;

function pregunta(){
	opcUser = 5;
	while(opcUser < 0 || opcUser >= 5){// para que le siga preguntando mientras no elija dentro de los correctos
		opcUser = prompt("¿Qué eliges?\nRock: 1\nPaper: 2\nScissors: 3\nLizard: 4\nSpock: 5") - 1; // para no complicar al usuario con lo del 0
		console.log(opcUser);
	}
	alert("You have chosen: " + opciones[opcUser]);

	opcRobot = aletorio(0, 4);
	console.log(opcRobot);
	alert("The Robot have chosen: " + opciones[opcRobot]);
	
	comparar(opcUser, opcRobot);
}

function comparar(elegidoUser, elegidoRobot){
		
	if(elegidoUser == elegidoRobot){ // se coloca papel en ves de un numero para entender mejor el codigo. Es una buena practica
	alert("Empate");
	}

	//cuando el user seleciono piedra

	else if(elegidoRobot == papel && elegidoUser == piedra){
		alert("You lost! :( " + opciones[elegidoRobot] + " Covers " + opciones[elegidoUser]);
	}
	else if(elegidoRobot == tijera && elegidoUser == piedra){
		alert("You Win! :) " + opciones[elegidoUser] + " Crushes " + opciones[elegidoRobot]);
	}
	else if(elegidoRobot == lagarto && elegidoUser == piedra){
		alert("You Win! :) " + opciones[elegidoUser] + " Crushes " + opciones[elegidoRobot]);
	}
	else if(elegidoRobot == spock && elegidoUser == piedra){
		alert("You lost! :( " + opciones[elegidoRobot] + " Vaporizes " + opciones[elegidoUser]);
	}
	

	//cuando el user seleciono papel

	else if(elegidoRobot == tijera && elegidoUser == papel){
		alert("You lost! :( " + opciones[elegidoRobot] + " Cuts " + opciones[elegidoUser]);
	}		
	else if(elegidoRobot == spock && elegidoUser == papel){
		alert("You Win! :) " + opciones[elegidoUser] + " Disproves " + opciones[elegidoRobot]);
	}
	else if(elegidoRobot == lagarto && elegidoUser == papel){
		alert("You lost :( " + opciones[elegidoRobot] + " Eats " + opciones[elegidoUser]);
	}	

	//cuando el user seleciono tijera
	else if(elegidoRobot == spock && elegidoUser == tijera){
		alert("You lost! :( " + opciones[elegidoRobot] + " Smashes " + opciones[elegidoUser]);
	}
	else if(elegidoRobot == lagarto && elegidoUser == tijera){
		alert("You Win! :) " + opciones[elegidoUser] + " Decapitates " + opciones[elegidoRobot]);
	}
	
	//cuando el user seleciono lagarto		
	else if(elegidoRobot == spock && elegidoUser == lagarto){
		alert("You Win! :) " + opciones[elegidoUser] + " Poisons " + opciones[elegidoRobot]);
	}	

	// --- aquí es lo anterioro pero cuando se eligen el robot

	//cuando el robot seleciono piedra

	else if(elegidoUser == papel && elegidoRobot == piedra){
		alert("You Win! :) " + opciones[elegidoUser] + " Covers " + opciones[elegidoRobot]);
	}
	else if(elegidoUser == tijera && elegidoRobot == piedra){
		alert("You lost! :( " + opciones[elegidoRobot] + " Crushes " + opciones[elegidoUser]);
	}
	else if(elegidoUser == lagarto && elegidoRobot == piedra){
		alert("You lost! :( " + opciones[elegidoRobot] + " Crushes " + opciones[elegidoUser]);
	}
	else if(elegidoUser == spock && elegidoRobot == piedra){
		alert("You Win! :) " + opciones[elegidoUser] + " Vaporizes " + opciones[elegidoRobot]);
	}
	

	//cuando el robot seleciono papel

	else if(elegidoUser == tijera && elegidoRobot == papel){
		alert("You Win! :) " + opciones[elegidoUser] + " Cuts " + opciones[elegidoRobot]);
	}		
	else if(elegidoUser == spock && elegidoRobot == papel){
		alert("You lost! :( " + opciones[elegidoRobot] + " Disproves " + opciones[elegidoUser]);
	}
	else if(elegidoUser == lagarto && elegidoRobot == papel){
		alert("You Win! :) " + opciones[elegidoUser] + " Eats " + opciones[elegidoRobot]);
	}	

	//cuando robot seleciono tijera
	else if(elegidoUser == spock && elegidoRobot == tijera){
		alert("You Win! :) " + opciones[elegidoUser] + " Smashes " + opciones[elegidoRobot]);
	}
	else if(elegidoUser == lagarto && elegidoRobot == tijera){
		alert("You lost! :( " + opciones[elegidoRobot] + " Decapitates " + opciones[elegidoUser]);
	}
	
	//cuando el robot seleciono lagarto		
	else if(elegidoUser == spock && elegidoRobot == lagarto){
		alert("You lost! :( " + opciones[elegidoRobot] + " Poisons " + opciones[elegidoUser]);
	}

	//ahora todo lo anterios al contrario de eleccione			
	
	
}

//Me genera un numero aleatorio entero entre un minimo y un maximo
function aletorio(minimo, maximo){
	var n = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return n;
}

function inicio(){
	//alert("FUnciona :)"); //buenas practicas :)

	pregunta();
	//comparar();
	//inicio();
}