var gulp    = require('gulp'),
      gutil    = require('gulp-util'),
      uglify  = require('gulp-uglify'),
      rename = require('gulp-rename'),
      CleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      htmlmin = require ('gulp-htmlmin'),
      concat  = require('gulp-concat');

// Minify html
gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist/'));
});

// Concatenate & Minify JS
gulp.task('js', function() {
	return gulp.src('./js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Concatenate & Minify CSS
gulp.task('css', function(){
	return gulp.src('./css/*.css')
    .pipe(CleanCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp

gulp.task('default', function(){
	gulp.run('js');
});