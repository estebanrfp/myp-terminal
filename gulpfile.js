var gulp = require('gulp'),
        // sass = require('gulp-sass'),
        stylus = require('gulp-stylus'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
		// livereload = require('gulp-livereload');
        nib = require('nib');
//sass
// gulp.task('styles', function() {
//       return gulp.src('scss/*.scss')
//         .pipe(sass({ style: 'expanded' }))
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
//         .pipe(gulp.dest('css'))
//         .pipe(rename({suffix: '.min'}))
//         .pipe(minifycss())
//         .pipe(gulp.dest('css/'));
// });

//stylus
gulp.task('styles', function () { // gulp client_stylus
  gulp.src('stylus/styles.styl')
    .pipe(stylus({use: nib(), compress: true}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('css/'))
	// .pipe(livereload());

});

gulp.task('watch', function() {
  // livereload.listen();
  gulp.watch('stylus/*.styl', ['styles']);
  //gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch'], function() {
gulp.start('styles');
});




