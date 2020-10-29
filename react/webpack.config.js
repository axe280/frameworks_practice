let path = require('path');

let config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            "plugins": ["@babel/plugin-transform-react-jsx"]
          }
        }
      }
    ]
  }
};

module.exports = config;