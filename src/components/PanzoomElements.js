const PANZOOM_ELEMENT_SELECTOR = '.uto-block';
const SHOW_IMAGE_ON_HOVER_ELEMENT_SELECTOR = '[data-hover="image"]';
const BG_COVER_IMAGE_SELECTOR = '.img-cover-hover';

export const initPanzoomElements = () => {
	const panzoomElements = Array.from(
		document.querySelectorAll(PANZOOM_ELEMENT_SELECTOR)
	);
	const showImageOnHoverElement = panzoomElements.filter((element) =>
		element.matches(SHOW_IMAGE_ON_HOVER_ELEMENT_SELECTOR)
	);
	const bgCoverImage = document.querySelector(BG_COVER_IMAGE_SELECTOR);

	if (!bgCoverImage) return;

	showImageOnHoverElement.forEach((element) => {
		element.onmouseenter = (event) => {
			const image = element.querySelector('img');

			if (!image) return;

			const imageSrc = image.getAttribute('src');

			bgCoverImage.setAttribute('src', imageSrc);

			bgCoverImage.style.opacity = 1;

			panzoomElements.forEach((el) => {
				if (el !== element) {
					el.style.opacity = 0;
				} else {
					el.style.opacity = 1;
				}
			});
		};
		element.onmouseleave = () => {
			bgCoverImage.style.opacity = 0;

			panzoomElements.forEach((el) => {
				el.style.opacity = 1;
			});
		};
		element.onclick = (event) => {
			element.onmouseenter = null;
			element.dispatchEvent(new Event('mouseleave'));
			setTimeout(() => {
				element.onmouseleave = null;
			}, 100)
		}
	});
};
