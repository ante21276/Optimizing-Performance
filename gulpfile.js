var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    maps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean');

gulp.task('concatcss', function () {
  return gulp.src('css/*.css')
    .pipe(maps.init())
    .pipe(concatCss("application.css"))
    .pipe(maps.write("css"))
    .pipe(gulp.dest('css'))
});

gulp.task('minify-css', ["concatcss"], () => {
  return gulp.src('css/application.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("application.min.css"))
    .pipe(gulp.dest('css'));
});

gulp.task('concatScripts', function() {
  return gulp.src([
                  'js/jquery.js',
                  'js/scripts.js',
                  'js/fastclick.js',
                  'js/foundation.js',
                  'js/foundation.equalizer.js',
                  'js/foundation.reveal.js',
                  ])
    .pipe(concat("app.js"))
    .pipe(gulp.dest('js'));
});

gulp.task('minify-js',["concatScripts"], function () {
  return gulp.src('js/app.js')
  .pipe(uglify())
  .pipe(rename("app.min.js"))
  .pipe(gulp.dest('js'))
});

gulp.task('removeDist', function () {
    return gulp.src(['dist', "css/application.css", "css/application.min.css", "js/app.js", "js/app.min.js"])
        .pipe(clean());
});

gulp.task("build", ["minify-css", "minify-js"], () => {
  return gulp.src(["css/application.min.css", "js/app.min.js","index.html", "img/**"], {base:"./"})
            .pipe(gulp.dest("dist"));
});

gulp.task('default', ["removeDist"], function() {
  gulp.start("build")
});
