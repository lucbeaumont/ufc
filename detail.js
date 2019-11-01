/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/




var deButton = document.querySelector('dropdown'); 

function klapuit () {
	var hetMenu = document.querySelector('hamburger');
	
	hetMenu.classList.toggle('falldown');
	

}

deButton.addEventListener("onclick", klapuit);

