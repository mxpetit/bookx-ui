var gulp = require('gulp'),
	del = require('del'),
	rename = require('gulp-rename');

module.exports = {
	clean: function() {
		return del(['./dist/index.html', './dist/html/*']);
	},

	index: function() {
		return gulp.src('./app/index.html')
			.pipe(gulp.dest('./dist'));
	},

	build: function() {
		return gulp.src(['./app/**/*.html', '!./app/index.html'])
			.pipe(rename({dirname: ''}))
			.pipe(gulp.dest('./dist/html'));
	},

	watch: function() {
		gulp.watch(['./app/index.html', './app/**/*.html'], ['clean:html', 'index:html', 'build:html']);
	}
}
