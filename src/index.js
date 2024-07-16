import './styles/index.scss';
import './webflow/js/main.js';

import barba from '@barba/core';
import gsap from 'gsap';
import panzoom from 'panzoom';

import {
	cleanupImageGalleryDialogs,
	initContentGalleries,
	initPostGalleries,
	initThumbnailGallery,
} from './components/ImageGalleryDialog.js';
import {
	highlightLeftMenu,
	unhighlightLeftMenu,
} from './components/LeftMenu.js';
import { moveZoomSlider } from './components/LevelSlider.js';
import { initLoader } from './components/Loader.js';
import { closeMobileMenu, initMobileMenu } from './components/MobileMenu.js';
import { initPanzoomElements } from './components/PanzoomElements.js';
import { initSearchForm } from './components/SearchForm.js';
import { initSubscribeForm } from './components/SubscribeForm.js';
import { initVideoPlayers } from './components/VideoPlayer.js';
import { alignContentAndSidebar } from './pages/ConcertPage.js';
import { initLoadMoreArticlesButton } from './pages/IdeaPage.js';
import {
	getPreviousPanCoordinates,
	rememberPreviousPanCoordinates,
	resetPreviousPanCoordinates,
} from './state/index.js';
import {
	UrlValidator,
	calculateZoomPercent,
	calculateZoomSliderTransform,
	debounce,
	refreshWebflowScripts,
	setCorrectTransformOrigin,
	updateDataWfPage,
	wait,
} from './utils/index.js';

let panzoomInstance;
let panzoomObserver;
let maxPanZoom;
let isPanzoomObserverEnabled = false;
let isTransitioning = false;

function fixPanzoomOnMouseDown() {
	document
		.querySelectorAll('a')
		.forEach((a) => a.setAttribute('draggable', 'false'));
}

function setupPanzoomObserver() {
	if (window.innerWidth < 768 || isTransitioning || isPanzoomObserverEnabled) {
		return;
	}

	const panzoomElements = document.querySelectorAll('.uto-block');

	if (panzoomElements.length === 0) {
		return;
	}

	panzoomObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('opview');
				}

				entry.target.classList.toggle(
					'uto-block--unobserved',
					!entry.isIntersecting
				);
			});
		},
		{
			threshold: 0.2,
			rootMargin: '-10%',
		}
	);

	panzoomElements.forEach((panzoomElement) => {
		panzoomObserver.observe(panzoomElement);
	});

	isPanzoomObserverEnabled = true;
}

function disconnectPanzoomObserver() {
	if (!isPanzoomObserverEnabled) {
		return;
	}

	panzoomObserver?.disconnect();
	document
		.querySelectorAll('.uto-block')
		.forEach((utoBlock) => utoBlock.classList.remove('uto-block--unobserved'));
	isPanzoomObserverEnabled = false;
}

function setupTransformOrigin() {
	// Получаем блок с классом mapa
	const mapaBlock = document.querySelector('.mapa');

	if (!mapaBlock) {
		return;
	}

	// Получаем координаты блока mapa
	const mapaRect = mapaBlock.getBoundingClientRect();

	const children = Array.from(mapaBlock.querySelectorAll('.uto-block'));

	// Проходимся по всем дочерним элементам
	children.forEach((block) => {
		block.style.transition = 'all 1s ease';
	});
	children
		.filter((block) => !block.classList.contains('_0'))
		.forEach((child) => {
			// Получаем координаты дочернего элемента относительно блока mapa
			const rect = child.getBoundingClientRect();

			// Устанавливаем transform-origin в зависимости от доли
			if (rect.top <= mapaRect.height / 2 && rect.left <= mapaRect.width / 2) {
				child.style.transformOrigin = 'top left';
			} else if (
				rect.top <= mapaRect.height / 2 &&
				rect.left > mapaRect.width / 2
			) {
				child.style.transformOrigin = 'top right';
			} else if (
				rect.top > mapaRect.height / 2 &&
				rect.left <= mapaRect.width / 2
			) {
				child.style.transformOrigin = 'bottom left';
			} else {
				child.style.transformOrigin = 'bottom right';
			}
		});
}

