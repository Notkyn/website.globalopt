const   gulp            = require('gulp'),
        browserSync     = require('browser-sync'),
        htmlmin         = require('gulp-htmlmin'),
        sass            = require('gulp-sass'),
        cleanCSS        = require('gulp-clean-css'),
        autoprefixer    = require('gulp-autoprefixer'),
        rename          = require("gulp-rename"),
        imagemin        = require('gulp-imagemin');


gulp.task("server", function(){
    browserSync({
        server: {
            baseDir: "dist"
        },
        notify: false
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('html', function(){
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('js'));
});

gulp.task('icons', function(){
    return gulp.src("src/icons/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('images', function(){
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('fonts', function(){
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('js', function(){
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'html', 'styles', 'icons', 'images', 'fonts', 'js'));