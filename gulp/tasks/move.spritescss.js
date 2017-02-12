'use strict';

module.exports = function() {
    $.gulp.task('moveScss', function() {
        return $.gulp.src('./source/temporary/*.scss')
            .pipe($.gulp.dest('./source/style/common/'));
    });
}