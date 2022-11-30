import gulp from "gulp";
import imagemin from "gulp-imagemin";
import mozjpegtran from "imagemin-mozjpeg-jpegtran";
import gifsicle from "imagemin-gifsicle";
import optipng from "imagemin-optipng";
import svgo from "imagemin-svgo";

export default () =>
  gulp
    .src("src/*")
    .pipe(
      imagemin([
        gifsicle({ interlaced: false, optimizationLevel: 3 }),
        mozjpegtran({ optimize: true, progressive: true }),
        optipng({ optimizationLevel: 7 }),
        svgo({
          plugins: ["preset-default"],
        }),
      ])
    )
    .pipe(gulp.dest("dist"));
