const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  title: 'NPM Install Issue',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            transpileOnly: false,
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    resolve: {
      modules: ['node_modules', 'frontend'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [new TsConfigPathsPlugin()],
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'Styleguide.tsx'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'Styleguide.md',
    },
  ],
};
