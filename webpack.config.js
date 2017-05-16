var config = {
  entry: {
    main: './js/src/main.js'
  },

  output: {
    filename: 'js/dist/[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          comments: false,
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },

  externals: {
    'lib/Injector': 'Injector',
    'react': 'React',
    'redux': 'Redux'
  }
};

module.exports = config;