export const elementCreate = function (type, attributes = {}, parentElement) {
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