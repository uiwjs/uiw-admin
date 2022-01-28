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
        // console.log("children", jsons.children)
        // console.log("assetsByChunkName", jsons.assetsByChunkName)
        // console.log("assets", jsons.assets)
        // console.log("filteredAssets", jsons.filteredAssets)
        // console.log("chunks", jsons.chunks)
        // console.log("modules", jsons.modules)
        // console.log("filteredModules", jsons.filteredModules)
        // console.log("entrypoints", jsons.entrypoints)
        // console.log("namedChunkGroups", jsons.namedChunkGroups)

        // const statsFilepath = path.resolve(compiler.outputPath, "stats.json");
        // await fs.promises.mkdir(path.dirname(statsFilepath), { recursive: true });
        // const reslr = await writeStats(stats.toJson(), statsFilepath);
        // console.log("reslr--->", reslr)
        // console.log(path.dirname(statsFilepath))
      },
    );
  }
}

export default MapsWebpackPlugin;
