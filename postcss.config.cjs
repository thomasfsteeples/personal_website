/** @type {import('postcss-load-config').Config} */
const postcssPresetEnv = require('postcss-preset-env');

const config = {
  plugins: [postcssPresetEnv({
  	   features: {
	   	     "custom-selectors" : true,
		     "nesting-rules" : true
	   }})],
};

module.exports = config;
