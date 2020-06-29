// const gulp = require("gulp");
// const sass = require("gulp-sass");

// gulp.task("default", function() {
//     return gulp.watch("scss/main.scss", function() {
//         return (
//             gulp
//                 .src("scss/main.scss")
//                 .pipe(
//                     sass({
//                         outputStyle: "expanded"
//                     })
//                     .on("error", sass.logError)
//                 )
//                 .pipe(gulp.dest("css"))
//         );
//     });
// });

// // expanded 設計のコードを整形
// // nested,compact(規則集合毎が1行),compressed(全CSSコードが1行)などがある
// // ↑task非推奨のため https://gulpjs.com/docs/en/api/task/


// const { src,dest,watch } = require("gulp");
// const sass = require("gulp-sass");

// const compileSass = () => {
//     src("scss/main.scss")
//         .pipe(
//             sass({
//                 outputStyle: "expanded"
//             })
//         )
//         .pipe(dest("css"));
// }

// const watchSassFiles = () => watch("scss/main.scss", compileSass);
// exports.default = watchSassFiles;

// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function() {
  // ★ style.scssファイルを監視
  return gulp.watch("scss/main.scss", function() {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return (
      gulp
        .src("scss/main.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("css"))
    );
  });
});