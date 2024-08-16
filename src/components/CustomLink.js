const CUSTOM_LINK_SELECTOR = '[data-href]';

export const initCustomLinks = () => {
	const customLinks = document.querySelectorAll(CUSTOM_LINK_SELECTOR);

	customLinks.forEach((customLink) => {
		customLink.onclick = (event) => {
			const href = customLink.getAttribute('data-href');

			if (!href || href === '#') {
				return;
			}
			
			event.preventDefault();
			event.stopImmediatePropagation();

			window.open(href, '_blank');
		};
	});
};
