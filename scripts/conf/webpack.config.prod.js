import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import path from 'path';
import loaderUtils from 'loader-utils'; // webpack 内部插件
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import paths from './path';
import pkg from '../../package.json';

export default {
  mode: 'production',
  entry: {
    app: [
      paths.appIndexJs,
    ],
    // vendors: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: paths.appBuildDist,
    publicPath: './',
    filename: 'js/[name].js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            // 首先运行linter。
            // 在Babel处理js之前做这一点很重要。
            options: {
              // formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
              configFile: require.resolve('../../.eslintrc.js'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(css|less)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  minimize: true,
                  localIdentName: '[local]',
                  importLoaders: 1,
                  getLocalIdent: (context, localIdentName, localName) => {
                    // 过滤 uiw 组件库，因为 modules=true 参数，会将 className替换成Hash，导致uiw样式无法加载
                    const hash = loaderUtils.getHashDigest(context.resourcePath + localIdentName, 'md5', 'base64', 5);
                    const uiwpath = path.join(process.cwd(), 'node_modules', 'uiw');
                    if ((new RegExp(`^${uiwpath}`)).test(context.resourcePath)) {
                      return localName;
                    }
                    return localName + hash;
                  },
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugsFixes(),
                    // require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              require.resolve('less-loader'),
            ],
          },
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {

              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
          },
          {
            test: /w-iconfont\.(eot|ttf|svg)$/,
            use: [
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: './static/[name].[hash:8].[ext]',
                },
              },
            ],
          },
          // “file-loader”确保这些资源由WebpackDevServer服务。
          // 当您导入资源时，您将获得（虚拟）文件名。
          // 在生产中，它们将被复制到`build`文件夹。
          // 此加载程序不使用“test”，因此它将捕获所有模块
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            use: [
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/[name].[hash:8].[ext]',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
  optimization: {
    runtimeChunk: true,
    // minimizer: [],
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true, // set to true if you want JS source maps
    //   }),
    // ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      name: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        // default: {
        //   chunks: 'async',
        //   minSize: 30000,
        //   minChunks: 2,
        //   maxAsyncRequests: 5,
        //   maxInitialRequests: 3,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
        // vendors: {
        //   name: 'vendors',
        //   enforce: true,
        //   // test: (module) => {
        //   //   return (
        //   //     module.resource &&
        //   //     (module.resource.startsWith(root('node_modules')) ||
        //   //       module.resource.startsWith(root('vendor')))
        //   //   );
        //   // },
        //   priority: -40,
        //   reuseExistingChunk: true,
        // },
        // commons: {
        //   name: 'commons',
        //   chunks: 'initial',
        //   minChunks: 1,
        //   // test: (module) => {
        //   //   return module.resource && module.resource.startsWith(root('src'));
        //   // },
        //   priority: -5,
        //   reuseExistingChunk: true,
        // },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: paths.appFavicon,
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
