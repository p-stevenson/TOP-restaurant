import frontEntrance from './images/tfrFront.jpg'
import {eleCreate} from "./elementCreate";

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
	}, emphasize);
	console.log('Home Loaded');
}