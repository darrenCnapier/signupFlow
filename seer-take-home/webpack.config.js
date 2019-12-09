const webpack = require('webpack');
const path = require('path');

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js',
};

module.exports = {
  mode: 'production',
  entry, output,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ '@babel/preset-env', '@babel/preset-react' ]
        }
      },
      {
        test: /(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192
            }
          }
        ]
      }
    ],
  },
  devServer: {
    publicPath: 'http://localhost:8080/dist/',
    proxy: {
      '/': 'http://localhost:3000',
      '/verification': 'http://localhost:3000',
      '/confirmation': 'http://localhost:3000'
    }
  },
}; 

