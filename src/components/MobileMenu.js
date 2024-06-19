const MOBILE_MENU_SELECTOR = '.dopmenu';
const LEVEL_ZOOM_ELEMENT_SELECTOR = '.div-block-9';
const TOP_MENU_SELECTOR = '.top-m';
const MOBILE_MENU_TOGGLE_BUTTON_SELECTOR = '.omen-menu';

const OPEN_MOBILE_MENU_CLASS = 'open-mobile-menu';

export const openMobileMenu = () => {
	document.body.classList.add(OPEN_MOBILE_MENU_CLASS);
};

export const closeMobileMenu = () => {
	document.body.classList.remove(OPEN_MOBILE_MENU_CLASS);
};

export const toggleMobileMenu = () => {
	document.body.classList.toggle(
		OPEN_MOBILE_MENU_CLASS,
		!document.body.classList.contains(OPEN_MOBILE_MENU_CLASS)
	);
};

export const initMobileMenu = () => {
	const mobileMenuToggleButton = document.querySelector(
		MOBILE_MENU_TOGGLE_BUTTON_SELECTOR
	);

	if (!mobileMenuToggleButton) {
		return;
	}

	mobileMenuToggleButton.addEventListener('click', toggleMobileMenu);
};
