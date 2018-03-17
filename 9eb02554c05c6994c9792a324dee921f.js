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
})({178:[function(require,module,exports) {
module.exports = {
  "resultWrapper": "_resultWrapper_phuyp_1",
  "iconBar": "_iconBar_phuyp_5",
  "title": "_title_phuyp_13",
  "description": "_description_phuyp_19",
  "extra": "_extra_phuyp_24",
  "children": "_children_phuyp_29",
  "actions": "_actions_phuyp_32"
};
},{}],89:[function(require,module,exports) {
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

var _uiw = require('uiw');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = function (_Component) {
  _inherits(Result, _Component);

  function Result(props) {
    _classCallCheck(this, Result);

    var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Result, [{
    key: 'renderIcon',
    value: function renderIcon(icon) {
      if (typeof icon === 'string') {
        return _react2.default.createElement(_uiw.Icon, { type: icon });
      } else if (_react2.default.isValidElement(icon)) {
        return icon;
      }
      throw new Error('Invalid props icon');
    }
  }, {
    key: 'renderAction',
    value: function renderAction(actions) {
      if (Array.isArray(actions)) {
        var buttons = actions.map(function (it) {
          var id = it.id,
              key = it.key,
              text = it.text,
              icon = it.icon,
              others = _objectWithoutProperties(it, ['id', 'key', 'text', 'icon']);

          return _react2.default.createElement(
            _uiw.Button,
            _extends({}, others, { key: '' + (id || key || Math.random()) }),
            it.text,
            it.icon && _react2.default.createElement(_uiw.Icon, { type: it.icon })
          );
        });
        return buttons;
      } else if (_react2.default.isValidElement(actions)) {
        return actions;
      }
      throw new Error('Invalid props actions');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          title = _props.title,
          description = _props.description,
          extra = _props.extra,
          actions = _props.actions;

      var cls = (0, _classnames2.default)(_index2.default.resultWrapper, className, {});
      return _react2.default.createElement(
        'div',
        { className: cls },
        icon && _react2.default.createElement(
          'p',
          { className: _index2.default.iconBar },
          this.renderIcon(icon)
        ),
        title && _react2.default.createElement(
          'p',
          { className: _index2.default.title },
          title
        ),
        description && _react2.default.createElement(
          'p',
          { className: _index2.default.description },
          description
        ),
        extra && _react2.default.createElement(
          'p',
          { className: _index2.default.extra },
          extra
        ),
        children && _react2.default.createElement(
          'div',
          { className: _index2.default.children },
          children
        ),
        actions && _react2.default.createElement(
          'div',
          { className: _index2.default.actions },
          this.renderAction(actions)
        )
      );
    }
  }]);

  return Result;
}(_react.Component);

exports.default = Result;
},{"react":11,"classnames":66,"uiw":67,"prop-types":69,"./index.less":178}],48:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiw = require('uiw');

var _Result = require('../../../components/Result');

var _Result2 = _interopRequireDefault(_Result);

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _AvatarList = require('../../../components/AvatarList');

var _AvatarList2 = _interopRequireDefault(_AvatarList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u5904\u7406\u7ED3\u679C', content: '\u7ED3\u679C\u9875\u7528\u4E8E\u5BF9\u7528\u6237\u8FDB\u884C\u7684\u4E00\u7CFB\u5217\u4EFB\u52A1\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u53CD\u9988\u3002' },
    _react2.default.createElement(
      _uiw.Card,
      { bordered: false },
      _react2.default.createElement(_Result2.default, {
        icon: 'circle-check',
        title: '\u6E29\u99A8\u63D0\u793A',
        description: '\u201C\u6211\u7231\u529E\u516C\u201D\u4E00\u4E2A\u4E3A\u7231\u5171\u4EAB\u7684\u514D\u8D39\u79DF\u8D41\u5E73\u53F0\uFF01',
        extra: '\u514D\u8D39\u6CE8\u518C\u3001\u53D1\u5E03\u3001\u7BA1\u7406\u60A8\u7684\u623F\u6E90',
        actions: [{ text: '立即预订', icon: 'like-o', onClick: function onClick() {} }, { text: '免费预约', type: 'primary', icon: 'heart-off', onClick: function onClick() {} }] })
    ),
    _react2.default.createElement(
      _uiw.Card,
      { bordered: false, style: { marginTop: 20, width: 600, marginBottom: 20 } },
      _react2.default.createElement(
        _Result2.default,
        {
          icon: _react2.default.createElement(_uiw.Icon, { type: 'heart-on' }),
          title: '\u6E29\u99A8\u63D0\u793A',
          description: '\u201C\u6211\u7231\u529E\u516C\u201D\u4E00\u4E2A\u4E3A\u7231\u5171\u4EAB\u7684\u514D\u8D39\u79DF\u8D41\u5E73\u53F0\uFF01',
          extra: '\u514D\u8D39\u6CE8\u518C\u3001\u53D1\u5E03\u3001\u7BA1\u7406\u60A8\u7684\u623F\u6E90',
          actions: _react2.default.createElement(
            _uiw.Button,
            { block: true, type: 'primary' },
            ' \u7ACB\u5373\u9884\u8BA2 ',
            _react2.default.createElement(_uiw.Icon, { type: 'heart-on' }),
            ' '
          ) },
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
        )
      )
    )
  );
};
},{"react":11,"uiw":67,"../../../components/Result":89,"../../../layouts/PageHeaderLayout":59,"../../../components/AvatarList":90}]},{},[48])