const CUSTOM_LINK_SELECTOR = '[data-href]';
const CUSTOM_LINK_NOT_SELECTORS = ['.mgbutton', '.moove-gdpr-tab-nav'];

export const initCustomLinks = () => {
	const selector = CUSTOM_LINK_NOT_SELECTORS.length > 0 ? `${CUSTOM_LINK_SELECTOR}:not(${CUSTOM_LINK_NOT_SELECTORS.join(',')})` : CUSTOM_LINK_SELECTOR;
	const customLinks = document.querySelectorAll(selector);

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
