'use strict';

module.exports = function() {
    $.gulp.task('move&convert_fonts', function() {
        return $.gulp.src(['./source/fonts/*.ttf'])
            .pipe($.gp.ttf2woff())
            .pipe($.gulp.dest($.config.root + '/assets/fonts'));
    });
};