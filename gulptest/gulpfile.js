/* ***************************************************************
 *
 * * Filename: Gulpfile.js
 *
 * * Description:Configure the Gulp job
 *
 * * Version: 1.0
 *
 * * Created: 2018/06/03
 *
 * * Revision: none
 *
 * * Compiler: node
 *
 * * Author: Lv Hongbin
 *
 * * Company: Shanghai JiaoTong Univerity
 *
/* **************************************************************/

const gulp = require('gulp');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var pump = require('pump');

// es5转义 
gulp.task('babel', () =>
    gulp.src('src/jsTest.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);

// 检查语法错误
gulp.task('lint', function() {
  return gulp.src('/src/test.js')
    .pipe(jshint())
    //.pipe(jshint.reporter('YOUR_REPORTER_HERE'));
    .pipe(jshint.reporter('default'));
});

// 压缩文件
gulp.task('compress', function (cb) {
  pump([
        gulp.src(['src/test.js', 'dist/jsTest.js']),
        uglify(),
        gulp.dest('dist/min')
    ],
    cb
  );
});

// 监察文件变化 jsTest文件夹
var watcher_jsTest = gulp.watch('src/jsTest.js', ['babel', 'compress']);
watcher_jsTest.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// 监察文件变化 jsTest文件夹
var watcher_test = gulp.watch('src/test.js', ['lint']);
watcher_test.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// 任务流
gulp.task('default', ['babel', 'lint', 'compress']);

