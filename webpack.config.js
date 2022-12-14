const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'bundle.js'
   },
   devServer: {
      hot: true,
      port: 8000
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: [
                  "@babel/preset-env",
                  "@babel/preset-react"
               ]
            }
         },
         {
            test: /\.css?$/,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}