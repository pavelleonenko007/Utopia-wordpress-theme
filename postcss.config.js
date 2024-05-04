const wordpressConfig = require('@wordpress/postcss-plugins-preset/lib/');

module.exports = {
	plugins: [
		...wordpressConfig,
		require('postcss-nested'),
		process.env.NODE_ENV === 'production' &&
			require('cssnano')({
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			}),
	],
};
