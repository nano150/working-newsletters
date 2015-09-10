//Include gulp + plugins
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Start the server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "/Users/benjamindjang/Sites/working-newsletters"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Static server + wasching scss/html files
gulp.task('serve', ['browser-sync'], function() {
    gulp.watch("*.html").on('change', browserSync.reload);
});










