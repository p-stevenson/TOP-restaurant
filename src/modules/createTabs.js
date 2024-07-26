export function createTabs(tabLabels = ['Home', 'Menu', 'About'], parentElementId = 'navbar') {
	const nav = document.getElementById(parentElementId);

	if (!nav) {
		console.error(`Error with id ${parentElementId} not found.`);
		return;
	}
	for (const tab of tabLabels) {
		const newTab = document.createElement("button");
		newTab.textContent = tab;
		newTab.value = tab;
		newTab.id = tab;
		nav.appendChild(newTab);
	}
	console.log('got this far')
}