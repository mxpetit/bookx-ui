var gulp = require('gulp'),
	del = require('del');

module.exports = {
	clean: function() {
		return del('./dist/lib/**');
	},

	build: function() {
		return gulp.src('./bower_components/**')
			.pipe(gulp.dest('./dist/lib'));
	}
}