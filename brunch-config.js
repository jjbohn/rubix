module.exports = {
  // See http://brunch.io for documentation.
  paths: {
    public: 'public',
    watched: 'src'
  },
  conventions: {
    vendor: /(^bower_components|node_modules|vendor)[\\/]/
  },
  modules: {
    autoRequire: {
      'app.js': ["src/globals", "src/jsx/app/main"]
    }
  },
  files: {
    javascripts: {
      /* joinTo: {
         'app.js': /^src\/(?!common)/,
         'globals.js': "src/common/globals.js",
         'bootstrap.js': "src/common/rubix-bootstrap/rubix-bootstrap.js",
         'rubix.js': /^src\/common\/rubix\//
         } */
      joinTo: "app.js",
      order: {
        before: ["globals.js", "main.jsx"]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
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
      React: "react",
      ReactBootstrap: "react-bootstrap",
      global: "global"
    }
  }
}
