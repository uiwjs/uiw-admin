import fs from 'fs';
import path from 'path';

it('js案例项目生成测试', async () => {
  const srcDir = path.resolve(process.cwd(), 'examples', 'basejs', 'src');
  expect(fs.existsSync(srcDir)).toBeTruthy();
  const fileNames = fs.readdirSync(`${srcDir}/layouts`);
  expect(fileNames).toContain('BasicLayout.js');
});
