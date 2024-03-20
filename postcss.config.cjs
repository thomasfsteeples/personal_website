/** @type {import('postcss-load-config').Config} */
const postcssPresetEnv = require("postcss-preset-env");

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        "custom-selectors": true,
        "nesting-rules": true,
        "relative-color-syntax": true,
      },
    }),
  ],
};

module.exports = config;
