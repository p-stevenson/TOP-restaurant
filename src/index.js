import './style.css';
import {createTabs} from "./createTabs";
import {displayHome} from "./home";
import {displayMenu} from "./menu";

if (process.env.NODE_ENV !== 'production') {
	console.log('DEV MODE');
} else if (process.env.NODE_ENV !== 'develompent') {
	console.log('PRODUCTION MODE');
}

document.addEventListener('DOMContentLoaded', () => {
	const handleTabClick = (event) => {
		if (event.target.textContent === 'Home') {
			displayHome();
		} else if (event.target.textContent === 'Menu') {
			displayMenu();
		}
	};
	createTabs(undefined, undefined, handleTabClick);
});

displayHome();