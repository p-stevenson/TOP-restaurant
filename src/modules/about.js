import {elementCreate} from "./elementCreate";
import {paragraph1, paragraph2, paragraph3} from "./aboutText";

export function displayAbout() {

	const mainConatainer = document.getElementById('divcontent');

	const aboutContainer = elementCreate('div', {id: 'aboutContainer'}, mainConatainer);

	const aboutText = [paragraph1, paragraph2, paragraph3];

	aboutText.forEach((para) => {

		elementCreate('p', {
			class: 'aboutContent',
			textContent: para
		}, aboutContainer);
	});
}
