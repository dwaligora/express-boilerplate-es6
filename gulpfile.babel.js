import gulp from 'gulp'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('dist', () => {
  gulp.src(['./resources/**/*.json'])
    .pipe(gulp.dest('dist/resources'))
  gulp.src(['./main.js', './app.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
      comments: false,
      minified: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
  gulp.src(['src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
      comments: false,
      minified: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/src'))
})