import './styles/index.scss';
import './webflow/js/main.js';

import barba from '@barba/core';
import gsap from 'gsap';

import panzoom from 'panzoom';
import {
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
import { initSearchForm } from './components/SearchForm.js';
import { initSubscribeForm } from './components/SubscribeForm.js';
import {
	getPreviousPanCoordinates,
	rememberPreviousPanCoordinates,
	resetPreviousPanCoordinates,
} from './state/index.js';
import {
	calculateZoomPercent,
	calculateZoomSliderTransform,
	debounce,
	refreshWebflowScripts,
	setCorrectTransformOrigin,
	updateDataWfPage,
	wait,
} from './utils/index.js';

// let panzoomEl;
// let parent;
// let isPanzoomActive = false;
// let barbach = 0;

// // let panzoomx = 0;
// // let panzoomy = 0;

// let panzoomx = 0;
// let panzoomy = 0;

// let zoomcounter;
// let startzoom;

// let screenWidth = window.innerWidth;
// let pageHeight = window.innerHeight;

// if (Webflow.env('editor') === undefined) {
// 	lenis = new Lenis({
// 		lerp: 0.2,
// 		wheelMultiplier: 0.7,
// 		gestureOrientation: 'vertical',
// 		normalizeWheel: false,
// 		smoothTouch: false,
// 	});
// 	function raf(time) {
// 		lenis.raf(time);
// 		requestAnimationFrame(raf);
// 	}
// 	requestAnimationFrame(raf);
// 	//lenis.stop();
// }
// $('[data-lenis-start]').on('click', function () {
// 	lenis.start();
// });
// $('[data-lenis-stop]').on('click', function () {
// 	lenis.stop();
// });
// $('[data-lenis-toggle]').on('click', function () {
// 	$(this).toggleClass('stop-scroll');
// 	if ($(this).hasClass('stop-scroll')) {
// 		lenis.stop();
// 	} else {
// 		lenis.start();
// 	}
// });

// window.addEventListener('load', (event) => {
// 	if ($('.barba-container').hasClass('home-page')) {
// 		$('body').addClass('homepage');
// 		$('.mapa').addClass('readymapa');
// 		homepage();
// 		//		startzoom = 0.005;
// 		panzoomFunc();
// 	} else {
// 		$('body').addClass('otherpages');

// 		zoomcounter = 10;

// 		$('.hidden-clicker')[0].click();
// 		innerpageEscape();

// 		levelchecker();
// 	}

// 	barbachfunc();
// 	inputchecker();
// });

// document.addEventListener('DOMContentLoaded', function () {
// 	Barba.Pjax.start();
// 	Barba.Prefetch.init();
// 	var FadeTransition = Barba.BaseTransition.extend({
// 		start: function () {
// 			this.newContainerLoading
// 				.then(this.perehod.bind(this))
// 				.then(this.fadeOut.bind(this))
// 				.then(this.fadeIn.bind(this));
// 		},

// 		perehod: function () {},
// 		fadeOut: function () {
// 			setTimeout(function () {
// 				$('html').addClass('barba-perehod');
// 			}, 450);

// 			if (barbach > 0) {
// 				return $(this.oldContainer)
// 					.animate({ visibility: 'visible' }, 2000)
// 					.promise();
// 			} else {
// 				return $(this.oldContainer)
// 					.animate({ visibility: 'visible' }, 450)
// 					.promise();
// 			}
// 		},
// 		fadeIn: function () {
// 			$(window).scrollTop(0);

// 			var _this = this;
// 			_this.done();

// 			Webflow.destroy();
// 			Webflow.ready();
// 			Webflow.require('ix2').init();
// 			$('html').removeClass('barba-perehod');
// 			$('body').removeClass('homepage');
// 			$('body').removeClass('otherpages');
// 			if ($('.barba-container').hasClass('home-page')) {
// 				$('body').addClass('homepage');
// 				$('.mapa').addClass('fromten');

// 				startzoom = zoomcounter;

// 				setTimeout(function () {
// 					panzoomFunc();
// 				}, 0);

// 				setTimeout(function () {
// 					$('.mapa').addClass('readymapa');
// 					panzoomEl.zoom(startzoom);
// 				}, 100);

// 				$('.hidden-clicker-home')[0].click();
// 			} else {
// 				$('body').addClass('otherpages');

// 				innerpageEscape();
// 			}

// 			if (barbach > 0) {
// 				$('.hidden-clicker')[0].click();
// 			} else {
// 				$('.hidden-clicker-2')[0].click();
// 			}

// 			levelchecker();

// 			barbach = 0;

// 			inputchecker();
// 		},
// 	});
// 	Barba.Pjax.getTransition = function () {
// 		return FadeTransition;
// 	};
// 	Barba.Dispatcher.on(
// 		'newPageReady',
// 		function (currentStatus, oldStatus, container, newPageRawHTML) {
// 			var response = newPageRawHTML.replace(
// 				/(<\/?)html( .+?)?>/gi,
// 				'$1nothtml$2>',
// 				newPageRawHTML
// 			);
// 			var bodyClasses = $(response).filter('nothtml').attr('data-wf-page');
// 			$('html').attr('data-wf-page', bodyClasses);
// 		}
// 	);
// });

// let imgsrcer;

// function barbachfunc() {
// 	$('.us-link').click(function () {});
// }

// function homepage() {
// 	zoomcounter = 0.125;

// 	$('.u-link.u-q').hover(
// 		function () {
// 			$(this).parent().addClass('active');
// 			imgsrcer = $(this).children('.hidden-img').attr('src');

// 			$('.img-cover-hover').attr('src', imgsrcer);
// 			$('.img-cover-hover').addClass('active');
// 			$('.uto-block').addClass('hideop');
// 		},
// 		function () {
// 			$('.img-cover-hover').removeClass('active');
// 			$('.uto-block').removeClass('hideop');
// 			$(this).parent().removeClass('active');
// 		}
// 	);

// 	$('.u-link.u-i').hover(
// 		function () {
// 			$(this).parent().addClass('active');
// 			imgsrcer = $(this).children('.hidden-img').attr('src');

// 			$('.img-cover-hover').attr('src', imgsrcer);
// 			$('.img-cover-hover').addClass('active');
// 			$('.uto-block').addClass('hideop');
// 		},
// 		function () {
// 			$('.img-cover-hover').removeClass('active');
// 			$('.uto-block').removeClass('hideop');
// 			$(this).parent().removeClass('active');
// 		}
// 	);
// }

// function observerblocks() {
// 	$('.uto-block').addClass('opview');

// 	document.querySelectorAll('.rtz-checl').forEach((trigger) => {
// 		new IntersectionObserver(
// 			(entries, observer) => {
// 				entries.forEach(async (entry) => {
// 					if (entry.isIntersecting) {
// 						$(entry.target).parent().parent().removeClass('offview');
// 						$(entry.target).parent().parent().addClass('onview');
// 					} else {
// 						$(entry.target).parent().parent().removeClass('onview');
// 						$(entry.target).parent().parent().addClass('offview');
// 					}
// 				});
// 			},
// 			{
// 				threshold: 0.5,
// 			}
// 		).observe(trigger);
// 	});

// document.querySelectorAll('.uto-block').forEach((trigger) => {
// 	new IntersectionObserver(
// 		(entries, observer) => {
// 			entries.forEach(async (entry) => {
// 				if (entry.isIntersecting) {
// 					$(entry.target).removeClass('opview');
// 				} else {
// 				}
// 			});
// 		},
// 		{
// 			threshold: 0.2,
// 		}
// 	).observe(trigger);
// });
// }

// function levelchecker() {
// 	if (zoomcounter == 10) {
// 		$('.zoom-viewer').css('transform', 'translate(-50%, 0%)');

// 		$('.homepagezoom').hide();
// 		$('.otherpagezoom').show();
// 	} else if ($('.barba-container').hasClass('inner-page')) {
// 		zoomcounter = 10;

// 		$('.zoom-viewer').css('transform', 'translate(-50%, 0%)');

// 		$('.homepagezoom').hide();
// 		$('.otherpagezoom').show();
// 	} else if (zoomcounter == 0.125) {
// 		$('.zoom-viewer').css('transform', 'translate(50%, 0%)');

// 		$('.homepagezoom').show();
// 		$('.otherpagezoom').hide();
// 	} else if (zoomcounter == 0.5) {
// 		$('.zoom-viewer').css('transform', 'translate(0%,0%)');

// 		$('.homepagezoom').show();
// 		$('.otherpagezoom').hide();

// 		if ($('.barba-container').hasClass('home-page')) {
// 			observerblocks();

// 			setTimeout(function () {
// 				observerblocks();
// 			}, 1000);
// 		}
// 	}
// }

// function panzoomFirst() {
// 	//	panzoomEl.setOptions({ contain: 'outside', maxScale: 0.5, minScale: 0.125 });
// }

// function panzoomFunc() {
// 	$('.u-link').each(function () {
// 		var parent = $(this).parent();
// 		var offest = $(this).parent().offset();
// 		var left = -(offest.left - screenWidth / 2 + $(parent).width() / 2);
// 		var top = -(offest.top - pageHeight / 2 + $(parent).height() / 2);
// 		var left2 = -(offest.left - screenWidth / 2 + $(parent).width() / 2);
// 		var top2 = -(offest.top - pageHeight / 2 + $(parent).height() / 2);

// 		//     var left = -((offest.left));
// 		// 	var top = -((offest.top));
// 		// 	var left2 = -((offest.left)/0.5);
// 		// 	var top2 = -((offest.top)/0.5);

// 		$(this).attr('data-x', left);
// 		$(this).attr('data-y', top);

// 		$(this).attr('data-x-x', left2);
// 		$(this).attr('data-y-y', top2);
// 	});

// 	levelchecker();

// 	const createPanzoomButton = () => {
// 		initPanzoomElement();
// 	};

// 	const initPanzoomElement = (selector = '.mapa') => {
// 		const elem = document.querySelector(selector);

// 		if (!elem) {
// 			console.error('No element found for Panzoom');
// 			return;
// 		}

// 		const width = $(elem).width();
// 		const height = $(elem).height();

// 		panzoomEl = panzoom(elem, {
// 			boundsDisabledForZoom: true,
// 			smoothScroll: false,
// 			maxZoom: 2,
// 			minZoom: 0.5,
// 			zoomDoubleClickSpeed: 1,
// 			onDoubleClick: function (e) {
// 				return false; // tells the library to not preventDefault, and not stop propagation
// 			},
// 		});

// 		window.panzoomEl = panzoomEl;

// 		var zoomWheeelmax = panzoomEl.getTransform().scale;

// 		//panzoomEl.setOptions({ maxScale: 0.5, minScale: zoomWheeelmax });

// 		elem.parentElement.addEventListener('wheel', function (event) {
// 			// panzoomEl.zoomWithWheel(event);
// 			var zoomMin = 0.125;
// 			var zoomMax = 10;
// 			var zoomchangerMin = -50;
// 			var zoomchangerMax = 0;
// 			var zoomWheeel = panzoomEl.getTransform().scale;
// 			var zoomchanger =
// 				-1 *
// 				(zoomchangerMin +
// 					(zoomchangerMax - zoomchangerMin) *
// 						((zoomWheeel - zoomMin) / (zoomMax - zoomMin)));
// 			$('.zoom-viewer').css(
// 				'transform',
// 				'translate(' + zoomchanger + '%, 0px)'
// 			);
// 		});

// 		// $('.u-link').click(function () {
// 		// 	barbach = 1;

// 		// 	$('html').addClass('barba-perehod');

// 		// 	var getzoom = panzoomEl.getTransform().scale;

// 		// 	// 			var movex = ($(this).attr('data-x'))/(1 - getzoom);
// 		// 	// 			var movey = ($(this).attr('data-y'))/(1 - getzoom);

// 		// 	var movex = $(this).attr('data-x') / 1;
// 		// 	var movey = $(this).attr('data-y') / 1;

// 		// 	// 			var movex = ($(this).attr('data-x'));
// 		// 	// 			var movey = ($(this).attr('data-y'));

// 		// 	//TODO: zoom to point
// 		// 	// panzoomEl.zoomToPoint(2, { clientX: movex, clientY: movey });
// 		// 	//panzoomEl.pan(movex, movey);

// 		// 	zoomcounter = 10;
// 		// });

// 		$('.dot-zoom._2').click(function () {
// 			panzoomEl.zoom(0.5);
// 			zoomcounter = 0.5;
// 			levelchecker();
// 		});

// 		$('.dot-zoom._1').click(function () {
// 			panzoomEl.pan(0, 0);
// 			panzoomEl.zoom(0.125);

// 			zoomcounter = 0.125;
// 			levelchecker();
// 		});

// 		isPanzoomActive = true;

// 		parent = elem.parentElement;
// 	};

// 	createPanzoomButton();
// }

// function innerpageEscape() {
// 	$('.dot-zoom').click(function () {
// 		if ($('.barba-container').hasClass('home-page')) {
// 		} else {
// 			if ($(this).hasClass('_1')) {
// 				zoomcounter = 0.125;

// 				$('.hidden-clicker-out')[0].click();
// 			} else if ($(this).hasClass('_2')) {
// 				zoomcounter = 0.5;
// 				$('.hidden-clicker-out')[0].click();
// 			}
// 		}
// 	});
// }

// function inputchecker() {
// 	$('.sub-input').on('change', function () {
// 		if ($(this).value === '') {
// 			$(this).removeClass('inputfill');
// 		} else {
// 			$(this).addClass('inputfill');
// 		}
// 	});
// }

let panzoomInstance;
let panzoomObserver;
/**
 * A function that calculates the position of an element inside its parent.
 *
 * @param {Element} element - The element whose position is to be calculated.
 * @param {Element | null} parent - The parent element used as a reference for positioning.
 * @return {Object} An object with x and y properties representing the position of the element relative to its parent.
 */
function getElementPositionInsideParent(element, parent) {
	const parentRect = parent
		? parent.getBoundingClientRect()
		: element.parentNode.getBoundingClientRect();
	const elementRect = element.getBoundingClientRect();

	return {
		x: elementRect.left - parentRect.left,
		y: elementRect.top - parentRect.top,
	};
}

function fixPanzoomOnMouseDown() {
	document
		.querySelectorAll('a')
		.forEach((a) => a.setAttribute('draggable', 'false'));
}

function setupPanzoomObserver() {
	const panzoomElements = document.querySelectorAll('.uto-block');

	if (panzoomElements.length === 0) {
		return;
	}

	panzoomObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(async (entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('opview');
				}

				entry.target.classList.toggle(
					'uto-block--unobserved',
					!entry.isIntersecting
				);
				// if (entry.isIntersecting) {
				// 	$(entry.target).removeClass('opview');
				// } else {
				// }
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
}

function disconnectPanzoomObserver() {
	panzoomObserver?.disconnect();
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

function initPanzoom() {
	const panzoomEl = document.querySelector('.mapa');

	if (!panzoomEl) {
		console.error('Panzoom element not found');
		return;
	}

	const panzoomCoordinates = getPreviousPanCoordinates();
	const { width: panzoomElWidth, height: panzoomElHeight } =
		panzoomEl.getBoundingClientRect();
	const minZoom = window.innerHeight / panzoomElHeight;
	const maxZoom = panzoomCoordinates ? panzoomCoordinates.scale : 1;

	fixPanzoomOnMouseDown();

	if (panzoomInstance) {
		panzoomInstance.dispose();
	}

	const initialX = panzoomCoordinates
		? panzoomCoordinates.x
		: -(panzoomElWidth * minZoom - window.innerWidth) / 2;
	const initialY = panzoomCoordinates
		? panzoomCoordinates.y
		: -(panzoomElHeight * minZoom - window.innerHeight) / 2;
	const initialZoom = panzoomCoordinates ? panzoomCoordinates.scale : minZoom;

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

	function panEndHandler(e) {
		const { x, y } = e.getTransform();

		const width = panzoomEl.getBoundingClientRect().width - window.innerWidth;
		const height =
			panzoomEl.getBoundingClientRect().height - window.innerHeight;

		if (x > 0 && y > 0) {
			panzoomInstance.moveTo(0, 0, false);
			return;
		}

		if (x < -width && y < -height) {
			panzoomInstance.moveTo(-width, -height, false);
			return;
		}

		if (x < -width && y > 0) {
			panzoomInstance.moveTo(-width, 0, false);
			return;
		}

		if (x > 0 && y < -height) {
			panzoomInstance.moveTo(0, -height, false);
			return;
		}

		if (x > 0) {
			panzoomInstance.moveTo(0, y, false);
			return;
		}

		if (y > 0) {
			panzoomInstance.moveTo(x, 0, false);
			return;
		}

		if (x < -width) {
			panzoomInstance.moveTo(-width, y, false);
			return;
		}

		if (y < -height) {
			panzoomInstance.moveTo(x, -height, false);
			return;
		}
	}

	const debouncedPanEndHandler = debounce(panEndHandler, 50);

	function zoomHandler(e) {
		const { scale } = e.getTransform();

		moveZoomSlider(
			calculateZoomSliderTransform(
				calculateZoomPercent(scale, e.getMinZoom(), e.getMaxZoom())
			),
			0.3
		);

		// debouncedPanEndHandler(e);
	}

	panzoomInstance.on('panend', panEndHandler);
	panzoomInstance.on('zoom', zoomHandler);
}

function initBarba() {
	window.history.scrollRestoration = 'manual';

	barba.init({
		debug: false,
		prevent: ({ el }) => el.closest('#wpadminbar'),
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
							panzoomEl.style.transition = 'transform 1s cubic-bezier(0.01, 0.39, 0, 1)';
							document.body.style.pointerEvents = null;
						}, 2_000);
					});
					initThumbnailGallery();
					initContentGalleries();
					initPostGalleries();
					initSubscribeForm();
					initSearchForm();

					setupTransformOrigin();
					setupPanzoomObserver();

					if (next.namespace !== 'homepage') {
						moveZoomSlider(-50);
					}
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
					const blockElement = trigger.closest('.uto-block');
					const { width, height, top, left } =
						blockElement.getBoundingClientRect();

					const panzoomEl = document.querySelector('.mapa');
					panzoomEl.style.transition =
						'transform 2s cubic-bezier(0.65, 0, 0.35, 1)';
					panzoomInstance.setMaxZoom(7);

					setTimeout(() => {
						panzoomInstance.zoomAbs(left + width / 2, top + height / 2, 7);
					});

					await wait(1_000);

					rememberPreviousPanCoordinates(panzoomInstance.getTransform());

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

					initPanzoom();
					setupTransformOrigin();
					setupPanzoomObserver();

					await wait(300);

					panzoomInstance.zoomAbs(
						window.innerWidth / 2,
						window.innerHeight / 2,
						1
					);
					moveZoomSlider(0, 0.5);

					resetPreviousPanCoordinates();

					return gsap.to(next.container, {
						autoAlpha: 1,
						// scale: 1.5,
						duration: 0.5,
						onComplete: () => {
							panzoomInstance.setMaxZoom(1);
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

	barba.hooks.afterLeave(() => {
		unhighlightLeftMenu();
	});

	barba.hooks.enter((data) => {
		initThumbnailGallery();
		initContentGalleries();
		initPostGalleries();
		initSubscribeForm();
		updateDataWfPage(data.next.html);
	});

	barba.hooks.after(() => {
		refreshWebflowScripts();
	});
}

document.addEventListener('DOMContentLoaded', (event) => {
	initBarba();
});
