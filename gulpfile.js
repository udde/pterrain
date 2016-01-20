var gulp        = require('gulp');
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');

gulp.task('default', ['build', 'watch', 'serve']);

gulp.task('watch' , function () {
    gulp.watch(['./src/**/*'], ['rebuild']);
});

gulp.task('build', ['concat','browserify']);

gulp.task('rebuild', ['build'], function(){
    browserSync.reload();    
});


gulp.task('serve',function() {
    console.log("serving site... from app/");
    browserSync({
        server: {
            baseDir: 'app/'
        },
        browser: "google chrome",
        notify: false,
    });
});

gulp.task('concat',function(){
    return gulp.src([
        './src/js/main.js'
    ])
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('./src/tmp/'));
});

gulp.task('browserify', function() {
    return browserify('./src/tmp/concat.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js'));
});





