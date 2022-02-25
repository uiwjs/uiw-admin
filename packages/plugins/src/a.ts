import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
// // @ts-ignore
// import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin';
import { getJSONData, stringToJson, getRouteMapModels } from './../utils';
class AwesomePlugin {
  // Define compilation name and output name
  childCompilerName = 'awesome-plugin-compilation';
  outputFileName = 'custom-file.js';
  // To make child compiler work, you have to have a entry in the file system
  compilationEntry = 'entry-file.js';
  constructor() {
    // Define compilation name and output name
    this.childCompilerName = 'awesome-plugin-compilation';
    this.outputFileName = 'custom-file.js';
    // To make child compiler work, you have to have a entry in the file system
    this.compilationEntry = path.join(process.cwd(), 'src/server.js');
  }

  apply(compiler: webpack.Compiler) {
    // Listen to `make` event
    compiler.hooks.make.tapAsync('demos', (compilation, callback) => {
      // Creating child compiler with params
      const childCompiler = compilation.createChildCompiler(
        this.childCompilerName,
        {
          filename: this.outputFileName,
        },
      );

      // Everyone plugin does this, I don't know why
      childCompiler.context = compiler.context;

      webpack.EntryOptionPlugin.applyEntryOption(
        childCompiler,
        compilation.compiler.context,
        this.compilationEntry,
      );
      // Add SingleEntryPlugin to make all this work
      // childCompiler.apply(new SingleEntryPlugin(compiler.context, this.compilationEntry, this.outputFileName));

      // Needed for HMR. Even if your plugin don't support HMR,
      // this code seems to be always needed just in case to prevent possible errors
      childCompiler.hooks.compilation.tap('demos', (compilation) => {
        if (compilation) {
          if (!compilation.cache[name]) {
            compilation.cache[name] = {};
          }

          compilation.chunks = compilation.chunks;
        }
      });

      // Run child compilation
      childCompiler.runAsChild((err, entries, childCompilation) => {
        callback(err);
      });
    });
  }
}

module.exports = { AwesomePlugin };
