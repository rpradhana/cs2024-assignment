'use strict';

var gulp           = require('gulp');
var sass           = require('gulp-sass');
var rename         = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/bulma/bulma.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('style.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./public/static/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/bulma/sass/**/*.sass', ['sass']);
});
