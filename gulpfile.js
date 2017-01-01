'use strict';
 
var gulp = require('gulp'),
	css = require('./tasks/css'),
	html = require('./tasks/html'),
	images = require('./tasks/images'),
	js = require('./tasks/js'),
	lib = require('./tasks/lib');

gulp.task('clean:css', css.clean);
gulp.task('build:css', css.build);
gulp.task('watch:css', css.watch);

gulp.task('clean:html', html.clean);
gulp.task('index:html', html.index);
gulp.task('build:html', html.build);
gulp.task('watch:html', html.watch);

gulp.task('clean:images', images.clean);
gulp.task('build:images', images.build);
gulp.task('watch:images', images.watch);

gulp.task('clean:js', js.clean);
gulp.task('index:js', js.index);
gulp.task('build:js', js.build);
gulp.task('watch:js', js.watch);

gulp.task('clean:lib', lib.clean);
gulp.task('build:lib', lib.build);

gulp.task('css', ['clean:css', 'build:css']);
gulp.task('html', ['clean:html', 'index:html', 'build:html']);
gulp.task('images', ['clean:images', 'build:images']);
gulp.task('js', ['clean:js', 'index:js', 'build:js']);
gulp.task('lib', ['clean:lib', 'build:lib']);

gulp.task('watch', ['default', 'watch:css', 'watch:html', 'watch:js']);

gulp.task('default', ['css', 'html', 'images', 'js']);