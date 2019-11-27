// module.exports = {
//     parser: 'sugarss',
//     plugins: {
//       //'postcss-import': {},
//       'postcss-preset-env': {},
//       'cssnano': {}
//     }
//   }
// module.exports = {
//   plugins: [
//     require('autoprefixer')({
//       'browsers': ['> 1%', 'last 2 versions']
//     })
//   ]
// };
module.exports = {
  "css-mqpacker": true,
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({ preset: 'default' })
  ],
  minimize: true
}