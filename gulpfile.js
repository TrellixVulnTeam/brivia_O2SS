const { parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function trataHTML() {
    return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}

function trataCSS(){
    return gulp.src('css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "ugliComents": true }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css'))
}
function trataIMG(){
    return gulp.src('images/**/*')
    .pipe(gulp.dest('build/images'))
}
function trataJS(){
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('build/js'))
}

exports.default = parallel(trataHTML, trataCSS, trataIMG, trataJS)