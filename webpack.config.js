const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const copyPlugin = defaultConfig.plugins.find(
	(plugin) => plugin instanceof CopyWebpackPlugin
);
copyPlugin.patterns.push({
	from: path.resolve(__dirname, 'src', 'webflow', 'images'),
	to: path.resolve(__dirname, 'build', 'images'),
});
copyPlugin.patterns.push({
	from: path.resolve(__dirname, 'src', 'webflow', 'fonts'),
	to: path.resolve(__dirname, 'build', 'fonts'),
});

module.exports = (env) => {
	return {
		...defaultConfig,
		output: {
			filename: 'js/bundle.js',
			path: path.resolve(__dirname, 'build'),
		},
		plugins: [
			...defaultConfig.plugins.filter(
				(plugin) =>
					!(plugin instanceof MiniCssExtractPlugin) &&
					!(plugin instanceof DependencyExtractionWebpackPlugin)
			),
			new MiniCssExtractPlugin({
				filename: 'css/style.css',
			}),
			new DependencyExtractionWebpackPlugin({
				outputFilename: './bundle.asset.php',
			}),
		],
		module: {
			rules: [...defaultConfig.module.rules],
		},
	};
};
