const gulp = require('gulp'); //引入gulp，生成一个gulp对象
const html = require('gulp-minify-html'); //引入html压缩插件  html函数方法
const css = require('gulp-clean-css'); //引入css压缩插件  css函数方法
const script = require('gulp-uglify'); //压缩js的插件

//sass
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件 返回的是一个函数体。需要再次执行。
const sass = require('gulp-sass'); //引入sass编译插件 

const watch = require('gulp-watch'); //gulp监听


//复制文件
gulp.task('copyfile', () => {
    return gulp.src('src/thirdplugins/*.js')
        .pipe(gulp.dest('dist/thirdplugins'));
});

//压缩html文件 - 引入插件包
gulp.task('uglifyhtml', () => {
    return gulp.src('src/html/*.html')
        .pipe(html()) //执行html插件包
        .pipe(gulp.dest('dist/'));
});

// //压缩css文件 - 引入插件包
// gulp.task('uglifycss', () => {
//     return gulp.src('src/css/*.css')
//         .pipe(css()) //执行css插件包
//         .pipe(gulp.dest('dist/css'));
// });

//sass编译成css - 引入插件包
gulp.task('compilesass', () => {
    return gulp.src('src/css/*.scss')
        .pipe(plugins.sourcemaps.init()) //初始化gulp-sourcemaps插件
        .pipe(plugins.sass({
            outputStyle: 'compressed' //压缩
        }))
        .pipe(plugins.sourcemaps.write('.')) //通过sourcemaps,生成.map文件
        .pipe(gulp.dest('dist/css/'));
});

//压缩js文件 - 引入插件包
gulp.task('uglifyjs', () => {
    return gulp.src('src/script/*.js')
        .pipe(babel({ //先将es6转换成es5
            presets: ['es2015'] //es2015->es6  es2016->es7...
        }))
        .pipe(script()) //执行js压缩
        .pipe(gulp.dest('dist/script'));
});

//8.监听
// 监听插件-gulp-watch()
// 参1:监听的目录，数组的形式
// 参2:通过gulp.parallel()并行监听任务名。
// 监听的任务必须先执行一次，再能进行监听。

gulp.task('default', () => {
    watch(['src/*.html', 'src/sass/*.scss', 'src/script/*.js'], gulp.parallel('uglifyhtml', 'compilesass', 'uglifyjs'));
});