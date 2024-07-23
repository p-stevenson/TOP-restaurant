import './style.css';
import {createTabs} from "./createTabs";
import {displayHome} from "./home";
import {displayMenu} from "./menu";


//document.addEventListener('DOMContentLoaded', () => {
//	const handleTabClick = (event) => {
//		if (event.target.textContent === 'Home') {
//			displayHome();
//		} else if (event.target.textContent === 'Menu') {
//			displayMenu();
//		}
//	};
//	createTabs(undefined, undefined, handleTabClick);
//}, {once: true});

const defaultDOMState = document.body.innerHTML;
const resetDOM = function () {
	document.body.innerHTML = defaultDOMState;
}

document.addEventListener('DOMContentLoaded', () => {
	createTabs();
	displayHome()
}, {once: true});

document.addEventListener('click', (event) => {
	resetDOM()
	createTabs();
	if (event.target.textContent === 'Menu') {
		displayMenu();
	} else if (event.target.textContent === 'Home') {
		displayHome();
	}
})