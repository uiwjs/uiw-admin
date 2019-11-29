import path from 'path';
import apiMocker from 'mocker-api';

export const loaderOneOf = [
  require.resolve('@kkt/loader-less'),
]

export default (conf, { isEnvDevelopment }, webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  conf.module.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: require.resolve('raw-loader'),
      });
    }
    return item;
  });
  // 获取版本
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  if (isEnvDevelopment) {
    conf.devServer.before = (app) => {
      apiMocker(app, path.resolve('./mocker/index.js'), {
        proxy: {
          // '/repos/*': 'https://api.github.com/',
        },
        changeHost: true,
      });
    };
  }
  return conf;
}
