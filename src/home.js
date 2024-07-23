import frontEntrance from './images/tfrFront.jpg'

export const eleCreate = function (type, attributes = {}, parentElement) {
	const element = document.createElement(type);
	for (const attribute in attributes) {
		if (attribute === 'textContent') {
			element.textContent = attributes[attribute];
		} else if (attribute === 'src') {
			element.src = attributes[attribute];
		} else {
			element.setAttribute(attribute, attributes[attribute]);
		}
	}
	if (parentElement) {
		parentElement.appendChild(element);
	}
	return element;
}

export function displayHome() {

	const mainContainer = document.getElementById('divcontent');

	const headingContainer = eleCreate('div', {id: 'headingContainer'}, mainContainer)
	eleCreate('h1', {id: 'mainHeading', textContent: 'The Taste Tester'}, headingContainer)

	const heroContainer = eleCreate('div', {id: 'heroContainer'}, mainContainer)
	eleCreate('img', {
		id: 'heroImg',
		alt: 'The Grand front entrance of the restaruant',
		height: 500,
		src: frontEntrance
	}, heroContainer);

	const taglineContainer = eleCreate('div', {id: 'taglineContainer'}, mainContainer);
	const emphasize = eleCreate('em', {}, taglineContainer);
	eleCreate('p', {
		id: 'tagline',
		textContent: 'A fine dining experience for the most obnoxiously refined of diners.'
	}, emphasize)
}