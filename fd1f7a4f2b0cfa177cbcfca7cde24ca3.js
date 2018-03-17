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
})({47:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DescriptionList = require('../../../components/DescriptionList');

var _DescriptionList2 = _interopRequireDefault(_DescriptionList);

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = _DescriptionList2.default.Description;

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u63CF\u8FF0\u5217\u8868', content: '\u6210\u7EC4\u5C55\u793A\u591A\u4E2A\u53EA\u8BFB\u5B57\u6BB5\uFF0C\u5E38\u89C1\u4E8E\u8BE6\u60C5\u9875\u7684\u4FE1\u606F\u5C55\u793A\u3002' },
    _react2.default.createElement(
      _DescriptionList2.default,
      { title: '\u8BA2\u5355\u8BE6\u60C5', column: 3, layout: 'vertical' },
      _react2.default.createElement(
        Description,
        { term: '\u53D6\u8D27\u5355\u53F7' },
        '1000000000'
      ),
      _react2.default.createElement(
        Description,
        { term: '\u72B6\u6001' },
        '\u5DF2\u53D6\u8D27'
      ),
      _react2.default.createElement(
        Description,
        { term: '\u9500\u552E\u5355\u53F7' },
        '1234123421'
      ),
      _react2.default.createElement(
        Description,
        { term: '\u5B50\u8BA2\u5355' },
        '3214321432'
      ),
      _react2.default.createElement(
        Description,
        { term: '\u7528\u6237\u59D3\u540D' },
        '\u6211\u7231\u529E\u516C'
      ),
      _react2.default.createElement(
        Description,
        { term: '\u8054\u7CFB\u7535\u8BDD' },
        '18100000000'
      ),
      _react2.default.createElement(
        Description,
        { term: '\u53D6\u8D27\u5730\u5740' },
        '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u4E07\u5858\u8DEF18\u53F7'
      )
    )
  );
};
},{"react":11,"../../../components/DescriptionList":88,"../../../layouts/PageHeaderLayout":59}]},{},[47])