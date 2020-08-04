const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname , './dist'),
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
                test : /\.css$/, 
                use:['style-loader', 'css-loader']
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            },
            {
              test: /\.(png|jpg|gif|svg)$/i,
              use: [
                  {
                  loader: 'url-loader'
                  }
              ]
          },
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]

}