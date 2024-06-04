const LEFT_MENU_SELECTOR = '.left-menu';

export const highlightLeftMenu = () => {
	const leftMenu = document.querySelector(LEFT_MENU_SELECTOR);

	if (!leftMenu) {
		return;
	}

	leftMenu.classList.add('left-menu--light-gray');
};

export const unhighlightLeftMenu = () => {
	const leftMenu = document.querySelector(LEFT_MENU_SELECTOR);

	if (!leftMenu) {
		return;
	}

	leftMenu.classList.remove('left-menu--light-gray');
};
