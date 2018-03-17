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
})({162:[function(require,module,exports) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],161:[function(require,module,exports) {
module.exports = {
  "ellipsis": "_ellipsis_1q4an_1",
  "lines": "_lines_1q4an_7",
  "shadow": "_shadow_1q4an_10",
  "lineClamp": "_lineClamp_1q4an_17"
};
},{}],87:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames2 = require('classNames');

var _classNames3 = _interopRequireDefault(_classNames2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiw = require('uiw');

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isSupportLineClamp = document.body.style.webkitLineClamp !== '';

var EllipsisText = function EllipsisText(_ref) {
  var text = _ref.text,
      length = _ref.length,
      tooltip = _ref.tooltip,
      other = _objectWithoutProperties(_ref, ['text', 'length', 'tooltip']);

  if (typeof text !== 'string') {
    throw new Error('Ellipsis 组件内容必须是字符串类型!');
  }
  if (text.length <= length || length < 0) {
    return _react2.default.createElement(
      'span',
      other,
      text
    );
  }
  var tail = '...';
  var displayText = void 0;
  if (length - tail.length <= 0) {
    displayText = '';
  } else {
    displayText = text.slice(0, length - tail.length);
  }

  if (tooltip) {
    return _react2.default.createElement(
      _uiw.Tooltip,
      { content: text },
      displayText,
      tail
    );
  }

  return _react2.default.createElement(
    'span',
    other,
    displayText,
    tail
  );
};

var Ellipsis = function (_Component) {
  _inherits(Ellipsis, _Component);

  function Ellipsis(props) {
    _classCallCheck(this, Ellipsis);

    var _this = _possibleConstructorReturn(this, (Ellipsis.__proto__ || Object.getPrototypeOf(Ellipsis)).call(this, props));

    _this.state = {
      text: '',
      targetCount: 0
    };
    return _this;
  }

  _createClass(Ellipsis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.node) {
        this.computeLine();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lines !== nextProps.lines) {
        this.computeLine();
      }
    }
  }, {
    key: 'computeLine',
    value: function computeLine() {
      var lines = this.props.lines;

      if (lines && !isSupportLineClamp) {
        var text = this.shadowChildren.innerText;
        var lineHeight = parseInt(getComputedStyle(this.root).lineHeight, 10);
        var targetHeight = lines * lineHeight;
        this.content.style.height = targetHeight + 'px';
        var totalHeight = this.shadowChildren.offsetHeight;
        var shadowNode = this.shadow.firstChild;

        if (totalHeight <= targetHeight) {
          this.setState({
            text: text,
            targetCount: text.length
          });
          return;
        }

        // bisection
        var len = text.length;
        var mid = Math.floor(len / 2);

        var count = this.bisection(targetHeight, mid, 0, len, text, shadowNode);

        this.setState({
          text: text,
          targetCount: count
        });
      }
    }

    /**
     * th: 目标节点高度
     * mid:文本长度中间值
     * begin:文本开始index
     * end:文本长度
     * text:文本内通
     * shadowNode:表层节点
    */

  }, {
    key: 'bisection',
    value: function bisection(th, mid, begin, end, text, shadowNode) {
      var suffix = '...';
      shadowNode.innerHTML = text.substring(0, mid) + suffix;
      var sh = shadowNode.offsetHeight;
      if (sh <= th) {
        shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
        sh = shadowNode.offsetHeight;
        if (sh > th) {
          return mid;
        } else {
          begin = mid;
          mid = Math.floor((end - begin) / 2) + begin;
          return this.bisection(th, mid, begin, end, text, shadowNode);
        }
      } else {
        if (mid - 1 < 0) {
          return mid;
        }
        shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = shadowNode.offsetHeight;
        if (sh <= th) {
          return mid - 1;
        } else {
          end = mid;
          mid = Math.floor((end - begin) / 2) + begin;
          return this.bisection(th, mid, begin, end, text, shadowNode);
        }
      }
    }
  }, {
    key: 'handleRoot',
    value: function handleRoot(n) {
      this.root = n;
    }
  }, {
    key: 'handleContent',
    value: function handleContent(n) {
      this.content = n;
    }
  }, {
    key: 'handleNode',
    value: function handleNode(n) {
      this.node = n;
    }
  }, {
    key: 'handleShadow',
    value: function handleShadow(n) {
      this.shadow = n;
    }
  }, {
    key: 'handleShadowChildren',
    value: function handleShadowChildren(n) {
      this.shadowChildren = n;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _state = this.state,
          text = _state.text,
          targetCount = _state.targetCount;

      var _props = this.props,
          children = _props.children,
          lines = _props.lines,
          length = _props.length,
          className = _props.className,
          tooltip = _props.tooltip,
          restProps = _objectWithoutProperties(_props, ['children', 'lines', 'length', 'className', 'tooltip']);

      var cls = (0, _classNames3.default)(_index2.default.ellipsis, className, (_classNames = {}, _defineProperty(_classNames, _index2.default.lines, lines && !isSupportLineClamp), _defineProperty(_classNames, _index2.default.linesClamp, lines && isSupportLineClamp), _classNames));

      if (!lines && !length) {
        return _react2.default.createElement(
          'span',
          _extends({ className: cls }, restProps),
          children
        );
      }

      //length
      if (!lines) {
        return _react2.default.createElement(EllipsisText, _extends({
          className: cls,
          length: length,
          text: children || '',
          tooltip: tooltip
        }, restProps));
      }

      var id = 'uiw-pro-ellipsis-' + ('' + new Date().getTime() + Math.floor(Math.random() * 100));

      // support document.body.style.webkitLineClamp
      if (isSupportLineClamp) {
        var style = '#' + id + '{-webkit-line-clamp:' + lines + ';}';
        return _react2.default.createElement(
          'div',
          _extends({ id: id, className: cls }, restProps),
          _react2.default.createElement(
            'style',
            null,
            style
          ),
          tooltip ? _react2.default.createElement(
            _uiw.Tooltip,
            { content: text },
            children
          ) : children
        );
      }

      var childNode = _react2.default.createElement(
        'span',
        { ref: this.handleNode.bind(this) },
        targetCount > 0 && text.substring(0, targetCount),
        targetCount > 0 && targetCount < text.length && '...'
      );

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          ref: this.handleRoot.bind(this),
          className: cls
        }),
        _react2.default.createElement(
          'div',
          {
            ref: this.handleContent.bind(this)
          },
          tooltip ? _react2.default.createElement(
            _uiw.Tooltip,
            { content: text },
            childNode
          ) : childNode,
          _react2.default.createElement(
            'div',
            { className: _index2.default.shadow, ref: this.handleShadowChildren.bind(this) },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default.shadow, ref: this.handleShadow.bind(this) },
            _react2.default.createElement(
              'span',
              null,
              text
            )
          )
        )
      );
    }
  }]);

  return Ellipsis;
}(_react.Component);

