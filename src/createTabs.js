export function createTabs(tabLabels = ['Home', 'Menu', 'About'], parentElementId = 'navbar', tabClickHandler = null) {
	const nav = document.getElementById(parentElementId);

	if (!nav) {
		console.error(`Error with id "${parentElementId} not found.`);
		return;
	}
	for (const tab of tabLabels) {
		const newTab = document.createElement("button");
		newTab.textContent = tab;
		if (tabClickHandler) {
			newTab.addEventListener('click', tabClickHandler);
		}
		nav.appendChild(newTab);
	}
}