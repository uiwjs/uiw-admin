import path from 'path';
import { OptionConf } from 'kkt';
import webpack from 'webpack';

type Webpack = typeof webpack;

export const loaderOneOf = [require.resolve('@kkt/loader-less')];

export const moduleScopePluginOpts = [path.resolve(process.cwd(), 'README.md')];

export default (
  conf: webpack.Configuration,
  opts: OptionConf,
  webpack: Webpack,
) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));

  conf.resolve!.alias = {
    // 当前开发模式需要
    // https://github.com/marmelab/react-admin/issues/3078#issuecomment-579128213
    // react: path.resolve('./node_modules/react'),
    // "react-router": path.resolve("./node_modules/react-router"),
    // "react-router-dom": path.resolve("./node_modules/react-router-dom"),
    '@/': path.resolve(__dirname, 'src'),
  };

  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
  /**
   * 解决在 GitHub Actions 里面报错
   * `[mini-css-extract-plugin] warning Conflicting order`
   * https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-415345126
   * https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-426102538
   */
  conf.plugins!.push(
    new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
    }),
    // new FilterWarningsPlugin({ filter: /chunk styles \[mini-css-extract-plugin]\nConflicting order between:/ }),
  );

  return conf;
};

/**
 * mocker-api that creates mocks for REST APIs.
 * It will be helpful when you try to test your application without the actual REST API server.
 * https://github.com/jaywcjlove/mocker-api
 */
export const mocker = {
  path: path.resolve('./mocker/index.js'),
  /**
   * https://github.com/jaywcjlove/mocker-api/tree/96c2eb94694571e0e3003e6ad9ce1c809499f577#options
   */
  option: {},
};
