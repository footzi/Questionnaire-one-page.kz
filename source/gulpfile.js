var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var notify = require('gulp-notify');
var htmlmin = require('gulp-htmlmin');

//html
gulp.task('html', function() {
        return gulp.src('*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('../public'));
    })
    //sass
gulp.task('sass', function() {
    return gulp.src('styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sass({}))
        .on('error', notify.onError({
            title: 'SASS Compilation Failed',
            message: '<%= error.message %>'
        }))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('../public/styles'));
});

//js
gulp.task("js", function() {
    return gulp.src([
            'libs/jquery.min.js',
            'libs/jquery-ui.min.js',
            'libs/jquery.nicescroll.min.js',
            'js/**/*'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .on('error', notify.onError({
            title: 'JS Compilation Failed',
            message: '<%= error.message %>'
        }))
        .pipe(gulp.dest('../public/js'))
})

//image
gulp.task("image", function() {
    return gulp.src("images/**/*")
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('../public/images'))
})

//fonts
gulp.task("fonts", function() {
    return gulp.src("fonts/**/*")
        .pipe(gulp.dest("../public/fonts"))
});

//browserSync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '../public'
        }
    })
});


//watch
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('*.html', ['html'])
    gulp.watch('styles/**/*.scss', ['sass'])
    gulp.watch('js/**/*.js', ['js'])
    gulp.watch('images/**/*', ['image'])
    gulp.watch('fonts/**/*', ['fonts'])
    gulp.watch('../public/*.html', browserSync.reload)
    gulp.watch('../public/js/**/*', browserSync.reload)
});

gulp.task("default", ["watch"])