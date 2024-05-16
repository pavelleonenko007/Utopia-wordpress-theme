export const refreshWebflowScripts = () => {
	Webflow.destroy();
	Webflow.ready();
	Webflow.require('ix2').init();
	document.dispatchEvent(new Event('readystatechange'));
};

export const calculateScrollPosition = (element) => {
	let scrollPosition = 0;
	while (element) {
		scrollPosition += element.scrollTop;
		element = element.parentElement;
	}
	return scrollPosition;
};

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function calculateZoomPercent(scale, minZoom, maxZoom) {
	return ((scale - minZoom) / (maxZoom - minZoom)) * 100;
}

export function calculateZoomSliderTransform(percentage) {
	percentage = Math.max(0, Math.min(percentage, 50));
	return -(percentage - 50);
}