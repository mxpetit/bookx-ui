var gulp = require('gulp'),
	del = require('del'),
	concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

module.exports = {
	clean: function() {
		return del(['./dist/javascript/*', './dist/index.js']);
	},

	index: function() {
		return gulp.src('./index.js')
			.pipe(gulp.dest('./dist/'));
	},

	build: function() {
		return gulp.src(['./app/**/*.js', '!./app/**/*_test.js'])
			.pipe(concat('app.min.js'))
			.pipe(uglify('app.min.js'))
			.pipe(gulp.dest('./dist/javascript'));
	},

	watch: function() {
		gulp.watch(['./app/**/*.js', '!./app/**/*_test.js', './index.js'], ['clean:js', 'index:js', 'build:js']);
	}
}
