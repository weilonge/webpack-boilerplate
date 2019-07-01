const config = {
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
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  if (argv.mode === 'production') {
    // Add some customized options.
  }

  return config
}