function initLeftMenu() {
	const dotLinks = document.querySelectorAll('.dot-zoom');

	dotLinks.forEach((dotLink) => {
		dotLink.onclick = (event) => {
			event.preventDefault();
			event.stopPropagation();

			if (!UrlValidator.isCurrentUrl(window.location.origin)) {
				barba.go(window.location.origin);
				return;
			}

			const panzoomEl = document.querySelector('.mapa');

			panzoomEl.style.transition =
				'transform 1s cubic-bezier(0.45, 0, 0.55, 1)';

			const targetZoom = dotLink.classList.contains('_1')
				? panzoomInstance.getMinZoom()
				: panzoomInstance.getMaxZoom();

			panzoomInstance.zoomAbs(
				window.innerWidth / 2,
				window.innerHeight / 2,
				targetZoom
			);

			setTimeout(() => {
				panzoomEl.style.transition =
					'transform 1s cubic-bezier(0.01, 0.39, 0, 1)';
			}, 1_200);
		};
	});
}

function initPanzoom() {
	const panzoomEl = document.querySelector('.mapa');

	if (!panzoomEl) {
		console.error('Panzoom element not found');
		return;
	}

	const previousCoordinates = getPreviousPanCoordinates();
	const { width, height: panzoomElHeight } = panzoomEl.getBoundingClientRect();
	const logo = document.querySelector('.uto-block._0');
	const { width: logoWidth, height: logoHeight } = logo.getBoundingClientRect();

	const minZoom =
		window.innerWidth < 768
			? (window.innerHeight / panzoomElHeight) * 1.4
			: window.innerHeight / panzoomElHeight;

	if (window.innerWidth > 1024) {
		maxPanZoom = window.innerWidth / logoWidth / 2;
	} else {
		maxPanZoom = window.innerWidth / logoWidth / 1.3;
	}

	const maxZoom = previousCoordinates
		? previousCoordinates.targetCoordinates.scale
		: maxPanZoom;

	const panzoomWidthWithMinZoom = width * minZoom;

	// console.log(
	// 	width,
	// 	panzoomWidthWithMinZoom,
	// 	(((window.innerWidth - panzoomWidthWithMinZoom) / window.innerWidth) *
	// 		100) /
	// 		minZoom
	// );

	if (window.innerWidth > 1079) {
		panzoomEl.style.width = `calc(8952rem + ${
			(((window.innerWidth - panzoomWidthWithMinZoom) / window.innerWidth) *
				100) /
			minZoom
		}vw)`;
	} else {
		panzoomEl.style.width = 'calc(8952rem + 100vw)';
	}

	const { width: panzoomElWidth } = panzoomEl.getBoundingClientRect();

	fixPanzoomOnMouseDown();

	if (panzoomInstance) {
		panzoomInstance.dispose();
	}

	const initialX = previousCoordinates
		? previousCoordinates.targetCoordinates.x
		: -(panzoomElWidth * minZoom - window.innerWidth) / 2;
	const initialY = previousCoordinates
		? previousCoordinates.targetCoordinates.y
		: -(panzoomElHeight * minZoom - window.innerHeight) / 2;
	const initialZoom = previousCoordinates
		? previousCoordinates.targetCoordinates.scale
		: minZoom;

	panzoomInstance = panzoom(panzoomEl, {
		boundsDisabledForZoom: true,
		smoothScroll: false,
		maxZoom,
		minZoom,
		initialZoom,
		zoomDoubleClickSpeed: 1,
		onDoubleClick: function (e) {
			return false; // tells the library to not preventDefault, and not stop propagation
		},
		onTouch: function (e) {
			// `e` - is current touch event.

			return false; // tells the library to not preventDefault.
		},
	});

	panzoomInstance.moveTo(initialX, initialY);

	setTimeout(() => {
		panzoomEl.style.transition = 'transform 1s cubic-bezier(0.01, 0.39, 0, 1)';
	}, 300);

	panzoomEl.ontransitionend = (event) => {
		if (event.target !== event.currentTarget) {
			return; // Ignore it
		}
		panEndHandler(panzoomInstance);
	};

	function panEndHandler(e) {
		const { x, y } = e.getTransform();

		const width = panzoomEl.getBoundingClientRect().width - window.innerWidth;
		const height =
			panzoomEl.getBoundingClientRect().height - window.innerHeight;

		const extraWidthOnMobile =
			window.innerWidth < 768 ? window.innerWidth / 2 : 0;
		const extraHeightOnMobile =
			window.innerWidth < 768 ? window.innerHeight / 2 : 0;

		if (x > extraWidthOnMobile && y > extraHeightOnMobile) {
			panzoomInstance.moveTo(
				extraWidthOnMobile / 2,
				extraHeightOnMobile / 2,
				false
			);
			return;
		}

		if (x < -width - extraWidthOnMobile && y < -height - extraHeightOnMobile) {
			panzoomInstance.moveTo(
				-width - extraWidthOnMobile / 2,
				-height - extraHeightOnMobile / 2,
				false
			);
			return;
		}

		if (x < -width - extraWidthOnMobile && y > extraHeightOnMobile) {
			panzoomInstance.moveTo(
				-width - extraWidthOnMobile / 2,
				extraHeightOnMobile,
				false
			);
			return;
		}

		if (x > extraWidthOnMobile && y < -height - extraHeightOnMobile) {
			panzoomInstance.moveTo(
				extraWidthOnMobile,
				-height - extraHeightOnMobile / 2,
				false
			);
			return;
		}

		if (x > extraWidthOnMobile) {
			panzoomInstance.moveTo(extraWidthOnMobile / 2, y, false);
			return;
		}

		if (y > extraHeightOnMobile) {
			panzoomInstance.moveTo(x, extraHeightOnMobile / 2, false);
			return;
		}

		if (x < -width - extraWidthOnMobile) {
			panzoomInstance.moveTo(-width - extraWidthOnMobile / 2, y, false);
			return;
		}

		if (y < -height - extraHeightOnMobile) {
			panzoomInstance.moveTo(x, -height - extraHeightOnMobile / 2, false);
			return;
		}
	}

	const debouncedPanEndHandler = debounce(panEndHandler, 1_350);

	function zoomHandler(e) {
		const { scale } = e.getTransform();

		const zoomPercent = calculateZoomPercent(
			scale,
			e.getMinZoom(),
			e.getMaxZoom()
		);

		if (zoomPercent < 50) {
			disconnectPanzoomObserver();
		} else {
			setupPanzoomObserver();
		}

		moveZoomSlider(calculateZoomSliderTransform(zoomPercent), 0.3);

		// debouncedPanEndHandler(e);
	}

	panzoomInstance.on('panend', panEndHandler);
	panzoomInstance.on('zoom', zoomHandler);
}

