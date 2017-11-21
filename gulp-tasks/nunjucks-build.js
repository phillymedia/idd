var data = require('gulp-data');

module.exports = function(gulp, plugins) {
    return function() {
        return gulp.src('app/pages/*.+(html)')
            .pipe(data(function() {
                return {
                    data: require('./../app/data.json')
                }
            }))
            .pipe(plugins.nunjucksRender({
                path: ['app/nj-templates']
            }))
            .pipe(plugins.removeCode({
                tmp: true
            }))
            .pipe(gulp.dest('.tmp'))
    };
};
