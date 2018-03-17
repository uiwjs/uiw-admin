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
})({166:[function(require,module,exports) {
module.exports = {
  "footToolbar": "_footToolbar_70hi4_1",
  "extra": "_extra_70hi4_15",
  "actions": "_actions_70hi4_18",
  "children": "_children_70hi4_21"
};
},{}],92:[function(require,module,exports) {
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

var FooterToolbar = function (_PureComponent) {
  _inherits(FooterToolbar, _PureComponent);

  function FooterToolbar() {
    _classCallCheck(this, FooterToolbar);

    return _possibleConstructorReturn(this, (FooterToolbar.__proto__ || Object.getPrototypeOf(FooterToolbar)).apply(this, arguments));
  }

  _createClass(FooterToolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          extra = _props.extra,
          actions = _props.actions,
          className = _props.className,
          extraClassName = _props.extraClassName,
          actionClassName = _props.actionClassName,
          others = _objectWithoutProperties(_props, ['children', 'extra', 'actions', 'className', 'extraClassName', 'actionClassName']);

      var cls = (0, _classnames2.default)(_index2.default.footToolbar, className);
      var clsExtra = (0, _classnames2.default)(_index2.default.extra, extraClassName);
      var clsActions = (0, _classnames2.default)(_index2.default.actions, actionClassName);
      return _react2.default.createElement(
        'div',
        _extends({ className: cls }, others),
        extra && _react2.default.createElement(
          'div',
          { className: clsExtra },
          extra
        ),
        actions && _react2.default.createElement(
          'div',
          { className: clsActions },
          actions
        ),
        children && _react2.default.createElement(
          'div',
          { className: _index2.default.children },
          children
        )
      );
    }
  }]);

  return FooterToolbar;
}(_react.PureComponent);

exports.default = FooterToolbar;


FooterToolbar.propTypes = {
  extra: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  actions: _propTypes2.default.node,
  clsActions: _propTypes2.default.node,
  className: _propTypes2.default.string,
  extraClassName: _propTypes2.default.string,
  actionClassName: _propTypes2.default.string
};
},{"react":11,"classnames":66,"uiw":67,"prop-types":69,"./index.less":166}],163:[function(require,module,exports) {
module.exports = {
  "avatarList": "_avatarList_1jyn2_1",
  "avatarListItem": "_avatarListItem_1jyn2_12",
  "avatarItemSmall": "_avatarItemSmall_1jyn2_18",
  "avatarItemDefault": "_avatarItemDefault_1jyn2_19",
  "avatarItemLarge": "_avatarItemLarge_1jyn2_20"
};
},{}],90:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var upperCase = function upperCase(text) {
  if (!text) return text;
  var upperCaseLetter = text.substr(0, 1).toUpperCase(),
      strOther = text.substr(1);
  return upperCaseLetter + strOther;
};

var renderAvatar = function renderAvatar(src, size) {
  return src ? _react2.default.createElement(_uiw.Avatar, { src: src, size: size }) : _react2.default.createElement(_uiw.Avatar, { icon: 'user', size: size });
};

var Item = function Item(_ref) {
  var src = _ref.src,
      size = _ref.size,
      tips = _ref.tips,
      onClick = _ref.onClick;

  var cls = (0, _classnames2.default)(_index2.default.avatarListItem, _defineProperty({}, _index2.default['avatarItem' + upperCase(size)], size));
  return _react2.default.createElement(
    'li',
    { className: cls, onClick: onClick },
    tips ? _react2.default.createElement(
      _uiw.Tooltip,
      { content: tips },
      renderAvatar(src, size)
    ) : renderAvatar(src, size)
  );
};

var AvatarList = function (_PureComponent) {
  _inherits(AvatarList, _PureComponent);

  function AvatarList() {
    _classCallCheck(this, AvatarList);

    return _possibleConstructorReturn(this, (AvatarList.__proto__ || Object.getPrototypeOf(AvatarList)).apply(this, arguments));
  }

  _createClass(AvatarList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          size = _props.size,
          others = _objectWithoutProperties(_props, ['children', 'size']);

      var childrenWithProps = _react2.default.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, { size: size });
      });
      return _react2.default.createElement(
        'div',
        { className: _index2.default.avatarList },
        _react2.default.createElement(
          'ul',
          null,
          childrenWithProps
        )
      );
    }
  }]);

  return AvatarList;
}(_react.PureComponent);

exports.default = AvatarList;


AvatarList.Item = Item;

AvatarList.propTypes = {
  size: _propTypes2.default.oneOf(['small', 'default', 'large'])
};

AvatarList.defaultProps = {
  size: 'default'

  /**
   * cloneElement https://segmentfault.com/a/1190000010062928
   * 克隆子组件，新子组件的props为 父组件props和自身props合并后的props，原子组件的key以及ref将被保留
   */

};
},{"react":11,"classnames":66,"uiw":67,"prop-types":69,"./index.less":163}],49:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiw = require('uiw');

var _FooterToolbar = require('../../../components/FooterToolbar');

var _FooterToolbar2 = _interopRequireDefault(_FooterToolbar);

var _AvatarList = require('../../../components/AvatarList');

var _AvatarList2 = _interopRequireDefault(_AvatarList);

var _DescriptionList = require('../../../components/DescriptionList');

var _DescriptionList2 = _interopRequireDefault(_DescriptionList);

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = _DescriptionList2.default.Description;

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u5E95\u90E8\u5DE5\u5177\u680F', content: '\u56FA\u5B9A\u5728\u5E95\u90E8\u7684\u5DE5\u5177\u680F' },
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
    ),
    _react2.default.createElement(
      _uiw.Card,
      { title: '\u9ED8\u8BA4\u5C3A\u5BF8\u548C\u5927\u5C3A\u5BF8', noHover: true, style: { marginBottom: 74, marginTop: 16 } },
      _react2.default.createElement(
        _AvatarList2.default,
        { size: 'small' },
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars1.githubusercontent.com/u/23475830?s=96&v=4', tips: 'avatar', onClick: function onClick(e) {
            console.log(e);
          } }),
        _react2.default.createElement(_AvatarList2.default.Item, null),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
      ),
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
    ),
    _react2.default.createElement(
      _FooterToolbar2.default,
      {
        extra: _react2.default.createElement(_uiw.Icon, { type: 'uiw', style: { fontSize: 24 } }),
        style: { width: 'calc(100% - 290px)' },
        actions: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _uiw.Button,
            null,
            ' \u7ACB\u5373\u9884\u8BA2 ',
            _react2.default.createElement(_uiw.Icon, { type: 'heart-off' }),
            ' '
          ),
          ' ',
          _react2.default.createElement(
            _uiw.Button,
            { type: 'primary' },
            ' \u7ACB\u5373\u9884\u8BA2 ',
            _react2.default.createElement(_uiw.Icon, { type: 'heart-on' }),
            ' '
          )
        )
      },
      _react2.default.createElement(
        'div',
        { style: { textAlign: 'center', fontSize: 12 } },
        _react2.default.createElement(
          'span',
          null,
          '\xA9',
          _react2.default.createElement(
            'a',
            { href: 'https://www.woaibangong.com', style: { color: '#3d90f2' } },
            '\u6211\u7231\u529E\u516C'
          )
        ),
        '\xA0\xA0\xA0\xA0',
        _react2.default.createElement(
          'span',
          null,
          'App\u4E0B\u8F7D'
        )
      )
    )
  );
};
},{"react":11,"uiw":67,"../../../components/FooterToolbar":92,"../../../components/AvatarList":90,"../../../components/DescriptionList":88,"../../../layouts/PageHeaderLayout":59}]},{},[49])