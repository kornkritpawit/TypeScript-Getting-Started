module.exports = {
  entry: './js/app.js',
  // entry: './app/app.ts',
  // devtool: 'inline-source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
  // output: {
  //   filename: 'bundle.js' //file sent to the browser
  // },
  devServer: {
    inline: false //browser refresh new bundle
  }
};
