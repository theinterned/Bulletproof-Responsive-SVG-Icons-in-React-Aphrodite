const path = require('path');

module.exports = {
  module: {
    rules: [
      // load svgs with the extension `.icon.svg` as React components that render inline svgs
      {
        test: /\.icon.svg$/,
        loader: 'babel-loader!svg-react-loader',
      },
    ]
  },
};
