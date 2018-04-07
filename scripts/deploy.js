const ghpages = require('gh-pages');
const path = require('path');
const loading = require('loading-cli');
require('colors-cli/toxic');
const pkg = require('../package.json');

const ORIGIN = 'https://github.com/uiw-react/uiw-admin.git';
const BRANCH = 'gh-pages';
console.log('  Start public to your git repo'.green); // eslint-disable-line
console.log(`  ${ORIGIN}\n`.green); // eslint-disable-line
const load = loading({
  text: 'Please wait ...'.blue,
  color: 'blue',
  interval: 100,
  stream: process.stdout,
}).start();

ghpages.publish(path.resolve(path.join(process.cwd(), 'dist')), {
  branch: BRANCH,
  repo: ORIGIN,
  message: `Update uiw v${pkg.version} document., ${new Date()}!`,
}, (err) => {
  load.stop();
  if (err) {
    return console.log(err); // eslint-disable-line
  }
  console.log(`\n  Push to ${BRANCH} success!\n`.green.bold); // eslint-disable-line
});
