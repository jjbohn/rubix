module.exports = {
  // See http://brunch.io for documentation.
  paths: {
    public: 'public',
    watched: 'src'
  },
  conventions: {
    ignored: /^test/,
    vendor: /(^bower_components|node_modules|vendor)[\\/]/
  },
  modules: {
    autoRequire: {
      'app.js': ["src/jsx/app/main"]
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^src/,
        'vendor.js': /^(?!src)/
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  plugins: {
    babel: {
      presets: ['es2015', 'react', 'stage-1'],
      plugins: ['transform-decorators-legacy'],
      pattern: /\.(js|jsx)$/
    }
  },
  npm: {
    enabled: true,
    globals: {
      React: "react"
    }
  }
}
