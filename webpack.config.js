const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.min.js',
		path: path.resolve(__dirname),
		library: 'snxTranslations',
		libraryTarget: 'umd',
	},
};
