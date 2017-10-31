'use strict';

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
	return gulp.src('./src/bulma/sass/style.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./public/static/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/bulma/sass/**/*.sass', ['sass']);
});
