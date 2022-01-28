<p align="center">
  <a href="https://github.com/uiwjs/uiw-admin">
    <img width="200" src="https://avatars.githubusercontent.com/u/33082374?s=88&v=4">
  </a>
</p>
<!--rehype:style=min-height: 380px; display: flex; justify-content: center; align-items: center;-->

<p align="center">
  <a href="https://github.com/uiwjs/uiw-admin/actions/workflows/ci.yml">
    <img alt="Build & Deploy" src="https://github.com/uiwjs/uiw-admin/actions/workflows/ci.yml/badge.svg">
  </a>
  <a href="https://uiwjs.github.io/uiw-admin/create-uiw-admin/lcov-report/">
    <img alt="Coverage Status" src="https://uiwjs.github.io/uiw-admin/create-uiw-admin/badges.svg">
  </a>
  <a href="https://www.npmjs.com/package/create-uiw-admin">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/create-uiw-admin.svg?style=flat">
  </a>
  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/create-uiw-admin/file/README.md">
    <img alt="Open in unpkg" src="https://img.shields.io/badge/Open%20in-unpkg-blue">
  </a>
  <a href="https://www.npmjs.com/package/create-uiw-admin">
    <img src="https://img.shields.io/npm/v/create-uiw-admin.svg">
  </a>
</p>

Creates a [`uiw-admin`](https://github.com/uiwjs/uiw-admin) application using the command line.

## Usage

```shell
# npm 6.x
$ npm init uiw-admin my-app --example uiw-admin-ts
# npm 7+, extra double-dash is needed:
$ npm init uiw-admin my-app -- --example uiw-admin-ts

$ yarn create uiw-admin [appName]
# or npm
$ npm create uiw-admin my-app
# or npx
$ npx create-uiw-admin my-app
```

## Command Help

Below is a help of commands you might find useful. The example download is from https://uiwjs.github.io/uiw-admin/zip/

```bash
Usage: create-uiw-admin <app-name> [options] [--help|h]

Options:

  --version, -v   Show version number
  --help, -h      Displays help information.
  --output, -o    Output directory.
  --example, -e   Example from: https://uiwjs.github.io/uiw-admin/zip/, default: "uiw-admin-ts"
  --path, -p      Specify the download target git address.
                    default: "https://uiwjs.github.io/uiw-admin/zip/"

Example:

  yarn create uiw-admin appName
  npx create-uiw-admin my-app
  npm create uiw-admin my-app
  npm create uiw-admin my-app -f
  npm create uiw-admin my-app -p https://uiwjs.github.io/uiw-admin/zip/

Copyright 2021
```

## License

[MIT © Kenny Wong](https://github.com/jaywcjlove)
