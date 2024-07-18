export function createTabs() {
	const tabs = ['Home', 'Menu', 'About'];
	const nav = document.getElementById('navbar');

	for (const tab of tabs) {
		const newTab = document.createElement("button");
		newTab.textContent = tab;
		nav.appendChild(newTab);
	}
}