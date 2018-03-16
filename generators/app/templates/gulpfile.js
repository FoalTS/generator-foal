const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const tsProject = ts.createProject('tsconfig.json');

const templateBlob = './src/**/*.html';

gulp.task('clean', () => del('dist'));

gulp.task('compile', function () {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-templates', () => {
  return gulp.src(templateBlob)
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['compile', 'copy-templates']);

gulp.task('dev:start', ['compile'], () => {
  return nodemon({
    script: 'server.js',
    ext: 'ts',
    watch: tsProject.config.include,
    tasks: ['compile']
  });
});

gulp.task('dev:copy-templates', ['copy-templates'], () => {
  return gulp.watch(templateBlob, ['copy-templates']);
});

gulp.task('dev:app', ['dev:start', 'dev:copy-templates'])
