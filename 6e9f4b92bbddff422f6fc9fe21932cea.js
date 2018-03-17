// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({45:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiw = require('uiw');

var _AvatarList = require('../../../components/AvatarList');

var _AvatarList2 = _interopRequireDefault(_AvatarList);

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u5934\u50CF\u5217\u8868', content: '\u4E00\u7EC4\u7528\u6237\u5934\u50CF\uFF0C\u5E38\u7528\u5728\u9879\u76EE/\u56E2\u961F\u6210\u5458\u5217\u8868\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E size \u5C5E\u6027\u6765\u6307\u5B9A\u5934\u50CF\u5927\u5C0F\u3002' },
    _react2.default.createElement(
      _uiw.Card,
      { title: '\u5C0F\u5C3A\u5BF8\u7684\u5934\u50CF', noHover: true, style: { marginBottom: 16 } },
      _react2.default.createElement(
        _AvatarList2.default,
        { size: 'small' },
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars1.githubusercontent.com/u/23475830?s=96&v=4', tips: 'avatar', onClick: function onClick(e) {
            console.log(e);
          } }),
        _react2.default.createElement(_AvatarList2.default.Item, null),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
      )
    ),
    _react2.default.createElement(
      _uiw.Card,
      { title: '\u9ED8\u8BA4\u5C3A\u5BF8\u548C\u5927\u5C3A\u5BF8', noHover: true },
      _react2.default.createElement(
        _AvatarList2.default,
        null,
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', tips: 'avatar', onClick: function onClick(e) {
            console.log(e);
          } }),
        _react2.default.createElement(_AvatarList2.default.Item, null),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
      ),
      _react2.default.createElement(
        _AvatarList2.default,
        { size: 'large' },
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars0.githubusercontent.com/u/6764390?s=200&v=4', tips: 'avatar', onClick: function onClick(e) {
            console.log(e);
          } }),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/69631?s=200&v=4' }),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png' })
      )
    )
  );
};
},{"react":11,"uiw":67,"../../../components/AvatarList":90,"../../../layouts/PageHeaderLayout":59}]},{},[45])