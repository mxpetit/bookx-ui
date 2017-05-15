var del = require('del'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

module.exports = {
	clean: function() {
		return del('./dist/images/*.png');
	},

	build: function() {
		return gulp.src('./assets/images/*.png')
			.pipe(imagemin())
			.pipe(gulp.dest('./dist/images'));
	},

	watch: function() {
		gulp.watch("./assets/images/*.*", ['clean:images', 'build:images']);
	}
}
