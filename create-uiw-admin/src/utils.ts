import minimist from 'minimist';
import { create } from 'create-kkt';

export async function run(): Promise<void> {
  const argvs = minimist(process.argv.slice(2), {
    alias: {
      output: 'o',
      version: 'v',
      force: 'f',
      path: 'p',
      example: 'e',
    },
    default: {
      path: 'https://uiwjs.github.io/uiw-admin/zip/',
      output: '.',
      force: false,
      example: 'uiw-admin-ts',
    },
  });
  if (argvs.h || argvs.help) {
    console.log(helpCli);
    return;
  }
  const { version } = require('../package.json');
  if (argvs.v || argvs.version) {
    console.log(`\n create-uiw-admin v${version}\n`);
    return;
  }
  argvs.appName = argvs._[0];
  argvs.example = argvs.e = String(argvs.example).toLocaleLowerCase();
  await create(argvs, helpExample);
}

export const helpExample: string = `Example:

    \x1b[35myarn\x1b[0m create uiw-admin \x1b[33mappName\x1b[0m
    \x1b[35mnpx\x1b[0m create-uiw-admin \x1b[33mmy-app\x1b[0m
    \x1b[35mnpm\x1b[0m create uiw-admin \x1b[33mmy-app\x1b[0m
    \x1b[35mnpm\x1b[0m create uiw-admin \x1b[33mmy-app\x1b[0m -f
    \x1b[35mnpm\x1b[0m create uiw-admin \x1b[33mmy-app\x1b[0m -p \x1b[34mhttps://uiwjs.github.io/uiw-admin/zip/\x1b[0m
`;

export const helpCli: string = `
  Usage: create-uiw-admin <app-name> [options] [--help|h]

  Options:

    --version, -v   Show version number
    --help, -h      Displays help information.
    --output, -o    Output directory.
    --example, -e   Example from: \x1b[34mhttps://uiwjs.github.io/uiw-admin/zip/\x1b[0m, default: "uiw-admin-ts"
    --path, -p      Specify the download target git address.
                      default: "\x1b[34mhttps://uiwjs.github.io/uiw-admin/zip/\x1b[0m"
  
  ${helpExample}
  
  Copyright 2022

`;
