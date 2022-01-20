/*
 * @Description: 配合ProForm 挂载自定义组件
 */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

class WidgetsWebpackPlugin {
  widgets = '';
  constructor() {
    this.widgets = path.resolve(process.cwd(), 'src/widgets');
  }
  // 重新生成
  check = () => {
    if (!fs.existsSync(this.widgets)) {
      fs.mkdirSync(this.widgets);
    }
    const fi = path.resolve(process.cwd(), 'src/widgets/index.ts');
    if (!fs.existsSync(fi)) {
      fs.writeFileSync(fi, ` export const customWidgetsList = { }`, {
        flag: 'w+',
        encoding: 'utf-8',
      });
    }
  };
  apply(compiler: webpack.Compiler) {
    this.check();
  }
}

export default WidgetsWebpackPlugin;
