/**
 * 对项目入口文件进行自动生成
 * */
import webpack from 'webpack';
import { PublicConfiguration } from 'swr/dist/types';
import fs from 'fs';
import path from 'path';
import { getInitIndexTemp, getInitCssTemp } from './temp';
import chokidar from 'chokidar';

export interface InitIndexWebpackPluginProps {
  swr?: boolean | undefined | Partial<PublicConfiguration>;
  routeType?: 'history' | 'hash' | 'browser';
}

class InitIndexWebpackPlugin {
  globalCss: boolean = false;
  swr: InitIndexWebpackPluginProps['swr'] = false;
  SWRConfig: Partial<PublicConfiguration> | undefined = undefined;
  routeType: InitIndexWebpackPluginProps['routeType'] = undefined;

  constructor(props?: InitIndexWebpackPluginProps) {
    if (Reflect.has(props || {}, 'swr')) {
      if (typeof Reflect.get(props || {}, 'swr') === 'boolean') {
        this.swr = props?.swr;
      } else if (typeof Reflect.get(props || {}, 'swr') === 'object') {
        this.swr = true;
        this.SWRConfig = props?.swr as Partial<PublicConfiguration>;
      }
    }
    if (Reflect.has(props || {}, 'routeType')) {
      this.routeType = props?.routeType;
    }
  }

  init() {
    if (fs.existsSync(path.resolve(process.cwd(), 'src/global.css'))) {
      this.globalCss = true;
    } else {
      this.globalCss = false;
    }
    const initIndexs = getInitIndexTemp({
      swr: this.swr as boolean,
      SWRConfig: this.SWRConfig,
      routeType: this.routeType,
      globalCss: this.globalCss,
    });
    if (!fs.existsSync(path.resolve(process.cwd(), 'src/.uiw'))) {
      fs.mkdirSync(path.resolve(process.cwd(), 'src/.uiw'));
    }
    fs.writeFileSync(
      path.resolve(process.cwd(), 'src/.uiw/index.tsx'),
      initIndexs,
      { encoding: 'utf-8', flag: 'w+' },
    );
    fs.writeFileSync(
      path.resolve(process.cwd(), 'src/.uiw/index.css'),
      getInitCssTemp(),
      { encoding: 'utf-8', flag: 'w+' },
    );
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.initialize.tap('InitIndexWebpackPlugin', () => {
      this.init();
      this.listenGlobalCss();
    });
  }

  // 监听 global.css 文件是否删除或添加
  listenGlobalCss() {
    if (process.env.NODE_ENV === 'development') {
      chokidar
        .watch(path.resolve(process.cwd(), 'src/global.css'), {
          cwd: path.resolve(process.cwd(), 'src'),
        })
        .on('all', (event, path) => {
          if (['add', 'unlink'].includes(event) && /global.css/.test(path)) {
            this.init();
          }
        });
    }
  }
}

export default InitIndexWebpackPlugin;
