class ImageGalleryDialog {
	constructor(options = {}) {
		this.options = options;

		if (this.options.dialog) {
			this.dialog = this.options.dialog;
		} else {
			this._setupHTML();
		}

		this.list = this.dialog.querySelector('.image-gallery__list');
		this.counterNode = this.dialog.querySelector('.gallery-counter__current');
		this.counterTotal = this.dialog.querySelector('.gallery-counter__total');
		this.closeButton = this.dialog.querySelector(
			'.image-gallery__close-button'
		);
		this.nextButton = this.dialog.querySelector('.image-gallery__nav--next');
		this.previousButton = this.dialog.querySelector(
			'.image-gallery__nav--prev'
		);

		if (this.options.media) {
			this.media = this.options.media;

			this.counterTotal.textContent = this.media.length;

			this.media.forEach((media, index) => {
				const li = document.createElement('li');

				li.className = 'image-gallery__item';

				const figure = media.cloneNode(true);
				figure.className = 'image-gallery__element';

				li.append(figure);

				this.list.append(li);
			});
		}

		this.galleryItems = Array.from(
			this.list.querySelectorAll('.image-gallery__item')
		);

		this.current = 0;

		this._bindEvents();

		document.body.append(this.dialog);
	}

	_setupHTML() {
		this.dialog = document.createElement('dialog');
		this.dialog.className = 'image-gallery';

		if (this.options.id) {
			this.dialog.setAttribute('id', this.options.id);
		}

		this.dialog.innerHTML = `
			<div class="image-gallery__header">
				<div class="image-gallery__counter gallery-counter">
					<svg class="image-gallery__arrow-icon image-gallery__arrow-icon--left" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23743 6.53033 6.53033L1.75737 11.3033C1.46448 11.5962 0.989606 11.5962 0.696712 11.3033C0.403818 11.0104 0.403817 10.5355 0.69671 10.2427L4.93934 6L0.696689 1.75737C0.403795 1.46448 0.403793 0.989604 0.696686 0.69671C0.989579 0.403816 1.46445 0.403814 1.75735 0.696707L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="#818181"/>
					</svg>
					<span>
						<span class="gallery-counter__current">1</span>/<span class="gallery-counter__total"></span>
					</span>
					<svg class="image-gallery__arrow-icon image-gallery__arrow-icon--right" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23743 6.53033 6.53033L1.75737 11.3033C1.46448 11.5962 0.989606 11.5962 0.696712 11.3033C0.403818 11.0104 0.403817 10.5355 0.69671 10.2427L4.93934 6L0.696689 1.75737C0.403795 1.46448 0.403793 0.989604 0.696686 0.69671C0.989579 0.403816 1.46445 0.403814 1.75735 0.696707L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="#818181"/>
					</svg>
				</div>
				<button type="button" class="image-gallery__close-button">
					<span>Close</span>
				</button>
			</div>
			<div class="image-gallery__body">
				<ul class="image-gallery__list"></ul>
			</div>
			<button type="button" class="image-gallery__nav image-gallery__nav--prev"><span class="sr-only">Previous</span></button>
			<button type="button" class="image-gallery__nav image-gallery__nav--next"><span class="sr-only">Next</span></button>
		`;
	}

	/**
	 * @private
	 * @param {number} number
	 * @returns number
	 */
	_normalizeNumber(number) {
		return number < 0
			? 0
			: number >= this.galleryItems.length
			? this.galleryItems.length - 1
			: number;
	}

	handleKeydown(event) {
		if (event.key === 'Escape') {
			this.close();
		}

		if (event.key === 'ArrowLeft') {
			this.previous();
		}

		if (event.key === 'ArrowRight') {
			this.next();
		}
	}

	/**
	 * @private
	 */
	_bindEvents() {
		this.closeButton.onclick = this.close.bind(this);
		if (this.nextButton) {
			this.nextButton.onclick = this.next.bind(this);
		}
		if (this.previousButton) {
			this.previousButton.onclick = this.previous.bind(this);
		}
		window.addEventListener('keydown', this.handleKeydown.bind(this));
	}

	setGallerySlide(number = 0) {
		this.current = this._normalizeNumber(number);
		this.galleryItems.forEach((item, index) => {
			item.classList.toggle(
				'image-gallery__item--active',
				index === this.current
			);
		});

		if (this.counterNode) {
			this.counterNode.textContent = `${this.current + 1}`;
		}
	}

	previous() {
		this.setGallerySlide(this.current - 1);
	}

	next() {
		this.setGallerySlide(this.current + 1);
	}

	open(number = 0) {
		this.setGallerySlide(number);
		this.dialog.showModal();
		document.body.style.overflow = 'hidden';
	}

	close() {
		this.dialog.close();
		document.body.style.overflow = null;
	}
}

export const initThumbnailGallery = () => {
	const thumbnail = document.querySelector('[data-gallery="thumbnail"]');

	if (!thumbnail) {
		return;
	}

	const ImageGallery = new ImageGalleryDialog({
		dialog: document.getElementById('thumbnailGallery'),
	});

	thumbnail.addEventListener('click', () => {
		ImageGallery.open();
	});
};

export const initContentGalleries = () => {
	const mediaElements = Array.from(
		document.querySelectorAll('[data-gallery="content"]')
	);

	if (mediaElements.length === 0) {
		return;
	}

	const ImageGallery = new ImageGalleryDialog({
		media: mediaElements,
		id: 'contentGallery',
	});

	mediaElements.forEach((element) => {
		element.addEventListener('click', () => {
			const index = parseInt(element.dataset.imageIndex);
			ImageGallery.open(index);
		});
	});
};

export const initPostGalleries = () => {
	const mediaElements = Array.from(
		document.querySelectorAll('[data-gallery="gallery"]')
	);

	const ImageGallery = new ImageGalleryDialog({
		dialog: document.getElementById('postGallery'),
	});

	mediaElements.forEach((element) => {
		element.addEventListener('click', () => {
			const index = parseInt(element.dataset.imageIndex);
			ImageGallery.open(index);
		});
	});
};
