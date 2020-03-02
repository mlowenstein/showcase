// Automation Setup & Configuration
var gulp = require('gulp');
var paths = {
  src: 'src/**/*',
  app: 'src/app/**/*',
  assets: 'src/assets/**/*',
  environments: 'src/environments/*',
  appBase: 'src/index.html',
  appHtml: 'src/app/**/*.html',
  appStyles: 'src/app/**/*.scss',
  appTs: 'src/app/**/*.ts',
  temp: 'temp',
  tempBase: 'temp/index.html',
  tempStyles: 'temp/**/*.scss',
  tempJs: 'temp/**/*.js',
};

// Generic Task: Test Execution to Console
gulp.task('default', async function() {
  console.log('Automation Testing for Showcase...');
});

// Stage Task: Test and Transfer HTML
