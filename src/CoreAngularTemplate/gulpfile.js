/// <binding />
var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var webroot = './wwwroot';
var libraryPath = webroot + '/lib';
var transpiledJsPath = webroot + '/tsjs'


gulp.task('clean', function () {
    return gulp.src(libraryPath)
        .pipe(clean());
});

gulp.task("npmScripts", () => {
    gulp.src([
            'core-js/client/*.min.js',
            'systemjs/dist/*.src.js',
            'reflect-metadata/reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**/*.js',
            '@angular/**/*.css',
            'angular-in-memory-web-api/**/*.js',
            
            
            
            'lodash/*.js'
             
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest(libraryPath))
        .on('finish', function () {
            console.log('GULPING OVER!');
            process.exit(0);
        });
});


gulp.task('scriptsNStyles', function () {
    
    gulp.start('npmScripts');
})


var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts', function (done) {

    var tsResult = gulp.src([
            "scripts/*.ts"
    ])
    .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());

    return tsResult.js.pipe(gulp.dest(transpiledJsPath));
});


gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('scripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch'], function () { console.log("Gulp tasks queued..."); });