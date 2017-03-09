const gulp = require('gulp');
const fs            = require('fs');
const json        = JSON.parse(fs.readFileSync('./names.json'));
const download = require("gulp-download");
const rename = require("gulp-rename");
const imageResize = require('gulp-image-resize');

gulp.task('default', function(){
	for(i=0;i<json.length;i++){
		download(json[i].url + 'images/LogoHeaderPublic.png')
			.pipe(rename(json[i].fileName))
			.pipe(gulp.dest("./download/"));
	}
});

gulp.task('resize',function(){
  gulp.src('./download/*.png')
    .pipe(imageResize({
      width : 172,
      height : 100,
      crop : false,
      upscale : true
    }))
    .pipe(gulp.dest('./172x100'));

    gulp.src('./download/*.png')
    .pipe(imageResize({
      width : 86,
      height : 50,
      crop : false,
      upscale : true
    }))
    .pipe(gulp.dest('./86x50'));

    gulp.src('./download/*.png')
    .pipe(imageResize({
      width : 62,
      height : 36,
      crop : false,
      upscale : true
    }))
    .pipe(gulp.dest('./62x36'));
});