import frontEntrance from './images/tfrFront.jpg'

export function displayContent() {
	const mainContainer = document.getElementById('divcontent');
	const headingContainer = document.createElement('div');
	headingContainer.id = 'headingContainer';
	mainContainer.appendChild(headingContainer);

	const mainHeading = document.createElement('h1');
	mainHeading.textContent = ('The Taste Tester');
	headingContainer.appendChild(mainHeading)

	const heroContainer = document.createElement('div');
	heroContainer.id = 'heroContainer';
	mainContainer.appendChild(heroContainer);

	const heroImg = document.createElement('img');
	heroImg.src = frontEntrance;
	heroContainer.appendChild(heroImg);

	const taglineContainer = document.createElement('div');
	taglineContainer.id = 'taglineContainer';
	mainContainer.appendChild(taglineContainer);

	const emphasize = document.createElement("em");

	taglineContainer.appendChild(emphasize);

	const tagline = document.createElement('p');
	tagline.id = 'tagline';
	tagline.textContent = 'A fine dining experience for the most obnoxiously refined of diners.';
	emphasize.appendChild(tagline);
}