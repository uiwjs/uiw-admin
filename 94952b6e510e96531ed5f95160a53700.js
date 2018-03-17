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
})({309:[function(require,module,exports) {
module.exports = {
  "globalFooter": "_globalFooter_1upsi_1",
  "links": "_links_1upsi_6",
  "link": "_link_1upsi_6",
  "copyright": "_copyright_1upsi_18"
};
},{}],103:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter = function (_PureComponent) {
  _inherits(GlobalFooter, _PureComponent);

  function GlobalFooter() {
    _classCallCheck(this, GlobalFooter);

    return _possibleConstructorReturn(this, (GlobalFooter.__proto__ || Object.getPrototypeOf(GlobalFooter)).apply(this, arguments));
  }

  _createClass(GlobalFooter, [{
    key: 'renderLinks',
    value: function renderLinks(links) {
      if (Array.isArray(links)) {
        return links.map(function (it) {
          var href = it.href,
              text = it.text,
              id = it.id,
              key = it.key,
              icon = it.icon,
              others = _objectWithoutProperties(it, ['href', 'text', 'id', 'key', 'icon']);

          return _react2.default.createElement(
            'a',
            _extends({ href: it.href, className: _index2.default.link, key: '' + (id || key || Math.random()) }, others),
            icon,
            ' ',
            text
          );
        });
      } else if (_react2.default.isValidElement(links)) {
        return links;
      }
      throw new Error('Invalid props links');
    }
  }, {
    key: 'renderCopyright',
    value: function renderCopyright(copyright) {
      if (Object.prototype.toString.call(copyright) === '[object String]') {
        return _react2.default.createElement(
          'span',
          null,
          'Copyright \xA9 ',
          copyright
        );
      } else if (_react2.default.isValidElement(copyright)) {
        return copyright;
      }
      throw new Error('Invalid props copyright');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          links = _props.links,
          copyright = _props.copyright,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['children', 'links', 'copyright', 'className']);

      var cls = (0, _classnames2.default)(_index2.default.globalFooter, className);
      return _react2.default.createElement(
        'div',
        { className: cls },
        children,
        links && _react2.default.createElement(
          'div',
          { className: _index2.default.links },
          this.renderLinks(links)
        ),
        copyright && _react2.default.createElement(
          'div',
          { className: _index2.default.copyright },
          this.renderCopyright(copyright)
        )
      );
    }
  }]);

  return GlobalFooter;
}(_react.PureComponent);

exports.default = GlobalFooter;


GlobalFooter.propTypes = {
  links: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.array]),
  copyright: _propTypes2.default.node,
  className: _propTypes2.default.string
};
},{"react":11,"classnames":66,"prop-types":69,"./index.less":309}],50:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiw = require('uiw');

var _GlobalFooter = require('../../../components/GlobalFooter');

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u5168\u5C40\u9875\u811A', content: '\u9875\u811A\u5C5E\u4E8E\u5168\u5C40\u5BFC\u822A\u7684\u4E00\u90E8\u5206\uFF0C\u4F5C\u4E3A\u5BF9\u9876\u90E8\u5BFC\u822A\u7684\u8865\u5145\uFF0C\u901A\u8FC7\u4F20\u9012\u6570\u636E\u63A7\u5236\u5C55\u793A\u5185\u5BB9\u3002' },
    _react2.default.createElement(_GlobalFooter2.default, {
      links: [{
        id: '1',
        text: '我爱办公',
        href: 'https://www.woaibangong.com',
        target: '_blank',
        icon: _react2.default.createElement(_uiw.Icon, { type: 'uiw' })
      }, {
        id: '2',
        text: 'APP下载',
        href: 'https://download.woaibangong.com',
        target: '_blank',
        icon: _react2.default.createElement(_uiw.Icon, { type: 'appstore' })
      }, {
        id: '3',
        text: 'Smart管理平台',
        href: 'https://smart.woaibangong.com',
        target: '_blank',
        icon: _react2.default.createElement(_uiw.Icon, { type: 'android' })
      }],
      copyright: '\u6211\u7231\u529E\u516C'
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _GlobalFooter2.default,
      {
        links: _react2.default.createElement(
          'a',
          { href: 'https://uiw-react.github.io/#/cn/quick-start' },
          'UIW'
        ),
        copyright: _react2.default.createElement(
          'p',
          null,
          'Copyright \xA9 \u4EAE\u91D1\u4FE1\u606F'
        )
      },
      _react2.default.createElement(
        'div',
        { style: { textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'space-around' } },
        _react2.default.createElement(
          'p',
          { style: { display: 'inline-block' } },
          '\u8054\u7CFB\u6211\u4EEC'
        ),
        _react2.default.createElement(
          'p',
          { style: { display: 'inline-block' } },
          '\u4EA7\u54C1\u4ECB\u7ECD'
        ),
        _react2.default.createElement(
          'p',
          { style: { display: 'inline-block' } },
          '\u5408\u4F5C\u4F19\u4F34'
        )
      )
    )
  );
};
},{"react":11,"uiw":67,"../../../components/GlobalFooter":103,"../../../layouts/PageHeaderLayout":59}]},{},[50])