import './style.css';
import {createTabs} from "./createTabs";
import {displayImage} from "./home.js";

if (process.env.NODE_ENV !== 'production') {
	console.log('DEV MODE');
} else if (process.env.NODE_ENV !== 'develompent') {
	console.log('PRODUCTION MODE');
}

document.addEventListener('DOMContentLoaded', () => {
	const handleTabClick = (event) => {
		console.log(`${event.target.textContent}  clicked!`);
	};
	createTabs(undefined, undefined, handleTabClick);
	displayImage();
});