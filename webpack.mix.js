let mix = require('laravel-mix');

require('laravel-mix-polyfill');

mix.setPublicPath('dist');
mix.setResourceRoot('/dist/');

mix.webpackConfig({
    stats: {
        children: true,
    },
});

mix
.sass('assets/styles/app.scss', 'styles')
.polyfill({
  enabled     : true,
  useBuiltIns : "usage",
  targets     : "firefox 50, IE 11"
})
.version()
.browserSync({
  proxy : 'expenses-chart.test',
  files : [
    '**/*.html',
    'dist/**/*.css',
    'dist/**/*.js'
  ]
})
.copyDirectory('assets/images/', 'dist/images')
.sourceMaps()
.options({
  processCssUrls : false,
  purifyCss      : false,
  uglify         : {}
});
