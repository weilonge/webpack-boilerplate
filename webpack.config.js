module.exports = {
  output: {
    filename: 'main.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(frag|vert|glsl|txt)$/,
        use: [
          {
            loader: 'raw-loader',
            options: {}
          }
        ]
      }
    ]
  }
};
