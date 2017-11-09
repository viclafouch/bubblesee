const gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	print = require('gulp-print'),
	runSequence = require('run-sequence'),
	imagemin = require('gulp-imagemin');

// // Compass task
gulp.task('myCSS', function() {
	return gulp.src(['src/*.scss'])
		.pipe(compass({
		 	css: 'src/',
			sass: 'src/',
			config_file: './config.rb',
		}))
		.on('error', function(error) {
	      console.log(error);
	      this.emit('end');
	    })
	    .pipe(print(function(filepath) {
	      return "file created : " + filepath;
	    }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('src/'))
    	.pipe(rename({ suffix: '.min' }))
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('src/min'))
    	.pipe(print(function(filepath) {
	      return "file created : " + filepath;
	    }))
});

gulp.task('myJs', function() {
	return gulp.src('src/*.js')
		.pipe(sourcemaps.init())
 		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(uglify().on('error', function(e){
	         console.log(e);
	    }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('src/min'))

		.pipe(print(function(filepath) {
	      return "file created : " + filepath;
	    }))
});


gulp.task('default', ['myJs', 'myCSS']);