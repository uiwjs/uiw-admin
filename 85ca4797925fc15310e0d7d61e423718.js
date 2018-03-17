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
})({175:[function(require,module,exports) {
module.exports = {
  "countdown": "_countdown_15nbx_1"
};
},{}],85:[function(require,module,exports) {
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fillZero = function fillZero(num) {
  return num < 10 ? '0' + num : num;
};

var hours = 60 * 60 * 1000;
var minutes = 60 * 1000;

var CountDown = function (_Component) {
  _inherits(CountDown, _Component);

  function CountDown(props) {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

    var current = Date.now();
    var target = _this.getValidDate(props.target);
    var timeleft = target - current;
    _this.state = {
      current: current,
      target: target,
      timeleft: timeleft
    };
    _this.interval = props.interval;
    return _this;
  }

  _createClass(CountDown, [{
    key: 'getValidDate',
    value: function getValidDate(param) {
      try {
        if (Object.prototype.toString.call(param) === '[object Date]') {
          return param.getTime();
        } else {
          var time = new Date(param).getTime();
          return time;
        }
      } catch (e) {
        throw new Error('invalid target prop', e);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.getValidDate(this.props.target) !== this.getValidDate(nextProps.target)) {
        this.clear();
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clear();
    }
  }, {
    key: 'tick',
    value: function tick() {
      var _this2 = this;

      this.timer = setInterval(function () {
        _this2.count();
      }, this.interval);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.timer && clearInterval(this.timer);
    }
  }, {
    key: 'count',
    value: function count() {
      var onEnd = this.props.onEnd;
      var timeleft = this.state.timeleft;

      if (timeleft > this.interval) {
        this.setState({ timeleft: timeleft - this.interval });
      } else {
        this.setState({ timeleft: 0 }, this.clear);
        onEnd && onEnd();
      }
    }
  }, {
    key: 'format',
    value: function format(timeleft) {
      var h = fillZero(Math.floor(timeleft / hours));
      var m = fillZero(Math.floor((timeleft - h * hours) / minutes));
      var s = fillZero(Math.floor((timeleft - h * hours - m * minutes) / 1000));
      return h + ':' + m + ':' + s;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          format = _props.format,
          className = _props.className;
      var timeleft = this.state.timeleft;

      var cls = (0, _classnames2.default)(_index2.default.countdown, _defineProperty({}, className, className));
      // 负数处理
      var _timeleft = timeleft > 0 ? timeleft : 0;

      return _react2.default.createElement(
        'span',
        { className: cls },
        format ? format(_timeleft) : this.format(_timeleft)
      );
    }
  }]);

  return CountDown;
}(_react.Component);

exports.default = CountDown;


CountDown.propTypes = {
  target: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.number, _propTypes2.default.string]),
  interval: _propTypes2.default.number
};

CountDown.defaultProps = {
  interval: 1000
};
},{"react":11,"classnames":66,"uiw":67,"prop-types":69,"./index.less":175}],44:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CountDown = require('../../../components/CountDown');

var _CountDown2 = _interopRequireDefault(_CountDown);

var _PageHeaderLayout = require('../../../layouts/PageHeaderLayout');

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = Date.now() + 26400000;

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u5012\u8BA1\u65F6', content: '\u5012\u8BA1\u65F6\u7EC4\u4EF6\u3002' },
    _react2.default.createElement(_CountDown2.default, {
      onEnd: function onEnd() {
        console.log('onEnd');
      },
      target: time,
      className: 'my-countdown'
    })
  );
};
},{"react":11,"../../../components/CountDown":85,"../../../layouts/PageHeaderLayout":59}]},{},[44])