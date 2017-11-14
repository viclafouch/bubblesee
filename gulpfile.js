const gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	browsers = require('browserslist'),
	print = require('gulp-print'),
	runSequence = require('run-sequence'),
	imagemin = require('gulp-imagemin');

// // Compass task
gulp.task('myCSS', function() {
	return gulp.src(['sass/*.scss'])
		.pipe(compass({
		 	css: 'src',
			sass: 'sass',
			config_file: 'config.rb',
		}))
	    .pipe(print(function(filepath) {
	      return "file created : " + filepath;
	    }))
		.pipe(autoprefixer({
            browsers: ['since 2013'],
            cascade: false
        }))
    	.pipe(gulp.dest(''))
    	.pipe(rename({ suffix: '.min' }))
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('src'));	
});

gulp.task('myJs', function() {
	return gulp.src('src/script.js')
		.pipe(sourcemaps.init())
 		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(uglify().on('error', function(e){
	         console.log(e);
	    }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('src'))

		.pipe(print(function(filepath) {
	      return "file created : " + filepath;
	    }))
});


gulp.task('default', ['myJs', 'myCSS', 'watch']);

// Watch task
gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['myCSS']);
	gulp.watch('src/script.js', ['myJs']);
});