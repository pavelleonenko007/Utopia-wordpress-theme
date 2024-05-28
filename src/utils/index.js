import gsap from "gsap";

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

/**
 * Debounce function execution to prevent it from being called more than once within a given timeframe.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The timeframe in milliseconds to debounce the function to.
 * @returns {Function} - The debounced function.
 */
export function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}

/**
 * Throttle function execution to prevent it from being called more than once in a given timeframe.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} delay - The timeframe in milliseconds to throttle the function to.
 * @returns {Function} - The throttled function.
 */
export function throttle(func, delay) {
	let lastCall = 0;
	return function (...args) {
		const now = Date.now();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		func(...args);
	};
}

export const updateDataWfPage = (html) => {
	const regex = /<html[^>]*\sdata-wf-page="([^"]*)"[^>]*>/;
	const dataWfPage = html.match(regex)[1];

	document.querySelector('html').setAttribute('data-wf-page', dataWfPage);
};

export const setCorrectTransformOrigin = (element) => {
	const scrollTop = calculateScrollPosition(element);
	gsap.set(element, {
		transformOrigin: `50% ${scrollTop + window.innerHeight / 2}px`,
	});
};
