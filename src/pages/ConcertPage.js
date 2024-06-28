const SIDEBAR_CONTENT_SELECTOR = '.other-info';
const CONCERT_CONTENT_SELECTOR = '.concert-content';

export const alignContentAndSidebar = () => {
	if (window.innerWidth < 768) return;

	const sidebarContent = document.querySelector(SIDEBAR_CONTENT_SELECTOR);
	const concertContent = document.querySelector(CONCERT_CONTENT_SELECTOR);

	if (!sidebarContent || !concertContent) {
		return;
	}

	const sidebarContentOffsetTop = sidebarContent.offsetTop;
	const concertContentOffsetTop = concertContent.offsetTop;
	const diffOffsetTop = concertContentOffsetTop - sidebarContentOffsetTop;

	if (sidebarContentOffsetTop < concertContentOffsetTop) {
		const sidebarContentMarginTop = parseFloat(
			window.getComputedStyle(sidebarContent).marginBottom
		);

		sidebarContent.style.marginTop = `${
			sidebarContentMarginTop + diffOffsetTop
		}px`;
	} else if (sidebarContentOffsetTop > concertContentOffsetTop) {
		const prevNode = concertContent.previousElementSibling;
		const prevNodeMarginTop = parseFloat(
			window.getComputedStyle(prevNode).marginBottom
		);

		concertContent.style.marginTop = `${
			prevNodeMarginTop + Math.abs(diffOffsetTop)
		}px`;
	}
};
