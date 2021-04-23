const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */

mix.js('src/js/app.js', 'public/js')
    .sass('src/sass/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .version();