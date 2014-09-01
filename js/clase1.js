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
	

	else if(elegidoUser == papel){ //cuando el user seleciono papel

		if(elegidoRobot == tijera){
			alert("You lost! :( " + opciones[elegidoRobot] + " Cuts " + opciones[elegidoUser]);
		}		
		else if(elegidoRobot == spock){
			alert("You Win! :) " + opciones[elegidoUser] + " Disproves " + opciones[elegidoRobot]);
		}
		else if(elegidoRobot == lagarto){
			alert("You lost :( " + opciones[elegidoRobot] + " Eats " + opciones[elegidoUser]);
		}
		else("Falta");
	}

	else if(elegidoUser == tijera){ //cuando el user seleciono tijera

		if(elegidoRobot == spock){
			alert("You lost! :( " + opciones[elegidoRobot] + " Smashes " + opciones[elegidoUser]);
		}
		else if(elegidoRobot == lagarto){
			alert("You Win! :) " + opciones[elegidoUser] + " Decapitates " + opciones[elegidoRobot]);
		}
		else{
			alert("Falta");
		}	

	}
	

	else if(elegidoUser == lagarto){ //cuando el user seleciono lagarto
		
		if(elegidoRobot == spock){
			alert("You Win! :) " + opciones[elegidoUser] + " Poisons " + opciones[elegidoRobot]);
		}			
		else{
			alert("falta");
		}	
	}

	// creo que ya no se necesita 
	/*else if(elegidoUser == spock){ //cuando el user seleciono spock

		if(elegidoRobot == papel){
			alert("You lost! :(");
		}
		else if(elegidoRobot == tijera){
			alert("You Win! :)")
		}
		else if(elegidoRobot == lagarto){
			alert("You falta :P");
		}
		else if(elegidoRobot == piedra){
			alert("You lost! :( " + opciones[elegidoRobot] + " Vaporizes " + opciones[elegidoUser]);
		}
	}*/

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