function initBarba() {
	window.history.scrollRestoration = 'manual';

	barba.init({
		debug: true,
		prevent: ({ el }) =>
			el.closest('#wpadminbar') || el.closest('.barba-prevent'),
		views: [
			{
				namespace: 'idea',
				beforeEnter() {
					highlightLeftMenu();
				},
			},
		],
		transitions: [
			{
				name: 'initial-transition',
				once({ next }) {
					initPanzoom();
					initLoader(() => {
						document.body.style.pointerEvents = 'none';
						const panzoomEl = document.querySelector('.mapa');
						panzoomEl.style.transition =
							'transform 2s cubic-bezier(0.65, 0, 0.35, 1)';
						panzoomInstance.zoomAbs(
							window.innerWidth / 2,
							window.innerHeight / 2,
							1
						);

						setTimeout(() => {
							panzoomEl.style.transition =
								'transform 1s cubic-bezier(0.01, 0.39, 0, 1)';
							document.body.style.pointerEvents = null;
							initPanzoomElements();
						}, 2_000);
					});
					initLeftMenu();
					initMobileMenu();
					initVideoPlayers();
					initThumbnailGallery();
					initContentGalleries();
					initPostGalleries();
					initSubscribeForm();
					initSearchForm();

					setupTransformOrigin();
					// setupPanzoomObserver();
					initLoadMoreArticlesButton();

					if (next.namespace !== 'homepage') {
						moveZoomSlider(-50);
					}

					if (next.namespace === 'single-concert') {
						alignContentAndSidebar();

						// gsap.to('.concert-loader', {
						// 	autoAlpha: 0,
						// 	duration: 1,
						// 	onComplete: () => {
						// 		document.querySelector('.concert-loader').remove();
						// 	},
						// });
					}

					const tl = gsap.timeline();

					tl.set(
						document.body,
						{
							autoAlpha: 0,
							onComplete: () => {
								document.body.classList.remove('opacity-0');
							},
						},
						0
					).to(
						document.body,
						{
							autoAlpha: 1,
							duration: 0.75,
							onComplete: () => {
								tl.revert();
							},
						},
						0.25
					);
				},
			},
			{
				name: 'scale-transition',
				to: {
					custom: ({ next, trigger }) =>
						typeof trigger !== 'string' &&
						trigger.closest('.uto-block') !== null &&
						next.namespace !== 'homepage',
				},
				async leave({ trigger, current }) {
					isTransitioning = true;
					const blockElement = trigger.closest('.uto-block');
					const { width, height, top, left } =
						blockElement.getBoundingClientRect();
					const coordinates = {};
					const panzoomEl = document.querySelector('.mapa');
					panzoomEl.style.transition =
						'transform 2s cubic-bezier(0.65, 0, 0.35, 1)';

					coordinates.startCoordinates = { ...panzoomInstance.getTransform() };

					panzoomInstance.setMaxZoom(7);

					setTimeout(() => {
						panzoomInstance.zoomAbs(left + width / 2, top + height / 2, 7);
					});

					await wait(1_000);

					coordinates.targetCoordinates = { ...panzoomInstance.getTransform() };

					rememberPreviousPanCoordinates(coordinates);

					return gsap.to(current.container, {
						opacity: 0,
						duration: 0.5,
					});
				},
				async beforeEnter({ next }) {
					setCorrectTransformOrigin(next.container);
				},
				enter({ next }) {
					moveZoomSlider(-50, 0.5);
					disconnectPanzoomObserver();
					return gsap.from(next.container, {
						opacity: 0,
						scale: 0.5,
						duration: 0.5,
						onComplete: () => {
							isTransitioning = false;
						},
					});
				},
			},
			{
				name: 'scale-out-transition',
				to: {
					custom: ({ next }) => {
						return (
							next?.namespace === 'homepage' &&
							getPreviousPanCoordinates() !== null
						);
					},
				},
				beforeLeave({ current }) {
					setCorrectTransformOrigin(current.container);
				},
				leave({ current }) {
					return gsap.to(current.container, {
						scale: 0.5,
						opacity: 0,
						duration: 0.5,
					});
				},
				async enter({ next }) {
					gsap.set(next.container, {
						opacity: 0,
					});

					moveZoomSlider(0, 0.3);

					await wait(300);

					initPanzoom();
					setupTransformOrigin();

					panzoomInstance.setMaxZoom(maxPanZoom);

					const { startCoordinates } = getPreviousPanCoordinates();

					await wait(300);

					panzoomInstance.zoomAbs(
						window.innerWidth / 2,
						window.innerHeight / 2,
						startCoordinates.scale
					);

					resetPreviousPanCoordinates();

					return gsap.to(next.container, {
						autoAlpha: 1,
						duration: 0.5,
						onComplete: () => {
							isTransitioning = false;
							initPanzoomElements();
							// setupPanzoomObserver();
							// panzoomInstance.setMaxZoom(maxPanZoom);
						},
					});
				},
			},
			{
				name: 'fade-transition',
				leave({ current }) {
					const done = this.async();
					gsap.to(current.container, {
						autoAlpha: 0,
						duration: 0.5,
						onComplete: () => {
							current.container.remove();
							done();
						},
					});
				},
				enter({ next, current }) {
					const done = this.async();

					if (next.url.hash !== '' && next.url.hash !== undefined) {
						document.getElementById(next.url.hash).scrollIntoView();
					} else {
						window.scrollTo(0, 0);
					}

					if (next.namespace === 'homepage') {
						initPanzoom();
						moveZoomSlider(50, 0.5);
					}

					if (next.namespace !== 'homepage') {
						moveZoomSlider(-50, 0.5);
					}

					resetPreviousPanCoordinates();

					gsap.from(next.container, {
						autoAlpha: 0,
						duration: 0.5,
						onComplete: () => {
							done();
						},
					});
				},
			},
		],
	});

	barba.hooks.beforeLeave(() => {
		closeMobileMenu();
	});

	barba.hooks.leave(() => {
		cleanupImageGalleryDialogs();
	});

	barba.hooks.afterLeave(() => {
		unhighlightLeftMenu();
	});

	barba.hooks.beforeEnter(({ next }) => {
		if (next.namespace === 'single-concert') {
			document.querySelector('.concert-loader')?.remove();
			alignContentAndSidebar();
		}
	});

	barba.hooks.enter(({ current, next }) => {
		if (current.namespace === next.namespace) {
			return;
		}

		initThumbnailGallery();
		initContentGalleries();
		initPostGalleries();
		initVideoPlayers();
		initSubscribeForm();
		initLoadMoreArticlesButton();
		updateDataWfPage(next.html);
	});

	barba.hooks.after(({ current, next }) => {
		if (current.namespace !== next.namespace) {
			refreshWebflowScripts();
		}
	});
}

document.addEventListener('DOMContentLoaded', (event) => {
	initBarba();
});
