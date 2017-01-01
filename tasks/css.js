var gulp = require('gulp'),
	del = require('del'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean-css');

module.exports = {
	clean: function() {
		return del('./dist/css/*.css');
	},

	build: function() {
		return gulp.src('./assets/style/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(clean())
			.pipe(gulp.dest('./dist/css/'));
	},

	watch: function() {
		gulp.watch("./assets/style/*.scss", ['clean:css', 'build:css']);
	}
}