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
  },

  output: {
    html: "./public/",
    css: "./public/css/",
    js: "./public/js/",
    media: "./public/media/",
  },
};

function render_html() {
  // const base_url = "https://www.thomassteeples.co.uk/"; // production
  // const base_url = "https://d3v5q1y0mmn3mu.cloudfront.net/"; // cloudfront
  // const base_url =
  //   "http://thomasfsteepleswebsite.s3-website.eu-west-2.amazonaws.com/"; // S3
  // const base_url = "/Users/steeps/Documents/new_site/public/"; // development - macbook
  // const base_url = "/home/steeps/Documents/my-website/public/" // development - dell
  const base_url = "127.0.0.1" // development - nginx

  return gulp
    .src(paths.input.html)
    .pipe(
      mustache({
        base_url: base_url,
      })
    )
    .pipe(gulp.dest(paths.output.html));
}

function render_scss() {
  return gulp
    .src(paths.input.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
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

exports.render_html = render_html;
exports.render_scss = render_scss;
exports.compile_js = compile_js;
exports.process_media = process_media;
exports.build = gulp.parallel(
  render_html,
  render_scss,
  compile_js,
  process_media
);
