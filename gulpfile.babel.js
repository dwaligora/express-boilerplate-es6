import gulp from 'gulp'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('dist', () => {
  gulp.src(['./app.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
      comments: false,
      minified: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
})