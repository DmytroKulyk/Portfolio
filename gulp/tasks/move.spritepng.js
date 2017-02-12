'use strict';

module.exports = function() {
    $.gulp.task('movePng', function() {
        return $.gulp.src('./source/temporary/*.png')
            .pipe($.gulp.dest($.config.root + '/assets/img'));
    });
};