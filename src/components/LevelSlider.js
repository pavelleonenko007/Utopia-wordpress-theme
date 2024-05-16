import gsap from 'gsap';

const ZOOM_SLIDER_SELECTOR = '.zoom-viewer';

export function moveZoomSlider(percent, duration = 0) {
	const slider = document.querySelector(ZOOM_SLIDER_SELECTOR);

	if (!slider) {
		return;
	}

	gsap.to(slider, {
		x: percent + '%',
		duration,
	});
}
