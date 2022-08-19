var gulp = require('gulp')
var mocha = require('mocha')
var ts = require('gulp-typescript')
var tsProj = ts.createProject('tsconfig.json')

gulp.task('default', function() {
	return tsProj.src().pipe(tsProj()).js.pipe(gulp.dest('dist'))
})

gulp.task('test', function() {
	return gulp.src(['test/*.spec.js'], {read: false}).pipe(
		mocha({
			compilers: 'js:babel-core/register',
		}))
})

gulp.task('tdd', function() {
	return gulp.watch['src/*.js', 'test/*.js'], ['test']
})
