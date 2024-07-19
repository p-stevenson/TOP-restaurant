import frontEntrance from './images/tfrFront.jpg'

export function displayImage() {
	const imgContainer = document.getElementById('imgContainer');
	const hero = document.createElement("img");
	hero.src = frontEntrance;
	hero.height = 500;
	imgContainer.appendChild(hero);
}