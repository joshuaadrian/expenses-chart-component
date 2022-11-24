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
.js('assets/scripts/app.js', 'scripts')
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
    'assets/**/*.js'
  ]
})
.copyDirectory('assets/images/', 'dist/images')
.copyDirectory('assets/data/', 'dist/data')
.sourceMaps()
.options({
  processCssUrls : false,
  purifyCss      : false,
  uglify         : {}
});
