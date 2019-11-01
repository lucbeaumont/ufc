/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log("hello"); // testen of javascript goed gelinkt was


// knop maken van het woord MENU 

var deButton = document.querySelector('#dropdown');

// aanroepen van de class naarBeneden 
function klapuit() {
	var hetMenu = document.querySelector('#hamburger');

	hetMenu.classList.toggle('naarBeneden');


}

//functie runnen als er op de button geklikt wordt

deButton.addEventListener('click', klapuit);
