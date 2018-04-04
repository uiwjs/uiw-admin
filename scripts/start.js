import webpack from 'webpack';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import apiMocker from 'webpack-api-mocker';
import load from 'loading-cli';
import 'colors-cli/toxic';
import conf from './conf/webpack.config.dev';

const compiler = webpack(conf);
const loading = load('Compiler is running...'.green).start();
loading.color = 'green';

// https://webpack.js.org/api/compiler-hooks/#aftercompile
// 编译完成之后打印日志
compiler.hooks.done.tap('done', () => {
  loading.stop();
  // eslint-disable-next-line
  console.log(`\nDev Server Listening at ${'http://localhost:19421/'.green}`);
});

new WebpackDevServer(compiler, {
  // contentBase: conf.output.appPublic,
  publicPath: conf.output.publicPath,
  hot: true,
  before(app) {
    apiMocker(app, path.resolve('./mocker/index.js'), {
      // 'GET /api/user/list': 'http://localhost:3000',
    });
  },
  historyApiFallback: true,
  quiet: true,
}).listen(19421, 'localhost', (err) => {
  if (err) {
    // eslint-disable-next-line
    return console.log(err);
  }
});
