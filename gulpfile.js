/**
 * Created by admin on 2017/10/12.
 */

var gulp = require("gulp")
    ,sass = require('gulp-sass')
    ,sourcemaps = require('gulp-sourcemaps')

const SOURCE = './source'
const SCSS_SRC = SOURCE + '/scss/**/*.scss'
const CSS_SRC = SOURCE + '/css'

gulp.task('scss', function () {
    return gulp.src(SCSS_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CSS_SRC))
});

gulp.task('scss:w', function () {
    gulp.watch(SCSS_SRC, ['scss'])
});