exports.default = Ellipsis;


Ellipsis.propTypes = {
  tooltip: _propTypes2.default.bool,
  length: _propTypes2.default.number,
  lines: _propTypes2.default.number
};
Ellipsis.defaultProps = {
  // tooltip: false,
};
},{"react":11,"classNames":162,"prop-types":69,"uiw":67,"./index.less":161}],86:[function(require,module,exports) {
module.exports = {
  "cardItem": "_cardItem_6k8w2_1"
};
},{}],46:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiw = require('uiw');

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _Ellipsis = require('../../../components/Ellipsis');

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EllipsisElements = function (_Component) {
  _inherits(EllipsisElements, _Component);

  function EllipsisElements() {
    _classCallCheck(this, EllipsisElements);

    return _possibleConstructorReturn(this, (EllipsisElements.__proto__ || Object.getPrototypeOf(EllipsisElements)).apply(this, arguments));
  }

  _createClass(EllipsisElements, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: 'Ellipsis\u6587\u672C\u81EA\u52A8\u7701\u7565\u53F7', content: '\u6587\u672C\u8FC7\u957F\u81EA\u52A8\u5904\u7406\u7701\u7565\u53F7\uFF0C\u652F\u6301\u6309\u7167\u6587\u672C\u957F\u5EA6\u548C\u6700\u5927\u884C\u6570\u4E24\u79CD\u65B9\u5F0F\u622A\u53D6\u3002' },
        _react2.default.createElement(
          _uiw.Card,
          { className: _index2.default.cardItem, title: '\u901A\u8FC7\u8BBE\u7F6E length \u5C5E\u6027\u6307\u5B9A\u6587\u672C\u6700\u957F\u957F\u5EA6\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u957F\u5EA6\u4F1A\u81EA\u52A8\u622A\u53D6\u3002', noHover: true },
          _react2.default.createElement(
            'div',
            null,
            '\u539F\u59CB\u6587\u672C\uFF1A\u66FE\u7ECF\u6709\u4E00\u4EFD\u771F\u8BDA\u7684\u7231\u60C5\u653E\u5728\u6211\u9762\u524D\uFF0C\u6211\u6CA1\u6709\u73CD\u60DC\uFF0C\u7B49\u6211\u5931\u53BB\u7684\u65F6\u5019\u6211\u624D\u540E\u6094\u83AB\u53CA\uFF0C\u4EBA\u4E16\u95F4\u6700\u75DB\u82E6\u7684\u4E8B\u83AB\u8FC7\u4E8E\u6B64\u3002 \u5982\u679C\u4E0A\u5929\u80FD\u591F\u7ED9\u6211\u4E00\u4E2A\u518D\u6765\u4E00\u6B21\u7684\u673A\u4F1A\uFF0C\u6211\u4F1A\u5BF9\u90A3\u4E2A\u5973\u5B69\u5B50\u8BF4\u4E09\u4E2A\u5B57\uFF1A\u6211\u7231\u4F60\u3002 \u5982\u679C\u975E\u8981\u5728\u8FD9\u4EFD\u7231\u4E0A\u52A0\u4E0A\u4E00\u4E2A\u671F\u9650\uFF0C\u6211\u5E0C\u671B\u662F'
          ),
          _react2.default.createElement(
            _Ellipsis2.default,
            { length: 100 },
            '\u66FE\u7ECF\u6709\u4E00\u4EFD\u771F\u8BDA\u7684\u7231\u60C5\u653E\u5728\u6211\u9762\u524D\uFF0C\u6211\u6CA1\u6709\u73CD\u60DC\uFF0C\u7B49\u6211\u5931\u53BB\u7684\u65F6\u5019\u6211\u624D\u540E\u6094\u83AB\u53CA\uFF0C\u4EBA\u4E16\u95F4\u6700\u75DB\u82E6\u7684\u4E8B\u83AB\u8FC7\u4E8E\u6B64\u3002 \u5982\u679C\u4E0A\u5929\u80FD\u591F\u7ED9\u6211\u4E00\u4E2A\u518D\u6765\u4E00\u6B21\u7684\u673A\u4F1A\uFF0C\u6211\u4F1A\u5BF9\u90A3\u4E2A\u5973\u5B69\u5B50\u8BF4\u4E09\u4E2A\u5B57\uFF1A\u6211\u7231\u4F60\u3002 \u5982\u679C\u975E\u8981\u5728\u8FD9\u4EFD\u7231\u4E0A\u52A0\u4E0A\u4E00\u4E2A\u671F\u9650\uFF0C\u6211\u5E0C\u671B\u662F'
          )
        ),
        _react2.default.createElement(
          _uiw.Card,
          { className: _index2.default.cardItem, title: '\u901A\u8FC7\u8BBE\u7F6E tootip \u5C5E\u6027,\u5F53\u9F20\u6807\u79FB\u52A8\u5230\u7701\u7565\u6587\u672C\u5904\u53EF\u67E5\u770B\u5168\u90E8\u6587\u672C\u3002', noHover: true },
          _react2.default.createElement(
            'div',
            null,
            '\u539F\u59CB\u6587\u672C\uFF1A\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14'
          ),
          _react2.default.createElement(
            _Ellipsis2.default,
            { length: 10, tooltip: true },
            '\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14'
          )
        ),
        _react2.default.createElement(
          _uiw.Card,
          { className: _index2.default.cardItem, title: '\u901A\u8FC7\u8BBE\u7F6E tootip \u5C5E\u6027,\u5F53\u9F20\u6807\u79FB\u52A8\u5230\u7701\u7565\u6587\u672C\u5904\u53EF\u67E5\u770B\u5168\u90E8\u6587\u672C\u3002', noHover: true },
          _react2.default.createElement(
            'div',
            null,
            '\u539F\u59CB\u6587\u672C\uFF1A\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14'
          ),
          _react2.default.createElement(
            'div',
            { style: { width: 200 } },
            _react2.default.createElement(
              _Ellipsis2.default,
              { lines: 3 },
              '\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14\u4EAE\u91D1\u5927\u6C14'
            )
          )
        )
      );
    }
  }]);

  return EllipsisElements;
}(_react.Component);

exports.default = EllipsisElements;
},{"react-router-dom":15,"react":11,"uiw":67,"../../../layouts/PageHeaderLayout":59,"../../../components/Ellipsis":87,"./index.less":86}]},{},[46])