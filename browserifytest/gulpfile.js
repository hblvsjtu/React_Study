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
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var size = require('gulp-size')
var rename = require("gulp-rename");
var streamify = require('gulp-streamify'); 
var sourcemaps = require("gulp-sourcemaps");
var gutil = require('gulp-util');

// es5转义 
gulp.task('babel', () =>
    gulp.src('./src/jsTest.js')
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


// 模块打包
gulp.task("browserify", function() {
    var bundleStream = browserify('./src/findGF.js').bundle(); // 得到Node 常规流
    bundleStream.pipe(source('findGF.js')) 	// 将Node 常规流转换vinyl 文件对象的stream，并将其重命名
    		.pipe(buffer())		//将vinyl对象内容中的Stream转换为Buffer
    		.pipe(sourcemaps.init({loadMaps: true}))	//启用sourcemaps功能
		.pipe(babel({
            		presets: ['env']
        	}))
		.pipe(uglify())					//这里不能直接使用，因为不支持ES6，需要先进行Babel转换
		.on('error', function (err) {
                	gutil.log(gutil.colors.red('[Error]'), err.toString());
            	})
		//.pipe(streamify(uglify())  	//将vinyl对象内容中的Stream转换为Buffer的第二种方法
    		.pipe(size()) 			//展示文件的大小
  		.pipe(sourcemaps.write("./"))			// 生成记录位置信息的sourcemaps文件
		.pipe(rename("findGF.min.js"))
		.pipe(gulp.dest('dist/'))
})

// 监察文件变化 jsTest文件夹
var watcher_jsTest = gulp.watch('src/jsTest.js', ['babel', 'compress']);
watcher_jsTest.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// 监察文件变化 Test文件夹
var watcher_test = gulp.watch('src/test.js', ['lint']);
watcher_test.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// 监察文件变化 Test文件夹
var watcher_findGF = gulp.watch('src/findGF.js', ['browserify']);
watcher_findGF.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// 任务流
gulp.task('default', ['babel', 'lint', 'compress', 'browserify']);
