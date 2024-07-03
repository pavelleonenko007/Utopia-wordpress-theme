const LOAD_MORE_BUTTON_SELECTOR = '[data-button="load-more"]';
const ARTICLES_CONTAINER_SELECTOR = '.conc-core.in-page.idea-page';

export const initLoadMoreArticlesButton = () => {
	const button = document.querySelector(LOAD_MORE_BUTTON_SELECTOR);

	if (!button) {
		return;
	}

	button.onclick = async (event) => {
		event.preventDefault();

		const maxPages = parseInt(button.getAttribute('data-max-pages')) || 1;
		let currentPage = parseInt(button.getAttribute('data-current-page')) || 1;

		if (currentPage >= maxPages) {
			return;
		}

		currentPage += 1;

		try {
			const formData = new FormData();

			formData.append('action', 'load_more_articles');
			formData.append('page', `${currentPage}`);

			const response = await fetch(UTOPIA.AJAX_URL, {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const { success, data } = await response.json();

			if (!success) {
				throw new Error(data.message);
			}

			button.setAttribute('data-current-page', currentPage);

			if (currentPage >= maxPages) {
				button.remove();
			}

			document
				.querySelector(ARTICLES_CONTAINER_SELECTOR)
				?.insertAdjacentHTML('beforeend', data.html);
		} catch (error) {
			console.error(error);
		}
	};
};
