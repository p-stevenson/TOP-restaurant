import {elementCreate} from "./elementCreate";

const cache = {}

function importAll(r) {
	r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('../images/recipes/', false, /\.(jpeg|jpg)$/));

function convertPathToTitle(path) {
	return path
		.replace(/^.*[\\/]/, '')           // Remove directory path
		.replace(/\.[^/.]+$/, '')          // Remove file extension
		.replace(/[-_]/g, ' ')             // Replace dashes/underscores
		.replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
}

function appendImages() {
	let i = 0;
	for (let item in cache) {
		const imagePath = Object.keys(cache)[i];
		const title = convertPathToTitle(imagePath);
		const dishContainer = elementCreate('div', {class: 'dish', id: `${title}-container`}, menuItemContainer)
		elementCreate('h2', {id: `${title}-h2`, textContent: title}, dishContainer)
		elementCreate('img', {id: `${title}-image`, alt: title, src: cache[item]}, dishContainer);
		i++;
	}
}

export function displayMenu() {
	const mainContainer = document.getElementById('divcontent');
	const headingContainer = elementCreate('div', {id: 'headingContainer'}, mainContainer)

	elementCreate('h1', {id: 'mainHeading', textContent: "Nausea"}, headingContainer)

	const menuItemContainer = elementCreate('div', {id: 'menuItemContainer'}, mainContainer)
	appendImages();
}

