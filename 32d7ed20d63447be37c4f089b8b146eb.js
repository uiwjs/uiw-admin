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
})({96:[function(require,module,exports) {
module.exports = {
  "wapper": "_wapper_13jec_1",
  "sider": "_sider_13jec_4",
  "logo": "_logo_13jec_38",
  "header": "_header_13jec_63",
  "headerLeft": "_headerLeft_13jec_70",
  "headerRight": "_headerRight_13jec_84",
  "item": "_item_13jec_87",
  "breadcrumb": "_breadcrumb_13jec_105",
  "content": "_content_13jec_117"
};
},{}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../routes/Exception/404');

var _2 = _interopRequireDefault(_);

var _uiw = require('uiw');

var _BasicLayout = require('./BasicLayout.less');

var _BasicLayout2 = _interopRequireDefault(_BasicLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomRouter = function (_Component) {
  _inherits(CustomRouter, _Component);

  function CustomRouter(props) {
    _classCallCheck(this, CustomRouter);

    // 把一级 Layout 的 children 作为菜单项
    var _this = _possibleConstructorReturn(this, (CustomRouter.__proto__ || Object.getPrototypeOf(CustomRouter)).call(this, props));

    _this.menus = props.navData.reduce(function (arr, current) {
      return arr.concat(current.children);
    }, []);
    _this.state = {};
    return _this;
  }

  _createClass(CustomRouter, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var location = this.props.location;

      return {
        location: location,
        breadcrumbNameMap: this.getBreadcrumbNameMap(),
        renderBreadcrumb: this.renderBreadcrumb()
      };
    }
  }, {
    key: 'getBreadcrumbNameMap',
    value: function getBreadcrumbNameMap() {
      var _props = this.props,
          navData = _props.navData,
          getRouteData = _props.getRouteData;

      var routeData = getRouteData('BasicLayout');
      var firstMenuData = navData.reduce(function (arr, current) {
        return arr.concat(current.children);
      }, []);
      var menuData = this.getMenuData(firstMenuData, '');
      var breadcrumbNameMap = {};
      routeData.concat(menuData).forEach(function (item) {
        breadcrumbNameMap[item.path] = item.name;
      });
      return breadcrumbNameMap;
    }
  }, {
    key: 'getMenuData',
    value: function getMenuData(data, parentPath) {
      var _this2 = this;

      var arr = [];
      data.forEach(function (item) {
        if (item.children) {
          arr.push({ path: parentPath + '/' + item.path, name: item.name });
          arr = arr.concat(_this2.getMenuData(item.children, parentPath + '/' + item.path));
        }
      });
      return arr;
    }
  }, {
    key: 'getNavMenuItems',
    value: function getNavMenuItems(menusData) {
      var _this3 = this;

      var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (!menusData) {
        return [];
      }
      return menusData.map(function (item, index) {
        if (!item.name) {
          return null;
        }
        var itemPath = void 0;
        if (item.path.indexOf('http') === 0) {
          itemPath = item.path;
        } else {
          itemPath = (parentPath + '/' + (item.path || '')).replace(/\/+/g, '/');
        }
        if (item.children && item.children.length && item.children.some(function (child) {
          return child.name;
        })) {
          return _react2.default.createElement(
            _uiw.Menu.SubMenu,
            {
              index: itemPath,
              title: item.icon ? _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement(_uiw.Icon, { type: item.icon }),
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  item.name
                ),
                ' '
              ) : item.name,
              key: itemPath
            },
            _this3.getNavMenuItems(item.children, itemPath)
          );
        }
        var icon = item.icon && _react2.default.createElement(_uiw.Icon, { type: item.icon });
        return _react2.default.createElement(
          _uiw.Menu.Item,
          { key: itemPath, index: itemPath },
          /^https?:\/\//.test(itemPath) ? _react2.default.createElement(
            'a',
            { href: itemPath, target: item.target },
            ' ',
            icon,
            _react2.default.createElement(
              'span',
              null,
              item.name
            ),
            ' '
          ) : _react2.default.createElement(
            _reactRouterDom.Link,
            { to: itemPath, target: item.target, replace: itemPath === _this3.props.location.pathname },
            icon,
            _react2.default.createElement(
              'span',
              null,
              item.name
            )
          )
        );
      });
    }
  }, {
    key: 'onClose',
    value: function onClose() {}
  }, {
    key: 'onSelect',
    value: function onSelect() {}
  }, {
    key: 'renderBreadcrumb',
    value: function renderBreadcrumb() {
      var _props2 = this.props,
          pathname = _props2.location.pathname,
          getRouteData = _props2.getRouteData;

      var breadcrumbNameMap = this.getBreadcrumbNameMap();
      var router = getRouteData('BasicLayout');
      var pathSnippets = pathname.split('/').filter(function (i) {
        return i;
      });
      var extraBreadcrumbItems = pathSnippets.map(function (item, index) {
        var url = '/' + pathSnippets.slice(0, index + 1).join('/');
        var component = router.filter(function (item) {
          return item.path === url;
        });
        return _react2.default.createElement(
          _uiw.Breadcrumb.Item,
          { key: url },
          url === pathname || component.length === 0 ? _react2.default.createElement(
            'span',
            null,
            breadcrumbNameMap[url]
          ) : _react2.default.createElement(
            _reactRouterDom.Link,
            { to: url },
            breadcrumbNameMap[url]
          )
        );
      });
      return _react2.default.createElement(
        _uiw.Breadcrumb,
        { className: _BasicLayout2.default.breadcrumb },
        _react2.default.createElement(
          _uiw.Breadcrumb.Item,
          null,
          extraBreadcrumbItems.length < 1 ? _react2.default.createElement(
            'span',
            null,
            '\u9996\u9875'
          ) : _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            '\u9996\u9875'
          )
        ),
        extraBreadcrumbItems
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var getRouteData = this.props.getRouteData;

      return _react2.default.createElement(
        'div',
        { className: _BasicLayout2.default.wapper },
        _react2.default.createElement(
          'div',
          { className: _BasicLayout2.default.sider },
          _react2.default.createElement(
            'div',
            { className: _BasicLayout2.default.logo },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              _react2.default.createElement(
                'svg',
                { viewBox: '0 0 256 256' },
                _react2.default.createElement('path', { d: 'M84.4999999,25 L133,60.1408731 L114.474648,117 L54.5253515,117 L36,60.1408731 L84.4999999,25 Z M84.4999999,231 L36,195.859127 L54.5253515,139 L114.474648,139 L133,195.859127 L84.4999999,231 Z M220,158.475503 L163.141427,177 L128,128.499472 L163.139977,80 L219.999104,98.5262065 L220,158.475503 Z' })
              ),
              _react2.default.createElement(
                'h1',
                null,
                'UIW React'
              )
            )
          ),
          _react2.default.createElement(
            _uiw.Menu,
            { onClose: this.onClose.bind(this), onSelect: this.onSelect.bind(this) },
            this.getNavMenuItems(this.menus)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _BasicLayout2.default.content },
          _react2.default.createElement(
            'div',
            { className: _BasicLayout2.default.header },
            _react2.default.createElement(
              'div',
              { className: _BasicLayout2.default.headerLeft },
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://github.com/uiw-react/uiw-admin' },
                _react2.default.createElement(_uiw.Icon, { type: 'github' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _BasicLayout2.default.headerRight },
              _react2.default.createElement(
                'div',
                { className: _BasicLayout2.default.item },
                _react2.default.createElement(_uiw.Icon, { type: 'lock' })
              ),
              _react2.default.createElement(
                'div',
                { className: _BasicLayout2.default.item },
                _react2.default.createElement(
                  _uiw.Badge,
                  { dot: true, count: 4 },
                  _react2.default.createElement(_uiw.Icon, { type: 'bell' })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            getRouteData('BasicLayout').map(function (item, index) {
              return _react2.default.createElement(_reactRouterDom.Route, { exact: item.exact, key: item.path, path: item.path, component: item.component });
            }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
          )
        )
      );
    }
  }]);

  return CustomRouter;
}(_react.Component);

exports.default = CustomRouter;


CustomRouter.childContextTypes = {
  location: _propTypes2.default.object,
  breadcrumbNameMap: _propTypes2.default.object,
  renderBreadcrumb: _propTypes2.default.node
};
},{"react-router-dom":15,"react":11,"prop-types":69,"../routes/Exception/404":26,"uiw":67,"./BasicLayout.less":96}]},{},[20])