'use strict';

module.exports = function() {
    $.gulp.task('sprite:generator', function(){
        return $.gulp.src('./source/images/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }))
        .pipe($.gulp.dest('./source/temporary'));
    })
};

