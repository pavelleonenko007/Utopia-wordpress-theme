import { debounce } from '../utils';

const SEARCH_FORM_SELECTOR = '#searchform';
const SEARCH_RESULTS_CONTAINER_SELECTOR = '.search-results';

export const initSearchForm = () => {
	const searchForm = document.querySelector(SEARCH_FORM_SELECTOR);
	const searchInput = searchForm?.querySelector('input[name="s"]');
	const resultsContainer = document.querySelector(
		SEARCH_RESULTS_CONTAINER_SELECTOR
	);

	if (!searchForm || !searchInput || !resultsContainer) {
		return;
	}

	const debouncedSearch = debounce(() => {
		const formData = new FormData(searchForm);
		const searchQuery = formData.get('s');

		if (!searchQuery.trim()) {
			resultsContainer.innerHTML = '';
			return;
		}

		fetch(UTOPIA.AJAX_URL, {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then(({ data, success }) => {
				if (!success) {
					throw new Error(data.message);
				}

				resultsContainer.innerHTML = data.html;

				setTimeout(() => {
					resultsContainer.querySelectorAll('a').forEach((link) => {
						link.setAttribute('onclick', 'window.searchDialog.close()');
					});
				});
			})
			.catch((error) => {
				console.error(error);
				resultsContainer.innerHTML = '';
			});
	}, 500);

	searchForm.addEventListener('submit', (event) => {
		event.preventDefault();
		debouncedSearch();
	});

	searchInput.addEventListener('input', debouncedSearch);
};
