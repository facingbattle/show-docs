import gulp from 'gulp'
import { series } from 'gulp'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import htmlmin from 'gulp-htmlmin'
import sourcemaps from 'gulp-sourcemaps'
import concat from 'gulp-concat'
import cleanCss from 'gulp-clean-css'


const log = console.log.bind(console)


const taskStyle = () => {
    let src = [
        'demo/**/*.css',
    ]
    let build = 'docs'
    let s = gulp.src(src)
                .pipe(cleanCss())
                .pipe(gulp.dest(build))
    return s
}


const taskScript = () => {
    let src = [
        'demo/**/*.js',
        '!demo/**/*.min.js',
    ]
    let build = 'docs'
    
    let s = gulp.src(src)
                .pipe(babel())
                .pipe(uglify({
                    compress: {
                        drop_console: true,  // 过滤 console
                        drop_debugger: true,  // 过滤 debugger
                    },
                }))
                .pipe(gulp.dest(build))
    return s
}

const taskScriptMin = () => {
    let src = [
        'demo/**/*.min.js',
    ]
    let build = 'docs'
    
    let s = gulp.src(src)
                .pipe(gulp.dest(build))
    return s
}

const taskHtml = () => {
    let src = [
        'demo/**/*.html',
    ]
    let build = 'docs'
    let s = gulp.src(src)
                .pipe(htmlmin({
                    removeComments: true,//清除HTML注释
                    collapseWhitespace: true,//压缩HTML
                    minifyJS: true,//压缩页面JS
                    minifyCSS: true,//压缩页面CSS
                }))
                .pipe(gulp.dest(build))
    return s
}

const taskImage = () => {
    let src = [
        'demo/**/*.{jpg,png,gif}',
    ]
    let build = 'docs'
    let s = gulp.src(src)
                .pipe(gulp.dest(build))
    return s
}

const taskArr = [taskStyle, taskScript, taskScriptMin, taskHtml, taskImage]
exports.default = series(...taskArr)
