import './styles/index.scss';
import './webflow/js/main.js';

import panzoom from 'panzoom';

console.log('utopia');

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

// 	document.querySelectorAll('.uto-block').forEach((trigger) => {
// 		new IntersectionObserver(
// 			(entries, observer) => {
// 				entries.forEach(async (entry) => {
// 					if (entry.isIntersecting) {
// 						$(entry.target).removeClass('opview');
// 					} else {
// 					}
// 				});
// 			},
// 			{
// 				threshold: 0.2,
// 			}
// 		).observe(trigger);
// 	});
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

function fixPanzoomOnMouseDown() {
	document
		.querySelectorAll('a')
		.forEach((a) => a.setAttribute('draggable', 'false'));
}

function calculateZoomPercent(scale, minZoom, maxZoom) {
	return ((scale - minZoom) / (maxZoom - minZoom)) * 100;
}

function calculateZoomLevelSliderTransform(percentage) {
	percentage = Math.max(0, Math.min(percentage, 100));
	return (percentage - 50) * 2;
}

function moveLevelSlider(percent) {
	console.log(percent);
	const slider = document.querySelector('.zoom-viewer');

	console.log(slider);

	if (!slider) {
		return;
	}

	slider.style.transform = 'translate3d(' + percent + '%, 0px, 0)';
}

function initPanzoom() {
	const panzoomEl = document.querySelector('.mapa');

	if (!panzoomEl) {
		console.error('Panzoom element not found');
		return;
	}

	const { width: panzoomElWidth, height: panzoomElHeight } =
		panzoomEl.getBoundingClientRect();
	const minZoom = window.innerHeight / panzoomElHeight;
	const maxZoom = 2;

	fixPanzoomOnMouseDown();

	panzoomInstance = panzoom(panzoomEl, {
		boundsDisabledForZoom: true,
		smoothScroll: false,
		maxZoom,
		minZoom,
		zoomDoubleClickSpeed: 1,
		onDoubleClick: function (e) {
			return false; // tells the library to not preventDefault, and not stop propagation
		},
	});

	panzoomInstance.moveTo(
		-(panzoomElWidth - window.innerWidth) / 2,
		-(panzoomElHeight - window.innerHeight) / 2,
		false
	);

	setTimeout(() => {
		panzoomEl.style.transition = 'transform 1s cubic-bezier(0.01, 0.39, 0, 1)';
	});

	function debounce(func, delay = 300) {
		let timerId;
		return function (...args) {
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				func.apply(this, args);
			}, delay);
		};
	}

	function panEndHandler(e) {
		const { x, y } = e.getTransform();

		console.log('handle');
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

		moveLevelSlider(
			calculateZoomLevelSliderTransform(
				calculateZoomPercent(scale, minZoom, maxZoom)
			)
		);

		debouncedPanEndHandler(e);
	}

	panzoomInstance.on('panend', panEndHandler);
	panzoomInstance.on('zoom', zoomHandler);
}

window.addEventListener('load', (event) => {
	// addEventListener('pointercancel', (event) => {
	// 	console.log(event);
	// });
	initPanzoom();
});