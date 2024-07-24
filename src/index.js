import './style.css';
import {createTabs} from "./createTabs";
import {displayHome} from "./home";
import {displayMenu} from "./menu";

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
		}
	})
})