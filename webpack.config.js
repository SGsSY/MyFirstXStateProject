const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'bundle.js'
   },
   devServer: {
      hot: true,
      port: 8000
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}