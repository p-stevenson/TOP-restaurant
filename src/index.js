import './style.css';
import {createTabs} from "./modules/createTabs";
import {displayHome} from "./modules/home";
import {displayMenu} from "./modules/menu";
import {displayAbout} from "./modules/about";


createTabs();

document.addEventListener('DOMContentLoaded', () => {
	displayHome();
	const mainContainer = document.getElementById('divcontent');
	const navbar = document.getElementById('navbar');

	navbar.addEventListener('click', (event) => {
		while (mainContainer.firstChild) {
			mainContainer.removeChild(mainContainer.firstChild);
		}
		if (event.target.value === 'Menu') {
			displayMenu()
		} else if (event.target.value === 'Home') {
			displayHome();
		} else if (event.target.value === 'About') {
			displayAbout();
		}
	})
})