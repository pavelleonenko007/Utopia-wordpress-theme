import gsap from 'gsap';
import { wait } from '../utils';

const LOADER_SELECTOR = '.hello-screen';
const LOADER_TEXT_SELECTOR = '.hello-screen__text';
const LOADER_INDICATOR = '.hello-screen__loader';

export const initLoader = async () => {
	const loader = document.querySelector(LOADER_SELECTOR);

	if (!loader) {
		return;
	}

	const texts = loader.querySelectorAll(LOADER_TEXT_SELECTOR);
	const indicator = loader.querySelector(LOADER_INDICATOR);
	const tl = gsap.timeline({
		defaults: {
			duration: 0.5,
			ease: 'none',
		},
	});

	await wait(5_000);

	tl.set(indicator, {
		opacity: 0,
	});

	tl.to(
		texts[0],
		{
			opacity: 0,
		},
		0
	)
		.set(
			texts[0],
			{
				display: 'none',
			},
			0.5
		)
		.set(
			texts[1],
			{
				display: 'block',
			},
			0.5
		)
		.from(
			texts[1],
			{
				opacity: 0,
			},
			0.5
		)
		.to(
			loader,
			{
				opacity: 0,
			},
			3
		)
		.set(
			loader,
			{
				display: 'none',
			},
			4
		);
};
