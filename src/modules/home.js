import frontEntrance from '../images/tfrFront.jpg'
import {elementCreate} from "./elementCreate";

export function displayHome() {

	const mainContainer = document.getElementById('divcontent');

	const headingContainer = elementCreate('div', {id: 'headingContainer'}, mainContainer)
	elementCreate('h1', {id: 'mainHeading', textContent: 'The Taste Tester'}, headingContainer)

	const heroContainer = elementCreate('div', {id: 'heroContainer'}, mainContainer)
	elementCreate('img', {
		id: 'heroImg',
		alt: 'The Grand front entrance of the restaruant',
		height: 500,
		src: frontEntrance
	}, heroContainer);

	const taglineContainer = elementCreate('div', {id: 'taglineContainer'}, mainContainer);
	const emphasize = elementCreate('em', {}, taglineContainer);
	elementCreate('p', {
		id: 'tagline',
		textContent: 'A fine dining experience for the most obnoxiously refined of diners.'
	}, emphasize);
}