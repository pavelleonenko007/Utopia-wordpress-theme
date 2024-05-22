const SUBSCRIBE_FORM_SELECTOR = '#subscribe-form';

export const initSubscribeForm = () => {
	const subscribeForm = document.querySelector(SUBSCRIBE_FORM_SELECTOR);

	if (!subscribeForm) return;

	const sendIcon = subscribeForm.querySelector('.pre-send');
	const successIcon = subscribeForm.querySelector('.done-send');

	/**
	 * 
	 * @param {SubmitEvent} event 
	 */
	const submitHandler = event => {
		event.preventDefault();

		const isSending = subscribeForm.classList.contains('form--loading');
		if (isSending) return;

		subscribeForm.classList.add('form--loading');

		const formData = new FormData(subscribeForm);

		fetch(UTOPIA.AJAX_URL, {
			method: 'POST',
			body: formData,
		})
			.then(response => response.json())
			.then(({ data, success }) => {
				if (!success) {
					throw new Error(data.message);
				}

				if (sendIcon) {
					sendIcon.style.display = 'none';
				}

				if (successIcon) {
					successIcon.style.display = 'block';
				}
			})
			.catch(error => {
				console.error(error.message);
			})
			.finally(() => {
				setTimeout(() => {
					subscribeForm.reset();

					if (successIcon) {
						successIcon.style.display = 'none';
					}

					if (sendIcon) {
						sendIcon.style.display = 'block';
					}

					subscribeForm.classList.remove('form--loading')
				}, 3_000);
			});
	}

	subscribeForm.addEventListener('submit', submitHandler);
}