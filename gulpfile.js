const gulp = require("gulp");
const mustache = require("gulp-mustache");
const sass = require("gulp-sass");
sass.compiler = require("sass");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const path = require("path");
const fs = require("fs");

const paths = {
  input: {
    html: "./html/*.html",
    scss: "./scss/*.scss",
    js: "./js/*.js",
    media: "./media/**/*",
    cgt: "./computational_game_theory/*"
  },

  output: {
    html: "./public/",
    css: "./public/css/",
    js: "./public/js/",
    media: "./public/media/",
    cgt: "./public/computational_game_theory"
  },
};

function render_html() {
  return gulp
    .src(paths.input.html)
    .pipe(
      mustache({

      })
    )
    .pipe(gulp.dest(paths.output.html));
}

function render_scss() {
  const cleanCSS_options = {
    level: {
      1: {
        cleanupCharsets: true, // controls `@charset` moving to the front of a stylesheet; defaults to `true`
        normalizeUrls: true, // controls URL normalization; defaults to `true`
        optimizeBackground: true, // controls `background` property optimizations; defaults to `true`
        optimizeBorderRadius: true, // controls `border-radius` property optimizations; defaults to `true`
        optimizeFilter: true, // controls `filter` property optimizations; defaults to `true`
        optimizeFont: true, // controls `font` property optimizations; defaults to `true`
        optimizeFontWeight: true, // controls `font-weight` property optimizations; defaults to `true`
        optimizeOutline: true, // controls `outline` property optimizations; defaults to `true`
        removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
        removeNegativePaddings: true, // controls removing negative paddings; defaults to `true`
        removeQuotes: true, // controls removing quotes when unnecessary; defaults to `true`
        removeWhitespace: true, // controls removing unused whitespace; defaults to `true`
        replaceMultipleZeros: true, // contols removing redundant zeros; defaults to `true`
        replaceTimeUnits: true, // controls replacing time units with shorter values; defaults to `true`
        replaceZeroUnits: true, // controls replacing zero values with units; defaults to `true`
        roundingPrecision: false, // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
        selectorsSortingMethod: 'standard', // denotes selector sorting method; can be `'natural'` or `'standard'`, `'none'`, or false (the last two since 4.1.0); defaults to `'standard'`
        specialComments: 'all', // denotes a number of /*! ... */ comments preserved; defaults to `all`
        tidyAtRules: true, // controls at-rules (e.g. `@charset`, `@import`) optimizing; defaults to `true`
        tidyBlockScopes: true, // controls block scopes (e.g. `@media`) optimizing; defaults to `true`
        tidySelectors: true, // controls selectors optimizing; defaults to `true`,
        semicolonAfterLastProperty: false, // controls removing trailing semicolons in rule; defaults to `false` - means remove
        transform: function () { } // defines a callback for fine-grained property optimization; defaults to no-op
      },
      2: {
        mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
        mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
        mergeMedia: true, // controls `@media` merging; defaults to true
        mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
        mergeSemantically: false, // controls semantic merging; defaults to false
        overrideProperties: true, // controls property overriding based on understandability; defaults to true
        removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
        reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
        removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
        removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
        removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
        removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
        restructureRules: false, // controls rule restructuring; defaults to false
        skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
      }
    }
  };
  return gulp
    .src(paths.input.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS(cleanCSS_options))
    .pipe(gulp.dest(paths.output.css));
}

function compile_js() {
  return gulp
    .src(paths.input.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(paths.output.js));
}

function process_media() {
  return gulp.src(paths.input.media).pipe(gulp.dest(paths.output.media));
}

function process_cgt() {
  return gulp.src(paths.input.cgt).pipe(gulp.dest(paths.output.cgt));
}


exports.render_html = render_html;
exports.render_scss = render_scss;
exports.compile_js = compile_js;
exports.process_media = process_media;
exports.process_cgt = process_cgt
exports.build = gulp.parallel(
  render_html,
  render_scss,
  compile_js,
  process_media,
  process_cgt
);
