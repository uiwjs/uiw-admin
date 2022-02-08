import webpack from 'webpack';
import { Log } from './../Log';

class MapsWebpackPlugin {
  constructor() {}

  apply(compiler: webpack.Compiler) {
    compiler.hooks.done.tapAsync(
      'MapsWebpackPlugin',
      async (stats, callBack) => {
        const jsons = stats.toJson();
        Log(jsons);
        callBack && callBack();
      },
    );
  }
}

export default MapsWebpackPlugin;
