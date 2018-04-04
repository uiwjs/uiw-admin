(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Applicator = (function () {
    function Applicator() {
    }
    return Applicator;
}());
exports.Applicator = Applicator;
//# sourceMappingURL=Applicator.js.map

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(120);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(115));
__export(__webpack_require__(311));
__export(__webpack_require__(309));
__export(__webpack_require__(307));
__export(__webpack_require__(114));
__export(__webpack_require__(288));
__export(__webpack_require__(287));
__export(__webpack_require__(107));
//# sourceMappingURL=utils.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(118),
    getRawTag = __webpack_require__(315),
    objectToString = __webpack_require__(314);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObject = __webpack_require__(23);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(62),
    isObject = __webpack_require__(23);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(38),
    overRest = __webpack_require__(248),
    setToString = __webpack_require__(105);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(261);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(267);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(279),
    getValue = __webpack_require__(275);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(51);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"miniChart":"miniChart1JeLS","chartContent":"chartContent1JeLS","chartLoading":"chartLoading1JeLS"};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function equal(old, target) {
  var r = true;
  for (var prop in old) {
    if (typeof old[prop] === 'function' && typeof target[prop] === 'function') {
      if (old[prop].toString() !== target[prop].toString) {
        r = false;
      }
    } else if (old[prop] !== target[prop]) {
      r = false;
    }
  }
  return r;
}

exports.default = equal;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(62),
    baseLodash = __webpack_require__(60);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),i=t[e[0]];return function(t,e,r){i.apply(this,[t,e,r].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){"use strict";var i={};i.Chart=n(302),i.Util=n(1),i.Global=n(4),i.Stat=n(15),i.Stat.map=n(231),i.Stat.tree=n(236),i.Stat.treemap=n(239),n(229),i.Scale=n(91),i.Shape=n(116),i.Frame=n(2),i.Theme=n(40),i.Canvas=n(5),i.Coord=n(82),i.Base=n(10),i.ColorCalculate=n(53),i.Layout=n(209),i.Animate=n(110),i.Plugin={};var r=n(108);r.tracking=!0,i.track=function(t){r.tracking=t},i.version="2.3.13",n(329),t.exports=i},function(t,e,n){var i=n(285);t.exports=i},function(t,e,n){var i=n(20);n(87),n(189),n(188),t.exports=i},function(t,e,n){var i={Matrix3:n(219),Vector2:n(220),Vector3:n(221)};t.exports=i},function(t,e,n){"use strict";function i(t){t=t||0,t=100*t;var e=2;return t>0&&t<.01&&(e=(1/t+"").indexOf(".")+1),t.toFixed(e)+"%"}function r(t){for(var e in c)c.hasOwnProperty(e)&&delete c[e];var n;n=s.isObject(t)?t:s.indexOf(u,t)!==-1?o[t]:o["default"],s.mix(!0,c,a,n),c.setTheme=r}var a,s=n(1),o=n(328),u=["default","dark","cheery"],c={};a={animate:!0,percentFormat:i,widthRatio:{column:.5,rose:.9999999,multiplePie:1/1.3},showSinglePoint:!1,scales:{"..x":{type:"linear",min:0,max:1,nice:!1},"..y":{type:"linear",min:0,max:1,nice:!1},"..level":{type:"linear",min:0,nice:!1},"..value":{type:"linear",min:0},"..count":{type:"linear",min:0,alias:"count"},"..percent":{type:"linear",min:0,max:1,alias:"percent",formatter:i},"..proportion":{type:"linear",min:0,max:1,alias:"proportion",formatter:i},"..density":{type:"linear",min:0,alias:"density"},"..long":{type:"linear",alias:"longitude",nice:!1},"..lant":{type:"linear",alias:"latitude",nice:!1},"..pieX":{type:"cat",values:["..pieX"],ticks:["..pieX"]}},connectNulls:!1,heatmapColors:"rgb(125,125,248)-rgb(0,0,255)-rgb(0,255,0)-yellow-rgb(255,0,0)",heatmap:{radius:50}},r("default"),t.exports=c},function(t,e,n){var i=n(157),r=n(66);i.G=r,i.Group=r.Group,i.Shape={},i.Shape.Marker=r.Marker,i.Util=n(81),i.Matrix=n(3),t.exports=i},function(t,e,n){var i=n(218);t.exports=i},function(t,e,n){var i=n(1),r=n(64),a=n(8),s=n(3).Vector3,o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={},i.extend(o,r),i.augment(o,{isShape:!0,createPath:function(){},drawInner:function(t){var e=this,n=e.__attrs;e.createPath(t);var r=t.globalAlpha;if(e.hasFill()){var a=n.fillOpacity;i.isNull(a)||1===a?t.fill():(t.globalAlpha=a,t.fill(),t.globalAlpha=r)}if(e.hasStroke()){var s=e.__attrs.lineWidth;if(s>0){var o=n.strokeOpacity;i.isNull(o)||1===o||(t.globalAlpha=o),t.stroke()}}},isPointInPath:function(){return!1},isHitBox:function(){return!0},isHit:function(t,e){var n=this,i=new s(t,e,1);if(n.invert(i),n.isHitBox()){var r=n.getBBox();if(r&&!a.box(r.minX,r.maxX,r.minY,r.maxY,i.x,i.y))return!1}var o=n.__attrs.clip;return o?!!o.inside(t,e)&&n.isPointInPath(i.x,i.y):n.isPointInPath(i.x,i.y)},calculateBox:function(){return null},clearTotalMatrix:function(){this.__cfg.totalMatrix=null,this.__cfg.region=null},clearBBox:function(){this.__cfg.box=null,this.__cfg.region=null},getBBox:function(){var t=this.__cfg.box;return t||(t=this.calculateBox(),t&&(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY),this.__cfg.box=t),t}}),t.exports=o},function(t,e,n){var i=n(43),r=n(44),a=n(32),s=n(42);t.exports={line:function(t,e,n,r,a,s,o){var u=i.box(t,e,n,r,a);if(!this.box(u.minX,u.maxX,u.minY,u.maxY,s,o))return!1;var c=i.pointDistance(t,e,n,r,s,o);return!isNaN(c)&&c<=a/2},polyline:function(t,e,n,i){var r=t.length-1;if(r<1)return!1;for(var a=0;a<r;a++){var s=t[a][0],o=t[a][1],u=t[a+1][0],c=t[a+1][1];if(this.line(s,o,u,c,e,n,i))return!0}return!1},cubicline:function(t,e,n,i,r,s,o,u,c,l,h){return a.pointDistance(t,e,n,i,r,s,o,u,l,h)<=c/2},quadraticline:function(t,e,n,i,a,s,o,u,c){return r.pointDistance(t,e,n,i,a,s,u,c)<=o/2},arcline:function(t,e,n,i,r,a,o,u,c){return s.pointDistance(t,e,n,i,r,a,u,c)<=o/2},rect:function(t,e,n,i,r,a){return t<=r&&r<=t+n&&e<=a&&a<=e+i},circle:function(t,e,n,i,r){return Math.pow(i-t,2)+Math.pow(r-e,2)<=Math.pow(n,2)},box:function(t,e,n,i,r,a){return t<=r&&r<=e&&n<=a&&a<=i}}},function(t,e,n){"use strict";var i=n(29),r=n(1),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{type:"summary",getStatDims:function(){var t=this,e=t.getDims(),n=e.length,i=[e[n-1]];return i},getGroupCondition:function(){var t,e=this,n=e.getDims(),i=n.length,a=[];return i>1&&(a=n.slice(0,i-1),t=[]),r.each(a,function(e){0!==e.indexOf("..")&&t.push(e)}),t},groupFrames:function(t){var e,n=this,i=n.getGroupCondition();return e=i?a.group(t,i):[t]},transformGroup:function(t,e){var n=this,i=[];return r.each(t,function(t){i.push(n.transform(t,e))}),i},execFrame:function(t){var e=this,n=e.getStatDims()[0],i=e.groupFrames(t),r=e.transformGroup(i,n),s=a.merge.apply(null,r);return s},transform:function(t){return t}}),t.exports=s},function(t,e,n){var i=n(145);t.exports=i},function(t,e,n){"use strict";var i=n(1),r=["min","max"],a=function(t){i.mix(this,t)};i.augment(a,{xScale:null,yScale:null,cfg:{},parsePoint:function(t,e){var n=this,a=n.xScale,s=n.yScale;i.isFunction(e)&&(e=e(a,s));var o=e[0],u=e[1];return a&&(o=i.indexOf(r,o)!==-1?a.scale(a[o]):a.scale(o)),s&&(u=i.indexOf(r,u)!==-1?s.scale(s[u]):s.scale(u)),t.convert({x:o,y:u})},paint:function(){}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(51),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{regressionType:"base",isRegression:!0,getRegressionString:function(){return""},execSmooth:function(t){return t}}),t.exports=a},function(t,e,n){"use strict";var i=n(94),r=n(17),a=n(1);a.mix(i.GeomShape,{getMarkerCfg:function(t,e){var n=this.getShape(t);return n.getMarkerCfg(e)},drawShape:function(t,e,n){var i=this.getShape(t),r=i.drawShape(e,n);return r&&(r.set("origin",e.origin),r.animateType=r.animateType?r.animateType:e.geomType,r.id=e.id,e.splitedIndex&&(r.id+="splI"+e.splitedIndex)),r},getActiveCfg:function(t,e){var n=this.getShape(t);return n.getActiveCfg(e)},getSelectedCfg:function(t,e){var n=this.getShape(t);return n.getSelectedCfg(e)}}),a.mix(i.ShapeBase,{getActiveCfg:function(){return{}},getSelectedCfg:function(){return{}},setCoord:function(t){this._coord=t},parsePath:function(t,e){var n=this._coord;return t=a.parsePathString(t),t=n.isPolar&&e!==!1?r.convertPolarPath(t,n):r.convertNormalPath(t,n)},parsePoint:function(t){var e=this._coord;return e.convertPoint(t)},parsePoints:function(t){if(!t)return!1;var e=this._coord,n=[];return a.each(t,function(t){n.push(e.convertPoint(t))}),n}}),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(10),a=n(5).Matrix,s=a.Matrix3,o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={easing:"easeInOutQuad",duration:1e3,callback:null,group:null,rect:null,before:null},i.extend(o,r),i.augment(o,{start:function(){return this.startAnimate(),this},startAnimate:function(){var t=this.getTarget(),e=this.get("group");this.set("originMatrix",e.getMatrix().clone()),this.set("rect",this.getAnimRect()),this.set("target",t),this.beforeAnimate(t),this.execAnimate(t)},beforeAnimate:function(t){var e=this.getInitMatrix(),n=this.getInitAttrs(),i=this.get("originMatrix");e=s.multiply(i,e),t.setMatrix(e),t.attr(n)},execAnimate:function(t){var e,n=this,r=n.get("before"),a=n.get("callback"),o=n.get("duration"),u=n.get("easing"),c=n.getEndAttrs(),l=n.get("originMatrix"),h=n.getEndMatrix();h=s.multiply(l,h),e=i.mix({},c,{matrix:h}),t.animate(e,o,u,function(){a&&a(),n.afterAnimate(t)}),r&&r()},afterAnimate:function(t){var e=this.get("group"),n=e.get("canvas");return e==t||(e.attr("clip",!1),void n.draw())},getTarget:function(){return this.get("group")},getInitMatrix:function(){return new s},getInitAttrs:function(){return{}},getEndMatrix:function(){return new s},getEndAttrs:function(){return{}},getAnimRect:function(){var t=this.get("rect"),e=this.get("group");return t||(t=e.getBBBox()),t},getCircleInfo:function(){var t=this.get("rect"),e=this.get("circle"),n=this.getRectCenter(t),i=Math.min(t.width,t.height)/2;return e||(e={center:n,r:i}),e},getRectCenter:function(t){return{x:t.x+t.width/2,y:t.y+t.height/2}},stop:function(){return this.stopAnimate(),this},stopAnimate:function(){var t=this.getTarget();t&&t.stopAnimate()}}),t.exports=o},function(t,e,n){var i=n(29);i.summary=n(267),i.bin=n(243),i.smooth=n(257),i.density=n(247),i.region=n(250);var r=n(2);r.execStat=function(t,e){e.init();var n=e.exec([t]);return r.merge.apply(null,n)},t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(10),a=n(86),s=n(94),o=n(289),u="_origin",c=function(t){c.superclass.constructor.call(this,t)};c.ATTRS={id:"",type:null,container:null,attrs:null,shapeObj:null,createTime:null,styleCfg:{},shapeDatas:[]},i.extend(c,r),i.mixin(c,[o]),i.augment(c,{_mapping:function(t){var e=this,n=t.toJSON(),r=e.get("attrs"),s=[];return i.each(n,function(t){var n={};n[u]=t[u],n.points=t.points,n.nextPoints=t.nextPoints,i.each(r,function(r){var a=r.names,s=e._getAttrValues(r,t);i.each(s,function(t,e){var r=a[e];n[r]=i.isArray(t)&&1===t.length?t[0]:t})}),s.push(n)}),new a(s)},_processShapePoints:function(t){var e,n,r=this,o=r.get("shapeType")||r.get("type"),u=s.getShape(o),c=[];return u._coord=r.getCoord(),i.each(t,function(t){var e=[];t.each(function(t){var n=r.getAttrValue("shape",t),i=r.getShapePointInfo(t),a=u.getShapePoints(n,i);t.points=a,e.push(t)}),e=new a(e),c.push(e)}),i.each(c,function(t,i){e=c[i+1],n=e?e.colArray("points")[0]:null,t.addCol("nextPoints",function(){return n})}),r.set("shapeObj",u),c},_getAttrValues:function(t,e){var n=t.scales,r=[];i.each(n,function(t){var n=t.dim;"identity"===t.type?r.push(t.value):r.push(e[n])});var a=t.mappingValues.apply(t,r);return a},draw:function(t){var e=this,n=[];return t=e.sortFrames(t),t=e.processFrames(t),t=e._processShapePoints(t),i.each(t,function(t,i){t=e.beforeMapping(t),t=e._mapping(t),t.rowCount()&&e.drawFrame(t,i),n.push(t)}),n},sortFrames:function(t){var e=this.getXScale();return i.indexOf(["time","timeCat"],e.type)>-1?this.sort(t):t},processFrames:function(t){return t},beforeMapping:function(t){return t},isInCircle:function(){return this.getCoord().isPolar},getShapePointInfo:function(t){var e,n,i=this.getXScale(),r=this.getYScale();return e=i?this._normalizeValues(t[i.dim],i):t.x?t.x:.1,n=r?this._normalizeValues(t[r.dim],r):t.y?t.y:.1,{x:e,y:n,y0:r?r.scale(this.getYMinValue()):void 0,size:this.getSize(t)}},_normalizeValues:function(t,e){var n=[];return i.isArray(t)?i.each(t,function(t){n.push(e.scale(t))}):n=e.scale(t),n},getDefalutSize:function(){return.1},_getSize:function(t){var e,n=this.getCoord();return e=this.isInCircle()&&!n.isTransposed?(n.get("endAngle")-n.get("startAngle"))*n.get("radius"):this.getDimWidth("x"),t/e},getDimWidth:function(t){var e=this,n=e.getCoord(),i=n.convertPoint({x:0,y:0}),r=n.convertPoint({x:"x"===t?1:0,y:"x"===t?0:1}),a=0;return i&&r&&(a=Math.sqrt(Math.pow(r.x-i.x,2)+Math.pow(r.y-i.y,2))),a},getSize:function(t){var e=this.getAttrValue("size",t);return e=i.isNull(e)?this.getDefalutSize():this._getSize(e)},drawFrame:function(t){var e,n,r,a=this,s=t.toJSON(),o=a.get("container"),u=a.get("shapeObj"),c=a.getYDim(),l=a.get("shapeDatas");i.each(s,function(t,s){l.push(t),c&&i.isNull(t._origin[c])||(t.index=s,e=a.getDrawCfg(t),n=a.getDrawShape(t.shape),r=u.drawShape(n,e,o),a.afterDraw(r,t))})},afterDraw:function(){},getDrawShape:function(t){return i.isArray(t)?t[0]:t},getDrawCfg:function(t){var e=this.get("styleCfg"),n=this.isInCircle(),i=t._origin,r={points:t.points,nextPoints:t.nextPoints,color:t.color,isInCircle:n,style:e,size:t.size,shape:t.shape,opacity:t.opacity,x:t.x,y:t.y,origin:t,id:this._getId(i),geomType:this.get("type")};return n&&(r.center=this.getCoord().get("center")),r},_getId:function(t){var e=this.get("idDims"),n=this.get("id"),i=n;if(e&&e.length>0)e.forEach(function(e){i+=" "+t[e]});else{var r=this.get("groupScales");r&&r.length>0&&r.forEach(function(e){var n=e.dim;"identity"!==e.type&&".."!==n.slice(0,2)&&(i+=" "+t[n])});var a=this.getAttr("position"),s=a.getDims(),o=s[0],u=s[1],c=this.get("type");i+="interval"===c||"intervalStack"===c||"schemal"===c?" "+t[o]:"line"===c||"area"===c?" "+c:" "+t[o]+" "+t[u]+" "+c}return i},getYMinValue:function(){var t,e=this.getYScale(),n=e.min;return t=n>=0?n:0},getAttrValue:function(t,e){var n=this.getAttr(t),i=null;return n&&(i=this._getAttrValues(n,e)[0]),i},getAttr:function(t){var e=this.get("attrs"),n=null;return i.each(e,function(e){e.type===t&&(n=e)}),n},getCoord:function(){return this.getAttr("position").coord},getXDim:function(){var t=this.getXScale();return t.dim},getYDim:function(){var t=this.getYScale();return t?t.dim:null},getXScale:function(){return this.getAttr("position").scales[0]},getYScale:function(){return this.getAttr("position").scales[1]}}),t.exports=c},function(t,e,n){"use strict";function i(t,e,n){if(!t.length)return"";var i="",r="";t.length<=2&&(n=!1);for(var a=0,s=t.length;a<s;a++){var o=t[a];r=0===a?n?"M{x} {y} R":"M{x} {y}":n?" {x} {y}":"L{x} {y}",i+=u.substitute(r,o)}return e&&(i+="Z"),i}function r(t,e){var n=t.getCenter(),i=Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2));return i}function a(t,e){for(var n=t.length,i=[t[0]],r=1;r<n;r+=2){var a=e.convertPoint({x:t[r],y:t[r+1]});i.push(a.x,a.y)}return i}function s(t,e,n){var i=n.getRadius(),a=n.get("inner")||0,s=a*i,o=n.isTransposed,u=n.get("startAngle"),c=n.get("endAngle"),l={x:t[1],y:t[2]},h={x:e[1],y:e[2]},f=[];s=s||0;var g=o?"y":"x",p=Math.abs(h[g]-l[g])*(c-u),d=h[g]>=l[g]?1:0,v=p>Math.PI?1:0,m=n.convertPoint(h),x=r(n,m);if(x>=.5)if(p===2*Math.PI){var y={x:(h.x+l.x)/2,y:(h.y+l.y)/2},_=n.convertPoint(y);f.push(["A",x,x,0,v,d,_.x,_.y]),f.push(["A",x,x,0,v,d,m.x,m.y])}else f.push(["A",x,x,0,v,d,m.x,m.y]);return f}function o(t){u.each(t,function(e,n){var i=e;if("a"===i[0].toLowerCase()){var r=t[n-1],a=t[n+1];a&&"a"===a[0].toLowerCase()?r&&"l"===r[0].toLowerCase()&&(r[0]="M"):r&&"a"===r[0].toLowerCase()&&a&&"l"===a[0].toLowerCase()&&(a[0]="M")}})}var u=n(1),c=n(227),l={getLinePath:function(t,e,n){return i(t,e,n)},getSplinePath:function(t,e){var n=[],i=t[0],r=null;u.each(t,function(t){r&&r.x===t.x&&r.y===t.y||(n.push(t.x),n.push(t.y),r=t)});var a=[[0,0],[1,1]],s=c.catmullRom2bezier(n,e,a);return"M"+i.x+" "+i.y+u.parsePathArray(s)},getPointRadius:function(t,e){var n=r(t,e);return n},getPointAngle:function(t,e){var n=t.getCenter(),i=Math.atan2(e.y-n.y,e.x-n.x);return i},convertNormalPath:function(t,e){var n=[];return u.each(t,function(t){var i=t[0];switch(i.toLowerCase()){case"m":case"l":case"c":n.push(a(t,e));break;case"z":default:n.push(t)}}),n},convertPolarPath:function(t,e){var n=[];return u.each(t,function(i,r){var o=i[0];switch(o.toLowerCase()){case"m":case"c":case"q":n.push(a(i,e));break;case"l":var u=t[r-1],c=i,l=e.isTransposed,h=l?u[u.length-2]===c[1]:u[u.length-1]===c[2];h?n=n.concat(s(u,c,e)):n.push(a(i,e));break;case"z":default:n.push(i)}}),o(n),n}};t.exports=l},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t)};r.prototype={type:"base",names:null,scales:[],min:0,max:10,method:function(t){return t*(this.max-this.min)+this.min},callback:function(){var t,e,n,r=this,a=r.arr,s=r.scales,o=i.toArray(arguments),u=[];return i.each(s,function(s,c){t=o[c],n=s.scale(t),e=s.translate(t),"identity"===s.type?u.push(s.value):i.isArray(a)?u.push(r._getArrValue(a,s,n,e)):r.method?u.push(r.method(n)):u.push(null)}),u},getNames:function(){var t=this.scales,e=this.names,n=[];return i.each(t,function(t,i){n.push(e[i])}),n},getDims:function(){var t=this.scales,e=[];return i.each(t,function(t){e.push(t.dim)}),e},getScale:function(t){var e=this.scales,n=this.names,i=n.indexOf(t);return e[i]},mappingValues:function(){var t=this.scales,e=i.toArray(arguments),n=this.callback,r=e;if(n){for(var a=0;a<e.length;a++)e[a]=this.parseParam(e[a],t[a]);r=n.apply(this,e)}return this.names&&1===this.names.length&&(r=[r]),r},parseParam:function(t,e){var n=t;return e.isLinear||(n=e.scale(t),n=e.invert(n)),n},_getArrValue:function(t,e,n,i){var r=0;return e.isCategory?r=i:e.isLinear&&(r=parseInt(n*(t.length-1),10)),t[r%t.length]}},t.exports=r},function(t,e,n){function i(t,e,n){var i=new o(1,0).angleTo(t),r=i-u,a=i+u,s=6+3*n;return[{x:e.x-s*Math.cos(r),y:e.y-s*Math.sin(r)},e,{x:e.x-s*Math.cos(a),y:e.y-s*Math.sin(a)}]}function r(t,e){t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),t.lineTo(e[2].x,e[2].y)}function a(t,e,n,a){r(t,i(e,n,a))}function s(t,e,n){var i=n/Math.sin(u);return t.setLength(i/2),e.sub(t),e}var o=n(3).Vector2,u=Math.PI/6;t.exports={makeArrow:a,getEndPoint:s}},function(t,e,n){var i=n(1),r=function(t,e){this.data=t,i.mix(this,e),this.initFrame()};r.prototype={isFrame:!0,initFrame:function(){var t=this,e=t.data,n=t.colNames(),r=t.arr;if(i.isArray(e[0])&&(r=t.arr=e),!r){r=[];for(var a=0;a<n.length;a++){for(var s=[],o=n[a],u=0;u<e.length;u++)s.push(e[u][o]);r.push(s)}t.arr=r}},contains:function(t){var e=this.colNames();return i.indexOf(e,t)!==-1},colNames:function(){var t=this,e=t.names;if(!e){var n=this.data,r=n[0];e=[],r&&i.each(r,function(t,n){e.push(n)}),t.names=e}return e},rowCount:function(){var t=this,e=t.arr;return e&&e.length?e[0].length:0},colCount:function(){var t=this,e=t.colNames();return e?e.length:0},colIndex:function(t){return i.indexOf(this.names,t)},colArray:function(t){var e=t;return i.isString(t)&&(e=this.colIndex(t)),this.arr[e]},colReplace:function(t,e){var n=this.arr,r=this.colNames();if(i.isString(t)){var a=t;t=i.indexOf(r,a)}return n[t]=e,this},each:function(t){for(var e=this,n=e.rowCount(),i=0;i<n;i++){var r=e._getObject(i);t(r,i)}return e},rowObject:function(t){return this._getObject(t)},_getObject:function(t,e){var n=this,i=n.arr,r={};e=e||n.colNames();for(var a=0;a<e.length;a++)r[e[a]]=i[a][t];return r},addCol:function(t,e){var n=this;if(i.isFunction(e)){var r=e;e=[],n.each(function(t,n){var i=r(t,n);e.push(i)})}n.names.push(t),n.arr.push(e)},toArray:function(){return this.arr},toJSON:function(){for(var t=this,e=t.rowCount(),n=[],i=0;i<e;i++)n.push(t._getObject(i));return n}},t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(256),a={getRegressionString:function(){return this.regressionStr},getRegression:function(){return{equation:[],string:""}},execSmooth:function(t,e){var n=this,a=n.getRegression(t),s=a.equation;this.regressionStr=a.string;var o=[];return i.each(e,function(t){var e=t,i=r.execFnction(n.regressionType,s,e);o.push([e,i])}),o}};t.exports=a},function(t,e,n){var i={};i.Base=n(16),i.Interval=n(287),i.Point=n(290),i.Line=n(288),i.Polygon=n(291),i.Schema=n(292),i.Path=n(107),i.Area=n(286),t.exports=i},function(t,e,n){t.exports=n(332)},function(t,e,n){"use strict";var i=n(1),r=n(2),a=0,s=function(t){i.mix(this,t)};i.augment(s,{xDim:null,yDim:null,adjustNames:["x","y"],groupDims:null,isAdjust:function(t){return i.inArray(this.adjustNames,t)},processAdjust:function(t){var e=this,n=r.merge.apply(null,t);return e.adjFrames=t,e.mergeFrame=n,t=e.adjustFrames(t,n),e.adjFrames=null,e.mergeFrame=null,t},_getDimValues:function(t){var e=this,n={},s=[];if(e.xDim&&e.isAdjust("x")&&s.push(e.xDim),e.yDim&&e.isAdjust("y")&&s.push(e.yDim),i.each(s,function(e){var i=r.values(t,e);i.sort(function(t,e){return t-e}),n[e]=i}),!e.yDim&&e.isAdjust("y")){var o="y",u=[a,1];n[o]=u}return n},adjustFrames:function(t,e){var n=this,a=[],s=n._getDimValues(e);return i.each(t,function(e,o){var u=e.toJSON();i.each(s,function(e,i){n.adjustDim(i,e,u,t.length,o)}),a.push(new r(u))}),a},adjustDim:function(t,e,n){return new r(n)},getAdjustRange:function(t,e,n){var r,a,s=this,o=i.indexOf(n,e),u=n.length;return!s.yDim&&s.isAdjust("y")?(r=0,a=1):u>1?(r=0===o?n[0]:n[o-1],a=o===u-1?n[u-1]:n[o+1],0!==o?r+=(e-r)/2:r-=(a-e)/2,o!==u-1?a-=(a-e)/2:a+=(e-n[u-2])/2):(r=0===e?0:e-.5,a=0===e?1:e+.5),{pre:r,next:a}},groupData:function(t,e){var n={};return i.each(t,function(t){var i=t[e];void 0===i&&(i=t[e]=a),n[i]||(n[i]=[]),n[i].push(t)}),n}}),t.exports=s},function(t,e,n){"use strict";var i={Axis:n(149),Plot:{Back:n(155),Range:n(61)},Labels:n(58),Tooltip:n(156),Legend:n(154),Range:n(62)};t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(3),a=r.Matrix3,s=r.Vector3,o=function(t){this._attrs={},this._attrs.matrix=new a,i.mix(this._attrs,o.ATTRS,t),this.init()};i.augment(o,{isTransposed:!1,set:function(t,e){return this._attrs[t]=e,this},get:function(t){return this._attrs[t]},getDim:function(t){switch(t){case"x":return this.get("x");case"y":return this.get("y");case"z":return this.get("z");default:console.error("\u6ca1\u6709"+t+"\u4ee3\u8868\u7684\u7ef4\u5ea6!")}},init:function(){var t=this,e=t.get("start"),n=t.get("end"),i={x:(e.x+n.x)/2,y:(e.y+n.y)/2};t.set("center",i),t.set("width",Math.abs(n.x-e.x)),t.set("height",Math.abs(n.y-e.y))},getWidth:function(){return this.get("width")},getHeight:function(){return this.get("height")},convertDim:function(t,e){var n=this;return e=n.get(e),e.start+t*(e.end-e.start)},invertDim:function(t,e){var n=this;return e=n.get(e),(t-e.start)/(e.end-e.start)},rotate:function(t){var e=this,n=e.get("matrix"),i=e.get("center");return n.translate(-i.x,-i.y),n.rotate(t),n.translate(i.x,i.y),this},reflect:function(t){var e=this;switch(t){case"x":e._swapDim("x");break;case"y":e._swapDim("y");break;default:e._swapDim("y")}return this},_swapDim:function(t){var e=this,n=e.get(t);if(n){var i=n.start;n.start=n.end,n.end=i}},scale:function(t,e){var n=this,i=n.get("matrix"),r=n.get("center");return i.translate(-r.x,-r.y),i.scale(t,e),i.translate(r.x,r.y),this},translate:function(t,e){var n=this,i=n.get("matrix");return i.translate(t,e),this},transpose:function(){this.isTransposed=!this.isTransposed},convertPoint:function(t){return t},invertPoint:function(t){return t},convert:function(t){var e=this;t=this.convertPoint(t);var n=e.trans(t.x,t.y,1);return{x:n.x,y:n.y}},invert:function(t){var e=this,n=e.reverse(t.x,t.y,1);return this.invertPoint({x:n.x,y:n.y})},trans:function(t,e,n){n=n||0;var i=this,r=i.get("matrix"),a=new s(t,e,n);return a.applyMatrix(r),a},reverse:function(t,e,n){n=n||0;var i=this,r=i.get("matrix"),a=r.getInverse(),o=new s(t,e,n);return o.applyMatrix(a),o}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t)};i.augment(r,{xValue:null,yValue:null,region:null,frame:null}),t.exports=r},function(t,e,n){"use strict";var i=n(15),r=n(1),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{type:"map",mapData:{},initDims:function(t){var e=t[0],n=t.slice(1);t=n.concat([e]),t.unshift("..lant"),t.unshift("..long"),this.dims=t},getStatDims:function(){var t=this.getDims(),e=t.filter(function(t){return t.indexOf("..")>-1});return e},execFrame:function(t){var e=this,n=e.getStatDims(),i=[];return t=t.toJSON(),r.each(t,function(t){i.push(e.addGeoInfo(t,n))}),new a(i)},addGeoInfo:function(t){return t}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t)};i.augment(r,{isStat:!0,initDims:function(){},getDims:function(){return this.dims},getStatDims:function(){return this.getDims()},init:function(){var t=this,e=t.dims;if(i.isString(e)&&(e=e.split("*"),t.dims=e),e&&e.isStat){var n=e;n.init(),t.stat=n,e=n.dims,t.dims=e}e||(e=[],t.dims=e),t.initDims(e)},preExecute:function(){},exec:function(t){var e=this;e.preExecute(t);var n=[];return this.stat&&(t=this.stat.exec(t)),i.each(t,function(r){var a=e.execFrame(r,t);i.isArray(a)?n=n.concat(a):n.push(a)}),n},execFrame:function(t){return t}}),t.exports=r},function(t,e,n){var i={caculate:n(143),Time:{caculate:n(144)},Category:{caculate:n(142)}};t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(58),a=n(5).Group,s=r.ShowLabels,o="x-chart-axis",u=n(147),c=function(t){c.superclass.constructor.call(this,t)};c.CFG={zIndex:4,ticks:null,line:null,tickLine:null,subTick:null,grid:null,labels:{label:{},autoRotate:!0},title:{},autoPaint:!0,labelOffset:10,titleOffset:20,formatter:null,firstTick:!0},i.mixin(c,[s]),i.extend(c,a),i.augment(c,{_renderUI:function(){var t=this.get("labels");t&&this.renderLabels(),this.get("autoPaint")&&this.paint(),i.isNull(this.get("title"))||this.renderTitle(),this.sort()},_parseTicks:function(t){t=t||[];for(var e=t.length,n=0;n<e;n++){var r=t[n];i.isObject(r)||(t[n]=this.parseTick(r,n,e))}return this.set("ticks",t),t},_addTickItem:function(t,e,n){var i=this.get("tickItems"),r={x1:e.x,y1:e.y},a=this.getTickEnd(e,n,t);r.x2=a.x,r.y2=a.y,i||(i=[],this.set("tickItems",i)),i.push(r)},_formatPoint:function(t){var e=this.get("formatter");return e&&(t=e.call(this,t)),t},_renderLines:function(){var t,e=this.get("line"),n=this.get("id");if(e){t=this.getLinePath(),e=i.mix({path:t},e);var r=this.addShape("path",{elCls:o+"-line",attrs:e});r.id=n+"axisLine",r.animateType="axisLine",this.set("lineShape",r)}},_processTicks:function(){var t=this,e=t.get("labels"),n=t.get("subTick"),r=t.get("tickLine"),a=t.get("ticks");a=t._parseTicks(a),i.each(a,function(n,i){var a=t.getTickPoint(n.value,i);r&&t._addTickItem(i,a),e&&t.addLabel(t._formatPoint(n.text),a,i,n.value)}),n&&i.each(a,function(e,i){var s=i?e.value-a[i-1].value:e.value;s/=t.get("subTick");for(var o=1;o<n;o++){var u={text:"",value:i?a[i-1].value+o*s:o*s};if(r){var c=t.getTickPoint(u.value),l=parseInt(.6*r.value,10);t._addTickItem(o-1,c,l)}}})},_renderTicks:function(){var t=this,e=t.get("tickItems"),n=t.get("tickLine"),r=t.get("id"),a="",s=i.mix({},n);if(e){i.each(e,function(t){var e=i.substitute("M{x1} {y1}L{x2} {y2}",t);a+=e}),delete s.value,s.path=a;var u=t.addShape("path",{elCls:o+"-ticks",attrs:s});u.id=r+"axisTick",u.animateType="axisTick",t.set("tickShape",u)}},_renderGrid:function(){var t=this.get("grid");if(t){i.isNull(t.animate)&&(t.animate=this.get("animate")),this.get("start")&&(t.start=this.get("start"));var e=this.addGroup(u,t);this.set("gridGroup",e)}},paint:function(){this._renderLines(),this._processTicks(),this._renderTicks(),this._renderGrid();var t=this.get("labels");t&&t.autoRotate&&this.autoRotateLabels()},parseTick:function(t,e,n){return{text:t,value:e/(n-1)}},getTextAnchor:function(t){var e,n=Math.abs(t.y/t.x);return e=n>=1?"center":t.x>0?"left":"right"},addLabel:function(t,e,n,i){var r,a=this.get("id")+"label"+i,s=this.get("labelsGroup"),o={};if(s){var u=this.get("labelOffset")||10,c=this.getSideVector(u,e,n);e={x:e.x+c.x,y:e.y+c.y},o.text=t,o.x=e.x,o.y=e.y,o.textAlign=this.getTextAnchor(c),o.id=a?a:t,r=s.addLabel(o)}return r},getMaxLabelWidth:function(t){var e=t.get("children"),n=0;return i.each(e,function(t){var e=t.getBBox(),i=e.width;n<i&&(n=i)}),n},remove:function(){c.superclass.remove.call(this);var t=this.get("gridGroup");t&&t.remove(),this.removeLabels()},autoRotateLabels:function(){},renderTitle:function(){},getLinePath:function(){},getTickPoint:function(){},getTickEnd:function(){},getSideVector:function(){}}),t.exports=c},function(t,e,n){function i(t,e,n,i,r){var a=1-r;return a*a*(a*i+3*r*n)+r*r*(r*t+3*a*e)}function r(t,e,n,i,r){var a=1-r;return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)}function a(t,e,n,r,a,s,o,u,l,h,f){var g,p,d,v,m,x,y,_,S=.005,b=1/0,w=1e-4,M=new c(l,h);for(p=0;p<1;p+=.05)d=new c(i(t,n,a,o,p),i(e,r,s,u,p)),v=d.distanceToSquared(M),v<b&&(g=p,b=v);b=1/0;for(var A=0;A<32&&!(S<w);A++)y=g-S,_=g+S,d=new c(i(t,n,a,o,y),i(e,r,s,u,y)),v=d.distanceToSquared(M),y>=0&&v<b?(g=y,b=v):(x=new c(i(t,n,a,o,_),i(e,r,s,u,_)),m=x.distanceToSquared(M),_<=1&&m<b?(g=_,b=m):S*=.5);return f&&(f.x=i(t,n,a,o,g),f.y=i(e,r,s,u,g)),Math.sqrt(b)}function s(t,e,n,i){var r,a,s,o=3*t-9*e+9*n-3*i,u=6*e-12*n+6*i,c=3*n-3*i,h=[];if(l.equal(o,0))l.equal(u,0)||(r=-c/u,r>=0&&r<=1&&h.push(r));else{var f=u*u-4*o*c;l.equal(f,0)?h.push(-u/(2*o)):f>0&&(s=Math.sqrt(f),r=(-u+s)/(2*o),a=(-u-s)/(2*o),r>=0&&r<=1&&h.push(r),a>=0&&a<=1&&h.push(a))}return h}function o(t,e,n,i,r){var a=-3*e+9*n-9*i+3*r,s=t*a+6*e-12*n+6*i;return t*s-3*e+3*n}function u(t,e,n,i,r,a,s,u,c){h.isNull(c)&&(c=1),c=c>1?1:c<0?0:c;for(var l=c/2,f=12,g=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,v=0;v<f;v++){var m=l*g[v]+l,x=o(m,t,n,r,s),y=o(m,e,i,a,u),_=x*x+y*y;d+=p[v]*Math.sqrt(_)}return l*d}var c=n(3).Vector2,l=n(6),h=n(1);t.exports={at:i,derivativeAt:r,projectPoint:function(t,e,n,i,r,s,o,u,c,l){var h={};return a(t,e,n,i,r,s,o,u,c,l,h),h},pointDistance:a,extrema:s,len:u}},function(t,e,n){t.exports=n(170)},function(t,e,n){"use strict";var i=n(1),r=n(26),a=n(3),s=n(6),o=a.Vector2,u=a.Matrix3,c=a.Vector3,l=function(t){var e={};i.mix(e,l.ATTRS,t),l.superclass.constructor.call(this,e),this._init()};l.ATTRS={startAngle:-Math.PI/2,endAngle:3*Math.PI/2,inner:.5},i.extend(l,r),i.augment(l,{type:"plus",isPolar:!0,_init:function(){var t,e,n=this,i=n.get("radius"),r=n.get("inner"),a=n.get("startAngle"),s=n.get("endAngle"),o=n.get("center"),u=n.getOneBox(),c=u.maxX-u.minX,l=u.maxY-u.minY,h=Math.abs(u.minX)/c,f=Math.abs(u.minY)/l,g=n.getWidth(),p=n.getHeight();p/l>g/c?(t=g/c,e={x:o.x-(.5-h)*g,y:o.y-(.5-f)*t*l}):(t=p/l,e={x:o.x-(.5-h)*t*c,y:o.y-(.5-f)*p}),i=i?i>0&&i<=1?t*i:i>0&&i<=t?i:t:t;var d={start:a,end:s},v={start:r*i,end:i};n.set("x",d),n.set("y",v),n.set("radius",i),n.set("circleCentre",e),n.set("center",e)},getCenter:function(){return this.get("circleCentre")},getOneBox:function(){var t=this,e=t.get("startAngle"),n=t.get("endAngle");if(n-e>=2*Math.PI)return{minX:-1,maxX:1,minY:-1,maxY:1};for(var i=[0,Math.cos(e),Math.cos(n)],r=[0,Math.sin(e),Math.sin(n)],a=5*-Math.PI/2;a<3*Math.PI/2;a+=Math.PI/2)e<=a&&a<=n&&(i.push(Math.cos(a)),r.push(Math.sin(a)));return{minX:Math.min.apply(Math,i),maxX:Math.max.apply(Math,i),minY:Math.min.apply(Math,r),maxY:Math.max.apply(Math,r)}},getRadius:function(){return this.get("radius")},convertPoint:function(t){var e=this,n=e.getCenter(),i=e.isTransposed?t.y:t.x,r=e.isTransposed?t.x:t.y;return i=e.convertDim(i,"x"),r=e.convertDim(r,"y"),{x:n.x+Math.cos(i)*r,y:n.y+Math.sin(i)*r}},invertPoint:function(t){var e=this,n=e.getCenter(),i=new o(t.x-n.x,t.y-n.y),r=e.get("x"),a=new u;a.rotate(r.start);var l=new c(1,0,0);l.applyMatrix(a),l=new o(l.x,l.y);var h=l.angleTo(i,r.end<r.start);s.equal(h,2*Math.PI)&&(h=0);var f=i.length(),g=h/(r.end-r.start);g=r.end-r.start>0?g:-g;var p=e.invertDim(f,"y"),d={};return d.x=e.isTransposed?p:g,d.y=e.isTransposed?g:p,d}}),t.exports=l},function(t,e,n){"use strict";var i=n(1),r=n(2),a=function(t){i.mix(this,t)};i.augment(a,{dims:[],margin:0,defs:{},facetTitle:{titleOffset:25,colDimTitle:{title:{"font-size":16,"text-anchor":"middle",fill:"#444"}},colTitle:{title:{"font-size":14,"text-anchor":"middle",fill:"#444"}},rowTitle:{title:{"font-size":14,"text-anchor":"middle",rotate:90,fill:"#444"}},rowDimTitle:{title:{"font-size":16,"text-anchor":"middle",rotate:90,fill:"#444"}}},plotRange:null,getDimValues:function(t,e){var n=this,i=n.defs[t],a=[];return a=i&&i.values?i.values:r.values(e,t)},getFilter:function(t){var e=this.defs,n=function(n){var r=!0;return i.each(t,function(t){var a=t.dim,s=t.value,o=t.values,u=!0;!i.isNull(s)&&a&&(u=e[a]&&e[a].group?e[a].group(n)===i.indexOf(o,s):n[a]===s||n[a]===i.indexOf(o,s)),r=r&&u}),r};return n},drawTitles:function(t,e){var n=this,r=n.dims;i.each(t,function(t){n.drawFacetTitle("col",t,e)}),n.drawDimTitle("col",r[0],e)},generateFacets:function(){},drawFacetTitle:function(t,e,n){var r=this,a=r.facetTitle,s=a.titleOffset,o="row"===t?a.rowTitle:a.colTitle,u=e.region,c=u.start,l=u.end,h="row"===t?"y":"x",f="row"===t?"x":"y",g={};g[h]=(l[h]-c[h])/2+c[h],g[f]=l[f];var p="x"===h?-1:1,d=i.mix({text:e[h+"Value"]},o.title);d[h]=g[h],d[f]=g[f]+s*p,n.addShape("Text",{
attrs:d})},drawDimTitle:function(t,e,n){if(!i.isNull(e)){var r=this,a=r.plotRange,s=r.defs,o="row"===t?"y":"x",u=r.facetTitle,c=u.titleOffset,l="x"===o?u.colDimTitle:u.rowDimTitle,h=s[e]&&s[e].alias||e,f={};f="x"===o?{y:a.tl.y+(c+40)*-1,x:(a.tr.x-a.tl.x)/2+a.tl.x}:{x:a.tr.x+(c+40),y:(a.br.y-a.tr.y)/2+a.tr.y},h=i.mix({text:h,x:f.x,y:f.y},l.title),n.addShape("Text",{attrs:h})}}}),t.exports=a},function(t,e,n){"use strict";function i(t,e){if(a.isNumeric(t)&&a.isNumeric(e))return s.number(t,e);if(a.isString(t)&&a.isString(e)){var n=new u(t),i=new u(e);if(n.getType()&&i.getType())return o.color(n,i)}}function r(t,e){if(a.isNumeric(t)&&a.isNumeric(e))return s.unNumber(t,e);if(a.isString(t)&&a.isString(e)){var n=new u(t),i=new u(e);if(n.getType()&&i.getType())return o.unColor(n,i)}}var a=n(1),s=n(206),o=n(203),u=n(33);t.exports={singular:i,unSingular:r}},function(t,e,n){"use strict";var i=n(38),r=n(1),a=n(30),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{type:"linear",isLinear:!0,min:null,max:null,nice:!1,tickCount:null,tickInterval:null,init:function(){var t=this;if(t.ticks){var e=t.ticks,n=t.translate(e[0]),i=t.translate(e[e.length-1]);(r.isNull(t.min)||t.min>n)&&(t.min=n),(r.isNull(t.max)||t.max<i)&&(t.max=i)}else t.min=t.translate(t.min),t.max=t.translate(t.max),t.initTicks()},calculateTicks:function(){var t=this,e=t.min,n=t.max,i=t.tickCount,r=t.tickInterval,s=a.caculate({min:e,max:n,minCount:i,maxCount:i,interval:r});return s.ticks},initTicks:function(){var t=this,e=t.calculateTicks();if(t.nice)t.ticks=e,t.min=e[0],t.max=e[e.length-1];else{var n=[];r.each(e,function(e){e>=t.min&&e<=t.max&&n.push(e)}),t.ticks=n}},scale:function(t){if(null===t||void 0===t)return NaN;var e=this.max,n=this.min;if(e===n)return 0;var i=(t-n)/(e-n),r=this.rangeMin(),a=this.rangeMax();return r+i*(a-r)},invert:function(t){var e=(t-this.rangeMin())/(this.rangeMax()-this.rangeMin());return this.min+e*(this.max-this.min)}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t),this.init()};i.augment(r,{formatter:null,range:[0,1],ticks:null,values:[],init:function(){},getTicks:function(){var t=this,e=t.ticks,n=[];return i.each(e,function(e){var r;r=i.isObject(e)?e:{text:t.getText(e),tickValue:e,value:t.scale(e)},n.push(r)}),n},getText:function(t){var e=this.formatter;return t=e?e(t):t,!i.isNull(t)&&t.toString||(t=""),t.toString()},rangeMin:function(){return this.range[0]},rangeMax:function(){var t=this.range;return t[t.length-1]},invert:function(){},translate:function(t){return t},scale:function(){},clone:function(){var t=this,e=t.constructor,n={};return i.each(t,function(e,i){n[i]=t[i]}),new e(n)},change:function(t){return this.ticks=null,i.mix(this,t),this.init(),this}}),t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(29),a=n(2),s=function(t){s.superclass.constructor.call(this,t),this.colRange={},this.binWidth||(this.binWidth=.03)};i.extend(s,r),i.augment(s,{type:"bin",binWidth:.03,colRange:{},binDims:null,setRange:function(t,e){this.colRange[t]=e},getStatDims:function(){return this.getDims()},getBinDims:function(){var t=this.binDims||this.getDims(),e=[];return i.each(t,function(t){t.indexOf("..")===-1&&e.push(t)}),e},getBinWidth:function(){return this.binWidth||.03},getCenterValue:function(t,e,n){var i,r=this.getBinWidth(),a=(t-n)/(e-n);return 1===a&&(a-=r/4),i=(e-n)*(Math.floor(a/r)*r+r/2)+n},toBin:function(t){for(var e=this,n=e.getBinDims(),i=0;i<n.length;i++){var r=n[i],a=t[r],s=e.getDimRange(r);t[r]=e.getCenterValue(a,s.max,s.min)}},getDimRange:function(t){var e=this,n=e.cacheRange;return n[t]||{min:0,max:0}},preExecute:function(t){var e=this,n=a.merge.apply(null,t),r=e.getStatDims(),s=e.colRange,o={};i.each(r,function(t){if(s[t])o[t]=s[t];else{var e=a.range(n,t);o[t]={min:e[0],max:e[1]}}}),e.cacheRange=o},execFrame:function(t){var e=this,n=t.toJSON();return i.each(n,function(t){e.toBin(t)}),new a(n)},getRegion:function(){return[{x:0,y:0}]}}),t.exports=s},function(t,e){"use strict";var n="#4E7CCC",i='"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimSun, "sans-serif"',r={defaultColor:n,plotCfg:{margin:[20,80,60,80]},facetCfg:{type:"rect",margin:10,facetTitle:{titleOffset:16,colDimTitle:{title:{fontSize:14,textAlign:"center",fill:"#999"}},colTitle:{title:{fontSize:12,textAlign:"center",fill:"#999"}},rowTitle:{title:{fontSize:12,textAlign:"center",rotate:90,fill:"#999"}},rowDimTitle:{title:{fontSize:12,textAlign:"center",rotate:90,fill:"#999"}}}},binWidth:.03,fontFamily:i,colors:{"default":["#4E7CCC","#36B3C3","#4ECDA5","#94E08A","#E2F194","#EDCC72","#F8AB60","#F9815C","#EB4456","#C82B3D"]},shapes:{point:["hollowCircle","hollowSquare","hollowDiamond","hollowBowtie","hollowTriangle","hollowHexagon","cross","tick","plus","hyphen","line"],line:["line","dash","dot"],area:["area"]},hues:["red","yellow","green","blue","orange","purple","pink","brown","white","gray","black"],axis:{top:{position:"top",titleOffset:30,title:{fontSize:12,fill:"#999",textBaseline:"middle"},labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}},tickLine:{lineWidth:1,stroke:"#ccc",value:5}},bottom:{position:"bottom",titleOffset:45,labelOffset:20,title:{fontSize:12,textAlign:"center",fill:"#999",textBaseline:"middle"},labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,stroke:"#ccc",value:5}},left:{position:"left",titleOffset:60,labelOffset:13,title:{fontSize:12,fill:"#999",textBaseline:"middle"},labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,stroke:"#ccc",value:5},grid:{line:{stroke:"#d9d9d9",lineWidth:1,lineDash:[2,2]}}},right:{position:"right",titleOffset:60,labelOffset:13,title:{fontSize:12,fill:"#999",textBaseline:"middle"},labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,stroke:"#ccc",value:5}},circle:{labelOffset:5,line:{lineWidth:1,stroke:"#ccc"},grid:{line:{stroke:"#d9d9d9",lineWidth:1,lineDash:[1,3]}},labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}}},gauge:{grid:null,labelOffset:5,tickLine:{lineWidth:1,value:-20,stroke:"#ccc"},subTick:5,labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}}},clock:{grid:null,labelOffset:5,tickLine:{lineWidth:1,value:-20,stroke:"#C0D0E0"},subTick:5,labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}}},radius:{titleOffset:45,labels:{label:{fill:"#404040",fontSize:12,textBaseline:"middle"}},line:{lineWidth:1,stroke:"#ccc"},grid:{line:{stroke:"#d9d9d9",lineWidth:1,lineDash:[2,2]},type:"circle"}},helix:{grid:null,labels:{label:null},line:{lineWidth:1,stroke:"#ccc"},tickLine:{lineWidth:1,value:5,stroke:"#ccc"}}},labels:{offset:14,label:{fill:"#666",fontSize:12,textBaseline:"middle"}},treemapLabels:{offset:10,label:{fill:"#fff",fontSize:14,textBaseline:"top",fontStyle:"bold"}},innerLabels:{label:{fill:"#fff",fontSize:12,textBaseline:"middle"}},thetaLabels:{labelLine:{lineWidth:1},label:{fill:"#666",fontSize:12,textBaseline:"middle"},labelHeight:14,offset:30},legend:{right:{position:"right",back:null,spacingX:10,spacingY:12,markerAlign:"center",alignPlot:!0,width:20,height:156,title:{text:" ",fill:"#333",textBaseline:"middle"}},left:{position:"left",back:null,spacingX:10,spacingY:12,alignPlot:!0,markerAlign:"center",width:20,height:156,title:{text:" ",fill:"#333",textBaseline:"middle"}},top:{position:"top",title:null,back:null,spacingX:16,spacingY:10,alignPlot:!1,markerAlign:"center",width:156,height:20},bottom:{position:"bottom",title:null,back:null,spacingX:16,spacingY:10,alignPlot:!1,markerAlign:"center",width:156,height:20}},tooltip:{crosshairs:!1,offset:15,crossLine:{stroke:"#666"},wordSpaceing:6,markerCfg:{symbol:"circle",radius:3}},activeShape:{point:{fillOpacity:.7},hollowPoint:{lineWidth:2},interval:{fillOpacity:.7},hollowInterval:{lineWidth:2},area:{fillOpacity:.85},hollowArea:{lineWidth:2},line:{lineWidth:2},polygon:{fillOpacity:.75}},shape:{point:{lineWidth:1,fill:n,radius:4},hollowPoint:{fill:"#fff",lineWidth:1,stroke:n,radius:3},interval:{lineWidth:0,fill:n,fillOpacity:.85},pie:{lineWidth:1,stroke:"#fff"},hollowInterval:{fill:"#fff",stroke:n,fillOpacity:0,lineWidth:1},area:{lineWidth:0,fill:n,fillOpacity:.6},polygon:{lineWidth:0,fill:n,fillOpacity:1},hollowPolygon:{fill:"#fff",stroke:n,fillOpacity:0,lineWidth:1},hollowArea:{fill:"#fff",stroke:n,fillOpacity:0,lineWidth:1},line:{stroke:n,lineWidth:1,fill:null}},guide:{text:{fill:"#666",fontSize:12},line:{stroke:n,lineDash:[0,2,2]},rect:{lineWidth:0,fill:n,fillOpacity:.1},tag:{line:{stroke:n,lineDash:[0,2,2]},text:{fill:"#666",fontSize:12,textAlign:"center"},rect:{lineWidth:0,fill:n,fillOpacity:.1}},html:{align:"cc"}},tooltipMarker:{fill:"#fff",symbol:"circle",lineWidth:2,stroke:n,radius:4},pixelRatio:null};t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(5).Group,a=function(t){a.superclass.constructor.call(this,t)};a.CFG={title:{},titleText:null,dx:0,dy:0,position:!0,animate:!1},i.extend(a,r),i.augment(a,{_beforeRenderUI:function(){var t=this.get("title");i.isNull(t)&&this.set("titleText",null),this.set("itemsGroup",this.addGroup()),this.set("titleShape",this.addShape("text",{attrs:i.mix({x:0,y:0},t)}))},_renderUI:function(){this._renderTitle()},_renderTitle:function(){var t=this.get("titleShape"),e=this.get("titleText");t.attr({x:0,y:0,text:e})},setPosition:function(t){t=t?t:this.get("position");var e=this.get("plotRange");if(e){var n=e.tl,i=e.br,r=this.get("dx"),a=this.get("dy"),s=this.getBBox().width,o=0,u=0;switch(t){case"top":o=n.x,u=n.y;break;case"left":o=n.x,u=(n.y+i.y)/2;break;case"right":o=i.x-s,u=(n.y+i.y)/2;break;case"bottom":o=(n.x+i.x)/2-s/2,u=i.y}this.move(o+r,u+a),this.set("position",t)}},getCount:function(){return this.get("itemsGroup").get("children").length},getLeaveCount:function(){var t=this.get("itemsGroup"),e=t.get("children"),n=[];return n=i.filter(e,function(t){return t.get("checked")}),n.length},setItems:function(t){this.set("items",t),this.clearItems(),this._renderUI()},addItem:function(t){var e=this.get("items");e.push(t),this.clearItems(),this._renderUI()},clearItems:function(){var t=this.get("itemsGroup");t.clear()}}),t.exports=a},function(t,e,n){function i(t,e,n,i){return{x:Math.cos(i)*n+t,y:Math.sin(i)*n+e}}function r(t,e,n,i){var r,a;return i?t<e?(r=e-t,a=2*Math.PI-n+t):t>n&&(r=2*Math.PI-t+e,a=t-n):(r=t-e,a=n-t),r>a?n:e}function a(t,e,n,i){var a=0;return n-e>=2*Math.PI&&(a=2*Math.PI),e=c.mod(e,2*Math.PI),n=c.mod(n,2*Math.PI)+a,t=c.mod(t,2*Math.PI),i?e>=n?t>n&&t<e?t:r(t,n,e,!0):t<e||t>n?t:r(t,e,n):e<=n?e<t&&t<n?t:r(t,e,n,!0):t>e||t<n?t:r(t,n,e)}function s(t,e,n,i,r,s,o,c,l){var h=new u(o,c),f=new u(t,e),g=new u(1,0),p=u.sub(h,f),d=g.angleTo(p);d=a(d,i,r,s);var v=new u(n*Math.cos(d)+t,n*Math.sin(d)+e);l&&(l.x=v.x,l.y=v.y);var m=h.distanceTo(v);return m}function o(t,e,n,r,s,o){var u=0,c=Math.PI/2,h=Math.PI,f=3*Math.PI/2,g=[],p=a(u,r,s,o);p===u&&g.push(i(t,e,n,u)),p=a(c,r,s,o),p===c&&g.push(i(t,e,n,c)),p=a(h,r,s,o),p===h&&g.push(i(t,e,n,h)),p=a(f,r,s,o),p===f&&g.push(i(t,e,n,f)),g.push(i(t,e,n,r)),g.push(i(t,e,n,s));var d=1/0,v=-(1/0),m=1/0,x=-(1/0);return l.each(g,function(t){d>t.x&&(d=t.x),v<t.x&&(v=t.x),m>t.y&&(m=t.y),x<t.y&&(x=t.y)}),{minX:d,minY:m,maxX:v,maxY:x}}var u=n(3).Vector2,c=n(6),l=n(1);t.exports={nearAngle:a,projectPoint:function(t,e,n,i,r,a,o,u){var c={};return s(t,e,n,i,r,a,o,u,c),c},pointDistance:s,box:o}},function(t,e,n){var i=n(3).Vector2;t.exports={at:function(t,e,n){return(e-t)*n+t},pointDistance:function(t,e,n,r,a,s){var o=new i(n-t,r-e);if(o.isZero())return NaN;var u=o.vertical();u.normalize();var c=new i(a-t,s-e);return Math.abs(c.dot(u))},box:function(t,e,n,i,r){var a=r/2,s=Math.min(t,n),o=Math.max(t,n),u=Math.min(e,i),c=Math.max(e,i);return{minX:s-a,minY:u-a,maxX:o+a,maxY:c+a}},len:function(t,e,n,i){return Math.sqrt((n-t)*(n-t)+(i-e)*(i-e))}}},function(t,e,n){function i(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function r(t,e,n,r,a,o,u,c,l){var h,f,g,p,d,v,m,x=.005,y=1/0,_=1e-4,S=new s(u,c);for(d=0;d<1;d+=.05)g=new s(i(t,n,a,d),i(e,r,o,d)),f=g.distanceToSquared(S),f<y&&(h=d,y=f);for(y=1/0,m=0;m<32&&!(x<_);m++){var b=h-x,w=h+x;g=new s(i(t,n,a,b),i(e,r,o,b)),f=g.distanceToSquared(S),b>=0&&f<y?(h=b,y=f):(p=new s(i(t,n,a,w),i(e,r,o,w)),v=p.distanceToSquared(S),w<=1&&v<y?(h=w,y=v):x*=.5)}return l&&(l.x=i(t,n,a,h),l.y=i(e,r,o,h)),Math.sqrt(y)}function a(t,e,n){var i=t+n-2*e;if(o.equal(i,0))return[.5];var r=(t-e)/i;return r<=1&&r>=0?[r]:[]}var s=n(3).Vector2,o=n(6);t.exports={at:i,projectPoint:function(t,e,n,i,a,s,o,u){var c={};return r(t,e,n,i,a,s,o,u,c),c},pointDistance:r,extrema:a}},function(t,e,n){"use strict";var i=n(1),r=n(34),a=function(t){t.inner=t.inner||0,a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"polar"}),t.exports=a},function(t,e,n){var i=n(182);t.exports=i},function(t,e,n){var i=n(183);t.exports=i},function(t,e,n){"use strict";var i=n(1),r=Math.PI/180,a=180/Math.PI,s=function(t){i.mix(this,t)};i.augment(s,{basic:null,toRadians:function(t){return r*t},toDegrees:function(t){return t*a},project:function(t,e){return{x:t,y:e}},invert:function(t){return{x:t.x,y:t.y}}}),t.exports=s},function(t,e,n){"use strict";var i=(n(1),"\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029"),r=new RegExp("([a-z])["+i+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+i+"]*,?["+i+"]*)+)","ig"),a=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+i+"]*,?["+i+"]*","ig"),s=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(r,function(t,i,r){var s=[],o=i.toLowerCase();if(r.replace(a,function(t,e){e&&s.push(+e)}),"m"==o&&s.length>2&&(n.push([i].concat(s.splice(0,2))),o="l",i="m"==i?"l":"L"),"o"==o&&1==s.length&&n.push([i,s[0]]),"r"==o)n.push([i].concat(s));else for(;s.length>=e[o]&&(n.push([i].concat(s.splice(0,e[o]))),e[o]););}),n},o=function(t,e){for(var n=[],i=0,r=t.length;r-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?r-4==i?a[3]={x:+t[0],y:+t[1]}:r-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[r-2],y:+t[r-1]}:r-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n},u=function(t,e,n,i,r){if(null==r&&null==i&&(i=n),t=+t,e=+e,n=+n,i=+i,null!=r)var a=Math.PI/180,s=t+n*Math.cos(-i*a),o=t+n*Math.cos(-r*a),u=e+n*Math.sin(-i*a),c=e+n*Math.sin(-r*a),l=[["M",s,u],["A",n,n,0,+(r-i>180),0,o,c]];else l=[["M",t,e],["m",0,-i],["a",n,i,0,1,1,0,2*i],["a",n,i,0,1,1,0,-2*i],["z"]];return l},c=function(t){if(t=s(t),!t||!t.length)return[["M",0,0]];var e,n=[],i=0,r=0,a=0,c=0,l=0;"M"==t[0][0]&&(i=+t[0][1],r=+t[0][2],a=i,c=r,l++,n[0]=["M",i,r]);for(var h,f,g=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=l,d=t.length;p<d;p++){if(n.push(h=[]),f=t[p],e=f[0],e!=e.toUpperCase())switch(h[0]=e.toUpperCase(),h[0]){case"A":h[1]=f[1],h[2]=f[2],h[3]=f[3],h[4]=f[4],h[5]=f[5],h[6]=+f[6]+i,h[7]=+f[7]+r;break;case"V":h[1]=+f[1]+r;break;case"H":h[1]=+f[1]+i;break;case"R":for(var v=[i,r].concat(f.slice(1)),m=2,x=v.length;m<x;m++)v[m]=+v[m]+i,v[++m]=+v[m]+r;n.pop(),n=n.concat(o(v,g));break;case"O":n.pop(),v=u(i,r,f[1],f[2]),v.push(v[0]),n=n.concat(v);break;case"U":n.pop(),n=n.concat(u(i,r,f[1],f[2],f[3])),h=["U"].concat(n[n.length-1].slice(-2));break;case"M":a=+f[1]+i,c=+f[2]+r;default:for(m=1,x=f.length;m<x;m++)h[m]=+f[m]+(m%2?i:r)}else if("R"==e)v=[i,r].concat(f.slice(1)),n.pop(),n=n.concat(o(v,g)),h=["R"].concat(f.slice(-2));else if("O"==e)n.pop(),v=u(i,r,f[1],f[2]),v.push(v[0]),n=n.concat(v);else if("U"==e)n.pop(),n=n.concat(u(i,r,f[1],f[2],f[3])),h=["U"].concat(n[n.length-1].slice(-2));else for(var y=0,_=f.length;y<_;y++)h[y]=f[y];if(e=e.toUpperCase(),"O"!=e)switch(h[0]){case"Z":i=+a,r=+c;break;case"H":i=h[1];break;case"V":r=h[1];break;case"M":a=h[h.length-2],c=h[h.length-1];default:i=h[h.length-2],r=h[h.length-1]}}return n},l=function(t,e,n,i){return[t,e,n,i,n,i]},h=function(t,e,n,i,r,a){var s=1/3,o=2/3;return[s*t+o*n,s*e+o*i,s*r+o*n,s*a+o*i,r,a]},f=function(t,e,n,i,r,a,s,o,u,c){n===i&&(n+=1);var l,h=120*Math.PI/180,g=Math.PI/180*(+r||0),p=[],d=function(t,e,n){var i=t*Math.cos(n)-e*Math.sin(n),r=t*Math.sin(n)+e*Math.cos(n);return{x:i,y:r}};if(c)M=c[0],A=c[1],b=c[2],w=c[3];else{l=d(t,e,-g),t=l.x,e=l.y,l=d(o,u,-g),o=l.x,u=l.y,t===o&&e===u&&(o+=1,u+=1);var v=(Math.cos(Math.PI/180*r),Math.sin(Math.PI/180*r),(t-o)/2),m=(e-u)/2,x=v*v/(n*n)+m*m/(i*i);x>1&&(x=Math.sqrt(x),n=x*n,i=x*i);var y=n*n,_=i*i,S=(a==s?-1:1)*Math.sqrt(Math.abs((y*_-y*m*m-_*v*v)/(y*m*m+_*v*v))),b=S*n*m/i+(t+o)/2,w=S*-i*v/n+(e+u)/2,M=Math.asin(((e-w)/i).toFixed(9)),A=Math.asin(((u-w)/i).toFixed(9));M=t<b?Math.PI-M:M,A=o<b?Math.PI-A:A,M<0&&(M=2*Math.PI+M),A<0&&(A=2*Math.PI+A),s&&M>A&&(M-=2*Math.PI),!s&&A>M&&(A-=2*Math.PI)}var T=A-M;if(Math.abs(T)>h){var C=A,k=o,P=u;A=M+h*(s&&A>M?1:-1),o=b+n*Math.cos(A),u=w+i*Math.sin(A),p=f(o,u,n,i,r,0,s,k,P,[A,C,b,w])}T=A-M;var I=Math.cos(M),D=Math.sin(M),O=Math.cos(A),F=Math.sin(A),L=Math.tan(T/4),R=4/3*n*L,N=4/3*i*L,B=[t,e],E=[t+R*D,e-N*I],z=[o+R*F,u-N*O],X=[o,u];if(E[0]=2*B[0]-E[0],E[1]=2*B[1]-E[1],c)return[E,z,X].concat(p);p=[E,z,X].concat(p).join().split(",");for(var W=[],V=0,Y=p.length;V<Y;V++)W[V]=V%2?d(p[V-1],p[V],g).y:d(p[V],p[V+1],g).x;return W},g=function(t,e){for(var n=c(t),i=e&&c(e),r={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s=(function(t,e,n){var i,r;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(f.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"==n||"S"==n?(i=2*e.x-e.bx,r=2*e.y-e.by):(i=e.x,r=e.y),t=["C",i,r].concat(t.slice(1));break;case"T":"Q"==n||"T"==n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(h(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(h(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(l(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(l(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(l(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(l(e.x,e.y,e.X,e.Y))}return t}),o=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)g[e]="A",i&&(p[e]="A"),t.splice(e++,0,["C"].concat(r.splice(0,6)));t.splice(e,1),x=Math.max(n.length,i&&i.length||0)}},u=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],x=Math.max(n.length,i&&i.length||0))},g=[],p=[],d="",v="",m=0,x=Math.max(n.length,i&&i.length||0);m<x;m++){n[m]&&(d=n[m][0]),"C"!=d&&(g[m]=d,m&&(v=g[m-1])),n[m]=s(n[m],r,v),"A"!=g[m]&&"C"==d&&(g[m]="C"),o(n,m),i&&(i[m]&&(d=i[m][0]),"C"!=d&&(p[m]=d,m&&(v=p[m-1])),i[m]=s(i[m],a,v),"A"!=p[m]&&"C"==d&&(p[m]="C"),o(i,m)),u(n,i,r,a,m),u(i,n,a,r,m);var y=n[m],_=i&&i[m],S=y.length,b=i&&_.length;r.x=y[S-2],r.y=y[S-1],r.bx=parseFloat(y[S-4])||r.x,r.by=parseFloat(y[S-3])||r.y,a.bx=i&&(parseFloat(_[b-4])||a.x),a.by=i&&(parseFloat(_[b-3])||a.y),a.x=i&&_[b-2],a.y=i&&_[b-1]}return i?[n,i]:n},p=/,?([a-z]),?/gi,d=function(t){return t.join(",").replace(p,"$1")},v={toArray:s,toString:d,toCurve:g,toAbsolute:c,catmullRomToBezier:o};t.exports=v},function(t,e,n){"use strict";var i=n(1),r=n(9),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"region"}),t.exports=a},function(t,e,n){"use strict";var i=n(29),r=n(1),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{type:"smooth",bandWidth:.01,colRange:{},setRange:function(t,e){this.colRange[t]=e},getStatDims:function(){var t=this,e=t.getDims(),n=e.length,i=[e[n-1]];return i},execSmooth:function(t){return t},getXDim:function(){var t=this,e=t.getDims();if(e.length<2)throw"you must support the x,y dimension!!!";return e[0]},getYDim:function(){var t=this,e=t.getDims();if(e.length<2)throw"you must support the x,y dimension!!!";return e[1]},getZDim:function(){var t=this,e=t.getDims();if(e.length<3)throw"you must support the x,y,z dimension!!!";return e[2]},getData:function(t){var e=[],n=this.dims;return t.each(function(t){var i=[];r.each(n,function(e){i.push(t[e])}),e.push(i)}),e},getDimRange:function(t,e){var n=this,i=n.colRange[e];if(!i){var r=a.range(t,e);i={min:r[0],max:r[1]}}return i},gatStep:function(t,e){var n=this,i=n.getDimRange(t,e),r=i.min,a=i.max,s=n.bandWidth,o=(a-r)*s;return o},getInterArray:function(t,e){for(var n=this,i=n.gatStep(t,e),r=n.getDimRange(t,e),a=r.min,s=r.max,o=[],u=a;u<=s;u+=i)o.push(u);return o},execFrame:function(t){var e=this,n=e.getXDim(),i=e.getYDim();t=a.sort(t,n);var s=e.getData(t),o=e.getInterArray(t,n),u=e.execSmooth(s,o,t),c=t.rowObject(0),l=[];return r.each(u,function(t){var e=r.mix({},c);e[n]=t[0],e[i]=t[1],l.push(e)}),new a(l)}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r={splitPoints:function(t){var e=[],n=t.x,r=t.y;return r=i.isArray(r)?r:[r],i.each(r,function(t,r){var a={x:i.isArray(n)?n[r]:n,y:t};e.push(a)}),e}};t.exports=r},[335,118,54],function(t,e){"use strict";function n(){var t=document.createElement("i");return t.title="Web Colour Picker",t.style.display="none",document.body.appendChild(t),t}var i=/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,r={},a=null;t.exports={toRGB:function(t){a||(a=n());var e;if(r[t])e=r[t];else{a.style.color=t,e=document.defaultView.getComputedStyle(a,"").getPropertyValue("color");var s=i.exec(e);s.shift(),e=this.arr2rgb(s),r[t]=e}return e},toHex:function(t){return t=Math.round(t),t=t.toString(16),1===t.length&&(t="0"+t),t},hsl2Rgb:function(t){var e=t[0],n=t[1],i=t[2],r={};if(0===n)r.r=r.g=r.b=i;else{var a=function(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t},s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;r.r=a(o,s,e+1/3),r.g=a(o,s,e),r.b=a(o,s,e-1/3)}return r.r=Math.min(Math.round(255*r.r),255),r.g=Math.min(Math.round(255*r.g),255),r.b=Math.min(Math.round(255*r.b),255),"#"+this.toHex(r.r)+this.toHex(r.g)+this.toHex(r.b)},rgb2hsl:function(t){var e,n,i,r=this.rgb2arr(t),a=r[0]/255,s=r[1]/255,o=r[2]/255,u=Math.min(a,s,o),c=Math.max(a,s,o),l=c-u;return c===u?e=0:a===c?e=(s-o)/l:s===c?e=2+(o-a)/l:o===c&&(e=4+(a-s)/l),e=Math.min(60*e,360),e<0&&(e+=360),i=(u+c)/2,n=c===u?0:i<=.5?l/(c+u):l/(2-c-u),[e/360,n,i]},arr2rgb:function(t){return"#"+this.toHex(t[0])+this.toHex(t[1])+this.toHex(t[2])},rgb2arr:function(t){var e=[];return e.push(parseInt(t.substr(1,2),16)),e.push(parseInt(t.substr(3,2),16)),e.push(parseInt(t.substr(5,2),16)),e}}},function(t,e,n){"use strict";var i=n(14),r=n(1),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{getEndAttrs:function(){var t=this.get("rect"),e={width:t.width,height:t.height};return e},getTarget:function(){var t=this.get("group"),e=t.getParent(),n=e.addShape("Rect");return t.attr("clip",n),n}}),t.exports=a},function(t,e){function n(t){var e=1;if(t<1){for(var n=0;t<1;)e/=10,t=10*t,n++;e.toString().length>20&&(e=parseFloat(e.toFixed(n)))}else for(;t>10;)e=10*e,t/=10;return e}function i(t,e){var n=t.length;if(0===n)return NaN;var i=t[0];if(e<t[0])return NaN;if(e>=t[n-1])return t[n-1];for(var r=1;r<t.length&&!(e<t[r]);r++)i=t[r];return i}function r(t,e){var n=t.length;if(0===n)return NaN;var i;if(e>t[n-1])return NaN;if(e<t[0])return t[0];for(var r=1;r<t.length;r++)if(e<=t[r]){i=t[r];break}return i}var a={snapFactorTo:function(t,e,i){if(isNaN(t))return NaN;var r=1;if(0!==t){t<0&&(r=-1),t*=r;var s=n(t);r*=s,t/=s}t="floor"===i?a.snapFloor(e,t):"ceil"===i?a.snapCeiling(e,t):a.snapTo(e,t);var o=t*r;if(Math.abs(r)<1&&o.toString().length>20){var u=parseInt(1/r),c=r>0?1:-1;o=t/u*c}return o},snapMultiple:function(t,e,n){var i;return i="ceil"===n?Math.ceil(t/e):"floor"===n?Math.floor(t/e):Math.round(t/e),i*e},snapTo:function(t,e){var n=i(t,e),a=r(t,e);if(isNaN(n)||isNaN(a)){if(t[0]>=e)return t[0];var s=t[t.length-1];if(s<=e)return s}return Math.abs(e-n)<Math.abs(a-e)?n:a},snapFloor:function(t,e){return i(t,e)},snapCeiling:function(t,e){return r(t,e)}};t.exports=a},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(31),a=n(1),s="x-chart-axis",o=n(3),u=o.Vector2,c=n(6);i.CFG={zIndex:4,x:null,y:null,elCls:s,line:{lineWidth:1,stroke:"#C0D0E0"},tickLine:{lineWidth:1,stroke:"#C0D0E0",value:5},isVertical:!1,start:null,end:null},a.extend(i,r),a.augment(i,{_getAvgLabelLength:function(t){var e=t.get("children");return e[1].attr("x")-e[0].attr("x")},getSideVector:function(t){var e=this,n=e.get("factor"),i=e.get("isVertical"),r=e.get("start"),a=e.get("end"),s=e.getAxisVector(),o=s.normalize(),u=!1;(i&&r.y<a.y||!i&&r.x>a.x)&&(u=!0);var c=o.vertical(u);return c.multiplyScaler(t*n)},getAxisVector:function(){var t=this.get("start"),e=this.get("end");return new u(e.x-t.x,e.y-t.y)},getLinePath:function(){var t=this,e=t.get("start"),n=t.get("end"),i=[];return i.push(["M",e.x,e.y]),i.push(["L",n.x,n.y]),i},getTickEnd:function(t,e){var n,i=this,r=i.get("tickLine");return e=e?e:r.value,n=i.getSideVector(e),{x:t.x+n.x,y:t.y+n.y}},getTickPoint:function(t){var e=this,n=e.get("start"),i=e.get("end"),r=i.x-n.x,a=i.y-n.y;return{x:n.x+r*t,y:n.y+a*t}},renderTitle:function(){var t=this,e=t.get("title"),n=t.getTickPoint(.5),i=t.get("titleOffset"),r=t.get("labelsGroup");if(r){var o=t.getMaxLabelWidth(r),l=t.get("labelOffset")||10;o+l+20<i&&(i=o+l+20)}var h=a.mix({},e);if(e.text){var f=t.getSideVector(i),g={x:n.x+f.x,y:n.y+f.y},p=t.getAxisVector(),d=0;if(!c.equal(p.y,0)){var v=new u(1,0),m=new u(p.x,p.y);d=m.angleTo(v,!0)}h.rotate=d*(180/Math.PI),h.x=g.x,h.y=g.y,t.addShape("Text",{elCls:s+"-title",attrs:h})}},autoRotateLabels:function(){var t=this,e=t.get("labelsGroup"),n=t.get("title");if(e){var i,r,s=t.get("labelOffset")||10,o=s,u=t.get("titleOffset"),l=t.getAxisVector();if(c.equal(l.x,0)&&n&&n.text)r=t.getMaxLabelWidth(e),r+s>u-o&&(i=Math.acos((u-o)/(r+s))*-1);else if(c.equal(l.y,0)&&e.getCount()>1){var h=Math.abs(t._getAvgLabelLength(e));r=t.getMaxLabelWidth(e),r>h&&(i=Math.atan2(1.5*s,h))}if(i){var f=t.get("factor");a.each(e.get("children"),function(t){t.rotateAtStart(i),c.equal(l.y,0)&&(f>0?t.attr("textAlign","left"):t.attr("textAlign","right"))})}}}}),t.exports=i},function(t,e,n){var i=n(59);i.ShowLabels=n(151),t.exports=i},function(t,e,n){"use strict";var i=n(5).Group,r=n(1),a=function(t){a.superclass.constructor.call(this,t)};a.CFG={zIndex:6,items:null,label:null,renderer:null,custom:!1,animate:!1,html:'<div class="g-labels" style="position:absolute;top:0;left:0;"></div>',itemTpl:'<div class="g-label" style="position:absolute;">{text}</div>',duration:400},r.extend(a,i),r.augment(a,{_renderUI:function(){this._drawLabels()},_drawLabels:function(){var t=this,e=t.get("items");r.each(e,function(e,n){t._addLabel(e,n)})},_addLabel:function(t,e){var n=this._getLabelCfg(t,e);return this._createText(n)},_getLabelCfg:function(t,e){var n=this.get("label")||{},i=this.get("renderer");if(!r.isObject(t)){var a=t;t={},t.text=a}i&&(t.text=i(t.text,t,e)),r.isNull(t.text)&&(t.text=""),t.text=t.text+"";var s=r.mix({},t,n,{x:(t.x||0)+(n.x||0),y:(t.y||0)+(n.y||0)});return s},_createText:function(t){var e,n=this,i=n.get("custom"),a=n.get("customDiv");if(!i)return e=this.addShape("text",{attrs:t}),e.id=t.id,e.animateType="label",e;if(!a){var s=n.get("html"),o=n.get("canvas").get("el").parentNode;a=r.createDom(s),o.style.position="relative",o.appendChild(a),n.set("customDiv",a)}var u=n._createDom(t);a.appendChild(u),n._setCustomPosition(t,u)},_setCustomPosition:function(t,e){var n=t.textAlign||"left",i=t.y,a=t.x,s=r.getWidth(e),o=r.getHeight(e);i-=o/2,"center"===n?a-=s/2:"right"===n&&(a-=s),e.style.top=parseInt(i,10)+"px",e.style.left=parseInt(a,10)+"px"},_createDom:function(t){var e=this,n=e.get("itemTpl"),i=r.substitute(n,t),a=r.createDom(i);return a},getLabels:function(){var t=this,e=t.get("customDiv");return e?r.toArray(e.childNodes):t.get("children")},addLabel:function(t){var e=this.get("items"),n=e.length;return e.push(t),this._addLabel(t,n)},changeLabel:function(t,e){var n,i,a=this,s=a.get("custom");if(n=r.indexOf(a.get("children"),t),i=a._getLabelCfg(e,n),t)if(s){var o=a._createDom(i);t.innerHTML=o.innerHTML,a._setCustomPosition(i,t)}else if(t.attr("text",i.text),t.attr("x")!==i.x||t.attr("y")!==i.y){var u=t.get("attrs").rotate;u&&t.rotateAtStart(-u),t.attr(i),u&&t.rotateAtStart(u)}},clear:function(){var t=this,e=t.get("customDiv");e&&(e.innerHTML=""),a.superclass.clear.call(t)},setItems:function(t){var e=this;e.clear(),e.set("items",t),e._drawLabels()},remove:function(){var t=this.get("customDiv");t&&t.parentNode.removeChild(t),a.superclass.remove.call(this)}}),t.exports=a},function(t,e,n){"use strict";var i=n(1);t.exports={addEachItem:function(t,e){var n,r=t.addGroup(e),a=i.mix({fill:"#fff",textBaseline:"middle"},e.word),s=e.wordSpaceing||6,o=i.mix({fill:"red",lineWidth:0,radius:2.5},e.marker),u=e.markerAlign||"center",c=e.items,l=0;if(c.marker&&(n=i.mix({},o,c.marker,{x:"center"===u?0:c.marker.radius,y:0}),n.x+=e.x,n.y+=e.y,n.symbol)){var h=r.addShape("marker",{type:"marker",attrs:n});l+=h.getBBox().width+s}return i.each(c.words,function(t){n=i.mix({},a,t,{x:l,y:0}),n.x+=e.x,n.y+=e.y;var o=r.addShape("text",{attrs:n});l+=s+o.getBBox().width}),r}}},function(t,e,n){"use strict";function i(t,e){return t>e?e:t}function r(t,e){return t>e?t:e}var a=n(1),s=function(t,e){this.reset(t,e)};s.CFG={start:null,end:null,background:null},a.augment(s,{init:function(){var t=this.start,e=this.end,n=this.tl={x:i(t.x,e.x),y:i(t.y,e.y)};this.tr={x:r(t.x,e.x),y:i(t.y,e.y)},this.bl={x:i(t.x,e.x),y:r(t.y,e.y)};var a=this.br={x:r(t.x,e.x),y:r(t.y,e.y)};this.cc={x:(a.x-n.x)/2+n.x,y:(a.y-n.y)/2+n.y}},reset:function(t,e){this.start=t,this.end=e,this.init()},isInRange:function(t,e){a.isObject(t)&&(e=t.y,t=t.x);var n=this.tl,i=this.br;return t>=n.x&&t<=i.x&&e>=n.y&&e<=i.y},isInVertical:function(t){a.isObject(t)&&(t=t.y);var e=this.tl,n=this.br;return t>=e.y&&t<=n.y},isInHorizontal:function(t){a.isObject(t)&&(t=t.x);var e=this.tl,n=this.br;return t>=e.x&&t<=n.x},getWidth:function(){var t=this.tl,e=this.br;return e.x-t.x},getHeight:function(){var t=this.tl,e=this.br;return e.y-t.y}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(5).Group,a=function(t){a.superclass.constructor.call(this,t)};a.CFG={range:null,middleAttr:null,backgroundElement:null,minHandleElement:null,maxHandleElement:null,middleHandleElement:null,currentTarget:null,layout:"vertical",width:null,height:null,pageX:null,pageY:null,animate:!1,operable:!0},i.extend(a,r),i.augment(a,{_beforeRenderUI:function(){var t=this.get("layout"),e=this.get("backgroundElement"),n=this.get("minHandleElement"),i=this.get("maxHandleElement"),r=this.addShape("rect",{attrs:this.get("middleAttr")}),a="vertical"===t?"ns-resize":"ew-resize";this.add([e,n,i]),this.set("middleHandleElement",r),e.set("zIndex",0),r.set("zIndex",1),n.set("zIndex",2),i.set("zIndex",2),this.get("operable")&&(r.set("cursor","move"),n.set("cursor",a),i.set("cursor",a)),this.sort()},_renderUI:function(){var t=this.get("layout");"horizontal"===t?this._renderHorizontal():this._renderVertical()},_transform:function(t){var e=this.get("range"),n=e[0]/100,i=e[1]/100,r=this.get("width"),a=this.get("height"),s=this.get("minHandleElement"),o=this.get("maxHandleElement"),u=this.get("middleHandleElement");s.initTransform(),o.initTransform(),"horizontal"===t?(u.attr({x:r*n,y:0,width:(i-n)*r,height:a}),s.translate(n*r,0),o.translate(i*r,0)):(u.attr({x:0,y:a*(1-i),width:r,height:(i-n)*a}),s.translate(r/2,(1-n)*a),o.translate(r/2,(1-i)*a))},_renderHorizontal:function(){this._transform("horizontal")},_renderVertical:function(){this._transform("vertical")},_bindUI:function(){this.get("operable")&&(this.on("mousedown",i.wrapBehavior(this,"_onMouseDown")),this.on("mousemove",i.wrapBehavior(this,"_onMouseMove")),
this.on("mouseleave",i.wrapBehavior(this,"_onMouseLeave")))},_isElement:function(t,e){var n=this.get(e);if(t===n)return!0;if(n.isGroup){var i=n.get("children");return i.indexOf(t)>-1}return!1},_getRange:function(t,e){var n=t+e;return n=n>100?100:n,n=n<0?0:n},_updateStatus:function(t,e){var n,r="x"===t?this.get("width"):this.get("height"),a=i.ucfirst(t),s=this.get("range"),o=this.get("page"+a),u=this.get("currentTarget"),c=this.get("rangeStash"),l=this.get("layout"),h="vertical"===l?-1:1,f=e["page"+a],g=f-o,p=g/r*100*h;s[1]<=s[0]?(this._isElement(u,"minHandleElement")||this._isElement(u,"maxHandleElement"))&&(s[0]=this._getRange(p,s[0]),s[1]=this._getRange(p,s[0])):(this._isElement(u,"minHandleElement")&&(s[0]=this._getRange(p,s[0])),this._isElement(u,"maxHandleElement")&&(s[1]=this._getRange(p,s[1]))),this._isElement(u,"middleHandleElement")&&(n=c[1]-c[0],s[0]=this._getRange(p,s[0]),s[1]=s[0]+n,s[1]>100&&(s[1]=100,s[0]=s[1]-n)),this.fire("rangeChange",{range:s}),this.set("page"+a,f),this._renderUI(),this.get("canvas").draw()},_onMouseLeave:function(){var t=this.get("canvas").get("containerDOM");t.style.cursor="default"},_onMouseMove:function(t){var e=t.currentTarget.get("cursor"),n=this.get("canvas").get("containerDOM");n&&(e?n.style.cursor=e:n.style.cursor="default")},_onMouseDown:function(t){var e=t.currentTarget,n=t.event,i=this.get("range");n.stopPropagation(),n.preventDefault(),this.set("pageX",n.pageX),this.set("pageY",n.pageY),this.set("currentTarget",e),this.set("rangeStash",[i[0],i[1]]),this._bindCanvasEvents()},_bindCanvasEvents:function(){this.onMouseMoveListener=i.addEventListener(document,"mousemove",i.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=i.addEventListener(document,"mouseup",i.wrapBehavior(this,"_onCanvasMouseUp"))},_onCanvasMouseMove:function(t){var e=this.get("layout");"horizontal"===e?this._updateStatus("x",t):this._updateStatus("y",t)},_onCanvasMouseUp:function(){this._removeDocumentEvents()},_removeDocumentEvents:function(){this.onMouseMoveListener.remove(),this.onMouseUpListener.remove()}}),t.exports=a},function(t,e){t.exports={prefix:"g",backupContext:document.createElement("canvas").getContext("2d"),debug:!1,warn:function(){}}},function(t,e,n){var i=n(1),r=n(163),a=n(164),s=n(162),o=n(65),u=n(159),c=["fillStyle","font","globalAlpha","lineCap","lineWidth","lineJoin","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline","lineDash"],l=function(t){this.__cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},i.simpleMix(this.__cfg,this.getDefaultCfg(),t),this.initAttrs(this.__cfg.attrs),this.initTransform(),this.initEventDispatcher(),this.init()};l.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},i.augment(l,r,u,a,s,{init:function(){this.setSilent("animable",!0);var t=this.__attrs;t&&t.rotate&&this.rotateAtStart(t.rotate)},getParent:function(){return this.get("parent")},getDefaultCfg:function(){return{}},set:function(t,e){var n="__set"+i.ucfirst(t);return this[n]&&(e=this[n](e)),this.__cfg[t]=e,this},setSilent:function(t,e){this.__cfg[t]=e},get:function(t){return this.__cfg[t]},draw:function(t){this.get("destroyed")||this.get("visible")&&(this.setContext(t),this.drawInner(t),this.restoreContext(t))},setContext:function(t){var e=this.__attrs.clip;t.save(),e&&(e.resetTransform(t),e.createPath(t),t.clip()),this.resetContext(t),this.resetTransform(t)},restoreContext:function(t){t.restore()},resetContext:function(t){var e=this.__attrs;if(!this.isGroup)for(var n in e)if(c.indexOf(n)>-1){var r=e[n];"fillStyle"===n&&(r=o.parseStyle(r,this)),"strokeStyle"===n&&(r=o.parseStyle(r,this)),"lineDash"===n&&t.setLineDash?i.isArray(r)?t.setLineDash(r):i.isString(r)&&t.setLineDash(r.split(" ")):t[n]=r}},drawInner:function(){},show:function(){return this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},remove:function(t){if(void 0===t&&(t=!0),this.get("parent")){var e=this.get("parent"),n=e.get("children");i.remove(n,this)}return t&&this.destroy(),this},destroy:function(){var t=this.get("destroyed");t||(this.__cfg={},this.__attrs=null,this.__listeners=null,this.__m=null,this.set("destroyed",!0))},__setZIndex:function(t){return this.__cfg.zIndex=t,i.notNull(this.get("parent"))&&this.get("parent").sort(),t},__setAttrs:function(t){return this.attr(t),t},clone:function(){return i.clone(this)},getBBox:function(){return{minX:0,maxX:0,minY:0,maxY:0}}}),t.exports=l},function(t,e,n){function i(t,e){if(void 0===e)return t;t=new l(t),t.multiplyA(e);var n=t.getType();return"hsl"===n?t.getHSLStyle():"rgb"===n?t.getRGBStyle():void 0}function r(t,e,n){var r=t.match(v);u.each(r,function(t){t=t.split(":");var r=i(t[1],n);e.addColorStop(t[0],r)})}function a(t,e,n){var i,a,s=g.exec(t),o=c.mod(c.degreeToRad(parseFloat(s[1])),2*Math.PI),u=s[2],l=e.getBBox();o>=0&&o<.5*Math.PI?(i={x:l.minX,y:l.minY},a={x:l.maxX,y:l.maxY}):.5*Math.PI<=o&&o<Math.PI?(i={x:l.maxX,y:l.minY},a={x:l.minX,y:l.maxY}):Math.PI<=o&&o<1.5*Math.PI?(i={x:l.maxX,y:l.maxY},a={x:l.minX,y:l.minY}):(i={x:l.minX,y:l.maxY},a={x:l.maxX,y:l.minY});var h=Math.tan(o),f=h*h,p=(a.x-i.x+h*(a.y-i.y))/(f+1)+i.x,d=h*(a.x-i.x+h*(a.y-i.y))/(f+1)+i.y,v=e.get("context"),m=v.createLinearGradient(i.x,i.y,p,d);return r(u,m,n),m}function s(t,e,n){var i=p.exec(t),a=parseFloat(i[1]),s=parseFloat(i[2]),o=parseFloat(i[3]),u=i[4],c=e.getBBox(),l=e.get("context"),h=c.maxX-c.minX,f=c.maxY-c.minY,g=Math.sqrt(h*h+f*f)/2,d=l.createRadialGradient(c.minX+h*a,c.minY+f*s,o,c.minX+h/2,c.minY+f/2,g);return r(u,d,n),d}function o(t,e){var n=d.exec(t),i=n[1],r=n[2];switch(i){case"a":i="repeat";break;case"x":i="repeat-x";break;case"y":i="repeat-y";break;case"n":i="no-repeat";break;default:i="no-repeat"}var a=document.getElementById(r),s=e.get("context"),o=s.createPattern(a,i);return o}var u=n(1),c=n(6),l=n(33),h=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,f=/[^\s\,]+/gi,g=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,p=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,d=/^p\s*([axyn])\s+(.*)/i,v=/[\d.]+:(#[^\s]+|[^\)]+\))/gi,m={};t.exports={parsePath:function(t){return t=t||[],u.isArray(t)?t:u.isString(t)?(t=t.match(h),u.each(t,function(e,n){if(e=e.match(f),e[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i}u.each(e,function(t,n){isNaN(t)||(e[n]=+t)}),t[n]=e}),t):void 0},parseStyle:function(t,e,n){if(u.isString(t)){if("("===t[1]||"("===t[2]){if("l"===t[0])return a(t,e,n);if("r"===t[0])return s(t,e,n);if("p"===t[0])return o(t,e)}return u.isNull(n)?t:i(t,n)}},numberToColor:function(t){var e=m[t];if(!e){for(var n=t.toString(16),i=n.length;i<6;i++)n="0"+n;e="#"+n,m[t]=e}return e}}},function(t,e,n){var i=n(63),r={Group:n(161),Shape:n(7),Rect:n(79),Circle:n(68),Ellipse:n(70),Path:n(75),Text:n(80),Line:n(73),Image:n(72),Polygon:n(76),Polyline:n(77),Arc:n(67),Fan:n(71),Cubic:n(69),Quadratic:n(78),Marker:n(74),debug:function(t){i.debug=t}};t.exports=r},function(t,e,n){var i=n(1),r=n(3).Vector2,a=n(7),s=n(8),o=n(42),u=n(19),c=function(t){c.superclass.constructor.call(this,t)};c.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,arrow:!1},i.extend(c,a),i.augment(c,{canStroke:!0,type:"arc",getDefaultAttrs:function(){return{x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,arrow:!1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,i=t.r,r=t.startAngle,a=t.endAngle,s=t.clockwise,u=t.lineWidth,c=u/2,l=o.box(e,n,i,r,a,s);return l.minX-=c,l.minY-=c,l.maxX+=c,l.maxY+=c,l},isPointInPath:function(t,e){var n=this.__attrs,i=n.x,r=n.y,a=n.r,o=n.startAngle,u=n.endAngle,c=n.clockwise,l=n.lineWidth;return!!this.hasStroke()&&s.arcline(i,r,a,o,u,c,l,t,e)},createPath:function(t){var e=this.__attrs,n=e.x,i=e.y,a=e.r,s=e.startAngle,o=e.endAngle,c=e.clockwise,l=e.lineWidth,h=e.arrow;if(t=t||self.get("context"),t.beginPath(),t.arc(n,i,a,s,o,c),h){var f={x:n+a*Math.cos(o),y:i+a*Math.sin(o)},g=new r(-a*Math.sin(o),a*Math.cos(o));c&&g.multiplyScaler(-1),u.makeArrow(t,g,f,l)}}}),t.exports=c},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=function(t){s.superclass.constructor.call(this,t)};s.ATTRS={x:0,y:0,r:0,lineWidth:1},i.extend(s,r),i.augment(s,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,i=t.r,r=t.lineWidth,a=r/2+i;return{minX:e-a,minY:n-a,maxX:e+a,maxY:n+a}},isPointInPath:function(t,e){var n=this.hasFill(),i=this.hasStroke();return n&&i?this.__isPointInFill(t,e)||this.__isPointInStroke(t,e):n?this.__isPointInFill(t,e):!!i&&this.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this.__attrs,i=n.x,r=n.y,s=n.r;return a.circle(i,r,s,t,e)},__isPointInStroke:function(t,e){var n=this.__attrs,i=n.x,r=n.y,s=n.r,o=n.lineWidth;return a.arcline(i,r,s,0,2*Math.PI,!1,o,t,e)},createPath:function(t){var e=this.__attrs,n=e.x,i=e.y,r=e.r;t=t||self.get("context"),t.beginPath(),t.arc(n,i,r,0,2*Math.PI,!1)}}),t.exports=s},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(19),o=n(32),u=n(3).Vector2,c=function(t){c.superclass.constructor.call(this,t)};c.ATTRS={p1:null,p2:null,p3:null,p4:null,lineWidth:1,arrow:!1},i.extend(c,r),i.augment(c,{canStroke:!0,type:"cubic",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t,e,n=this.__attrs,r=n.p1,a=n.p2,s=n.p3,u=n.p4;if(i.isNull(r)||i.isNull(a)||i.isNull(s)||i.isNull(u))return null;var c=n.lineWidth/2,l=o.extrema(r[0],a[0],s[0],u[0]);for(t=0,e=l.length;t<e;t++)l[t]=o.at(r[0],a[0],s[0],u[0],l[t]);var h=o.extrema(r[1],a[1],s[1],u[1]);for(t=0,e=h.length;t<e;t++)h[t]=o.at(r[1],a[1],s[1],u[1],h[t]);return l.push(r[0],u[0]),h.push(r[1],u[1]),{minX:Math.min.apply(Math,l)-c,maxX:Math.max.apply(Math,l)+c,minY:Math.min.apply(Math,h)-c,maxY:Math.max.apply(Math,h)+c}},isPointInPath:function(t,e){var n=this.__attrs,i=n.p1,r=n.p2,s=n.p3,o=n.p4,u=n.lineWidth;return a.cubicline(i[0],i[1],r[0],r[1],s[0],s[1],o[0],o[1],u,t,e)},createPath:function(t){var e=this.__attrs,n=e.p1,r=e.p2,a=e.p3,o=e.p4,c=e.lineWidth,l=e.arrow;if(t=t||self.get("context"),!(i.isNull(n)||i.isNull(r)||i.isNull(a)||i.isNull(o)))if(t.beginPath(),t.moveTo(n[0],n[1]),l){var h=new u(o[0]-a[0],o[1]-a[1]),f=s.getEndPoint(h,new u(o[0],o[1]),c);t.bezierCurveTo(r[0],r[1],a[0],a[1],f.x,f.y),s.makeArrow(t,h,f,c)}else t.bezierCurveTo(r[0],r[1],a[0],a[1],o[0],o[1])},getPoint:function(t){var e=this.__attrs;return{x:o.at(e.p4[0],e.p3[0],e.p2[0],e.p1[0],t),y:o.at(e.p4[1],e.p3[1],e.p2[1],e.p1[1],t)}}}),t.exports=c},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(3),o=s.Matrix3,u=s.Vector3,c=function(t){c.superclass.constructor.call(this,t)};c.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},i.extend(c,r),i.augment(c,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,i=t.rx,r=t.ry,a=t.lineWidth,s=i+a/2,o=r+a/2;return{minX:e-s,minY:n-o,maxX:e+s,maxY:n+o}},isPointInPath:function(t,e){var n=this.hasFill(),i=this.hasStroke();return n&&i?this.__isPointInFill(t,e)||this.__isPointInStroke(t,e):n?this.__isPointInFill(t,e):!!i&&this.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this.__attrs,i=n.x,r=n.y,s=n.rx,c=n.ry,l=s>c?s:c,h=s>c?1:s/c,f=s>c?c/s:1,g=new u(t,e,1),p=new o;p.scale(h,f),p.translate(i,r);var d=p.getInverse();return g.applyMatrix(d),a.circle(0,0,l,g.x,g.y)},__isPointInStroke:function(t,e){var n=this.__attrs,i=n.x,r=n.y,s=n.rx,c=n.ry,l=n.lineWidth,h=s>c?s:c,f=s>c?1:s/c,g=s>c?c/s:1,p=new u(t,e,1),d=new o;d.scale(f,g),d.translate(i,r);var v=d.getInverse();return p.applyMatrix(v),a.arcline(0,0,h,0,2*Math.PI,!1,l,p.x,p.y)},createPath:function(t){var e=this.__attrs,n=e.x,i=e.y,r=e.rx,a=e.ry;t=t||self.get("context");var s=r>a?r:a,u=r>a?1:r/a,c=r>a?a/r:1,l=new o;l.scale(u,c),l.translate(n,i);var h=l.to2DObject();t.beginPath(),t.save(),t.transform(h.a,h.b,h.c,h.d,h.e,h.f),t.arc(0,0,s,0,2*Math.PI),t.restore(),t.closePath()}}),t.exports=c},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(6),o=n(42),u=n(3),c=u.Vector2,l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},i.extend(l,r),i.augment(l,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function(){return{clockwise:!1,lineWidth:1,rs:0,re:0}},calculateBox:function(){var t=this,e=t.__attrs,n=e.x,i=e.y,r=e.rs,a=e.re,s=e.startAngle,u=e.endAngle,c=e.clockwise,l=e.lineWidth,h=o.box(n,i,r,s,u,c),f=o.box(n,i,a,s,u,c),g=Math.min(h.minX,f.minX),p=Math.min(h.minY,f.minY),d=Math.max(h.maxX,f.maxX),v=Math.max(h.maxY,f.maxY),m=l/2;return{minX:g-m,minY:p-m,maxX:d+m,maxY:v+m}},isPointInPath:function(t,e){var n=this.hasFill(),i=this.hasStroke();return n&&i?this.__isPointInFill(t,e)||this.__isPointInStroke(t,e):n?this.__isPointInFill(t,e):!!i&&this.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this.__attrs,i=n.x,r=n.y,a=n.rs,u=n.re,l=n.startAngle,h=n.endAngle,f=n.clockwise,g=new c(1,0),p=new c(t-i,e-r),d=g.angleTo(p),v=o.nearAngle(d,l,h,f);if(s.equal(d,v)){var m=p.lengthSq();if(a*a<=m&&m<=u*u)return!0}return!1},__isPointInStroke:function(t,e){var n=this.__attrs,i=n.x,r=n.y,s=n.rs,o=n.re,u=n.startAngle,c=n.endAngle,l=n.clockwise,h=n.lineWidth,f={x:Math.cos(u)*s+i,y:Math.sin(u)*s+r},g={x:Math.cos(u)*o+i,y:Math.sin(u)*o+r},p={x:Math.cos(c)*s+i,y:Math.sin(c)*s+r},d={x:Math.cos(c)*o+i,y:Math.sin(c)*o+r};return!!a.line(f.x,f.y,g.x,g.y,h,t,e)||(!!a.line(p.x,p.y,d.x,d.y,h,t,e)||(!!a.arcline(i,r,s,u,c,l,h,t,e)||!!a.arcline(i,r,o,u,c,l,h,t,e)))},createPath:function(t){var e=this.__attrs,n=e.x,i=e.y,r=e.rs,a=e.re,s=e.startAngle,o=e.endAngle,u=e.clockwise,c={x:Math.cos(s)*r+n,y:Math.sin(s)*r+i},l={x:Math.cos(s)*a+n,y:Math.sin(s)*a+i},h={x:Math.cos(o)*r+n,y:Math.sin(o)*r+i};t=t||self.get("context"),t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(l.x,l.y),t.arc(n,i,a,s,o,u),t.lineTo(h.x,h.y),t.arc(n,i,r,o,s,!u),t.closePath()}}),t.exports=l},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=function(t){s.superclass.constructor.call(this,t)};s.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},i.extend(s,r),i.augment(s,{type:"image",__afterSetAttrImg:function(t){this.__setAttrImg(t)},__afterSetAttrAll:function(t){t.img&&this.__setAttrImg(t.img)},isHitBox:function(){return!1},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,i=t.width,r=t.height;return{minX:e,minY:n,maxX:e+i,maxY:n+r}},isPointInPath:function(t,e){var n=this.__attrs;if(this.get("toDraw")||!n.img)return!1;var i=n.x,r=n.y,s=n.width,o=n.height;return a.rect(i,r,s,o,t,e)},__setLoading:function(t){var e=this.get("canvas");return t===!1&&this.get("toDraw")===!0&&(this.__cfg.loading=!1,e.draw()),t},__setAttrImg:function(t){var e=this,n=e.__attrs;if(!i.isString(t))return t instanceof Image?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):t instanceof HTMLElement&&i.isString(t.nodeName)&&"CANVAS"===t.nodeName.toUpperCase()?(n.width||e.attr("width",Number(t.getAttribute("width"))),n.height||e.attr("height",Number(t.getAttribute("height"))),t):t instanceof ImageData?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):null;var r=new Image;r.onload=function(){if(e.get("destroyed"))return!1;e.attr("imgSrc",t),e.attr("img",r);var n=e.get("callback");n&&n.call(e),e.set("loading",!1)},r.src=t,e.set("loading",!0)},drawInner:function(t){return this.get("loading")?void this.set("toDraw",!0):void this.__drawImage(t)},__drawImage:function(t){var e=this.__attrs,n=e.x,r=e.y,a=e.img,s=e.width,o=e.height,u=e.sx,c=e.sy,l=e.swidth,h=e.sheight;if(this.set("toDraw",!1),a instanceof Image||a instanceof HTMLElement&&i.isString(a.nodeName)&&"CANVAS"===a.nodeName.toUpperCase()){if(i.isNull(u)||i.isNull(c)||i.isNull(l)||i.isNull(h))return void t.drawImage(a,n,r,s,o);if(i.notNull(u)&&i.notNull(c)&&i.notNull(l)&&i.notNull(h))return void t.drawImage(a,u,c,l,h,n,r,s,o)}else if(a instanceof ImageData)return void t.putImageData(a,n,r,u||0,c||0,l||s,h||o)}}),t.exports=s},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(19),o=n(43),u=n(3),c=u.Vector2,l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,arrow:!1},i.extend(l,r),i.augment(l,{canStroke:!0,type:"line",getDefaultAttrs:function(){return{lineWidth:1,arrow:!1}},calculateBox:function(){var t=this.__attrs,e=t.x1,n=t.y1,i=t.x2,r=t.y2,a=t.lineWidth;return o.box(e,n,i,r,a)},isPointInPath:function(t,e){var n=this.__attrs,i=n.x1,r=n.y1,s=n.x2,o=n.y2,u=n.lineWidth;return!!this.hasStroke()&&a.line(i,r,s,o,u,t,e)},createPath:function(t){var e=this.__attrs,n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.arrow,u=e.lineWidth;if(t=t||self.get("context"),t.beginPath(),t.moveTo(n,i),o){var l=new c(r-n,a-i),h=s.getEndPoint(l,new c(r,a),u);t.lineTo(h.x,h.y),s.makeArrow(t,l,h,u)}else t.lineTo(r,a)},getPoint:function(t){var e=this.__attrs;return{x:o.at(e.x1,e.x2,t),y:o.at(e.y1,e.y2,t)}}}),t.exports=l},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=function(t){s.superclass.constructor.call(this,t)};s.Symbols={circle:function(t,e,n,i){i.arc(t,e,n,0,2*Math.PI,!1)},square:function(t,e,n,i){i.moveTo(t-n,e-n),i.lineTo(t+n,e-n),i.lineTo(t+n,e+n),i.lineTo(t-n,e+n),i.closePath()},diamond:function(t,e,n,i){i.moveTo(t-n,e),i.lineTo(t,e-n),i.lineTo(t+n,e),i.lineTo(t,e+n),i.closePath()},triangle:function(t,e,n,i){var r=n/.966,a=n;i.moveTo(t,e-n),i.lineTo(t+r,e+a),i.lineTo(t-r,e+a),i.closePath()},"triangle-down":function(t,e,n,i){var r=n/.966,a=n;i.moveTo(t,e+n),i.lineTo(t+r,e-a),i.lineTo(t-r,e-a),i.closePath()}},s.ATTRS={path:null,lineWidth:1},i.extend(s,r),i.augment(s,{type:"marker",canFill:!0,canStroke:!0,getDefaultAttrs:function(){return{x:0,y:0,lineWidth:1}},calculateBox:function(){var t=this.__attrs,e=t.x,n=t.y,i=t.radius,r=t.lineWidth,a=r/2+i;return{minX:e-a,minY:n-a,maxX:e+a,maxY:n+a}},isPointInPath:function(t,e){var n=this.__attrs,i=n.x,r=n.y,s=n.radius;return a.circle(i,r,s,t,e)},createPath:function(t){var e,n=this.__attrs,r=n.x,a=n.y,o=n.radius,u=n.symbol||"circle";e=i.isFunction(u)?u:s.Symbols[u],t.beginPath(),e(r,a,o,t)}}),t.exports=s},function(t,e,n){var i=n(1),r=n(7),a=n(167),s=n(65),o=n(19),u=n(49),c=n(32),l=n(3),h=l.Vector2,f=function(t){f.superclass.constructor.call(this,t)};f.ATTRS={path:null,lineWidth:1,curve:null,tCache:null},i.extend(f,r),i.augment(f,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function(){return{lineWidth:1}},__afterSetAttrPath:function(t){var e=this;if(i.isNull(t))return e.setSilent("segments",null),void e.setSilent("box",void 0);var n,r=s.parsePath(t),o=[];if(i.isArray(r)&&0!==r.length&&("M"===r[0][0]||"m"===r[0][0])){for(var u=r.length,c=0;c<r.length;c++){var l=r[c];n=new a(l,n,c===u-1),o.push(n)}e.setSilent("segments",o),e.set("tCache",null),this.setSilent("box",null)}},__afterSetAttrAll:function(t){t.path&&this.__afterSetAttrPath(t.path)},calculateBox:function(){var t=this,e=t.__attrs,n=e.lineWidth,r=e.lineAppendWidth||0,a=t.get("segments");if(!a)return null;n+=r;var s=1/0,o=-(1/0),u=1/0,c=-(1/0);return i.each(a,function(t){t.getBBox(n);var e=t.box;e&&(e.minX<s&&(s=e.minX),e.maxX>o&&(o=e.maxX),e.minY<u&&(u=e.minY),e.maxY>c&&(c=e.maxY))}),{minX:s,minY:u,maxX:o,maxY:c}},isPointInPath:function(t,e){var n=this,i=n.hasFill(),r=n.hasStroke();return i&&r?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):i?n.__isPointInFill(t,e):!!r&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,i=n.get("context");if(i)return n.createPath(),i.isPointInPath(t,e)},__isPointInStroke:function(t,e){var n=this,i=n.get("segments"),r=n.__attrs,a=r.lineWidth,s=r.lineAppendWidth||0;a+=s;for(var o=0,u=i.length;o<u;o++)if(i[o].isInside(t,e,a))return!0;return!1},__setTcache:function(){var t,e,n,r,a=0,s=0,o=[],u=this.curve;u&&(i.each(u,function(t,e){n=u[e+1],r=t.length,n&&(a+=c.len(t[r-2],t[r-1],n[1],n[2],n[3],n[4],n[5],n[6]))}),i.each(u,function(i,l){n=u[l+1],r=i.length,n&&(t=[],t[0]=s/a,e=c.len(i[r-2],i[r-1],n[1],n[2],n[3],n[4],n[5],n[6]),s+=e,t[1]=s/a,o.push(t))}),this.tCache=o)},__calculateCurve:function(){var t=this,e=t.__attrs,n=e.path;this.curve=u.toCurve(n)},getPoint:function(t){var e,n,r,a,s,o,u=this.tCache;return u||(this.__calculateCurve(),this.__setTcache(),u=this.tCache),e=this.curve,u?(i.each(u,function(e,i){t>=e[0]&&t<=e[1]&&(n=(t-e[0])/(e[1]-e[0]),r=i)}),a=e[r],i.isNull(a)||i.isNull(r)?null:(s=a.length,o=e[r+1],{x:c.at(a[s-2],o[1],o[3],o[5],1-n),y:c.at(a[s-1],o[2],o[4],o[6],1-n)})):e?{x:e[0][1],y:e[0][2]}:null},createPath:function(t){var e=this,n=e.__attrs,r=e.get("segments"),a=n.lineWidth,s=n.arrow;if(i.isArray(r)){t=t||e.get("context"),t.beginPath();for(var u=0,c=r.length;u<c;u++)if(u===c-1&&s){var l=r[u],f=r[u].endTangent,g={x:l.params[l.params.length-1].x,y:l.params[l.params.length-1].y};if(l&&i.isFunction(f)){var p=f(),d=o.getEndPoint(p,new h(g.x,g.y),a);l.params[l.params.length-1]=d,r[u].draw(t),o.makeArrow(t,p,d,a),l.params[l.params.length-1]=g}}else r[u].draw(t)}}}),t.exports=f},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=function(t){s.superclass.constructor.call(this,t)};s.ATTRS={points:null,lineWidth:1},i.extend(s,r),i.augment(s,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function(){return{lineWidth:1}},calculateBox:function(){var t=this,e=t.__attrs,n=e.points,r=e.lineWidth;if(!n||0===n.length)return null;var a=1/0,s=1/0,o=-(1/0),u=-(1/0);i.each(n,function(t){var e=t[0],n=t[1];e<a&&(a=e),e>o&&(o=e),n<s&&(s=n),n>u&&(u=n)});var c=r/2;return{minX:a-c,minY:s-c,maxX:o+c,maxY:u+c}},isPointInPath:function(t,e){var n=this,i=n.hasFill(),r=n.hasStroke();return i&&r?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):i?n.__isPointInFill(t,e):!!r&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this,i=n.get("context");return n.createPath(),i.isPointInPath(t,e)},__isPointInStroke:function(t,e){var n=this,i=n.__attrs,r=i.points;if(r.length<2)return!1;var s=i.lineWidth,o=r.slice(0);return r.length>=3&&o.push(r[0]),a.polyline(o,s,t,e)},createPath:function(t){var e=this,n=e.__attrs,r=n.points;r.length<2||(t=t||e.get("context"),t.beginPath(),i.each(r,function(e,n){0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1])}),t.closePath())}}),t.exports=s},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(19),o=n(43),u=n(3),c=u.Vector2,l=function(t){l.superclass.constructor.call(this,t)};l.ATTRS={points:null,lineWidth:1,arrow:!1,tCache:null},i.extend(l,r),i.augment(l,{canStroke:!0,type:"polyline",tCache:null,getDefaultAttrs:function(){return{lineWidth:1,arrow:!1}},calculateBox:function(){var t=this,e=t.__attrs,n=e.lineWidth,r=e.points;if(!r||0===r.length)return null;var a=1/0,s=1/0,o=-(1/0),u=-(1/0);i.each(r,function(t){var e=t[0],n=t[1];e<a&&(a=e),e>o&&(o=e),n<s&&(s=n),n>u&&(u=n)});var c=n/2;return{minX:a-c,minY:s-c,maxX:o+c,maxY:u+c}},__setTcache:function(){var t,e,n=this,r=n.__attrs,a=r.points,s=0,u=0,c=[];a&&0!==a.length&&(i.each(a,function(t,e){a[e+1]&&(s+=o.len(t[0],t[1],a[e+1][0],a[e+1][1]))}),s<=0||(i.each(a,function(n,i){a[i+1]&&(t=[],t[0]=u/s,e=o.len(n[0],n[1],a[i+1][0],a[i+1][1]),u+=e,t[1]=u/s,c.push(t))}),this.tCache=c))},isPointInPath:function(t,e){var n=this,i=n.__attrs;if(n.hasStroke()){var r=i.points;if(r.length<2)return!1;var s=i.lineWidth;return a.polyline(r,s,t,e)}return!1},createPath:function(t){var e,n,i=this,r=i.__attrs,a=r.points,o=r.arrow,u=r.lineWidth;if(!(a.length<2)){for(t=t||i.get("context"),t.beginPath(),t.moveTo(a[0][0],a[0][1]),n=1,e=a.length-1;n<e;n++)t.lineTo(a[n][0],a[n][1]);if(o){var l=new c(a[e][0]-a[e-1][0],a[e][1]-a[e-1][1]),h=s.getEndPoint(l,new c(a[e][0],a[e][1]),u);t.lineTo(h.x,h.y),s.makeArrow(t,l,h,u)}else t.lineTo(a[e][0],a[e][1])}},getPoint:function(t){var e,n,r=this.__attrs,a=r.points,s=this.tCache;return s||(this.__setTcache(),s=this.tCache),i.each(s,function(i,r){t>=i[0]&&t<=i[1]&&(e=(t-i[0])/(i[1]-i[0]),n=r)}),{x:o.at(a[n][0],a[n+1][0],e),y:o.at(a[n][1],a[n+1][1],e)}}}),t.exports=l},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(19),o=n(44),u=n(3).Vector2,c=function(t){c.superclass.constructor.call(this,t)};c.ATTRS={p1:null,p2:null,p3:null,lineWidth:1,arrow:!1},i.extend(c,r),i.augment(c,{canStroke:!0,type:"quadratic",getDefaultAttrs:function(){return{lineWidth:1,arrow:!1}},calculateBox:function(){var t,e,n=this,r=n.__attrs,a=r.p1,s=r.p2,u=r.p3;if(i.isNull(a)||i.isNull(s)||i.isNull(u))return null;var c=r.lineWidth/2,l=o.extrema(a[0],s[0],u[0]);for(t=0,e=l.length;t<e;t++)l[t]=o.at(a[0],s[0],u[0],l[t]);l.push(a[0],u[0]);var h=o.extrema(a[1],s[1],u[1]);for(t=0,e=h.length;t<e;t++)h[t]=o.at(a[1],s[1],u[1],h[t]);return h.push(a[1],u[1]),{minX:Math.min.apply(Math,l)-c,maxX:Math.max.apply(Math,l)+c,minY:Math.min.apply(Math,h)-c,maxY:Math.max.apply(Math,h)+c}},isPointInPath:function(t,e){var n=this,i=n.__attrs,r=i.p1,s=i.p2,o=i.p3,u=i.lineWidth;return a.quadraticline(r[0],r[1],s[0],s[1],o[0],o[1],u,t,e)},createPath:function(t){var e=this,n=e.__attrs,r=n.p1,a=n.p2,o=n.p3,c=n.lineWidth,l=n.arrow;if(!(i.isNull(r)||i.isNull(a)||i.isNull(o)))if(t=t||e.get("context"),t.beginPath(),t.moveTo(r[0],r[1]),l){var h=new u(o[0]-a[0],o[1]-a[1]),f=s.getEndPoint(h,new u(o[0],o[1]),c);t.quadraticCurveTo(a[0],a[1],f.x,f.y),s.makeArrow(t,h,f,c)}else t.quadraticCurveTo(a[0],a[1],o[0],o[1])},getPoint:function(t){var e=this.__attrs;return{x:o.at(e.p1[0],e.p2[0],e.p3[0],t),y:o.at(e.p1[1],e.p2[1],e.p3[1],t)}}}),t.exports=c},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=function(t){s.superclass.constructor.call(this,t)};s.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},i.extend(s,r),i.augment(s,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function(){return{lineWidth:1,radius:0}},calculateBox:function(){var t=this,e=t.__attrs,n=e.x,i=e.y,r=e.width,a=e.height,s=e.lineWidth,o=s/2;return{minX:n-o,minY:i-o,maxX:n+r+o,maxY:i+a+o}},isPointInPath:function(t,e){var n=this,i=n.hasFill(),r=n.hasStroke();return i&&r?n.__isPointInFill(t,e)||n.__isPointInStroke(t,e):i?n.__isPointInFill(t,e):!!r&&n.__isPointInStroke(t,e)},__isPointInFill:function(t,e){var n=this.get("context");return!!n&&(this.createPath(),n.isPointInPath(t,e))},__isPointInStroke:function(t,e){var n=this,i=n.__attrs,r=i.x,s=i.y,o=i.width,u=i.height,c=i.radius,l=i.lineWidth;if(0===c){var h=l/2;return a.line(r-h,s,r+o+h,s,l,t,e)||a.line(r+o,s-h,r+o,s+u+h,l,t,e)||a.line(r+o+h,s+u,r-h,s+u,l,t,e)||a.line(r,s+u+h,r,s-h,l,t,e)}return a.line(r+c,s,r+o-c,s,l,t,e)||a.line(r+o,s+c,r+o,s+u-c,l,t,e)||a.line(r+o-c,s+u,r+c,s+u,l,t,e)||a.line(r,s+u-c,r,s+c,l,t,e)||a.arcline(r+o-c,s+c,c,1.5*Math.PI,2*Math.PI,!1,l,t,e)||a.arcline(r+o-c,s+u-c,c,0,.5*Math.PI,!1,l,t,e)||a.arcline(r+c,s+u-c,c,.5*Math.PI,Math.PI,!1,l,t,e)||a.arcline(r+c,s+c,c,Math.PI,1.5*Math.PI,!1,l,t,e)},createPath:function(t){var e=this,n=e.__attrs,i=n.x,r=n.y,a=n.width,s=n.height,o=n.radius;t=t||e.get("context"),t.beginPath(),0===o?t.rect(i,r,a,s):(t.moveTo(i+o,r),t.lineTo(i+a-o,r),t.arc(i+a-o,r+o,o,-Math.PI/2,0,!1),t.lineTo(i+a,r+s-o),t.arc(i+a-o,r+s-o,o,0,Math.PI/2,!1),t.lineTo(i+o,r+s),t.arc(i+o,r+s-o,o,Math.PI/2,Math.PI,!1),t.lineTo(i,r+o),t.arc(i+o,r+o,o,Math.PI,3*Math.PI/2,!1),t.closePath())}}),t.exports=s},function(t,e,n){var i=n(1),r=n(7),a=n(8),s=n(63),o=function(t){o.superclass.constructor.call(this,t)};o.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},i.extend(o,r),i.augment(o,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function(){return{lineWidth:1,lineCount:1,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"}},__assembleFont:function(){var t=this.__attrs,e=t.fontSize,n=t.fontFamily,i=t.fontWeight,r=t.fontStyle,a=t.fontVariant;t.font=[r,a,i,e+"px",n].join(" ")},__afterSetAttrFontSize:function(){this.__assembleFont()},__afterSetAttrFontFamily:function(){this.__assembleFont()},__afterSetAttrFontWeight:function(){this.__assembleFont()},__afterSetAttrFontStyle:function(){this.__assembleFont()},__afterSetAttrFontVariant:function(){this.__assembleFont()},__afterSetAttrFont:function(){},__afterSetAttrText:function(){var t,e=this.__attrs,n=e.text;if(i.isString(n)&&n.indexOf("\n")!==-1){t=n.split("\n");var r=t.length;e.lineCount=r,e.textArr=t}},__getTextHeight:function(){var t=this.__attrs,e=t.lineCount,n=1*t.fontSize;if(e>1){var i=this.__getSpaceingY();return n*e+i*(e-1)}return n},__afterSetAttrAll:function(t){var e=this;("fontSize"in t||"fontWeight"in t||"fontStyle"in t||"fontVariant"in t||"fontFamily"in t)&&e.__assembleFont(),"text"in t&&e.__afterSetAttrText(t.text)},isHitBox:function(){return!1},calculateBox:function(){var t=this,e=t.__attrs,n=e.x,i=e.y,r=t.measureText();if(!r)return{minX:n,minY:i,maxX:n,maxY:i};var a=t.__getTextHeight(),s=e.textAlign,o=e.textBaseline,u=e.lineWidth,c={x:n,y:i-a};s&&("end"===s||"right"===s?c.x-=r:"center"===s&&(c.x-=r/2)),o&&("top"===o?c.y+=a:"middle"===o&&(c.y+=a/2)),this.set("startPoint",c);var l=u/2;return{minX:c.x-l,minY:c.y-l,maxX:c.x+r+l,maxY:c.y+a+l}},__getSpaceingY:function(){var t=this.__attrs,e=t.lineHeight,n=1*t.fontSize;return e?e-n:.14*n},isPointInPath:function(t,e){var n=this,i=n.getBBox();if(n.hasFill()||n.hasStroke())return a.box(i.minX,i.maxX,i.minY,i.maxY,t,e)},drawInner:function(t){var e=this,n=e.__attrs,r=n.text;if(r){var a,s=n.textArr,o=1*n.fontSize,u=e.__getSpaceingY(),c=n.x,l=n.y,h=n.textBaseline;if(s){var f=e.getBBox();a=f.maxY-f.minY}var g;if(t.beginPath(),e.hasFill()){var p=n.fillOpacity;i.isNull(p)||1===p||(t.globalAlpha=p),s?i.each(s,function(e,n){g=l+n*(u+o)-a+o,"middle"===h&&(g+=a-o-(a-o)/2),"top"===h&&(g+=a-o),t.fillText(e,c,g)}):t.fillText(r,c,l)}e.hasStroke()&&(s?i.each(s,function(e,n){g=l+n*(u+o)-a+o,"middle"===h&&(g+=a-o-(a-o)/2),"top"===h&&(g+=a-o),t.strokeText(e,c,g)}):t.strokeText(r,c,l))}},measureText:function(){var t,e=this,n=e.__attrs,r=n.text,a=n.font,o=n.textArr,u=0;if(!i.isNull(r)){var c=s.backupContext;return c.save(),c.font=a,o?i.each(o,function(e){t=c.measureText(e).width,u<t&&(u=t),c.restore()}):(u=c.measureText(r).width,c.restore()),u}}}),t.exports=o},function(t,e,n){var i=n(1),r=n(169),a=n(168),s=n(49);i.mix(i,a,{mixin:function(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};i.each(e,function(e){i.augment(t,e);var a=e[n];a&&i.mix(r,a)}),t[n]=i.mix(r,t[n])}},isPositiveNum:function(t){var e=/^[0-9]*[1-9][0-9]*$/;return e.test(t)},getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:2},getWidth:function(t){var e=i.getStyle(t,"width");return"auto"===e&&(e=t.offsetWidth),parseFloat(e)},getHeight:function(t){var e=i.getStyle(t,"height");return"auto"===e&&(e=t.offsetHeight),parseFloat(e)},getOuterHeight:function(t){var e=i.getHeight(t),n=parseFloat(i.getStyle(t,"borderTopWidth"))||0,r=parseFloat(i.getStyle(t,"paddingTop")),a=parseFloat(i.getStyle(t,"paddingBottom")),s=parseFloat(i.getStyle(t,"borderBottomWidth"))||0;return e+n+s+r+a},parsePathString:s.toArray,path2string:s.toString,path2curve:s.toCurve,pathToAbsolute:s.toAbsolute,catmullRom2bezier:s.catmullRomToBezier,parsePathArray:function(t){return i.path2string(t)},path2Absolute:function(t){return i.pathToAbsolute(t)}}),i.MatrixUtil=r,t.exports=i},function(t,e,n){"use strict";var i=n(26),r=n(83),a=n(45),s=n(180),o=n(179),u=n(34),c=n(181),l=n(175),h=n(176),f=n(177),g=n(178);i.Cartesian=r,i.Rect=r,i.Polar=a,i.Theta=s,i.Rho=o,i.Plus=u,i.TriAngle=c,i.Clock=l,i.Gauge=h,i.Helix=f,i.Map=g,t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(26),a=function(t){var e={};i.mix(e,a.ATTRS,t),a.superclass.constructor.call(this,e),this._init()};a.ATTRS={start:{x:0,y:0},end:{x:0,y:0}},i.extend(a,r),i.augment(a,{type:"cartesian",isRect:!0,_init:function(){var t=this,e=t.get("start"),n=t.get("end"),i={start:e.x,end:n.x},r={start:e.y,end:n.y};t.set("x",i),t.set("y",r)},convertPoint:function(t){var e=this,n=e.isTransposed?t.y:t.x,i=e.isTransposed?t.x:t.y;return{x:this.convertDim(n,"x"),y:this.convertDim(i,"y")}},invertPoint:function(t){var e=this,n=this.invertDim(t.x,"x"),i=this.invertDim(t.y,"y"),r={};return r.x=e.isTransposed?i:n,r.y=e.isTransposed?n:i,r}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(85),a=n(2),s=n(27),o=function(t){
o.superclass.constructor.call(this,t)};i.extend(o,r),i.augment(o,{dims:[],cols:5,rows:null,drawTitles:function(t,e){var n=this,r=n.dims;i.each(t,function(t){n.drawFacetTitle("col",t,e)}),n.drawDimTitle("col",r[0],e)},getRegion:function(t,e,n,i){var r=this,a=r.plotRange,s=r.margin,o=a.tl,u=a.br,c=(u.x-o.x)/e,l=(u.y-o.y)/t,h={x:o.x+c*n,y:o.y+l*(i+1)-s},f={x:h.x+c-s,y:h.y-l+s};return{start:h,end:f}},generateFacets:function(t){var e=this,n=e.dims,r=n[0];if(!r)throw new Error("Please specify for the field for facet!");var o=e.getDimValues(r,t),u=o.length,c=e.cols,l=parseInt((u+c-1)/c,10),h=[],f=0;return i.each(o,function(n,i){var g=parseInt(i/c,10),p=i%c,d=[{dim:r,value:n,values:o}],v=e.getFilter(d),m=a.filter(t,v),x=new s({type:e.type,count:u,xValue:n,xDim:r,yValue:n,yDim:r,colIndex:p,rowIndex:g,cols:c,rows:l,frame:m,region:e.getRegion(l,c,p,g),index:f++});h.push(x)}),h}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(35),s=n(27),o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,a),i.augment(o,{dims:[],defs:{},type:"rect",plotRange:null,drawTitles:function(t,e){if(!(t.length<=1)){var n=this,r=t[0];i.each(t,function(t){t.cols>0&&t.rowIndex===t.rows-1&&n.drawFacetTitle("col",t,e),t.rows>0&&t.colIndex===t.cols-1&&n.drawFacetTitle("row",t,e)}),r&&(r.cols>1&&n.drawDimTitle("col",r.xDim,e),r.rows>1&&n.drawDimTitle("row",r.yDim,e))}},getRegion:function(t,e,n,i){var r=this,a=r.plotRange,s=1===t&&1===e?0:r.margin,o=a.bl,u=a.tr,c=(u.x-o.x)/e,l=(u.y-o.y)/t,h={x:o.x+c*n,y:o.y+l*i-s},f={x:h.x+c-s,y:h.y+l+s};return{start:h,end:f}},generateFacets:function(t){var e=this,n=e.dims,a=[],o=1,u=1,c=n[0],l=n[1],h=[""],f=[""];c&&(h=e.getDimValues(c,t),u=h.length),l&&(f=e.getDimValues(l,t),o=f.length);var g=0;return i.each(h,function(n,p){i.each(f,function(i,d){var v=[{dim:c,value:n,values:h},{dim:l,value:i,values:f}],m=e.getFilter(v),x=r.filter(t,m),y=new s({type:e.type,xValue:n,yValue:i,xDim:c,yDim:l,colIndex:p,rowIndex:d,cols:u,rows:o,frame:x,region:e.getRegion(o,u,p,d),index:g++});a.push(y)})}),a}}),t.exports=o},function(t,e,n){var i=n(20);n(87),t.exports=i},function(t,e,n){var i=n(1),r=n(88),a=n(20);i.mix(a,{values:function(t,e){var n=[],i={},a=t.colArray(e);a=r.formatArray(a);for(var s=0,o=a.length;s<o;s++){var u=a[s];i[u]||void 0===u||(i[u]=!0,n.push(u))}return n},group:function(t,e){if(!e)return[t];var n=a.groupToMap(t,e),i=[];for(var r in n)n.hasOwnProperty(r)&&i.push(n[r]);return i},groupToMap:function(t,e){var n=t.colNames(),r={};if(!e)return{0:t};if(!i.isFunction(e)){var s=i.isArray(e)?e:e.replace(/\s+/g,"").split("*");e=function(t){for(var e="",n=0,i=s.length;n<i;n++)e+=t[s[n]].toString();return e}}t.each(function(t){var n=e(t);r[n]?r[n].push(t):r[n]=[t]});for(var o in r)r.hasOwnProperty(o)&&(r[o]=new a(r[o],{names:n.slice(0)}));return r},merge:function(){for(var t=i.toArray(arguments),e=t[0],n=e.colNames(),r=e.colCount(),s=[],o=0;o<r;o++){s[o]=[];for(var u=0;u<t.length;u++){var c=t[u].colArray(o);s[o]=s[o].concat(c)}}return new a(s,{names:n})},sort:function(t,e){var n=function(t,n){return t[e]-n[e]};return r.sort(t,n)}}),t.exports=a},function(t,e,n){function i(t){return function(e,n){var i=t(e,n);return 0===i?e[s]-n[s]:i}}var r=n(1),a=n(20),s="_INDEX";t.exports={filterNull:function(t){var e=[];return r.each(t,function(t){r.isNull(t)||e.push(t)}),e},mixIf:function(t,e,n){r.each(n,function(n){t[n]=e[n]})},formatArray:function(t){var e=[];return r.each(t,function(t){r.isArray(t)?e=e.concat(t):e.push(t)}),e},sort:function(t,e){var n=t.toJSON();return r.each(n,function(t,e){return t[s]=e,t}),n.sort(i(e)),new a(n,{names:t.colNames()})}}},function(t,e){var n={uniform:function(t){return Math.abs(t)<1?.5:0},triangular:function(t){return Math.abs(t)<1?1-Math.abs(t):0},epanechnikov:function(t){return Math.abs(t)<1?.75*(1-t*t):0},quartic:function(t){return Math.abs(t)<1?.9375*Math.pow(1-t*t,2):0},triweight:function(t){return Math.abs(t)<1?35/32*Math.pow(1-t*t,3):0},tricube:function(t){return Math.abs(t)<1?70/81*Math.pow(1-Math.pow(Math.abs(t),3),3):0},gaussian:function(t){return Math.abs(t)<3?1/Math.sqrt(2*Math.PI)*Math.exp(-.5*t*t):0},cosine:function(t){return Math.abs(t)<1?Math.PI/4*Math.cos(Math.PI/2*t):0}};t.exports=n},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t),this._init()};i.augment(r,{nodes:null,edges:null,y:0,hasWeight:!1,idField:"name",valueField:"value",sourceField:"source",targetField:"target",sourceWeightField:"sourceWeight",targetWeightField:"targetWeight",maxValue:null,thickness:.05,margin:.01,detachment:!1,_init:function(){var t=this,e=t.nodes,n=t.valueField,r=t.targetWeightField;if(i.isNull(e)){var a=t.edges.slice(0);t.edges=a,i.isNull(a[0][r])&&(t.targetWeightField=t.sourceWeightField),e=t._createNodes()}else e=e.slice(0),t.nodes=e;t.hasWeight&&i.isNull(e[0][n])&&(t._initNodeMap(),t._calculateValue()),t._setMarginWidth(e)},_createNodes:function(){var t=this,e=t.edges,n=t.sourceField,i=t.targetField,r=[],a={};return e.forEach(function(e){var s=e[n],o=e[i];t._creatNode(s,a,r),t._creatNode(o,a,r)}),t.nodes=r,r},_creatNode:function(t,e,n){if(i.isNull(e[t])){var r={id:t};n.push(r),e[t]=r}},_initNodeMap:function(){var t=this,e=t.idField,n=t.targetField,r=t.sourceField,a=t.nodes;if(i.isObject(a))return a;var s={};return i.each(a,function(a){i.isNull(a.id)&&(a.id=a[e]),i.isNull(a.y)||delete a.y,a.inEdges=t._getEdgeOfCurNode(a,n),a.outEdges=t._getEdgeOfCurNode(a,r),s[a.id]=a}),t.nodesMap=s,t.nodes=a,s},_getEdgeOfCurNode:function(t,e){var n=this.edges,i=n.filter(function(n){return n[e]===t.id});return i},_calculateValue:function(){var t=this,e=t.nodes,n=t.valueField;e.forEach(function(e){i.isNull(e[n])&&t._getValueFromEdges(e)})},_getValueFromEdges:function(t){var e=this.valueField,n=this.sourceField,i=this.targetField,r=this.sourceWeightField,a=this.targetWeightField,s=0,o=this.detachment;if(o){var u=0,c=0;t.outEdges.forEach(function(t){c+=t[r]}),t.inEdges.forEach(function(t){u+=t[a]}),s=Math.max(u,c)}else t.outEdges.forEach(function(t){s+=t[r]}),t.inEdges.forEach(function(t){t[n]!==t[i]&&(s+=t[a])});return t[e]=s,s},_setMarginWidth:function(t){var e=this.margin,n=t.length,i=2*n*e;this.marginWidth=i},getNodes:function(){var t=this,e=t.nodes;return t.hasWeight?t._layoutByWeight(e):t._layout(e),e},_layout:function(t){var e=t.length,n=1/e,i=this.y;t.map(function(t,e){t.x=(e+.5)*n,t.y=i})},_layoutByWeight:function(t){var e=this.y,n=this.marginWidth,i=this.thickness,r=this.valueField,a=0;t.forEach(function(t){a+=t[r]});var s=this.maxValue||a;t.map(function(t){t.weight=t[r]/s,t.width=t.weight*(1-n),t.height=i,t.y=e}),this._layoutX(t)},_layoutX:function(t){var e=this.margin;t.map(function(n,i){for(var r=0,a=i-1;a>=0;a--)r+=t[a].width+2*e;n.x=e+.5*n.width+r})},reset:function(){this._init()}}),t.exports=r},function(t,e,n){var i=n(1),r=n(38);r.Linear=n(37),r.linear=function(t){return new r.Linear(t)},r.Cat=n(92),r.cat=function(t){return new r.Cat(t)},r.Pow=n(224),r.pow=function(t){return new r.Pow(t)},r.Log=n(223),r.log=function(t){return new r.Log(t)},r.Identity=n(222),r.I=function(t){return new r.Identity(t)},r.Time=n(226),r.time=function(t){return new r.Time(t)},r.TimeCat=n(225),r.timeCat=function(t){return new r.TimeCat(t)},r.I_TYPE="identity",r.isCategory=function(t){if("cat"===t)return!0;var e=i.ucfirst(t);return!(!r[e]||!r[e].superclass||"cat"!==r[e].superclass.type)},t.exports=r},function(t,e,n){"use strict";var i=n(38),r=n(1),a=n(30),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,i),r.augment(s,{type:"cat",tickCount:null,isCategory:!0,init:function(){var t=this,e=t.values,n=t.tickCount;if(r.each(e,function(t,n){e[n]=t.toString()}),!t.ticks){var i=e;if(n){var s=a.Category.caculate({maxCount:n,data:e});i=s.ticks}this.ticks=i}},getText:function(t){return this.values.indexOf(t)>-1?t=t:r.isNumber(t)&&(t=this.values[Math.round(t)]),s.superclass.getText.call(this,t)},translate:function(t){var e=this.values.indexOf(t);return e===-1&&r.isNumber(t)?e=t:e===-1&&(e=NaN),e},scale:function(t){var e,n=this.rangeMin(),i=this.rangeMax();return(r.isString(t)||this.values.indexOf(t)!==-1)&&(t=this.translate(t)),e=this.values.length>1?t/(this.values.length-1):t,n+e*(i-n)},invert:function(t){if(r.isString(t))return t;var e=this.rangeMin(),n=this.rangeMax();t<e&&(t=e),t>n&&(t=n);var i=(t-e)/(n-e),a=Math.round(i*(this.values.length-1))%this.values.length;return a=a||0,this.values[a]}}),t.exports=s},function(t,e,n){var i=n(1);t.exports={toTimeStamp:function(t){return i.isString(t)&&(t=t.indexOf("T")>0?new Date(t).getTime():new Date(t.replace(/-/gi,"/")).getTime()),i.isDate(t)&&(t=t.getTime()),t}}},function(t,e,n){"use strict";var i=n(1),r={},a={defaultShapeType:null,getShape:function(t){var e=this,n=e[t]||e[e.defaultShapeType]||i.mix({},r.ShapeBase,{getActiveCfg:e.getActiveCfg,getSelectedCfg:e.getSelectedCfg});return n._coord=e._coord,n},getShapePoints:function(t,e){var n=this.getShape(t);return n.getShapePoints(e)},drawShape:function(t,e,n){var i=this.getShape(t);return i.drawShape(e,n)}},s={_coord:null,drawShape:function(){},getShapePoints:function(){}};r.registGeom=function(t,e){var n=i.ucfirst(t),s=i.mix({},a,e);return r[n]=s,s.className=n,s},r.registShape=function(t,e,n){var a=i.ucfirst(t),s=r[a],o=s.getShape(),u=i.mix({},o,n);return s[e]=u,u},r.getShape=function(t){var e=this;return t=t||"point",t=i.ucfirst(t),e[t]||r.ShapeBase},r.GeomShape=a,r.ShapeBase=s,t.exports=r},function(t,e,n){var i=n(1),r=n(2),a=n(96),s="..x",o="..y",u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,a),i.augment(u,{type:"weight",detachment:!1,PRECISION:.001,_getFromWeightField:function(){var t=this.getDims();return t[4]},_getToWeightField:function(){var t=this.getDims();return t[5]},initDims:function(t){t.unshift(o),t.unshift(s),this.fromWeightField=this._getFromWeightField(),this.toWeightField=this._getToWeightField()?this._getToWeightField():this.fromWeightField},execFrame:function(t){var e,n,a=this,u=a._getFromField(),c=a._getToField(),l=a.detachment,h=l?"inputStart":"start",f=l?"outputStart":"start",g=[];return t.each(function(t){var r=t[u],l=t[c];if(i.isArray(r)&&i.isArray(l))e=t[a.fromWeightField],n=t[a.toWeightField],t[s]=[r[0],r[0]+e,l[0],l[0]+n],t[o]=[r[1],r[1],l[1],l[1]],g.push(t);else{var p=a._findObj(r),d=a._findObj(l);if(p&&d){var v=p[h]?p[h]:p.x-.5*p.width,m=d[f]?d[f]:d.x-.5*d.width;e=t[a.fromWeightField]*p.width/p.value,n=t[a.toWeightField]*d.width/d.value;var x=v+e,y=m+n;x-(p.x+.5*p.width)<a.PRECISION&&y-(d.x+.5*d.width)<a.PRECISION&&(t[s]=[v,x,m,y],t[o]=[p.y,p.y,d.y,d.y],g.push(t)),p[h]=x,d[f]=y}}}),a.resetNodes(),new r(g)},resetNodes:function(){var t=this,e=t.nodes,n=t.detachment,i=n?"inputStart":"start",r=n?"outputStart":"start";e.map(function(t){delete t[i],delete t[r]})}}),t.exports=u},function(t,e,n){var i=n(1),r=n(15),a=n(2),s="..x",o="..y",u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,r),i.augment(u,{type:"link",nodes:null,_getFromField:function(){var t=this.getDims();return t[2]},_getToField:function(){var t=this.getDims();return t[3]},initDims:function(t){t.unshift(o),t.unshift(s)},execFrame:function(t){var e=this,n=e._getFromField(),r=e._getToField(),u=[];return t.each(function(t){var a=t[n],c=t[r];if(i.isArray(a)&&i.isArray(c))t[s]=[a[0],c[0]],t[o]=[a[1],c[1]],u.push(t);else{var l=e._findObj(a),h=e._findObj(c);l&&h&&(t[s]=[l.x,h.x],t[o]=[l.y,h.y],u.push(t))}}),new a(u)},_initNodeMap:function(t){var e=this;if(i.isObject(t))return t;var n={};return i.each(t,function(t){n[t.id]=t}),e.nodesMap=n,n},_findObj:function(t){var e=this,n=e.nodes,i=e.nodesMap;return i||(i=e._initNodeMap(n)),i[t]}}),t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(15),a=n(2),s="..x",o="..y",u="_value",c="_level",l=function(t){l.superclass.constructor.call(this,t)};i.extend(l,r),i.augment(l,{type:"tree",levels:0,totalValue:0,initDims:function(t){t.unshift(o),t.unshift(s)},getValueField:function(){var t=this.getDims();return t[3]||u},getChildrenField:function(){var t=this.getDims();return t[2]},exec:function(t){var e=this,n=[],i=a.merge.apply(null,t);return n.push(e.execFrame(i)),n},_traverseNodes:function(t,e){var n,r=this;n=e?e[c]+1:0;var a=r.getChildrenField(),s=r.getValueField();i.each(t,function(t){t[c]=n,t.parent=e;var i=t[a];i?(r._traverseNodes(t[a],t),s===u&&(t[s]=r.getTotalValue(i))):(s===u&&(t[s]=1),n+1>r.levels&&(r.levels=n+1))})},getNodeValue:function(t){var e=this,n=e.getValueField();return t[n]},getNodeRange:function(t,e,n){var i,r=this,a=t[c],s=r.levels,o=e.indexOf(t),u=t.parent,l=0,h=1,f=0;if(u?(i=r.getNodeValue(u),h=n.end.x-n.start.x,f=n.start.x):i=r.getTotalValue(e),o>0){var g=e.slice(0,o);l=r.getTotalValue(g)}var p=r.getNodeValue(t),d={start:{x:l/i*h+f,y:a/s},end:{x:(l+p)/i*h+f,y:(a+1)/s}};return d},getTotalValue:function(t){var e=this,n=e.getValueField(),r=0;return i.each(t,function(t){r+=t[n]}),r},getStatObject:function(t,e){var n=i.mix({},t);return n[s]=(e.end.x+e.start.x)/2,n[o]=(e.end.y+e.start.y)/2,n},_extractData:function(t,e,n){var r=this,a=r.getChildrenField();i.each(t,function(i){var s=r.getNodeRange(i,t,n),o=r.getStatObject(i,s);e.push(o),i[a]&&r._extractData(i[a],e,s)})},execFrame:function(t){var e=this,n=t.toJSON(),i=[];e._traverseNodes(n),e._extractData(n,i,0);var t=new a(i);return t}}),t.exports=l},function(t,e,n){"use strict";var i=n(1),r=n(39),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{fractions:10,execFrame:function(t){var e=this,n=t.toJSON();i.each(n,function(t){e.toBin(t)});var r=new a(n);return e.execQuantile(r)},getSplitArray:function(){for(var t=this,e=t.fractions,n=[],i=1/e,r=0;r<=1;r+=i)n.push(r);return n},execQuantile:function(t){var e=this,n=[],r=e.getDims(),s=r[r.length-1],o=r.slice(0,r.length-1),u=a.group(t,o),c=e.getSplitArray();return i.each(u,function(t){var e=t.rowObject(0);e[s]=a.quantile(t,s,c),n.push(e)}),new a(n)}}),t.exports=s},function(t,e,n){"use strict";var i=n(29),r=n(1),a=n(2),s="..density",o=function(t){o.superclass.constructor.call(this,t)};r.extend(o,i),r.augment(o,{type:"density",bandWidth:.01,colRange:{},initDims:function(t){t.push(s)},execFrame:function(t){return t},getWindowWidth:function(t,e){var n=a.max(t,e),i=a.min(t,e),r=(n-i)*this.bandWidth;return r},getCoordinate:function(t,e,n){for(var i=this,r=i.getDimRange(t,e),a=r.max,s=r.min,o=[],u=s;u<=a;u+=n)o.push(u);return o},getDimRange:function(t,e){var n=this,i=n.colRange[e];if(!i){var r=a.range(t,e);i={min:r[0],max:r[1]}}return i},setRange:function(t,e){this.colRange[t]=e}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(2);t.exports={exec:function(t){var e=this;e.preExecute(t),this.stat&&(t=this.stat.exec(t));var n=[],a=r.merge.apply(null,t),s=e.getGroupCondition(),o=r.groupToMap(a,s);return i.each(t,function(t){var i;i=e.innerCompare?e.execFrame(t):e.execFrame(t,o),n.push(i)}),n},execFrame:function(t,e){var n=this,a=n.getGroupCondition(),s=r.groupToMap(t,a),o=[],u=n.getStatDims()[0];return i.each(s,function(i,r){var a=e?e[r]:t,s=n.transform(i,u,a);o.push(s)}),r.merge.apply(null,o)}}},function(t,e,n){"use strict";function i(t,e){t.sort(function(t,n){return t[e]-n[e]})}function r(t,e){var n=0;return a.each(t,function(t){n+=t[e]}),n}var a=n(1),s=function(t){return t},o=function(t){a.mix(this,t),this.rect=this.rect||{x:0,y:0,dx:1,dy:1},this.init()};a.augment(o,{nodes:null,rect:null,valueField:"value",childrenField:"children",init:function(){var t=this,e=t.nodes,n=t.rect,s=t.valueField;i(e,s),a.each(e,function(e){t._traverse(e)});var o=r(e,s);t.processNodes(e,n,o)},_traverse:function(t,e){var n=this;e=e||0,t.depth=e;var r=n.childrenField;t.parent||(t.parent=null);var s=t[r];a.isArray(s)&&(i(s,n.valueField),a.each(s,function(i){i.parent=t,n._traverse(i,e+1)}))},getNodes:function(){return this.nodes},changeNodes:function(t){return this.nodes=t,this.init(),this},processNodes:function(){},pad:function(t){var e={x:t.x,y:t.y,dx:t.dx,dy:t.dy};return e},position:function(t,e,n,i){var r,a=-1,o=t.length,u=n.x,c=n.y,l=e?s(t.area/e):0;if(e===n.dx){for((i||l>n.dy)&&(l=n.dy);++a<o;)r=t[a],r.x=u,r.y=c,r.dy=l,u+=r.dx=Math.min(n.x+n.dx-u,l?s(r.area/l):0);r.z=!0,r.dx+=n.x+n.dx-u,n.y+=l,n.dy-=l}else{for((i||l>n.dx)&&(l=n.dx);++a<o;)r=t[a],r.x=u,r.y=c,r.dx=l,c+=r.dy=Math.min(n.y+n.dy-c,l?s(r.area/l):0);r.z=!1,r.dy+=n.y+n.dy-c,n.x+=l,n.dx-=l}},scale:function(t,e){for(var n,i,r=-1,a=t.length,s=this.valueField;++r<a;)i=(n=t[r])[s]*(e<0?0:e),n.area=isNaN(i)||i<=0?0:i}}),t.exports=o},function(t,e){var n={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1==(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1==(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2==(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-n.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*n.easeInBounce(2*t):.5*n.easeOutBounce(2*t-1)+.5}};t.exports=n},function(t,e,n){"use strict";var i=n(1),r=n(3),a=n(201),s={duration:"duration",destroy:"destroy",delay:"delay",repeat:"repeat",onUpdate:"onUpdate"},o=r.Matrix3,u={interpolation:a.interpolation,getFrame:function(t,e,n,r,a){var s={attrs:{},matrix:null},o=n.onUpdate;for(var u in r.attrs)s.attrs[u]=r.attrs[u](t);return r.matrix&&(s.matrix=r.matrix(t)),i.isFunction(o)&&o(s,t),s},getInterpolations:function(t,e){var n,r={attrs:{},matrix:null};return i.each(t.attrs,function(t,i){n=null,typeof t==typeof e.attrs[i]&&(n="path"===i?u.interpolation({path:t,type:"path"},{path:e.attrs[i],type:"path"}):u.interpolation(t,e.attrs[i]),n&&(r.attrs[i]=n))}),e.matrix&&t.matrix&&!o.equal(t.matrix,e.matrix)&&(r.matrix=u.interpolation(t.matrix,e.matrix)),r},getKeyFrameByProps:function(t,e){var n=[],i=u.props2frame(t,e),r={attrs:u.getTargetAttrs(t,i.attrs),matrix:t.getMatrix()};return n[0]=r,n[1]=i,n},props2frame:function(t,e){var n={matrix:null,attrs:{}};return i.each(e,function(i,r){"transform"!==r||e.k?"matrix"===r?n.matrix=i:"onUpdate"===r?n.onUpdate=e.onUpdate:s[r]||(n.attrs[r]=i):n.matrix=u.transform(t.getMatrix(),i)}),n},transform:function(t,e){return t=t.clone(),i.each(e,function(e){switch(e[0]){case"t":t.translate(e[1],e[2]);break;case"s":t.scale(e[1],e[2]);break;case"r":t.rotate(e[1]);break;case"m":t.multiply(e[1]);break;default:return!1}}),t},getTargetAttrs:function(t,e){var n,i={};for(n in e)i[n]=t.attr(n);return i}};t.exports=u},function(t,e,n){"use strict";var i=(n(10),n(103)),r=n(1),a=n(102),s=function(t){r.mix(this,t),this._init()};r.augment(s,{type:"tween",canvas:null,target:null,startTime:null,endTime:null,duration:null,ratio:0,destroyTarget:!1,needsDestroy:!1,available:!0,repeat:!1,callBack:null,currentFrame:null,startKeyFrame:{attrs:null,matrix:null},endKeyFrame:{attrs:null,matrix:null},interpolations:null,_init:function(){var t=this.startTime,e=this.duration;this.endTime=t+e},tryStep:function(t){var e=(this.startTime,this.duration,this.startKeyFrame,this.target);if(!e||e.get("destroyed"))return this.needsDestroy=!0,!1;try{this.step(t)}catch(n){return this.needsDestroy=!0,!1}},step:function(t){var e,n,s,o=this.target,u=this.startTime,c=t-u,l=this.duration,h=this.startKeyFrame,f=this.endKeyFrame,g=this.easing,p=this.interpolations;return r.isFunction(g)||(g=a[g]?a[g]:a.linear),n=c/l,n=n<=0?0:n>=1?1:n,s=g(n),e=i.getFrame(s,h,f,p,o),e.attrs&&o.attr(e.attrs),e.matrix&&o.setMatrix(e.matrix),this.ratio=n,this.currentFrame=e,this.updateStatus(),o},updateStatus:function(){var t=this.ratio,e=this.callBack,n=this.destroyTarget,i=this.target,r=this.repeat;if(t>=1)if(r){var a=this.startTime,s=this.endTime,o=this.duration;this.startTime=a+o,this.endTime=s+o,this.reset()}else this.needsDestroy=!0,e&&e.call(i),n&&!i.get("destroyed")&&i.remove(!0)},reset:function(){var t=this.target,e=this.startKeyFrame;e.attrs&&t.attr(e.attrs),e.matrix&&t.setMatrix(e.matrix),this.ratio=0,this.needsDestroy=!1},destroy:function(){var t=this.target,e=this.endKeyFrame;t&&!t.get("destroyed")&&(e.attrs&&t.attr(e.attrs),e.matrix&&t.setMatrix(e.matrix)),this.destroyed=!0}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=["color","shape","size","opacity"],a="_origin";t.exports={getShapeData:function(t){var e={},n=t.toJSON(),s=n[0],o=t.colArray("_origin");return i.each(r,function(t){s.hasOwnProperty(t)&&(e[t]=s[t])}),e[a]=o,e}}},function(t,e,n){"use strict";var i=n(1);t.exports={splitData:function(t){if(!t.length)return[];var e,n=[],r=[],a=this.getYDim();return i.each(t,function(t){e=t._origin?t._origin[a]:t[a],i.isArray(e)&&i.isNull(e[0])||i.isNull(e)?(n.push(r),r=[]):r.push(t)}),n.push(r),n}}},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(16),s=n(106),o=n(105);r.extend(i,a),r.mixin(i,[s,o]),i.ATTRS={type:"path",shapeType:"line"},r.augment(i,{drawFrame:function(t,e){var n,i,a,s=this,o=t.toJSON(),u=this.splitData(o),c=this.get("container"),l=this.get("shapeObj"),h=o[0],f=this.getDrawCfg(h),g=h.points.length;h.index=e,f=this.getDrawCfg(h),f.origin=o;var p=s.get("adjusts"),d=p&&r.indexOf(p,"Stack")!==-1,v=s.getShapeData(t);s.get("shapeDatas").push(v),r.each(u,function(t,e){f.splitedIndex=e;for(var r=0;r<g;r++)if(n=[],!d||0!==r){for(var o=0;o<t.length;o++)a=t[o],n.push(a.points[r]);if(0===n.length)return;f.points=n,f.index=r,i=s.getDrawShape(f.shape),l.drawShape(i,f,c)}})},_getJoinIdAttr:function(){var t=this.get("attrs"),e=[];return r.each(t,function(t){"position"!==t.type&&e.push(t)}),e}}),t.exports=i},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a="https://kcart.alipay.com/web/bi.do",s=n(1),o=function(){function t(e){i(this,t);var n=this,r=e||{},o=new Image;s.mix(n,{image:o,server:a},r)}return r(t,[{key:"log",value:function(t){var e=this,n=t||{},i=s.mix({pg:document.URL,r:(new Date).getTime()},n),r=encodeURIComponent(JSON.stringify([i]));e.image.src=e.server+"?BIProfile=merge&d="+r}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e,n){"use strict";var i=n(294),r=n(293),a=n(299),s=n(300),o=n(298),u=n(297),c=n(295),l={initEvent:function(t){var e=new c({chart:t});e.bindEvents(),t.set("eventAssist",e)},initScale:function(t){var e=new a;t.set("scaleAssist",e)},initCoord:function(t){var e=new i({chart:t});t.set("coordAssist",e)},initAxis:function(t){var e=new r({chart:t});t.set("axisAssist",e)},initLegend:function(t){var e=new o({chart:t});t.set("legendAssist",e)},initTooltip:function(t){var e=new s({chart:t});t.set("tooltipAssist",e)},initGuide:function(t){var e=t.get("options");e.guides||(e.guides=[]);var n=new u({options:e.guides});t.set("guideAssist",n)}};t.exports=l},function(t,e,n){"use strict";function i(t,e){var n,i,r,a,s,o=t.get("start"),u=t.get("end"),c=t.getWidth(),l=t.getHeight(),h=200;return t.isPolar?(a=t.getRadius(),r=t.getCenter(),n=t.get("startAngle"),i=t.get("endAngle"),s=new w.Fan({attrs:{x:r.x,y:r.y,rs:0,re:a+h,startAngle:n,endAngle:e?n:i}}),s.endState={endAngle:e?i:n}):(s=new w.Rect({attrs:{x:o.x-h,y:u.y-h,width:e?0:c+2*h,height:l+2*h}}),s.endState={width:e?c+2*h:0}),s.isClip=!0,s}function r(t){if(!t||!t.length)return null;var e=t[0],n=e.x,i=e.x,r=e.y,a=e.y;return _.each(t,function(t){n=n>t.x?t.x:n,i=i<t.x?t.x:i,r=r>t.y?t.y:r,a=a<t.y?t.y:a}),{minX:n,maxX:i,minY:r,maxY:a,centerX:(n+i)/2,centerY:(r+a)/2}}function a(t,e){var n,i,a=t.points||t.get("origin").points,s=r(a),o=e.get("startAngle"),u=e.get("endAngle"),c=u-o;return e.isTransposed?(n=s.maxY*c,i=s.minY*c):(n=s.maxX*c,i=s.minX*c),n+=o,i+=o,{startAngle:i,endAngle:n}}function s(t){var e,n=t.x,i=t.y,r=t.rs,a=t.re,s=t.startAngle,o=t.endAngle;(o-s)%Math.PI===0&&(o-=1e-6);var u={x:Math.cos(s)*r+n,y:Math.sin(s)*r+i},c={x:Math.cos(s)*a+n,y:Math.sin(s)*a+i},l={x:Math.cos(o)*r+n,y:Math.sin(o)*r+i},h={x:Math.cos(o)*a+n,y:Math.sin(o)*a+i},f=o-s>=Math.PI?1:0;return e=0===r?[["M",u.x,u.y],["L",c.x,c.y],["A",a,a,0,f,1,h.x,h.y],["L",l.x,l.y],["Z"]]:[["M",u.x,u.y],["L",c.x,c.y],["A",a,a,0,f,1,h.x,h.y],["L",l.x,l.y],["A",r,r,0,f,0,u.x,u.y],["Z"]]}function o(t,e,n,i){var r={};return t.delay&&(i.delay=_.isFunction(t.delay)?t.delay(e,n):t.delay),r.easing=_.isFunction(t.easing)?t.easing(e,n):t.easing,r.duration=_.isFunction(t.duration)?t.duration(e,n):t.duration,r}function u(t,e){var n,i,r=t.getBBox(),a=t.get("origin").points,s=(r.minX+r.maxX)/2,u=t.id||t.get("id"),c=t.get("origin")&&t.get("origin").index||0;n=a[0].y-a[1].y<=0?r.maxY:r.minY,i=new b(s,n,1),t.apply(i),t.transform([["t",-i.x,-i.y],["s",1,.01],["t",i.x,i.y]]);var l={transform:[["t",-i.x,-i.y],["s",1,100],["t",i.x,i.y]]},h=o(e,c,u,l);t.animate(l,h.duration,h.easing)}function c(t,e){var n,i,r=t.getBBox(),a=t.get("origin").points,s=(r.minY+r.maxY)/2,u=t.id||t.get("id"),c=t.get("origin")&&t.get("origin").index||0;n=a[0].y-a[1].y>0?r.maxX:r.minX,i=new b(n,s,1),t.apply(i),t.transform([["t",-i.x,-i.y],["s",.01,1],["t",i.x,i.y]]);var l={transform:[["t",-i.x,-i.y],["s",100,1],["t",i.x,i.y]]},h=o(e,c,u,l);t.animate(l,h.duration,h.easing)}function l(t,e){var n={lineWidth:0,destroy:!0},i=t.id||t.get("id"),r=t.get("index")||t.get("origin")&&t.get("origin").index||0,a=o(e,r,i,n);t.animate(n,a.duration,a.easing)}function h(t,e){var n=t.getBBox(),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2,a=new b(i,r,1),s=t.id||t.get("id"),u=t.get("origin")&&t.get("origin").index||0;t.apply(a),t.transform([["t",-a.x,-a.y],["s",.01,.01],["t",a.x,a.y]]);var c={transform:[["t",-a.x,-a.y],["s",100,100],["t",a.x,a.y]]},l=o(e,u,s,c);t.animate(c,l.duration,l.easing)}function f(t,e){var n=t.getBBox(),i=(n.minX+n.maxX)/2,r=(n.minY+n.maxY)/2,a=new b(i,r,1),s=t.id||t.get("id"),u=t.get("index")||t.get("origin")&&t.get("origin").index||0;t.apply(a);var c={transform:[["t",-a.x,-a.y],["s",.1,.1],["t",a.x,a.y]],destroy:!0},l=o(e,u,s,c);t.animate(c,l.duration,l.easing)}function g(t,e){if("path"===t.get("type")){var n=t.id||t.get("id"),i=t.get("origin")&&t.get("origin").index||0,r=_.pathToAbsolute(t.attr("path"));t.attr("path",[r[0]]);var a={path:r},s=o(e,i,n,a);t.animate(a,s.duration,s.easing)}}function p(t,e){if("path"===t.get("type")){var n=t.id||t.get("id"),i=t.get("index")||t.get("origin")&&t.get("origin").index||0,r=_.pathToAbsolute(t.attr("path")),a={path:[r[0]],destroy:!0},s=o(e,i,n,a);t.animate(a,s.duration,s.easing)}}function d(t,e,n,r,a){var s,u=i(n,!0),c=t.get("canvas"),l=t.id||t.get("id"),h=t.get("origin")&&t.get("origin").index||0;r?(u.attr("startAngle",r),u.attr("endAngle",r),s={endAngle:a}):s=u.endState,u.set("canvas",c),t.attr("clip",u);var f=o(e,h,l,s);u.animate(s,f.duration,f.easing,function(){t&&!t.get("destroyed")&&t.attr("clip",null)&&u.destroy()})}function v(t,e){var n=t.id||t.get("id"),i=t.get("origin")&&t.get("origin").index||0,r=_.isNull(t._getAttr("fillOpacity"))?1:t._getAttr("fillOpacity"),a=_.isNull(t._getAttr("strokeOpacity"))?1:t._getAttr("strokeOpacity");t.attr("fillOpacity",0),t.attr("strokeOpacity",0);var s={fillOpacity:r,strokeOpacity:a},u=o(e,i,n,s);t.animate(s,u.duration,u.easing)}function m(t,e){var n=t.id||t.get("id"),i=t.get("index")||t.get("origin")&&t.get("origin").index||0,r=t._getAttr("strokeOpacity")||0,a=t._getAttr("fillOpacity")||0,s={onUpdate:function(t,e){t.attrs.strokeOpacity=r*(1-e),t.attrs.fillOpacity=a*(1-e)}},u=o(e,i,n,s);t.animate(s,u.duration,u.easing,function(){t.remove(!0)})}function x(t,e,n){var i=a(t,n),r=i.endAngle,s=i.startAngle;d(t,e,n,s,r)}function y(t,e,n,i){var r=a(t,i),u=a(e,i),c=r.endAngle,l=r.startAngle,h=u.endAngle,f=u.startAngle,g=i.getRadius(),p=i.get("inner"),d=i.getCenter(),v=t.id||t.get("id"),m=void 0===t.index?t.get("origin")&&t.get("origin").index:t.index;e.__attrs.path=t.attrs.path;var x={onUpdate:function(t,e){var n={x:d.x,y:d.y,rs:g*p,re:g,startAngle:l+(f-l)*e,endAngle:c+(h-c)*e};t.attrs.path=s(n)}},y=o(n,m,v,x);e.animate(x,y.duration,y.easing)}var _=n(1),S=n(5),b=S.Matrix.Vector3,w=S.G,M={line:{appear:function(){return M.animation.appear.clipIn},enter:function(){return M.animation.enter.clipIn},leave:function(){return M.animation.leave.lineWidthOut},cfg:{appear:{duration:900,easing:"easeInOutQuart"}}},path:{appear:function(){return M.animation.appear.clipIn},enter:function(){return M.animation.enter.clipIn},leave:function(){return M.animation.leave.lineWidthOut},cfg:{appear:{duration:900,easing:"easeInOutQuart"}}},area:{appear:function(){return M.animation.appear.clipIn},enter:function(){return M.animation.enter.fadeIn},leave:function(){return M.animation.leave.fadeOut},cfg:{appear:{duration:900,easing:"easeInOutQuart"},enter:{easing:"easeInQuart"},leave:{easing:"easeOutQuart",duration:600}}},polygon:{appear:function(){return M.animation.appear.zoomIn},enter:function(){return M.animation.enter.zoomIn},leave:function(){return M.animation.leave.zoomOut}},edge:{appear:function(){return M.animation.appear.pathIn},enter:function(){return M.animation.enter.pathIn},leave:function(){return M.animation.leave.pathOut}},interval:{appear:function(t){var e=M.animation.appear.pathIn;return t.isRect?e=t.isTransposed?M.animation.appear.scaleInX:M.animation.appear.scaleInY:(t.isTransposed&&t.isPolar||"theta"===t.type)&&(e=M.animation.appear.fanIn),e},enter:function(t){return t.isRect||t.isTransposed||"theta"===t.type?M.animation.enter.fadeIn:M.animation.enter.pathIn},leave:function(t){return t.isRect||t.isTransposed||"theta"===t.type?M.animation.leave.fadeOut:M.animation.leave.pathOut},update:function(t){if("theta"===t.type)return M.animation.update.fanUpdate},cfg:{appear:{duration:450},leave:{easing:"easeOutQuart"},enter:{easing:"easeInQuart"}}},point:{appear:function(){return M.animation.appear.zoomIn},enter:function(){return M.animation.enter.zoomIn},leave:function(){return M.animation.leave.zoomOut;
}},schema:null,contour:null,heatmap:null,label:{appear:function(){return M.animation.appear.fadeIn},enter:function(){return M.animation.enter.fadeIn},leave:function(){return M.animation.leave.fadeOut},cfg:{appear:{duration:900}}},axisLine:{},gridLine:{},labelLine:{appear:function(){return M.animation.appear.pathIn},enter:function(){return M.animation.enter.pathIn},leave:function(){return M.animation.leave.pathOut}}};M.animation={enter:{clipIn:d,zoomIn:h,pathIn:g,scaleInY:u,scaleInX:c,fanIn:x,fadeIn:v},leave:{lineWidthOut:l,zoomOut:f,pathOut:p,fadeOut:m},appear:{clipIn:d,zoomIn:h,pathIn:g,scaleInY:u,scaleInX:c,fanIn:x,fadeIn:v},update:{fanUpdate:y}},M.defaultCfg={update:{duration:600,easing:"easeInOutQuart"},enter:{duration:610,easing:"easeInOutQuart"},leave:{duration:300,easing:"easeInQuart"},appear:{duration:450,easing:"easeOutQuart"}},M.getAnimation=function(t,e,n){var i=this[t];if(i){var r=i[n];if(_.isFunction(r))return r(e)}return!1},M.getAnimateCfg=function(t,e){var n={},i=this.defaultCfg[e];return n=_.simpleMix({},i,this[t]&&this[t].cfg&&this[t].cfg[e])},M.registAnimation=function(t,e,n){this.animation[t]||(this.animation[t]={}),this.animation[t][e]=n},t.exports=M},function(t,e,n){"use strict";function i(t,e){if(y.isArray(t)&&e.get("animate")!==!1){var n=e.get("children");y.each(n,function(e){e.isGroup?i(t,e):e.isShape&&t.push(e)})}}function r(t,e){var n,i,r,a,s=t.length,o=e.length,u=o>s?e:t,c={attrs1:{},attrs2:{}},l=!1;return y.each(u,function(s,o){n=t[o],i=e[o],y.isObject(n)||y.isObject(i)||"path"===o&&(n=y.parsePathString(n),i=y.parsePathString(i),r=y.path2string(n),a=y.path2string(i),r===a||r.indexOf("NaN")!==-1||a.indexOf("NaN")!==-1)||y.isArray(n)&&y.isArray(i)&&y.equalsArray(n,i)||n===i||M[o]||(c.attrs1[o]=n,c.attrs2[o]=i,l=!0)}),!!l&&c}function a(t,e){for(var n=0;n<e.length;n++)if(e[n].id===t)return e[n];return!1}function s(t){var e={},n=t.__attrs;return y.each(n,function(n,i){e[i]=t.attr(i)}),e}function o(t){var e={};return y.isFunction(t.getParent)&&t.getParent().get("geom")&&(e=t.getParent().get("geom").get("animateCfg")),e}function u(t){var e=[];return y.each(t,function(t){if(t.id&&!t.isClip){var n=o(t);e.push({id:t.id,stash:!0,type:t.get("type"),attrs:s(t),matrix:t.getMatrix().clone(),animateType:t.animateType,realShape:t,isStash:!0,points:t.get("origin")&&t.get("origin").points||[],index:t.get("origin")&&t.get("origin").index||0,animateCfg:n})}}),e}function c(t){for(var e=0;e<t.length;e++)if(0!==t[e]&&!t[e]||!y.isNumber(t[e]))return!1;return!0}function l(t){return y.isObject(t)&&"matrix3"===t.type&&c(t.elements)}function h(t,e){var n=!0;return y.each(t,function(t,i){if(("undefined"==typeof t?"undefined":x(t))!==x(e[i]))return n=!1,!1}),n}function f(t,e){var n,i,r,a;return!(!t||!e)&&(n=t.attrs,i=s(e),r=t.matrix,a=e.getMatrix(),!(!l(r)||!l(a))&&!!h(n,i))}function g(t,e,n,i){var r;return r=i?b.animation[n][i]:b.getAnimation(t,e,n)}function p(t,e,n){var i=b.getAnimateCfg(t,e),r={},a=n.animateCfg;if(!a&&y.isFunction(n.getParent)){var s=n.getParent().get("geom");s&&(a=s.get("animateCfg"))}return r=a?y.simpleMix({},i,a[e]):i}function d(t,e,n,i,o){var u,c,h,d,v,m,x,_,S,b,M=t.concat(e);return M.length>1500?void n.draw():void(o?y.each(M,function(o){if(!o.isStash&&o.realShape&&o.realShape.isTem)return void o.realShape.remove(!0);if(o.isTem&&!o.get("destroyed")&&o.remove(!0),d=o.id,!d)return void(n&&!n.get("destroyed")&&n.draw());if(o.isStash?(c=o,h=a(d,e)):(c=a(d,t),h=o),c&&h&&!h.get("destroyed")){if(!f(c,h))return;if(b=p(c.animateType,"update",c),m=g(c.animateType,i,"update",b.animation),y.isFunction(m))m=m(c,h,b,i);else{if(x=h.getMatrix(),v=r(c.attrs,s(h)),S=w.equal(c.matrix,x),!v&&S)return;v&&S?(h.attr(v.attrs1),_=v.attrs2):v||S?(h.attr(v.attrs1),h.setMatrix(c.matrix),_=y.simpleMix({matrix:x},v.attrs2)):(h.setMatrix(c.matrix),_={matrix:x}),h.animate(_,b.duration,b.easing)}}else if(c&&!h){if(!l(c.matrix))return;b=p(c.animateType,"leave",c),m=g(c.animateType,i,"leave",b.animation),y.isFunction(m)?(u=n.addShape(c.type,{attrs:c.attrs,points:c.points,index:c.index,id:c.id,animateCfg:c.animateCfg}),c.animateType.indexOf("label")===-1&&c.matrix.multiply(i.get("matrix")),u.setMatrix(c.matrix),u.isTem=!0,m(u,b,i)):n&&!n.get("destroyed")&&n.draw()}else if(!c&&h&&!h.get("destroyed")){if(!l(h.getMatrix()))return;b=p(h.animateType,"enter",h),m=g(h.animateType,i,"enter",b.animation),y.isFunction(m)?m(h,b,i):n&&!n.get("destroyed")&&n.draw()}}):y.each(e,function(t){l(t.getMatrix())&&(b=p(t.animateType,"appear",t),m=g(t.animateType,i,"appear",b.animation),y.isFunction(m)?m(t,b,i):n&&!n.get("destroyed")&&n.draw())}))}function v(t,e,n,r){var a=n||!r,s=t.get("shapesStash"),o=[];s=s?s:[],i(o,t),t.set("shapesStash",u(o)),a&&d(s,o,t,e,n),t.draw()}function m(t){var e=t.geom,n=t.fn,i=e.get("coord"),r=S[t.animateCfg.animation];if(!r&&!y.isFunction(r))return!1;var a=i.get("start"),s=i.get("end"),o=i.get("width"),u=i.get("height"),c={group:e.get("group"),rect:{x:a.x,y:s.y,width:o,height:u},before:n};return y.simpleMix(c,t.animateCfg),i.isPolar&&y.simpleMix(c,{circle:{center:i.getCenter(),startAngle:i.get("startAngle"),endAngle:i.get("endAngle"),r:Math.max(o,u)/2}}),new r(c)}var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=n(1),_=n(5),S=n(127),b=n(110),w=_.Matrix.Matrix3,M={text:"text",elements:"elements",rotate:"rotate",textAlign:"textAlign",textBaseline:"textBaseline",fontStyle:"fontStyle",font:"font",fontWeight:"fontWeight",fontFamily:"fontFamily",points:"points"};t.exports={shapeAnimation:v,getGroupAnimation:m}},function(t,e,n){"use strict";var i=n(22);i.Interval=n(311),i.Schema=n(312),i.Heatmap=n(310),i.Contour=n(308),i.Edge=n(309),t.exports=i},function(t,e,n){"use strict";function i(t){for(var e=t.length,n=t[1]-t[0],i=2;i<e;i++){var r=t[i]-t[i-1];n>r&&(n=r)}return n}var r=n(4),a={getDefalutSize:function(){var t=this.get("defaultSize");if(!t){var e,n=this.getCoord(),a=this.getXScale(),s=a.values;if(a.isLinear&&s.length>1){s.sort();var o=i(s);e=(a.max-a.min)/o,s.length>e&&(e=s.length)}else e=s.length;var u=1/e,c=1;this.isInCircle()&&"schema"!==this.get("type")?n.isTransposed&&e>1&&(c=r.widthRatio.multiplePie):c=r.widthRatio.column,u*=c;var l=this.get("adjusts");if(l&&l.indexOf("Dodge")!==-1){var h=this.get("frames");u/=h.length}t=u,this.set("defaultSize",t)}return t}};t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(115),a=n(17),s=function o(t){o.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{getPointRauis:function(t,e){return a.getPointRadius(t,e)},getCirclePoint:function(t,e,n){var i=this,r=i.get("coord"),a=r.getCenter(),s=i._isEmitLabels(),o=i.getPointRauis(r,n);if(r.isTransposed&&o>e&&!s){var u=Math.asin(e/(2*o));t+=2*u}else o+=e;return{x:a.x+o*Math.cos(t),y:a.y+o*Math.sin(t),angle:t,r:o}},getArcPoint:function(t,e){var n,r=this;return e=e||0,n=i.isArray(t.x)||i.isArray(t.y)?{x:i.isArray(t.x)?t.x[e]:t.x,y:i.isArray(t.y)?t.y[e]:t.y}:t,r.transLabelPoint(n),n},getPointAngle:function(t){var e=this,n=e.get("coord");return a.getPointAngle(n,t)},getMiddlePoint:function(t){var e=this,n=e.get("coord"),r=t.length,a={x:0,y:0};return i.each(t,function(t){a.x+=t.x,a.y+=t.y}),a.x/=r,a.y/=r,a=n.convert(a)},_isToMiddle:function(t){return t.x.length>2},getLabelPoint:function(t,e,n){var i,r=this,a=t[n],s=1;r._isToMiddle(e)?i=r.getMiddlePoint(e.points):(1===t.length&&0===n?n=1:0===n&&(s=-1),i=r.getArcPoint(e,n));var o=r.getDefaultOffset();o*=s;var u=r.getPointAngle(i),c=r.getCirclePoint(u,o,i);return c.text=a,c.angle=u,c.color=e.color,c.rotate=r.getLabelRotate(u,o,e),c},_isEmitLabels:function(){var t=this.get("labels");return t.labelEmit},getLabelRotate:function(t){var e,n=this;return e=180*t/Math.PI,e+=90,n._isEmitLabels()&&(e-=90),e&&(e>90?e-=180:e<-90&&(e+=180)),e/180*Math.PI},getLabelAlign:function(t){var e,n=this,i=n.get("coord");if(n._isEmitLabels())e=t.angle<=Math.PI/2&&t.angle>-Math.PI/2?"left":"right";else if(i.isTransposed){var r=i.getCenter(),a=n.getDefaultOffset();e=Math.abs(t.x-r.x)<1?"center":t.angle>Math.PI||t.angle<=0?a>0?"left":"right":a>0?"right":"left"}else e="center";return e}}),t.exports=s},function(t,e,n){"use strict";function i(t){var e=0;return u.each(t,function(t){e+=t}),e/t.length}var r=n(5),a=n(25),s=a.Labels,o=r.Group,u=n(1),c=n(4),l=["line","point","path"],h="_origin",f=function g(t){g.superclass.constructor.call(this,t)};f.CFG={labels:c.labels,labelsCfg:null,coord:null,geomType:null,zIndex:6},u.extend(f,o),u.mixin(f,[s.ShowLabels]),u.augment(f,{_renderUI:function(){f.superclass._renderUI.call(this),this.initLabelsCfg(),this.renderLabels()},_getLabelValue:function(t){var e,n=this,i=t[h],r=n.get("labelsCfg"),a=r.scales,s=r.callback;if(s){var o=[];u.each(a,function(t){o.push(i[t.dim])}),e=s.apply(null,o)}else{var c=a[0];if(e=i[c.dim],u.isArray(e)){var l=[];u.each(e,function(t){l.push(c.getText(t))}),e=l}else e=c.getText(e)}return e},initLabelsCfg:function(){var t=this,e=t.getDefaultLabelCfg(),n=t.get("labelsCfg");u.mix(!0,e,n.cfg),t.set("labels",e)},getDefaultLabelCfg:function(){var t=this,e=t.get("labelsCfg").cfg,n=t.get("geomType");return"polygon"===n||e&&e.offset<0&&u.indexOf(l,n)===-1?u.mix(!0,{},c.innerLabels):this.getGlobalLabelCfg()},getGlobalLabelCfg:function(){return u.mix({},c.labels)},getLabelsItems:function(t){var e,n=this,i=[],r=n.get("labels"),a=n.get("geom"),s=a?a.getXDim():"x",o=a?a.getYDim():"y";return u.each(t,function(t){e=t._origin;var a=n._getLabelValue(t);u.isArray(a)||(a=[a]);var c=a.length;u.each(a,function(l,h){var f=n.getLabelPoint(a,t,h);if(f){f=u.mix({},e,f);var g;g=r&&r.label&&r.label.textAlign?r.label.textAlign:n.getLabelAlign(f,h,c),f.textAlign=g,f.id=n.get("id")+"LabelText"+e[s]+" "+e[o]+f.text,i.push(f)}})}),i},adjustItems:function(t){return t},drawLines:function(){},getLabelPoint:function(t,e,n){function r(e,n){return u.isArray(e)&&(e=1===t.length?e.length<=2?e[e.length-1]:i(e):e[n]),e}var a=this,s={x:r(e.x,n),y:r(e.y,n),text:t[n]},o=a.getLabelOffset(s,n,t.length);return a.transLabelPoint(s),s.x+=o.x,s.y+=o.y,s},transLabelPoint:function(t){var e=this,n=e.get("coord"),i=n.trans(t.x,t.y,1);t.x=i.x,t.y=i.y},getOffsetVector:function(){var t,e=this,n=e.get("labels"),i=n.offset||0,r=e.get("coord");return t=r.isTransposed?r.trans(i,0):r.trans(0,i)},getDefaultOffset:function(){var t=this,e=0,n=t.get("coord"),i=t.getOffsetVector();return e=n.isTransposed?i.x:i.y},getLabelOffset:function(t,e,n){var i=this,r=i.getDefaultOffset(),a=i.get("coord"),s=a.isTransposed,o=s?"x":"y",u=s?1:-1,c={x:0,y:0};return e>0||1===n?c[o]=r*u:c[o]=r*u*-1,c},getLabelAlign:function(t,e,n){var i=this,r="center",a=i.get("coord");if(a.isTransposed){var s=i.getDefaultOffset();r=s<0?"right":0===s?"center":"left",n>1&&0===e&&("right"===r?r="left":"left"===r&&(r="right"))}return r},showLabels:function(t){var e=this,n=e.getLabelsItems(t),i=e.get("labels");n=e.adjustItems(n),e.resetLabels(n),i.labelLine&&e.drawLines(n,i.labelLine)},destroy:function(){this.removeLabels(),f.superclass.destroy.call(this)}}),t.exports=f},function(t,e,n){"use strict";var i=n(13);n(321),n(322),n(323),n(324),n(319),n(325),n(320),i.Path=i.Line,t.exports=i},function(t,e){"use strict";function n(){var t=document.createElement("i");return t.title="Web Colour Picker",t.style.display="none",document.body.appendChild(t),t}var i=/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;t.exports={toRGB:function(){var t;return document.body&&(t=n()),function(e){t||(t=n()),t.style.color=e;var r=document.defaultView.getComputedStyle(t,"").getPropertyValue("color"),a=i.exec(r);return a.shift(),this.arr2rgb(a)}}(),toHex:function(t){return t=Math.round(t),t=t.toString(16),1===t.length&&(t="0"+t),t},hsl2Rgb:function(t){var e=t[0],n=t[1],i=t[2],r={};if(0===n)r.r=r.g=r.b=i;else{var a=function(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t},s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;r.r=a(o,s,e+1/3),r.g=a(o,s,e),r.b=a(o,s,e-1/3)}return r.r=Math.min(Math.round(255*r.r),255),r.g=Math.min(Math.round(255*r.g),255),r.b=Math.min(Math.round(255*r.b),255),"#"+this.toHex(r.r)+this.toHex(r.g)+this.toHex(r.b)},rgb2hsl:function(t){var e,n,i,r=this.rgb2arr(t),a=r[0]/255,s=r[1]/255,o=r[2]/255,u=Math.min(a,s,o),c=Math.max(a,s,o),l=c-u;return c==u?e=0:a==c?e=(s-o)/l:s==c?e=2+(o-a)/l:o==c&&(e=4+(a-s)/l),e=Math.min(60*e,360),e<0&&(e+=360),i=(u+c)/2,n=c==u?0:i<=.5?l/(c+u):l/(2-c-u),[e/360,n,i]},arr2rgb:function(t){return"#"+this.toHex(t[0])+this.toHex(t[1])+this.toHex(t[2])},rgb2arr:function(t){var e=[];return e.push(parseInt(t.substr(1,2),16)),e.push(parseInt(t.substr(3,2),16)),e.push(parseInt(t.substr(5,2),16)),e}}},function(t,e,n){"use strict";function i(t,e,n,i){var r=t[i]+(e[i]-t[i])*n;return r}var r=n(54),a=n(1),s={calColor:function(t,e,n){var a,s=t.length-1,o=Math.floor(s*e),u=s*e-o,c=t[o],l=o===s?c:t[o+1];return"hsl"===n?a=r.hsl2Rgb([i(c,l,u,0),i(c,l,u,1),i(c,l,u,2)]):(a={r:i(c,l,u,0),g:i(c,l,u,1),b:i(c,l,u,2)},a="#"+r.toHex(a.r)+r.toHex(a.g)+r.toHex(a.b)),a},lightness:function(t,e){e=e||0;var n=[[e,1,.9],[e,1,.5]];return s.calColor(n,t,"hsl")},red:function(t){return s.lightness(t,0)},blue:function(t){return s.lightness(t,.66)},green:function(t){return s.lightness(t,.33)},gradient:function(t){var e=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=r.toRGB(t)),e.push(r.rgb2arr(t))}),function(t){return s.calColor(e,t)}},gradientHsl:function(t){var e=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=r.toRGB(t)),e.push(r.rgb2hsl(t))}),function(t){return s.calColor(e,t,"hsl")}},saturation:function(t,e){e=e||0;var n=[[e,0,.5],[e,1,.5]];return s.calColor(n,t,"hsl")},hue:function(t){var e=[[0,1,.5],[1,1,.5]];return s.calColor(e,t,"hsl")},brightness:function(t){var e=[[255,255,255],[0,0,0]];return s.calColor(e,t)},heat:function(t){var e=[[255,255,255],[255,127.5,0],[0,0,0]];return s.calColor(e,t)},rainbow:function(t){var e=[[0,255,255],[0,0,255],[0,255,0],[255,0,0]];return s.calColor(e,t)},circular:function(t){var e=[[0,0,255],[0,255,0],[255,255,0],[255,0,0],[0,0,255]];return s.calColor(e,t)},bipolar:function(t){var e=[[0,255,0],[0,0,0],[255,0,0]];return s.calColor(e,t)}};t.exports=s},function(t,e,n){var i=n(120);i.Group=n(121),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=function(){};r.ATTRS={actived:!1},i.augment(r,{isActived:function(){return this.get("actived")},setActived:function(){this.setActiveStatus(!0),this.set("actived",!0)},setActiveStatus:function(){},clearActived:function(){this.setActiveStatus(!1),this.set("actived",!1),this.clearActivedItem&&this.clearActivedItem()}}),t.exports=r},function(t,e,n){"use strict";var i=n(1),r=function(){};r.ATTRS={multipleActive:!1},i.augment(r,{isItemActived:function(t){return t.isActived()},getActiveItems:function(){return this.get("children")},setItemActived:function(t,e){e?t.setActived():t.clearActived()},onActived:function(t){this.fire("itemactived",{item:t}),this.fireUpGroup&&this.fireUpGroup("actived",t)},onUnActived:function(t){this.fire("itemunactived",{item:t}),this.fireUpGroup&&this.fireUpGroup("unactived",t)},setActivedItem:function(t){var e=this,n=e.get("multipleActive");n||e.clearActivedItem(),t&&!e.isItemActived(t)&&(e.setItemActived(t,!0),e.onActived(t))},getActived:function(){var t=this,e=t.getActiveItems(),n=null;return i.each(e,function(e){if(t.isItemActived(e))return n=e,!1}),n},getAllActived:function(){var t=this,e=t.getActiveItems(),n=[];return i.each(e,function(e){t.isItemActived(e)&&n.push(e)}),n},clearAllActived:function(){var t=this,e=t.getAllActived();return i.each(e,function(e){t.setItemActived(e,!1),t.onUnActived(e)}),this},clearActivedItem:function(t){var e=this;return t=t||e.getActived(),t&&(e.setItemActived(t,!1),e.onUnActived(t)),this}}),t.exports=r},function(t,e,n){var i=n(24);i.Dodge=n(123),i.Jitter=n(124),i.Stack=n(125),i.Symmetric=n(126),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(24),a=n(2),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{marginRatio:.5,dodgeRatio:.5,_getDodgeDim:function(t){var e=this,n=null;return i.each(t,function(t){if(t!==e.xDim)return n=t,!1}),n},processAdjust:function(t){var e=this,n=a.merge.apply(null,t),i=e.groupDims,r=e._getDodgeDim(i);return r&&(t=a.group(n,r)),e.adjFrames=t,e.mergeFrame=n,t=e.adjustFrames(t,n),r&&(n=a.merge.apply(null,t),t=a.group(n,i)),e.adjFrames=null,e.mergeFrame=null,t},getDistribution:function(t){var e=this,n=e.adjFrames,r={};return i.each(n,function(e,n){var s=a.values(e,t);s.length||s.push(0),i.each(s,function(t){r[t]||(r[t]=[]),r[t].push(n)})}),r},adjustDim:function(t,e,n,r,a){var s=this,o=s.getDistribution(t),u=s.groupData(n,t);i.each(u,function(n,r){r=parseFloat(r);var u;u=1===e.length?{pre:-1,next:1}:s.getAdjustRange(t,r,e),i.each(n,function(e){var n=e[t],r=o[n],c=i.indexOf(r,a);e[t]=s.getDodgeOffset(u,c,r.length)})})},getDodgeOffset:function(t,e,n){var i,r=this,a=t.pre,s=t.next,o=s-a,u=o*r.dodgeRatio/n,c=r.marginRatio*u;return i=.5*(o-n*u-(n-1)*c)+((e+1)*u+e*c)-.5*u-.5*o,(a+s)/2+i}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(24),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{getAdjustOffset:function(t,e){var n=Math.random(),i=e-t,r=.05*i;return t+r+.9*i*n},_adjustGroup:function(t,e,n,r){var a=this,s=a.getAdjustRange(e,n,r);i.each(t,function(t){t[e]=a.getAdjustOffset(s.pre,s.next)})},adjustDim:function(t,e,n){var r=this,a=r.groupData(n,t);i.each(a,function(n,i){i=parseFloat(i),r._adjustGroup(n,t,i,e)})}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(24),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,a),i.augment(s,{height:null,size:10,reverseOrder:!1,adjustNames:["y"],processOneDimStack:function(t){var e=this,n=e.xDim,i=e.yDim||"y",a=e.height,s={},o=[];e.reverseOrder&&(t=t.slice(0).reverse());for(var u=0;u<t.length;u++){for(var c=t[u].toJSON(),l=0;l<c.length;l++){var h=c[l],f=h.size||e.size,g=2*f/a,p=h[n];s[p]||(s[p]=g/2),h[i]=s[p],s[p]+=g}o.push(new r(c))}return e.reverseOrder&&o.reverse(),o},processAdjust:function(t){var e=this;return t=e.yDim?e.processStack(t):e.processOneDimStack(t)},processStack:function(t){var e=this,n=e.xDim,a=e.yDim,s=t.length,o=[],u={positive:{},negative:{}},c=[];e.reverseOrder&&(t=t.slice(0).reverse());for(var l=0;l<s;l++){for(var h=t[l].toJSON(),f=0;f<h.length;f++){var g=h[f],p=g[n],d=g[a]||0,v=p.toString();d=i.isArray(d)?d[1]:d;var m=d>=0?"positive":"negative";u[m][v]||(u[m][v]=0),g[a]=[u[m][v],d+u[m][v]],u[m][v]+=d}o.push(h)}return e.reverseOrder&&o.reverse(),i.each(o,function(t){var e=new r(t);c.push(e)}),c}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(24),s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,a),i.augment(s,{cacheMax:null,adjustNames:["y"],_getMax:function(t){var e=this,n=e.mergeFrame,i=r.max(n,t);return i},_getXValuesMax:function(){var t=this,e=t.yDim,n=t.xDim,r={},a=t.mergeFrame;return a.each(function(t){var a=t[n],s=t[e],o=i.isArray(s)?Math.max.apply(null,s):s;r[a]=r[a]||0,r[a]<o&&(r[a]=o)}),r},processAdjust:function(t){var e=this,n=r.merge.apply(null,t);return e.mergeFrame=n,t=e._processSymmetric(t),e.mergeFrame=null,t},_processSymmetric:function(t){var e,n=this,a=n.xDim,s=n.yDim,o=n._getMax(s),u=t[0].rowObject(0),c=[];return u&&i.isArray(u[s])&&(e=n._getXValuesMax()),i.each(t,function(t){var n=t.toJSON();i.each(n,function(t){var n,r=t[s];if(i.isArray(r)){var u=t[a],c=e[u];n=(o-c)/2;var l=[];i.each(r,function(t){l.push(n+t)}),t[s]=l}else n=(o-r)/2,t[s]=[n,r+n]}),c.push(new r(n))}),c}}),t.exports=s},function(t,e,n){var i=n(130);t.exports=i},function(t,e,n){"use strict";var i=n(14),r=n(1),a=function(t){a.superclass.constructor.call(this,t)};a.ATTRS={_circle:{center:{x:0,y:0},r:0,startAngle:-Math.PI/2,endAngle:1.5*Math.PI}},r.extend(a,i),r.augment(a,{getInitAttrs:function(){var t=this.get("_circle"),e=this.getCircleInfo(),n=e.center;e=r.mix(t,e);var i={x:n.x,y:n.y,rs:0,re:e.r+100,startAngle:e.startAngle,endAngle:e.startAngle};return i},getEndAttrs:function(){var t=this.get("_circle"),e=this.getCircleInfo();e=r.mix(t,e);var n={endAngle:e.endAngle};return n},getTarget:function(){var t=this.get("group"),e=t.getParent(),n=e.addShape("Fan");return t.attr("clip",n),n}}),t.exports=a},function(t,e,n){"use strict";var i=n(14),r=n(1),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{getInitAttrs:function(){var t=this.getCircleInfo(),e=t.center,n={x:e.x,y:e.y,r:0};return n},getEndAttrs:function(){var t=this.getCircleInfo(),e={r:t.r+150};return e},getTarget:function(){var t=this.get("group"),e=t.getParent(),n=e.addShape("Circle");return t.attr("clip",n),n}}),t.exports=a},function(t,e,n){"use strict";var i=n(14),r=n(128),a=n(129),s=n(134),o=n(133),u=n(132),c=n(131),l=n(135);i.angle=r,i.circle=a,i.waveh=s,i.scaleXY=o,i.scaleY=u,i.scaleX=c,i.waves=l,i.groupAngle=r,i.groupCircle=a,i.groupWaveh=s,i.groupScaleXY=o,i.groupScaleY=u,i.groupScaleX=c,i.groupWaves=l,t.exports=i},function(t,e,n){"use strict";var i=n(14),r=n(1),a=n(5).Matrix,s=a.Matrix3,o=r.MatrixUtil,u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{getInitMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,.01,1,e.x-t.width/2,t.y)},getAnimMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,1,e.x-t.width/2,t.y)}}),t.exports=u},function(t,e,n){"use strict";var i=n(14),r=n(1),a=n(5).Matrix,s=a.Matrix3,o=r.MatrixUtil,u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{getInitMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,-.01,e.x,t.y+t.height)},getAnimMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,1,e.x,t.y+t.height)}}),t.exports=u},function(t,e,n){"use strict";var i=n(14),r=n(1),a=n(5).Matrix,s=a.Matrix3,o=r.MatrixUtil,u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{getInitMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,.01,.01,e.x,e.y)},getAnimMatrix:function(){var t=this.get("rect"),e=this.getRectCenter(t),n=new s;return n=o.scale(n,1,1,e.x,e.y)}}),t.exports=u},function(t,e,n){"use strict";var i=n(55),r=n(1),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{getInitAttrs:function(){var t=this.get("rect"),e={x:t.x,y:t.y,width:t.width,height:0};return e}}),t.exports=a},function(t,e,n){"use strict";var i=n(55),r=n(1),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{getInitAttrs:function(){var t=this.get("rect"),e={x:t.x,y:t.y,width:0,height:t.height};return e}}),t.exports=a},function(t,e,n){var i=n(18);i.Position=n(139),i.Color=n(137),i.Size=n(141),i.Shape=n(140),i.Opacity=n(138),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(53),a=n(18),s=function(t){s.superclass.constructor.call(this,t),this.initMethod()};i.extend(s,a),i.augment(s,{type:"color",names:["color"],arr:null,method:null,methodType:null,initMethod:function(){var t,e=this.methodType;t=e&&e.indexOf("-")!==-1?r.gradient(e):r[e],this.method=t}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(18),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"opacity",names:["opacity"],min:.1,max:1,arr:null}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(18),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"position",names:["x","y","z"],coord:null,parseParam:function(t,e){var n;return i.isArray(t)?(n=[],i.each(t,function(t){n.push(e.scale(t))})):n=e.scale(t),n},callback:function(t,e){var n,r,a,s=this.coord;if(t||0===t||(t=.1),e||0===e||(e=.1),i.isArray(e)&&i.isArray(t)){n=[],r=[];for(var o=0,u=0;o<t.length&&u<e.length;o++,u++)a=s.convertPoint({x:t[o],y:e[u]}),n.push(a.x),r.push(a.y)}else if(i.isArray(e))r=[],i.each(e,function(e){a=s.convertPoint({x:t,y:e}),n&&n!==a.x?(i.isArray(n)||(n=[n]),n.push(a.x)):n=a.x,r.push(a.y)});else if(i.isArray(t))n=[],i.each(t,function(t){a=s.convertPoint({x:t,y:e}),r&&r!==a.y?(i.isArray(r)||(r=[r]),r.push(a.y)):r=a.y,n.push(a.x)});else{var c=s.convertPoint({x:t,y:e});n=c.x,r=c.y}return[n,r]}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(18),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"shape",names:["shape"],arr:null}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(18),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"size",names:["size"],arr:null}),t.exports=a},function(t,e,n){function i(t){var e=[];return a.each(t,function(t){a.isArray(t)?e=e.concat(t):e.push(t)}),e}var r=8,a=n(1);t.exports=function(t){var e={},n=[],a=t.maxCount||r,s=i(t.data);if(s.length<=a+a/2)n=[].concat(s);else{var o=s.length,u=parseInt(o/(a-1),10),c=s.map(function(t,e){return e%u===0?s.slice(e,e+u):null}).filter(function(t){return t});n.push(s[0]);for(var l=1;l<c.length&&l<a-1;l++)n.push(c[l][0]);n.push(s[o-1])}return e.categories=s,e.ticks=n,e}},function(t,e,n){var i=n(1),r=5,a=7,s=[0,1,2,4,5,10],o=i.isNull,u=n(56),c=function(t){var e,n=t.min,c=t.max,l=t.interval,h=[],f=t.minCount||r,g=t.maxCount||a,p=(f+g)/2;if(i.isNull(n)&&(n=0),i.isNull(c)&&(c=0),c===n&&(0===n?c=l?l:1:n>0?n=l?c-l:0:c=l?c+l:0,c-n<5&&!l&&c-n>=1&&(l=1)),o(l)){var d=(c-n)/(p-1);l=u.snapFactorTo(d,s,"ceil"),g!==f?(e=parseInt((c-n)/l,10),e>g&&(e=g),e<f&&(e=f),l=u.snapFactorTo((c-n)/(e-1),s,"floor")):e=p}if(t.interval||g!==f)c=u.snapMultiple(c,l,"ceil"),n=u.snapMultiple(n,l,"floor"),e=Math.round((c-n)/l),n=i.fixedBase(n,l),c=i.fixedBase(c,l);else{p=parseInt(p,10);var v,m=(c+n)/2,x=u.snapMultiple(m,l,"ceil"),y=Math.floor((p-2)/2),_=x+y*l;v=p%2===0?x-y*l:x-(y+1)*l,_<c&&(_+=l),v>n&&(v-=l),c=i.fixedBase(_,l),n=i.fixedBase(v,l)}h.push(n);for(var S=1;S<e;S++)h.push(i.fixedBase(l*S+n,l));return h[h.length-1]<c&&h.push(c),{min:n,max:c,interval:l,count:e,ticks:h}};t.exports=c},function(t,e,n){function i(t){return new Date(t).getFullYear()}function r(t){return new Date(t,0,1).getTime()}function a(t){return new Date(t).getMonth()}function s(t,e){var n=i(t),r=i(e),s=a(t),o=a(e);return 12*(r-n)+(o-s)%12}function o(t,e){return new Date(t,e,1).getTime()}function u(t,e){return Math.ceil((e-t)/v)}function c(t,e){return Math.ceil((e-t)/d)}function l(t,e){return Math.ceil((e-t)/6e4)}var h=n(1),f=6,g=[1,2,4,6,8,12],p=6e4,d=36e5,v=864e5,m=n(56),x=function(t){var e=t.min,n=t.max,x=t.interval,y=t.minInterval,_=[];if(n===e&&(n=e+v),h.isNull(x)){var S,b,w,M,A,T=n-e,C=v,k=365*C;x=parseInt(T/(t.maxCount||f),10),y&&y>x&&(x=y),S=x/k;var P=i(e);if(S>.51){b=Math.ceil(S);for(var I=i(n),D=P;D<=I+b;D+=b)_.push(r(D));x=null}else if(S>.0834){b=i(e),w=Math.ceil(S/.0834);for(var O=a(e),F=s(e,n),L=0;L<=F+w;L+=w)_.push(o(P,L+O));x=null}else if(x>.5*C){M=new Date(e),b=M.getFullYear(),w=M.getMonth(e),A=Math.ceil(x/C);var R=M.getDate(),N=u(e,n);x=A*C;for(var B=0;B<N+A;B+=A)_.push(new Date(b,w,R+B).getTime())}else if(x>d){M=new Date(e),b=M.getFullYear(),w=M.getMonth(e),A=M.getDate();var E=M.getHours(),z=m.snapTo(g,Math.ceil(x/d)),X=c(e,n);x=z*d;for(var W=0;W<=X+z;W+=z)_.push(new Date(b,w,A,E+W).getTime())}else if(x>p){var V=l(e,n),Y=Math.ceil(x/p);x=Y*p;for(var G=0;G<=V+Y;G+=Y)_.push(e+G*p)}else{x<1e3&&(x=1e3),e=1e3*Math.floor(e/1e3);var j=Math.ceil((n-e)/1e3),H=Math.ceil(x/1e3);x=1e3*H;for(var q=0;q<j+H;q+=H)_.push(e+1e3*q)}}if(!_.length){e=1e3*Math.floor(e/1e3),n=1e3*Math.ceil(n/1e3);for(var U=(n-e)/x,Q=0;Q<=U;Q++)_.push(h.fixedBase(x*Q+e,x))}return{max:n,min:e,interval:x,ticks:_,count:_.length}};t.exports=x},function(t,e,n){"use strict";function i(t){if(!t._attrs&&t!==r){var e=t.superclass.constructor;e&&!e._attrs&&i(e),t._attrs={},a.mix(!0,t._attrs,e._attrs),a.mix(!0,t._attrs,t.ATTRS)}}var r,a=n(1);r=function(t){i(this.constructor),this._attrs={},this.events={};var e=this.getDefaultCfg();a.mix(this._attrs,e,t)},a.augment(r,{getDefaultCfg:function(){var t=this,e=t.constructor,n=e._attrs,i=a.mix(!0,{},n);return i},set:function(t,e){var n="_onRender"+a.ucfirst(t);return this[n]&&this[n](e,this._attrs[t]),this._attrs[t]=e,this},get:function(t){return this._attrs[t]},on:function(t,e){var n=this,i=n.events,r=i[t];return r||(r=i[t]=[]),r.push(e),n},fire:function(t,e){var n=this,i=n.events,r=i[t];r&&a.each(r,function(t){t(e)})},off:function(t,e){var n=this,i=n.events,r=i[t];return t?(r&&a.remove(r,e),n):(n.events={},n)},offEvents:function(t){var e=this,n=e.events;return t?(n[t]=null,e):(e.events={},e)},destroy:function(){var t=this,e=t.destroyed;return e?t:(t._attrs={},t.events={},void(t.destroyed=!0))}}),t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(31),a=n(3),s=n(6),o=a.Vector2,u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,r),u.CFG={type:"circle",tickInterval:null,startAngle:-Math.PI/2,endAngle:3*Math.PI/2,grid:{line:{lineWidth:1,stroke:"#C0D0E0"}},labelOffset:5},i.augment(u,{parseTick:function(t,e,n){return{text:t,value:e/n}},_getCirclePoint:function(t,e){var n=this,i=n.get("center");return e=e||n.get("radius"),{x:i.x+Math.cos(t)*e,y:i.y+Math.sin(t)*e}},getTickPoint:function(t){var e=this,n=e.get("startAngle"),i=e.get("endAngle"),r=n+(i-n)*t;return e._getCirclePoint(r)},getSideVector:function(t,e){var n=this,i=n.get("center"),r=new o(e.x-i.x,e.y-i.y);return t&&r.setLength(t),r},getSidePoint:function(t,e){var n=this,i=n.getSideVector(e,t);return{x:t.x+i.x,y:t.y+i.y}},getTickEnd:function(t,e){var n=this,i=n.get("tickLine");return e=e?e:i.value,n.getSidePoint(t,e)},getTextAnchor:function(t){var e;return s.equal(t.x,0)?e="center":t.x>0?e="left":t.x<0&&(e="right"),e},getLinePath:function(){var t=this,e=t.get("center"),n=e.x,i=e.y,r=t.get("radius"),a=r,s=t.get("startAngle"),o=t.get("endAngle"),u=t.get("inner"),c=[];if(Math.abs(o-s)===2*Math.PI)c=[["M",n,i],["m",0,-a],["a",r,a,0,1,1,0,2*a],["a",r,a,0,1,1,0,-2*a],["z"]];else{var l=t._getCirclePoint(s),h=t._getCirclePoint(o),f=Math.abs(o-s)>Math.PI?1:0,g=s>o?0:1;if(u){var p=t.getSideVector(u*r,l),d=t.getSideVector(u*r,h),v={x:p.x+n,y:p.y+i},m={x:d.x+n,y:d.y+i};c=[["M",v.x,v.y],["L",l.x,l.y],["A",r,a,0,f,g,h.x,h.y],["L",m.x,m.y],["A",r*u,a*u,0,f,Math.abs(g-1),v.x,v.y]]}else c=[["M",n,i],["L",l.x,l.y],["A",r,a,0,f,g,h.x,h.y],["L",n,i]]}return c},addLabel:function(t,e,n,i){var r=this,a=r.get("labelOffset")||.001;e=r.getSidePoint(e,a),u.superclass.addLabel.call(r,t,e,n,i)},autoRotateLabels:function(){var t=this,e=t.get("ticks"),n=t.get("labelsGroup");if(n&&e.length>12){var r=t.get("radius"),a=t.get("startAngle"),s=t.get("endAngle"),o=s-a,u=o/(e.length-1),c=Math.sin(u/2)*r*2,l=t.getMaxLabelWidth(n);i.each(n.get("children"),function(t,n){var i=e[n],r=i.value*o+a,s=r%(2*Math.PI);l<c?(s<=0&&(r+=Math.PI),s>Math.PI&&(r-=Math.PI),r-=Math.PI/2,t.attr("textAlign","center")):s>Math.PI/2?r-=Math.PI:s<Math.PI/2*-1&&(r+=Math.PI),t.rotateAtStart(r)})}}}),t.exports=u},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(5).Group,a=n(1),s="x-chart-grid";a.extend(i,r),i.CFG={zIndex:1,elCls:s,type:"line",line:null,items:null,odd:null,even:null,animate:!1,matrix:null,duration:1e3},a.augment(i,{_renderUI:function(){i.superclass._renderUI.call(this),this._drawLines()},_drawLines:function(){var t=this,e=t.get("line"),n=t.get("items");n&&n.length>0&&(t._precessItems(n),t._drawGridLines(n,e,s+"-line"))},_precessItems:function(t){var e,n=this;a.each(t,function(t,i){e&&(n.get("odd")||n.get("even"))&&n._drawOddEven(t,e,i),e=t})},_drawGridLines:function(t,e,n){var i,r,s,o,u=this,c=this.get("type"),l=this.get("smooth"),h=this.get("start");"line"===c||"polygon"===c?a.each(t,function(t){h&&h.x===t[0].x&&t[0].y===h.y||(l?(r=[],a.each(t,function(t){r.push(t.x),r.push(t.y)}),s=a.catmullRom2bezier(r),s.unshift(["M",t[0].x,t[0].y])):(s=[],a.each(t,function(t,e){0===e?s.push(["M",t.x,t.y]):s.push(["L",t.x,t.y])})),o=a.mix({},e,{path:s}),i=u.addShape("path",{elCls:n,attrs:o
}),i.animateType="gridLine",i.id=t.id+"grid",u.set("gridLine"+n,i))}):a.each(t,function(t){h&&h.x===t[0].x&&t[0].y===h.y||(s=[],a.each(t,function(t,e){var n=t.radius;0===e?s.push(["M",t.x,t.y]):s.push(["A",n,n,0,0,t.flag,t.x,t.y])}),o=a.mix({},e,{path:s}),i=u.addShape("path",{elCls:n,attrs:o}),i.animateType="gridLine",i.id=t.id+"grid",u.set("gridLine"+n,i))})},_drawOddEven:function(t,e,n){var i,r,a=this,o=a.get("odd"),u=a.get("even");n%2===0?u&&(r=a._getBackItem(e,t,u),i="even"):o&&(r=a._getBackItem(e,t,o),i="odd"),r&&a.addShape("Path",{elCls:s+"-"+i,attrs:r})},_getBackItem:function(t,e,n){var i=[],r=this.get("type");if("line"===r||"polygon"===r){a.each(t,function(t,e){0===e?i.push(["M",t.x,t.y]):i.push(["L",t.x,t.y])});for(var s=e.length-1;s>=0;s--){var o=e[s];i.push(["L",o.x,o.y])}i.push(["Z"])}else{var u=t[0].flag;a.each(t,function(t,e){var n=t.radius;0===e?i.push(["M",t.x,t.y]):i.push(["A",n,n,0,0,t.flag,t.x,t.y])});for(var c=e.length-1;c>=0;c--){var l=e[c],h=l.radius;c===e.length-1?i.push(["M",l.x,l.y]):i.push(["A",h,h,0,0,1===u?0:1,l.x,l.y])}}return n=a.mix({},n,{path:i})}}),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(31),a=n(3),s=a.Vector2,o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,r),o.CFG={type:"helix",grid:{line:{"stroke-width":1,stroke:"#C0D0E0"}},labelOffset:5,startAngle:1.25*Math.PI,endAngle:7.25*Math.PI,a:0,center:null,axisStart:null,crp:[]},i.augment(o,{getLinePath:function(){var t=this,e=t.get("crp"),n=t.get("axisStart"),r=i.catmullRom2bezier(e);return r.unshift(["M",n.x,n.y]),r},getTickPoint:function(t){var e=this,n=e.get("startAngle"),i=e.get("endAngle"),r=n+(i-n)*t;return e._getHelixPoint(r)},_getHelixPoint:function(t){var e=this,n=e.get("center"),i=e.get("a"),r=i*t;return{x:n.x+Math.cos(t)*r,y:n.y+Math.sin(t)*r}},getSideVector:function(t,e){var n=this,i=n.get("center"),r=new s(e.x-i.x,e.y-i.y);return t&&r.setLength(t),r},getSidePoint:function(t,e){var n=this,i=n.getSideVector(e,t);return{x:t.x+i.x,y:t.y+i.y}},getTickEnd:function(t,e){var n=this,i=n.get("tickLine");return e=e?e:i.value,n.getSidePoint(t,e)}}),t.exports=o},function(t,e,n){var i=n(57);i.Abstract=n(31),i.Circle=n(146),i.MultLine=n(150),i.Helix=n(148),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(57),a=n(3),s=a.Vector2,o=function(t){o.superclass.constructor.call(this,t)};o.CFG={type:"multLine"},i.extend(o,r),i.augment(o,{getLinePath:function(){var t=this,e=t.get("tickPoints"),n=t.get("start"),r=t.get("end"),a=[];a.push(n.x),a.push(n.y),i.each(e,function(t){a.push(t.x),a.push(t.y)}),a.push(r.x),a.push(r.y);var s=i.catmullRom2bezier(a);return s.unshift(["M",n.x,n.y]),s},getTickPoint:function(t,e){var n=this.get("tickPoints");return n[e]},getTickEnd:function(t,e,n){var i=this,r=i.get("tickLine"),a=e?e:r.value,s=i.getSideVector(a,t,n);return{x:t.x+s.x,y:t.y+s.y}},getSideVector:function(t,e,n){var i,r=this;if(0===n)i=r.get("start");else{var a=r.get("tickPoints");i=a[n-1]}var o=new s(e.x-i.x,e.y-i.y),u=o.normalize(),c=u.vertical(!1);return c.multiplyScaler(t)}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(59),a=function(){};a.ATTRS={labels:null},i.augment(a,{renderLabels:function(){var t,e=this,n=e.get("labels");n&&(n.items||(n.items=[]),i.isNull(n.animate)&&(n.animate=e.get("animate")),t=e.addGroup(r,n),e.set("labelsGroup",t))},resetLabels:function(t){var e=this,n=e.get("labels");if(n){var r=e.get("labelsGroup"),a=r.getLabels(),s=a.length;t=t||n.items,i.each(t,function(t,n){if(n<s){var i=a[n];r.changeLabel(i,t)}else e.addLabel(t.text,t)});for(var o=s-1;o>=t.length;o--)a[o].remove()}},addLabel:function(t,e){var n,i=this,r=i.get("labelsGroup"),a={};return r&&(a.text=t,a.x=e.x,a.y=e.y,a.point=e,a.textAlign=e.textAlign,a.id=e.id,e.rotate&&(a.rotate=e.rotate),n=r.addLabel(a)),n},removeLabels:function(){var t=this,e=t.get("labelsGroup");e&&e.remove(),t.set("labelsGroup",null)}}),t.exports=a},function(t,e,n){"use strict";function i(t,e){var n=null;return r.each(t,function(t){if(t.name===e.get("value"))return n=t,!1}),n}var r=n(1),a=n(60),s=n(47),o=n(41),u=function(t){u.superclass.constructor.call(this,t)};u.CFG={type:"category-legend",items:null,spacingX:5,spacingY:10,wordSpaceing:2,itemsGroup:null,layout:"horizontal",leaveChecked:!0,backPadding:[0,0,0,0],checkable:!0,itemsbeginX:0,itemsbeginY:0,unChecked:"#CCC",back:null,itemWrap:!1,maxLength:100,word:{fill:"#333",textBaseline:"middle"},formatter:null},r.extend(u,o),r.augment(u,a,{_formatPoint:function(t){var e=this.get("formatter");return e&&(t=e.call(this,t)),t},_beforeRenderUI:function(){u.superclass._beforeRenderUI.call(this),this.set("back",{})},_renderUI:function(){u.superclass._renderUI.call(this),this._renderTitle(),this._renderItems(),this._wrapItems(),this._renderBack(),this.setPosition()},_wrapItems:function(){var t=this.get("itemWrap"),e=this.get("layout"),n=this.get("maxLength");t&&n>0&&("horizontal"===e?this._warpHorizontal():"vertical"===e&&this._warpVertical())},_warpVertical:function(){var t,e,n,i,a=this.get("itemsGroup"),s=this.get("titleShape"),o=a.get("children"),u=this.get("maxLength"),c=this.get("spacingX"),l=this.get("spacingY"),h=s.getBBox().height+l,f=1,g=h,p=0,d=0,v=0;a.getBBox().height>u&&r.each(o,function(r){i=r.getBBox(),e=i.width+c,n=i.height+l,p=d,d=e>d?e:d,t=g,g+=n,g>u?(v+=p,g=n+h,f++,d=0,p=0,r.move(v,h)):r.move(v,t)})},_warpHorizontal:function(){var t,e,n,i=this.get("itemsGroup"),a=i.get("children"),s=this.get("maxLength"),o=this.get("spacingX"),u=this.get("spacingY"),c=0,l=0,h=0;i.getBBox().width>s&&r.each(a,function(i){n=i.getBBox(),t=n.width+o,e=n.height+u,h=l,l+=t,l>s?(l=t,c++,i.move(0,c*e+u)):i.move(h,c*e+u)})},_bindUI:function(){this._bindOverOut(),this._bindClick()},_bindClick:function(){var t=this.get("checkable");t&&this.on("click",r.wrapBehavior(this,"_onClick"))},_bindOverOut:function(){this.on("mouseenter",r.wrapBehavior(this,"_onMouseenter")),this.on("mouseleave",r.wrapBehavior(this,"_onMouseleave"))},_onClick:function(t){var e,n,r,a,o=this.get("leaveChecked"),u=this._getLi(t.currentTarget),c=this.get("items");if(u){var l=i(c,u);if(a=u.get("checked"),e=new s("itemclick",t),e.item=l,this.trigger(e),o&&a&&1===this.getLeaveCount())return;a?(r=new s("itemunchecked",t),r.item=l,r.currentTarget=u,this.trigger(r)):(n=new s("itemchecked",t),n.item=l,n.currentTarget=u,this.trigger(n))}},_onMouseenter:function(t){var e=this.get("canvas"),n=this._getLi(t.currentTarget);if(n){var a=new s("itemover",t),o=t.currentTarget,u=o.get("canvas").get("el");a.item=n,this.trigger(a),r.modiCSS(u,{cursor:"pointer"});var c=this.get("items"),l=i(c,n);if(n.get("checked")){var h=new s("itemactived",t);h.item=l,h.currentTarget=n,this.trigger(h),e.draw()}}},_onMouseleave:function(t){var e=this.get("canvas"),n=this._getLi(t.currentTarget);if(n){var i=new s("itemout",t),a=e.get("el");if(i.item=n,this.trigger(i),r.modiCSS(a,{cursor:"default"}),n.get("checked")){var o=new s("itemunactived",t);this.trigger(o),e.draw()}}},_renderBack:function(){var t=this.get("itemsGroup"),e=this.get("backPadding"),n=this.get("back");t.renderBack(e,n)},_renderItems:function(){var t=this,e=t.get("items");r.each(e,function(e,n){t._addItem(e,n)})},_addItem:function(t){var e=this.get("itemsGroup"),n=this._getNextX(),i=this._getNextY(),a=this.get("unChecked"),s={words:[{text:this._formatPoint(t.name)}]},o={};t.marker&&(t.checked||(t.marker.fill=a,t.marker.stroke&&(t.marker.stroke=a),o.fill=a),s.marker=t.marker),o=r.mix({},this.get("word"),o),this.addEachItem(e,{word:o,wordSpaceing:this.get("wordSpaceing"),x:n,y:i,items:s,"class":"legend-item",checked:t.checked,value:t.name})},_getNextX:function(){var t=this.get("layout"),e=this.get("spacingX"),n=this.get("itemsGroup"),i=n.get("children"),a=0;return"horizontal"===t&&r.each(i,function(t){a+=t.getBBox().width+e}),a},_getNextY:function(){var t=this.get("spacingY"),e=this.get("layout"),n=this.get("itemsGroup"),i=this.get("titleShape"),a=n.get("children"),s=i.getBBox().height+t;return"vertical"===e&&r.each(a,function(e){s+=e.getBBox().height+t}),s},_getLi:function(t){var e=t.get("parent");return"legend-item"===e.get("class")?e:null}}),t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(41),a=n(33),s=n(47),o=n(5).Group,u=n(62),c=16,l=function(t){l.superclass.constructor.call(this,t)};l.CFG={type:"continuous-legend",items:null,layout:"vertical",width:200,height:60,attrType:null,titleOffset:20,nameOffset:10,range:[0,100],outRange:{fill:"#ccc"},inRange:{fill:"#4E7CCC"},word:{fill:"#333",textAlign:"center",textBaseline:"middle"},middleAttr:{fill:"#fff",fillOpacity:0},checkable:!0,attr:null},i.extend(l,r),i.augment(l,{_formatPoint:function(t){var e=this.get("formatter");return e&&(t=e.call(this,t)),t},_calStartPoint:function(){var t=this.get("titleShape"),e=t.getBBox(),n=this.get("titleOffset"),i={x:0,y:e.height+n};return i},_beforeRenderUI:function(){var t=this.get("items");if(i.isArray(t)&&t.length){l.superclass._beforeRenderUI.call(this);var e=new o,n=new o,r=new o,a=this._calStartPoint(),s=this.addGroup(u,{minHandleElement:e,maxHandleElement:n,backgroundElement:r,middleAttr:this.get("middleAttr"),layout:this.get("layout"),range:this.get("range"),width:this.get("width"),height:this.get("height"),operable:this.get("checkable")});s.translate(a.x,a.y),this.set("rangeElement",s),this.set("firstItem",t[0]),this.set("lastItem",t[t.length-1])}},_bindUI:function(){var t=this.get("checkable");if(t){var e=this,n=e.get("rangeElement");n.on("rangeChange",function(t){var n=t.range,i=1*e.get("firstItem").name,r=1*e.get("lastItem").name,a=i+n[0]/100*(r-i),o=i+n[1]/100*(r-i);o>1&&(a=parseInt(a,10),o=parseInt(o,10)),e._updateElement(a,o);var u=new s("itemfiltered",t);u.range=[a,o],e.trigger(u)})}},_updateElement:function(t,e){var n=this.get("minTextElement"),i=this.get("maxTextElement");if(n.attr("text",this._formatPoint(t)+""),i.attr("text",this._formatPoint(e)+""),"color"===this.get("attrType")){var r=this.get("attr"),a=this.get("minButtonElement"),s=this.get("maxButtonElement");a.attr("fill",r.mappingValues(t).join("")),s.attr("fill",r.mappingValues(e).join(""))}},_renderUI:function(){l.superclass._renderUI.call(this),this._renderBackground(),this._renderTrigger()},_renderBackground:function(){var t,e=this.get("attrType"),n=this.get("rangeElement"),i=n.get("middleHandleElement");"color"===e?t=this._renderGradient():"size"===e&&(t=this._renderTriangle()),t.attr("clip",i)},_renderGradient:function(){var t,e=this.get("rangeElement"),n=e.get("backgroundElement"),r=this.get("width"),s=this.get("height"),o=this.get("layout"),u=this.get("items"),c="";return"vertical"===o?(c+="l (90) ",i.each(u,function(e){t=new a(e.color).getRGBStyle(),c+=1-e.value+":"+t+" "})):(c+="l (0) ",i.each(u,function(e){t=new a(e.color).getRGBStyle(),c+=e.value+":"+t+" "})),this._addBackground(n,"Rect",{x:0,y:0,width:r,height:s,fill:c,strokeOpacity:0})},_renderTriangle:function(){var t=this.get("rangeElement"),e=t.get("backgroundElement"),n=this.get("width"),r=this.get("height"),a=this.get("inRange"),s=this.get("layout"),o="vertical"===s?[[0,0],[n,0],[n,r]]:[[0,r],[n,0],[n,r]];return this._addBackground(e,"Polygon",i.mix({points:o},a))},_addBackground:function(t,e,n){t.addShape(e,{attrs:i.mix({},n,this.get("outRange"))});var r=t.addShape(e,{attrs:n});return r},_renderTrigger:function(){var t,e,n,r,a=this.get("firstItem"),s=this.get("lastItem"),o=this.get("layout"),u=this.get("attrType"),c=this.get("word"),l=this.get("inRange");"color"===u?(t={fill:a.color},e={fill:s.color}):(t=i.mix({},l),e=i.mix({},l)),n=i.mix({text:a.name},c),r=i.mix({text:s.name},c),"vertical"===o?(this._addVerticalTrigger("min",t,n),this._addVerticalTrigger("max",e,r)):(this._addHorizontalTrigger("min",t,n),this._addHorizontalTrigger("max",e,r))},_addVerticalTrigger:function(t,e,n){var r=this.get("rangeElement"),a=r.get(t+"HandleElement"),s=this.get("width"),o=a.addShape("polygon",{attrs:i.mix({points:[[s/2+c,0],[s/2+1,0],[s/2+c,"min"===t?c:-c]]},e)}),u=a.addShape("text",{attrs:i.mix(n,{x:s+8,y:"max"===t?-8:8,textAlign:"start",textBaseline:"middle"})}),l=this.get("layout"),h="vertical"===l?"ns-resize":"ew-resize";o.set("cursor",h),u.set("cursor",h),this.set(t+"ButtonElement",o),this.set(t+"TextElement",u)},_addHorizontalTrigger:function(t,e,n){var r=this.get("rangeElement"),a=r.get(t+"HandleElement"),s=a.addShape("polygon",{attrs:i.mix({points:[[0,0],[0,-1*c],["min"===t?-c:c,-1*c]]},e)}),o=a.addShape("text",{attrs:i.mix(n,{x:"min"===t?-c/2:c/2,y:-1*(8+c),textAlign:"min"===t?"end":"start",textBaseline:"middle"})}),u=this.get("layout"),l="vertical"===u?"ns-resize":"ew-resize";s.set("cursor",l),o.set("cursor",l),this.set(t+"ButtonElement",s),this.set(t+"TextElement",o)}}),t.exports=l},function(t,e,n){var i=n(41);i.Category=n(152),i.Continuous=n(153),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(5).Group,a=n(61),s=function(t){s.superclass.constructor.call(this,t)};s.CFG={type:"plotBack",margin:null,border:null,plotRange:null,background:null},i.extend(s,r),i.augment(s,{_beforeRenderUI:function(){this._calculateRange()},_renderUI:function(){this._renderBorder(),this._renderBackground()},_renderBorder:function(){var t,e=this,n=e.get("border"),r=e.get("canvas"),a=e.get("borderShape");if(n){var s=e.get("width")||r.get("width"),o=e.get("height")||r.get("height");a?a.attr({x:0,y:0,width:s,height:o}):(t=i.mix({x:0,y:0,width:s,height:o},n),a=this.addShape("rect",{attrs:t}),this.set("borderShape",a))}},_renderBackground:function(){var t,e,n,r,a=this,s=a.get("background"),o=a.get("plotRange"),u=a.get("backShape");s&&(t=o.getWidth(),e=o.getHeight(),n=o.tl,r={x:n.x,y:n.y,width:t,height:e},u?u.attr(r):(s.image?(r.img=s.image,u=a.addShape("image",{attrs:r})):(i.mix(r,s),u=a.addShape("rect",{attrs:r})),a.set("backShape",u)))},_calculateRange:function(){var t,e,n=this,r=n.get("margin"),s=n.get("canvas"),o=n.get("width")||s.get("width"),u=n.get("height")||s.get("height"),c=n.get("plotRange"),l=0,h=0,f=0,g=0;i.isNumber(r)&&(l=h=f=g=r),i.isArray(r)&&(l=r[0],f=i.isNull(r[1])?r[0]:r[1],g=i.isNull(r[2])?r[0]:r[2],h=i.isNull(r[3])?f:r[3]),t={x:h,y:u-g},e={x:o-f,y:l},c?c.reset(t,e):(c=new a(t,e),n.set("plotRange",c))},repaint:function(){return this._calculateRange(),this._renderBorder(),this._renderBackground(),this}}),t.exports=s},function(t,e,n){"use strict";function i(t,e){return t.getElementsByClassName(e)[0]}var r=n(1),a=n(3),s=n(5).Group,o=n(60),u="ac-title",c="ac-list",l=[10,10,10,10],h=20,f=function(t){f.superclass.constructor.call(this,t)};f.CFG={zIndex:10,x:0,y:0,items:null,title:{fill:"#fff"},name:{},value:{},crossLine:{stroke:"#999",lineWidth:1},markerCfg:null,titleText:void 0,wordSpaceing:6,crosshairs:!1,titleShape:null,contentGroup:null,crossLineShapeX:null,crossLineShapeY:null,background:{radius:6,fill:"#000",fillOpacity:.7},plotRange:null,shared:!1,offset:10,animate:!0,duration:50,visible:!1,valueSplit:"",valueSuffix:"",custom:!1,customDiv:null,customFollow:!0,timeStamp:0,html:'<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="'+u+'"></h4><ul class="'+c+'"></ul></div>',itemTpl:'<li><span style="color:{color}">{name}</span> : {value}</li>',inPlot:!0},r.extend(f,s),r.augment(f,o,{_beforeRenderUI:function(){var t=this.get("custom"),e=this.get("crossLine"),n=this.addGroup({attrs:e}),i=this.addGroup({zIndex:10,attrs:{fill:"#fff",textAlign:"left"}});this.set("crossLineGroup",n),this.set("contentGroup",i),this.set("itemsGroup",i.addGroup()),t&&this._setCustomDiv()},_renderUI:function(){if(this.get("items")){var t=this.get("custom");t?this._renderCustom():this._renderContent()}this._renderCrossLine()},_renderContent:function(){var t=this,e=t.get("items"),n=t.get("title"),i=t.get("titleText"),a=t.get("name"),s=t.get("value"),o=t.get("valueSplit"),u=t.get("valueSuffix"),c=t.get("markerCfg"),f=this.get("itemsGroup");if(f&&f.clear(),n){var g=f.addShape("text",{attrs:r.mix({},n,{x:l[3],y:l[0]+14,text:i})});this.set("titleShape",g)}r.each(e,function(e,n){var i=r.mix({},a,{text:e.name?e.name+":":""}),g=r.mix({},s,{text:e.value+o+u});e.marker===!0&&(e.marker="circle");var p=e.marker?{symbol:e.marker,fill:e.color}:{};t.addEachItem(f,{x:l[3],y:(n+1)*h+l[0]+8,items:{color:e.color,words:[i,g],marker:r.mix(p,c)}})}),f.renderBack(l,this.get("background"))},_renderCrossLine:function(){var t=this.get("crosshairs"),e=this.get("canvas"),n=this.get("plotRange");if(t)switch(this.clearCrossLineGroup(),t.type){case"x":this._renderCrossLineX(e,n);break;case"y":this._renderCrossLineY(e,n);break;case"cross":this._renderCrossLineX(e,n),this._renderCrossLineY(e,n);break;default:this._renderCrossLineY(e,n)}},_renderCrossLineY:function(t,e){var n=r.mix({x1:0,y1:e?e.bl.y:t.get("height"),x2:0,y2:e?e.tl.y:0},this.get("crossLine"));"dash"===this.get("crosshairs").shape&&(n.lineDash="6 3"),this._addCrossLineShape(n,"Y")},_renderCrossLineX:function(t,e){var n=r.mix({x1:e?e.bl.x:t.get("width"),y1:0,x2:e?e.br.x:0,y2:0},this.get("crossLine"));"dash"===this.get("crosshairs").shape&&(n.lineDash="6 3"),this._addCrossLineShape(n,"X")},_addCrossLineShape:function(t,e){var n=this.get("crossLineGroup"),i=n.addShape("line",{attrs:t});return this.set("crossLineShape"+e,i),i},clearCrossLineGroup:function(){var t=this.get("crossLineGroup");this.set("crossLineShapeX",null),this.set("crossLineShapeY",null),t.clear()},setMarkers:function(t,e){var n=this,i=n.get("markerGroup");i?i.clear():(i=n.addGroup({zIndex:2}),n.set("markerGroup",i)),r.each(t,function(t){i.addShape("marker",{attrs:r.mix({},e,{stroke:t.color,x:t.point.x,y:t.point.y})})})},clearMarkers:function(){var t=this.get("markerGroup");t&&t.clear()},setCross:function(t){this.set("crosshairs",{type:t}),this._renderCrossLine()},setContent:function(t,e){var n=this._isContentChange(t,e);if(n){var i=this.get("custom"),r=+new Date;this.set("items",e),this.set("titleText",t),this.set("timeStamp",r),i?this._renderCustom():this._renderContent()}return this},_isContentChange:function(t,e){var n=this.get("titleText"),i=this.get("items"),a=!(t===n&&i.length===e.length);return a||r.each(e,function(t,e){var n=i[e];if(a=t.value!==n.value||t.color!==n.color||t.name!==n.name||t.title!==n.title)return!1}),a},getTitle:function(){return this.get("titleShape")},setPosition:function(t,e){var n,i=this.get("canvas"),s=this.get("custom"),o=this.get("customDiv"),u=this.get("plotRange"),c=this.get("offset"),l=this.get("crossLineShapeX"),h=this.get("crossLineShapeY"),f=this.get("contentGroup"),g=(this.get("markerGroup"),f.getBBox()),p=this.get("animate"),d=!0,v=t,m=e;if(o&&this.get("customFollow")?(n=r.getWidth(o)+2*c,t-=n,e=e-r.getHeight(o)-2*c):(n=g.width+c,t-=n,e-=g.height),this.get("inPlot")&&u&&(u.isInRange(t,e)||(u.isInHorizontal(t)||(u.tr.x-u.tl.x>=2*n?(t=Math.max(u.tl.x,v)+c,d=!1):(t=u.tl.x,e-=c)),u.isInVertical(e)||(e=u.tl.y))),this.get("x")!==t||this.get("y")!==e)if(h&&(d?h.move(v,0):h.move(t-c,0)),l&&l.move(0,m),s)this.moveCustom(t,e,d);else{var x=new a.Matrix3;x.translate(t,e),p&&this.get("visible")?f.animate({matrix:x},this.get("duration")):(f.setMatrix(x),this.get("visible")||this.show(),i.draw())}},_setCustomDiv:function(){var t,e,n=this,i=n.get("html"),a=n.get("canvas").get("el").parentNode;/^\#/.test(i)?(e=i.replace("#",""),t=document.getElementById(e)):t=r.createDom(i),n.set("customDiv",t),n.get("customFollow")&&(a.appendChild(t),a.style.position="relative")},_renderCustom:function(){var t=this,e=t.get("title"),n=t.get("titleText"),a=t.get("customDiv"),s=i(a,u),o=i(a,c),l=t.get("items");t._clearCustom(),s&&e&&(s.innerHTML=n),o&&(t.set("titleText",n),r.each(l,function(e,n){t.addCustomItem(e,n)}))},_clearCustom:function(){var t=this.get("customDiv"),e=i(t,u),n=i(t,c);e&&(e.innerHTML=""),n&&(n.innerHTML="")},addCustomItem:function(t,e){var n,a,s=this.get("customDiv"),o=i(s,c),u=this.get("itemTpl"),l=r.mix({index:e},t);n=r.substitute(u,l),a=r.createDom(n),o.appendChild(a)},moveCustom:function(t,e){var n=this.get("customDiv");n&&this.get("customFollow")&&(n.style.left=t+"px",n.style.top=e+"px")},show:function(){var t=this.get("crossLineShapeX"),e=this.get("crossLineShapeY"),n=this.get("markerGroup"),i=this.get("customDiv"),r=this.get("hideHandler");r&&clearTimeout(r),this.sort(),t&&t.show(),e&&e.show(),n&&n.show(),f.superclass.show.call(this),i&&this.get("customFollow")&&(i.style.visibility="visible",this.get("canvas").draw())},hide:function(){var t=this,e=t.get("customDiv"),n=t.get("crossLineShapeX"),i=t.get("crossLineShapeY"),r=t.get("markerGroup"),a=t.get("canvas"),s=setTimeout(function(){e&&t.get("customFollow")&&(e.style.visibility="hidden"),t.set("hideHandler",null),t.get("destroyed")||(f.superclass.hide.call(t),a.draw())},t.get("duration"));t.set("hideHandler",s),n&&n.hide(),i&&i.hide(),r&&r.hide()},remove:function(){var t=this,e=t.get("crossLineShapeX"),n=t.get("crossLineShapeY"),i=t.get("markerGroup"),r=t.get("customDiv"),a=t.get("html");e&&e.remove(),n&&n.remove(),i&&i.remove(),f.superclass.remove.call(this),r&&!/^\#/.test(a)&&r.parentNode.removeChild(r)}}),t.exports=f},function(t,e,n){"use strict";var i=n(81),r=n(160),a=n(66),s=function(t){s.superclass.constructor.call(this,t)};s.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null},i.extend(s,a.Group),i.augment(s,{init:function(){s.superclass.init.call(this),this._setGlobalParam(),this._setDOM(),this._setInitSize(),this._setCanvas(),this._scale(),this.get("eventEnable")&&this._registEvents()},_registEvents:function(){var t=this,e=t.get("el"),n=new r(t);e.addEventListener("mouseout",function(t){n.mouseout(t)},!1),e.addEventListener("mouseover",function(t){n.mouseover(t)},!1),e.addEventListener("mousemove",function(t){n.mousemove(t)},!1),e.addEventListener("mousedown",function(t){n.mousedown(t)},!1),e.addEventListener("mouseup",function(t){n.mouseup(t)},!1),e.addEventListener("click",function(t){n.click(t)},!1),e.addEventListener("dblclick",function(t){n.dblclick(t)},!1)},_scale:function(){var t=this.get("pixelRatio");this.scale(t,t)},_setCanvas:function(){var t=this.get("canvasDOM");this.set("el",t),this.set("context",t.getContext("2d")),this.set("canvas",this)},_setGlobalParam:function(){var t=this.get("pixelRatio");t||this.set("pixelRatio",i.getRatio())},_setDOM:function(){this._setContainer(),this._setLayer()},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),i.modiCSS(e,{position:"relative"})},_setLayer:function(){var t=this.get("containerDOM"),e=i.guid("canvas_");if(t){var n=i.createDom('<canvas id="'+e+'"></canvas>');t.appendChild(n),this.set("canvasDOM",n)}},_setInitSize:function(){this.get("widthStyle")?this.changeSizeByCss(this.get("widthStyle"),this.get("heightStyle")):this.get("width")&&this.changeSize(this.get("width"),this.get("height"))},_getPx:function(t,e){var n=this.get("canvasDOM");n.style[t]=e;var r=i.getBoundingClientRect(n);return"width"===t?r.right-r.left:"height"===t?r.bottom-r.top:void 0},_reSize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),i=this.get("widthStyle"),r=this.get("heightStyle");t.style.width=i,t.style.height=r,t.setAttribute("width",e),t.setAttribute("height",n)},getWidth:function(){var t=this.get("pixelRatio"),e=this.get("width");return e*t},getHeight:function(){var t=this.get("pixelRatio"),e=this.get("height");return e*t},changeSizeByCss:function(t,e){var n=this.get("pixelRatio");t=this._getPx("width",t),e=this._getPx("height",e);var i=t*n,r=e*n;this.set("widthStyle",t),this.set("heightStyle",e),this.set("widthCanvas",i),this.set("heightCanvas",r),this.set("width",t),this.set("height",e),this._reSize()},changeSize:function(t,e){var n=this.get("pixelRatio"),i=t*n,r=e*n;this.set("widthCanvas",i),this.set("heightCanvas",r),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._reSize()},getPointByClient:function(t,e){var n=this.get("el"),i=n.getBoundingClientRect(),r=i.right-i.left,a=i.bottom-i.top;return{x:(t-i.left)*(n.width/r),y:(e-i.top)*(n.height/a)}},getClientByPoint:function(t,e){var n=this.get("el"),i=n.getBoundingClientRect(),r=i.right-i.left,a=i.bottom-i.top;return{clientX:t/(n.width/r)+i.left,clientY:e/(n.height/a)+i.top}},beforeDraw:function(){var t=this.get("context"),e=this.get("el");t&&t.clearRect(0,0,e.width,e.height)},_beginDraw:function(){this.setSilent("toDraw",!0)},_endDraw:function(){this.setSilent("toDraw",!1)},draw:function(){function t(){e.set("animateHandler",i.requestAnimationFrame(function(){e.set("animateHandler",void 0),e.get("toDraw")&&t()})),e.beforeDraw();try{var n=e.get("context");s.superclass.draw.call(e,n)}catch(r){console.warn("error in draw canvas, detail as:"),console.warn(r),e._endDraw()}e._endDraw()}var e=this;e.get("destroyed")||(e.get("animateHandler")?this._beginDraw():t())},destroy:function(){var t=this.get("containerDOM"),e=this.get("canvasDOM");e&&t&&t.removeChild(e),s.superclass.destroy.call(this)}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=function(t,e,n,i){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=i,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e};i.augment(r,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0},stopPropagation:function(){this.propagationStopped=!0},remove:function(){this.remove=!0},clone:function(){return i.clone(this)},toString:function(){return"[Event (type="+this.type+")]"}}),t.exports=r},function(t,e,n){var i=n(1),r=n(158);t.exports={initEventDispatcher:function(){this.__listeners={}},on:function(t,e){var n=this.__listeners;return i.isNull(n[t])&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e),this},off:function(t,e){var n=this.__listeners;return 0===arguments.length?(this.__listeners={},this):1===arguments.length&&i.isString(t)?(n[t]=[],this):2===arguments.length&&i.isString(t)&&i.isFunction(e)?(i.remove(n[t],e),this):void 0},has:function(t,e){var n=this.__listeners;return 0===arguments.length&&!i.isBlank(n)||(!(1!==arguments.length||!n[t]||i.isBlank(n[t]))||!(2!==arguments.length||!n[t]||n[t].indexOf(e)===-1))},trigger:function(t){var e=this,n=e.__listeners,r=n[t.type];if(t.target=e,i.notNull(r)&&r.forEach(function(n){n.call(e,t)}),t.bubbles){var a=e.get("parent");a&&!t.propagationStopped&&a.trigger(t)}return e},fire:function(t,e){var n=new r(t);i.each(e,function(t,e){n[e]=t}),this.trigger(n)}}},function(t,e,n){"use strict";var i=n(1),r=n(47),a=function(t){this.canvas=t,this.el=t.get("el"),this.current=null,this.pre=null};i.augment(a,{tryTrigger:function(t,e){t.__listeners&&t.trigger(e)},getCurrent:function(t){var e=this.canvas,n=e.getPointByClient(t.clientX,t.clientY);this.point=n,this.pre=this.current,this.current=e.getShape(n.x,n.y)},mousemove:function(t){this.getCurrent(t);var e=this.point,n=this.canvas;if(n.has("canvas-mousemove")){var i=new r("canvas-mousemove",t,(!0),(!0));i.x=e.x,i.y=e.y,i.clientX=t.clientX,i.clientY=t.clientY,i.currentTarget=n,this.tryTrigger(n,i)}if(this.pre&&this.pre!==this.current){var a=new r("mouseleave",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.pre,a.target=this.pre,this.tryTrigger(this.pre,a)}if(this.current){var s=new r("mousemove",t,(!0),(!0));if(s.x=e.x,s.y=e.y,s.clientX=t.clientX,s.clientY=t.clientY,s.currentTarget=this.current,s.target=this.current,this.tryTrigger(this.current,s),this.pre!==this.current){var o=new r("mouseenter",t,(!0),(!0));o.x=e.x,o.y=e.y,o.clientX=t.clientX,o.clientY=t.clientY,o.currentTarget=this.current,o.target=this.current,this.tryTrigger(this.current,o)}}},mousedown:function(t){var e=this.point,n=this.canvas;if(n.has("canvas-mousedown")){var i=new r("canvas-mousedown",t,(!0),(!0));i.x=e.x,i.y=e.y,i.clientX=t.clientX,i.clientY=t.clientY,i.currentTarget=n,this.tryTrigger(n,i)}if(this.current){var a=new r("mousedown",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},mouseup:function(t){var e=this.point,n=this.canvas;if(n.has("canvas-mouseup")){var i=new r("canvas-mouseup",t,(!0),(!0));i.x=e.x,i.y=e.y,i.clientX=t.clientX,i.clientY=t.clientY,i.currentTarget=n,this.tryTrigger(n,i)}if(this.current){var a=new r("mouseup",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},click:function(t){this.getCurrent(t);var e=this.point,n=this.canvas;if(n.has("canvas-click")){var i=new r("canvas-click",t,(!0),(!0));i.x=e.x,i.y=e.y,i.clientX=t.clientX,i.clientY=t.clientY,i.currentTarget=n,this.tryTrigger(n,i)}if(this.current){var a=new r("click",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},dblclick:function(t){var e=this.point,n=this.canvas;if(n.has("canvas-dblclick")){var i=new r("canvas-dblclick",t,(!0),(!0));i.x=e.x,i.y=e.y,i.clientX=t.clientX,i.clientY=t.clientY,i.currentTarget=n,this.tryTrigger(n,i)}if(this.current){var a=new r("dblclick",t,(!0),(!0));a.x=e.x,a.y=e.y,a.clientX=t.clientX,a.clientY=t.clientY,a.currentTarget=this.current,a.target=this.current,this.tryTrigger(this.current,a)}},mouseout:function(t){var e=this.point,n=this.canvas,i=new r("canvas-mouseleave",t,(!0),(!0));i.x=e.x,i.y=e.y,i.currentTarget=n,this.tryTrigger(n,i)},mouseover:function(t){var e=this.canvas,n=new r("canvas-mouseenter",t,(!0),(!0));n.currentTarget=e,this.tryTrigger(e,n)}}),t.exports=a},function(t,e,n){function i(t,e,n){for(var i,r=t.length-1;r>=0;r--){var a=t[r];if(a.__cfg.visible&&a.__cfg.capture&&(a.isGroup?i=a.getShape(e,n):a.isHit(e,n)&&(i=a)),i)break}return i}function r(t){if(!t.__cfg&&t!==l){var e=t.superclass.constructor;e&&!e.__cfg&&r(e),t.__cfg={},a.mix(!0,t.__cfg,e.__cfg),a.mix(!0,t.__cfg,t.CFG)}}var a=n(1),s=n(3).Vector3,o=n(64),u=n(165),c={},l=function(t){l.superclass.constructor.call(this,t),this.set("children",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI()};a.extend(l,o),a.augment(l,{isGroup:!0,canFill:!0,canStroke:!0,getDefaultCfg:function(){return r(this.constructor),a.mix(!0,{},this.constructor.__cfg)},_beforeRenderUI:function(){},_renderUI:function(){},_bindUI:function(){},addShape:function(t,e){var n,i=this.get("canvas");e=e||{};var r=c[t];if(r||(r=a.ucfirst(t),c[t]=r),e.attrs){var s=e.attrs;if("text"===t){var o=i.get("fontFamily");o&&(s.fontFamily=s.fontFamily?s.fontFamily:o)}}return e.canvas=i,e.type=t,n=new u[r](e),this.add(n),n},addGroup:function(t,e){var n,i=this.get("canvas");if(e=a.mix({},e),a.isFunction(t))e?(e.canvas=i,e.parent=this,n=new t(e)):n=new t({canvas:i,parent:this}),this.add(n);else if(a.isObject(t))t.canvas=i,n=new l(t),this.add(n);else{if(void 0!==t)return!1;n=new l,this.add(n)}return n},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBox(),r=this.get("parent");return a.mix(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=r.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),r.sort(),n},removeChild:function(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!a.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t}0===arguments.length&&(e=!0),l.superclass.remove.call(this,e)}return this},add:function(t){var e=this,n=e.get("children");if(a.isArray(t))a.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),e.__setEvn(t)}),n.push.apply(n,t);else{var i=t,r=i.get("parent");r&&r.removeChild(i,!1),e.__setEvn(i),n.push(i)}return e},contain:function(t){var e=this.get("children");return e.indexOf(t)>-1},getChildByIndex:function(t){var e=this.get("children");return e[t]},getFirst:function(){return this.getChildByIndex(0)},getLast:function(){var t=this.get("children").length-1;return this.getChildByIndex(t)},__setEvn:function(t){var e=this;t.__cfg.parent=e,t.__cfg.context=e.__cfg.context,
t.__cfg.canvas=e.__cfg.canvas,t.__cfg.totalMatrix=null;var n=t.__attrs.clip;n&&(n.setSilent("parent",e),n.setSilent("context",e.get("context")));var i=t.__cfg.children;i&&a.each(i,function(e){t.__setEvn(e)})},getBBox:function(){var t=this,e=1/0,n=-(1/0),i=1/0,r=-(1/0),o=t.get("children");a.each(o,function(t){if(t.get("visible")){var a=t.getBBox();if(!a)return!0;var o=new s(a.minX,a.minY,1),u=new s(a.minX,a.maxY,1),c=new s(a.maxX,a.minY,1),l=new s(a.maxX,a.maxY,1);t.apply(o),t.apply(u),t.apply(c),t.apply(l);var h=Math.min(o.x,u.x,c.x,l.x),f=Math.max(o.x,u.x,c.x,l.x),g=Math.min(o.y,u.y,c.y,l.y),p=Math.max(o.y,u.y,c.y,l.y);h<e&&(e=h),f>n&&(n=f),g<i&&(i=g),p>r&&(r=p)}});var u={minX:e,minY:i,maxX:n,maxY:r};return u.x=u.minX,u.y=u.minY,u.width=u.maxX-u.minX,u.height=u.maxY-u.minY,u},drawInner:function(t){for(var e=this.get("children"),n=0;n<e.length;n++){var i=e[n];i.draw(t)}return this},getCount:function(){return this.get("children").length},sort:function(){var t=this.get("children");return t.sort(function(t,e){return t.get("zIndex")-e.get("zIndex")}),this},find:function(t){return this.findBy(function(e){return e.get("id")===t})},findBy:function(t){var e=this.get("children"),n=null;return a.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return!1}),n},findAllBy:function(t){var e=this.get("children"),n=[],i=[];return a.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i))}),n},getShape:function(t,e){var n,r=this,a=r.__attrs.clip,s=r.__cfg.children;return a?a.inside(t,e)&&(n=i(s,t,e)):n=i(s,t,e),n},clearTotalMatrix:function(){var t=this.get("totalMatrix");if(t){this.setSilent("totalMatrix",null);for(var e=this.__cfg.children,n=0;n<e.length;n++){var i=e[n];i.clearTotalMatrix()}}},clear:function(){for(var t=this.get("children");0!==t.length;)t[t.length-1].remove();return this},destroy:function(){this.get("destroyed")||(this.clear(),l.superclass.destroy.call(this))}}),t.exports=l},function(t,e,n){var i=n(1),r=n(280),a=new r;t.exports={tween:a,animate:function(t,e,n,r){var s=a.getNow(),o=i.mix({},t,{duration:e});a.animate(this).append(s,o,n,r),"silent"===a.get("status")&&a.play()}}},function(t,e,n){var i=n(1),r=n(3).Vector3,a=["strokeStyle","fillStyle","globalAlpha"],s=["circle","ellipse","fan","polygon","rect","path"],o={r:"R",opacity:"Opacity",lineWidth:"LineWidth",clip:"Clip",stroke:"Stroke",fill:"Fill",strokeOpacity:"Stroke",fillOpacity:"Fill",x:"X",y:"Y",rx:"Rx",ry:"Ry",re:"Re",rs:"Rs",width:"Width",height:"Height",img:"Img",x1:"X1",x2:"X2",y1:"Y1",y2:"Y2",points:"Points",p1:"P1",p2:"P2",p3:"P3",p4:"P4",text:"Text",radius:"Radius",textAlign:"TextAlign",textBaseline:"TextBaseline",font:"Font",fontSize:"FontSize",fontStyle:"FontStyle",fontVariant:"FontVariant",fontWeight:"FontWeight",fontFamily:"FontFamily",clockwise:"Clockwise",startAngle:"StartAngle",endAngle:"EndAngle",path:"Path"},u={stroke:"strokeStyle",fill:"fillStyle",opacity:"globalAlpha"};t.exports={canFill:!1,canStroke:!1,initAttrs:function(t){return this.__attrs={opacity:1,fillOpacity:1,strokeOpacity:1},this.attr(i.simpleMix(this.getDefaultAttrs(),t)),this},getDefaultAttrs:function(){return{}},attr:function(t,e){var n=this;if(0===arguments.length)return n.__attrs;if(i.isObject(t)){for(var r in t)if(a.indexOf(r)===-1){var s=t[r];n._setAttr(r,s)}return n.__afterSetAttrAll&&n.__afterSetAttrAll(t),n.clearBBox(),n}if(2===arguments.length){if(n._setAttr(t,e)!==!1){var u="__afterSetAttr"+o[t];n[u]&&n[u](e)}return n.clearBBox(),n}return n._getAttr(t)},clearBBox:function(){this.setSilent("box",null)},__afterSetAttrAll:function(){},_getAttr:function(t){return this.__attrs[t]},_setAttr:function(t,e){var n=this;if("clip"===t)n.__setAttrClip(e),n.__attrs.clip=e;else{n.__attrs[t]=e;var i=u[t];i&&(n.__attrs[i]=e)}return n},hasFill:function(){return this.canFill&&this.__attrs.fillStyle},hasStroke:function(){return this.canStroke&&this.__attrs.strokeStyle},__setAttrOpacity:function(t){return this.__attrs.globalAlpha=t,t},__setAttrClip:function(t){var e=this;return t&&s.indexOf(t.type)>-1?(null===t.get("canvas")&&(t=i.clone(t)),t.set("parent",e.get("parent")),t.set("context",e.get("context")),t.inside=function(n,i){var a=new r(n,i,1);return t.invert(a,e.get("canvas")),t.__isPointInFill(a.x,a.y)},t):null}}},function(t,e,n){function i(t){var e=t.elements;return 1===e[0]&&0===e[1]&&0===e[3]&&1===e[4]&&0===e[6]&&0===e[7]}function r(t){var e=t.elements;return 0===e[1]&&0===e[3]&&0===e[6]&&0===e[7]}function a(t,e){i(e)||(r(e)?(t.elements[0]*=e.elements[0],t.elements[4]*=e.elements[4]):t.multiply(e))}var s=n(1),o=n(3).Matrix3;t.exports={initTransform:function(){this.__m=new o},translate:function(t,e){return this.__m.translate(t,e),this.clearTotalMatrix(),this},rotate:function(t){return this.__m.rotate(t),this.clearTotalMatrix(),this},scale:function(t,e){return this.__m.scale(t,e),this.clearTotalMatrix(),this},rotateAtStart:function(t){var e=this.attr("x"),n=this.attr("y");Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]])},move:function(t,e){var n=this.get("x")||0,i=this.get("y")||0;this.translate(t-n,e-i),this.set("x",t),this.set("y",e)},transform:function(t){var e=this;return s.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.__m=o.multiply(t[1],e.__m),e.clearTotalMatrix()}}),e},setTransform:function(t){return this.__m.identity(),this.transform(t)},getMatrix:function(){return this.__m},setMatrix:function(t){return this.__m=t,this.clearTotalMatrix(),this},apply:function(t,e){var n;return n=e?this._getMatrixByRoot(e):this.__m,t.applyMatrix(n),this},_getMatrixByRoot:function(t){var e=this;t=t||e;for(var n=e,i=[];n!==t;)i.unshift(n),n=n.get("parent");i.unshift(n);var r=new o;return s.each(i,function(t){r.multiply(t.__m)}),r},getTotalMatrix:function(){var t=this.__cfg.totalMatrix;if(!t){t=new o;var e=this.__cfg.parent;if(e){var n=e.getTotalMatrix();a(t,n)}a(t,this.__m),this.__cfg.totalMatrix=t}return t},clearTotalMatrix:function(){},invert:function(t){var e=this.getTotalMatrix();if(r(e))t.x/=e.elements[0],t.y/=e.elements[4];else{var n=e.getInverse();t.applyMatrix(n)}return this},resetTransform:function(t){var e=this.__m.to2DObject();i(this.__m)||t.transform(e.a,e.b,e.c,e.d,e.e,e.f)}}},function(t,e,n){var i={Rect:n(79),Circle:n(68),Ellipse:n(70),Path:n(75),Text:n(80),Line:n(73),Image:n(72),Polygon:n(76),Polyline:n(77),Arc:n(67),Fan:n(71),Cubic:n(69),Quadratic:n(78),Marker:n(74)};t.exports=i},function(t,e){t.exports={xAt:function(t,e,n,i,r){return e*Math.cos(t)*Math.cos(r)-n*Math.sin(t)*Math.sin(r)+i},yAt:function(t,e,n,i,r){return e*Math.sin(t)*Math.cos(r)+n*Math.cos(t)*Math.sin(r)+i},xExtrema:function(t,e,n){return Math.atan(-n/e*Math.tan(t))},yExtrema:function(t,e,n){return Math.atan(n/(e*Math.tan(t)))}}},function(t,e,n){function i(t,e,n){return{x:n.x+t,y:n.y+e}}function r(t,e){return{x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)}}function a(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function s(t,e){return(t[0]*e[0]+t[1]*e[1])/(a(t)*a(e))}function o(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(s(t,e))}function u(t,e,n,i,r,a,u){var c=l.mod(l.degreeToRad(u),2*Math.PI),h=t.x,f=t.y,g=e.x,p=e.y,d=Math.cos(c)*(h-g)/2+Math.sin(c)*(f-p)/2,v=-1*Math.sin(c)*(h-g)/2+Math.cos(c)*(f-p)/2,m=d*d/(r*r)+v*v/(a*a);m>1&&(r*=Math.sqrt(m),a*=Math.sqrt(m));var x=Math.sqrt((r*r*(a*a)-r*r*(v*v)-a*a*(d*d))/(r*r*(v*v)+a*a*(d*d)));n===i&&(x*=-1),isNaN(x)&&(x=0);var y=x*r*v/a,_=x*-a*d/r,S=(h+g)/2+Math.cos(c)*y-Math.sin(c)*_,b=(f+p)/2+Math.sin(c)*y+Math.cos(c)*_,w=o([1,0],[(d-y)/r,(v-_)/a]),M=[(d-y)/r,(v-_)/a],A=[(-1*d-y)/r,(-1*v-_)/a],T=o(M,A);return s(M,A)<=-1&&(T=Math.PI),s(M,A)>=1&&(T=0),0===i&&T>0&&(T-=2*Math.PI),1===i&&T<0&&(T+=2*Math.PI),[t,S,b,r,a,w,T,c,i]}var c=n(1),l=n(6),h=n(8),f=n(32),g=n(44),p=n(166),d=n(3),v=d.Vector2,m=d.Vector3,x=d.Matrix3,y=["m","l","c","a","q","h","v","t","s","z"],_=function(t,e,n){this.preSegment=e,this.isLast=n,this.init(t,e)};c.augment(_,{init:function(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var a,s,o,c,l=y.indexOf(n)>=0,h=l?n.toUpperCase():n,f=t,g=e.endPoint,p=f[1],d=f[2];switch(h){default:break;case"M":c=l?i(p,d,g):{x:p,y:d},this.command="M",this.params=[g,c],this.subStart=c,this.endPoint=c;break;case"L":c=l?i(p,d,g):{x:p,y:d},this.command="L",this.params=[g,c],this.subStart=e.subStart,this.endPoint=c,this.isLast&&(this.endTangent=function(){return new v(c.x-g.x,c.y-g.y)});break;case"H":c=l?i(p,0,g):{x:p,y:g.y},this.command="L",this.params=[g,c],this.subStart=e.subStart,this.endPoint=c,this.endTangent=function(){return new v(c.x-g.x,c.y-g.y)};break;case"V":c=l?i(0,p,g):{x:g.x,y:p},this.command="L",this.params=[g,c],this.subStart=e.subStart,this.endPoint=c,this.endTangent=function(){return new v(c.x-g.x,c.y-g.y)};break;case"Q":l?(a=i(p,d,g),s=i(f[3],f[4],g)):(a={x:p,y:d},s={x:f[3],y:f[4]}),this.command="Q",this.params=[g,a,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return new v(s.x-a.x,s.y-a.y)};break;case"T":s=l?i(p,d,g):{x:p,y:d},"Q"===e.command?(a=r(e.params[1],g),this.command="Q",this.params=[g,a,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return new v(s.x-a.x,s.y-a.y)}):(this.command="TL",this.params=[g,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return new v(s.x-g.x,s.y-g.y)});break;case"C":l?(a=i(p,d,g),s=i(f[3],f[4],g),o=i(f[5],f[6],g)):(a={x:p,y:d},s={x:f[3],y:f[4]},o={x:f[5],y:f[6]}),this.command="C",this.params=[g,a,s,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return new v(o.x-s.x,o.y-s.y)};break;case"S":l?(s=i(p,d,g),o=i(f[3],f[4],g)):(s={x:p,y:d},o={x:f[3],y:f[4]}),"C"===e.command?(a=r(e.params[2],g),this.command="C",this.params=[g,a,s,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return new v(o.x-s.x,o.y-s.y)}):(this.command="SQ",this.params=[g,s,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return new v(o.x-s.x,o.y-s.y)});break;case"A":var m=p,x=d,_=f[3],S=f[4],b=f[5];c=l?i(f[6],f[7],g):{x:f[6],y:f[7]},this.command="A",this.params=u(g,c,S,b,m,x,_),this.subStart=e.subStart,this.endPoint=c;break;case"Z":this.command="Z",this.params=[g,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart}},isInside:function(t,e,n){var i=this,r=i.command,a=i.params,s=i.box;if(s&&!h.box(s.minX,s.maxX,s.minY,s.maxY,t,e))return!1;switch(r){default:break;case"M":return!1;case"TL":case"L":case"Z":return h.line(a[0].x,a[0].y,a[1].x,a[1].y,n,t,e);case"SQ":case"Q":return h.quadraticline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,n,t,e);case"C":return h.cubicline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y,n,t,e);case"A":var o=a,u=o[1],c=o[2],l=o[3],f=o[4],g=o[5],p=o[6],d=o[7],v=o[8],y=l>f?l:f,_=l>f?1:l/f,S=l>f?f/l:1;o=new m(t,e,1);var b=new x;return b.translate(-u,-c),b.rotate(-d),b.scale(1/_,1/S),o.applyMatrix(b),h.arcline(0,0,y,g,g+p,1-v,n,o.x,o.y)}return!1},draw:function(t){var e,n,i,r=this.command,a=this.params;switch(r){default:break;case"M":t.moveTo(a[1].x,a[1].y);break;case"TL":case"L":t.lineTo(a[1].x,a[1].y);break;case"SQ":case"Q":e=a[1],n=a[2],t.quadraticCurveTo(e.x,e.y,n.x,n.y);break;case"C":e=a[1],n=a[2],i=a[3],t.bezierCurveTo(e.x,e.y,n.x,n.y,i.x,i.y);break;case"A":var s=a,o=s[1],u=s[2],c=o,l=u,h=s[3],f=s[4],g=s[5],p=s[6],d=s[7],v=s[8],m=h>f?h:f,x=h>f?1:h/f,y=h>f?f/h:1;t.translate(c,l),t.rotate(d),t.scale(x,y),t.arc(0,0,m,g,g+p,1-v),t.scale(1/x,1/y),t.rotate(-d),t.translate(-c,-l);break;case"Z":t.closePath()}},getBBox:function(t){var e,n,i,r,a=t/2,s=this.params;switch(this.command){default:case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(s[0].x,s[1].x)-a,maxX:Math.max(s[0].x,s[1].x)+a,minY:Math.min(s[0].y,s[1].y)-a,maxY:Math.max(s[0].y,s[1].y)+a};break;case"SQ":case"Q":for(n=g.extrema(s[0].x,s[1].x,s[2].x),i=0,r=n.length;i<r;i++)n[i]=g.at(s[0].x,s[1].x,s[2].x,n[i]);for(n.push(s[0].x,s[2].x),e=g.extrema(s[0].y,s[1].y,s[2].y),i=0,r=e.length;i<r;i++)e[i]=g.at(s[0].y,s[1].y,s[2].y,e);e.push(s[0].y,s[2].y),this.box={minX:Math.min.apply(Math,n)-a,maxX:Math.max.apply(Math,n)+a,minY:Math.min.apply(Math,e)-a,maxY:Math.max.apply(Math,e)+a};break;case"C":for(n=f.extrema(s[0].x,s[1].x,s[2].x,s[3].x),i=0,r=n.length;i<r;i++)n[i]=f.at(s[0].x,s[1].x,s[2].x,s[3].x,n[i]);for(e=f.extrema(s[0].y,s[1].y,s[2].y,s[3].y),i=0,r=e.length;i<r;i++)e[i]=f.at(s[0].y,s[1].y,s[2].y,s[3].y,e[i]);n.push(s[0].x,s[3].x),e.push(s[0].y,s[3].y),this.box={minX:Math.min.apply(Math,n)-a,maxX:Math.max.apply(Math,n)+a,minY:Math.min.apply(Math,e)-a,maxY:Math.max.apply(Math,e)+a};break;case"A":var o=s,u=o[1],c=o[2],l=o[3],h=o[4],d=o[5],v=o[6],m=o[7],x=o[8],y=d,_=d+v,S=p.xExtrema(m,l,h),b=1/0,w=-(1/0),M=[y,_];for(i=2*-Math.PI;i<=2*Math.PI;i+=Math.PI){var A=S+i;1===x?y<A&&A<_&&M.push(A):_<A&&A<y&&M.push(A)}for(i=0,r=M.length;i<r;i++){var T=p.xAt(m,l,h,u,M[i]);T<b&&(b=T),T>w&&(w=T)}var C=p.yExtrema(m,l,h),k=1/0,P=-(1/0),I=[y,_];for(i=2*-Math.PI;i<=2*Math.PI;i+=Math.PI){var D=C+i;1===x?y<D&&D<_&&I.push(D):_<D&&D<y&&I.push(D)}for(i=0,r=I.length;i<r;i++){var O=p.yAt(m,l,h,c,I[i]);O<k&&(k=O),O>P&&(P=O)}this.box={minX:b-a,maxX:w+a,minY:k-a,maxY:P+a}}}}),t.exports=_},function(t,e){var n=document.createElement("table"),i=document.createElement("tr"),r=/^\s*<(\w+|!)[^>]*>/,a={tr:document.createElement("tbody"),tbody:n,thead:n,tfoot:n,td:i,th:i,"*":document.createElement("div")};t.exports={getBoundingClientRect:function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientTop,i=document.documentElement.clientLeft;return{top:e.top-n,bottom:e.bottom-n,left:e.left-i,right:e.right-i}},getStyle:function(t,e){return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e]},modiCSS:function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);return t},createDom:function(t){var e=r.test(t)&&RegExp.$1;e in a||(e="*");var n=a[e];return t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t,n.childNodes[0]},addEventListener:function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0}}},function(t,e){t.exports={transform:function(t,e){t=t.clone();for(var n=0,i=e.length;n<i;n++){var r=e[n];switch(r[0]){case"t":t.translate(r[1],r[2]);break;case"s":t.scale(r[1],r[2]);break;case"r":t.rotate(r[1]);break;case"m":t.multiply(r[1]);break;default:continue}}return t},scale:function(t,e,n,i,r){return t=t.clone(),t.translate(-1*i,-1*r),t.scale(e,n),t.translate(i,r),t},rotate:function(t,e,n,i){return t=t.clone(),t.translate(-1*n,-1*i),t.rotate(e),t.translate(n,i),t},isMatrix3:function(t){return"matrix3"===t.type}}},function(t,e,n){"use strict";function i(t){this.space={},r.isString(t)?this.setStyle(t):t instanceof i&&this.copy(t)}var r=n(1),a=(n(6),n(172)),s=n(173),o=n(171),u={hex:/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,space:/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)$/,rgbNum:/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/,rgbaNum:/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/,rgbPre:/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,rgbaPre:/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/,hsl:/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,hsla:/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/};r.augment(i,{getType:function(){return this.space.type},toRGB:function(){var t=this.space;if("rgb"!==t.type){var e=t.toRGB();this.setRGB(e.r,e.g,e.b,e.a)}},toHSL:function(){var t=this.space;if("hsl"!==t.type){var e=t.toHSL();this.setHSL(e.h,e.s,e.l,e.a)}},getR:function(){return this.toRGB(),this.space.r},getG:function(){return this.toRGB(),this.space.g},getB:function(){return this.toRGB(),this.space.b},getH:function(){return this.toHSL(),this.space.h},getS:function(){return this.toHSL(),this.space.s},getL:function(){return this.toHSL(),this.space.l},getA:function(){return this.space.a},multiplyA:function(t){return void 0===t?this:(void 0===this.space.a&&(this.space.a=1),this.space.a*=t,this)},getRGBStyle:function(){return this.toRGB(),this.space.getStyle()},getRGBPreStyle:function(){return this.toRGB(),this.space.getPreStyle()},getHSLStyle:function(){return this.toHSL(),this.space.getStyle()},getHex:function(){return this.toRGB(),this.space.getHex()},setRGB:function(t,e,n,i){return this.space=new s,this.space.setRGB(t,e,n,i),this},setHSL:function(t,e,n,i){return this.space=new a,this.space.setHSL(t,e,n,i),this},setHex:function(t){return this.space=new s,t=Math.floor(t),this.space.r=(t>>16&255)/255,this.space.g=(t>>8&255)/255,this.space.b=(255&t)/255,this},setStyle:function(t){var e;if(e=u.hex.exec(t)){var n=e[1],i=n.length;if(3===i)return this.setRGB(parseInt(n.charAt(0)+n.charAt(0),16)/255,parseInt(n.charAt(1)+n.charAt(1),16)/255,parseInt(n.charAt(2)+n.charAt(2),16)/255),this;if(6===i)return this.setRGB(parseInt(n.charAt(0)+n.charAt(1),16)/255,parseInt(n.charAt(2)+n.charAt(3),16)/255,parseInt(n.charAt(4)+n.charAt(5),16)/255),this}else if(e=u.space.exec(t)){var r,a=e[1],s=e[2];switch(a){case"rgb":if(r=u.rgbNum.exec(s))return this.setRGB(parseInt(r[1],10)/255,parseInt(r[2],10)/255,parseInt(r[3],10)/255),this;if(r=u.rgbPre.exec(s))return this.setRGB(parseInt(r[1],10)/100,parseInt(r[2],10)/100,parseInt(r[3],10)/100),this;break;case"rgba":if(r=u.rgbaNum.exec(s))return this.setRGB(parseInt(r[1],10)/255,parseInt(r[2],10)/255,parseInt(r[3],10)/255,parseFloat(r[4])),this;if(r=u.rgbaPre.exec(s))return this.setRGB(parseInt(r[1],10)/100,parseInt(r[2],10)/100,parseInt(r[3],10)/100,parseFloat(r[4])),this;break;case"hsl":if(r=u.hsl.exec(s))return this.setHSL(parseInt(r[1],10)/360,parseInt(r[2],10)/100,parseInt(r[3],10)/100),this;break;case"hsla":if(r=u.hsla.exec(s))return this.setHSL(parseInt(r[1],10)/360,parseInt(r[2],10)/100,parseInt(r[3],10)/100,parseFloat(r[4])),this}}else t=t.toLowerCase(),void 0!==o[t]?this.setHex(o[t]):this.setHex(o.black)},copy:function(t){this.space=t.space.clone()},clone:function(){return new i(this)}}),t.exports=i},function(t,e){t.exports={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}},function(t,e,n){"use strict";var i=n(1),r=n(6),a=function(){this.h=0,this.s=0,this.l=0};i.augment(a,{type:"hsl",setHSL:function(t,e,n,i){this.h=r.mod(t,1),this.s=r.clamp(e,0,1),this.l=r.clamp(n,0,1),void 0!==i?this.a=r.clamp(i,0,1):this.a=void 0},toRGB:function(){function t(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}return function(){var e=this,n=e.h,i=e.s,r=e.l;if(0===i)return{r:r,g:r,b:r,a:e.a};var a=r<=.5?r*(1+i):r+i-r*i,s=2*r-a;return{r:t(s,a,n+1/3),g:t(s,a,n),b:t(s,a,n-1/3),a:e.a}}}(),clone:function(){var t=new a;return t.h=this.h,t.s=this.s,t.l=this.l,t.a=this.a,t},copy:function(t){return this.h=t.h,this.s=t.s,this.l=t.l,this.a=t.a,this},getStyle:function(){var t=this;return void 0===t.a?"hsl("+Math.round(360*t.h)+", "+Math.round(100*t.s)+"%, "+Math.round(100*t.l)+"%)":"hsla("+Math.round(360*t.h)+", "+Math.round(100*t.s)+"%, "+Math.round(100*t.l)+"%, "+t.a+")"}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(6),a=function(){this.r=0,this.g=0,this.b=0,this.type="rgb"};i.augment(a,{type:"rgb",setRGB:function(t,e,n,i){this.r=r.clamp(t,0,1),this.g=r.clamp(e,0,1),this.b=r.clamp(n,0,1),void 0!==i?this.a=r.clamp(i,0,1):this.a=void 0},toHSL:function(){var t,e,n=this.r,i=this.g,r=this.b,a=Math.max(n,i,r),s=Math.min(n,i,r),o=(s+a)/2;if(s===a)t=0,e=0;else{var u=a-s;switch(e=o<=.5?u/(a+s):u/(2-a-s),a){case n:t=(i-r)/u+(i<r?6:0);break;case i:t=(r-n)/u+2;break;case r:t=(n-i)/u+4}t/=6}return{h:t,s:e,l:o,a:this.a}},getHex:function(){var t=255*this.r<<16^255*this.g<<8^255*this.b<<0;return"#"+("000000"+t.toString(16)).slice(-6)},getStyle:function(){return void 0===this.a?"rgb("+Math.round(255*this.r).toString()+", "+Math.round(255*this.g).toString()+", "+Math.round(255*this.b).toString()+")":"rgba("+Math.round(255*this.r).toString()+", "+Math.round(255*this.g).toString()+", "+Math.round(255*this.b).toString()+", "+this.a+")"},getPreStyle:function(){return void 0===this.a?"rgb("+Math.round(100*this.r).toString()+"%, "+Math.round(100*this.g).toString()+"%, "+Math.round(100*this.b).toString()+"%)":"rgba("+Math.round(100*this.r).toString()+"%, "+Math.round(100*this.g).toString()+"%, "+Math.round(100*this.b).toString()+"%, "+this.a+")"},clone:function(){var t=new a;return t.r=this.r,t.g=this.g,t.b=this.b,t.a=this.a,t},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}}),t.exports=a},function(t,e){"use strict";function n(t){b=t.length,b&&(w=t[0].length),b>1&&w>1&&(x=t[0][0][0],_=t[0][0][1],y=t[1][0][0]-t[0][0][0],S=t[0][1][1]-t[0][0][1])}function i(t,e){var n=r(!0,t,e),i=r(!1,t,e);return[n,i]}function r(t,e,n){var i=b,r=w,s=[];t?r--:i--;for(var o=0;o<i;o++){s[o]=[];for(var u=0;u<r;u++){s[o][u]={};var c,l;if(c=e[o][u][2],l=t?e[o][u+1][2]:e[o+1][u][2],a(c,l))s[o][u].rate=-2,s[o][u].have_iso_point=!1;else{var h=a(n,c),f=a(n,l),g=(n-c)*(n-l);if(h||f){h?c+=M:l+=M;var p=s[o][u].rate=(n-c)/(l-c);p>0&&p<1?s[o][u].have_iso_point=!0:s[o][u].have_iso_point=!1}else g>0?(s[o][u].rate=-2,s[o][u].have_iso_point=!1):g<0&&(s[o][u].rate=(n-c)/(l-c),s[o][u].have_iso_point=!0)}}}return s}function a(t,e){return Math.abs(t-e)<1e-9}function s(t,e,n,i){var r=0,a=0,s=c(),u=c();for(r=0;r<b-1;r++)e[r][0].have_iso_point&&(s=c(r,-1,!1),u=c(r,0,!1),o(s,u,n,i,t,e));for(a=0;a<w-1;a++)t[b-1][a].have_iso_point&&(s=c(b,a,!0),u=c(b-1,a,!0),o(s,u,n,i,t,e));for(r=0;r<b-1;r++)e[r][w-1].have_iso_point&&(s=c(r,w,!1),u=c(r,w-1,!1),o(s,u,n,i,t,e));for(a=0;a<w-1;a++)t[0][a].have_iso_point&&(s=c(-1,a,!0),u=c(0,a,!0),o(s,u,n,i,t,e))}function o(t,e,n,i,r,a){var s=!1,o={value:n,path:[]};for(h(e,r,a),o.path.push(u(e,r,a));!s&&f(e,t,r,a,o);)s=!e.row&&e.isHorizon||!e.col&&!e.isHorizon||e.row==b-1||e.col==w-1;i.push(o)}function u(t,e,n){var i=t.row,r=t.col,a=t.isHorizon,s=x+i*y,o=_+r*S;return a?o+=e[i][r].rate*S:s+=n[i][r].rate*y,[s,o]}function c(t,e,n){return{row:t||0,col:e||0,isHorizon:n||0,clone:l}}function l(t){this.row=t.row,this.col=t.col,this.isHorizon=t.isHorizon}function h(t,e,n){var i=t.row,r=t.col,a=t.isHorizon;return a?e[i][r].have_iso_point=!1:n[i][r].have_iso_point=!1,t}function f(t,e,n,i,r){var a=c(),s=c(),o=c();g(a,s,o,t,e);for(var l=[a,s,o],f=[],v={},m=!1,x=0;x<3;x++)f[x]=p(n,i,l[x]);if(f[0]&&f[1]&&f[2])v=d(t,l[0],n,i)<d(t,l[1],n,i)?h(l[0],n,i):h(l[1],n,i),m=!0;else for(var x=0;x<3;x++)if(f[x]){v=h(l[x],n,i),m=!0;break}return m&&(r.path.push(u(v,n,i)),e.clone(t),t.clone(v)),m}function g(t,e,n,i,r){return i.row>r.row?(t.clone(i),t.isHorizon=!1,e.clone(t),e.col+=1,n.clone(i),void(n.row+=1)):i.col>r.col?(e.clone(i),e.isHorizon=!0,t.clone(e),t.row+=1,n.clone(i),void(n.col+=1)):i.isHorizon?(e.clone(i),e.row-=1,e.isHorizon=!1,t.clone(e),t.col+=1,n.clone(i),void(n.row-=1)):(t.clone(i),t.col-=1,t.isHorizon=!0,e.clone(t),e.row+=1,n.clone(i),void(n.col-=1))}function p(t,e,n){var i=n.row,r=n.col,a=n.isHorizon;return a?t[i][r].have_iso_point:e[i][r].have_iso_point}function d(t,e,n,i){var r=u(t,n,i),a=u(e,n,i),s=r.x-a.x,o=r.y-a.y;return Math.sqrt(s*s+o*o)}function v(t,e,n,i){var r,a,s=c(),o=c();for(a=0;a<w-1;a++)for(r=0;r<b-1;r++)e[r][a].have_iso_point&&(s=c(r,0,!1),o=c(r,a,!1),m(s,o,t,e,n,i))}function m(t,e,n,i,r,a){var s=e.row,o=e.col,c=!1,l={value:r,path:[]};for(l.path.push(u(e,n,i));!c&&f(e,t,n,i,l);)c=e.row==s&&e.col==o&&!e.isHorizon;a.push(l)}var x,y,_,S,b=0,w=0,M=.001,A=function(t,e){var r,a=[],o=[],u=[];n(t);for(var c=0;c<e.length;c++){r=e[c];var l=i(t,r);a=l[0],o=l[1],s(a,o,r,u),v(a,o,r,u)}return u};t.exports=A},function(t,e,n){"use strict";var i=n(1),r=n(45),a=function(t){t.inner=t.inner||0,a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"clock"}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(45),a=function(t){t.inner=t.inner||0,a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{type:"gauge"}),t.exports=a},function(t,e,n){var i=n(1),r=n(26),a=n(3),s=a.Vector2,o=function(t){var e={};i.mix(e,o.ATTRS,t),o.superclass.constructor.call(this,e),this._init()};o.ATTRS={startAngle:1.25*Math.PI,endAngle:7.25*Math.PI},i.extend(o,r),i.augment(o,{type:"helix",isHelix:!0,PRECISION:1e-5,_init:function(){var t=this,e=t.getWidth(),n=t.getHeight(),i=t.get("startAngle"),r=t.get("endAngle"),a=(r-i)/(2*Math.PI);a=2*a+2;var s=Math.floor(Math.min(e/a,n/a)),o=s/(2*Math.PI),u={start:i,end:r},c={start:0,end:.99*s};t.set("a",o),t.set("d",s),t.set("x",u),t.set("y",c)},getCenter:function(){return this.get("center")},convertPoint:function(t){var e=this,n=e.get("a"),i=e.get("center"),r=e.isTransposed?t.y:t.x,a=e.isTransposed?t.x:t.y,s=this.convertDim(r,"x"),o=n*s,u=this.convertDim(a,"y");return{x:i.x+Math.cos(s)*(o+u),y:i.y+Math.sin(s)*(o+u)}},invertPoint:function(t){var e,n=this,i=n.get("center"),r=n.get("a"),a=n.get("d"),o=new s.sub(t,i),u=new s(1,0),c=o.angleTo(u,!0),l=c*r;o.length()<l&&(l=o.length()),e=Math.floor((o.length()-l)/a),c=2*e*Math.PI+c;var h=r*c,f=o.length()-h;f=n.equal(f,0)?0:f;var g=n.invertDim(c,"x"),p=n.invertDim(f,"y");g=n.equal(g,0)?0:g,p=n.equal(p,0)?0:p;var d={};return d.x=n.isTransposed?p:g,d.y=n.isTransposed?g:p,d},equal:function(t,e){return Math.abs(t-e)<this.PRECISION}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(83),a=n(214),s=function(t){var e={};i.mix(e,s.ATTRS,t),s.superclass.constructor.call(this,e);var n=this.get("projection"),r=this.get("basic"),o=a[n];this.set("project",new o({basic:r}))};s.ATTRS={projection:"mercator"},i.extend(s,r),i.augment(s,{type:"map",_getOriginRange:function(){var t=this,e=t.get("originMin")?t.get("originMin")[0]:t.get("min")[0],n=t.get("originMin")?t.get("originMin")[1]:t.get("min")[1],i=t.get("originMax")?t.get("originMax")[0]:t.get("max")[0],r=t.get("originMax")?t.get("originMax")[1]:t.get("max")[1],a={x:i-e,y:r-n};return{xMin:e,yMin:n,range:a}},_getProjectRange:function(){var t=this,e=t.get("min")?t.get("min"):t.get("originMin"),n=t.get("max")?t.get("max"):t.get("originMax"),i=e[0],r=e[1],a=n[0],s=n[1],o={x:a-i,y:s-r};return{xMin:i,yMin:r,range:o}},_invert:function(t,e){var n;"origin"===e?n=this._getOriginRange():"project"===e&&(n=this._getProjectRange());var i=n.xMin,r=n.yMin,a=n.range;return t.x=i+t.x*a.x,t.y=r+t.y*a.y,t},_scale:function(t,e){var n;"origin"===e?n=this._getOriginRange():"project"===e&&(n=this._getProjectRange());var i=n.xMin,r=n.yMin,a=n.range;return t.x=(t.x-i)/a.x,t.y=(t.y-r)/a.y,t},convertPoint:function(t){var e=this,n=e.isTransposed?t.y:t.x,i=e.isTransposed?t.x:t.y,r=e.get("project"),a=e._invert({x:n,y:i},"origin");return a=r.project(a.x,a.y),a=e._scale(a,"project"),{x:this.convertDim(a.x,"x"),y:this.convertDim(a.y,"y")}},invertPoint:function(t){var e=this,n=this.invertDim(t.x,"x"),i=this.invertDim(t.y,"y"),r={};r.x=e.isTransposed?i:n,r.y=e.isTransposed?n:i;var a=e.get("project");return r=e._invert(r,"project"),r=a.invert(r),r=e._scale(r,"origin")}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(34),a=n(3),s=a.Vector2,o=function(t){t.inner=t.inner||0,o.superclass.constructor.call(this,t);var e=this.get("x");this.set("x",this.get("y")),this.set("y",e)};i.extend(o,r),i.augment(o,{type:"rho",convertPoint:function(t){var e=this,n=e.getCenter(),i=e.get("y").start,r=e.convertDim(t.x,"x");return{x:n.x+Math.cos(i)*r,y:n.y+Math.sin(i)*r}},invertPoint:function(t){var e=this,n=e.getCenter(),i=new s(t.x-n.x,t.y-n.y),r=i.length();return{x:e.invertDim(r,"x")}}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(34),a=n(3),s=n(6),o=a.Vector2,u=a.Matrix3,c=a.Vector3,l=function(t){t.inner=t.inner||0,l.superclass.constructor.call(this,t)};i.extend(l,r),i.augment(l,{type:"theta",convertPoint:function(t){var e=this,n=e.getCenter(),i=e.convertDim(t.x,"x"),r=e.get("y").end;return{x:n.x+Math.cos(i)*r,y:n.y+Math.sin(i)*r}},invertPoint:function(t){var e=this,n=e.getCenter(),i=new o(t.x-n.x,t.y-n.y),r=e.get("x"),a=new u;a.rotate(r.start);var l=new c(1,0,0);l.applyMatrix(a),l=new o(l.x,l.y);var h=l.angleTo(i,r.end<r.start);s.equal(h,2*Math.PI)&&(h=0);var f=h/(r.end-r.start);return f=r.end-r.start>0?f:-f,{x:f}}}),t.exports=l},function(t,e,n){"use strict";function i(t){var e={};r.mix(e,i.ATTRS,t),i.superclass.constructor.call(this,e),this._init()}var r=n(1),a=n(26);i.ATTRS={start:{x:0,y:0},end:{x:0,y:0},top:.5},r.extend(i,a),r.augment(i,{type:"triAngle",triAngle:!0,_init:function(){return this.setTopfactor(),this},setTopfactor:function(){var t=this,e=t.get("start"),n=t.get("end"),i={x:n.x,y:e.y},r={x:e.x+(n.x-e.x)*t.get("top"),y:n.y};t.getXStart=function(t){return e.x+(r.x-e.x)/(r.y-e.y)*(t-e.y)},t.getXEnd=function(t){return i.x+(r.x-i.x)/(r.y-i.y)*(t-i.y)}},set:function(t,e){return this._attrs[t]=e,"top"===t&&this.setTopfactor(),this},convertPoint:function(t){var e=this,n=e.get("start"),i=e.get("end"),r=t.y,a=t.x;isNaN(r)&&(r=0),r=n.y+(i.y-n.y)*r;var s=e.getXStart(r),o=e.getXEnd(r);return a=s+(o-s)*a,{x:a,y:r}},invertPoint:function(t){var e=this,n=e.get("start"),i=e.get("end"),r=e.getXStart(t.y),a=e.getXEnd(t.y),s=(t.x-r)/(r-a);return{x:-s,y:-(t.y-n.y)/(i.y-n.y)}}}),t.exports=i},function(t,e){"use strict";function n(t){return t instanceof Date?t:new Date(t)}function i(t,e,n){var i=new Date(n);switch(isNaN(i)&&(i=new Date),e=parseInt(e,10),t){case"s":i=new Date(i.getTime()+1e3*e);break;case"n":i=new Date(i.getTime()+6e4*e);break;case"h":i=new Date(i.getTime()+36e5*e);break;case"d":i=new Date(i.getTime()+864e5*e);break;case"w":i=new Date(i.getTime()+6048e5*e);break;case"m":i=new Date(i.getFullYear(),i.getMonth()+e,i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds());
break;case"y":i=new Date(i.getFullYear()+e,i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds())}return i}var r=/^(?:(?!0000)[0-9]{4}([-\/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-\/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,a=function(){var t=/w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g,i=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},r={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUTCDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",localShortDate:"yy\u5e74mm\u6708dd\u65e5",localShortDateTime:"yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localLongDate:"yyyy\u5e74mm\u6708dd\u65e5",localLongDateTime:"yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localFullDate:"yyyy\u5e74mm\u6708dd\u65e5 w",localFullDateTime:"yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"},a={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};return function(s,o,u){if(1!==arguments.length||"[object String]"!==Object.prototype.toString.call(s)||/\d/.test(s)||(o=s,s=void 0),s=s||0===s?new Date(s):new Date,isNaN(s))throw SyntaxError("invalid date");o=String(r[o]||o||r["default"]),"UTC:"===o.slice(0,4)&&(o=o.slice(4),u=!0);var c=u?"getUTC":"get",l=s[c+"Date"](),h=s[c+"Day"](),f=s[c+"Month"](),g=s[c+"FullYear"](),p=s[c+"Hours"](),d=s[c+"Minutes"](),v=s[c+"Seconds"](),m=s[c+"Milliseconds"](),x=u?0:s.getTimezoneOffset(),y={d:l,dd:i(l,void 0),ddd:a.dayNames[h],dddd:a.dayNames[h+7],w:a.dayNames[h+14],m:f+1,mm:i(f+1,void 0),mmm:a.monthNames[f],mmmm:a.monthNames[f+12],yy:String(g).slice(2),yyyy:g,h:p%12||12,hh:i(p%12||12,void 0),H:p,HH:i(p,void 0),M:d,MM:i(d,void 0),s:v,ss:i(v,void 0),l:i(m,3),L:i(m>99?Math.round(m/10):m,void 0),t:p<12?"a":"p",tt:p<12?"am":"pm",T:p<12?"A":"P",TT:p<12?"AM":"PM",Z:u?"UTC":(String(s).match(e)||[""]).pop().replace(n,""),o:(x>0?"-":"+")+i(100*Math.floor(Math.abs(x)/60)+Math.abs(x)%60,4),S:["th","st","nd","rd"][l%10>3?0:(l%100-l%10!==10)*l%10]};return o.replace(t,function(t){return t in y?y[t]:t.slice(1,t.length-1)})}}(),s={add:function(t,e,n){return i(t,e,n)},addHour:function(t,e){return i("h",t,e)},addMinute:function(t,e){return i("n",t,e)},addSecond:function(t,e){return i("s",t,e)},addDay:function(t,e){return i("d",t,e)},addWeek:function(t,e){return i("w",t,e)},addMonths:function(t,e){return i("m",t,e)},addYear:function(t,e){return i("y",t,e)},isDateEquals:function(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()},isEquals:function(t,e){return t===e||!(!t||!e)&&(!(!t.getTime||!e.getTime)&&t.getTime()===e.getTime())},isDateString:function(t){return r.test(t)},format:function(t,e,n){return a(t,e,n)},parse:function(t){return"string"==typeof t&&(t=t.replace(/-/g,"/")),n(t)},today:function(){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate())},getDate:function(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}};t.exports=s},function(t,e,n){"use strict";var i=n(1),r=function(t,e,n,i){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=i,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e};i.augment(r,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0},stopPropagation:function(){this.propagationStopped=!0},remove:function(){this.remove=!0},clone:function(){return i.clone(this)},toString:function(){return"[Event (type="+this.type+")]"}}),t.exports=r},function(t,e,n){var i=n(35);i.Facet=n(27),i.Rect=n(85),i.List=n(84),i.Circle=n(185),i.Tree=n(187),i.Mirror=n(186),t.exports=i},function(t,e,n){"use strict";function i(t,e,n){return{x:t.x+e*Math.cos(n),y:t.y+e*Math.sin(n)}}var r=n(1),a=n(35),s=n(2),o=n(27),u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,a),r.augment(u,{getRegion:function(t,e){var n=this,r=n.plotRange,a=Math.min(r.getWidth(),r.getHeight())/2,s=2*Math.PI/t,o=-1*Math.PI/2+s*e,u=a/(1+1/Math.sin(s/2)),c=n.getCenter(),l=i(c,a-u,o);return n.getFacetRegion(l,u)},getFacetRegion:function(t,e){var n=3*Math.PI/4,r=Math.PI*-1*1/4;return{start:i(t,e,n),end:i(t,e,r)}},getCenter:function(){var t=this,e=t.plotRange,n=e.tl,i=e.getWidth(),r=e.getHeight(),a={x:n.x+i/2,y:n.y+r/2};return a},generateFacets:function(t){var e=this,n=e.dims,i=n[0];if(!i)throw new Error("Please specify for the field for facet!");var a=e.getDimValues(i,t),u=a.length,c=[],l=0;return r.each(a,function(n,r){var h=[{dim:i,value:n,values:a}],f=e.getFilter(h),g=s.filter(t,f),p=new o({type:e.type,xValue:n,xDim:i,colIndex:r,cols:u,rows:1,rowIndex:0,frame:g,region:e.getRegion(u,r),index:l++});c.push(p)}),c}}),t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(84),a=function(t){a.superclass.constructor.call(this,t),this._init()};i.extend(a,r),i.augment(a,{type:"mirror",transpose:!1,drawTitles:function(t,e){var n=this,r=n.dims,a=n.transpose?"col":"row";i.each(t,function(t){n.drawFacetTitle(a,t,e)}),n.drawDimTitle(a,r[0],e)},_init:function(){var t=this,e=t.dims,n=e[0];if(!n)throw new Error("Please specify for the field for facet!");t.transpose?(t.cols=2,t.rows=1):(t.cols=1,t.rows=2)},getRegion:function(t,e,n,i){var r,a,s=this,o=s.plotRange,u=s.margin,c=o.tl,l=o.br;e>1?(r=(l.x-c.x-u)/e,a=l.y-c.y):(r=l.x-c.x,a=(l.y-c.y-u)/t);var h={x:c.x+r*n+n*u,y:c.y+a*(i+1)+u*i},f={x:h.x+r,y:h.y-a};return{start:h,end:f}}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(35),a=n(2),s=n(27),o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,r),i.augment(o,{rootTitle:"",line:{stroke:"red"},smooth:!1,generateFacets:function(t){var e=this,n=e.dims;if(!n.length)throw new Error("Please specify for the fields for facet!");var i=[],r=e.getRootFacet(t);return i.push(r),r.children=e.getChildFacets(t,1,i),e.setRegion(i),i},getRows:function(){return this.dims.length+1},drawTitles:function(t,e){var n=this;n.drawLines(t,e),i.each(t,function(t){n.drawFacetTitle("col",t,e)})},drawLines:function(t,e){var n=this,r=e.addGroup();i.each(t,function(t){if(!n.isLeaf(t)){var e=t.children;n._addFacetLines(t,e,r)}})},_addFacetLines:function(t,e,n){var r=this,a=t.region,s={x:a.start.x+(a.end.x-a.start.x)/2,y:a.start.y};i.each(e,function(t){var e=t.region,i={x:e.start.x+(e.end.x-e.start.x)/2,y:e.end.y},a={x:s.x,y:s.y+(i.y-s.y)/2},o={x:i.x,y:a.y};r._drawLine([s,a,o,i],n)})},_getPath:function(t){var e=this,n="",r=e.smooth;if(r){var a=[];a.push(["M",t[0].x,t[0].y]),a.push(["C",t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),n=a.join(" ")}else i.each(t,function(t,e){var r=0===e?"M {x} {y}":"L {x} {y}";n+=i.substitute(r,t)});return n},_drawLine:function(t,e){var n=this,r=n._getPath(t),a=n.line;e.addShape("Path",{attrs:i.mix({path:r},a)})},getRootFacet:function(t){var e=this,n=new s({type:e.type,rows:e.getRows(),rowIndex:0,colIndex:0,xValue:e.rootTitle,frame:t,index:0});return n},getChildFacets:function(t,e,n){var r=this,o=[],u=r.dims,c=u.length;if(c<e)return[];var l=u[e-1],h=r.getDimValues(l,t);return i.each(h,function(i,u){var c=[{dim:l,value:i,values:h}],f=r.getFilter(c),g=a.filter(t,f);if(g.rowCount()){var p=new s({type:r.type,xValue:i,xDim:l,colIndex:u,rows:r.getRows(),rowIndex:e,frame:g,children:r.getChildFacets(g,e+1,n),index:n.length});o.push(p),n.push(p)}}),o},getFacetsByLevel:function(t,e){var n=[];return i.each(t,function(t){t.rowIndex===e&&n.push(t)}),n},getRegion:function(t,e,n,i){var r=this,a=r.plotRange,s=r.margin,o=a.bl,u=a.tr,c=(u.x-o.x)/e,l=(u.y-o.y)/t,h={x:o.x+c*n+s,y:o.y+l*i-s},f={x:h.x+c-s,y:h.y+2*l/3+s};return{start:h,end:f}},getRegionIndex:function(t){var e=t[0],n=t[t.length-1];return(n.colIndex-e.colIndex)/2+e.colIndex},setRegion:function(t){var e=this;e.forceColIndex(t),i.each(t,function(t){t.region=e.getRegion(t.rows,t.cols,t.colIndex,t.rows-t.rowIndex-1)})},isLeaf:function(t){return!t.children||!t.children.length},forceColIndex:function(t){var e=this,n=[],r=0;i.each(t,function(t){e.isLeaf(t)&&(n.push(t),t.colIndex=r,r++)}),i.each(n,function(t){t.cols=n.length});for(var a=e.dims.length,s=a-1;s>=0;s--)for(var o=e.getFacetsByLevel(t,s),u=0;u<o.length;u++){var c=o[u];e.isLeaf(c)||(c.originColIndex=c.colIndex,c.colIndex=e.getRegionIndex(c.children),c.cols=n.length)}}}),t.exports=o},function(t,e,n){var i=n(1),r=n(20);i.augment(r,{row:function(t){var e=this,n=e.colNames(),i=[];return i.push(e._getObject(t,n)),new r(i,{names:n.slice(0)})},addRow:function(t){var e=this,n=e.colNames(),r=e.arr;i.each(n,function(e,n){r[n].push(t[e])})},rows:function(t){var e=this,n=e.colNames(),i=e.data,a=[];if(i)for(var s=0;s<t.length;s++)a.push(e._getObject(s,n));return new r(a,{names:n.slice(0)})},_getColArray:function(t,e,n){var r=this,a=r.arr,s=r.colNames(),o=[],u=r.rowCount(),c=i.map(t,function(t){return i.indexOf(s,t)});e=e||0,n=i.isNull(n)?u:n;for(var l=0;l<c.length;l++){var h=a[c[l]]||[],f=h.slice(e,n);o.push(f)}return o},col:function(t){var e,n=this,a=n.colNames();i.isString(t)?(e=t,t=i.indexOf(a,e)):e=a[t];var s=n._getColArray([e]);return new r(s,{names:[e]})},cols:function(t){for(var e=this,n=0;n<t.length;n++){var a=t[n];i.isNumber(a)&&(t[n]=e.names[a])}var s=e._getColArray(t);return new r(s,{names:t})},cell:function(t,e){var n=this,r=n.colNames(),a=n.arr;return i.isString(e)&&(e=i.indexOf(r,e)),a[e]?a[e][t]:void 0},clone:function(){var t=this,e=t.colNames(),n=t.toJSON();return new r(n,{names:e.slice(0)})},sub:function(t,e,n,a){var s,o=this,u=o.colNames();return t=t||0,e?e+=1:e=void 0,u=u.slice(t,e),i.isNull(n)||(a?a+=1:a=o.rowCount-1),s=o._getColArray(u,n,a),new r(s,{names:u})},toString:function(){var t=this,e=[],n=t.arr,i=t.colNames(),r=t.rowCount();e.push(i.join("\t"));for(var a=0;a<r;a++){for(var s=[],o=0;o<n.length;o++)s.push(n[o][a]);e.push(s.join("\t"))}return e.join("\n")},s:function(){return this.toString()}}),t.exports=r},function(t,e,n){function i(){var t,e=s.toArray(arguments);t=s.isString(e[0])?e.shift():"type";var n=[];return s.each(e,function(e,i){s.each(e,function(e){e[t]=i}),n=n.concat(e)}),new u(n)}function r(t,e,n,i,r){if(i=i||"type",s.isString(r)&&(r=[r]),!r){r=[];var a=t.colNames();s.each(a,function(t){s.indexOf(e,t)===-1&&r.push(t)})}var c=[];return t.each(function(t){s.each(e,function(e){var a={};a[n]=t[e],a[i]=e,o.mixIf(a,t,r),c.push(a)})}),new u(c)}function a(){var t=s.toArray(arguments),e=[],n=[];return s.each(t,function(t){e=e.concat(t.colNames()),n=n.concat(t.toArray())}),new u(n,{names:e})}var s=n(1),o=n(88),u=n(20),c=n(333);s.mix(u,{mean:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.mean(n)},geometric_mean:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.geometric_mean(n)},median:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.median(n)},max:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.max(n)},min:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.min(n)},mode:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.mode(n)},range:function(t,e){var n=u.max(t,e),i=u.min(t,e);return[i,n]},sum:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.sum(n)},quantile:function(t,e,n){var i=t.colArray(e);return i=o.formatArray(i),i=o.filterNull(i),c.quantile(i,n)},variance:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.variance(n)},sample_variance:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.sample_variance(n)},standard_deviation:function(t,e){var n=t.colArray(e);return n=o.formatArray(n),n=o.filterNull(n),c.standard_deviation(n)},sd:function(t,e){return u.standard_deviation(t,e)},se:function(t,e){var n=t.colArray(e);n=o.formatArray(n),n=o.filterNull(n);var i=c.sample_variance(n);return Math.sqrt(i)/Math.sqrt(n.length)},sortBy:function(t,e){return o.sort(t,e)},filter:function(t,e){var n=[];return e?(t.each(function(t,i){e(t,i)&&n.push(t)}),new u(n)):t},cumulative:function(t,e){var n=t.colArray(e);n=o.filterNull(n);var i=[],r=0;return s.each(n,function(t){r+=t,i.push(r)}),i},complement:function(t,e){var n=t.colNames().slice(0);return s.each(e,function(t){s.remove(n,t)}),t.cols(n)},forceMerge:function(){var t=s.toArray(arguments),e=[],n=[];return s.each(t,function(t){var n=t.colNames();s.each(n,function(t){s.indexOf(e,t)===-1&&e.push(t)})}),s.each(t,function(t){var e=t.toJSON();n=n.concat(e)}),new u(n,{names:e})},combine:a,combin:a,combineColumns:r,combinColumns:r,combineArray:i,combinArray:i}),u.Array={repeat:function(t,e){for(var n=[],i=0;i<e;i++)n.push(t);return n}},t.exports=u},function(t,e){var n=function(t,e,n){var i,r,a,s,o=!0;for(i=0;i<n-1;i++){if(0==t[i][i]){o=!1;break}for(r=i+1;r<n;r++)for(s=-t[r][i]/t[i][i],e[r]=e[r]+s*e[i],a=i;a<n;a++)t[r][a]=t[r][a]+s*t[i][a]}for(i=0;i<n;i++)if(0==t[i][i]){o=!1;break}return o},i=function(t,e){var i=[],r=t,a=e,s=a.length,o=n(r,a,s);if(o){i[s-1]=a[s-1]/r[s-1][s-1];for(var u=s-2;u>=0;u--){i[u]=a[u];for(var c=u+1;c<s;c++)i[u]=i[u]-r[u][c]*i[c];i[u]=i[u]/r[u][u]}}else i=!1;return i};t.exports=i},function(t,e,n){var i=n(11);i.Image=n(194),i.Text=n(198),i.Line=n(195),i.Tag=n(197),i.Rect=n(196),i.Arc=n(192),i.Html=n(193),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(11),a=n(3),s=a.Vector2,o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,r),i.augment(o,{start:[],end:[],cfg:{stroke:"#000"},getCfg:function(t){var e,n,i,r=this,a=r.parsePoint(t,r.start),o=r.parsePoint(t,r.end),u=t.invertPoint(a),c=t.invertPoint(o),l={x:(c.x+u.x)/2,y:u.y},h=t.convertPoint(l),f=t.getCenter(),g=new s(1,0),p=new s.sub(a,f).length(),d=new s.sub(o,a);return d=d.vertical(),d.setLength(p),d.add(h),e=new s.sub(a,d),n=new s.sub(o,d),i={x:d.x,y:d.y,startAngle:e.angleTo(g,!0),endAngle:n.angleTo(g,!0),r:p}},paint:function(t,e){var n=i.mix({},this.cfg,this.getCfg(t));e.addShape("Arc",{attrs:n})}}),t.exports=o},function(t,e,n){"use strict";function i(t,e,n){var i=[];switch(t){case"tl":i[0]=0,i[1]=0;break;case"tr":i[0]=-e,i[1]=0;break;case"bl":i[0]=0,i[1]=Math.floor(-n);break;case"br":i[0]=Math.floor(-e),i[1]=Math.floor(-n);break;case"rc":i[0]=Math.floor(-e),i[1]=Math.floor(-n/2);break;case"lc":i[0]=0,i[1]=Math.floor(-n/2);break;case"tc":i[0]=Math.floor(-e/2),i[1]=Math.floor(-n);break;case"bc":i[0]=Math.floor(-e/2),i[1]=0;break;default:i[0]=Math.floor(-e/2),i[1]=Math.floor(-n/2)}return i}var r=n(1),a=n(11);n(199);var s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,a),r.augment(s,{type:"html",point:[],cfg:{offset:[0,0],align:"cc"},html:"",paint:function(t,e){var n=this,a=n.parsePoint(t,n.point),s=r.createDom(n.html);s=r.modiCSS(s,{position:"absolute",top:Math.floor(a.y)+"px",left:Math.floor(a.x)+"px",visibility:"hidden"});var o,u=e.get("canvas").get("el").parentNode;u.getElementsByClassName("guideWapper").length>0?o=u.getElementsByClassName("guideWapper")[0]:(o=r.createDom('<div class="guideWapper"></div>'),o=r.modiCSS(o,{position:"absolute",top:0,left:0}),u.appendChild(o)),o.appendChild(s);var c=n.cfg;if(c.align){var l=c.align,h=r.getWidth(s),f=r.getHeight(s),g=i(l,h,f);a.x=a.x+g[0],a.y=a.y+g[1]}if(c.offset){var p=c.offset;a.x=a.x+p[0],a.y=a.y+p[1]}r.modiCSS(s,{top:Math.floor(a.y)+"px",left:Math.floor(a.x)+"px",visibility:"visible"})}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(11),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{start:[],end:null,src:"",paint:function(t,e){var n=this,r=n.parsePoint(t,n.start),a=n.cfg;if(a.img=a.src,a=i.mix({src:n.src},a,r),n.end){var s=n.parsePoint(t,n.end);a.x=r.x,a.y=s.y,a.width=s.x-r.x,a.height=r.y-s.y}else a.y=a.y-a.height;e.addShape("Image",{attrs:a})}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(11),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{from:[],to:[],cfg:{stroke:"#000",lineWidth:1},paint:function(t,e){var n=this,r=n.parsePoint(t,n.from),a=n.parsePoint(t,n.to),s=n.cfg,o=i.substitute("M {x} {y}",r)+i.substitute("L {x} {y}",a);s=i.mix({path:o},s),e.addShape("Path",{attrs:s})}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(11),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{start:[],end:[],cfg:{stroke:"#000"},getPath:function(t){var e=this,n=e.parsePoint(t,e.start),i=e.parsePoint(t,e.end),r=[];return r.push(["M",n.x,n.y]),r.push(["L",i.x,n.y]),r.push(["L",i.x,i.y]),r.push(["L",n.x,i.y]),r.push(["z"]),r},paint:function(t,e){var n=this,r=n.cfg,a=n.getPath(t);r=i.mix({path:a},r),e.addShape("Path",{attrs:r})}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(11),a=10,s=function(t){s.superclass.constructor.call(this,t)};i.extend(s,r),i.augment(s,{from:[],to:[],text:"",cfg:{line:{stroke:"#000",lineWidth:1},text:{fill:"#000"},rect:{stroke:"#000",lineWidth:1,fill:"#fff"}},paint:function(t,e){var n=this,i=n.parsePoint(t,n.from),r=n.parsePoint(t,n.to),a=e.addGroup();n.drawLine(i,r,a),n.drawText(r,a)},drawLine:function(t,e,n){var r=this,a=i.substitute("M {x} {y}",t)+i.substitute("L {x} {y}",e),s=i.mix({path:a},r.cfg.line);n.addShape("Path",{attrs:s})},drawText:function(t,e){var n=this,r=i.mix({text:n.text},n.cfg.text,t),s=e.addShape("Text",{zIndex:1,attrs:r}),o=s.getBBox(),u=i.mix({x:o.minX-a,y:o.minY-a,width:o.width+2*a,height:o.height+2*a},n.cfg.rect);e.addShape("rect",{attrs:u}),e.sort()}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(11),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{position:[],text:"",cfg:{fill:"#000",textAlign:"center"},paint:function(t,e){var n=this,r=n.position,a=n.parsePoint(t,r),s=n.cfg;s=i.mix({text:n.text},s,a),e.addShape("Text",{attrs:s})}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=document.createElement("table"),a=document.createElement("tr"),s=/^\s*<(\w+|!)[^>]*>/,o={tr:document.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:a,th:a,"*":document.createElement("div")};i.mix(i,{modiCSS:function(t,e){var n;for(n in e)e.hasOwnProperty(n)===!0&&(t.style[n]=e[n]);return t},createDom:function(t){var e=s.test(t)&&RegExp.$1;e in o||(e="*");var n=o[e];return t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t,n.childNodes[0]},getStyle:function(t,e){return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e]},getWidth:function(t){var e=this.getStyle(t,"width");return"auto"===e&&(e=t.offsetWidth),parseFloat(e)},getHeight:function(t){var e=this.getStyle(t,"height");return"auto"===e&&(e=t.offsetHeight),parseFloat(e)}}),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(330),a=function(t){i.mix(this,t)};i.augment(a,{get:function(t){return this[t]},set:function(t,e){this[t]=e},width:500,height:500,x:0,y:0,min:null,max:null,formatter:function(t){return t},radius:60,blur:0,colors:["rgb(0,0,255)","rgb(0,0,255)","rgb(0,255,0)","yellow","rgb(255,0,0)"],_mkcircle:function(t,e,n,i){var r=this.blur,a=this.radius,s=i.createRadialGradient(t,e,a*r,t,e,a);s.addColorStop(0,"rgba(0, 0, 0, 1)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.globalAlpha=n,i.fillStyle=s},_colorise:function(t){for(var e=this.width,n=this.height,i=t.getImageData(this.x,this.y,e,n),a=i.data,s=a.length,o=this.colors,u=r.gradient(o),c=3;c<s;c+=4){var l=a[c];if(l){var h=r.Util.rgb2arr(u(l/256));a[c-3]=h[0],a[c-2]=h[1],a[c-1]=h[2],a[c]=l}}return i},getData:function(t){for(var e=[],n=t.length-1;n>=0;n--)e.push(t[n][2]);var r=i.isNull(this.max)?Math.max.apply(null,e):this.max,a=i.isNull(this.min)?Math.min.apply(null,e):this.min;if(r===a)return!1;var s=document.createElement("canvas"),o=s.getContext("2d");s.width=this.width+this.x,s.height=this.height+this.y;for(var u=this.formatter,n=t.length-1;n>=0;n--){var c=(u(t[n][2])-u(a))/(u(r)-u(a));this._mkcircle(t[n][0],t[n][1],c,o),o.fillRect(0,0,this.width+this.x,this.height+this.y)}return this._colorise(o)}}),t.exports=a},function(t,e,n){var i=n(204);t.exports={interpolation:i.interpolation,unInterpolation:i.unInterpolation}},function(t,e,n){"use strict";function i(t,e){for(var n=[],r=Math.min(t.length,e.length),o=0;o<r;o++)s.isArray(t[o])&&s.isArray(e[o])?n[o]=i(t[o],e[o]):n[o]=a.singular(t[o],e[o]);return function(t){for(var e=[],i=0;i<r;i++)e[i]=n[i](t);return e}}function r(t,e){for(var n=[],i=Math.min(t.length,e.length),o=0;o<i;o++)s.isArray(t[o])&&s.isArray(e[o])?n[o]=r(t[o],e[o]):n[o]=a.unSingular(t[o],e[o]);return function(t){for(var e=Math.min(n.length,t.length),i=0,r=0,a=0;a<e;a++)i+=n[a](t[a]),r++;return 0===r?0:i/r}}var a=n(36),s=n(1);t.exports={array:i,unArray:r}},function(t,e,n){"use strict";function i(t,e){switch(e.getType()){case"rgb":return a(t,e);case"hsl":return o(t,e)}}function r(t,e){switch(e.getType()){case"rgb":return s(t,e);case"hsl":return u(t,e)}}function a(t,e){var n=t.getR(),i=t.getG(),r=t.getB(),a=t.getA(),s=e.getR()-n,o=e.getG()-i,u=e.getB()-r,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){var e=new c;return e.setRGB(n+s*t,i+o*t,r+u*t,void 0!==a&&void 0!==l?a+l*t:void 0),e.getRGBStyle()}}function s(t,e){var n=t.getR(),i=t.getG(),r=t.getB(),a=t.getA(),s=e.getR()-n,o=e.getG()-i,u=e.getB()-r,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){if(t=new c(t),!t.getType())return 0;var e=t.getR(),h=t.getG(),f=t.getB(),g=t.getA();g=g||1;var p=0,d=0;return 0!==s&&(p+=(e-n)/s,d++),0!==o&&(p+=(h-i)/o,d++),0!==u&&(p+=(f-r)/u,d++),0!==l&&l&&(p+=(g-a)/l,d++),0===d?0:p/d}}function o(t,e){var n=t.getH(),i=t.getS(),r=t.getL(),a=t.getA(),s=e.getH()-n,o=e.getS()-i,u=e.getL()-r,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){var e=new c;return e.setHSL(n+s*t,i+o*t,r+u*t,void 0!==a&&void 0!==l?a+l*t:void 0),e.getHSLStyle()}}function u(t,e){var n=t.getH(),i=t.getS(),r=t.getL(),a=t.getA(),s=e.getH()-n,o=e.getS()-i,u=e.getL()-r,l=e.getA();return void 0===a&&void 0===l||(a=a||1,l=(void 0===l?1:l)-a),function(t){if(t=new c(t),!t.getType())return 0;var e=t.getH(),h=t.getS(),f=t.getL(),g=t.getA();g=g||1;var p=0,d=0;return 0!==s&&(p+=(e-n)/s,d++),0!==o&&(p+=(h-i)/o,d++),0!==u&&(p+=(f-r)/u,d++),0!==l&&l&&(p+=(g-a)/l,d++),0===d?0:p/d}}var c=n(33);t.exports={color:i,unColor:r}},function(t,e,n){"use strict";function i(t,e){return a.isObject(t)&&a.isObject(e)?"matrix3"===t.type&&"matrix3"===e.type?l.matrix(t,e):"path"===t.type&&"path"===e.type?s.path(t,e):u.object(t,e):a.isArray(t)&&a.isArray(e)?o.array(t,e):c.singular(t,e)}function r(t,e){return"matrix3"===t.type&&"matrix3"===e.type?l.unMatrix(t,e):a.isArray(t)&&a.isArray(e)?o.unArray(t,e):a.isObject(t)&&a.isObject(e)?u.unObject(t,e):c.unSingular(t,e)}var a=n(1),s=n(208),o=n(202),u=n(207),c=n(36),l=n(205),h=n(3);h.Matrix3;t.exports={interpolation:i,unInterpolation:r}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i=t.elements,r=e.elements,s=0;s<u;s++)n[s]=a.singular(i[s],r[s]);return function(t){for(var e=new o,i=e.elements,r=0;r<u;r++)i[r]=n[r](t);return e}}function r(t,e){for(var n=[],i=t.elements,r=e.elements,s=0;s<u;s++)n[s]=a.unSingular(i[s],r[s]);return function(t){for(var e=t.elements,i=0,r=0,a=0;a<u;a++){var s=n[a](e[a]);0!==s&&(i+=s,r++)}return i/r}}var a=n(36),s=n(3),o=s.Matrix3,u=9;t.exports={matrix:i,unMatrix:r}},function(t,e){"use strict";function n(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function i(t,e){return e-=t,function(n){return 0===e?0:(n-t)/e}}t.exports={number:n,unNumber:i}},function(t,e,n){"use strict";function i(t,e){var n={};for(var i in t)i in e&&(n[i]=a.singular(t[i],e[i]));return function(t){var e={};for(var i in n)e[i]=n[i](t);return e}}function r(t,e){var n={};for(var i in t)i in e&&(n[i]=a.unSingular(t[i],e[i]));return function(t){var e=0,i=0;for(var r in n)r in t&&(e+=n[r](t[r]),i++);return 0===i?0:e/i}}var a=n(36);t.exports={object:i,unObject:r}},function(t,e,n){"use strict";function i(t,e){var n=r.toCurve(t.path,e.path),i=n[0],a=n[1];return function(n){var r=[];if(n>=1)return e.path;if(n<=0)return t.path;for(var s=0;s<i.length;s++){r[s]=[i[s][0]];for(var o=1;o<i[s].length;o++)r[s][o]=(a[s][o]-i[s][o])*n+i[s][o]}return r}}var r=n(49);t.exports={path:i}},function(t,e,n){var i={};i.Tree=n(212),i.Linear=n(90),i.Sankey=n(210),t.exports=i},function(t,e,n){"use strict";var i=n(1);n(213);var r=n(90),a=function(t){i.mix(this,t),this._init()};i.extend(a,r),i.augment(a,{hasWeight:!0,stepField:"step",totalStep:0,calculationTimes:2,_init:function(){var t=this.edges.slice(0);this.edges=t,this._initNode()},_initNode:function(){var t=this,e=t.nodes,n=t.stepField,r=t.valueField;i.isNull(e)?e=t._createNodes():(e=e.slice(0),t.nodes=e),t._initNodeMap(),i.isNull(e[0][n])&&t._calculateStep(),i.isNull(e[0][r])&&t._calculateValue()},_calculateStep:function(){var t=this,e=t.nodes,n=t.stepField;e.forEach(function(e){i.isNull(e[n])&&t._getStepFromEdges(e)});var r=e.filter(function(t){return 0===t.outEdges.length});r.map(function(e){e.step=t.totalStep-1})},_getValueFromEdges:function(t){var e=this.valueField,n=0,i=t.step;return 0===i?t.outEdges.forEach(function(t){n+=t[e]}):t.inEdges.forEach(function(t){n+=t[e]}),t.value=n,n},_getStepFromEdges:function(t){var e=this,n=e.sourceField,r=0;return t.inEdges.length>0&&t.inEdges.forEach(function(t){var a,s=e._findObj(t[n]);a=i.isNull(s.step)?e._getStepFromEdges(s):s.step,r=Math.max(a+1,r)}),t.step=r,e.totalStep=Math.max(e.totalStep,r+1),r},_findObj:function(t){var e=this.nodesMap;return e[t]},getNodes:function(){var t=this,e=t.nodes,n=t.sourceField,r=t.targetField,a=t.stepField,s=t.valueField,o=[],u=[],c=[];e.forEach(function(t){var e=t[a];void 0===u[e]&&(u[e]=[]),u[e].push(t),i.isNull(o[e])?o[e]=t[s]:o[e]+=t[s]}),t.maxValue=Math.max.apply(null,o),t.totalStep=u.length,t._setMarginWidth(u[0]),t._layoutByWeight(u[0]),t._layoutNodes(u,n);for(var l=t.calculationTimes;l>0;l--)t._layoutNodes(u.reverse(),r),t._layoutNodes(u.reverse(),n);return u.forEach(function(t){c=c.concat(t)}),t.normalization(c),c},normalization:function(t){var e=1;t.forEach(function(t){t.x>e&&(e=t.x)}),e>1&&t.map(function(t){t.x=t.x/e,t.width=t.width/e})},_layoutNodes:function(t,e){var n=this;if(t.length>=2){var i;for(i=1;i<t.length;i++)n.y=i/(n.totalStep-1),n._layoutHighStep(t[i],e),t[i].sort(function(t,e){return t.x-e.x}),n._handleConflict(t[i]);n._layoutX(t[i-1])}},_handleConflict:function(t){var e=this.margin;t.map(function(n,i){i>0&&n.x-.5*n.width<=t[i-1].x+.5*t[i-1].width+2*e&&(n.x=t[i-1].x+.5*t[i-1].width+2*e+.5*n.width)})},_layoutHighStep:function(t,e){var n=this,i=n.valueField,r=n.maxValue,a=n.thickness,s=n.marginWidth,o=n.y,u=e===n.sourceField?n.targetField:n.sourceField;t.map(function(t){var c,l=n._getEdgeOfCurNode(t,u),h=0;l.forEach(function(r){c=n._findObj(r[e]);var a=r[i];h+=c.x*a/t[i]}),t.x=h,t.weight=t[i]/r,t.width=t.weight*(1-s),t.height=a,t.y=void 0===t.y?o:t.y})},getEdges:function(){for(var t=this.calculationTimes;t>0;t--)this._layoutEdges();return this.edges},_layoutEdges:function(){var t=this,e=t.nodes,n=t.stepField,i=t.targetField,r=t.sourceField,a=t.totalStep;e.forEach(function(e){0!==e[n]&&t._edgeSort(e.inEdges,r)}),e.forEach(function(e){e[n]!==a&&t._edgeSort(e.outEdges,i)})},_edgeSort:function(t,e){var n=this,r=n.edges;t.sort(function(t,i){return n._findObj(t[e]).x-n._findObj(i[e]).x}),t.forEach(function(a,s){for(var o=0;o<s;o++){var u=n._findIndex(r,t[o]),c=n._findIndex(r,a);n._findObj(t[o][e]).x>n._findObj(a[e]).x?i.insertBefore(r,c,u):i.insertAfter(r,c,u)}})},_findIndex:function(t,e){var n=this.sourceField,i=this.targetField,r=t.findIndex(function(t){return t[n]===e[n]&&t[i]===e[i]});return r}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t)};i.augment(r,{parent:null,level:0,children:null,x:0,y:0}),t.exports=r},function(t,e,n){"use strict";function i(t){return t/2}var r=n(1),a="level",s=n(211),o=function(t){r.mix(this,t),this._init()};r.augment(o,{nodes:null,childrenField:"children",collapsedField:"collapsed",width:1,height:1,_levels:1,idField:null,edgeFields:null,_preX:{},dx:0,dy:0,nodeAlign:"start",_totalLeafCount:0,_init:function(){var t=this,e=t.nodes.slice(0);t._traverseNodes(e),t.originDx=t.dx,t.originDy=t.dy,t.nodes=e,t._initDxDy()},_initDxDy:function(){var t=this,e=t.nodes,n=t._levels;t._preX={};var i=t._getAlignCount(e);t._totalLeafCount=i,t.originDx||(t.dx=t.width/(i+.5)),t.originDy||(t.dy=t.height/n)},reset:function(){this._initDxDy()},_traverseNodes:function(t,e){var n,i,s=this;e?(n=e[a]+1,i=e.id):(n=0,i="");var o=s.childrenField,u=s.idField;r.each(t,function(t,r){t[a]=n,t.parent=e,u&&(t.id=t[u]),t.id||(t.id=i?i+"-"+r:r.toString());var c=t[o];c&&c.length?s._traverseNodes(t[o],t):n+1>s._levels&&(s._levels=n+1)})},_getAlignCount:function(t){var e=this,n=0,a=0,s=0,o=e.childrenField,u=t.length,c=e.collapsedField;return r.each(t,function(t,r){var l=t[o];if(l&&l.length&&!t[c]){var h=s/2;n+=h,h>1&&h<a&&(a-=h);var f=e._getAlignCount(l),g=i(f);a+=1,n+=Math.max(g,a),a=0,s=f,t._alignCount=f}else a+=1,r===u-1&&1!==u&&(a+=.5)}),a=Math.max(a,i(s)),n+=Math.abs(a)},_getMaxPreXParent:function(t){if(!t)return null;var e=this,n=e._preX,i=t.level,r=n[i]||0,a=r,s=i,o=t.parent,u=t;if(o&&o.children[0]===t||0===r)for(;s>0&&o;){var c=s-1,l=n[c]||0;if(l>a&&(a=l,u=o),s=c,o.parent&&o.parent.children[0]!==o)break;o=o.parent}return u},_layoutNodes:function(t,e){var n=this,i=n.childrenField,o=n.collapsedField,u=t.length;r.each(t,function(t,r){var c=t[i],l=t[a],h=n.dx,f=n.dy,g=new s(t);e.push(g),g.y=l*f,"middle"===n.nodeAlign?g.y+=.5*f:"end"===n.nodeAlign&&(g.y+=f);var p=n._preX[l]||0;if(c&&c.length&&!t[o]){n._layoutNodes(c,e);var d=c[0],v=c[c.length-1],m=(d.x+v.x)/2;g.x=Math.max(m,p+h),n._preX[l]=g.x}else{if(t.parent&&0===r){var x=n._getMaxPreXParent(t.parent),y=n._preX[l-1]||0;if(x)if(y=n._preX[x.level]||0,x===t.parent&&1===t.parent.children.length);else{var _=x._alignCount;y-=y<h?_*h/2-h/2:_*h/2-h}p=Math.max(p,y)}g.x=p+h,n._preX[l]=g.x,r===u-1&&u>1&&(n._preX[l]+=.5*h)}t.x=g.x,t.y=g.y})},_getEdges:function(t,e){var n=this,i=[],a=n.childrenField,s=n.collapsedField,o=n.edgeFields;return e&&e[s]?i:(r.each(t,function(t){if(e){var s={source:e.id,target:t.id};o&&r.each(o,function(e){s[e]=t[e]}),i.push(s)}t[a]&&(i=i.concat(n._getEdges(t[a],t)))}),i)},getNodes:function(){var t=this,e=t.nodes,n=[];return t._layoutNodes(e,n),t._fixedRange(n),n},_fixedRange:function(t){var e=0,n=this.width;if(this._totalLeafCount>3){r.each(this._preX,function(t){e<t&&(e=t)});var i=(n-this.dx/2)/e;r.each(t,function(t){t.x=t.x*i})}},getEdges:function(){var t=this,e=t.nodes;return t._getEdges(e)},_findBy:function(t,e){var n=this,i=null,a=n.childrenField;return r.each(t,function(t){var r=t[a];if(e(t)?i=t:r&&r.length&&(i=n._findBy(r,e)),i)return!1}),i},findNode:function(t){return this._findBy(this.nodes,function(e){return e.id.toString()===t.toString()})}}),t.exports=o},function(t,e,n){var i=n(1);i.mix(i,{insertBefore:function(t,e,n){if(!(e<=n)){var i=t.splice(e,1)[0];t.splice(n-1,0,i)}},insertAfter:function(t,e,n){if(!(e>=n)){var i=t.splice(e,1)[0];t.splice(n,0,i)}}}),t.exports=i},function(t,e,n){var i;i={albers:n(215),mercator:n(216),orthographic:n(217)},t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(48),a=function(t){a.superclass.constructor.call(this,t),this._init()};i.extend(a,r),i.augment(a,{"\u03bb0":0,"\u03c60":0,"\u03c61":0,"\u03c62":0,basic:[0,0,0,60],_init:function(){
this.\u03bb0=this.toRadians(this.basic[0]),this.\u03c60=this.toRadians(this.basic[1]),this.\u03c61=this.toRadians(this.basic[2]),this.\u03c62=this.toRadians(this.basic[3])},project:function(t,e){var n=this.\u03bb0,i=(this.\u03c60,this.\u03c61),r=this.\u03c62,a=.5*(Math.sin(i)+Math.sin(r)),s=Math.cos(i),o=s*s+2*a*Math.sin(i),u=Math.sqrt(o-2*a*Math.sin(n))/a,c=a*(this.toRadians(t)-n),l=Math.sqrt(o-2*a*Math.sin(this.toRadians(e)))/a;return{x:this.toDegrees(l*Math.sin(c)),y:this.toDegrees(u-l*Math.cos(c))}},invert:function(t){var e=this.\u03bb0,n=(this.\u03c60,this.\u03c61),i=this.\u03c62,r=this.toRadians(t.x),a=this.toRadians(t.y),s=.5*(Math.sin(n)+Math.sin(i)),o=Math.cos(n),u=o*o+2*s*Math.sin(n),c=Math.sqrt(u-2*s*Math.sin(e))/s,l=Math.atan(r/(c-a)),h=Math.sqrt(r*r+Math.pow(c-a,2));return{x:this.toDegrees(e+l/s),y:this.toDegrees(Math.asin((u-h*h*s*s)/(2*s)))}}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(48),a=function(t){a.superclass.constructor.call(this,t),this._init()};i.extend(a,r),i.augment(a,{"\u03bb0":0,_init:function(){this.\u03bb0=this.toRadians(this.\u03bb0)},project:function(t,e){return t=this.toRadians(t),e=this.toRadians(e),{x:this.toDegrees(t-this.\u03bb0),y:this.toDegrees(Math.log(Math.tan(Math.PI/4+e/2)))}},invert:function(t){var e=this.toRadians(t.x),n=this.toRadians(t.y);return{x:this.toDegrees(e+this.\u03bb0),y:this.toDegrees(2*Math.atan(Math.exp(n))-Math.PI/2)}}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(48),a=function(t){a.superclass.constructor.call(this,t),this._init()};i.extend(a,r),i.augment(a,{"\u03bb0":110,"\u03c61":25,_init:function(){this.\u03bb0=this.toRadians(this.\u03bb0),this.\u03c61=this.toRadians(this.\u03c61)},project:function(t,e){t=this.toRadians(t),e=this.toRadians(e);var n=Math.cos(e)*Math.sin(t-this.\u03bb0),i=Math.cos(\u03c61)*Math.sin(e)-Math.sin(\u03c61)*Math.cos(e)*Math.cos(t-\u03bb0);return{x:this.toDegrees(n),y:this.toDegrees(i)}},invert:function(t){var e=this.toRadians(t.x),n=this.toRadians(t.y),i=Math.sqrt(e*e+n*n),r=Math.asin(i),a=this.\u03bb0+Math.atan(e*Math.sin(r)/(i*Math.cos(this.\u03c61)*Math.cos(r)-n*Math.sin(this.\u03c611)*Math.sin(r))),s=Math.asin(Math.cos(r)*Math.sin(this.\u03c61)+n*Math.sin(r)*Math.cos(this.\u03c61)/i);return{x:this.toDegrees(a),y:this.toDegrees(s)}}}),t.exports=a},function(t,e){"use strict";function n(t,e){var n=t.length;if(0===n)return NaN;var i=t[0];if(e<t[0])return NaN;if(e>=t[n-1])return t[n-1];for(var r=1;r<t.length&&!(e<t[r]);r++)i=t[r];return i}function i(t,e){var n=t.length;if(0===n)return NaN;var i,r=t[0];if(e>t[n-1])return NaN;if(e<t[0])return t[0];for(var a=1;a<t.length;a++){if(e<=t[a]){i=t[a];break}r=t[a]}return i}var r={PRECISION:1e-5,equal:function(t,e){return Math.abs(t-e)<r.PRECISION},clamp:function(t,e,n){return t<e?e:t>n?n:t},snapTo:function(t,e){var r=n(t,e),a=i(t,e);if(isNaN(r)||isNaN(a)){if(t[0]>=e)return t[0];var s=t[t.length-1];if(s<=e)return s}return Math.abs(e-r)<Math.abs(a-e)?r:a},snapFloor:function(t,e){return n(t,e)},snapCeiling:function(t,e){return i(t,e)},degreeToRad:function(t){return Math.PI/180*t},radToDegree:function(t){return 180/Math.PI*t},mod:function(t,e){return(t%e+e)%e}};t.exports=r},function(t,e,n){"use strict";function i(){this.elements=[1,0,0,0,1,0,0,0,1]}var r=n(1),a=n(6);i.multiply=function(t,e){var n=t.elements,r=e.elements,a=new i;return a.set(n[0]*r[0]+n[3]*r[1]+n[6]*r[2],n[0]*r[3]+n[3]*r[4]+n[6]*r[5],n[0]*r[6]+n[3]*r[7]+n[6]*r[8],n[1]*r[0]+n[4]*r[1]+n[7]*r[2],n[1]*r[3]+n[4]*r[4]+n[7]*r[5],n[1]*r[6]+n[4]*r[7]+n[7]*r[8],n[2]*r[0]+n[5]*r[1]+n[8]*r[2],n[2]*r[3]+n[5]*r[4]+n[8]*r[5],n[2]*r[6]+n[5]*r[7]+n[8]*r[8])},i.equal=function(t,e){for(var n=t.elements,i=e.elements,r=!0,s=0,o=n.length;s<o;s++)if(!a.equal(n[s],i[s])){r=!1;break}return r},r.augment(i,{type:"matrix3",set:function(t,e,n,i,r,a,s,o,u){var c=this.elements;return c[0]=t,c[3]=e,c[6]=n,c[1]=i,c[4]=r,c[7]=a,c[2]=s,c[5]=o,c[8]=u,this},get:function(t,e){return t--,e--,this.elements[3*e+t]},identity:function(){return this.set(1,0,0,0,1,0,0,0,1)},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},det:function(){var t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],o=t[6],u=t[7],c=t[8];return e*a*c-e*s*u-n*r*c+n*s*o+i*r*u-i*a*o},inverse:function(t){return this.copy(this.getInverse(t))},getInverse:function(t){var e=this.det();if(0===e){if(t)throw"matrix exception: get inverse matrix with 0 det";return console.warn("matrix cannot inverse"),new i}var n=this.elements,r=(n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8],new i);return r.set(n[4]*n[8]-n[7]*n[5],-(n[3]*n[8]-n[6]*n[5]),n[3]*n[7]-n[6]*n[4],-(n[1]*n[8]-n[7]*n[2]),n[0]*n[8]-n[6]*n[2],-(n[0]*n[7]-n[6]*n[1]),n[1]*n[5]-n[4]*n[2],-(n[0]*n[5]-n[3]*n[2]),n[0]*n[4]-n[3]*n[1]),r.multiplyScalar(1/e),r},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},multiply:function(t){return this.copy(i.multiply(this,t))},translate:function(t,e){var n=new i;return n.set(1,0,t,0,1,e,0,0,1),this.copy(i.multiply(n,this))},rotate:function(t){var e=new i;return e.set(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),this.copy(i.multiply(e,this))},scale:function(t,e){var n=new i;return n.set(t,0,0,0,e,0,0,0,1),this.copy(i.multiply(n,this))},equal:function(t){return i.equal(this,t)},copy:function(t){for(var e=t.elements,n=this.elements,i=0,r=e.length;i<r;i++)n[i]=e[i];return this},clone:function(){for(var t=new i,e=t.elements,n=this.elements,r=0,a=n.length;r<a;r++)e[r]=n[r];return t},to2DObject:function(){var t=this.elements;return{a:t[0],b:t[1],c:t[3],d:t[4],e:t[6],f:t[7]}},from2DObject:function(t){var e=this.elements;return e[0]=t.a,e[1]=t.b,e[3]=t.c,e[4]=t.d,e[6]=t.e,e[7]=t.f,this}}),t.exports=i},function(t,e,n){"use strict";function i(t,e){if(1===arguments.length){var n=t;t=n[0],e=n[1]}this.x=t||0,this.y=e||0}var r=n(1),a=n(6);i.add=function(t,e){return new i(t.x+e.x,t.y+e.y)},i.sub=function(t,e){return new i(t.x-e.x,t.y-e.y)},i.lerp=function(t,e,n){return new i(t.x+(e.x-t.x)*n,t.y+(e.y-t.y)*n)},i.angle=function(t,e){var n=t.dot(e)/(t.length()*e.length());return Math.acos(a.clamp(n,-1,1))},i.direction=function(t,e){return t.x*e.y-e.x*t.y},r.augment(i,{type:"vector2",set:function(t,e){return this.x=t,this.y=e,this},setComponent:function(t,e){switch(t){case 0:return this.x=e,this;case 1:return this.y=e,this;default:throw new Error("the index out of range:"+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("the index out of range:"+t)}},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t){return this.copy(i.add(this,t))},sub:function(t){return this.copy(i.sub(this,t))},subBy:function(t){return this.copy(i.sub(t,this))},multiplyScaler:function(t){return this.x*=t,this.y*=t,this},divideScaler:function(t){if(0!==t){var e=1/t;this.x*=e,this.y*=e}else this.x=0,this.y=0;return this},min:function(t){return this.x>t.x&&(this.x=t.x),this.y>t.y&&(this.y=t.y),this},max:function(t){return this.x<t.x&&(this.x=t.x),this.y<t.y&&(this.y=t.y),this},clamp:function(t,e){return this.x<t.x?this.x=t.x:this.x>e.x&&(this.x=e.x),this.y<t.y?this.y=t.y:this.y>e.y&&(this.y=e.y),this},clampScale:function(){var t,e;return function(n,r){return void 0===t&&(t=new i,e=new i),t.set(n,n),e.set(r,r),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScaler(this.length())},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},angleTo:function(t,e){var n=this.angle(t),r=i.direction(this,t)>=0;return e?r?2*Math.PI-n:n:r?n:2*Math.PI-n},vertical:function(t){return t?new i(this.y,(-this.x)):new i((-this.y),this.x)},angle:function(t){return i.angle(this,t)},setLength:function(t){var e=this.length();return 0!==e&&t!==e&&this.multiplyScaler(t/e),this},isZero:function(){return 0===this.x&&0===this.y},lerp:function(t,e){return this.copy(i.lerp(this,t,e))},equal:function(t){return a.equal(this.x,t.x)&&a.equal(this.y,t.y)},clone:function(){return new i(this.x,this.y)},rotate:function(t){var e=this.x*Math.cos(t)-this.y*Math.sin(t),n=this.x*Math.sin(t)+this.y*Math.cos(t);return this.x=e,this.y=n,this}}),t.exports=i},function(t,e,n){"use strict";function i(t,e,n){if(1===arguments.length)if(r.isArray(t)){var i=t;t=i[0],e=i[1],n=i[2]}else if("vector2"===t.type){var a=t;t=a.x,e=a.y,n=1}this.x=t||0,this.y=e||0,this.z=n||0}var r=n(1),a=n(6);i.add=function(t,e){return new i(t.x+e.x,t.y+e.y,t.z+e.z)},i.sub=function(t,e){return new i(t.x-e.x,t.y-e.y,t.z-e.z)},i.lerp=function(t,e,n){return new i(t.x+(e.x-t.x)*n,t.y+(e.y-t.y)*n,t.z+(e.z-t.z)*n)},i.cross=function(t,e){var n=t.x,r=t.y,a=t.z,s=e.x,o=e.y,u=e.z;return new i(r*u-a*o,a*s-n*u,n*o-r*s)},i.angle=function(t,e){var n=t.dot(e)/(t.length()*e.length());return Math.acos(a.clamp(n,-1,1))},r.augment(i,{type:"vector3",set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setComponent:function(t,e){switch(t){case 0:return this.x=e,this;case 1:return this.y=e,this;case 2:return this.z=e,this;default:throw new Error("index is out of range:"+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range:"+t)}},add:function(t){return this.copy(i.add(this,t))},sub:function(t){return this.copy(i.sub(this,t))},subBy:function(t){return this.copy(i.sub(t,this))},multiplyScaler:function(t){return this.x*=t,this.y*=t,this.z*=t,this},divideScaler:function(t){if(0!==t){var e=1/t;this.x*=e,this.y*=e,this.z*=e}else this.x=0,this.y=0,this.z=0;return this},min:function(t){return this.x>t.x&&(this.x=t.x),this.y>t.y&&(this.y=t.y),this.z>t.z&&(this.z=t.z),this},max:function(t){return this.x<t.x&&(this.x=t.x),this.y<t.y&&(this.y=t.y),this.z<t.z&&(this.z=t.z),this},clamp:function(t,e){return this.x<t.x?this.x=t.x:this.x>e.x&&(this.x=e.x),this.y<t.y?this.y=t.y:this.y>e.y&&(this.y=e.y),this.z<t.z?this.z=t.z:this.z>e.z&&(this.z=e.z),this},clampScale:function(){var t,e;return function(n,r){return void 0===t&&(t=new i,e=new i),t.set(n,n,n),e.set(r,r,r),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScaler(this.length())},setLength:function(t){var e=this.length();return 0!==e&&t!==e&&this.multiplyScaler(t/e),this},lerp:function(t,e){return this.copy(i.lerp(this,t,e))},cross:function(t){return this.copy(i.cross(this,t))},angle:function(t){return i.angle(this,t)},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},applyMatrix:function(t){var e=t.elements,n=e[0]*this.x+e[3]*this.y+e[6]*this.z,i=e[1]*this.x+e[4]*this.y+e[7]*this.z,r=e[2]*this.x+e[5]*this.y+e[8]*this.z;return this.x=n,this.y=i,this.z=r,this},copy:function(t){return this.x=t.x,this.y=t.y,this.z=void 0!==t.z?t.z:1,this},equal:function(t){return a.equal(this.x,t.x)&&a.equal(this.y,t.y)&&a.equal(this.z,t.z)},clone:function(){return new i(this.x,this.y,this.z)}}),t.exports=i},function(t,e,n){"use strict";var i=n(38),r=n(1),a=function(t){a.superclass.constructor.call(this,t)};r.extend(a,i),r.augment(a,{type:"identity",value:null,getText:function(){return this.value.toString()},scale:function(){return 1},invert:function(){return this.value}}),t.exports=a},function(t,e,n){"use strict";function i(t,e){return 1===t?1:Math.log(e)/Math.log(t)}var r=n(1),a=n(37),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,a),r.augment(s,{type:"log",base:2,tickCount:10,_minTick:null,calculateTicks:function(){var t,e=this,n=e.base;if(e.min<0)throw new Error("The minimum value must be greater than zero");var a=i(n,e.max);if(e.min>0)t=Math.floor(i(n,e.min));else{var s=e.values,o=e.max;r.each(s,function(t){t>0&&t<o&&(o=t)}),o===e.max&&(o=e.max/n),o>1&&(o=1),t=Math.floor(i(n,o)),e._minTick=t,e.positiveMin=o}for(var u=a-t,c=e.tickCount,l=Math.ceil(u/c),h=[],f=t;f<a+l;f+=l)h.push(Math.pow(n,f));return 0===e.min&&h.unshift(0),h},getScalePercent:function(t){var e=this.max,n=this.min;if(e===n)return 0;if(t<=0)return 0;var r=this.base,a=this.positiveMin;a&&(n=1*a/r);var s;return s=t<a?t/a/(i(r,e)-i(r,n)):(i(r,t)-i(r,n))/(i(r,e)-i(r,n))},scale:function(t){var e=this.getScalePercent(t),n=this.rangeMin(),i=this.rangeMax();return n+e*(i-n)},invert:function(t){var e,n,r=this.base,a=i(r,this.max),s=this.rangeMin(),o=this.rangeMax()-s,u=this.positiveMin;if(u){if(0===t)return 0;n=i(r,u/r);var c=1/(a-n)*o;if(t<c)return t/c*u}else n=i(r,this.min);e=(t-s)/o;var l=e*(a-n)+n;return Math.pow(r,l)}}),t.exports=s},function(t,e,n){"use strict";function i(t,e){var n=Math.E,i=Math.pow(n,Math.log(e)/t);return i}var r=n(1),a=n(37),s=function(t){s.superclass.constructor.call(this,t)};r.extend(s,a),r.augment(s,{type:"pow",exponent:2,tickCount:12,calculateTicks:function(){var t,e=this,n=e.exponent,r=Math.ceil(i(n,e.max));if(t=e.min>=0?Math.round(i(n,e.min)):0,t>r){var a=r;r=t,t=a}for(var s=r-t,o=e.tickCount,u=Math.ceil(s/o),c=[],l=t;l<r+u;l+=u)c.push(Math.pow(l,n));return c},getScalePercent:function(t){var e=this.max,n=this.min;if(e===n)return 0;var r=this.exponent,a=(i(r,t)-i(r,n))/(i(r,e)-i(r,n));return a},scale:function(t){var e=this.getScalePercent(t),n=this.rangeMin(),i=this.rangeMax();return n+e*(i-n)},invert:function(t){var e=(t-this.rangeMin())/(this.rangeMax()-this.rangeMin()),n=this.exponent,r=i(n,this.max),a=i(n,this.min),s=e*(r-a)+a;return Math.pow(s,n)}}),t.exports=s},function(t,e,n){"use strict";var i=n(92),r=n(1),a=n(46),s=n(30),o=n(93),u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{type:"timeCat",mask:"yyyy-mm-dd HH:MM:ss",tickCount:5,init:function(){var t=this,e=this.values;e.sort(function(e,n){return e=t._toTimeStamp(e),n=t._toTimeStamp(n),e-n}),r.each(e,function(n,i){e[i]=t._toTimeStamp(n)}),this.ticks=this.calculateTicks(!0)},calculateTicks:function(t){var e=this,n=e.tickCount,i=s.Category.caculate({maxCount:n,data:e.values}),o=i.ticks;return t&&r.each(o,function(t,n){o[n]=a.format(t,e.mask)}),o},translate:function(t){t=this._toTimeStamp(t);var e=this.values.indexOf(t);return e===-1&&(e=r.isNumber(t)&&t<this.values.length?t:NaN),e},scale:function(t){var e,n=this.rangeMin(),i=this.rangeMax(),r=this.translate(t);return e=1===this.values.length?r:r>-1?r/(this.values.length-1):0,n+e*(i-n)},getText:function(t){var e="",n=this.translate(t);n>-1&&(e=this.values[n]);var i=this.formatter;return e=parseInt(e,10),e=i?i(e):a.format(e,this.mask)},getTicks:function(){var t=this,e=this.calculateTicks(!1),n=[];return r.each(e,function(e){var i;i=r.isObject(e)?e:{text:t.getText(e),value:t.scale(e)},n.push(i)}),n},_toTimeStamp:function(t){return o.toTimeStamp(t)}}),t.exports=u},function(t,e,n){"use strict";var i=n(37),r=n(1),a=n(30),s=n(46),o=n(93),u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{type:"time",mask:"yyyy-mm-dd",init:function(){var t=this,e=t.values;if(e){var n=[],i=1/0,a=i,s=0;r.each(e,function(e){var r=t._toTimeStamp(e);i>r?(a=i,i=r):a>r&&(a=r),s<r&&(s=r),n.push(r)}),e.length>1&&(t.minTickInterval=a-i),(r.isNull(t.min)||t._toTimeStamp(t.min)>i)&&(t.min=i),(r.isNull(t.max)||t._toTimeStamp(t.max)<s)&&(t.max=s)}u.superclass.init.call(t)},calculateTicks:function(){var t=this,e=t.min,n=t.max,i=t.tickCount,r=t.tickInterval,s=a.Time.caculate({min:e,max:n,minCount:i,maxCount:i,interval:r,minInterval:t.minTickInterval});return s.ticks},getText:function(t){var e=this.formatter;return t=this.translate(t),t=e?e(t):s.format(t,this.mask)},scale:function(t){return r.isString(t)&&(t=this.translate(t)),u.superclass.scale.call(this,t)},translate:function(t){return this._toTimeStamp(t)},_toTimeStamp:function(t){return o.toTimeStamp(t)}}),t.exports=u},function(t,e,n){var i=n(228);t.exports=i},function(t,e,n){function i(t,e,n,i){var r,o,c,l,h=[],f=!!i;if(f){c=new u(1/0,1/0),l=new u((-(1/0)),(-(1/0)));for(var g=0,p=t.length;g<p;g++){var d=a(t[g]);c.min(d),l.max(d)}c.min(a(i[0])),l.max(a(i[1]))}for(var g=0,v=t.length;g<v;g++){var d=a(t[g]);if(n)r=a(t[g?g-1:v-1]),o=a(t[(g+1)%v]);else{if(0===g||g===v-1){h.push([d.x,d.y]);continue}r=a(t[g-1]),o=a(t[g+1])}var m=u.sub(o,r);s(m,e);var x=d.distanceTo(r),y=d.distanceTo(o),_=x+y;0!==_&&(x/=_,y/=_);var S=s(m.clone(),-x),b=s(m.clone(),y),w=u.add(d,S),M=u.add(d,b);f&&(w.max(c),w.min(l),M.max(c),M.min(l)),h.push([w.x,w.y]),h.push([M.x,M.y])}return n&&h.push(h.shift()),h}function r(t,e,n){for(var r=!!e,a=[],s=0,o=t.length;s<o;s+=2)a.push([t[s],t[s+1]]);for(var u,c,l,h=i(a,.4,r,n),f=a.length,g=[],s=0;s<f-1;s++)u=h[2*s],c=h[2*s+1],l=a[s+1],g.push(["C",u[0],u[1],c[0],c[1],l[0],l[1]]);return r&&(u=h[f],c=h[f+1],l=a[0],g.push(["C",u[0],u[1],c[0],c[1],l[0],l[1]])),g}function a(t){return new u(t[0],t[1])}function s(t,e){return t.x*=e,t.y*=e,t}var o=n(3),u=o.Vector2;t.exports={catmullRom2bezier:r}},function(t,e,n){var i=(n(1),n(15)),r=n(96);r.Weight=n(95),r.Sankey=n(230),i.link=function(t,e){return new r({dims:t,nodes:e})},i.link.weight=function(t,e){return new r.Weight({dims:t,nodes:e})},i.link.sankey=function(t,e){return new r.Sankey({dims:t,nodes:e})},t.exports=i},function(t,e,n){var i=n(1),r=n(2),a=n(95),s="..x",o="..y",u=function(t){a.superclass.constructor.call(this,t)};i.extend(u,a),i.augment(u,{type:"sankey",detachment:!0,_getValueField:function(){var t=this.getDims();return t[4]},initDims:function(t){t.unshift(o),t.unshift(s),this.valueField=this._getValueField()},edgeLayout:function(t,e,n){var r=this,a=r.nodes,u="in"===t?r.edgesSortByFromNodes:r.edgesSortByToNodes,c=t+"Edges",l=r.valueField;a.forEach(function(t){if(t[c].length>0){t[c].sort(u.bind(r));var a=t.x-.5*t.width;t[c].forEach(function(u){var c=u[l]*e,h=a+c;h-(t.x+.5*t.width)<r.PRECISION&&(i.isNull(u[s])&&(u[s]=[]),i.isNull(u[o])&&(u[o]=[]),u[s].push(a),u[s].push(h),u[o].push(t.y),u[o].push(t.y),n.push(u)),a=h})}})},exec:function(){var t=this.nodes,e=this.valueField,n=t[0].width/t[0][e],i=[];return this.edgeLayout("out",n,i),this.edgeLayout("in",n,i),[new r(i)]},edgesSortByToNodes:function(t,e){var n=this._getToField(),i=this._findObj(t[n]),r=this._findObj(e[n]);return i.x-r.x},edgesSortByFromNodes:function(t,e){var n=this._getFromField(),i=this._findObj(t[n]),r=this._findObj(e[n]);return i.x-r.x}}),t.exports=u},function(t,e,n){"use strict";var i=(n(28),{region:n(235),center:n(232),name:n(234),location:n(233)});t.exports=i},function(t,e,n){"use strict";function i(t){return Math.min.apply(null,t)}function r(t){return Math.max.apply(null,t)}var a=n(1),s=n(28),o=function(t,e){return new s({dims:t,mapData:e,addGeoInfo:function(t,e){var n=this,i=n.getDims(),r=i[i.length-1],s=t[r],o=n.mapData.features,u=e[0],c=e[1];return t[u]=null,t[c]=null,o&&a.each(o,function(e){var i=e.properties?e.properties.name:"";if(i===s){var r=e.properties.cp;if(!r){var a=e.geometry,o=a.coordinates,l=n._getBBox(o);r=[l[0]+(l[2]-l[0])/2,l[1]+(l[3]-l[1])/2]}return t[u]=r[0],t[c]=r[1],!1}}),t},_getBBox:function(t){var e=this,n=[],s=[],o=e._getPoints(t);return a.each(o,function(t){n.push(t[0]),s.push(t[1])}),[i(n),i(s),r(n),r(s)]},_getPoints:function(t){var e=this,n=[];return a.isArray(t[0])?a.each(t,function(t){var i=e._getPoints(t);n=n.concat(i)}):n.push(t),n}})};t.exports=o},function(t,e,n){"use strict";var i=n(28),r=function(t){return new i({dims:t,initDims:function(t){var e=t.slice(0,2),n=t.slice(2);t=n.concat(e),t.unshift("..lant"),t.unshift("..long"),this.dims=t},addGeoInfo:function(t,e){var n=this,i=e[0],r=e[1],a=n.getDims(),s=a.length;return t[i]=t[a[s-2]],t[r]=t[a[s-1]],t}})};t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(28),a=function(t,e){return new r({dims:t,mapData:e,initDims:function(t){t.push("..name")},addGeoInfo:function(t,e){var n=this,r=n.getDims(),a=r[0],s=r[1],o=[t[a],t[s]],u=!1,c=n.mapData.features;return t[e]="",c&&i.each(c,function(r){var a=r.geometry.coordinates;if("Polygon"===r.geometry.type?i.each(a,function(t){if(u=n._isInside(o,t))return!1}):"MultiPolygon"===r.geometry.type&&i.each(a,function(t){return!u&&void i.each(t,function(t){if(u=n._isInside(o,t))return!1})}),u){var s=r.properties?r.properties.name:"";return t[e]=n.names?n.names.indexOf(s):s,!1}}),t},_isInside:function(t,e){for(var n=t[0],i=t[1],r=!1,a=0,s=e.length-1;a<e.length;s=a++){var o=e[a][0],u=e[a][1],c=e[s][0],l=e[s][1],h=u>i!=l>i&&n<(c-o)*(i-u)/(l-u)+o;h&&(r=!r)}return r}})};t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(28),a=function(t,e){return new r({dims:t,mapData:e,addGeoInfo:function(t,e){var n=this,r=n.getDims(),a=r[r.length-1],s=t[a],o=n.mapData,u=o.features,c=e[0],l=e[1];return t[c]=[],t[l]=[],u&&i.each(u,function(e){var i=e.properties?e.properties.name:"";if(i===s){var r=e.geometry,a=r.coordinates;return"Polygon"===r.type?a.forEach(function(e){n._getCoordinates(e,t[c],t[l])}):"MultiPolygon"===r.type?a.forEach(function(e){e.forEach(function(e){n._getCoordinates(e,t[c],t[l])})}):"MultiLineString"===r.type&&a.forEach(function(e){n._getCoordinates(e,t[c],t[l],"line")}),!1}}),t},_getCoordinates:function(t,e,n,r){return i.each(t,function(t){e.push(t[0]),n.push(t[1])}),r&&"line"===r&&(e.push(t[0][0]),n.push(t[0][1])),!1}})};t.exports=a},function(t,e,n){"use strict";var i=n(15),r={dot:n(237),rect:n(238)};i.tree=r,t.exports=r},function(t,e,n){"use strict";var i=n(97),r=function(t){return new i({dims:t})};t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(97),a="..x",s="..y",o=function(t){return new r({dims:t,getStatObject:function(t,e){var n=i.mix({},t);return n[a]=[e.start.x,e.start.x,e.end.x,e.end.x],n[s]=[e.start.y,e.end.y,e.end.y,e.start.y],n}})};t.exports=o},function(t,e,n){"use strict";function i(t,e,n){return e=e||1,new r({dims:t,ratio:e,mode:n})}var r=n(240),a=function(t,e){return i(t,e,"squarify")};a.squarify=function(t,e){return i(t,e,"squarify")},a.sliceDice=function(t,e){return i(t,e,"slice-dice")},t.exports=a},function(t,e,n){"use strict";function i(t){return 1-t}var r=n(1),a=n(15),s=n(278),o=n(2),u="..x",c="..y",l="_value",h=function(t){h.superclass.constructor.call(this,t)};r.extend(h,a),r.augment(h,{type:"treemap",mode:"squarify",ratio:1,getValueField:function(){var t=this.getDims();return t[3]||l},getChildrenField:function(){var t=this.getDims();return t[2]},initDims:function(t){t.unshift(c),t.unshift(u)},_copyObject:function(t){var e=r.mix({},t);return e},_extractData:function(t,e){for(var n=this,a=t.length-1;a>=0;a--){var s=t[a],o=n._copyObject(s);o[u]=[],o[c]=[],o[u].push(s.x),o[c].push(i(s.y+s.dy)),o[u].push(s.x),o[c].push(i(s.y)),o[u].push(s.x+s.dx),o[c].push(i(s.y)),o[u].push(s.x+s.dx),o[c].push(i(s.y+s.dy)),e.push(o);var l=n.getChildrenField();r.isArray(s[l])&&n._extractData(s[l],e)}},exec:function(t){var e=this,n=[],i=o.merge.apply(null,t);return n.push(e.execFrame(i)),n},execFrame:function(t){var e=this,n=t.toJSON(),i=(e.getDims(),new s.Squarify({nodes:n,mode:e.mode,childrenField:e.getChildrenField(),valueField:e.getValueField(),ratio:e.ratio})),r=i.getNodes(),n=[];e._extractData(r,n);var t=new o(n);return t}}),t.exports=h},function(t,e,n){"use strict";var i=n(39),r=function(t,e){return new i({dims:t,binWidth:e})};t.exports=r},function(t,e,n){"use strict";function i(t,e,n){var i=[];return s.each(t,function(t){i.push(t*e*n/2)}),i}function r(t,e){var n=[];return s.each(t,function(t){n.push(t*e/2)}),n}var a=n(39),s=n(1),o=function(t,e,n){return new a({ratio:n||.5,dims:t,binWidth:e||.03,_getDimVaues:function(t,e,n){var i=this,r=i.getDimRange(e),a=r.max-r.min,o=[];return s.each(n,function(e){o.push(t+a*e)}),o},toBin:function(t){var e=this,n=e.getBinDims();if(n<2)throw"the bin.rect method only support 2 dimenssion!";var a=n[0],s=n[1],o=e.binWidth,u=e.ratio,c=e._center([t[a],t[s]]),l=i([-.5,-1.5,-.5,.5,1.5,.5],o,u),h=r([-1,0,1,1,0,-1],o);t[a]=e._getDimVaues(c[0],a,l),t[s]=e._getDimVaues(c[1],s,h)},_center:function(t){var e,n,i,r=this,a=r.binWidth,s=r.getBinDims(),o=s[0],u=r.getDimRange(o),c=a*(u.max-u.min)/2,l=s[1],h=r.getDimRange(l),f=a*(h.max-h.min)/2,g=r.ratio;return n=[t[0]/(c*g),t[1]/f],i=r._centerForBasis(n),e=[i[0]*c,i[1]*f]},_chkOdd:function(t){var e=parseInt(t);return e?!!(e%2):"0"},_aroundX:function(t){var e,n,i,r=this;return t=t<1?1:t,r._chkOdd(t)?n=i=parseInt(t)+.5:t%2===0?n=i=parseInt(t)-.5:(n=parseInt(t)-.5,i=n+2),e=[n,i]},_aroundY:function(t){var e,n,i;return t=t<1?1:t,n=parseInt(t),i=n+1,e=[n,i]},_shortPoint:function(t,e,n){var i,r,a=this,s=(t[1]-.5)%4;1===s?a._chkOdd(e[1])?(i=[t[0],e[0]],r=[t[1],e[1]]):(i=[t[1],e[0]],r=[t[0],e[1]]):a._chkOdd(e[0])?(i=[t[0],e[0]],r=[t[1],e[1]]):(i=[t[1],e[0]],r=[t[0],e[1]]);var o=Math.abs(n[0]-i[0])+Math.abs(n[1]-i[1]),u=Math.abs(n[0]-r[0])+Math.abs(n[1]-r[1]);return o===u?i[0]<r[0]?i:r:o<u?i:r},_centerForBasis:function(t){var e,n,i,r,a=this,s=a._aroundX(t[0]),o=a.ratio;return s[0]===s[1]?(i=s[0],i>2&&a._chkOdd(i/2)?(t[1]=t[1]<1?1:t[1],r=a._chkOdd(parseInt(t[1]))?parseInt(t[1])+1:parseInt(t[1])):(t[1]=t[1]<1?1:t[1],r=a._chkOdd(parseInt(t[1]))?parseInt(t[1]):parseInt(t[1])-1),e=[i,r]):(t[1]=t[1]<1?1:t[1],n=a._aroundY(t[1]),e=a._shortPoint(s,n,t)),e[0]=e[0]*o,e}})};t.exports=o},function(t,e,n){var i={dot:n(241),rect:n(246),hex:n(242),quantile:n(244)};t.exports=i},function(t,e,n){var i=n(98);i.letter=n(245),t.exports=i},function(t,e,n){"use strict";var i=n(98),r=function(t,e){return new i({dims:t,binWidth:e,fractions:4})};t.exports=r},function(t,e,n){"use strict";var i=n(39),r=function(t,e){return new i({dims:t,binWidth:e,toBin:function(t){var e=this,n=e.getBinDims();if(n.length<1)throw"the bin.rect method support for minimum one dimension!";if(1===n.length){var i=n[0];t[i]=e._getValueRange(i,t[i])}else{var r=n[0],a=n[1],s=e._getValueRange(r,t[r]),o=e._getValueRange(a,t[a]);t[r]=[s[0],s[0],s[1],s[1]],t[a]=[o[0],o[1],o[1],o[0]]}},_getValueRange:function(t,e){var n=this,i=n.binWidth,r=n.getDimRange(t),a=r.max-r.min,s=n.getCenterValue(e,r.max,r.min);return[s-a*i*1/2,s+a*i*1/2]}})};t.exports=r},function(t,e,n){"use strict";function i(t,e,n){return e=e||.01,new r({dims:t,bandWidth:e,kernelType:n})}var r=n(248),a=n(249),s={};s.kernel={},s.kernel.uniform=function(t,e){return i(t,e,"uniform")},s.kernel.triangular=function(t,e){return i(t,e,"triangular")},s.kernel.epanechnikov=function(t,e){return i(t,e,"epanechnikov")},s.kernel.quartic=function(t,e){return i(t,e,"quartic")},s.kernel.triweight=function(t,e){return i(t,e,"triweight")},s.kernel.tricube=function(t,e){return i(t,e,"tricube")},s.kernel.gaussian=function(t,e){return i(t,e,"gaussian")},s.kernel.cosine=function(t,e){return i(t,e,"cosine")},s.normal=function(t,e){return e=e||.01,new a({dims:t,bandWidth:e})},t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(89),s=n(99),o="..density",u=function(t){u.superclass.constructor.call(this,t)};i.extend(u,s),i.augment(u,{kernelType:"",execFrame:function(t){var e=this,n=e.kernelType;if(!n)return t;var i=a[n],s=e.getDims(),o=[];return 2===s.length?o=e._getOneDimDensity(t,i,s):3===s.length&&(o=e._getTwoDimDensity(t,i,s)),new r(o)},_getOneDimDensity:function(t,e,n){for(var r=n[n.length-2],a=t.colArray(r),s=this.getWindowWidth(t,r),u=this.getCoordinate(t,r,s),c=u.length,l=a.length,h=t.rowObject(0),f=[],g=0;g<c;g++){for(var p=0,d=u[g],v=0;v<l;v++)p+=e((d-a[v])/s);var m=1/(l*s)*p,x=i.mix({},h);x[r]=d,x[o]=m,f[g]=x}return f},_getTwoDimDensity:function(t,e,n){for(var r=n[n.length-3],a=n[n.length-2],s=this.getWindowWidth(t,r),u=this.getWindowWidth(t,a),c=this.getCoordinate(t,r,s),l=c.length,h=this.getCoordinate(t,a,u),f=h.length,g=t.rowCount(),p=t.rowObject(0),d=[],v=0;v<l;v++)for(var m=0;m<f;m++){for(var x=0,y=c[v],_=h[m],S=0;S<g;S++)x+=e((y-t.data[S][r])/s)*e((_-t.data[S][a])/u);var b=1/(g*s*u)*x,w=i.mix({},p);w[r]=y,w[a]=_,w[o]=b,d.push(w)}return d}}),t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(99),s="..density",o=function(t){o.superclass.constructor.call(this,t)};i.extend(o,a),i.augment(o,{execFrame:function(t){for(var e=this,n=t.rowObject(0),a=e.getDims(),o=a[a.length-2],u=this.getWindowWidth(t,o),c=this.getCoordinate(t,o,u),l=c.length,h=r.mean(t,o),f=r.standard_deviation(t,o),g=[],p=0;p<l;p++){var d=c[p],v=e.getNormal(d,h,f),m=i.mix({},n);m[o]=d,m[s]=v,g.push(m)}return new r(g)},getNormal:function(t,e,n){var i=1/(Math.sqrt(2*Math.PI)*n)*Math.exp(-(t-e)*(t-e)/(2*n*n));return i}}),t.exports=o},function(t,e,n){var i={spread:{range:n(251),sd:n(252),se:n(253)},confi:{}};t.exports=i},function(t,e,n){"use strict";var i=n(50),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.range(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(50),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0),i=r.mean(t,e),a=r.sd(t,e);return n[e]=[i-a,i+a],new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(50),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0),i=r.mean(t,e),a=r.se(t,e);return n[e]=[i-a,i+a],new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(12),a=n(23),s=n(21),o=function(t){return new r(i.mix({},s,{dims:t,regressionType:"cubic",getRegression:function(t){return a("polynomial",t,3)}}))};t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(12),a=n(23),s=n(21),o=n(2),u=function(t){return new r(i.mix({},s,{dims:t,regressionType:"exp",preExecute:function(t){var e=this.getYDim();i.each(t,function(t){var n=o.min(t,e);if(n<0)throw"the field "+e+" has value less than 0,you can't use this regression!"})},getRegression:function(t){return a("exponential",t)}}))};t.exports=u},function(t,e,n){"use strict";function i(t,e){for(var n=0,i=0;i<t.length;i++){var r=t[i];n+=r*Math.pow(e,i)}return n}var r=n(1),a=["linear","cubic","quadratic"],s={execFnction:function(t,e,n){var i;return i=r.indexOf(a,t)>=0?s.poly(e,n):s[t]?s[t](e[0],e[1],n):n},linear:function(t,e,n){var r=[e,t];return i(r,n)},poly:function(t,e){return i(t,e)},log:function(t,e,n){return t+e*Math.log(n)},pow:function(t,e,n){return t*Math.pow(n,e)},exp:function(t,e,n){return t*Math.pow(Math.E,e*n)}};t.exports=s},function(t,e,n){"use strict";function i(t,e,n){return e=e||.01,new a({dims:t,bandWidth:e,kernelType:n})}var r=n(51);r.mean=n(261),r.median=n(262),r.linear=n(258),r.quadratic=n(264),r.cubic=n(254),r.log=n(260),r.pow=n(263),r.exp=n(255);var a=n(259);r.loess={},r.loess.uniform=function(t,e){return i(t,e,"uniform")},r.loess.triangular=function(t,e){return i(t,e,"triangular")},r.loess.epanechnikov=function(t,e){return i(t,e,"epanechnikov")},r.loess.quartic=function(t,e){return i(t,e,"quartic")},r.loess.triweight=function(t,e){return i(t,e,"triweight")},r.loess.tricube=function(t,e){
return i(t,e,"tricube")},r.loess.gaussian=function(t,e){return i(t,e,"gaussian")},r.loess.cosine=function(t,e){return i(t,e,"cosine")},t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(12),a=n(23),s=n(21),o=function(t){return new r(i.mix({},s,{dims:t,regressionType:"linear",getRegression:function(t){return a("polynomial",t,1)}}))};t.exports=o},function(t,e,n){"use strict";var i=n(51),r=n(1),a=n(89),s=n(2),o=n(190),u=function(t){u.superclass.constructor.call(this,t)};r.extend(u,i),r.augment(u,{kernelType:"",k:10,execFrame:function(t){var e=this,n=e.getDims(),i=[];if(2===n.length){var a=e.getXDim(),o=e.getYDim(),u=e.getData(t),c=e.getInterArray(t,a),l=e.execSmooth(u,c),h=t.rowObject(0);r.each(l,function(t){var e=r.mix({},h);e[a]=t[0],e[o]=t[1],i.push(e)})}else{var a=e.getXDim(),o=e.getYDim(),f=e.getZDim(),u=e.getData(t),c=[];c[0]=e.getInterArray(t,a),c[1]=e.getInterArray(t,o);var l=e.execSmoothThreeDim(u,c),h=t.rowObject(0);r.each(l,function(t){var e=r.mix({},h);e[a]=t[0],e[o]=t[1],e[f]=t[2],i.push(e)})}return new s(i)},execSmooth:function(t,e){for(var n=this,i=e.length,r=t.length,s=n.kernelType,o=a[s],u=[],c=[],l=e[1]-e[0],h=0;h<i;h++){for(var f,g,p,d,v=0,m=0,x=0,y=0,_=0,S=e[h],b=n.getWindowWidth([S],t,[l])[0],w=0;w<r;w++)g=t[w][0],p=t[w][1],f=o((S-g)/b),0!==f&&(v+=f,m+=f*g,x+=f*g*g,y+=f*p,_+=f*g*p);v*x-m*m!==0&&(c[1]=(m*y-v*_)/(m*m-v*x),c[0]=y/v-m/v*c[1],d=c[0]+c[1]*S,u.push([S,d]))}return u},execSmoothThreeDim:function(t,e){for(var n=this,i=e[0].length,r=e[1].length,s=t.length,u=n.kernelType,c=a[u],l=[],h=[],f=e[0][1]-e[0][0],g=e[1][1]-e[1][0],p=0;p<i;p++)for(var d=0;d<r;d++){for(var v,m,x,y,_,S=0,b=0,w=0,M=0,A=0,T=0,C=0,k=0,P=0,I=e[0][p],D=e[1][d],O=n.getWindowWidth([I,D],t,[f,g]),F=O[0],L=O[1],R=0;R<s;R++)m=t[R][0],x=t[R][1],y=t[R][2],v=c((I-m)/F)*c((D-x)/L),0!==v&&(S+=v,b+=v*m,w+=v*x,M+=v*m*x,A+=v*m*m,T+=v*x*x,C+=v*y,k+=v*m*y,P+=v*x*y);var N=[[S,b,w],[b,A,M],[w,M,T]],B=[C,k,P];h=o(N,B),h&&(_=h[0]+h[1]*I+h[2]*D,l.push([I,D,_]))}return l},getWindowWidth:function(t,e,n){var i=this,r=i.k,a=e.length,s=[],o=e[0].length-1,u=0;a<=r&&(r=a),e.sort(function(e,i){for(var r=0,a=0,s=0;s<o;s++)r+=(e[s]-t[s])*(e[s]-t[s])/(n[s]*n[s]),a+=(i[s]-t[s])*(i[s]-t[s])/(n[s]*n[s]);return r-a});for(var c=0;c<o;c++){for(;e[r-1][c]===e[0][c];)r++;var l=1.1*Math.abs(e[r-1][c]-t[c])/n[c];u+=l*l}u=Math.sqrt(u);for(var c=0;c<o;c++)s[c]=u*n[c];return s}}),t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(12),a=n(23),s=n(21),o=function(t){return new r(i.mix({},s,{dims:t,regressionType:"log",getRegression:function(t){return a("logarithmic",t)}}))};t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(12),s=function(t){return new a({dims:t,getRegressionString:function(){return"y = "+this.curMean},execSmooth:function(t,e,n){var a=this,s=a.getYDim(),o=r.mean(n,s);a.curMean=o;var u=[];return i.each(e,function(t){u.push([t,o])}),u}})};t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(2),a=n(12),s=function(t){return new a({dims:t,getRegressionString:function(){return"y = "+this.curMedian},execSmooth:function(t,e,n){var a=this,s=a.getYDim(),o=r.median(n,s);a.curMedian=o;var u=[];return i.each(e,function(t){u.push([t,o])}),u}})};t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(12),a=n(23),s=n(21),o=n(2),u=function(t){return new r(i.mix({},s,{dims:t,regressionType:"pow",preExecute:function(t){var e=this.getYDim();i.each(t,function(t){var n=o.min(t,e);if(n<0)throw"the field "+e+" has value less than 0,you can't use this regression!"})},getRegression:function(t){return a("power",t)}}))};t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(12),a=n(23),s=n(21),o=function(t){return new r(i.mix({},s,{regressionType:"quadratic",dims:t,getRegression:function(t){return a("polynomial",t,2)}}))};t.exports=o},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,initDims:function(t){t.push("..count")},transform:function(t,e){var n=t.rowObject(0);return n[e]=t.rowCount(),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=n(1),s=function(t){return new i({dims:t,getStatDims:function(){var t=this.stat;if(t)return t.getStatDims();var e=this.getDims(),n=e.length,i=[e[n-1]];return i},execFrame:function(t){var e=this.getStatDims(),n=e[e.length-1],i=this.getDims()[0];i&&i!==n&&(t=r.sort(t,i));var s=this.stat,o=[];if(s&&"density"===s.type){var u=s.getWindowWidth(t,i),c=t.colArray(n),l=0;a.each(c,function(t){l+=t*u,o.push(l)})}else o=r.cumulative(t,n);return t.colReplace(n,o),t}})};t.exports=s},function(t,e,n){var i={count:n(265),max:n(268),min:n(271),mean:n(269),median:n(270),proportion:n(274),range:n(275),percent:n(273),sd:n(276),mode:n(272),sum:n(277),cumulative:n(266)};t.exports=i},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.max(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.mean(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.median(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.min(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.mode(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(9),a=n(2),s=n(100),o="..percent",u=function(t,e){return new r(i.mix({dims:t,innerCompare:e,initDims:function(t){var e=t[t.length-1];t.splice(t.length-1,0,o),this.percetDim=e},getStatDims:function(){return[o]},transform:function(t,e,n){e=this.percetDim;var i=a.sum(t,e),r=a.sum(n,e),s=t.rowObject(0);return s["..percent"]=i/r,s[e]=i,new a([s])}},s))};t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(9),a=n(2),s=n(100),o=function(t,e){return new r(i.mix({dims:t,innerCompare:e,initDims:function(t){t.push("..proportion")},transform:function(t,e,n){var i=t.rowCount()/n.rowCount(),r=t.rowObject(0);return r[e]=i,new a([r])}},s))};t.exports=o},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.max(t,e)-r.min(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.standard_deviation(t,e),new r([n])}})};t.exports=a},function(t,e,n){"use strict";var i=n(9),r=n(2),a=function(t){return new i({dims:t,transform:function(t,e){var n=t.rowObject(0);return n[e]=r.sum(t,e),new r([n])}})};t.exports=a},function(t,e,n){var i=n(101);i.Squarify=n(279),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(101),a=function(t){a.superclass.constructor.call(this,t)};i.extend(a,r),i.augment(a,{mode:"squarify",ratio:.5*(1+Math.sqrt(5)),processNodes:function(t,e,n){var r=this;if(i.isArray(t)&&t.length){var a,s,o,u=[],c=t[0],l=r.mode,h=r.valueField,f=r.childrenField,g=t.slice(),p=1/0,d="slice"===l?e.dx:"dice"===l?e.dy:"slice-dice"===l?c.depth%2?e.dy:e.dx:Math.min(e.dx,e.dy);for(r.scale(g,e.dx*e.dy/n),u.area=0;(o=g.length)>0;)u.push(a=g[o-1]),u.area+=a.area,"squarify"!==l||(s=r.worst(u,d))<=p?(g.pop(),p=s):(u.area-=u.pop().area,r.position(u,d,e,!1),d=Math.min(e.dx,e.dy),u.length=u.area=0,p=1/0);u.length&&(r.position(u,d,e,!0),u.length=u.area=0),t.forEach(function(t){r.processNodes(t[f],r.pad(t),t[h])})}},worst:function(t,e){for(var n,i=this,r=t.area,a=0,s=1/0,o=-1,u=t.length;++o<u;)(n=t[o].area)&&(n<s&&(s=n),n>a&&(a=n));return r*=r,e*=e,r?Math.max(e*a*i.ratio/r,r/(e*s*i.ratio)):1/0}}),t.exports=a},function(t,e,n){var i=n(281);i.Tween=n(104),i.Ease=n(102),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(10),a=n(282),s=function(t){s.superclass.constructor.call(this,t),this._init()};s.ATTRS={time:0,createTime:null,playTime:null,pauseTimeSpace:0,available:!1,canvases:[],tweens:[],endTime:0,autoPlay:!1,status:"silent",autoDraw:!0},i.extend(s,r),i.augment(s,{_init:function(){var t=this.get("autoPlay");this.set("createTime",+new Date),t&&this.play()},_trySetEndTime:function(t){var e=this;i.isObject(t)?e._setEndTime(t):i.isArray(t)&&i.each(t,function(t,n){e._setEndTime(t)})},_trySetCanvases:function(t){var e=this;i.isObject(t)?e._setCanvases(t):i.isArray(t)&&i.each(t,function(t,n){e._setCanvases(t)})},_setEndTime:function(t){var e=this.get("endTime"),n=t.endTime;n>e&&this.set("endTime",n)},_setCanvases:function(t){var e=t.canvas,n=this.get("canvases");n.indexOf(e)===-1&&n.push(e)},_resetTweens:function(){var t=this.get("tweens");t.sort(function(t,e){return e.get("startTime")-t.get("startTime")}),i.each(t,function(t){t.reset()})},_getTime:function(){var t=this.get("playTime"),e=this.get("pauseTimeSpace");return+new Date-t+e},_refresh:function(t){for(var e,n,r=this.get("tweens"),a=(this.get("canvases"),this.get("autoDraw")),s=[],o=[],u=0;u<r.length;u++)n=r[u],e=n.canvas,n.needsDestroy?n.destroy():n.destroyed||n.needsDestroy||n.tryStep(t),n.destroyed||s.push(n),i.inArray(o,e)||n.destroyed||o.push(e);a&&this.draw(),this.set("canvases",o),this.set("tweens",s)},_update:function(){if(this.get("available")){var t,e=this,n=e.get("tweens");n.length>0&&(t=e._getTime(),e._refresh(t)),e.fire("update"),i.requestAnimationFrame(function(){e._update()})}},animate:function(t,e){var n=new a({target:t,timeline:this,startTime:e?e:0});return n},add:function(t){var e,n=this.get("tweens");return i.isArray(t)?e=n.concat(t):i.isObject(t)&&"tween"===t.type?(n.push(t),e=n):console.error("Timeline not Support this type"),this.set("tweens",e),this._trySetCanvases(t),this._trySetEndTime(t),this},getNow:function(){var t=this.get("playTime");return t?+new Date-t:0},getTime:function(){var t=this.get("playTime");return t?+new Date-t:0},play:function(){var t=this.get("status");return"silent"===t&&(this.set("playTime",+new Date),this.set("available",!0),this.set("status","playing"),this._update()),this},stop:function(){this.set("status","silent"),this.set("available",!1),this.set("pauseTimeSpace",0),this._resetTweens(),this._refresh(0),this.draw()},pause:function(){var t=this.get("available");return t&&this.set("pauseTimeSpace",+new Date-this.get("playTime")),this.set("available",!1),this.set("status","silent"),this},reset:function(){this.set("status","silent"),this.set("available",!1),this.set("pauseTimeSpace",0),this.set("playTime",0),this.set("endTime",0),this.set("tweens",[]),this.set("canvases",[])},draw:function(){for(var t,e=this.get("canvases"),n=0;n<e.length;n++)t=e[n],!t.get("destroyed")&&t.draw()}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(103),a=(n(10),n(104)),s=function(t){i.mix(this,t)};i.augment(s,{target:null,timeline:null,startTime:null,append:function(t,e,n,s){var o,u=i.guid("tween_"),c=this.target,l=(this.tweens,this.timeline),h=this.startTime,f=r.getKeyFrameByProps(c,e),g=f[0],p=f[1],d=r.getInterpolations(g,p);return t=t?t:h,e&&e.delay&&(t+=e.delay),o=new a({id:u,canvas:c.get("canvas"),startTime:t,target:c,easing:n,callBack:s,startKeyFrame:g,endKeyFrame:p,interpolations:d,duration:e.duration?e.duration:1e3,repeat:!!e.repeat&&e.repeat,destroyTarget:!!e.destroy&&e.destroy}),l&&l.add(o),this}}),t.exports=s},function(t,e,n){var i=n(284);t.exports=i},function(t,e){"use strict";function n(t,e,i){i=i||0;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];null!==o&&s.isObject(o)?(s.isObject(t[r])||(t[r]={}),i<a?n(t[r],e[r],i+1):t[r]=e[r]):s.isArray(o)?(t[r]=[],t[r]=t[r].concat(o)):void 0!==o&&(t[r]=e[r])}}var i=Object.prototype,r=i.toString,a=5,s={substitute:function(t,e){return t&&e?t.replace(/\\?\{([^{}]+)\}/g,function(t,n){return"\\"===t.charAt(0)?t.slice(1):void 0===e[n]?"":e[n]}):t},ucfirst:function(t){return t+="",t.charAt(0).toUpperCase()+t.substring(1)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t},isArray:"isArray"in Array?Array.isArray:function(t){return"[object Array]"===r.call(t)},isDate:function(t){return"[object Date]"===r.call(t)},isNull:function(t){return void 0===t||null===t},notNull:function(t){return!s.isNull(t)},isBlank:function(t){if(s.isArray(t))return 0===t.length;if(s.isObject(t)){var e=0;return s.each(t,function(t,n){e++}),0===e}return!1},isObject:"[object Object]"===r.call(null)?function(t){return null!==t&&void 0!==t&&"[object Object]"===r.call(t)&&void 0===t.ownerDocument}:function(t){return"[object Object]"===r.call(t)},extend:function(t,e,n,i){s.isFunction(e)||(n=e,e=t,t=function(){});var r=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}})}:function(t,e){function n(){}n.prototype=t;var i=new n;return i.constructor=e,i},a=r(e.prototype,t);return t.prototype=s.mix(a,t.prototype),t.superclass=r(e.prototype,e),s.mix(a,n),s.mix(t,i),t},augment:function(t){for(var e=s.toArray(arguments),n=1;n<e.length;n++){var i=e[n];s.isFunction(i)&&(i=i.prototype),s.mix(t.prototype,i)}},toArray:function(t){return t&&t.length?Array.prototype.slice.call(t):[]},mix:function(){var t=s.toArray(arguments),e=t[0];if(e===!0){e=t[1];for(var i=2;i<t.length;i++){var r=t[i];n(e,r)}}else for(var i=1;i<t.length;i++){var r=t[i];for(var a in r)r.hasOwnProperty(a)&&"constructor"!==a&&(e[a]=r[a])}return e},each:function(t,e){if(t)if(s.isObject(t)){for(var n in t)if(t.hasOwnProperty(n)){var i=e(t[n],n);if(i===!1)break}}else if(t.length)for(var r=0;r<t.length;r++){var i=e(t[r],r);if(i===!1)break}},requestAnimationFrame:function(t){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)};return e(t)},cancelAnimationFrame:function(t){var e=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||function(t){return clearTimeout(t)};return e(t)}};t.exports=s},function(t,e,n){"use strict";function i(t,e){var n=e.toString(),i=n.indexOf(".");if(i===-1)return Math.round(t);var r=n.substr(i+1).length;return r>20&&(r=20),parseFloat(t.toFixed(r))}function r(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n])}var a=n(283);a.mix(a,{mixin:function(t,e){if(t&&e){t._mixins=e,t.ATTRS=t.ATTRS||{};var n={};a.each(e,function(e){a.augment(t,e);var i=e.ATTRS;i&&a.mix(n,i)}),t.ATTRS=a.mix(n,t.ATTRS)}},map:function(t,e){var n=[];return a.each(t,function(t,i){n.push(e(t,i))}),n},filter:function(t,e){var n=[];return a.each(t,function(t,i){e(t,i)&&n.push(t)}),n},guid:function(){var t={};return function(e){return e=e||"g",t[e]?t[e]+=1:t[e]=1,e+t[e]}}(),inArray:function(t,e){return a.indexOf(t,e)!==-1},indexOf:function(t,e){var n=Array.prototype.indexOf;if(n)return n.call(t,e);for(var i=-1,r=0;r<t.length;r++)if(t[r]===e){i=r;break}return i},remove:function(t,e){var n=a.indexOf(t,e);n!==-1&&t.splice(n,1)},empty:function(t){if(!(t instanceof Array))for(var e=t.length-1;e>=0;e--)delete t[e];t.length=0},equalsArray:function(t,e){if(t===e)return!0;if(!t||!e)return!1;if(t.length!==e.length)return!1;for(var n=!0,i=0;i<t.length;i++)if(t[i]!==e[i]){n=!1;break}return n},wrapBehavior:function(t,e){var n=function(n){t[e](n)};return t["_wrap_"+e]=n,n},getWrapBehavior:function(t,e){return t["_wrap_"+e]},fixedBase:function(t,e){return i(t,e)},length:function(t){if(a.isArray(t))return t.length;if(a.isObject(t)){var e=0;return a.each(t,function(){e++}),e}return 0},clone:function(t){if("object"!=typeof t||null===t)return t;var e;if(a.isArray(t)){e=[];for(var n=0,i=t.length;n<i;n++)"object"==typeof t[n]&&null!=t[n]?e[n]=a.clone(t[n]):e[n]=t[n]}else{e={};for(var r in t)"object"==typeof t[r]&&null!=t[r]?e[r]=a.clone(t[r]):e[r]=t[r]}return e},simpleMix:function(t,e,n,i){return e&&r(t,e),n&&r(t,n),i&&r(t,i),t}}),t.exports=a},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(16),s=n(106),o=n(105);r.extend(i,a),r.mixin(i,[s,o]),i.ATTRS={type:"area"},r.augment(i,{sortFrames:function(t){return this.sort(t)},drawFrame:function(t,e){var n,i,a,s,o=this,u=t.toJSON(),c=this.splitData(u),l=this.get("container"),h=this.get("shapeObj"),f=u[0];f.index=e,n=this.getDrawCfg(f),n.origin=u;var g=o.getShapeData(t);o.get("shapeDatas").push(g),r.each(c,function(t,e){n.splitedIndex=e,a=[];for(var r=0;r<t.length;r++)s=t[r],a.push(s.points);0!==a.length&&(n.points=a,i=o.getDrawShape(n.shape),h.drawShape(i,n,l))})},_getJoinIdAttr:function(){var t=this.get("attrs"),e=[];return r.each(t,function(t){"position"!==t.type&&e.push(t)}),e}}),t.exports=i},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(16);i.ATTRS={type:"interval"},r.extend(i,a),r.mixin(i),r.augment(i,{getDrawCfg:function(t){var e=this,n=i.superclass.getDrawCfg.call(e,t),r=e.getCoord();return r.isPolar&&(n.z=!0,n.center=r.get("center")),n}}),t.exports=i},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(107);r.extend(i,a),i.ATTRS={type:"line"},r.augment(i,{sortFrames:function(t){return this.sort(t)}}),t.exports=i},function(t,e,n){"use strict";var i=n(1),r=n(86);t.exports={sort:function(t){var e=this.getXDim(),n=[];return i.each(t,function(t){n.push(r.sort(t,e))}),n}}},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(16);r.extend(i,a),i.ATTRS={type:"point"},t.exports=i},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(16);r.extend(i,a),i.ATTRS={type:"polygon"},r.augment(i,{getShapePointInfo:function(t){var e,n=a.prototype.getShapePointInfo.call(this,t),i=this,s=n.x,o=n.y;if(!r.isArray(s)||!r.isArray(o)){var u=i.getXScale(),c=i.getYScale(),l=u.values?u.values.length:u.ticks.length,h=c.values?c.values.length:c.ticks.length,f=.5/l,g=.5/h;u.isCategory&&c.isCategory?(s=[s-f,s-f,s+f,s+f],o=[o-g,o+g,o+g,o-g]):r.isArray(s)?(e=s,s=[e[0],e[0],e[1],e[1]],o=[o-g/2,o+g/2,o+g/2,o-g/2]):r.isArray(o)&&(e=o,o=[e[0],e[1],e[1],e[0]],s=[s-f/2,s-f/2,s+f/2,s+f/2])}var p=r.mix({},t,{x:s,y:o});return p}}),t.exports=i},function(t,e,n){"use strict";function i(t){i.superclass.constructor.call(this,t)}var r=n(1),a=n(16);r.extend(i,a),i.ATTRS={type:"schema"},t.exports=i},function(t,e,n){"use strict";function i(t){var e=[];if(t.length>0){e=t.slice(0);var n=e[0],i=e[e.length-1];0!==n.value&&e.unshift({value:0}),1!==i.value&&e.push({value:1})}return e}var r=n(1),a=n(25),s=a.Axis,o=n(3),u=o.Vector2,c=n(4),l=["..x","..y","..long","..lant","..pieX"],h=function(t){this.axisCfg={},r.mix(this,t)};r.augment(h,{axisCfg:null,visible:!0,container:null,chart:null,_isHide:function(t){var e=this.axisCfg;return!(!r.inArray(l,t)||!r.isNull(e[t]))||e&&e[t]===!1},_getMiddleValue:function(t,e,n){var i=e.length;if(n===i-1)return null;var r=e[n+1].value;return(t+r)/2},_getLineRange:function(t,e,n,i){var r,a,s,o=e.dim,u=this.axisCfg,c="";return u[o]&&u[o].position&&(c=u[o].position),"x"===n?(r={x:0,y:"top"===c?1:0},a={x:1,y:"top"===c?1:0},s=!1):(i?(r={x:"left"===c?0:1,y:0},a={x:"left"===c?0:1,y:1}):(r={x:"right"===c?1:0,y:0},a={x:"right"===c?1:0,y:1}),s=!0),r=t.convert(r),a=t.convert(a),{start:r,end:a,isVertical:s}},_getLineCfg:function(t,e,n,i){var r,a=this._getLineRange(t,e,n,i),s=a.isVertical,o=a.start,u=a.end,c=t.get("center");return t.isTransposed&&(s=!s),r=s&&o.x>c.x||!s&&o.y>c.y?1:-1,{isVertical:s,factor:r,start:o,end:u}},_getCircleCfg:function(t){var e,n={},i=t.get("x"),r=t.get("y"),a=r.start>r.end;e=t.isTransposed?{x:a?0:1,y:0}:{x:0,y:a?0:1},e=t.convert(e);var s,o=t.get("circleCentre"),c=new u(e.x-o.x,e.y-o.y),l=new u(1,0);s=e.y>o.y?u.angle(c,l):u.angle(c,l)*-1;var h=s+(i.end-i.start);return n.startAngle=s,n.endAngle=h,n.center=o,n.radius=Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2)),n.inner=t.get("inner")||0,n},_getRadiusCfg:function(t){var e,n,i=t.get("x").start,r=i<0?-1:1;return t.isTransposed?(e={x:0,y:0},n={x:1,y:0}):(e={x:0,y:0},n={x:0,y:1}),{factor:r,start:t.convert(e),end:t.convert(n)}},_getMultiLineCfg:function(t,e,n){var i=e.getTicks(),a=[],s=this._getLineRange(t,e,n),o=s.isVertical;return r.each(i,function(e){var n=t.convert({x:o?0:e.value,y:o?e.value:0});a.push(n)}),{start:s.start,end:s.end,tickPoints:a}},_getAxisPosition:function(t,e,n){var i=t.type,r="";return t.isRect?(this.facet&&"mirror"===this.facet.type?"x"===e&&(r="bottom"):"x"===e&&(r="bottom"),"y"===e&&(r=n?"right":"left")):r="clock"===i?"clock":"gauge"===i?"gauge":"helix"===i?"helix":"x"===e?t.isTransposed?"radius":"circle":t.isTransposed?"circle":"radius",r},_getAxisDefaultCfg:function(t,e,n,i,a){var s={},o=this,u=o.facet,l=o.axisCfg,h=t.getHeight(),f=t.type,g=!(!c.axis[i]||!c.axis[i].title);if("cartesian"!==f||r.isNull(u)||u&&1===u.rows&&1===u.cols)"cartesian"===f&&g&&(s.title={text:e.alias||e.dim});else{var p=u.rows,d=u.cols,v=u.rowIndex,m=u.colIndex,x=u.type;g&&(s.title={text:e.alias||e.dim}),"tree"===x?("y"===n&&0!==u.originColIndex&&0!==m||"x"===n&&u.children)&&(s.labels=null,s.title=null):"circle"===x?(s.labels=null,s.title=null):("mirror"!==x&&"y"===n&&(0!==m&&"left"===i||m!==d-1&&"right"===i)&&(s.labels=null,s.title=null),"rect"===x?"x"===n&&0!==v&&(s.labels=null,s.title=null):"list"===x?"x"===n&&v!==p-1&&d*v+m+1+d<=u.count&&(s.labels=null,s.title=null):"mirror"===x&&"x"===n&&(1===p&&1===m||2===p&&0===v)&&(s.labels=null,s.title=null)),"y"===n&&s.title&&v!==Math.floor(p/2)&&(s.title=null),"x"===n&&s.title&&m!==Math.floor(d/2)&&(s.title=null)}if(s=r.mix(!0,{},c.axis[i],s,l[e.dim]),s.ticks=e.getTicks(),t.isPolar&&!e.isCategory&&"x"===n&&("clock"===t.type?s.ticks[0].text="":"gauge"!==t.type&&s.ticks.pop()),"y"===n){var y=s.ticks,_=y.length,S=16;if(h/_<S){var b=[],w=Math.floor(h/S)+1,M=Math.floor(_/w);M<1&&(M=1),b.push(y[0]);for(var A=M;A<=_-2;A+=M)b.push(y[A]);b.push(y[_-1]),s.ticks=b}}return s.coord=t,s.id=o._getViewId()+a+n,s.labels&&r.isNull(s.labels.autoRotate)&&(s.labels.autoRotate=!0),s},_getAxisCfg:function(t,e,n,a,s){r.isNull(s)&&(s="");var o=this,u={},c=o._getAxisPosition(t,a,s),l=o._getViewId();if(u=o._getAxisDefaultCfg(t,e,a,c,s),u.grid&&n){var h=[],f=i(n.getTicks());if(f.length){var g=u.ticks;r.each(g,function(e,n){var i=[],c=e.value;if("middle"===u.gridAlign&&(c=o._getMiddleValue(c,g,n)),!r.isNull(c)){var p=t.get("x"),d=t.get("y");r.each(f,function(e){var n="x"===a?c:e.value,r="x"===a?e.value:c,s=t.convert({x:n,y:r});if(t.isPolar){var o=t.get("circleCentre");d.start>d.end&&(r=1-r),s.flag=p.start>p.end?0:1,s.radius=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2))}i.push(s)}),i.id=l+s+a+e.text,h.push(i)}})}u.grid.items=h,u.grid.id=l+s+a+e.dim,"map"===u.coord.type&&(u.grid.smooth=!0)}return u},_getHelixCfg:function(t){for(var e={},n=t.get("a"),i=t.get("startAngle"),r=t.get("endAngle"),a=100,s=[],o=0;o<=a;o++){var u=t.convert({x:o/100,y:0});s.push(u.x),s.push(u.y)}var c=t.convert({x:0,y:0});return e.a=n,e.startAngle=i,e.endAngle=r,e.crp=s,e.axisStart=c,e.center=t.get("center"),e},_getViewId:function(){var t=this.chart,e=t?t.get("viewId"):"";return e},_drawAxis:function(t,e,n,i,a,o){var u,c,l=this.container,h=this._getViewId();t.isRect?"map"===t.type&&"x"===i?(u=s.MultLine,c=this._getMultiLineCfg(t,e,i)):(u=s,c=this._getLineCfg(t,e,i,o)):t.isHelix&&"x"===i?(u=s.Helix,c=this._getHelixCfg(t)):"x"===i?(u=s.Circle,c=this._getCircleCfg(t)):(u=s,c=this._getRadiusCfg(t));var f=this._getAxisCfg(t,e,n,i,o);return f=r.mix(!0,{id:h+o+i+e.dim},f,c),"y"===i&&a&&"circle"===a.get("type")&&(f.circle=a),l.addGroup(u,f)},createAxis:function(t,e,n,i){var a=this,s=i&&r.isBoolean(i.visible)?i.visible:a.visible;if(s){var o={};i&&r.each(i,function(t,e){e!==s&&(o[e]=t)}),a.axisCfg=o;var u=t.get("coord"),c=u.type;if(this.facet=t.get("facet"),"theta"!==c&&("polar"!==c||!u.isTransposed)){var l;e&&!a._isHide(e.dim)&&(l=a._drawAxis(u,e,n[0],"x")),n&&n.length&&"helix"!==c&&r.each(n,function(t,n){a._isHide(t.dim)||a._drawAxis(u,t,e,"y",l,n)})}}}}),t.exports=h},function(t,e,n){"use strict";var i=n(1),r=n(82),a=function(t){i.mix(this,t),this.resetActions()};i.augment(a,{type:"rect",chart:null,actions:null,_getCoordOptions:function(){var t=this.chart;return t.get("options").coord||t._setOptions("coord",{}),t.get("options").coord},_execActions:function(t){var e=this._getCoordOptions(),n=e.actions;i.each(n,function(e){var n=e[0];t[n](e[1],e[2])})},hasAction:function(t){var e=this.actions,n=!1;return i.each(e,function(e){if(t===e[0])return n=!0,!1}),n},createCoord:function(t,e){var n,a,s=this.chart.get("options"),o=s.coord,u=this,c=o&&o.type?o.type:u.type,l=i.mix({start:t,end:e},o&&o.cfg);return"theta"===c?(n=r.Polar,u.hasAction("transpose")||u.transpose(),a=new n(l),a.type=c):(n=r[i.ucfirst(c)]||r.Rect,a=new n(l)),u._execActions(a),a},rotate:function(t){t=t*Math.PI/180,this.actions.push(["rotate",t]);var e=this._getCoordOptions();return e.actions=this.actions,this},reflect:function(t){this.actions.push(["reflect",t]);var e=this._getCoordOptions();return e.actions=this.actions,this},scale:function(t,e){this.actions.push(["scale",t,e]);var n=this._getCoordOptions();return n.actions=this.actions,this},transpose:function(){this.actions.push(["transpose"]);var t=this._getCoordOptions();return t.actions=this.actions,this},resetActions:function(){var t=this.chart.get("options");return t.coord&&t.coord.actions?this.actions=t.coord.actions:this.actions=[],this}}),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=function(t){i.mix(this,t),this._init()};i.augment(r,{chart:null,rangePlot:null,startPoint:null,rangeSelected:!1,selectable:!1,selectMode:"",_init:function(){this.pixelRatio=this._getCanvas().get("pixelRatio")},_getCanvas:function(){var t=this.chart;return t.get("frontCanvas")},_getShape:function(t,e){var n=this.chart.get("canvas");return n.getShape(t,e)},_getPointInfo:function(t){var e=this.chart,n={x:t.x/this.pixelRatio,y:t.y/this.pixelRatio},i=e.getViewsByPoint(n);return n.views=i,n},_getShapeEventObj:function(t){return{x:t.x/this.pixelRatio,y:t.y/this.pixelRatio,target:t.target,toElement:t.event.toElement||t.event.relatedTarget}},_getEventObj:function(t,e,n){return{x:e.x,y:e.y,target:t.target,toElement:t.event.toElement||t.event.relatedTarget,views:n}},_getActiveShape:function(t){var e=null;return i.each(t,function(t){var n=t.getActiveShape();if(n)return e=n,!1}),e},_limitCoordScope:function(t){var e=this.chart,n=e.get("plotRange"),i=n.tl,r=n.br;return t.x<i.x&&(t.x=i.x),t.x>r.x&&(t.x=r.x),t.y<i.y&&(t.y=i.y),t.y>r.y&&(t.y=r.y),t},_getSelectedValues:function(t,e){var n=null;if(t){var i=[];if(t.isCategory)for(var r=e[0];r<=e[1];r+=1/t.values.length){var a=t.invert(r);i.push(a)}else{var s=t.invert(e[0]),o=t.invert(e[1]);i.push(s),i.push(o)}n={dim:t.dim,values:i}}return n},_filterRangeValues:function(t,e,n){var r=this,a={};return i.each(n,function(n,i){var s=r._getSelectedValues(e[i],n);s&&(a[s.dim]=s.values,t.filter(s.dim,s.values))}),t.repaint(),a},bindEvents:function(){var t=this,e=t._getCanvas();e.on("canvas-mousedown",i.wrapBehavior(t,"onDown")),e.on("canvas-mousemove",i.wrapBehavior(t,"onMove")),e.on("canvas-mouseleave",i.wrapBehavior(t,"onOut")),e.on("canvas-mouseup",i.wrapBehavior(t,"onUp")),e.on("canvas-click",i.wrapBehavior(t,"onClick")),e.on("canvas-dblclick",i.wrapBehavior(t,"onClick"))},onUp:function(t){var e=this.chart,n=this._getShapeEventObj(t);n.shape=this.currentShape,e.fire("mouseup",n)},onDown:function(t){var e=this.chart,n=this._getShapeEventObj(t);n.shape=this.currentShape,e.fire("mousedown",n);var i=e.get("plotRange"),r=i.tl,a=i.br,s=t.x/this.pixelRatio,o=t.y/this.pixelRatio;if(!(s<r.x||s>a.x||o<r.y||o>a.y)&&(this.startPoint={x:s,y:o},this.selectable)){this.rangeSelected=!0;var u=this.rangePlot;if(!u){var c=this._getCanvas();u=c.addGroup(),u.initTransform(),this.rangePlot=u}var l=this._getPointInfo(t);e.fire("rangeselectstart",this._getEventObj(t,l,l.views));var h=t.event;h.stopPropagation(),h.preventDefault(),this._bindCanvasEvent()}},_bindCanvasEvent:function(){var t=this._getCanvas(),e=t.get("canvasDOM");this.onMouseMoveListener=i.addEventListener(e,"mousemove",i.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=i.addEventListener(e,"mouseup",i.wrapBehavior(this,"_onCanvasMouseUp"))},_onCanvasMouseMove:function(t){if(this.rangeSelected){var e,n,r,a,s=t.offsetX,o=t.offsetY,u=this._limitCoordScope({x:s,y:o}),c=this.startPoint,l=this.chart.get("plotRange"),h=this._getCanvas(),f=this.rangePlot,g=this.rectShape;"rangeY"===this.selectMode?(e=l.tl.x,n=u.y>=c.y?c.y:u.y,r=Math.abs(l.tl.x-l.tr.x),a=Math.abs(c.y-u.y)):"rangeX"===this.selectMode?(e=u.x>=c.x?c.x:u.x,n=l.tl.y,r=Math.abs(c.x-u.x),a=Math.abs(l.tl.y-l.bl.y)):"rangeXY"===this.selectMode&&(u.x>=c.x?(e=c.x,n=o>=c.y?c.y:u.y):(e=u.x,n=u.y>=c.y?c.y:u.y),r=Math.abs(c.x-u.x),a=Math.abs(c.y-u.y)),g?g.attr(i.mix({},g.__attrs,{x:e,y:n,width:r,height:a})):(g=f.addShape("rect",{attrs:{x:e,y:n,width:r,height:a,fill:"#CCD7EB",opacity:.4}}),this.rectShape=g),h.draw(),t.cancelBubble=!0,t.returnValue=!1}},_onCanvasMouseUp:function(t){var e=this._getCanvas(),n=this.startPoint,r=this.rangePlot;this.onMouseMoveListener.remove(),this.onMouseUpListener.remove(),this.rangePlot.clear(),this.rangeSelected=!1,this.rectShape=null,e.draw();var a=t.offsetX,s=t.offsetY;if(!(Math.abs(n.x-a)<=1&&Math.abs(n.y-s)<=1)){var o,u={},c=this.chart,l=this._limitCoordScope({x:a,y:s}),h=this._getPointInfo({x:l.x*this.pixelRatio,y:l.y*this.pixelRatio});if(i.each(h.views,function(t){if(t.get("data"))return o=t,!1}),o){var f=o.getXScale(),g=o.getYScales()[0],p=c.get("plotRange"),d=Math.abs(p.start.y-p.end.y),v=Math.abs(p.start.x-p.end.x),m=[(n.x-p.start.x)/v,(l.x-p.start.x)/v].sort(),x=[(p.bl.y-l.y)/d,(p.bl.y-n.y)/d].sort();"rangeX"===this.selectMode?u=this._filterRangeValues(o,[f],[m]):"rangeY"===this.selectMode?u=this._filterRangeValues(o,[g],[x]):"rangeXY"===this.selectMode&&(u=this._filterRangeValues(o,[f,g],[m,x]))}var y={x:a,y:s,selected:u,view:o,rangePlot:r};c.fire("rangeselectend",y)}},onOut:function(t){var e=this,n=e.chart,i=e._getPointInfo(t);n.fire("plotleave",e._getEventObj(t,i,e.curViews))},onMove:function(t){var e=this,n=e.chart,i=e.currentShape,r=e._getShape(t.x,t.y),a=e._getShapeEventObj(t);if(a.shape=r,n.fire("mousemove",a),i!==r){if(i){var s=e._getShapeEventObj(t);s.shape=i,s.toShape=r,n.fire("mouseleave",s)}if(r){var o=e._getShapeEventObj(t);o.shape=r,o.fromShape=i,n.fire("mouseenter",o)}e.currentShape=r}var u=e._getPointInfo(t),c=e.curViews||[];if(0===c.length&&u.views.length&&n.fire("plotenter",e._getEventObj(t,u,u.views)),c.length&&0===u.views.length&&n.fire("plotleave",e._getEventObj(t,u,c)),u.views.length){a=e._getEventObj(t,u,u.views),r=e._getActiveShape(u.views),a.shape=r,n.fire("plotmove",a);var l=n.get("frontCanvas").get("el");r&&r.attr("cursor")?l.style.cursor=r.attr("cursor"):l.style.cursor=""}e.curViews=u.views},onClick:function(t){var e=this,n=e.chart,i=this._getShapeEventObj(t);i.shape=this.currentShape,n.fire("click",i);var r=e._getPointInfo(t),a=r.views;if(a&&a.length){for(var s=e._getEventObj(t,r,a),o=null,u=a.length-1;u>=0;u--){for(var c,l=a[u],h=l.get("geoms"),f=h.length-1;f>=0&&(c=h[f],!(o=c.getSingleShape(r)));f--);if(o){c&&o&&c.allowSelected()&&c.setSelected(o.get("origin"),l),s.geom=c;break}}o&&(s.shape=o,s.data=o.get("origin")),n.fire("plotclick",s),"canvas-dblclick"===t.type&&(n.fire("plotdblclick",s),n.fire("dblclick",i))}},clearEvents:function(){var t=this,e=t._getCanvas();e.off("canvas-mousemove",i.getWrapBehavior(t,"onMove")),e.off("canvas-mouseleave",i.getWrapBehavior(t,"onOut")),e.off("canvas-mousedown",i.getWrapBehavior(t,"onDown")),e.off("canvas-mouseup",i.getWrapBehavior(t,"onUp")),e.off("canvas-click",i.getWrapBehavior(t,"onClick")),e.off("canvas-dblclick",i.getWrapBehavior(t,"onClick"))}}),t.exports=r},function(t,e,n){"use strict";var i=n(1),r=n(184),a=n(4),s=function(t){i.mix(this,t)};i.augment(s,{chart:null,_getFacetClass:function(t){return t=i.ucfirst(t),
r[t]},_createFacetView:function(t){var e=this.chart;e.set("animate",!1);var n=e.createView({index:t.index,data:t.frame,region:t.region,facet:t});return n.set("options",e.get("options")),n.set("plotContainer",e.get("plotContainer")),n.set("frontPlot",e.get("frontPlot")),n.set("backPlot",e.get("backPlot")),n.set("scales",e.get("scales")),n.set("stats",e.get("stats")),n.set("guideAssist",e.get("guideAssist")),n},generateFacets:function(t,e){var n=this,r=[],s=n.chart,o=s.get("scaleAssist");e.defs=o.defs,e.plotRange=s.get("plotRange"),e=i.mix({},a.facetCfg,e),e.facetTitle=i.mix({},a.facetCfg.facetTitle,e.facetTitle),e.dims||(e.dims=e.fields);var u=n._getFacetClass(e.type),c=new u(e),l=c.generateFacets(t),h=s.get("plotContainer"),f=h.addGroup();return c.drawTitles(l,f),s.set("views",[]),i.each(l,function(t){r.push(n._createFacetView(t))}),r}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(191),a=n(4),s=["text","tag","html"],o=function(t){this.guides=[],this.options=[],i.mix(this,t)};i.augment(o,{guides:null,xScale:null,yScale:null,backPlot:null,frontPlot:null,options:[],_addGuide:function(t){this.guides.push(t)},_getDefault:function(){return{xScale:this.xScale,yScale:this.yScale}},setScale:function(t,e){var n=this.guides;this.xScale=t,this.yScale=e,i.each(n,function(n){n.xScale=t,n.yScale=e})},_setOptions:function(t){var e=this.options;e.push(t)},creatGuide:function(){var t=this,e=["line","text","rect","arc","tag","html"],n=this.options;n.forEach(function(n){var s=n.type;e.indexOf(n.type)!==-1&&(n.cfg=i.mix({},a.guide[s],n.cfg)),s=i.ucfirst(s);var o=i.mix({},t._getDefault(),n),u=new r[s](o);t._addGuide(u)})},line:function(t,e,n){var i={type:"line",from:t,to:e,cfg:n};return this._setOptions(i),this},text:function(t,e,n){var i={type:"text",position:t,text:e,cfg:n};return this._setOptions(i),this},image:function(t,e,n){var r={type:"image",start:t};return i.isArray(e)&&(r.end=e),i.isObject(e)&&(n=e),n&&(r.cfg=n),this._setOptions(r),this},rect:function(t,e,n){var i={type:"rect",start:t,end:e,cfg:n};return this._setOptions(i),this},arc:function(t,e,n){var i={type:"arc",start:t,end:e,cfg:n};return this._setOptions(i),this},tag:function(t,e,n,i){var r={type:"tag",from:t,to:e,text:n,cfg:i};return this._setOptions(r),this},html:function(t,e,n){var i={type:"html",point:t,html:e,cfg:n};return this._setOptions(i),this},paint:function(t,e,n){var r=this.guides;e=e||this.backPlot,n=n||this.frontPlot,i.each(r,function(r){i.inArray(s,r.type)?r.paint(t,n):r.paint(t,e)})},clear:function(){this.options=[],this.reset()},reset:function(){this.guides=[];var t=this.frontPlot;if(t&&!t.get("destroyed")){var e=t.get("parent")?t.get("parent").get("el").parentNode:t.get("el").parentNode,n=e.getElementsByClassName("guideWapper")[0];n&&e.removeChild(n)}}}),t.exports=o},function(t,e,n){"use strict";function i(t){for(var e=!0,n=t[0],i=n.attrValue,r=1;r<t.length;r++)if(t[r].attrValue!==i){e=!1;break}return e}function r(t,e){var n=[];return c.each(t,function(t){var i=t[v];i=i.split("*"),i=i[i.length-1],i===e&&n.push(t)}),n}function a(t,e){return t+"\uff08"+e+"\uff09"}function s(t){return t.alias||t.dim}function o(t,e,n){n&&c.each(t,function(t){t.checked=n.indexOf(t.value)!==-1})}function u(t,e,n){var i;return!c.isNull(n)&&(t=n.translate(t),e=n.translate(e),i=n.isCategory?t===e:Math.abs(t-e)<=1)}var c=n(1),l=n(25),h=l.Legend,f=n(4),g=n(116),p=16,d=16,v="value",m="_origin",x=function(t){this.legendCfg={visible:!0},c.mix(this,t),this.clear();var e=this.chart;this.container=e.get("frontCanvas"),this.plotRange=e.get("plotRange")};c.augment(x,{plotRange:null,container:null,chart:null,position:"right",legendCfg:{},_isFiltered:function(t,e,n){if(!t.isCategory)return!0;var i=!1;return n=t.invert(n),c.each(e,function(e){if(i=i||t.getText(e)===t.getText(n))return!1}),i},_getFilterVals:function(t,e,n){var i=e.get("options").filters||{};return n&&(i[t]=[]),i[t]},_isDimInView:function(t,e,n){var i=!1,r=t.split("*"),a=e.split("*");return c.each(r,function(t,e){var r=n.getScale(t);if(r&&r.values){var s=a[e];i=c.inArray(r.values,s)}}),i},_addFilterVals:function(t,e,n,i){if(this._isDimInView(t,e,n)){var r=this._getFilterVals(t,n,i);r.push(e)}},_removeFilterVals:function(t,e,n,i,r){if(this._isDimInView(t,e,i)){var a=this._getFilterVals(t,i);r?a=[e]:(a||(a=n.slice(0)),c.remove(a,e)),i.filter(t,a)}},_bindClickEvent:function(t,e){var n=this,i=n.chart,r=i.getViews(),a=[],s=t.get("items");c.each(s,function(t){a.push(t[v])}),t.on("itemchecked",function(t){var a=t.item.value,s="single"===this.get("mode");n._addFilterVals(e,a,i,s),c.each(r,function(t){n._addFilterVals(e,a,t,s)}),i.repaint()}),t.on("itemunchecked",function(t){var s="single"===this.get("mode"),o=t.item.value;n._removeFilterVals(e,o,a,i,s),c.each(r,function(t){n._removeFilterVals(e,o,a,t,s)}),i.repaint()}),t.on("itemfiltered",function(t){var r=t.range,a=i.getAllGeoms();c.each(a,function(t){var i=t.getShapes();c.each(i,function(t){var i=n._getOrigin(t),a=i[e];a<r[0]||a>r[1]?t.set("visible",!1):t.set("visible",!0)}),t.setShapesFiltered(i)})})},_getOrigin:function(t){var e=t.get("origin");return c.isArray(e)&&(e=e[0]),e[m]},_bindActiveEvent:function(t,e){var n=this,i=n.chart;t.on("itemactived",function(t){var r=t.item.value,a=i.getAllGeoms();c.each(a,function(t){var i=t.getShapes(),a=t.getScales()[e],s=[];c.each(i,function(t){var i=n._getOrigin(t);u(i[e],r,a)&&s.push(t)}),t.setShapesActive(s)})}),t.on("itemunactived",function(){var t=i.getAllGeoms();c.each(t,function(t){t.clearShapeActived()})})},_getLayoutType:function(t){return"right"===t||"left"===t?"vertical":"horizontal"},_getRegion:function(t){var e=0,n=0;return c.each(t,function(t){var i=t.getBBox();e<i.width&&(e=i.width),n+=i.width}),{maxWidth:e,totalWidth:n}},_alignLegend:function(t,e,n,i){var r=this,a=r.container,s=a.get("canvas"),o=s.get("width"),u=s.get("height"),c=r.plotRange,l=0,h=0,f=t.get("dx")||0,g=t.get("dy")||0,v=t.getBBox();if("left"===i||"right"===i){var m=n.maxWidth;c?(u=c.br.y,l="left"===i?p:c.br.x+p):l="left"===i?p:o-m+p,h=u-v.height,e&&(h=e.get("y")-v.height-d)}else{var x=0;c&&(x=c.bl.x+(c.getWidth()-n.totalWidth)/2),l=x,h=t.get("alignPlot")&&c?"top"===i?c.tr.y-p:c.br.y+p:"top"===i?p:u-v.height-p,e&&(l=e.get("x")+e.getBBox().width+d)}t.move(l+f,h+g)},_setItemChecked:function(t,e,n,i){var r=this,a=r.container,s=r.chart,o=s.get("canvas"),u=e.item,l=u.geoms,h=e.currentTarget,f=t.get("unChecked"),g=t.get("word").fill;if(i){if(!n)return;var p=s.getAllGeoms(),d=t.get("itemsGroup").get("children");c.each(p,function(t){c.inArray(l,t)||t.setVisible(!1)}),c.each(d,function(t){if(t!==u){var e=t.get("children");e[0].attr("fill",f),e[1].attr("fill",f),t.set("checked",!1)}})}c.each(l,function(t){t.setVisible(n)}),u.checked=n,h.get("children")[0].attr("fill",n?u.color:f),h.get("children")[1].attr("fill",n?g:f),h.set("checked",n),a.draw(),o.draw()},addMixedLegend:function(t){var e=this;if(!e.legendCfg.visible)return null;var n=e.legendCfg,i="single"===n.mode,r=g.getShape("point"),a=n.marker||"circle";c.each(t,function(t,e){if(t.type=null,t.marker=r.getMarkerCfg(a,t),t.color=t.marker.fill||t.marker.stroke,i&&e>0){var n=t.geoms;c.each(n,function(t){t.setVisible(!1)}),t.checked=!1}else t.checked=!0});var s=e.container,o=this.getPosition(),u=e.legends;u[o]=u[o]||[];var l=s.addGroup(h.Category,c.mix({},{checkable:!(n.mode===!1),layout:e._getLayoutType(o),items:t},f.legend[o],n));return u[o].push(l),l.on("itemchecked",function(t){e._setItemChecked(this,t,!0,i)}),l.on("itemunchecked",function(t){e._setItemChecked(this,t,!1,i)}),l},getPosition:function(t){var e=this.legendCfg,n=e.position||this.position;return e[t]&&e[t].position&&(n=e[t].position),n},addLegend:function(t,e,n,u){var l=this;if(l.legendCfg.visible){var h=l.legendCfg,g=t.dim;if(!h||h[g]!==!1){var p=l.getPosition(g),d=c.mix(!0,{titleText:s(t),attrType:e.type},f.legend[p],h,h[g]);d.checkable=!(d.mode===!1);var m,x,y=e.scales,_=[];if(1===y.length||t.isLinear)_=l._getLegendItems(t,e,n,u),x=t.dim,m=l._addLegend(t,d,_,p,e);else{var S=y[1],b=t.getTicks(),w=[];if(x=t.dim+"*"+S.dim,d.titleText&&(d.titleText=a(s(S),s(t))),c.each(b,function(r){var a=t.invert(r.value),s=l._getCategoryItems(S,e,n,u,a);if(i(s)){var o=s[0];o[v]=a,o.name=t.getText(a),o.attrValue=a,_.push(o)}else w=w.concat(s)}),w.length){var M=S.getTicks();c.each(M,function(t){var e=S.invert(t.value),n=r(w,e);if(n.length===b.length&&i(n)){var a=n[0];a[v]="*"+e,a.name=S.getText(e),a.attrValue=e,_.push(a)}else _=_.concat(n)})}o(_,x,u),m=l._addLegend(t,d,_,p,e)}m.get("checkable")&&l._bindClickEvent(m,x),l._bindActiveEvent(m,x)}}},_getLegendItems:function(t,e,n,i,r){var a=this;return t.isLinear?a._getContinuousItems(t,e,r):a._getCategoryItems(t,e,n,i,r)},_getContinuousItems:function(t,e,n){var i,r,a=this,s=[],o=t.getTicks();return c.each(o,function(o){var u=o.value,c=t.invert(u),l=a._mappingValues(c,e,n);s.push({name:o.text,color:l,value:u}),0===u&&(i=!0),1===u&&(r=!0)}),i||s.unshift({name:t.getText(t.invert(0)),color:a._mappingValues(t.invert(0),e,n),value:0}),r||s.push({name:t.getText(t.invert(1)),color:a._mappingValues(t.invert(1),e,n),value:1}),s},_getCategoryItems:function(t,e,n,i,r){var s,o,u=this,l=t.getTicks(),h=u.legendCfg,f=[],p="point",d=t.dim,v=h.marker||h[d]&&h[d].marker||"circle",m="single"===h.mode||h[d]&&"single"===h[d].mode;return c.each(l,function(l){var h=l.text;o=h;var d=l.value,x=t.invert(d),y={isInCircle:n.isInCircle()},_=u._mappingValues(x,e,r);"color"===e.type?y.color=_:"shape"===e.type?(p=n.get("shapeType")||n.get("type"),v=_):"size"===e.type&&(s=_);var S=g.getShape(p),b=S.getMarkerCfg(v,y);c.isNull(s)||(b.radius=s);var w=!0;c.isNull(r)?w=m&&i?u._isFiltered(t,i,d):!i||u._isFiltered(t,i,d):(x=r+"*"+x,o=a(o,r)),f.push({name:o,checked:w,type:null,marker:b,attrValue:_,value:x})}),f},_mappingValues:function(t,e,n){var i;if(c.isNull(n))i=e.mappingValues(t).join("");else{var r=[n,t];i=e.mappingValues.apply(e,r).join("")}return i},_addLegend:function(t,e,n,i,r){var a,s,o=this,u=o._getLayoutType(i);if(t.isLinear)s=h.Continuous,a=c.mix({layout:u,attr:r},e);else{s=h.Category;var l=o.plotRange,f="right"===i||"left"===i?l.bl.y-l.tr.y:l.tr.x-l.bl.x;a=c.mix(!0,{maxLength:f,layout:u,items:n},e)}a.items=n;var g=o.container,p=o.legends,d=g.addGroup(s,a);return p[i]=p[i]||[],p[i].push(d),d},alignLegends:function(){var t=this,e=t.legends;return c.each(e,function(e,n){var i=t._getRegion(e);c.each(e,function(r,a){var s=e[a-1];t._alignLegend(r,s,i,n)})}),this},clear:function(){var t=this,e=t.legends;c.each(e,function(t){c.each(t,function(t){t.remove()})}),this.legends={}}}),t.exports=x},function(t,e,n){"use strict";var i=n(1),r=n(91),a=n(46),s=n(2),o=n(4),u={LINEAR:"linear",CAT:"cat",TIME:"time"},c=function(t){i.mix(this,t),this.defs=this.defs||{}};i.augment(c,{defs:null,_addNewCol:function(t,e,n){var r=this,a=r._getDefs(),s=e.dims,o=[];i.each(s,function(t){var e=a[t]&&a[t].type||r._getDefaultType(t,n);if(0===o.length)o.push(e);else if(!i.inArray(o,e))throw new Error('Sorry, the values that are involved in "+" must be of the same type.')}),i.isNull(e.type)&&(e.type=o[0]);var u=[];i.each(s,function(t){u.push(n.colArray(t))});for(var c=[],l=0;l<u[0].length;l++){c[l]=[];for(var h=0;h<s.length;h++)c[l].push(u[h][l])}n.addCol(t,c)},_getDefs:function(){var t=this.defs;return i.mix(!0,{},o.scales,t)},_getDef:function(t){var e=this.defs,n=null;return(o.scales[t]||e[t])&&(n=i.mix({},o.scales[t]),i.each(e[t],function(t,e){i.isNull(t)?delete n[e]:n[e]=t})),n},_getScaleCfg:function(t,e,n,a){var o={dim:e};if(n.contains(e)){var u=s.values(n,e);o.values=u,r.isCategory(t)||"time"===t||(o.min=s.min(n,e),o.max=s.max(n,e),o.nice=!0),"time"===t&&(o.nice=!1)}if(!r.isCategory(t)&&"time"!==t&&a&&(!o.min||o.min>0)){var c=this.defs,l={};l[e]={min:0},this.defs=i.mix(!0,l,c)}return o},_getDefaultType:function(t,e){var n=u.LINEAR,r=s.values(e,t),o=r[0];return i.isArray(o)&&(o=o[0]),a.isDateString(o)?n=u.TIME:i.isString(o)&&(n=u.CAT),n},_syncScales:function(t,e){if("identity"!==t.type){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);t.change(n)}},createDefaultScale:function(t,e,n){var i=this._getDefaultType(t,e),a=this._getScaleCfg(i,t,e,n);return r[i](a)},createScale:function(t,e,n){var a,s=this,o=s._getDef(t);if(i.isNumber(t))a=r.I({value:t,dim:t.toString()});else if(o||i.indexOf(e.colNames(),t)!==-1)if(o){o.dims&&!e.contains(t)&&s._addNewCol(t,o,e);var u=o.type||s._getDefaultType(t,e),c=s._getScaleCfg(u,t,e,n);i.mix(c,o),a=r[u](c)}else a=s.createDefaultScale(t,e,n);else a=r.I({value:t,dim:t});return a},sortScales:function(t,e,n){var r=this;return n?(t=s.sortBy(t,n),void i.each(e,function(e,n){var i=e.type;if("identity"!==i&&t.contains(n)){var a=r.createScale(n,t);e.values=a.values}})):null},trainScales:function(t,e){var n=this;i.each(e,function(e){var i=e.type,r=e.dim;if("identity"!==i&&t.contains(r)){var a=n.createScale(r,t);n._syncScales(e,a)}})},_getFilterFunction:function(t,e){var n,r,a,s,o=t.dim;return n=t.isCategory?"timeCat"===t.type?function(t){return r=new Date(t[o]).getTime(),a=new Date(e[0]).getTime(),s=new Date(e[1]).getTime(),r>=a&&r<=s}:function(n){var a=!1;return i.each(e,function(e){if(r=n[o],a=a||t.getText(e)===t.getText(r))return!1}),a}:t.isLinear?function(n){return r=t.translate(n[o]),a=t.translate(e[0]),s=t.translate(e[1]),r>=a&&r<=s}:function(t){return r=t[o],i.inArray(e,r)}},_getMultpleFilterFunction:function(t,e){var n=function(n){var r=!1;return i.each(e,function(e){var a=e.split("*"),s=!0;if(i.each(a,function(e,i){if(e){var r=t[i],a=n[r.dim];s=s&&r.getText(e)===r.getText(a)}}),r=r||s)return!1}),r};return n},filterData:function(t,e,n){var r=this;t=r.convertToString(t,n);var a=[];i.each(e,function(t,e){var i;if(e.indexOf("*")!==-1){var s=e.split("*"),o=s.map(function(t){return n[t]});t&&o.length&&(i=r._getMultpleFilterFunction(o,t),a.push(i))}else{var u=n[e];t&&u&&(i=r._getFilterFunction(u,t),a.push(i))}});var o=t;return a.length&&(o=s.filter(t,function(t){var e=!0;return i.each(a,function(n){e=e&&n(t)}),e})),o},convertToString:function(t,e){var n=this;return i.each(e,function(e,r){var a=e.type;if(e.isCategory&&"timeCat"!==a&&t.contains(r)){var s=n._getDef(r);if(s&&!s.hasOwnProperty("values")||!s){var o=t.colArray(r);i.each(o,function(t,e){i.isNull(t)||(o[e]=t.toString())}),t.colReplace(r,o)}}}),t}}),t.exports=c},function(t,e,n){"use strict";function i(t,e){var n=-1;return o.each(t,function(t,i){if(t.title===e.title&&t.name===e.name&&t.value===e.value&&t.color===e.color)return n=i,!1}),n}function r(t,e){if(!t)return!1;var n="";return!!t.className&&(n=o.isNull(t.className.baseVal)?t.className:t.className.baseVal,n.indexOf(e)!==-1)}function a(t,e){for(var n=t.parentNode,i=!1;n&&n!==document.body;){if(r(n,e)){i=!0;break}n=n.parentNode}return i}function s(t){var e=[];return o.each(t,function(t){var n=i(e,t);n===-1?e.push(t):e[n]=t}),e}var o=n(1),u=n(4),c=n(25),l=c.Tooltip,h=["line","area","path","areaStack"],f=["line","area"],g=function(t){this.cfg={visible:!0},o.mix(this,t)};o.augment(g,{cfg:null,tooltip:null,chart:null,timeStamp:0,get:function(t){return this[t]},set:function(t,e){this[t]=e},_setTooltipCrosshairs:function(){var t=this,e=o.mix({},u.tooltip),n=t.get("chart"),i=n.getAllGeoms(),r=[];return o.each(i,function(t){var e=t.get("type");o.indexOf(r,e)===-1&&r.push(e)}),i.length&&"cartesian"===i[0].get("coord").type&&1===r.length&&o.indexOf(f,r[0])>-1&&o.mix(e,{crosshairs:!0}),e},_getCanvas:function(){return this.chart.get("frontCanvas")},_setTooltip:function(t,e,n,i){var r=this,a=r.get("tooltip"),c=r.get("prePoint");if(!c||c.x!==t.x||c.y!==t.y){e=s(e),r.set("prePoint",t);var l=r.chart,h=o.isArray(t.x)?t.x[t.x.length-1]:t.x,f=o.isArray(t.y)?t.y[t.y.length-1]:t.y;a.get("visible")||l.fire("tooltipshow",{x:h,y:f,tooltip:a}),l.fire("tooltipchange",{tooltip:a,x:h,y:f,items:e});var g=e[0],p=g.title||g.name;a.setContent(p,e),n.length?(a.setMarkers(n,u.tooltipMarker),a.get("markerGroup").setMatrix(i.get("matrix").clone())):a.clearMarkers(),a.setPosition(h,f),a.show()}},_clearActive:function(){var t=this,e=t.get("chart"),n=e.getAllGeoms();o.each(n,function(t){t.clearShapeActived()})},_bindEvent:function(){var t=this,e=t.chart;e.on("plotmove",o.wrapBehavior(t,"onMouseMove")),e.on("plotleave",o.wrapBehavior(t,"onMouseOut"))},_offEvent:function(){var t=this,e=t.chart;e.off("plotmove",o.getWrapBehavior(t,"onMouseMove")),e.off("plotleave",o.getWrapBehavior(t,"onMouseOut"))},renderTooltip:function(){var t=this;if(!t.get("tooltip")){var e=t.get("chart"),n=t.get("cfg"),i=t._setTooltipCrosshairs();n=o.mix({plotRange:e.get("plotRange"),capture:!1},i,n),n.visible=!1;var r=t._getCanvas(),a=r.addGroup(l,n);r.sort(),t.set("tooltip",a),t._bindEvent()}},showTooltip:function(t,e){var n=this;if((!e||e.length)&&t){this.get("tooltip")||this.renderTooltip();var i=n.get("cfg"),r=i&&i.map,a=[],s=[];if(o.each(e,function(e){if(!e.get("tooltipEnable"))return!0;var n=e.get("geoms");o.each(n,function(e){var n=e.get("container");if(n.get("visible")){var i=e.get("frames");if(e.isShareTooltip()){var u=[];o.each(i,function(n){var i=e.findPoint(t,n);if(i){u.push(i);var c=e.getTipItems(i,r);s=s.concat(c);var l=e.get("type");o.indexOf(h,l)!==-1&&(a=a.concat(c))}}),u.length&&e.setActiveByPoint(u[0])}else{var c=e.getSingleShape(t,i);c&&c.get("visible")&&(s=e.getTipItems(c.get("origin"),r),e.setShapesActive([c]))}}})}),s.length){var u=s[0],c=e[0].get("coord");if(a.length){u=a[0],t=u.point;var l=o.isArray(t.x)?t.x[t.x.length-1]:t.x,f=o.isArray(t.y)?t.y[t.y.length-1]:t.y;t=c.trans(l,f,1)}n._setTooltip(t,s,a,c)}else n._clearActive()}},hideTooltip:function(){var t=this,e=t.get("tooltip"),n=t.chart,i=t._getCanvas();t.set("prePoint",null),e.hide(),t._clearActive(),n.fire("tooltiphide",{tooltip:e}),i.draw()},onMouseMove:function(t){var e=this.get("timeStamp"),n=+new Date;if(this.cfg.visible&&t.views&&t.views.length){var i=this,r={x:t.x,y:t.y};n-e>16&&(i.showTooltip(r,t.views),this.set("timeStamp",n))}},onMouseOut:function(t){var e=this,n=e.get("tooltip"),i=e._getCanvas();n.get("visible")&&(t&&t.target!==i||t&&n.get("custom")&&t.toElement&&(r(t.toElement,"ac-tooltip")||a(t.toElement,"ac-tooltip"))||e.hideTooltip())},clear:function(){var t=this,e=t.get("tooltip");e&&e.remove(),t.set("tooltip",null),t.set("prePoint",null),t._offEvent()}}),t.exports=g},function(t,e,n){"use strict";function i(t){var e=t.replace(/([a-z](?=[A-Z]))/g,"$1 ");return e.split(" ")}var r=n(1),a=n(136),s=n(4),o=["pointStack","pointJitter","pointDodge","intervalStack","intervalDodge","intervalSymmetric","areaStack","schemaDodge"];t.exports={_initAttrs:function(){var t=this,e=this.get("options").geoms;r.each(e,function(e){if(r.inArray(o,e.type)){var n=i(e.type);e.type=n[0],e.adjusts?e.adjusts=[n[1]].concat(e.adjusts):e.adjusts=[n[1]]}var a=[],s=["position","color","shape","opacity","size"];r.each(e,function(n,i){if(s.indexOf(i)!==-1){var o,u;!r.isObject(n)||n.isStat?(u={},u.field=n):u=n,o="color"===i?t._initColor(u,e.type):"size"===i?t._initSize(u):"shape"===i?t._initShape(u,e.type):u;var c=t._getScalesAndStat(u.field,e.type,e.adjusts,i);o=r.mix({},o,c);var l=t._getAttr(i,o);a.push(l)}}),e.attrs=a})},_initColor:function(t,e){var n={};return t.callback?n.callback=t.callback:t.colors?r.isArray(t.colors)?n.arr=t.colors:n.methodType=t.colors:"heatmap"===e?n.methodType=s.heatmapColors:n.arr=s.colors["default"],n},_initSize:function(t){var e={};return t.callback&&(e.callback=t.callback),e.min=t.min||1,e.max=t.max||10,e},_initShape:function(t,e){var n={};if(t.callback&&(n.callback=t.callback),t.shapes)n.arr=t.shapes;else{var i=/[A-Z].*$/;e=e.replace(i),n.arr=s.shapes[e]}return n},_getScalesAndStat:function(t,e,n,i){var r=this._parseDims(t,e,n,i);return{scales:r.scales,stat:r.stat}},_parseDims:function(t,e,n,i){var a,s=this;if(t.isStat&&(a=t,t.hasInited||(a.init(),a.hasInited=!0),t=a.getDims(),s._addStat(a)),r.isString(t)&&t.indexOf("+")!==-1){var o=[],u=this.get("scaleAssist"),c=t.replace(/\s+/g,"").split("*");r.each(c,function(t){var e=t.replace(/\(|\)|\s+/g,"").split("+"),n=e.join("+");o.push(n),e.length>1&&(u.defs[n]=r.mix({},u.defs[n],{dims:e}))}),t=o}else r.isString(t)&&t.indexOf("*")!==-1?(t=t.split("*"),t=r.map(t,function(t){return t.trim()})):(r.isNumber(t)||r.isString(t))&&(t=[t]);var l=this.get("coord");"position"===i&&"theta"===l.type&&"interval"===e&&"Stack"===n[0]&&"..pieX"!==t[0]&&t.unshift("..pieX"),"position"===i&&1===t.length&&(r.inArray(n,"Jitter")||r.inArray(n,"Stack"))&&"..y"!==t[t.length-1]&&t.push("..y");var h=[];return r.each(t,function(t,n){var i=1===n&&"interval"===e,r=s.createScale(t,i);h.push(r)}),{dims:t,stat:a,scales:h}},_addStat:function(t){var e=this.get("stats");e.push(t)},_getAttr:function(t,e){t=r.ucfirst(t);var n=a[t];return new n(e)}}},function(t,e,n){"use strict";function i(t,e){var n=[];return h.each(e,function(e){e.getYScale()===t&&t.values&&t.values.length>0&&n.push(e)}),n}function r(t,e){var n=!1;return h.each(t,function(t){var i=[].concat(t.values),r=[].concat(e.values);if(t.type===e.type&&t.dim===e.dim&&i.sort().toString()===r.sort().toString())return void(n=!0)}),n}function a(t){var e=t.get("el");e.style.position="absolute",e.style.top=0,e.style.left=0}function s(t,e){var n=new f(t);return e&&a(n),n.set("fontFamily",d.fontFamily),n}function o(t){var e=t.id,n=document.getElementById(e),i=t.container;if(!n&&!i)throw new Error("please specify the canvas container Id !");if(n&&i)throw new Error('"container" and "id" can not be declared at the same time!');if(!i){var r=h.guid("g-chart");i=h.createDom("<div></div>"),i.id=r,n.appendChild(i)}return i}function u(t){var e=t.container,n=h.getWidth(e);return t.width=n,t}function c(t){var e=t.width,n=t.height,i=t.container,r={width:e,height:n,containerDOM:i,pixelRatio:t.pixelRatio||d.pixelRatio,capture:!1},a=s(r,!1),o=s(r,!0),u=s(r,!0);return o.set("capture",!0),t.backCanvas=a,t.canvas=o,t.frontCanvas=u,t}function l(t){var e=h.mix({},d.plotCfg,t.plotCfg),n=o(t);t.plotCfg=e,t.container=n,t.forceFit&&(t=u(t)),t=c(t);var i=t.backCanvas,r=i.addGroup(p.Back,e);return t.backPlotBg=r,t.plotRange=r.get("plotRange"),t}var h=n(1),f=n(5),g=n(25),p=g.Plot,d=n(4),v=n(305),m=n(109),x=function y(t){t=l(t),y.superclass.constructor.call(this,t),this.init()};x.ATTRS={id:null,width:null,height:null,plotCfg:null,forceFit:!1},h.extend(x,v),h.augment(x,{init:function(){var t=this.get("plotRange");this.set("region",{start:t.start,end:t.end}),this.set("viewId","chart"),this.get("forceFit")&&window.addEventListener("resize",h.wrapBehavior(this,"_initForceFitEvent")),m.initEvent(this),m.initLegend(this),m.initTooltip(this)},_initForceFitEvent:function(){var t=setTimeout(h.wrapBehavior(this,"forceFit"),200);clearTimeout(this.get("resizeTimer")),this.set("resizeTimer",t)},_getAllYScales:function(){var t=[],e=this.get("views");return t=t.concat(this.getYScales()),h.each(e,function(e){t=t.concat(e.getYScales())}),t},_renderLegends:function(t){var e=this.get("legendAssist"),n=this.getAllGeoms(),a=this._getAllYScales(),s=[];if(h.mix(e.legendCfg,t),h.each(n,function(t){var n=t.getLegendAttr();h.each(n,function(n){var i=n.type,a=n.getScale(i);if("identity"!==a.type&&!r(s,a)){s.push(a);var o,u=n.scales,c=1===u.length?a.dim:a.dim+"*"+u[1].dim,l=t.get("chart"),h=l.get("options").filters;h&&h[c]&&(o=h[c]),e.addLegend(a,n,t,o)}})}),!s.length&&a.length>1){var o=[];h.each(a,function(t){var e=i(t,n);e.length&&o.push({name:t.alias||t.dim,color:e[0].getDefaultValue("color"),geoms:e})}),e.addMixedLegend(o)}e.alignLegends()},_renderTooltip:function(){var t=this.get("options"),e=this.get("tooltipAssist");h.mix(e.cfg,t.tooltip),e.cfg.visible&&e.renderTooltip()},legend:function(t,e){var n=!0,i={};return h.isBoolean(t)&&(n=t),h.isObject(t)?i=t:i[t]=e,i.visible=n,this._setOptions("legends",i),this},tooltip:function(t,e){return h.isObject(t)?(e=t,e.visible=!0):(e||(e={}),e.visible=t),this._setOptions("tooltip",e),this},facet:function(t,e){var n=h.isString(t)?[t]:t;return e||(e={}),e.dims=n,this._setOptions("facet",e),this},changeSize:function(t,e){var n=this,i=n.get("backCanvas"),r=n.get("canvas"),a=n.get("frontCanvas");i.changeSize(t,e),r.changeSize(t,e),a.changeSize(t,e),n.set("width",t),n.set("height",e);var s=n.get("backPlotBg");s.repaint();var o=s.get("plotRange");n.set("region",{start:o.start,end:o.end});var u=n.get("views");return h.each(u,function(t){var e=n._getRegion(t);t.set("region",e)}),n.repaint(),n},destroy:function(){if(!this.destroyed){var t=this.get("container");this.fire("destroy"),clearTimeout(this.get("resizeTimer")),this.clear(),this.get("backCanvas").destroy(),this.get("canvas").destroy(),this.get("frontCanvas").destroy(),this.events={},this._attrs={},this.destroyed=!0,t.parentNode.removeChild(t),window.removeEventListener("resize",h.getWrapBehavior(this,"_initForceFitEvent"))}},showTooltip:function(t){var e=this,n=e.getViewsByPoint(t);if(n.length){var i=e.get("tooltipAssist");i.showTooltip(t,n)}return e},hideTooltip:function(){var t=this.get("tooltipAssist");t.hideTooltip()},getTooltipItems:function(t){var e=this,n=e.getViewsByPoint(t),i=[];return h.each(n,function(n){var r=n.getGeoms(),a=e.get("tooltipAssist"),s=a.cfg&&a.cfg.map;h.each(r,function(e){var n=e.get("frames"),r=[];h.each(n,function(n){var i=e.findPoint(t,n);if(i){var a=e.getTipItems(i,s);r=r.concat(a)}}),i=i.concat(r)})}),i},forceFit:function(){var t=this.get("container"),e=h.getWidth(t),n=this.get("height");e!==this.get("width")&&this.changeSize(e,n)},setMode:function(t){var e=this.get("eventAssist");return t===!1?e.selectable=!1:"select"===t&&(e.selectable=!0),this},select:function(t){var e=this.get("eventAssist");return e.selectMode=t,this},toImage:function(){var t=this.get("frontCanvas"),e=this.get("canvas"),n=this.get("backCanvas"),i=n.get("el"),r=i.getContext("2d");r.drawImage(e.get("el"),0,0),r.drawImage(t.get("el"),0,0);var a=i.toDataURL("image/png");return n.draw(),a},downloadImage:function(t){var e=this.toImage(),n=document.createElement("a");return n.download=(t||"chart")+".png",n.href=e.replace("image/png","image/octet-stream"),n.click(),e}}),t.exports=x},function(t,e,n){"use strict";var i=n(1),r=n(4),a=function(t){i.mix(this,t),this._init()};i.augment(a,{options:{},_init:function(){var t=this.options.adjusts;t&&(i.each(t,function(e,n){t[n]=i.ucfirst(e)}),this.options.adjusts=t)},_setOptions:function(t,e){var n=this.options;n[t]=i.mix({},n[t],e)},_getDefaultShapes:function(t){var e=/[A-Z].*$/;return t=t.replace(e),r.shapes[t]},position:function(t){return this._setOptions("position",{field:t}),this},color:function(t,e){var n={};return n.field=t,e?i.isFunction(e)?n.callback=e:n.colors=e:n.colors="heatmap"===this.options.type?r.heatmapColors:r.colors["default"],this._setOptions("color",n),this},shape:function(t,e){var n={};return n.field=t,e?i.isFunction(e)?n.callback=e:n.shapes=e:n.shapes=this._getDefaultShapes(this.options.type),this._setOptions("shape",n),this},opacity:function(t,e){var n={};return n.field=t,i.isFunction(e)&&(n.callback=e),this._setOptions("opacity",n),this},size:function(t,e,n){var r={};return r.field=t,r.min=i.isNull(n)?1:n,i.isFunction(e)?r.callback=e:r.max=e||10,this._setOptions("size",r),this},label:function(t,e,n){var r={};return r.field=t,i.isObject(e)&&(n=e,e=null),r.callback=e,r.cfg=n,this._setOptions("label",r),this},tooltip:function(t){return this.options.tooltip=t,this},style:function(t){var e=this.options;return e.style=t,this},selected:function(t,e){var n={};return t===!1?n.mode=!1:n=t===!0?e:t,this._setOptions("selected",n),this},animate:function(t){return this._setOptions("animate",t),this}}),t.exports=a},function(t,e,n){"use strict";function i(t){var e=["polar","plus","theta"];return o.inArray(e,t.type)}function r(t){var e=t.get("startAngle"),n=t.get("endAngle");return!(!o.isNull(e)&&!o.isNull(n)&&n-e<2*Math.PI)}function a(t,e){var n=!!t[e];return n||o.each(t,function(t,i){var r=i.split("*");if(r.indexOf(e)!==-1)return n=!0,!1}),n}function s(t){for(var e=t[0].min,n=t[0].max,i=1;i<t.length;i++){var r=t[i];e>r.min&&(e=r.min),n<r.max&&(n=r.max)}return[e,n]}var o=n(1),u=n(2),c=n(307),l=n(111),h=n(4),f=n(296);t.exports={_renderFacets:function(t){var e=this;e._setScaleOptions(),e._initPlot(),e._createCoord(),e._initAttrs();var n=e._filterData(),i=new f({chart:e}),r=i.generateFacets(n,t),a=[];o.each(r,function(t){t._createCoord();var e=t._filterData();e=t._generateGeoms(e),a=a.concat(e)}),o.each(r,function(t){t._processCatScales(a)}),a=[],o.each(r,function(t){var e=t._numericAndAdjust();a=a.concat(e)}),o.each(r,function(t){t._processLinearScales(a)}),this.set("facets",r)},_renderView:function(){this._initPlot(),this._createCoord(),this._initAttrs();var t=this._filterData();t=this._generateGeoms(t),this._processCatScales(t);var e=this._numericAndAdjust();this._processLinearScales(e)},_getIdDims:function(t){var e=this.get("data"),n=[];return e.names.forEach(function(e){t[e]&&t[e].key===!0&&n.push(e)}),n},_setScaleOptions:function(){var t=this.get("options"),e=t.scales;if(e){var n=this._getIdDims(e);this.set("idDims",n);var i=this.get("scaleAssist");i.defs=o.mix({},!0,i.defs,e)}},_initData:function(t,e){if(t){if(!(t instanceof u)){if(e&&t.length){var n=t[0];o.each(n,function(t,n){e.indexOf(n)===-1&&e.push(n)})}t=new u(t,{names:e})}this.set("data",t)}},_initPlot:function(){if(!this.get("plotContainer")){var t=this.get("canvas"),e=t.addGroup();this.set("plotContainer",e)}if(!this.get("backPlot")){var n=this.get("backCanvas"),i=n.addGroup();this.set("backPlot",i)}if(!this.get("frontPlot")){var r=this.get("frontCanvas"),a=r.addGroup();this.set("frontPlot",a)}},_createCoord:function(){var t=this.get("coordAssist"),e=this.get("region"),n=t.createCoord(e.start,e.end);if(this.get("facet")){var i=this.get("facet");"mirror"===i.type&&(1===i.rows?(n.transpose(),0===i.colIndex&&n.scale(-1,1)):1===i.rowIndex&&n.scale(1,-1))}return this.set("coord",n),n},_filterData:function(){var t=this.get("options"),e=this.get("scaleAssist"),n=this.get("data"),i=this.get("scales"),r=t.filters;return e.filterData(n,r,i)},_createGeom:function(t,e){var n=t.type,i=t.adjusts,r=this.get("viewId"),a=this.get("coord"),s=t.label;s&&(o.isObject(s)&&!s.isStat||(s={field:s}),o.mix(s,this._getScalesAndStat(s.field,n,i)));var u=t.tooltip?this._parseDims(t.tooltip,n,i).dims:null,l=null;t.animate&&(l=t.animate);var h=new c({type:n,chart:this,attrs:t.attrs,stats:this.get("stats"),scales:this.get("scales"),styleCfg:t.style,labelCfg:s,tooltipDims:u,adjusts:i,selectedCfg:t.selected,animateCfg:l});return h.set("id",r+"geom"+e),h.set("coord",a),h},_initGeoms:function(){var t=this,e=this.get("options"),n=e.geoms,i=[];return o.each(n,function(e,n){var r=t._createGeom(e,n);i.push(r)}),this.set("geoms",i),i},_generateGeoms:function(t){var e=this._initGeoms(),n=[];return o.each(e,function(e){var i=e.processData(t);e.set("frames",i),n=n.concat(i)}),n},_trainScales:function(t,e){var n=this.get("scales"),i=[];o.each(n,function(t){e(t)&&i.push(t)});var r=this.get("scaleAssist");r.trainScales(t,i)},_trainCatScales:function(t){var e=this,n=e.get("options").filters||{};e._trainScales(t,function(t){return t.isCategory&&!a(n,t.dim)})},_setCatScalesRange:function(){var t=this,e=t.get("coord"),n=t.getXScale(),a=t.getYScales(),s=[];n&&s.push(n),s=s.concat(a);var u=i(e)&&r(e),c=t.get("scaleAssist"),l=c.defs;o.each(s,function(e){if(e.isCategory&&e.values&&(!l[e.dim]||!l[e.dim].range)){var n,i=e.values.length;if(1===i)n=[.5,1];else{var r=1,a=0;if(u){var s=t.get("coordAssist");s.hasAction("transpose")?(r=h.widthRatio.multiplePie,a=1/i*r,n=[a/2,1-a/2]):n=[0,1-1/i]}else r=h.widthRatio.column,a=1/i*r,n=[a,1-a]}e.range=n}})},_processCatScales:function(t){var e=!1;o.each(this.get("geoms"),function(t){var n=t.getAttr("position");!n.stat||"tree"!==n.stat.type&&"treemap"!==n.stat.type||(e=!0)});var n;e&&(n=u.forceMerge.apply(null,t),this._trainCatScales(n));var i=this.getXScale();if(i&&"timeCat"===i.type){n=u.forceMerge.apply(null,t);var r=this.get("scaleAssist");r.trainScales(n,[i])}this._setCatScalesRange()},_numericAndAdjust:function(){var t=[],e=this.get("geoms");return o.each(e,function(e){var n=e.get("frames");
n=e.numbericFrames(n),n=e.processAdjust(n),e.set("frames",n),t=t.concat(n)}),t},_trainLinearScales:function(t){this._trainScales(t,function(t){return t.isLinear})},_processLinearScales:function(t){var e=u.forceMerge.apply(null,t);this._trainLinearScales(e)},_paint:function(){var t=this.get("geoms"),e=this.get("coord");this.fire("beforepaint",{chart:this}),o.each(t,function(t){t.paint(e,t.get("frames"),function(e){t.set("frames",e)})}),this._renderGuide(),this.getXScale()&&this._renderAxis(),this.fire("afterpaint"),this.get("plotContainer").sort()},_renderAxis:function(){var t=this.get("options");if(!t.axes||t.axes.visible!==!1){var e=this.get("axisAssist");e.container=this.get("backPlot");var n=this.getXScale(),i=this.getYScales();e.createAxis(this,n,i,t.axes)}},_renderGuide:function(){var t=this.get("guideAssist");if(t.creatGuide(),t.guides.length){if(!this.get("frontPlot")){var e=this.get("frontCanvas"),n=e.addGroup();this.set("frontPlot",n)}t.backPlot=this.get("backPlot"),t.frontPlot=this.get("frontPlot");var i=this.get("coord"),r=this.getXScale(),a=this.getYScales()[0];t.setScale(r,a),t.paint(i)}},_drawCanvas:function(){var t=this.get("options"),e=t.animate||this.get("animate"),n=this.get("groupAnimate"),i=this.get("isUpdate"),r=this.get("canvas"),a=this.get("backCanvas"),s=this.get("frontCanvas"),o=this.get("coord");e?(i?l.shapeAnimation(a,o,!0):a.draw(),l.shapeAnimation(r,o,i,n)):(r.draw(),a.draw()),s.draw()},_syncXYScales:function(){var t=this._getLinearScales("x"),e=this._getLinearScales("y"),n=s(t),i=s(e),r=this.getAllGeoms();o.each(r,function(t){var e=t.get("chart"),r=e.get("scaleAssist").defs,a=t.getAttr("position"),s=a.scales,o=s[0].dim,u=s[1].dim;r[o]&&r[o].min||(s[0].min=n[0]),r[o]&&r[o].max||(s[0].max=n[1]),r[u]&&r[u].min||(s[1].min=i[0]),r[u]&&r[u].max||(s[1].max=i[1])})},_getLinearScales:function(t){var e=[],n=this.getAllGeoms();return o.each(n,function(n){var i;"x"===t?i=n.getXScale():"y"===t&&(i=n.getYScale()),i.isLinear&&e.push(i)}),e},_renderLegends:function(){},_renderTooltip:function(){}}},function(t,e,n){"use strict";function i(t){var e=t.replace(/([a-z](?=[A-Z]))/g,"$1 ");return e.split(" ")}function r(t,e,n){var i=(t-e)/(n-e);return i>=0&&i<=1}function a(t,e){var n=!1;if(t){var i=t.type;if("theta"===i){var a=t.get("start"),s=t.get("end");n=r(e.x,a.x,s.x)&&r(e.y,a.y,s.y)}else{var o=t.invert(e);n=o.x>=0&&o.y>=0&&o.x<=1&&o.y<=1}}return n}function s(t,e){return function(n){var i=this,r=[];e&&(r=r.concat(e)),n&&(r=r.concat(n));var a=i.get("options");a.geoms||(a.geoms=[]);var s={type:t,adjusts:r};a.geoms.push(s);var o=new g({options:s});return o}}var o=n(1),u=n(10),c=n(2),l=n(4),h=n(109),f=n(112),g=n(303),p=n(301),d=n(304),v=["pointStack","pointJitter","pointDodge","intervalStack","intervalDodge","intervalSymmetric","areaStack","schemaDodge"],m=function y(t){y.superclass.constructor.call(this,t),this._init()};m.ATTRS={start:{x:0,y:0},end:{x:1,y:1},tooltipEnable:!0,id:"",data:null,geoms:[],scales:{},animate:l.animate,views:[],facets:[],syncXYScales:!1,options:{},stats:[]},o.extend(m,u),o.augment(m,p,d,{_init:function(){var t=this.get("options"),e=this.get("data");o.isNull(e)&&(e=[],this.set("data",[])),this._initAssists(),this._initData(e,t.appendFields),this.set("views",[]),this.set("geoms",[]),this.set("scales",{})},_initAssists:function(){h.initScale(this),h.initCoord(this),h.initAxis(this),h.initGuide(this)},_setOptions:function(t,e){var n=this.get("options");n[t]=o.mix({},n[t],e),this.set("options",n)},_getRegion:function(t){var e=this.get("plotRange"),n=t.get("start"),i=t.get("end"),r=e.tl,a=e.br,s={x:n.x*(a.x-r.x)+r.x,y:i.y*(a.y-r.y)+r.y},o={x:i.x*(a.x-r.x)+r.x,y:n.y*(a.y-r.y)+r.y};return{start:s,end:o}},_clearInner:function(t){var e=this.get("geoms");return e.length&&o.each(e,function(t){t.destroy()}),this.set("geoms",[]),this.get("guideAssist").reset(),this.get("legendAssist")&&this.get("legendAssist").clear(),this.get("tooltipAssist")&&this.get("tooltipAssist").clear(),this.get("plotContainer")&&this.get("plotContainer").clear(),this.get("backPlot")&&this.get("backPlot").clear(),this.get("frontPlot")&&this.get("frontPlot").clear(),t&&(this.get("guideAssist").clear(),this.set("scales",{})),this},source:function(t,e,n){var i=this.get("options");return i.appendFields=n,e&&this._setOptions("scales",e),this._initData(t,n),this},col:function(t,e){var n=this.get("options");return n.scales||(n.scales={}),n.scales[t]=e,this},cols:function(t){var e=this.get("options");return e.scales||(e.scales={}),o.mix(e.scales,t),this},coord:function(t,e){this._setOptions("coord",{type:t,cfg:e,actions:[]});var n=this.get("coordAssist");return n.resetActions(),n},axis:function(t,e){var n=!0,i=this.get("options");i.axes||(i.axes={});var r=i.axes;return t===!1?n=!1:r[t]=e,r.visible=n,this},guide:function(){return this.get("guideAssist")},filter:function(t,e){var n=this.get("options");n.filters||(n.filters={});var i=n.filters;return i[t]=e,this},tooltip:function(t){return this.set("tooltipEnable",t),this},animate:function(t){var e=this.get("options");return e.animate=t,this.set("animate",t),this},createView:function(t){var e=this.get("views"),n=new m(t);n.get("region")||n.set("region",this._getRegion(n)),n.set("backCanvas",this.get("backCanvas")),n.set("frontCanvas",this.get("frontCanvas")),n.set("canvas",this.get("canvas")),n.set("viewId",this.get("viewId")+e.length),n.set("parent",this),n.set("animate",this.get("animate")),n.set("syncXYScales",this.get("syncXYScales")),t&&t.id||n.set("id","view"+e.length);var i=this.get("options"),r=t&&t.options||n.get("options");return r.scales=r.scales||{},r.scales=o.mix({},i.scales,r.scales),r.axes=r.axes||{},r.axes=o.mix({},i.axes,r.axes),r.coord=r.coord||{},r.coord=o.mix({},i.coord,r.coord),r.tooltip===!1&&n.set("tooltipEnable",!1),e.push(n),this.set("views",e),n},removeView:function(t){for(var e=[],n=this.get("views"),i=null,r=0;r<n.length;r++)i=n[r],i!==t?e.push(i):i.clear();this.set("views",e)},render:function(){var t,e=this.get("options");return e.facet?(this._renderFacets(e.facet),t=this.get("views")):(t=[this].concat(this.get("views")),o.each(t,function(t){t._setScaleOptions(),t._renderView()}),this.get("syncXYScales")&&this._syncXYScales()),o.each(t,function(t){t._paint()}),(!e.legends||e.legends&&e.legends.visible!==!1)&&this._renderLegends(e.legends),this._renderTooltip(),this._drawCanvas(),this},changeData:function(t){this._initData(t),this.set("scales",{});var e=this;return this.get("syncXYScales")&&this.get("parent")&&(e=this.get("parent")),e.repaint(),this},clear:function(){var t=this.get("views");t.length>0&&(o.each(t,function(t){t._clearInner(!0)}),this.set("views",[]));var e=this.get("options");return e.geoms=[],this._clearInner(!0),!this.get("parent")&&this.get("frontCanvas").clear(),this.get("backCanvas").draw(),this.get("canvas").draw(),this.get("frontCanvas").draw(),this.set("plotContainer",null),this.set("backPlot",null),this.set("frontPlot",null),this.set("facets",[]),this},repaint:function(){var t=this.get("views");return t.length>0&&o.each(t,function(t){t._clearInner(!1)}),this._clearInner(!1),this.set("isUpdate",!0),this.set("stats",[]),this.render(),this},getActiveShape:function(){var t=this,e=t.get("geoms"),n=null;return o.each(e,function(t){var e=t.get("activeShapes");if(e&&e.length)return n=e[0],!1}),n},getSnapRecords:function(t){var e=this,n=e.get("geoms"),i=[];return o.each(n,function(e){var n,r=e.get("frames");if("point"===e.get("type")){var a=c.merge.apply(null,r);n=e.findPoint(t,a),n&&i.push(n)}else o.each(r,function(r){n=e.findPoint(t,r),n&&i.push(n)})}),i},getPosition:function(t){var e,n,i,r=this,a=r.get("coord"),s=r.getXScale();s&&(i=s.dim,e=s.scale(t[i]));var u=this.get("scales");return o.each(u,function(e){if(e&&e.dim!==i&&!o.isNull(t[e.dim])){var r=e.dim;return void(n=e.scale(t[r]))}}),a.convert({x:e,y:n})},getXScale:function(){var t=this.get("geoms"),e=null;return t.length&&(e=t[0].getXScale()),e},getYScales:function(){var t=this.get("geoms"),e=[];return o.each(t,function(t){var n=t.getYScale();n&&o.indexOf(e,n)===-1&&e.push(n)}),e},getViews:function(){return this.get("views")},getView:function(t){var e=null,n=this.get("views");return o.each(n,function(n){if(n.get("id")===t)return e=n,!1}),e},getGeoms:function(){return this.get("geoms")},getAllGeoms:function(){var t=[];t=t.concat(this.getGeoms());var e=this.get("views");return o.each(e,function(e){t=t.concat(e.getGeoms())}),t},getScale:function(t){var e=this.get("scales");return e[t]},createScale:function(t,e){var n=this.get("data"),i=this.get("scaleAssist"),r=this.get("scales");return r[t]||(r[t]=i.createScale(t,n,e)),r[t]},getViewsByPoint:function(t){var e=[],n=this.get("views");return a(this.get("coord"),t)&&e.push(this),o.each(n,function(n){a(n.get("coord"),t)&&e.push(n)}),e}});for(var x in f)f.hasOwnProperty(x)&&(x=x.toLowerCase(),m.prototype[x]=s(x));o.each(v,function(t){var e=i(t),n=e[0],r=o.ucfirst(e[1]);"pointDodge"===t&&(r=["Dodge"]),m.prototype[t]=s(n,r)}),t.exports=m},function(t,e,n){"use strict";var i=n(1),r=n(5),a=n(119),s=function o(t){o.superclass.constructor.call(this,t)};i.extend(s,r.Group),i.mixin(s,[a.Group]),i.augment(s,{isItemActived:function(t){return t.get("actived")},setItemActived:function(t,e){t.set("actived",e)}}),t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(10),a=n(313),s=n(315),o=n(317),u=n(318),c=n(316),l=n(306),h=n(112),f=["size","shape","color"],g=n(111),p=n(4),d=function v(t){v.superclass.constructor.call(this,t),this._init()};d.ATTRS={type:"point",chart:null,attrs:null,stats:null,scales:null,styleCfg:null,labelCfg:null,animate:p.animate},i.extend(d,r),i.mixin(d,[c,u,s,o]),i.augment(d,{_init:function(){var t=this.get("chart"),e=t.get("plotContainer");e||(e=t.get("canvas").addGroup());var n=e.addGroup({zIndex:10});this.set("container",n)},_addLabels:function(t){var e=this,n=e.get("type"),r=e.get("coord"),s=a.getLabelsClass(r.type,n),o=this.get("id"),u=e.get("container"),c=u.addGroup(s,{id:o,labelsCfg:e.get("labelCfg"),coord:r,geom:e,geomType:n}),l=[];i.each(t,function(t){l=l.concat(t.toJSON())}),c.showLabels(l),e.set("labelGroup",c)},_draw:function(t){var e=this.get("group"),n=this.get("type"),r=this.get("id"),a=this._getGroupScales(),s=this.get("chart").get("idDims");n=i.ucfirst(n);var o=new h[n]({id:r,container:e,attrs:this.get("attrs"),styleCfg:this.get("styleCfg"),adjusts:this.get("adjusts"),frames:t,groupScales:a,idDims:s}),u=o.draw(t);return this.set("geomShape",o.get("shapeObj")),this.set("shapeType",o.get("shapeType")),this.set("shapeDatas",o.get("shapeDatas")),u},paint:function(t,e,n){function i(){var t=r._draw(e);n&&n(t),r.get("labelCfg")&&r._addLabels(t)}var r=this;if("map"===t.type){var a=r.get("scales"),s=a["..long"],o=a["..lant"];t.set("originMin",[s.min,o.min]),t.set("originMax",[s.max,o.max]),r.set("coord",t)}var u=r.getAttr("position");u.coord=t;var c=r.get("container"),h=c.addGroup(l,{geom:r,coord:t,multipleActive:r.isShareTooltip(),capture:!0});return h.setMatrix(t.get("matrix").clone()),r.set("group",h),r._groupAnimate(i),r},_groupAnimate:function(t){var e=this,n=e.get("chart"),i=n.get("isUpdate"),r=n.get("animate")||e.get("animate"),a=e.get("animateCfg"),s=a&&a.appear&&a.appear.animation;if(!i&&r&&e._isGroupAnimation(s)){n.set("groupAnimate",!0);var o=g.getGroupAnimation({geom:e,animateCfg:a.appear,fn:function(){t()}});o?o.start():t()}else t()},getDefaultValue:function(t){var e=this,n=e.get(t),i=e.getAttr(t);if(i){var r=i.getScale(t);"identity"===r.type&&(n=r.value)}return n},getLegendAttr:function(){var t=this,e=t.get("attrs"),n=[];return i.each(e,function(t){i.indexOf(f,t.type)!==-1&&n.push(t)}),n},getScales:function(){return this.get("scales")},destroy:function(){var t=this.get("group");t&&!t.get("destroyed")&&(t.clear(),t.remove()),this.clearShapeActived(),this._attrs={},this.events={}},getXDistance:function(){var t,e=this,n=e.getXScale();if(n.isCategory)t=1;else{var i=n.values,r=i.length,a=Math.min.apply(null,i),s=Math.max.apply(null,i);t=(s-a)/(r-1)}return t},getAttr:function(t){var e=this.get("attrs"),n=null;return i.each(e,function(e){e.type===t&&(n=e)}),n},getXDim:function(){var t=this.getXScale();return t.dim},getYDim:function(){var t=this.getYScale();return t?t.dim:"y"},getXScale:function(){return this.getAttr("position").scales[0]},getYScale:function(){return this.getAttr("position").scales[1]},isInCircle:function(){return this.get("coord").isPolar},getData:function(){return this.get("shapeDatas")},setVisible:function(t){var e=this.get("container");e.set("visible",t)},_isGroupAnimation:function(t){return t&&"group"===t.slice(0,5)}}),t.exports=d},function(t,e,n){"use strict";var i=n(1),r=n(174),a=n(2),s=n(22),o=function u(t){u.superclass.constructor.call(this,t)};o.ATTRS={type:"contour"},i.extend(o,s.Path),i.augment(o,{_beql:function(t,e){return Math.abs(t-e)<1e-6},_getZScale:function(){return this.getAttr("position").getScale("z")},_getData:function(t){var e=this,n=[],r=e.getAttr("position"),s=r.getDims(),o=s[0],u=s[1],c=s[2],l=a.values(t,o),h=a.values(t,u),f=0,g=0,p=null;return i.each(l,function(t){p&&e._beql(p,t)||f++,p=t}),p=null,i.each(h,function(t){p&&e._beql(p,t)||g++,p=t}),t.each(function(t,e){var i=Math.floor(e/g),r=Math.floor(e%g),a=[t[o],t[u],t[c]];Array.isArray(n[i])||(n[i]=[]),n[i][r]=a}),n},processFrames:function(t){var e=this,n=e.getXDim(),s=e.getYDim(),o=e._getZScale(),u=o.dim,c=a.merge.apply(null,t),l=c.rowObject(0),h=e._getData(c),f=o.ticks,g=r(h,f),p=[];return i.each(g,function(t){var e=t.path,r=t.value,o=[];i.each(e,function(t){var e=i.mix({},l);e[n]=t[0],e[s]=t[1],e[u]=r,o.push(e)}),p.push(new a(o))}),p}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(22),a=function s(t){s.superclass.constructor.call(this,t)};a.ATTRS={type:"edge"},i.extend(a,r.Base),t.exports=a},function(t,e,n){"use strict";var i=n(1),r=n(200),a=n(22),s=n(4),o="_origin",u=function c(t){c.superclass.constructor.call(this,t)};u.ATTRS={type:"heatmap"},i.extend(u,a.Base),i.augment(u,{_getHeatmapData:function(t){var e=this,n=[],i=e.getAttr("color"),r=i.getDims(),a=r[0];return t.each(function(t){var e=[t.x,t.y,t[o][a]];n.push(e)}),n},_getImageRegion:function(){var t=this,e=t.getCoord(),n=e.get("start"),i=e.get("end"),r={x:n.x,y:i.y,width:i.x-n.x,height:n.y-i.y};return r},_getColorScale:function(){return this.getAttr("color").getScale("color")},_getRadius:function(){var t=this,e=t.getAttr("position"),n=t.getCoord(),i=e.stat,r=null;if(i){var a=i.bandWidth;r=Math.min(n.getWidth(),n.getHeight())*a}return 2*r},drawFrame:function(t){var e=this,n=e.get("container"),a=e._getHeatmapData(t),o=e._getImageRegion(),u=e._getColorScale(),c=t.rowObject(0).size,l=e.getAttr("color"),h=i.mix({min:u.min,max:u.max,formatter:function(t){return u.scale(t)}},s.heatmap,o);h.colors=[l.mappingValues(u.invert(0)).join(""),l.mappingValues(u.invert(.25)).join(""),l.mappingValues(u.invert(.5)).join(""),l.mappingValues(u.invert(.75)).join(""),l.mappingValues(u.invert(1)).join("")];var f=c?parseInt(c,10):e._getRadius();f&&(h.radius=f);var g=new r(h),p=g.getData(a),d=document.createElement("canvas"),v=d.getContext("2d");d.width=o.width,d.height=o.height,v.putImageData(p,0,0);var m=n.addShape("Image",{attrs:o});m.attr("img",d),m.animateType="heatmap",m.id=this.get("viewId")+"heatmap"}}),t.exports=u},function(t,e,n){"use strict";var i=n(1),r=n(22),a=n(113),s="_origin",o=function u(t){u.superclass.constructor.call(this,t)};o.ATTRS={adjusts:null,frames:null},i.extend(o,r.Interval),i.mixin(o,[a]),i.augment(o,{processFrames:function(t){var e=this.getCoord(),n=e.type,r=this.get("adjusts");if(("theta"===n||"polar"===n&&e.isTransposed)&&"Stack"===r.toString()){var a=[],o=this.getYDim();return i.each(t,function(t){var e=t.colArray(s);e[0][o]>=0&&a.push(t)}),a}return t}}),t.exports=o},function(t,e,n){"use strict";var i=n(1),r=n(22),a=n(113),s=function o(t){o.superclass.constructor.call(this,t)};s.ATTRS={adjusts:null,frames:null},i.extend(s,r.Schema),i.mixin(s,[a]),t.exports=s},function(t,e,n){"use strict";var i=n(115),r=n(114),a=n(314),s={getLabelsClass:function(t){var e=i;return"polar"===t||"plus"===t?e=r:"theta"===t&&(e=a),e}};t.exports=s},function(t,e,n){"use strict";function i(t,e,n){return{x:t.x+n*Math.cos(e),y:t.y+n*Math.sin(e)}}function r(t,e,n,i,r){var a,s=!0,o=n.start,u=n.end,c=Math.min(o.y,u.y),l=Math.abs(o.y-u.y),h=0,f=Number.MIN_VALUE,g=t.map(function(t){return t.y>h&&(h=t.y),t.y<f&&(f=t.y),{size:e,targets:[t.y-c]}});for(f-=c,h-c>l&&(l=h-c);s;)for(g.forEach(function(t){var e=(Math.min.apply(f,t.targets)+Math.max.apply(f,t.targets))/2;t.pos=Math.min(Math.max(f,e-t.size/2),l-t.size)}),s=!1,a=g.length;a--;)if(a>0){var p=g[a-1],d=g[a];p.pos+p.size>d.pos&&(p.size+=d.size,p.targets=p.targets.concat(d.targets),p.pos+p.size>l&&(p.pos=l-p.size),g.splice(a,1),s=!0)}a=0,g.forEach(function(n){var i=c+e/2;n.targets.forEach(function(){t[a].y=n.pos+i,i+=e,a++})}),t.forEach(function(t){var e=t.r*t.r,n=Math.pow(Math.abs(t.y-i.y),2);if(e<n)t.x=i.x;else{var a=Math.sqrt(e-n);r?t.x=i.x+a:t.x=i.x-a}})}var a=n(1),s=n(114),o=n(17),u=n(4),c=5,l=function h(t){h.superclass.constructor.call(this,t)};l.CFG={labels:u.thetaLabels},a.extend(l,s),a.augment(l,{adjustItems:function(t){var e=this,n=e.getDefaultOffset();return n>0&&(t=e._distribute(t,n)),t},getGlobalLabelCfg:function(){return a.mix({},u.thetaLabels)},_distribute:function(t,e){var n=this,i=n.get("coord"),a=i.getRadius(),s=n.get("labels").labelHeight,o=i.getCenter(),u=a+e,c=2*u+2*s,l={start:i.get("start"),end:i.get("end")},h=n.get("geom");if(h){var f=h.get("chart");l=f.get("plotRange"),l||(l=f.get("region"))}var g=[[],[]];return t.forEach(function(t){"right"===t.textAlign?g[0].push(t):g[1].push(t)}),g.forEach(function(t,e){var n=parseInt(c/s,10);t.length>n&&(t.sort(function(t,e){return e["..percent"]-t["..percent"]}),t.splice(n,t.length-n)),t.sort(function(t,e){return t.y-e.y}),r(t,s,l,o,e)}),g[0].concat(g[1])},drawLines:function(t,e){var n=this,i=n.getDefaultOffset();i>0&&a.each(t,function(t){n.lineToLabel(t,e)})},lineToLabel:function(t,e){var n=this,r=n.get("coord"),s=r.getRadius(),o=n.getDefaultOffset(),u=t.orignAngle||t.angle,l=r.getCenter(),h=i(l,u,s+c/2),f=i(l,u,s+o/2),g=n.get("lineGroup");g||(g=n.addGroup({elCls:"x-line-group",animate:!1}),n.set("lineGroup",g)),g.addShape("path",{attrs:a.mix({path:["M"+h.x,h.y+" Q"+f.x,f.y+" "+t.x,t.y].join(","),fill:null,stroke:t.color},e)})},getLabelRotate:function(t,e){var n;return e<0&&(n=180*t/Math.PI,n>90&&(n-=180),n<-90&&(n+=180)),n/180*Math.PI},getLabelAlign:function(t){var e,n=this,i=n.get("coord"),r=i.getCenter();e=t.angle<=Math.PI/2&&t.x>=r.x?"left":"right";var a=n.getDefaultOffset();return a<=0&&(e="right"===e?"left":"right"),e},getArcPoint:function(t){return t},getPointAngle:function(t){var e,n=this,i=n.get("coord"),r={x:a.isArray(t.x)?t.x[0]:t.x,y:t.y[0]},s={x:a.isArray(t.x)?t.x[1]:t.x,y:t.y[1]},u=o.getPointAngle(i,r);if(t.points&&t.points[0].y===t.points[1].y)e=u;else{var c=o.getPointAngle(i,s);u>=c&&(c+=2*Math.PI),e=u+(c-u)/2}return e},getCirclePoint:function(t,e){var n=this,r=n.get("coord"),a=r.getCenter(),s=r.getRadius()+e,o=i(a,t,s);return o.angle=t,o.r=s,o}}),t.exports=l},function(t,e,n){"use strict";function i(t,e){if(!t)return!0;if(t.length!==e.length)return!0;var n=!1;return a.each(e,function(e,i){if(e!==t[i])return n=!0,!1}),n}function r(t,e){for(var n=t.points,i=n[0].x,r=n[0].y,a=n[0].x,s=n[0].y,o=0;o<n.length;o++){var u=n[o].x,c=n[o].y;u<=i&&(i=u),u>=a&&(a=u),c<=r&&(r=c),c>=s&&(s=c)}var l=e.x>=i&&e.x<=a&&e.y>=r&&e.y<=s;return l}var a=n(1),s=n(2),o=Math.abs,u="_origin",c=function(){};c.ATTRS={localRefresh:!1,allowActiveShape:!0,snapAll:!0,snapDistance:10},a.augment(c,{isAllowActiveShape:function(){var t=this.get("type");return!a.inArray(["contour","path","line","area"],t)&&this.get("allowActiveShape")},isSnapAll:function(){var t=this.get("type");return"interval"!==t&&"schema"!==t&&this.get("snapAll")},setActiveByPoint:function(t){var e=this,n=e.get("coord"),r=null;if(!e.isAllowActiveShape())return[];if(e.isShareTooltip())r=e._getSharedShapes(t,n);else{r=[];var a=e.getSingleShape(t);a&&a.get("visible")&&r.push(a)}var s=e.get("preShapes");return i(s,r)&&e.setShapesActive(r),e.set("preShapes",r),r},_getSharedShapes:function(t){var e=this,n=e.get("group"),i=[];if(n){var r=e.getXDim(),s=n.get("children");a.each(s,function(e){var n=e.get("origin");if(e.get("visible")&&n){var s=n[u][r],o=t[u][r];(a.isArray(s)&&a.isArray(o)&&a.equalsArray(s,o)||s===o)&&i.push(e)}})}return i},getSingleShape:function(t){var e,n=this,i=null,r=s.forceMerge.apply(null,n.get("frames"));if("contour"===n.get("type"))return e=n.findPoint(t,r),a.length(e)&&(i={origin:e,get:function(t){return this[t]}}),i;var o=n.get("group"),u=n.get("coord"),c=o.get("canvas"),l=c.get("pixelRatio");if(o){var h=o.get("children"),f=[];if(h.length>30){var g=s.max(r,"size");a.each(h,function(e){n.isSnapPoint(t,e,u,g)&&f.push(e)})}else f=h;for(var p=f.length-1;p>=0;p--){var d=f[p];if(d.get("origin")&&d.isHit(t.x*l,t.y*l)){i=d;break}}}return i},_isSnapPointOfPolygon:function(t,e,n){var i,s=this,c=s.get("snapDistance"),l=s.getXScale(),h=s.getYScale(),f=e[u],g=n.invert(t);if(a.isArray(e.x)&&a.isArray(e.y))i=r(e,g);else{var p=n.trans(e.x,e.y,1),d=!1,v=!1;d=l.isCategory?l.translate(l.invert(g.x))===l.translate(f[l.dim]):o(p.x-t.x)<c,v=h&&h.isCategory?h.translate(h.invert(g.y))===h.translate(f[h.dim]):o(p.y-t.y)<c,i=d&&v}return i},isSnapPoint:function(t,e,n,i){var r=this,s=e.get("origin");if(!s)return!1;var c,l=i||this.get("snapDistance"),h=r.get("type"),f=!1;if("polygon"===h)f=r._isSnapPointOfPolygon(t,s,n);else if("edge"===h){t=n.reverse(t.x,t.y,1),c=e.getBBox();var g=c.minX,p=c.maxX,d=c.minY,v=c.maxY;f=t.x>=g&&t.x<=p&&t.y>=d&&t.y<=v}else if(this.isSnapAll()){var m=s.y;a.isArray(s.y)&&(m=(m[0]+m[m.length-1])/2);var x=n.trans(s.x,m,1);f=o(x.x-t.x)<l&&o(x.y-t.y)<l}else{var y=n.invert(t),_=r.getXScale(),S=_.dim,b=_.translate(_.invert(y.x));l=r.getXDistance(),f=o(b-_.translate(s[u][S]))<l}return f},setShapesActive:function(t){var e=this;if(e.isAllowActiveShape()){var n=e.get("coord"),i=e.get("activeGroup"),r=e.get("chart"),s=r.get("frontCanvas");i?i.clear():(i=s.addGroup(),e.set("activeGroup",i)),i.setMatrix(n.get("matrix").clone()),a.each(t,function(t){t.get("visible")&&e._setActiveShape(t,i)}),e.set("activeShapes",t),s.sort()}},_setLabelsVisible:function(t,e){var n=this;if(t.get("gLabel"))t.get("gLabel").set("visible",e);else{var i=n.get("labelCfg");if(i&&i.scales&&i.scales.length>0){var r=n.getXDim(),s=n.getYDim(),o=t.get("origin")._origin,u=n.get("labelGroup"),c=u.get("labelsGroup").get("children");a.each(c,function(n){var i=n.get("attrs").point;i[r]===o[r]&&i[s]===o[s]&&(n.set("visible",e),t.set("gLabel",n))})}}},setShapesFiltered:function(t){var e=this,n=e.get("chart"),i=n.get("canvas");a.each(t,function(t){t.get("visible")?e._setLabelsVisible(t,!0):e._setLabelsVisible(t,!1)}),i.draw()},_setActiveShape:function(t,e){var n,i=this,r=t.get("type"),s=t.get("origin"),o=s.shape||i.getDefaultValue("shape");a.isArray(o)&&(o=o[0]);var u=i.get("geomShape"),c=u[o]||u,l=c.getActiveCfg(o,s);n=a.mix({},l,{fill:"white",fillOpacity:.15,clip:null});var h=a.mix({},t.__attrs,n),f=e.addShape(r,{attrs:h});f.setMatrix(t.getMatrix()),f.set("origin",s)},clearShapeActived:function(){var t=this,e=t.get("activeGroup");e&&e.clear(),t.set("activeShapes",null),t.set("preShapes",null)}}),t.exports=c},function(t,e,n){"use strict";function i(t){return t.binWidth||t.bandWidth}var r=n(1),a=n(2),s=n(122),o=n(4),u=["size","shape","color"],c="_origin",l=["Dodge","Jitter","Stack","Symmetric"],h=function(){};h.ATTRS={adjusts:null},r.augment(h,{_getScale:function(t){var e=this,n=e.get("scales"),i=null;return r.each(n,function(e){if(e.dim===t)return i=e,!1}),i},_getGroupScales:function(){var t=this,e=[],n=t.get("attrs");return r.each(n,function(t){if(u.indexOf(t.type)!==-1){var n=t.scales;r.each(n,function(t){t.isCategory&&r.indexOf(e,t)===-1&&e.push(t)})}}),e},_saveOriginData:function(t){return r.each(t,function(t){var e=t.toJSON();t.addCol(c,e)}),t},_setStatRange:function(t){var e=this,n=t.getDims(),i=[];r.each(n,function(n){var r=e._getScale(n);r.isCategory||"identity"===r.type||(isNaN(r.min)||isNaN(r.max)||t.setRange(n,{min:r.min,max:r.max}),"bin"===t.type&&i.push(n))}),i.length&&(t.binDims=i)},_getBinStat:function(t){var e=null;if(i(t))e=t;else if(t.stat){for(var n=t.stat;n&&!i(n);)n=n.stat;n&&i(n)&&(e=n)}return e},_execStat:function(t,e){var n=this,i=n._getBinStat(t);return i&&n._setStatRange(i),(t.isRegression||t.setRange)&&n._setStatRange(t),t.exec(e)},_execStats:function(t){var e=this,n=t;if(r.isNull(t)||t&&0===t.length)return n;var i=e.get("attrs"),s=e.getAttr("position"),o=s.stat,u=[];r.each(i,function(t){"position"!==t.type&&t.stat&&u.push(t.stat)}),o&&(n=e._execStat(o,n));var c=e.get("labelCfg");if(c&&c.stat&&(n=e._execStat(c.stat,n)),u.length){var l=[],h=s.getDims();r.each(n,function(t){l=l.concat(a.group(t,h))}),n=l,r.each(u,function(t){n=e._execStat(t,n)}),n=[a.merge.apply(this,n)]}return n},_getGroupDims:function(){var t=[],e=this._getGroupScales();return r.each(e,function(e){t.push(e.dim)}),t},_groupFrames:function(t){var e=this._getGroupDims();return a.group(t,e)},_filterNullValue:function(t){var e=this.getXDim();return a.filter(t,function(t){return r.isArray(t[e])||!r.isNull(t[e])})},_createFrame:function(t){var e=this,n=e.get("scales"),i=t.clone();return r.each(n,function(e){var n=e.dim;if(!t.contains(n)){var r,s=!e.value&&o.scales[n]?0:e.value;r=a.Array.repeat(s,t.rowCount()),i.addCol(n,r)}}),i},processData:function(t){var e=this._createFrame(t);return e=this._filterNullValue(e),t=this._groupFrames(e),t=this._execStats(t),t=this._saveOriginData(t)},numbericFrames:function(t){var e=this,n=e.get("scales");return r.each(t,function(t){r.each(n,function(e){var n=e.dim;if(e.isCategory||"time"===e.type){var i=t.colArray(n);r.each(i,function(t,n){i[n]=e.translate(t)}),t.colReplace(n,i)}})}),t},_paddingNullValue:function(t){var e=this;if(t.length){var n=e.getXDim(),i=e.getYDim(),s=a.merge.apply(null,t),o=a.values(s,n);r.each(t,function(t){if(t.rowCount()<o.length){var e={},a=t.rowObject(0),s=t.colArray(n);r.each(s,function(t){e[t]=!0});var u=!0;r.each(o,function(s){if(e[s])u=!0;else if(u===!0){var o=r.mix({},a);o[n]=s,o[i]=null;var c={};c[n]=s,o[i]=null,o._origin=c,t.addRow(o),u=!1}})}})}},processAdjust:function(t){var e=this,n=e.get("adjusts");if(t.length&&!r.isNull(n)){var i=e.get("type"),a=e.getYScale(),o=e.getXScale();"point"!==i||"Dodge"!==n[0]||a||n.push("Stack"),r.each(n,function(n){if(!r.inArray(l,n))throw new Error(r.ucfirst(n)+" is not supported, please use "+l.toString());var i={};if("Dodge"===n){var u=[];if(o.isCategory)u.push("x");else{if(a)throw new Error("dodge is not support linear attribute, please use category attribute!");u.push("y")}var c=e._getGroupDims();i={xDim:e.getXDim(),yDim:a?a.dim:null,adjustNames:u,groupDims:c},e.isInCircle()&&(i.dodgeRatio=1,i.marginRatio=0)}else if("Stack"===n){var h=e.getDefaultValue("size")||3;i={xDim:e.getXDim(),size:h},"area"===e.get("type")&&e._paddingNullValue(t);var f=e.get("coord");a&&"..y"!==a.dim?i.yDim=e.getYDim():i.height=f.getHeight(),f.isTransposed||(i.reverseOrder=!0)}else i={xDim:e.getXDim(),yDim:e.getYDim()};var g=new s[n](i);"Stack"===n&&a&&"..y"===a.dim?(g.yDim="..y",t=g.processOneDimStack(t)):t=g.processAdjust(t)})}return t}}),t.exports=h},function(t,e,n){"use strict";var i=n(1),r=i.MatrixUtil,a=function(){};a.ATTRS={allowSelected:!1},i.augment(a,{allowSelected:function s(){var t=this.get("type"),e=this.get("coord"),n=e&&e.type,s=this.get("allowSelected");return this.get("selectedCfg")&&this.get("selectedCfg").mode!==!1&&(s=!0),"interval"===t&&"theta"===n&&(s=!0,this.get("selectedCfg")&&this.get("selectedCfg").mode===!1&&(s=!1)),s},getShapes:function(){var t=this,e=t.get("container"),n=[],r=e.get("children");return i.each(r,function(t){var e=t.get("children");i.each(e,function(t){t.get("origin")&&n.push(t)})}),n},getSelectedShapes:function(t){var e=this;t=t||e.getShapes();var n=[];return i.each(t,function(t){t.get("selected")&&n.push(t)}),n},getShapeByData:function(t,e){var n=null;return t&&i.each(e,function(e){if(e.get("origin")===t)return n=e,!1}),n},setShapeSelected:function(t,e){var n=this;t.set("selected",e),n.setSelectedStatus(t,e)},setSelectedStatus:function(t,e){var n=this,r=n.get("activeGroup"),a=n.get("selectedCfg")||{},s=a.animate!==!1,o={};if(e){var u=t.get("origin"),c=n.get("geomShape"),l=u.shape||n.getDefaultValue("shape"),h=i.mix({geom:n,coord:t.get("parent").get("coord"),point:u},a),f=c.getSelectedCfg(l,h);i.mix(f,h.style),t.get("originSelectStyle")?o=t.get("originSelectStyle"):(i.each(f,function(e,n){if("transform"===n||"matrix"===n)o.matrix=t.getMatrix().clone();else{var i=t.attr(n);i!==e&&(o[n]=i)}}),t.set("originSelectStyle",o)),f=this.parseCfg(o.matrix,f),s?t.animate(f,300):(t.attr(f),t.get("canvas").draw())}else o=t.get("originSelectStyle"),s?t.animate(o,300):(t.attr(o),t.get("canvas").draw());n.clearShapeActived(),r&&r.get("canvas").draw()},parseCfg:function(t,e){return e.transform&&(e.matrix=r.transform(t,e.transform),delete e.transform),e},setSelected:function(t){var e=this,n=e.get("chart"),r=e.getShapes(),a=e.getSelectedShapes(r),s=e.getShapeByData(t,r),o=e.get("selectedCfg")||{};if("multiple"===o.mode&&s)i.indexOf(a,s)===-1?(a.push(s),e.setShapeSelected(s,!0),n.fire("itemselected",{shape:s,data:t,view:e,geom:e})):(i.remove(a,s),e.setShapeSelected(s,!1),n.fire("itemunselected",{shape:s,data:s.get("origin"),view:e,geom:e}));else{var u=o.cancelable!==!1,c=a[0];u&&(s=c===s?null:s),c!==s&&(c&&(e.setShapeSelected(c,!1),n.fire("itemunselected",{shape:c,data:c.get("origin"),view:e,geom:e})),s&&(e.setShapeSelected(s,!0),n.fire("itemselected",{shape:s,data:t,view:e,geom:e})),n.fire("itemselectedchange",{shape:s,data:t,view:e,geom:e,preShape:c,preData:c?c.get("origin"):null}))}},getSelected:function(){var t=this,e=t.getSelectedShapes(),n=null;return e.length>0&&(t.get("selectedCfg")&&"multiple"===t.get("selectedCfg").mode?(n=[],i.each(e,function(t){n.push(t.get("origin"))})):n=e[0].get("origin")),n},clearSelected:function(){var t=this,e=t.getSelectedShapes();i.each(e,function(e){t.setShapeSelected(e,!1)})}}),t.exports=a},function(t,e,n){"use strict";function i(t){return t.alias||t.dim}var r=n(1),a=n(4),s="_origin",o=function(){};o.ATTRS={tooltipMap:{},tooltipDims:null,shareTooltip:!0},r.augment(o,{_snapEqual:function(t,e,n){var i;return t=n.translate(t),e=n.translate(e),i=n.isCategory?t===e:Math.abs(t-e)<=.001},_getScaleValueByPoint:function(t){var e=0,n=this.get("coord"),i=this.getXScale(),r=n.invert(t),a=r.x;return this.isInCircle()&&a>(1+i.rangeMax())/2&&(a=i.rangeMin()),e=i.invert(a),i.isCategory&&(e=i.translate(e)),e},_getTipMapScale:function(t){var e=this.get("tooltipMap"),n=e&&e[t];return this._getScale(n)},_getTipValueScale:function(){var t=this._getTipMapScale("value");if(!t){var e=this.getLegendAttr();r.each(e,function(e){var n=e.getScale(e.type);if(n.isLinear)return t=n,!1})}var n=this.getXScale(),i=this.getYScale();return!t&&i&&"..y"===i.dim?n:t||i||n},_getTipTitleScale:function(){var t=this,e=t._getTipMapScale("title");if(!e){var n,i=t.getAttr("position"),a=i.getDims();r.each(a,function(t){if(t.indexOf("..")===-1)return n=t,!1}),e=t._getScale(n)}return e},_filterValue:function(t,e){var n=this.get("coord"),i=this.getYScale(),a=i.dim,o=n.invert(e),u=o.y;u=i.invert(u);var c=t[t.length-1];return r.each(t,function(t){var e=t[s];if(e[a][0]<=u&&e[a][1]>=u)return c=t,!1}),c},findPoint:function(t,e){var n=this,i=n.getXScale(),a=n.getYScale(),o=i.dim,u=a.dim,c=n.get("type"),l=e.toJSON(),h=null;if(r.indexOf(["heatmap","contour","point"],c)>-1){var f,g=n.get("coord"),p=g.invert(t),d=i.invert(p.x),v=a.invert(p.y),m={};r.each(l,function(t){var e=(t._origin[o]-d)*(t._origin[o]-d)+(t._origin[u]-v)*(t._origin[u]-v);(r.isNull(f)||e<f)&&(f=e,m=t)}),h=m}else{var x=l[0],y=l[l.length-1];if(!x)return h;var _=n._getScaleValueByPoint(t),S=x[s][o],b=x[s][u],w=y[s][o],M=a.isLinear&&r.isArray(b);if(r.isArray(S))r.each(l,function(t){var e=t[s];
if(i.translate(e[o][0])<=_&&i.translate(e[o][1])>=_){if(!M)return h=t,!1;r.isArray(h)||(h=[]),h.push(t)}}),r.isArray(h)&&(h=this._filterValue(h,t));else{var A;if(i.isLinear||"timeCat"===i.type){if((_>i.translate(w)||_<i.translate(S))&&(_>i.max||_<i.min))return null;for(var T,C=0,k=l.length-1;C<=k;){T=Math.floor((C+k)/2);var P=l[T][s][o];if(n._snapEqual(P,_,i))return l[T];i.translate(P)<=i.translate(_)?(C=T+1,y=l[T],A=l[T+1]):(0===k&&(y=l[0]),k=T-1)}}else r.each(l,function(t,e){var a=t[s];if(n._snapEqual(a[o],_,i)){if(!M)return h=t,!1;r.isArray(h)||(h=[]),h.push(t)}else i.translate(a[o])<=_&&(y=t,A=l[e+1])}),r.isArray(h)&&(h=this._filterValue(h,t));y&&A&&Math.abs(i.translate(y[s][o])-_)>Math.abs(i.translate(A[s][o])-_)&&(y=A)}var I=n.getXDistance();!h&&Math.abs(i.translate(y[s][o])-_)<=I/2&&(h=y)}return h},getTipTitle:function(t){var e,n="",i=this.get("tooltipMap"),r=i.title;if(r){if(e=this._getScale(r),!e)return r}else e=this._getTipTitleScale();if(e){var a=t[e.dim];n=e.getText(a)}else if("heatmap"===this.get("type")){var s=this.getXScale(),o=this.getYScale(),u=s.getText(t[s.dim]),c=o.getText(t[o.dim]);n="( "+u+", "+c+" )"}return n},getTipValue:function(t,e){var n,i=e.dim;if(n=t[i],r.isArray(n)){var a=[];r.each(n,function(t){a.push(e.getText(t))}),n=a.join("-")}else n=e.getText(n);return n},getTipName:function(t){var e,n,a=this.get("tooltipMap"),s=a.name;if(s&&(n=this._getScale(s),!n))return s;var o=this._getGroupScales();if(!n&&o.length&&r.each(o,function(t){return n=t,!1}),n){var u=n.dim;e=n.getText(t[u])}else{var c=this._getTipValueScale();e=i(c)}return e},getTipItems:function(t,e){function n(e,n){r.isNull(n)||""===n||g.push({title:h,point:t,name:e||h,value:n,color:t.color||a.defaultColor,marker:!0})}var o=this,u=t[s];e&&o.set("tooltipMap",e);var c,l,h=o.getTipTitle(u),f=o.get("tooltipDims"),g=[];if(f)r.each(f,function(t){if(!r.isNull(u[t])){var e=o._getScale(t);c=i(e),l=e.getText(u[t]),n(c,l)}});else{var p=o._getTipValueScale();r.isNull(u[p.dim])||(l=o.getTipValue(u,p),c=o.getTipName(u),n(c,l))}return g},isShareTooltip:function(){var t=this.get("shareTooltip"),e=this.get("type");if("interval"===e){var n=this.get("coord"),i=n.type;("theta"===i||"polar"===i&&n.isTransposed)&&(t=!1)}else this.getYScale()&&!r.inArray(["contour","point","polygon","edge"],e)||(t=!1);return t}}),t.exports=o},function(t,e,n){"use strict";function i(t){var e=p.shape.hollowArea,n=h.mix(!0,{},e,{stroke:t.color,lineWidth:t.size,strokeOpacity:t.opacity},t.style);return n}function r(t){var e=p.shape.area,n=h.mix(!0,{},e,{fill:t.color,stroke:t.color,lineWidth:t.size,fillOpacity:t.opacity},t.style);return n}function a(t,e){var n="",i=[],r=[],a=[],s=t.isInCircle;return h.each(t.points,function(t){r.push(t[0]),a.push(t[1])}),a=a.reverse(),i.push(r,a),h.each(i,function(t,i){var r="";if(r=e?g.getSplinePath(t,!1):g.getLinePath(t,!1),s){var a=t[0];r+=h.substitute("L {x} {y}",a)}else i>0&&(r=r.replace("M","L"));n+=r}),n+="z"}function s(t,e,n){return[["M",t-n,e+n],["L",t-n,e-n],["L",t,e],["L",t+n,e-n],["L",t+n,e+n],["z"]]}function o(t,e,n){return h.path2Absolute([["M",t-n,e+n],["L",t-n,e],["R",t-n/2,e-n/2,t,e,t+n/2,e+n/2,t+n,e],["L",t+n,e+n],["z"]])}function u(t,e,n){var a=n?i(t):r(t);return h.mix({symbol:e?o:s},a)}function c(t){return t&&t.indexOf("line")!==-1?p.activeShape.hollowArea:p.activeShape.area}function l(t,e,n){var i=t._coord,r=i.convertPoint(e.points[0][1]);return n.addShape("circle",{attrs:h.mix({x:r.x,y:r.y,r:2,fill:e.color},e.style)})}var h=n(1),f=n(13),g=n(17),p=n(4),d=[2,1],v=f.registGeom("area",{defaultShapeType:"area",getActiveCfg:function(t){return c(t)},drawShape:function(t,e,n){var i,r=this.getShape(t);return i=1===e.points.length&&p.showSinglePoint?l(this,e,n):r.drawShape(e,n),i&&(i.set("origin",e.origin),i.animateType=i.animateType?i.animateType:e.geomType,i.id=e.id,e.splitedIndex&&(i.id+="splI"+e.splitedIndex)),i},getSelectedCfg:function(t,e){return e&&e.style?e.style:this.getActiveCfg(t)}});f.registShape("area","area",{getShapePoints:function(t){var e=[],n=t.x,i=t.y,r=t.y0;return i=h.isArray(i)?i:[r,i],h.each(i,function(t){e.push({x:n,y:t})}),e},drawShape:function(t,e){var n=r(t),i=a(t,!1);return i=this.parsePath(i,!1),e.addShape("path",{attrs:h.mix(n,{path:i})})},getMarkerCfg:function(t){return u(t,!1,!1)}}),f.registShape("area","smooth",{drawShape:function(t,e){var n=r(t),i=a(t,!0);return i=this.parsePath(i,!1),e.addShape("path",{attrs:h.mix(n,{path:i})})},getMarkerCfg:function(t){return u(t,!0,!1)}}),f.registShape("area","line",{drawShape:function(t,e){var n=i(t),r=a(t,!1);return r=this.parsePath(r,!1),e.addShape("path",{attrs:h.mix(n,{path:r})})},getMarkerCfg:function(t){return u(t,!1,!0)}}),f.registShape("area","dotLine",{drawShape:function(t,e){var n=i(t),r=a(t,!1);return n.lineDash=d,r=this.parsePath(r),e.addShape("path",{attrs:h.mix(n,{path:r})})},getMarkerCfg:function(t){var e=u(t,!1,!0);return e.lineDash=d,e}}),f.registShape("area","smoothLine",{drawShape:function(t,e){var n=i(t),r=a(t,!0);return r=this.parsePath(r,!1),e.addShape("path",{attrs:h.mix(n,{path:r})})},getMarkerCfg:function(t){return u(t,!0,!0)}}),f.registShape("area","dotSmoothLine",{drawShape:function(t,e){var n=i(t),r=a(t,!0);return n.lineDash=d,r=this.parsePath(r,!1),e.addShape("path",{attrs:h.mix(n,{path:r})})},getMarkerCfg:function(t){var e=u(t,!0,!0);return e.lineDash=d,e}}),v.spline=v.smooth,t.exports=v},function(t,e,n){"use strict";function i(t){var e=g.shape.line,n=l.mix(!0,{},e,{stroke:t.color,lineWidth:t.size,strokeOpacity:t.opacity,opacity:t.opacity},t.style);return n}function r(t,e){var n=[];n.push({x:t.x,y:.5*t.y+1*e.y/2}),n.push({y:.5*t.y+1*e.y/2,x:e.x}),n.push(e);var i=["C"];return l.each(n,function(t){i.push(t.x,t.y)}),i}function a(t,e){var n=[];n.push({x:e.x,y:e.y}),n.push(t);var i=["Q"];return l.each(n,function(t){i.push(t.x,t.y)}),i}function s(t,e){var n=r(t,e),i=[["M",t.x,t.y]];return i.push(n),i}function o(t,e,n){var i=a(e,n),r=[["M",t.x,t.y]];return r.push(i),r}function u(t,e){var n=a(t[1],e),i=a(t[3],e),r=[["M",t[0].x,t[0].y]];return r.push(i),r.push(["L",t[3].x,t[3].y]),r.push(["L",t[2].x,t[2].y]),r.push(n),r.push(["L",t[1].x,t[1].y]),r.push(["L",t[0].x,t[0].y]),r.push(["Z"]),r}function c(t,e){var n=[];n.push({y:t.y*(1-d)+e.y*d,x:t.x}),n.push({y:t.y*(1-d)+e.y*d,x:e.x}),n.push(e);var i=[["M",t.x,t.y]];return l.each(n,function(t){i.push(["L",t.x,t.y])}),i}var l=n(1),h=n(13),f=n(52),g=n(4),p=n(17),d=1/3,v=h.registGeom("edge",{defaultShapeType:"line",getShapePoints:function(t,e){return f.splitPoints(e)},getActiveCfg:function(){return{strokeOpacity:.7}}});h.registShape("edge","line",{drawShape:function(t,e){var n=this.parsePoints(t.points),r=i(t),a=p.getLinePath(n),s=e.addShape("path",{attrs:l.mix(r,{path:a})});return s}}),h.registShape("edge","vhv",{drawShape:function(t,e){var n=t.points,r=i(t),a=c(n[0],n[1]);a=this.parsePath(a);var s=e.addShape("path",{attrs:l.mix(r,{path:a})});return s}}),h.registShape("edge","smooth",{drawShape:function(t,e){var n=t.points,r=i(t),a=s(n[0],n[1]);a=this.parsePath(a);var o=e.addShape("path",{attrs:l.mix(r,{path:a})});return o}}),h.registShape("edge","arc",{drawShape:function(t,e){var n,a,s=t.points,c=s.length>2?"weight":"normal",h=i(t);if(t.isInCircle){var f={x:0,y:1};"normal"===c?a=o(s[0],s[1],f):(h.fill=h.stroke,a=u(s,f)),a=this.parsePath(a),n=e.addShape("path",{attrs:l.mix(h,{path:a})})}else if("normal"===c)s=this.parsePoints(s),n=e.addShape("arc",{attrs:l.mix(h,{x:(s[1].x+s[0].x)/2,y:s[0].y,r:Math.abs(s[1].x-s[0].x)/2,startAngle:Math.PI,endAngle:2*Math.PI})});else{a=[["M",s[0].x,s[0].y],["L",s[1].x,s[1].y]];var g=r(s[1],s[3]),p=r(s[2],s[0]);a.push(g),a.push(["L",s[3].x,s[3].y]),a.push(["L",s[2].x,s[2].y]),a.push(p),a.push(["Z"]),a=this.parsePath(a),h.fill=h.stroke,n=e.addShape("path",{attrs:l.mix(h,{path:a})})}return n}}),t.exports=v},function(t,e,n){"use strict";function i(t,e){var n=t.x,i=t.y,r=t.y0,a=t.size,s=r,o=i;p.isArray(i)&&(o=i[1],s=i[0]);var u,c;p.isArray(n)?(u=n[0],c=n[1]):(u=n-a/2,c=n+a/2);var l=[];return l.push({x:u,y:s},{x:u,y:o}),e?l.push({x:c,y:(o+s)/2}):l.push({x:c,y:o},{x:c,y:s}),l}function r(t){for(var e=[],n=0;n<t.length;n++){var i=t[n];if(i){var r=0===n?"M":"L";e.push([r,i.x,i.y])}}var a=t[0];return e.push(["L",a.x,a.y]),e.push(["z"]),e}function a(t){var e=t.x,n=t.y,i=t.y0,r=[];return p.isArray(n)?p.each(n,function(t,n){r.push({x:p.isArray(e)?e[n]:e,y:t})}):r.push({x:e,y:n},{x:e,y:i}),r}function s(t){var e=t.x,n=p.isArray(t.y)?t.y[1]:t.y,i=p.isArray(t.y)?t.y[0]:t.y0,r=t.size,a=[];return a.push({x:e-r/2,y:n},{x:e+r/2,y:n},{x:e,y:n},{x:e,y:i},{x:e-r/2,y:i},{x:e+r/2,y:i}),a}function o(t){var e=[];return e.push(["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["M",t[2].x,t[2].y],["L",t[3].x,t[3].y],["M",t[4].x,t[4].y],["L",t[5].x,t[5].y]),e}function u(t){var e=m.shape.interval,n=p.mix(!0,{},e,{fill:t.color,stroke:t.color,fillOpacity:t.opacity},t.style);return n}function c(t){var e=m.shape.hollowInterval,n=p.mix(!0,{},e,{stroke:t.color,strokeOpacity:t.opacity},t.style);return n}function l(t,e){var n=[],i=t.points,r=t.nextPoints;return p.isNull(r)?e?n.push(["M",i[0].x,i[0].y],["L",i[1].x,i[1].y],["L",i[2].x,i[2].y],["L",i[3].x,i[3].y],["Z"]):n.push(["M",i[0].x,i[0].y],["L",i[1].x,i[1].y],["L",i[2].x,i[2].y],["Z"]):n.push(["M",i[0].x,i[0].y],["L",i[1].x,i[1].y],["L",r[1].x,r[1].y],["L",r[0].x,r[0].y],["Z"]),n}function h(t){return t&&"rect"!==t?m.activeShape.hollowInterval:m.activeShape.interval}function f(t,e){var n,i,r,a,s=e.getRadius(),o=e.get("inner"),u=s*o;return!p.isArray(t.x)&&p.isArray(t.y)&&(t.x=[t.x,t.x]),p.isArray(t.x)?(r={x:t.x[0],y:t.y[0]},a={x:t.x[1],y:t.y[1]},n=v.getPointAngle(e,r),i=v.getPointAngle(e,a),i<=n&&(i+=2*Math.PI)):(a=t,n=e.get("startAngle"),i=v.getPointAngle(e,a)),{r:s,ir:u,startAngle:n,endAngle:i}}function g(t,e){var n,i=e.coord,r=e.point,a=7.5;if(i&&"theta"===i.type){var s=f(r,i),o=(s.endAngle-s.startAngle)/2+s.startAngle,u=a*Math.cos(o),c=a*Math.sin(o);n={transform:[["t",u,c]]}}return p.mix({},n)}var p=n(1),d=n(13),v=n(17),m=n(4),x=d.registGeom("interval",{defaultShapeType:"rect",getActiveCfg:function(t){return h(t)},getSelectedCfg:function(t,e){return g(t,e)}});d.registShape("interval","rect",{getShapePoints:function(t){return i(t)},drawShape:function(t,e){var n=u(t),i=r(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:p.mix(n,{path:i})})},getMarkerCfg:function(t){var e=u(t),n=t.isInCircle,i=n?"circle":"square";return p.mix({symbol:i},e)}}),d.registShape("interval","hollowRect",{getShapePoints:function(t){return i(t)},drawShape:function(t,e){var n=c(t),i=r(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:p.mix(n,{path:i})})},getMarkerCfg:function(t){var e=c(t),n=t.isInCircle,i=n?"circle":"square";return p.mix({symbol:i},e)}}),d.registShape("interval","line",{getShapePoints:function(t){return a(t)},drawShape:function(t,e){var n=c(t);n.lineWidth=t.size||1;var i=r(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:p.mix(n,{path:i})})},getMarkerCfg:function(t){var e=c(t);return p.mix({symbol:"line"},e)}}),d.registShape("interval","tick",{getShapePoints:function(t){return s(t)},drawShape:function(t,e){var n=c(t),i=o(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:p.mix(n,{path:i})})},getMarkerCfg:function(t){var e=c(t);return p.mix({symbol:"tick"},e)}}),d.registShape("interval","funnel",{getShapePoints:function(t){return t.size=2*t.size,i(t)},drawShape:function(t,e){var n=u(t),i=l(t,!0);return i=this.parsePath(i),e.addShape("path",{attrs:p.mix(n,{path:i})})},getMarkerCfg:function(t){var e=u(t);return p.mix({symbol:"square"},e)}}),d.registShape("interval","pyramid",{getShapePoints:function(t){return t.size=2*t.size,i(t,!0)},drawShape:function(t,e){var n=u(t),i=l(t,!1);return i=this.parsePath(i),e.addShape("path",{attrs:p.mix(n,{path:i})})},getMarkerCfg:function(t){var e=u(t);return p.mix({symbol:"square"},e)}}),t.exports=x},function(t,e,n){"use strict";function i(t){var e=m.shape.line,n=g.mix(!0,{},e,{stroke:t.color,lineWidth:t.size,strokeOpacity:t.opacity,opacity:t.opacity},t.style);return n}function r(t,e){var n="",i=t.points,r=t.isInCircle;return n+=e?p.getSplinePath(i,!1):p.getLinePath(i,!1),r&&(n+="z"),g.path2Absolute(n)}function a(t,e){var n=[];return g.each(t,function(i,r){var a=t[r+1];n.push(i),a&&(n=n.concat(e(i,a)))}),n}function s(t){var e="";return g.each(t,function(t,n){var i=0===n?"M {x} {y}":"L {x} {y}";e+=g.substitute(i,t)}),e}function o(t,e){var n=a(t.points,e);return s(n)}function u(t,e,n){return[["M",t-n,e],["L",t+n,e]]}function c(t,e,n){return g.path2Absolute([["M",t-n,e],["R",t-n/2,e-n/2,t,e,t+n/2,e+n/2,t+n,e]])}function l(t,e){return g.mix({symbol:e?c:u},i(t))}function h(t,e){return g.mix({symbol:e},i(t))}function f(t,e,n){var i=t._coord,r=i.convertPoint(e.points[0]);return n.addShape("circle",{attrs:g.mix({x:r.x,y:r.y,r:2,fill:e.color},e.style)})}var g=n(1),p=n(17),d=n(52),v=n(13),m=n(4),x=[2,1],y=[10,5],_=v.registGeom("line",{defaultShapeType:"line",getMarkerCfg:function(t,e){var n=_[t]||_.line;return n.getMarkerCfg(e)},getActiveCfg:function(){return m.activeShape.line},drawShape:function(t,e,n){var i,r=this.getShape(t);return i=1===e.points.length&&m.showSinglePoint?f(this,e,n):r.drawShape(e,n),i&&(i.set("origin",e.origin),i.animateType=i.animateType?i.animateType:e.geomType,i.id=e.id,e.splitedIndex&&(i.id+="splI"+e.splitedIndex)),i},getSelectedCfg:function(t,e){return e&&e.style?e.style:this.getActiveCfg()}});v.registShape("line","line",{getShapePoints:function(t){return d.splitPoints(t)},drawShape:function(t,e){var n=i(t),a=r(t,!1);return a=this.parsePath(a,!1),e.addShape("path",{attrs:g.mix(n,{path:a})})},getMarkerCfg:function(t){return l(t)}}),v.registShape("line","dot",{drawShape:function(t,e){var n=i(t),a=r(t,!1);return a=this.parsePath(a,!1),e.addShape("path",{attrs:g.mix(n,{path:a,lineDash:x})})},getMarkerCfg:function(t){var e=l(t,!1);return e.lineDash=x,e}}),v.registShape("line","fill",{drawShape:function(t,e){var n=i(t),a=r(t,!1);return a=this.parsePath(a,!1),a.push(["z"]),e.addShape("path",{attrs:g.mix(n,{path:a,fill:n.stroke})})},getMarkerCfg:function(t){var e=l(t,!1);return e.fill=e.stroke,e}}),v.registShape("line","dash",{drawShape:function(t,e){var n=i(t),a=r(t,!1);return a=this.parsePath(a,!1),e.addShape("path",{attrs:g.mix(n,{path:a,lineDash:y})})},getMarkerCfg:function(t){var e=l(t,!1);return e.lineDash=y,e}}),v.registShape("line","smooth",{drawShape:function(t,e){var n=i(t),a=r(t,!0);return a=this.parsePath(a,!1),e.addShape("path",{attrs:g.mix(n,{path:a})})},getMarkerCfg:function(t){return l(t,!0)}}),v.registShape("line","dotSmooth",{drawShape:function(t,e){var n=i(t),a=r(t,!0);return a=this.parsePath(a,!1),e.addShape("path",{attrs:g.mix(n,{path:a,lineDash:x})})},getMarkerCfg:function(t){var e=l(t,!0);return e.lineDash=x,e}}),v.registShape("line","hv",{drawShape:function(t,e){var n=i(t),r=o(t,function(t,e){var n=[];return n.push({x:e.x,y:t.y}),n});return r=this.parsePath(r,!1),e.addShape("path",{attrs:g.mix(n,{path:r})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-n,e-n],["L",t,e-n],["L",t,e],["L",t+n,e]]})}}),v.registShape("line","vh",{drawShape:function(t,e){var n=i(t),r=o(t,function(t,e){var n=[];return n.push({x:t.x,y:e.y}),n});return r=this.parsePath(r,!1),e.addShape("path",{attrs:g.mix(n,{path:r})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-n,e],["L",t,e],["L",t,e-n],["L",t+n,e-n]]})}}),v.registShape("line","hvh",{drawShape:function(t,e){var n=i(t),r=o(t,function(t,e){var n=[],i=(e.x-t.x)/2+t.x;return n.push({x:i,y:t.y}),n.push({x:i,y:e.y}),n});return r=this.parsePath(r,!1),e.addShape("path",{attrs:g.mix(n,{path:r})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-3*n/2,e],["L",t-n/2,e],["L",t-n/2,e-n/2],["L",t+n/2,e-n/2],["L",t+n/2,e],["L",t+3*n/2,e]]})}}),v.registShape("line","vhv",{drawShape:function(t,e){var n=i(t),r=o(t,function(t,e){var n=[],i=(e.y-t.y)/2+t.y;return n.push({x:t.x,y:i}),n.push({x:e.x,y:i}),n});return r=this.parsePath(r,!1),e.addShape("path",{attrs:g.mix(n,{path:r})})},getMarkerCfg:function(t){return h(t,function(t,e,n){return[["M",t-n,e],["L",t-n,e-n/2],["L",t,e-n/2],["L",t,e-n],["L",t,e+n/2],["L",t+n,e+n/2]]})}}),_.spline=_.smooth,t.exports=_},function(t,e,n){"use strict";function i(t){var e=l.shape.point,n=o.mix(!0,{},e,{fill:t.color,fillOpacity:t.opacity,radius:t.size},t.style);return n}function r(t){var e=l.shape.hollowPoint,n=o.mix(!0,{},e,{stroke:t.color,strokeOpacity:t.opacity,radius:t.size},t.style);return n}function a(t){return!t||0!==t.indexOf("hollow")&&o.indexOf(g,t)===-1?l.activeShape.point:l.activeShape.hollowPoint}function s(t){var e=t.points[0].x,n=t.points[0].y,i=t.size[0],r=t.size[1],a=[["M",e-.5*i,n-.5*r],["L",e+.5*i,n-.5*r],["L",e+.5*i,n+.5*r],["L",e-.5*i,n+.5*r],["z"]];return a}var o=n(1),u=n(52),c=n(5),l=n(4),h=n(13),f=["circle","square","bowtie","diamond","hexagon","triangle","triangle-down"],g=["cross","tick","plus","hyphen","line","pointerLine","pointerArrow"],p=Math.sqrt(3);o.mix(c.Shape.Marker.Symbols,{hexagon:function(t,e,n,i){var r=n/2*p;i.moveTo(t,e-n),i.lineTo(t+r,e-n/2),i.lineTo(t+r,e+n/2),i.lineTo(t,e+n),i.lineTo(t-r,e+n/2),i.lineTo(t-r,e-n/2),i.closePath()},bowtie:function(t,e,n,i){i.moveTo(t-n,e-n),i.lineTo(t+n,e+n),i.lineTo(t+n,e-n),i.lineTo(t-n,e+n),i.closePath()},cross:function(t,e,n,i){i.moveTo(t-n,e-n),i.lineTo(t+n,e+n),i.moveTo(t+n,e-n),i.lineTo(t-n,e+n)},tick:function(t,e,n,i){i.moveTo(t-n/2,e-n),i.lineTo(t+n/2,e-n),i.moveTo(t,e-n),i.lineTo(t,e+n),i.moveTo(t-n/2,e+n),i.lineTo(t+n/2,e+n)},plus:function(t,e,n,i){i.moveTo(t-n,e),i.lineTo(t+n,e),i.moveTo(t,e-n),i.lineTo(t,e+n)},hyphen:function(t,e,n,i){i.moveTo(t-n,e),i.lineTo(t+n,e)},line:function(t,e,n,i){i.moveTo(t,e-n),i.lineTo(t,e+n)}});var d=h.registGeom("point",{defaultShapeType:"hollowCircle",getActiveCfg:function(t,e){var n=a(t);return e&&e.size&&delete n.radius,n},getShapePoints:function(t,e){return u.splitPoints(e)},getSelectedCfg:function(t,e){return e&&e.style?e.style:a(t)}});h.registShape("point","rect",{drawShape:function(t,e){var n=i(t),r=s(t);r=this.parsePath(r);var a=e.addShape("path",{attrs:o.mix(n,{path:r})});return a},getMarkerCfg:function(t){var e=i(t);return e.symbol="rect",e}}),o.each(f,function(t){h.registShape("point",t,{drawShape:function(e,n){e.points=this.parsePoints(e.points);var r=i(e);return n.addShape("Marker",{attrs:o.mix(r,{symbol:t,x:e.x,y:e.y})})},getMarkerCfg:function(e){var n=i(e);return n.symbol=t,n}}),h.registShape("point","hollow"+o.ucfirst(t),{drawShape:function(e,n){e.points=this.parsePoints(e.points);var i=r(e);return n.addShape("Marker",{attrs:o.mix(i,{symbol:t,x:e.x,y:e.y})})},getMarkerCfg:function(e){var n=r(e);return n.symbol=t,n}})}),o.each(g,function(t){h.registShape("point",t,{drawShape:function(e,n){e.points=this.parsePoints(e.points);var i=r(e);return n.addShape("Marker",{attrs:o.mix(i,{symbol:t,x:e.x,y:e.y})})},getMarkerCfg:function(e){var n=r(e);return n.symbol=t,n}})}),t.exports=d},function(t,e,n){"use strict";function i(){return u.activeShape.polygon}function r(t){var e=u.shape.polygon,n=s.mix(!0,{},e,{stroke:t.color,fill:t.color,fillOpacity:t.opacity},t.style);return n}function a(t){var e="",n=[t[0].x,t[0].y],i=0,r=t[0];return s.each(t,function(a,o){var u=0===o?"M {x} {y} ":"L {x} {y} ";if(e+=s.substitute(u,a),i!==o&&o<t.length-1&&s.equalsArray(n,[a.x,a.y])){var c=t[o+1];e+="z"+s.substitute("M {x} {y}",c),r=c,i=o+1,n=[c.x,c.y]}}),e+=s.substitute("L {x} {y}",r),e+="z",s.path2Absolute(e)}var s=n(1),o=n(13),u=n(4),c=o.registGeom("polygon",{defaultShapeType:"polygon",getMarkerCfg:function(){return{symbol:"rect"}},getActiveCfg:function(t){return i(t)},getSelectedCfg:function(t,e){return e&&e.style?e.style:i(t)}});o.registShape("polygon","polygon",{getShapePoints:function(t){var e=[];return s.each(t.x,function(n,i){var r=t.y[i];e.push({x:n,y:r})}),e},drawShape:function(t,e){var n=r(t),i=a(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:s.mix(n,{path:i})})}}),o.registShape("polygon","hollow",{drawShape:function(t,e){var n=r(t),i=a(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:s.mix(n,{path:i})})}}),t.exports=c},function(t,e,n){"use strict";function i(t){f.isArray(t)||(t=[t]);var e=t[0],n=t[t.length-1],i=t.length>1?t[1]:e,r=t.length>3?t[3]:n,a=t.length>2?t[2]:i;return{min:e,max:n,min1:i,max1:r,median:a}}function r(t,e){f.each(t,function(t){e.push({x:t[0],y:t[1]})})}function a(t){var e=p.shape.line,n=f.mix(!0,{},e,{stroke:t.color,fill:"#fff",fillOpacity:0,strokeOpacity:t.opacity});return n}function s(t,e,n){var a,s,o=[];return f.isArray(e)?(s=i(e),a=[[t-n/2,s.max],[t+n/2,s.max],[t,s.max],[t,s.max1],[t-n/2,s.min1],[t-n/2,s.max1],[t+n/2,s.max1],[t+n/2,s.min1],[t,s.min1],[t,s.min],[t-n/2,s.min],[t+n/2,s.min],[t-n/2,s.median],[t+n/2,s.median]]):(e=e||.5,s=i(t),a=[[s.min,e-n/2],[s.min,e+n/2],[s.min,e],[s.min1,e],[s.min1,e-n/2],[s.min1,e+n/2],[s.max1,e+n/2],[s.max1,e-n/2],[s.max1,e],[s.max,e],[s.max,e-n/2],[s.max,e+n/2],[s.median,e-n/2],[s.median,e+n/2]]),r(a,o),o}function o(t){f.isArray(t)||(t=[t]);var e=t.sort(function(t,e){return t<e?1:-1}),n=e.length;if(n<4)for(var i=e[n-1],r=0;r<4-n;r++)e.push(i);return e}function u(t,e,n){var i=o(e),r=[{x:t,y:i[0]},{x:t,y:i[1]},{x:t-n/2,y:i[2]},{x:t-n/2,y:i[1]},{x:t+n/2,y:i[1]},{x:t+n/2,y:i[2]},{x:t,y:i[2]},{x:t,y:i[3]}];return r}function c(t){var e=[["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["M",t[2].x,t[2].y],["L",t[3].x,t[3].y],["M",t[4].x,t[4].y],["L",t[5].x,t[5].y],["L",t[6].x,t[6].y],["L",t[7].x,t[7].y],["L",t[4].x,t[4].y],["Z"],["M",t[8].x,t[8].y],["L",t[9].x,t[9].y],["M",t[10].x,t[10].y],["L",t[11].x,t[11].y],["M",t[12].x,t[12].y],["L",t[13].x,t[13].y]];return e}function l(t){var e=[["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["M",t[2].x,t[2].y],["L",t[3].x,t[3].y],["L",t[4].x,t[4].y],["L",t[5].x,t[5].y],["Z"],["M",t[6].x,t[6].y],["L",t[7].x,t[7].y]];return e}function h(t,e){return f.mix({symbol:e},a(t))}var f=n(1),g=n(13),p=n(4),d=g.registGeom("schema",{defaultShapeType:"",getActiveCfg:function(){return p.activeShape.line},getSelectedCfg:function(t,e){return e&&e.style?e.style:this.getActiveCfg()}});g.registShape("schema","box",{getShapePoints:function(t){return s(t.x,t.y,t.size)},drawShape:function(t,e){var n=a(t),i=c(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:f.mix(n,{path:i})})},getMarkerCfg:function(t){return h(t,function(t,e,n){var i=[e-n,e-n/2,e,e+n/2,e+n],r=s(t,i,2*n);return c(r)})}}),g.registShape("schema","candle",{getShapePoints:function(t){return u(t.x,t.y,t.size)},drawShape:function(t,e){var n=a(t),i=l(t.points);return i=this.parsePath(i),e.addShape("path",{attrs:f.mix(n,{path:i,fill:t.color,fillOpacity:t.opacity,lineWidth:1})})},getMarkerCfg:function(t){var e=h(t,function(t,e,n){e=[e+1.5*n,e+n/2,e-n/2,e-1.5*n];var i=u(t,e,n);return l(i)});return e.fill=t.color,e.fillOpacity=t.opacity,e}}),t.exports=d},function(t,e,n){"use strict";var i=n(1),r=n(40),a="#62a4e8",s=i.mix(!0,{},r,{defaultColor:a,colors:{"default":["#61A5E8","#7ECF51","#EECB5F","#E4925D","#E16757","#9570E5","#605FF0"],intervalStack:["#61A5E8","#7ECF51","#EECB5F","#E4925D","#E16757","#9570E5","#605FF0","#605ff0","#85ca36","#1c9925","#0d8b5f","#0f9cd3","#2f7e9b","#2f677d","#9b7fed","#7453d6","#3b1d98","#27abb1","#017377","#015f63","#b86868","#5669b7","#e5aab4","#60b65f","#98d2b2","#c9c8bc","#45c3dc","#e17979","#5baa5a","#eaccc2","#ffaa74"]},shape:{point:{fill:a},hollowPoint:{stroke:a},interval:{fill:a},hollowInterval:{stroke:a},area:{fill:a},polygon:{fill:a},hollowPolygon:{stroke:a},hollowArea:{stroke:a},line:{stroke:a}},guide:{line:{stroke:a},rect:{fill:a},tag:{line:{stroke:a},rect:{fill:a}}},tooltipMarker:{stroke:a}});t.exports=s},function(t,e,n){"use strict";var i=n(1),r=n(40),a=i.mix(!0,{},r,{plotCfg:{margin:[20,80,60,80],border:{fill:"#18242E"}},axis:{top:{labels:{label:{fill:"#D5D4D4"}},tickLine:{stroke:"#46525F"}},bottom:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},tickLine:{stroke:"#46525F"}},left:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},tickLine:{stroke:"#46525F"},grid:{line:{stroke:"#46525F"}}},right:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},tickLine:{stroke:"#46525F"}},circle:{line:{stroke:"#46525F"},grid:{line:{stroke:"#46525F"}},labels:{label:{fill:"#999"}}},gauge:{tickLine:{stroke:"#46525F"},labels:{label:{fill:"#999"}}},clock:{tickLine:{stroke:"#46525F"},subTick:5,labels:{label:{fill:"#999"}}},radius:{labels:{label:{fill:"#999"}},line:{stroke:"#46525F"},grid:{line:{stroke:"#46525F"}}}},legend:{right:{word:{fill:"#999"},title:{fill:"#999"}},left:{word:{fill:"#999"},title:{fill:"#999"}},top:{word:{fill:"#999"}},bottom:{word:{fill:"#999"}}},guide:{text:{fill:"#999"},tag:{text:{fill:"#999"}}},labels:{label:{fill:"white",fontSize:12,textBaseline:"middle"}},innerLabels:{label:{fill:"#333",fontSize:12,textBaseline:"middle"}}});t.exports=a},function(t,e,n){"use strict";var i={"default":n(40),dark:n(327),cheery:n(326)};t.exports=i},function(t,e,n){"use strict";var i=n(108);setTimeout(function(){if(i.tracking){var t=new i;t.log({g2:!0,version:"2.3.13",page_type:"syslog"})}},3e3)},[335,331,117],function(t,e,n){"use strict";function i(t,e,n,i){var r=t[i]+(e[i]-t[i])*n;return r}var r=n(117),a=n(1);t.exports={calColor:function(t,e,n){var a,s=t.length-1,o=Math.floor(s*e),u=s*e-o,c=t[o],l=o===s?c:t[o+1];return"hsl"===n?a=r.hsl2Rgb([i(c,l,u,0),i(c,l,u,1),i(c,l,u,2)]):(a={r:i(c,l,u,0),g:i(c,l,u,1),b:i(c,l,u,2)},a="#"+r.toHex(a.r)+r.toHex(a.g)+r.toHex(a.b)),a},lightness:function(t,e){e=e||0;var n=[[e,1,.9],[e,1,.5]];return this.calColor(n,t,"hsl")},red:function(t){return this.lightness(t,0)},blue:function(t){return this.lightness(t,.66)},green:function(t){return this.lightness(t,.33)},gradient:function(t){var e=this,n=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=r.toRGB(t)),n.push(r.rgb2arr(t))}),function(t){return e.calColor(n,t)}},gradientHsl:function(t){var e=this,n=[];return a.isString(t)&&(t=t.split("-")),a.each(t,function(t){t.indexOf("#")===-1&&(t=r.toRGB(t)),n.push(r.rgb2hsl(t))}),function(t){return e.calColor(n,t,"hsl")}},saturation:function(t,e){e=e||0;var n=[[e,0,.5],[e,1,.5]];return this.calColor(n,t,"hsl")},hue:function(t){var e=[[0,1,.5],[1,1,.5]];return this.calColor(e,t,"hsl")},brightness:function(t){var e=[[255,255,255],[0,0,0]];return this.calColor(e,t)},heat:function(t){var e=[[255,255,255],[255,127.5,0],[0,0,0]];return this.calColor(e,t)},rainbow:function(t){var e=[[0,255,255],[0,0,255],[0,255,0],[255,0,0]];return this.calColor(e,t)},circular:function(t){var e=[[0,0,255],[0,255,0],[255,255,0],[255,0,0],[0,0,255]];return this.calColor(e,t)},bipolar:function(t){var e=[[0,255,0],[0,0,0],[255,0,0]];return this.calColor(e,t)}}},function(t,e){/**
	* @license
	*
	* Regression.JS - Regression functions for javascript
	* http://tom-alexander.github.com/regression-js/
	*
	* copyright(c) 2013 Tom Alexander
	* Licensed under the MIT license.
	*
	**/
"use strict";var n=function(t,e){var n=0,i=0,r=0,a=0,s=0,o=t.length-1,u=new Array(e);for(n=0;n<o;n++){for(a=n,i=n+1;i<o;i++)Math.abs(t[n][i])>Math.abs(t[n][a])&&(a=i);for(r=n;r<o+1;r++)s=t[r][n],t[r][n]=t[r][a],t[r][a]=s;for(i=n+1;i<o;i++)for(r=o;r>=n;r--)t[r][i]-=t[r][n]*t[n][i]/t[n][n]}for(i=o-1;i>=0;i--){for(s=0,r=i+1;r<o;r++)s+=t[r][i]*u[r];u[i]=(t[o][i]-s)/t[i][i]}return u},i={linear:function(t){for(var e=[0,0,0,0,0],n=0,i=[];n<t.length;n++)null!=t[n][1]&&(e[0]+=t[n][0],e[1]+=t[n][1],e[2]+=t[n][0]*t[n][0],e[3]+=t[n][0]*t[n][1],e[4]+=t[n][1]*t[n][1]);for(var r=(n*e[3]-e[0]*e[1])/(n*e[2]-e[0]*e[0]),a=e[1]/n-r*e[0]/n,s=0,o=t.length;s<o;s++){var u=[t[s][0],t[s][0]*r+a];i.push(u)}var c="y = "+Math.round(100*r)/100+"x + "+Math.round(100*a)/100;return{equation:[r,a],points:i,string:c}},linearThroughOrigin:function(t){for(var e=[0,0],n=0,i=[];n<t.length;n++)null!=t[n][1]&&(e[0]+=t[n][0]*t[n][0],e[1]+=t[n][0]*t[n][1]);for(var r=e[1]/e[0],a=0,s=t.length;a<s;a++){var o=[t[a][0],t[a][0]*r];i.push(o)}var u="y = "+Math.round(100*r)/100+"x";return{equation:[r],points:i,string:u}},exponential:function(t){var e=[0,0,0,0,0,0],n=0,i=[];for(u=t.length;n<u;n++)null!=t[n][1]&&(e[0]+=t[n][0],e[1]+=t[n][1],e[2]+=t[n][0]*t[n][0]*t[n][1],e[3]+=t[n][1]*Math.log(t[n][1]),e[4]+=t[n][0]*t[n][1]*Math.log(t[n][1]),e[5]+=t[n][0]*t[n][1]);for(var r=e[1]*e[2]-e[5]*e[5],a=Math.pow(Math.E,(e[2]*e[3]-e[5]*e[4])/r),s=(e[1]*e[4]-e[5]*e[3])/r,o=0,u=t.length;o<u;o++){var c=[t[o][0],a*Math.pow(Math.E,s*t[o][0])];i.push(c)}var l="y = "+Math.round(100*a)/100+"e^("+Math.round(100*s)/100+"x)";return{equation:[a,s],points:i,string:l}},logarithmic:function(t){var e=[0,0,0,0],n=0,i=[];for(o=t.length;n<o;n++)null!=t[n][1]&&(e[0]+=Math.log(t[n][0]),e[1]+=t[n][1]*Math.log(t[n][0]),e[2]+=t[n][1],e[3]+=Math.pow(Math.log(t[n][0]),2));for(var r=(n*e[1]-e[2]*e[0])/(n*e[3]-e[0]*e[0]),a=(e[2]-r*e[0])/n,s=0,o=t.length;s<o;s++){var u=[t[s][0],a+r*Math.log(t[s][0])];i.push(u)}var c="y = "+Math.round(100*a)/100+" + "+Math.round(100*r)/100+" ln(x)";return{equation:[a,r],points:i,string:c}},power:function(t){var e=[0,0,0,0],n=0,i=[];for(o=t.length;n<o;n++)null!=t[n][1]&&(e[0]+=Math.log(t[n][0]),e[1]+=Math.log(t[n][1])*Math.log(t[n][0]),e[2]+=Math.log(t[n][1]),e[3]+=Math.pow(Math.log(t[n][0]),2));for(var r=(n*e[1]-e[2]*e[0])/(n*e[3]-e[0]*e[0]),a=Math.pow(Math.E,(e[2]-r*e[0])/n),s=0,o=t.length;s<o;s++){var u=[t[s][0],a*Math.pow(t[s][0],r)];i.push(u)}var c="y = "+Math.round(100*a)/100+"x^"+Math.round(100*r)/100;return{equation:[a,r],points:i,string:c}},polynomial:function(t,e){"undefined"==typeof e&&(e=2);for(var i=[],r=[],a=[],s=0,o=0,u=0,c=e+1;u<c;u++){for(var l=0,h=t.length;l<h;l++)null!=t[l][1]&&(s+=Math.pow(t[l][0],u)*t[l][1]);i.push(s),s=0;for(var f=[],g=0;g<c;g++){for(var l=0,h=t.length;l<h;l++)null!=t[l][1]&&(o+=Math.pow(t[l][0],u+g));f.push(o),o=0}r.push(f)}r.push(i);for(var p=n(r,c),u=0,h=t.length;u<h;u++){for(var d=0,v=0;v<p.length;v++)d+=p[v]*Math.pow(t[u][0],v);a.push([t[u][0],d])}for(var m="y = ",u=p.length-1;u>=0;u--)m+=u>1?Math.round(p[u]*Math.pow(10,u))/Math.pow(10,u)+"x^"+u+" + ":1==u?Math.round(100*p[u])/100+"x + ":Math.round(100*p[u])/100;return{equation:p,points:a,string:m}},lastvalue:function(t){for(var e=[],n=null,i=0;i<t.length;i++)t[i][1]?(n=t[i][1],e.push([t[i][0],t[i][1]])):e.push([t[i][0],n]);return{equation:[n],points:e,string:""+n}}},r=function(t,e,n){if("string"==typeof t)return i[t](e,n)};t.exports=r},function(t,e,n){!function(){function e(){var t={},e=[];return t.data=function(n){return arguments.length?(e=n.slice(),t):e},t.mb=function(){var t,n,i=e.length;if(1===i)t=0,n=e[0][1];else{for(var r,a,s,o=0,u=0,c=0,l=0,h=0;h<i;h++)r=e[h],a=r[0],s=r[1],o+=a,u+=s,c+=a*a,l+=a*s;t=(i*l-o*u)/(i*c-o*o),n=u/i-t*o/i}return{m:t,b:n}},t.m=function(){return t.mb().m},t.b=function(){return t.mb().b},t.line=function(){var e=t.mb(),n=e.m,i=e.b;return function(t){return i+n*t}},t}function n(t,e){if(t.length<2)return 1;for(var n,i=0,r=0;r<t.length;r++)i+=t[r][1];n=i/t.length;for(var a=0,s=0;s<t.length;s++)a+=Math.pow(n-t[s][1],2);for(var o=0,u=0;u<t.length;u++)o+=Math.pow(t[u][1]-e(t[u][0]),2);return 1-o/a}function i(){var t={},e=0,n={};return t.train=function(t,i){n[i]||(n[i]={});for(var r in t){var a=t[r];void 0===n[i][r]&&(n[i][r]={}),void 0===n[i][r][a]&&(n[i][r][a]=0),n[i][r][t[r]]++}e++},t.score=function(t){var i,r={};for(var a in t){var s=t[a];for(i in n)void 0===r[i]&&(r[i]={}),n[i][a]?r[i][a+"_"+s]=(n[i][a][s]||0)/e:r[i][a+"_"+s]=0}var o={};for(i in r)for(var u in r[i])void 0===o[i]&&(o[i]=0),o[i]+=r[i][u];return o},t}function r(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}function a(t){return 0===t.length?null:r(t)/t.length}function s(t){if(0===t.length)return null;for(var e=1,n=0;n<t.length;n++){if(t[n]<=0)return null;e*=t[n]}return Math.pow(e,1/t.length)}function o(t){if(0===t.length)return null;for(var e=0,n=0;n<t.length;n++){if(t[n]<=0)return null;e+=1/t[n]}return t.length/e}function u(t){if(0===t.length)return null;for(var e=0,n=0;n<t.length;n++)e+=Math.pow(t[n],2);return Math.sqrt(e/t.length)}function c(t){for(var e,n=0;n<t.length;n++)(t[n]<e||void 0===e)&&(e=t[n]);return e}function l(t){for(var e,n=0;n<t.length;n++)(t[n]>e||void 0===e)&&(e=t[n]);return e}function h(t){if(0===t.length)return null;for(var e=a(t),n=[],i=0;i<t.length;i++)n.push(Math.pow(t[i]-e,2));return a(n)}function f(t){return 0===t.length?null:Math.sqrt(h(t))}function g(t,e){for(var n=a(t),i=0,r=0;r<t.length;r++)i+=Math.pow(t[r]-n,e);return i}function p(t){if(t.length<=1)return null;var e=g(t,2);return e/(t.length-1)}function d(t){return t.length<=1?null:Math.sqrt(p(t))}function v(t,e){if(t.length<=1||t.length!=e.length)return null;for(var n=a(t),i=a(e),r=0,s=0;s<t.length;s++)r+=(t[s]-n)*(e[s]-i);return r/(t.length-1)}function m(t,e){var n=v(t,e),i=d(t),r=d(e);return null===n||null===i||null===r?null:n/i/r}function x(t){if(0===t.length)return null;var e=t.slice().sort(function(t,e){return t-e});if(e.length%2===1)return e[(e.length-1)/2];var n=e[e.length/2-1],i=e[e.length/2];return(n+i)/2}function y(t){if(0===t.length)return null;if(1===t.length)return t[0];for(var e,n=t.slice().sort(function(t,e){return t-e}),i=n[0],r=0,a=1,s=1;s<n.length+1;s++)n[s]!==i?(a>r&&(r=a,e=i),a=1,i=n[s]):a++;return e}function _(t,e){var n=a(t),i=f(t),r=Math.sqrt(t.length);return(n-e)/(i/r)}function S(t,e,n){var i=t.length,r=e.length;if(!i||!r)return null;n||(n=0);var s=a(t),o=a(e),u=((i-1)*p(t)+(r-1)*p(e))/(i+r-2);return(s-o-n)/Math.sqrt(u*(1/i+1/r))}function b(t,e){var n=[];if(e<=0)return null;for(var i=0;i<t.length;i+=e)n.push(t.slice(i,i+e));return n}function w(t,e){e=e||Math.random;for(var n,i,r=t.length;r>0;)i=Math.floor(e()*r--),n=t[r],t[r]=t[i],t[i]=n;return t}function M(t,e){return t=t.slice(),w(t.slice(),e)}function A(t,e,n){var i=M(t,n);return i.slice(0,e)}function T(t,e){if(0===t.length)return null;var n=t.slice().sort(function(t,e){return t-e});if(e.length){for(var i=[],r=0;r<e.length;r++)i[r]=C(n,e[r]);return i}return C(n,e)}function C(t,e){var n=t.length*e;return e<0||e>1?null:1===e?t[t.length-1]:0===e?t[0]:n%1!==0?t[Math.ceil(n)-1]:t.length%2===0?(t[n-1]+t[n])/2:t[n]}function k(t){return 0===t.length?null:T(t,.75)-T(t,.25)}function P(t){if(!t||0===t.length)return null;for(var e=x(t),n=[],i=0;i<t.length;i++)n.push(Math.abs(t[i]-e));return x(n)}function I(t,e){var n,i,r=[],a=[],s=0;for(n=0;n<t.length+1;n++){var o=[],u=[];for(i=0;i<e+1;i++)o.push(0),u.push(0);r.push(o),a.push(u)}for(n=1;n<e+1;n++)for(r[1][n]=1,a[1][n]=0,i=2;i<t.length+1;i++)a[i][n]=1/0;for(var c=2;c<t.length+1;c++){for(var l=0,h=0,f=0,g=0,p=1;p<c+1;p++){var d=c-p+1,v=t[d-1];if(f++,l+=v,h+=v*v,s=h-l*l/f,g=d-1,0!==g)for(i=2;i<e+1;i++)a[c][i]>=s+a[g][i-1]&&(r[c][i]=d,a[c][i]=s+a[g][i-1])}r[c][1]=1,a[c][1]=s}return{lower_class_limits:r,variance_combinations:a}}function D(t,e,n){var i=t.length-1,r=[],a=n;for(r[n]=t[t.length-1],r[0]=t[0];a>1;)r[a-1]=t[e[i][a]-2],i=e[i][a]-1,a--;return r}function O(t,e){if(e>t.length)return null;t=t.slice().sort(function(t,e){return t-e});var n=I(t,e),i=n.lower_class_limits;return D(t,i,e)}function F(t){if(t.length<3)return null;var e=t.length,n=Math.pow(d(t),3),i=g(t,3);return e*i/((e-1)*(e-2)*n)}function L(t){var e=Math.abs(t),n=Math.floor(10*e),i=10*(Math.floor(100*e)/10-Math.floor(100*e/10)),r=Math.min(10*n+i,Y.length-1);return t>=0?Y[r]:+(1-Y[r]).toFixed(4)}function R(t,e,n){return(t-e)/n}function N(t){if(t<0)return null;for(var e=1,n=2;n<=t;n++)e*=n;return e}function B(t){return t<0||t>1?null:E(1,t)}function E(t,e){function n(t,e,n){return N(e)/(N(t)*N(e-t))*(Math.pow(n,t)*Math.pow(1-n,e-t))}if(e<0||e>1||t<=0||t%1!==0)return null;var i=0,r=0,a={};do a[i]=n(i,t,e),r+=a[i],i++;while(r<1-G);return a}function z(t){function e(t,e){return Math.pow(Math.E,-e)*Math.pow(e,t)/N(t)}if(t<=0)return null;var n=0,i=0,r={};do r[n]=e(n,t),i+=r[n],n++;while(i<1-G);return r}function X(t,e,n){for(var i,r,s=a(t),o=0,u=1,c=e(s),l=[],h=[],f=0;f<t.length;f++)void 0===l[t[f]]&&(l[t[f]]=0),l[t[f]]++;for(f=0;f<l.length;f++)void 0===l[f]&&(l[f]=0);for(r in c)r in l&&(h[r]=c[r]*t.length);for(r=h.length-1;r>=0;r--)h[r]<3&&(h[r-1]+=h[r],h.pop(),l[r-1]+=l[r],l.pop());for(r=0;r<l.length;r++)o+=Math.pow(l[r]-h[r],2)/h[r];return i=l.length-u-1,j[i][n]<o}function W(t){function e(t){return function(){var e=Array.prototype.slice.apply(arguments);return e.unshift(this),V[t].apply(V,e)}}var n=!(!Object.defineProperty||!Object.defineProperties);if(!n)throw new Error("without defineProperty, simple-statistics cannot be mixed in");var i,r=["median","standard_deviation","sum","sample_skewness","mean","min","max","quantile","geometric_mean","harmonic_mean","root_mean_square"];i=t?t.slice():Array.prototype;for(var a=0;a<r.length;a++)Object.defineProperty(i,r[a],{value:e(r[a]),configurable:!0,enumerable:!1,writable:!0});return i}var V={};t.exports=V;var Y=[.5,.504,.508,.512,.516,.5199,.5239,.5279,.5319,.5359,.5398,.5438,.5478,.5517,.5557,.5596,.5636,.5675,.5714,.5753,.5793,.5832,.5871,.591,.5948,.5987,.6026,.6064,.6103,.6141,.6179,.6217,.6255,.6293,.6331,.6368,.6406,.6443,.648,.6517,.6554,.6591,.6628,.6664,.67,.6736,.6772,.6808,.6844,.6879,.6915,.695,.6985,.7019,.7054,.7088,.7123,.7157,.719,.7224,.7257,.7291,.7324,.7357,.7389,.7422,.7454,.7486,.7517,.7549,.758,.7611,.7642,.7673,.7704,.7734,.7764,.7794,.7823,.7852,.7881,.791,.7939,.7967,.7995,.8023,.8051,.8078,.8106,.8133,.8159,.8186,.8212,.8238,.8264,.8289,.8315,.834,.8365,.8389,.8413,.8438,.8461,.8485,.8508,.8531,.8554,.8577,.8599,.8621,.8643,.8665,.8686,.8708,.8729,.8749,.877,.879,.881,.883,.8849,.8869,.8888,.8907,.8925,.8944,.8962,.898,.8997,.9015,.9032,.9049,.9066,.9082,.9099,.9115,.9131,.9147,.9162,.9177,.9192,.9207,.9222,.9236,.9251,.9265,.9279,.9292,.9306,.9319,.9332,.9345,.9357,.937,.9382,.9394,.9406,.9418,.9429,.9441,.9452,.9463,.9474,.9484,.9495,.9505,.9515,.9525,.9535,.9545,.9554,.9564,.9573,.9582,.9591,.9599,.9608,.9616,.9625,.9633,.9641,.9649,.9656,.9664,.9671,.9678,.9686,.9693,.9699,.9706,.9713,.9719,.9726,.9732,.9738,.9744,.975,.9756,.9761,.9767,.9772,.9778,.9783,.9788,.9793,.9798,.9803,.9808,.9812,.9817,.9821,.9826,.983,.9834,.9838,.9842,.9846,.985,.9854,.9857,.9861,.9864,.9868,.9871,.9875,.9878,.9881,.9884,.9887,.989,.9893,.9896,.9898,.9901,.9904,.9906,.9909,.9911,.9913,.9916,.9918,.992,.9922,.9925,.9927,.9929,.9931,.9932,.9934,.9936,.9938,.994,.9941,.9943,.9945,.9946,.9948,.9949,.9951,.9952,.9953,.9955,.9956,.9957,.9959,.996,.9961,.9962,.9963,.9964,.9965,.9966,.9967,.9968,.9969,.997,.9971,.9972,.9973,.9974,.9974,.9975,.9976,.9977,.9977,.9978,.9979,.9979,.998,.9981,.9981,.9982,.9982,.9983,.9984,.9984,.9985,.9985,.9986,.9986,.9987,.9987,.9987,.9988,.9988,.9989,.9989,.9989,.999,.999],G=1e-4,j={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}};V.linear_regression=e,V.standard_deviation=f,V.r_squared=n,V.median=x,V.mean=a,V.mode=y,V.min=c,V.max=l,V.sum=r,V.quantile=T,V.quantile_sorted=C,V.iqr=k,V.mad=P,V.chunk=b,V.shuffle=M,V.shuffle_in_place=w,V.sample=A,V.sample_covariance=v,V.sample_correlation=m,V.sample_variance=p,V.sample_standard_deviation=d,V.sample_skewness=F,V.geometric_mean=s,V.harmonic_mean=o,V.root_mean_square=u,V.variance=h,V.t_test=_,V.t_test_two_sample=S,V.jenksMatrices=I,V.jenksBreaks=D,V.jenks=O,V.bayesian=i,V.epsilon=G,V.factorial=N,V.bernoulli_distribution=B,V.binomial_distribution=E,V.poisson_distribution=z,V.chi_squared_goodness_of_fit=X,V.z_score=R,V.cumulative_std_normal_probability=L,V.standard_normal_table=Y,V.average=a,V.interquartile_range=k,V.mixin=W,V.median_absolute_deviation=P,V.rms=u}(this)},,function(t,e,n,i,r){var a=n(i);a.Util=n(r),t.exports=a}]))});

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(225),
    insertWrapDetails = __webpack_require__(224),
    setToString = __webpack_require__(105),
    updateWrapDetails = __webpack_require__(223);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(101),
    shortOut = __webpack_require__(104);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(62),
    baseLodash = __webpack_require__(60);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(100),
    noop = __webpack_require__(230);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(231),
    setData = __webpack_require__(92),
    setWrapToString = __webpack_require__(91);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(98),
    composeArgsRight = __webpack_require__(97),
    countHolders = __webpack_require__(232),
    createCtor = __webpack_require__(46),
    createRecurry = __webpack_require__(96),
    getHolder = __webpack_require__(45),
    reorder = __webpack_require__(221),
    replaceHolders = __webpack_require__(37),
    root = __webpack_require__(18);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(235);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(38),
    metaMap = __webpack_require__(100);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(101),
    createBind = __webpack_require__(234),
    createCurry = __webpack_require__(233),
    createHybrid = __webpack_require__(99),
    createPartial = __webpack_require__(220),
    getData = __webpack_require__(95),
    mergeData = __webpack_require__(219),
    setData = __webpack_require__(92),
    setWrapToString = __webpack_require__(91),
    toInteger = __webpack_require__(218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(15));
__export(__webpack_require__(239));
__export(__webpack_require__(238));
__export(__webpack_require__(237));
__export(__webpack_require__(216));
__export(__webpack_require__(215));
__export(__webpack_require__(214));
__export(__webpack_require__(213));
__export(__webpack_require__(212));
__export(__webpack_require__(211));
__export(__webpack_require__(210));
//# sourceMappingURL=applicators.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(247),
    shortOut = __webpack_require__(104);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(255);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var without = __webpack_require__(286);
var attempt = __webpack_require__(243);
var isObject = __webpack_require__(23);
/**
 * Assigns all properties from an object to another object including non enumerable
 * properties.
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string[]} [excludes=[]]
 * @returns {T}
 */
function assignAll(to, from, excludes) {
    if (excludes === void 0) { excludes = []; }
    var properties = without.apply(void 0, [Object.getOwnPropertyNames(from)].concat(excludes));
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        attempt(assignProperty, to, from, prop);
    }
    return to;
}
exports.assignAll = assignAll;
/**
 * Assigns a property from one object to another while retaining descriptor properties.
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string} prop
 */
function assignProperty(to, from, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(to, prop);
    if (!descriptor || descriptor.configurable) {
        var srcDescriptor = Object.getOwnPropertyDescriptor(from, prop);
        if (isObject(srcDescriptor)) {
            Object.defineProperty(to, prop, srcDescriptor);
        }
        else {
            to[prop] = from[prop];
        }
    }
}
exports.assignProperty = assignProperty;
//# sourceMappingURL=assignAll.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(33),
    isLength = __webpack_require__(111);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forOwn = __webpack_require__(306);
/**
 * Used to copy over meta data from function to function.
 * If meta data is attached to a function. This can get lost
 * when wrapping functions. This tries to persist that.
 * @private
 */
function copyMetadata(to, from) {
    forOwn(from, function (value, key) { return to[key] = value; });
    return to;
}
exports.copyMetadata = copyMetadata;
//# sourceMappingURL=copyMetaData.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a log message.
 * @private
 * @export
 * @param {string} [message='']
 * @returns {string}
 */
function log(message) {
    if (message === void 0) { message = ''; }
    return "lodash-decorators -> " + message;
}
exports.log = log;
//# sourceMappingURL=log.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(27);
exports.InstanceChainMap = new utils_1.CompositeKeyWeakMap();
//# sourceMappingURL=common.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(313));
__export(__webpack_require__(312));
__export(__webpack_require__(116));
//# sourceMappingURL=factory.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(18);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23),
    isSymbol = __webpack_require__(316);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(317)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    /************************************
        Variables
    ************************************/

    var numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
            currentLocale: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0',
            scalePercentBy100: true
        },
        options = {
            currentLocale: defaults.currentLocale,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat,
            scalePercentBy100: defaults.scalePercentBy100
        };


    /************************************
        Constructors
    ************************************/

    // Numeral prototype object
    function Numeral(input, number) {
        this._input = input;

        this._value = number;
    }

    numeral = function(input) {
        var value,
            kind,
            unformatFunction,
            regexp;

        if (numeral.isNumeral(input)) {
            value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            value = 0;
        } else if (input === null || _.isNaN(input)) {
            value = null;
        } else if (typeof input === 'string') {
            if (options.zeroFormat && input === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                for (kind in formats) {
                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

                    if (regexp && input.match(regexp)) {
                        unformatFunction = formats[kind].unformat;

                        break;
                    }
                }

                unformatFunction = unformatFunction || numeral._.stringToNumber;

                value = unformatFunction(input);
            }
        } else {
            value = Number(input)|| null;
        }

        return new Numeral(input, value);
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };

    // helper functions
    numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function(value, format, roundingFunction) {
            var locale = locales[numeral.options.currentLocale],
                negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                trillion = 1000000000000,
                billion = 1000000000,
                million = 1000000,
                thousand = 1000,
                decimal = '',
                neg = false,
                abbrForce, // force abbreviation
                abs,
                min,
                max,
                power,
                int,
                precision,
                signed,
                thousands,
                output;

            // make sure we never format a null value
            value = value || 0;

            abs = Math.abs(value);

            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (numeral._.includes(format, '(')) {
                negP = true;
                format = format.replace(/[\(|\)]/g, '');
            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[\+|\-]/g, '');
            }

            // see if abbreviation is wanted
            if (numeral._.includes(format, 'a')) {
                abbrForce = format.match(/a(k|m|b|t)?/);

                abbrForce = abbrForce ? abbrForce[1] : false;

                // check for space before abbreviation
                if (numeral._.includes(format, ' a')) {
                    abbr = ' ';
                }

                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

                if (abs >= trillion && !abbrForce || abbrForce === 't') {
                    // trillion
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
                    // billion
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
                    // million
                    abbr += locale.abbreviations.million;
                    value = value / million;
                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
                    // thousand
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }

            // check for optional decimals
            if (numeral._.includes(format, '[.]')) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            // break number and format
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

            if (precision) {
                if (numeral._.includes(precision, '[')) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
                }

                int = decimal.split('.')[0];

                if (numeral._.includes(decimal, '.')) {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                } else {
                    decimal = '';
                }

                if (optDec && Number(decimal.slice(1)) === 0) {
                    decimal = '';
                }
            } else {
                int = numeral._.toFixed(value, 0, roundingFunction);
            }

            // check abbreviation again after rounding
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
                int = String(Number(int) / 1000);

                switch (abbr) {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }


            // format number
            if (numeral._.includes(int, '-')) {
                int = int.slice(1);
                neg = true;
            }

            if (int.length < leadingCount) {
                for (var i = leadingCount - int.length; i > 0; i--) {
                    int = '0' + int;
                }
            }

            if (thousands > -1) {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                int = '';
            }

            output = int + decimal + (abbr ? abbr : '');

            if (negP) {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            } else {
                if (signed >= 0) {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                } else if (neg) {
                    output = '-' + output;
                }
            }

            return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function(string) {
            var locale = locales[options.currentLocale],
                stringOriginal = string,
                abbreviations = {
                    thousand: 3,
                    million: 6,
                    billion: 9,
                    trillion: 12
                },
                abbreviation,
                value,
                i,
                regexp;

            if (options.zeroFormat && string === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                value = 1;

                if (locale.delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }

                for (abbreviation in abbreviations) {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

                    if (stringOriginal.match(regexp)) {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }

                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

                // remove non numbers
                string = string.replace(/[^0-9\.]+/g, '');

                value *= Number(string);
            }

            return value;
        },
        isNaN: function(value) {
            return typeof value === 'number' && isNaN(value);
        },
        includes: function(string, search) {
            return string.indexOf(search) !== -1;
        },
        insert: function(string, subString, start) {
            return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function(array, callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            var t = Object(array),
                len = t.length >>> 0,
                k = 0,
                value;

            if (arguments.length === 3) {
                value = arguments[2];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }

                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }

                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        },
        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function (x) {
            var parts = x.toString().split('.');

            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function () {
            var args = Array.prototype.slice.call(arguments);

            return args.reduce(function(accum, next) {
                var mn = _.multiplier(next);
                return accum > mn ? accum : mn;
            }, 1);
        },
        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
            var splitValue = value.toString().split('.'),
                minDecimals = maxDecimals - (optionals || 0),
                boundedPrecision,
                optionalsRegExp,
                power,
                output;

            // Use the smallest precision value possible to avoid errors from floating point representation
            if (splitValue.length === 2) {
              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
            } else {
              boundedPrecision = minDecimals;
            }

            power = Math.pow(10, boundedPrecision);

            // Multiply up by precision, round accurately, then divide and use native toFixed():
            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

            if (optionals > maxDecimals - boundedPrecision) {
                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
                output = output.replace(optionalsRegExp, '');
            }

            return output;
        }
    };

    // avaliable options
    numeral.options = options;

    // avaliable formats
    numeral.formats = formats;

    // avaliable formats
    numeral.locales = locales;

    // This function sets the current locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    numeral.locale = function(key) {
        if (key) {
            options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
    };

    // This function provides access to the loaded locale data.  If
    // no arguments are passed in, it will simply return the current
    // global locale object.
    numeral.localeData = function(key) {
        if (!key) {
            return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
            throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
    };

    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };

    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    numeral.register = function(type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
            throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;

        return format;
    };


    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            localeData,
            temp;

        //coerce val to string
        if (typeof val !== 'string') {
            val += '';

            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }

        //trim whitespaces from either sides
        val = val.trim();

        //if val is just digits return true
        if (!!val.match(/^\d+$/)) {
            return true;
        }

        //if val is empty return false
        if (val === '') {
            return false;
        }

        //get the decimal and thousands separator from numeral.localeData
        try {
            //check if the culture is understood by numeral. if not, default it to current locale
            localeData = numeral.localeData(culture);
        } catch (e) {
            localeData = numeral.localeData(numeral.locale());
        }

        //setup the delimiters and currency symbol based on culture/locale
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = localeData.delimiters.thousands;
        }

        // validating currency symbol
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }

        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }

        return false;
    };


    /************************************
        Numeral Prototype
    ************************************/

    numeral.fn = Numeral.prototype = {
        clone: function() {
            return numeral(this);
        },
        format: function(inputString, roundingFunction) {
            var value = this._value,
                format = inputString || options.defaultFormat,
                kind,
                output,
                formatFunction;

            // make sure we have a roundingFunction
            roundingFunction = roundingFunction || Math.round;

            // format based on value
            if (value === 0 && options.zeroFormat !== null) {
                output = options.zeroFormat;
            } else if (value === null && options.nullFormat !== null) {
                output = options.nullFormat;
            } else {
                for (kind in formats) {
                    if (format.match(formats[kind].regexps.format)) {
                        formatFunction = formats[kind].format;

                        break;
                    }
                }

                formatFunction = formatFunction || numeral._.numberToFormat;

                output = formatFunction(value, format, roundingFunction);
            }

            return output;
        },
        value: function() {
            return this._value;
        },
        input: function() {
            return this._input;
        },
        set: function(value) {
            this._value = Number(value);

            return this;
        },
        add: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum + Math.round(corrFactor * curr);
            }

            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

            return this;
        },
        subtract: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum - Math.round(corrFactor * curr);
            }

            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

            return this;
        },
        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback, 1);

            return this;
        },
        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback);

            return this;
        },
        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }
    };

    /************************************
        Default Locale && Format
    ************************************/

    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    

(function() {
        numeral.register('format', 'bps', {
            regexps: {
                format: /(BPS)/,
                unformat: /(BPS)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
                    output;

                value = value * 10000;

                // check for space before BPS
                format = format.replace(/\s?BPS/, '');

                output = numeral._.numberToFormat(value, format, roundingFunction);

                if (numeral._.includes(output, ')')) {
                    output = output.split('');

                    output.splice(-1, 0, space + 'BPS');

                    output = output.join('');
                } else {
                    output = output + space + 'BPS';
                }

                return output;
            },
            unformat: function(string) {
                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
            }
        });
})();


(function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        binary = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };

    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
            return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|');
        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

    numeral.register('format', 'bytes', {
        regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
        },
        format: function(value, format, roundingFunction) {
            var output,
                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
                power,
                min,
                max;

            // check for space before
            format = format.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
                min = Math.pow(bytes.base, power);
                max = Math.pow(bytes.base, power + 1);

                if (value === null || value === 0 || value >= min && value < max) {
                    suffix += bytes.suffixes[power];

                    if (min > 0) {
                        value = value / min;
                    }

                    break;
                }
            }

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + suffix;
        },
        unformat: function(string) {
            var value = numeral._.stringToNumber(string),
                power,
                bytesMultiplier;

            if (value) {
                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                    if (numeral._.includes(string, decimal.suffixes[power])) {
                        bytesMultiplier = Math.pow(decimal.base, power);

                        break;
                    }

                    if (numeral._.includes(string, binary.suffixes[power])) {
                        bytesMultiplier = Math.pow(binary.base, power);

                        break;
                    }
                }

                value *= (bytesMultiplier || 1);
            }

            return value;
        }
    });
})();


(function() {
        numeral.register('format', 'currency', {
        regexps: {
            format: /(\$)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                symbols = {
                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                },
                output,
                symbol,
                i;

            // strip format of spaces and $
            format = format.replace(/\s?\$\s?/, '');

            // format the number
            output = numeral._.numberToFormat(value, format, roundingFunction);

            // update the before and after based on value
            if (value >= 0) {
                symbols.before = symbols.before.replace(/[\-\(]/, '');
                symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
                symbols.before = '-' + symbols.before;
            }

            // loop through each before symbol
            for (i = 0; i < symbols.before.length; i++) {
                symbol = symbols.before[i];

                switch (symbol) {
                    case '$':
                        output = numeral._.insert(output, locale.currency.symbol, i);
                        break;
                    case ' ':
                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                        break;
                }
            }

            // loop through each after symbol
            for (i = symbols.after.length - 1; i >= 0; i--) {
                symbol = symbols.after[i];

                switch (symbol) {
                    case '$':
                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                        break;
                    case ' ':
                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                        break;
                }
            }


            return output;
        }
    });
})();


(function() {
        numeral.register('format', 'exponential', {
        regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
        },
        format: function(value, format, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');

            format = format.replace(/e[\+|\-]{1}0/, '');

            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);

            return output + 'e' + parts[1];
        },
        unformat: function(string) {
            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);

            power = numeral._.includes(string, 'e-') ? power *= -1 : power;

            function cback(accum, curr, currI, O) {
                var corrFactor = numeral._.correctionFactor(accum, curr),
                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
                return num;
            }

            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
        }
    });
})();


(function() {
        numeral.register('format', 'ordinal', {
        regexps: {
            format: /(o)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                output,
                ordinal = numeral._.includes(format, ' o') ? ' ' : '';

            // check for space before
            format = format.replace(/\s?o/, '');

            ordinal += locale.ordinal(value);

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + ordinal;
        }
    });
})();


(function() {
        numeral.register('format', 'percentage', {
        regexps: {
            format: /(%)/,
            unformat: /(%)/
        },
        format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, ' %') ? ' ' : '',
                output;

            if (numeral.options.scalePercentBy100) {
                value = value * 100;
            }

            // check for space before %
            format = format.replace(/\s?\%/, '');

            output = numeral._.numberToFormat(value, format, roundingFunction);

            if (numeral._.includes(output, ')')) {
                output = output.split('');

                output.splice(-1, 0, space + '%');

                output = output.join('');
            } else {
                output = output + space + '%';
            }

            return output;
        },
        unformat: function(string) {
            var number = numeral._.stringToNumber(string);
            if (numeral.options.scalePercentBy100) {
                return number * 0.01;
            }
            return number;
        }
    });
})();


(function() {
        numeral.register('format', 'time', {
        regexps: {
            format: /(:)/,
            unformat: /(:)/
        },
        format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));

            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        unformat: function(string) {
            var timeArray = string.split(':'),
                seconds = 0;

            // turn hours and minutes into seconds and add them all up
            if (timeArray.length === 3) {
                // hours
                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
                // minutes
                seconds = seconds + (Number(timeArray[1]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
                // minutes
                seconds = seconds + (Number(timeArray[0]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
        }
    });
})();

return numeral;
}));


/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(36);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Exception = __webpack_require__(150);

var _Exception2 = _interopRequireDefault(_Exception);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Exception2.default, { type: '500', style: { minHeight: 500, height: '80%' }, linkElement: _reactRouterDom.Link });
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(36);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Exception = __webpack_require__(150);

var _Exception2 = _interopRequireDefault(_Exception);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Exception2.default, { type: '403', style: { minHeight: 500, height: '80%' }, linkElement: _reactRouterDom.Link });
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormElements = function (_Component) {
  (0, _inherits3.default)(FormElements, _Component);

  function FormElements() {
    (0, _classCallCheck3.default)(this, FormElements);
    return (0, _possibleConstructorReturn3.default)(this, (FormElements.__proto__ || (0, _getPrototypeOf2.default)(FormElements)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormElements, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: '\u8868\u5355\u5143\u7D20', content: '\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002\uFF08\u793A\u4F8B\u91C7\u7528\u54CD\u5E94\u5F0F\u8868\u5355\uFF0C\u4E5F\u53EF\u4F7F\u7528\u6A21\u677F\u9A71\u52A8\u65B9\u5F0F\uFF09' },
        _react2.default.createElement(
          'h2',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        ),
        _react2.default.createElement(
          'p',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        )
      );
    }
  }]);
  return FormElements;
}(_react.Component);

exports.default = FormElements;

/***/ }),
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"globalFooter":"globalFooter3Zygu","links":"links3Zygu","link":"link3Zygu","copyright":"copyright3Zygu"};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__(160);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalFooter = function (_PureComponent) {
  (0, _inherits3.default)(GlobalFooter, _PureComponent);

  function GlobalFooter() {
    (0, _classCallCheck3.default)(this, GlobalFooter);
    return (0, _possibleConstructorReturn3.default)(this, (GlobalFooter.__proto__ || (0, _getPrototypeOf2.default)(GlobalFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(GlobalFooter, [{
    key: 'renderLinks',
    value: function renderLinks(links) {
      if (Array.isArray(links)) {
        return links.map(function (it) {
          var href = it.href,
              text = it.text,
              id = it.id,
              key = it.key,
              icon = it.icon,
              others = (0, _objectWithoutProperties3.default)(it, ['href', 'text', 'id', 'key', 'icon']);

          return _react2.default.createElement(
            'a',
            (0, _extends3.default)({ href: it.href, className: _index2.default.link, key: '' + (id || key || Math.random()) }, others),
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
          others = (0, _objectWithoutProperties3.default)(_props, ['children', 'links', 'copyright', 'className']);

      var cls = (0, _classnames2.default)(_index2.default.globalFooter, className);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
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

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _GlobalFooter = __webpack_require__(161);

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _PageHeaderLayout = __webpack_require__(14);

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

/***/ }),
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footToolbar":"footToolbar1OHQi","extra":"extra1OHQi","actions":"actions1OHQi","children":"children1OHQi"};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__(164);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterToolbar = function (_PureComponent) {
  (0, _inherits3.default)(FooterToolbar, _PureComponent);

  function FooterToolbar() {
    (0, _classCallCheck3.default)(this, FooterToolbar);
    return (0, _possibleConstructorReturn3.default)(this, (FooterToolbar.__proto__ || (0, _getPrototypeOf2.default)(FooterToolbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(FooterToolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          extra = _props.extra,
          actions = _props.actions,
          className = _props.className,
          extraClassName = _props.extraClassName,
          actionClassName = _props.actionClassName,
          others = (0, _objectWithoutProperties3.default)(_props, ['children', 'extra', 'actions', 'className', 'extraClassName', 'actionClassName']);

      var cls = (0, _classnames2.default)(_index2.default.footToolbar, className);
      var clsExtra = (0, _classnames2.default)(_index2.default.extra, extraClassName);
      var clsActions = (0, _classnames2.default)(_index2.default.actions, actionClassName);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
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

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _FooterToolbar = __webpack_require__(165);

var _FooterToolbar2 = _interopRequireDefault(_FooterToolbar);

var _AvatarList = __webpack_require__(88);

var _AvatarList2 = _interopRequireDefault(_AvatarList);

var _DescriptionList = __webpack_require__(151);

var _DescriptionList2 = _interopRequireDefault(_DescriptionList);

var _PageHeaderLayout = __webpack_require__(14);

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
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars1.githubusercontent.com/u/23475830?s=96&v=4', tips: 'avatar' }),
        _react2.default.createElement(_AvatarList2.default.Item, null),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
      ),
      _react2.default.createElement(
        _AvatarList2.default,
        null,
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', tips: 'avatar' }),
        _react2.default.createElement(_AvatarList2.default.Item, null),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
      ),
      _react2.default.createElement(
        _AvatarList2.default,
        { size: 'large' },
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars0.githubusercontent.com/u/6764390?s=200&v=4', tips: 'avatar' }),
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

/***/ }),
/* 167 */,
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"resultWrapper":"resultWrapper1Hu5V","iconBar":"iconBar1Hu5V","title":"title1Hu5V","description":"description1Hu5V","extra":"extra1Hu5V","children":"children1Hu5V","actions":"actions1Hu5V"};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _uiw = __webpack_require__(10);

var _index = __webpack_require__(168);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function (_Component) {
  (0, _inherits3.default)(Result, _Component);

  function Result(props) {
    (0, _classCallCheck3.default)(this, Result);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Result.__proto__ || (0, _getPrototypeOf2.default)(Result)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Result, [{
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
              others = (0, _objectWithoutProperties3.default)(it, ['id', 'key', 'text', 'icon']);

          return _react2.default.createElement(
            _uiw.Button,
            (0, _extends3.default)({}, others, { key: '' + (id || key || Math.random()) }),
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

      var cls = (0, _classnames2.default)(_index2.default.resultWrapper, className);
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

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _Result = __webpack_require__(169);

var _Result2 = _interopRequireDefault(_Result);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _AvatarList = __webpack_require__(88);

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
        actions: [{ text: '立即预订', icon: 'like-o', onClick: function onClick() {} }, { text: '免费预约', type: 'primary', icon: 'heart-off', onClick: function onClick() {} }]
      })
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
          )
        },
        _react2.default.createElement(
          _uiw.Card,
          { title: '\u5C0F\u5C3A\u5BF8\u7684\u5934\u50CF', noHover: true, style: { marginBottom: 16 } },
          _react2.default.createElement(
            _AvatarList2.default,
            { size: 'small' },
            _react2.default.createElement(_AvatarList2.default.Item, {
              src: 'https://avatars1.githubusercontent.com/u/23475830?s=96&v=4',
              tips: 'avatar',
              onClick: function onClick() {
                // console.log(e);
              }
            }),
            _react2.default.createElement(_AvatarList2.default.Item, null),
            _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
          )
        )
      )
    )
  );
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DescriptionList = __webpack_require__(151);

var _DescriptionList2 = _interopRequireDefault(_DescriptionList);

var _PageHeaderLayout = __webpack_require__(14);

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

/***/ }),
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cardItem":"cardItem3rPkR"};

/***/ }),
/* 174 */,
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ellipsis":"ellipsis19mjO","lines":"lines19mjO","shadow":"shadow19mjO","lineClamp":"lineClamp19mjO"};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiw = __webpack_require__(10);

var _index = __webpack_require__(175);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isSupportLineClamp = document.body.style.webkitLineClamp !== '';

var EllipsisText = function EllipsisText(_ref) {
  var text = _ref.text,
      length = _ref.length,
      tooltip = _ref.tooltip,
      other = (0, _objectWithoutProperties3.default)(_ref, ['text', 'length', 'tooltip']);

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
  (0, _inherits3.default)(Ellipsis, _Component);

  function Ellipsis(props) {
    (0, _classCallCheck3.default)(this, Ellipsis);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Ellipsis.__proto__ || (0, _getPrototypeOf2.default)(Ellipsis)).call(this, props));

    _this.state = {
      text: '',
      targetCount: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Ellipsis, [{
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
        }
        begin = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(th, mid, begin, end, text, shadowNode);
      }
      if (mid - 1 < 0) {
        return mid;
      }
      shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
      sh = shadowNode.offsetHeight;
      if (sh <= th) {
        return mid - 1;
      }
      end = mid;
      mid = Math.floor((end - begin) / 2) + begin;
      return this.bisection(th, mid, begin, end, text, shadowNode);
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
          restProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'lines', 'length', 'className', 'tooltip']);


      var cls = (0, _classnames2.default)(_index2.default.ellipsis, className, (_classNames = {}, (0, _defineProperty3.default)(_classNames, _index2.default.lines, lines && !isSupportLineClamp), (0, _defineProperty3.default)(_classNames, _index2.default.linesClamp, lines && isSupportLineClamp), _classNames));

      if (!lines && !length) {
        return _react2.default.createElement(
          'span',
          (0, _extends3.default)({ className: cls }, restProps),
          children
        );
      }

      // length
      if (!lines) {
        return _react2.default.createElement(EllipsisText, (0, _extends3.default)({
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
          (0, _extends3.default)({ id: id, className: cls }, restProps),
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
        (0, _extends3.default)({}, restProps, {
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

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _Ellipsis = __webpack_require__(176);

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _index = __webpack_require__(173);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EllipsisElements = function (_Component) {
  (0, _inherits3.default)(EllipsisElements, _Component);

  function EllipsisElements() {
    (0, _classCallCheck3.default)(this, EllipsisElements);
    return (0, _possibleConstructorReturn3.default)(this, (EllipsisElements.__proto__ || (0, _getPrototypeOf2.default)(EllipsisElements)).apply(this, arguments));
  }

  (0, _createClass3.default)(EllipsisElements, [{
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

/***/ }),
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"countdown":"countdown1ZQYX"};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__(179);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillZero = function fillZero(num) {
  return num < 10 ? '0' + num : num;
};

var hours = 60 * 60 * 1000;
var minutes = 60 * 1000;

var CountDown = function (_Component) {
  (0, _inherits3.default)(CountDown, _Component);

  function CountDown(props) {
    (0, _classCallCheck3.default)(this, CountDown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CountDown.__proto__ || (0, _getPrototypeOf2.default)(CountDown)).call(this, props));

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

  (0, _createClass3.default)(CountDown, [{
    key: 'getValidDate',
    value: function getValidDate(param) {
      try {
        if (Object.prototype.toString.call(param) === '[object Date]') {
          return param.getTime();
        }
        var time = new Date(param).getTime();
        return time;
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

      var cls = (0, _classnames2.default)(_index2.default.countdown, (0, _defineProperty3.default)({}, className, className));
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

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CountDown = __webpack_require__(180);

var _CountDown2 = _interopRequireDefault(_CountDown);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = Date.now() + 26400000;

exports.default = function () {
  return _react2.default.createElement(
    _PageHeaderLayout2.default,
    { title: '\u5012\u8BA1\u65F6', content: '\u5012\u8BA1\u65F6\u7EC4\u4EF6\u3002' },
    _react2.default.createElement(_CountDown2.default, {
      onEnd: function onEnd() {
        // console.log('onEnd');
      },
      target: time,
      className: 'my-countdown'
    })
  );
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _AvatarList = __webpack_require__(88);

var _AvatarList2 = _interopRequireDefault(_AvatarList);

var _PageHeaderLayout = __webpack_require__(14);

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
        _react2.default.createElement(_AvatarList2.default.Item, {
          src: 'https://avatars1.githubusercontent.com/u/23475830?s=96&v=4',
          tips: 'avatar'
        }),
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
        _react2.default.createElement(_AvatarList2.default.Item, {
          src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4',
          tips: 'avatar'
        }),
        _react2.default.createElement(_AvatarList2.default.Item, null),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4' })
      ),
      _react2.default.createElement(
        _AvatarList2.default,
        { size: 'large' },
        _react2.default.createElement(_AvatarList2.default.Item, {
          src: 'https://avatars0.githubusercontent.com/u/6764390?s=200&v=4',
          tips: 'avatar'
        }),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://avatars2.githubusercontent.com/u/69631?s=200&v=4' }),
        _react2.default.createElement(_AvatarList2.default.Item, { src: 'https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png' })
      )
    )
  );
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormElements = function (_Component) {
  (0, _inherits3.default)(FormElements, _Component);

  function FormElements() {
    (0, _classCallCheck3.default)(this, FormElements);
    return (0, _possibleConstructorReturn3.default)(this, (FormElements.__proto__ || (0, _getPrototypeOf2.default)(FormElements)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormElements, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: '\u8868\u5355\u5143\u7D20', content: '\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002\uFF08\u793A\u4F8B\u91C7\u7528\u54CD\u5E94\u5F0F\u8868\u5355\uFF0C\u4E5F\u53EF\u4F7F\u7528\u6A21\u677F\u9A71\u52A8\u65B9\u5F0F\uFF09' },
        _react2.default.createElement(
          'h2',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        ),
        _react2.default.createElement(
          'p',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        )
      );
    }
  }]);
  return FormElements;
}(_react.Component);

exports.default = FormElements;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepForm = function (_Component) {
  (0, _inherits3.default)(StepForm, _Component);

  function StepForm() {
    (0, _classCallCheck3.default)(this, StepForm);
    return (0, _possibleConstructorReturn3.default)(this, (StepForm.__proto__ || (0, _getPrototypeOf2.default)(StepForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(StepForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: '\u9AD8\u7EA7\u8868\u5355', content: '\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002\uFF08\u793A\u4F8B\u91C7\u7528\u54CD\u5E94\u5F0F\u8868\u5355\uFF0C\u4E5F\u53EF\u4F7F\u7528\u6A21\u677F\u9A71\u52A8\u65B9\u5F0F\uFF09' },
        _react2.default.createElement(
          'h2',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        ),
        _react2.default.createElement(
          'p',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        )
      );
    }
  }]);
  return StepForm;
}(_react.Component);

exports.default = StepForm;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepForm = function (_Component) {
  (0, _inherits3.default)(StepForm, _Component);

  function StepForm() {
    (0, _classCallCheck3.default)(this, StepForm);
    return (0, _possibleConstructorReturn3.default)(this, (StepForm.__proto__ || (0, _getPrototypeOf2.default)(StepForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(StepForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: '\u5206\u6B65\u8868\u5355', content: '\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002' },
        _react2.default.createElement(
          'h2',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        ),
        _react2.default.createElement(
          'p',
          { className: 'a' },
          '\u8FD9\u91CC\u662F\u5185\u5BB9'
        )
      );
    }
  }]);
  return StepForm;
}(_react.Component);

exports.default = StepForm;

/***/ }),
/* 186 */,
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pageHeaderContent":"pageHeaderContent2zf4m","avatar":"avatar2zf4m","content":"content2zf4m","contentTitle":"contentTitle2zf4m","pageHeaderExtra":"pageHeaderExtra2zf4m","statItem":"statItem2zf4m"};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _PageHeader = __webpack_require__(403);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Workplace = __webpack_require__(187);

var _Workplace2 = _interopRequireDefault(_Workplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Workplace = function (_Component) {
  (0, _inherits3.default)(Workplace, _Component);

  function Workplace() {
    (0, _classCallCheck3.default)(this, Workplace);
    return (0, _possibleConstructorReturn3.default)(this, (Workplace.__proto__ || (0, _getPrototypeOf2.default)(Workplace)).apply(this, arguments));
  }

  (0, _createClass3.default)(Workplace, [{
    key: 'render',
    value: function render() {
      var pageHeaderContent = _react2.default.createElement(
        'div',
        { className: _Workplace2.default.pageHeaderContent },
        _react2.default.createElement(
          'div',
          { className: _Workplace2.default.avatar },
          _react2.default.createElement(_uiw.Avatar, { size: 'large', src: 'https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: _Workplace2.default.content },
          _react2.default.createElement(
            'div',
            { className: _Workplace2.default.contentTitle },
            '\u65E9\u5B89\uFF0C\u70ED\u5DF4\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u66FE\u7ECF\u6709\u4E00\u4EFD\u771F\u8BDA\u7684\u7231\u60C5\u653E\u5728\u6211\u9762\u524D\uFF0C\u6211\u6CA1\u6709\u73CD\u60DC\uFF0C\u7B49\u6211\u5931\u53BB\u7684\u65F6\u3002'
          )
        )
      );
      var pageHeaderExtra = _react2.default.createElement(
        'div',
        { className: _Workplace2.default.pageHeaderExtra },
        _react2.default.createElement(
          'div',
          { className: _Workplace2.default.statItem },
          _react2.default.createElement(
            'p',
            null,
            '\u9879\u76EE\u6570'
          ),
          _react2.default.createElement(
            'p',
            null,
            '56'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Workplace2.default.statItem },
          _react2.default.createElement(
            'p',
            null,
            '\u56E2\u961F\u5185\u6392\u540D'
          ),
          _react2.default.createElement(
            'p',
            null,
            '2',
            _react2.default.createElement(
              'span',
              null,
              ' / 14'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Workplace2.default.statItem },
          _react2.default.createElement(
            'p',
            null,
            '\u9879\u76EE\u8BBF\u95EE'
          ),
          _react2.default.createElement(
            'p',
            null,
            '1,235'
          )
        )
      );
      return _react2.default.createElement(
        _PageHeader2.default,
        { content: pageHeaderContent, extraContent: pageHeaderExtra },
        '\u8FD9\u91CC\u662F\u5185\u5BB9'
      );
    }
  }]);
  return Workplace;
}(_react.Component);

exports.default = Workplace;

/***/ }),
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"trendText":"trendText3pU2g","rankingList":"rankingList3pU2g","active":"active3pU2g","salesCard":"salesCard3pU2g","row":"row3pU2g","datePicker":"datePicker3pU2g","dateActive":"dateActive3pU2g","tabModal":"tabModal3pU2g","moduleActive":"moduleActive3pU2g","salesBar":"salesBar3pU2g","salesRank":"salesRank3pU2g","salesExtra":"salesExtra3pU2g","rankingTitle":"rankingTitle3pU2g","salesExtraWrap":"salesExtraWrap3pU2g"};

/***/ }),
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"trendItem":"trendItem2b5N_","up":"up2b5N_","down":"down2b5N_","trendItemGrey":"trendItemGrey2b5N_"};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(192);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trend = function Trend(_ref) {
  var _ref$colorful = _ref.colorful,
      colorful = _ref$colorful === undefined ? true : _ref$colorful,
      flag = _ref.flag,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['colorful', 'flag', 'children', 'className']);

  var classString = (0, _classnames2.default)(_index2.default.trendItem, (0, _defineProperty3.default)({}, _index2.default.trendItemGrey, !colorful), className);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, rest, {
      className: classString,
      title: typeof children === 'string' ? children : ''
    }),
    _react2.default.createElement(
      'span',
      { className: _index2.default.value },
      children
    ),
    flag && _react2.default.createElement(
      'span',
      { className: _index2.default[flag] },
      _react2.default.createElement(_uiw.Icon, { type: 'caret-' + flag })
    )
  );
};

exports.default = Trend;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = function (_Error) {
  inherits(LuxonError, _Error);

  function LuxonError() {
    classCallCheck(this, LuxonError);
    return possibleConstructorReturn(this, (LuxonError.__proto__ || Object.getPrototypeOf(LuxonError)).apply(this, arguments));
  }

  return LuxonError;
}(Error);

/**
 * @private
 */


var InvalidDateTimeError = function (_LuxonError) {
  inherits(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    classCallCheck(this, InvalidDateTimeError);
    return possibleConstructorReturn(this, (InvalidDateTimeError.__proto__ || Object.getPrototypeOf(InvalidDateTimeError)).call(this, 'Invalid DateTime: ' + reason));
  }

  return InvalidDateTimeError;
}(LuxonError);

/**
 * @private
 */
var InvalidIntervalError = function (_LuxonError2) {
  inherits(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    classCallCheck(this, InvalidIntervalError);
    return possibleConstructorReturn(this, (InvalidIntervalError.__proto__ || Object.getPrototypeOf(InvalidIntervalError)).call(this, 'Invalid Interval: ' + reason));
  }

  return InvalidIntervalError;
}(LuxonError);

/**
 * @private
 */
var InvalidDurationError = function (_LuxonError3) {
  inherits(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    classCallCheck(this, InvalidDurationError);
    return possibleConstructorReturn(this, (InvalidDurationError.__proto__ || Object.getPrototypeOf(InvalidDurationError)).call(this, 'Invalid Duration: ' + reason));
  }

  return InvalidDurationError;
}(LuxonError);

/**
 * @private
 */
var ConflictingSpecificationError = function (_LuxonError4) {
  inherits(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    classCallCheck(this, ConflictingSpecificationError);
    return possibleConstructorReturn(this, (ConflictingSpecificationError.__proto__ || Object.getPrototypeOf(ConflictingSpecificationError)).apply(this, arguments));
  }

  return ConflictingSpecificationError;
}(LuxonError);

/**
 * @private
 */
var InvalidUnitError = function (_LuxonError5) {
  inherits(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    classCallCheck(this, InvalidUnitError);
    return possibleConstructorReturn(this, (InvalidUnitError.__proto__ || Object.getPrototypeOf(InvalidUnitError)).call(this, 'Invalid unit ' + unit));
  }

  return InvalidUnitError;
}(LuxonError);

/**
 * @private
 */
var InvalidArgumentError = function (_LuxonError6) {
  inherits(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    classCallCheck(this, InvalidArgumentError);
    return possibleConstructorReturn(this, (InvalidArgumentError.__proto__ || Object.getPrototypeOf(InvalidArgumentError)).apply(this, arguments));
  }

  return InvalidArgumentError;
}(LuxonError);

/**
 * @private
 */
var ZoneIsAbstractError = function (_LuxonError7) {
  inherits(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    classCallCheck(this, ZoneIsAbstractError);
    return possibleConstructorReturn(this, (ZoneIsAbstractError.__proto__ || Object.getPrototypeOf(ZoneIsAbstractError)).call(this, 'Zone is an abstract class'));
  }

  return ZoneIsAbstractError;
}(LuxonError);

/* eslint no-unused-vars: "off" */
/**
 * @interface
*/
var Zone = function () {
  function Zone() {
    classCallCheck(this, Zone);
  }

  createClass(Zone, [{
    key: 'offset',


    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    value: function offset(ts) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return whether this Zone is equal to another zoner
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(otherZone) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return whether this Zone is valid.
     * @abstract
     * @return {boolean}
     */

  }, {
    key: 'type',

    /**
     * The type of zone
     * @abstract
     * @return {string}
     */
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * The name of this zone.
     * @abstract
     * @return {string}
     */

  }, {
    key: 'name',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @return {boolean}
     */

  }, {
    key: 'universal',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.localeCode - What locale to return the offset name in. Defaults to us-en
     * @return {string}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }
  }], [{
    key: 'offsetName',
    value: function offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }
  }]);
  return Zone;
}();

var singleton = null;

/**
 * @private
 */

var LocalZone = function (_Zone) {
  inherits(LocalZone, _Zone);

  function LocalZone() {
    classCallCheck(this, LocalZone);
    return possibleConstructorReturn(this, (LocalZone.__proto__ || Object.getPrototypeOf(LocalZone)).apply(this, arguments));
  }

  createClass(LocalZone, [{
    key: 'offsetName',
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;

      return Util.parseZoneInfo(ts, format, locale);
    }
  }, {
    key: 'offset',
    value: function offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }
  }, {
    key: 'equals',
    value: function equals(otherZone) {
      return otherZone.type === 'local';
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'local';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      if (Util.hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return 'local';
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return true;
    }
  }], [{
    key: 'instance',
    get: function get$$1() {
      if (singleton === null) {
        singleton = new LocalZone();
      }
      return singleton;
    }
  }]);
  return LocalZone;
}(Zone);

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ''),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      _parsed = slicedToArray(parsed, 7),
      fMonth = _parsed[1],
      fDay = _parsed[2],
      fYear = _parsed[3],
      fHour = _parsed[4],
      fMinute = _parsed[5],
      fSecond = _parsed[6];

  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];


    if (!Util.isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

function isValid(zone) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: zone }).format();
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @private
 */

var IANAZone = function (_Zone) {
  inherits(IANAZone, _Zone);
  createClass(IANAZone, null, [{
    key: 'isValidSpecier',
    value: function isValidSpecier(s) {
      return s && s.match(/[a-z_]{1,256}\/[a-z_]{1,256}/i);
    }
  }]);

  function IANAZone(name) {
    classCallCheck(this, IANAZone);

    var _this = possibleConstructorReturn(this, (IANAZone.__proto__ || Object.getPrototypeOf(IANAZone)).call(this));

    _this.zoneName = name;
    _this.valid = isValid(name);
    return _this;
  }

  createClass(IANAZone, [{
    key: 'offsetName',
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;

      return Util.parseZoneInfo(ts, format, locale, this.zoneName);
    }
  }, {
    key: 'offset',
    value: function offset(ts) {
      var date = new Date(ts),
          dtf = new Intl.DateTimeFormat('en-US', {
        hour12: false,
        timeZone: this.zoneName,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
          _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
          _ref3 = slicedToArray(_ref2, 6),
          fYear = _ref3[0],
          fMonth = _ref3[1],
          fDay = _ref3[2],
          fHour = _ref3[3],
          fMinute = _ref3[4],
          fSecond = _ref3[5],
          asUTC = Date.UTC(fYear, fMonth - 1, fDay, fHour, fMinute, fSecond);

      var asTS = date.valueOf();
      asTS -= asTS % 1000;
      return (asUTC - asTS) / (60 * 1000);
    }
  }, {
    key: 'equals',
    value: function equals(otherZone) {
      return otherZone.type === 'iana' && otherZone.zoneName === this.zoneName;
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'iana';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.zoneName;
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.valid;
    }
  }]);
  return IANAZone;
}(Zone);

var singleton$1 = null;

function hoursMinutesOffset(z) {
  var hours = Math.trunc(z.fixed / 60),
      minutes = Math.abs(z.fixed % 60),
      sign = hours > 0 ? '+' : '-',
      base = sign + Math.abs(hours);
  return minutes > 0 ? base + ':' + Util.padStart(minutes, 2) : base;
}

/**
 * @private
 */

var FixedOffsetZone = function (_Zone) {
  inherits(FixedOffsetZone, _Zone);
  createClass(FixedOffsetZone, null, [{
    key: 'instance',
    value: function instance(offset) {
      return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }
  }, {
    key: 'parseSpecifier',
    value: function parseSpecifier(s) {
      if (s) {
        var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r) {
          return new FixedOffsetZone(Util.signedOffset(r[1], r[2]));
        }
      }
      return null;
    }
  }, {
    key: 'utcInstance',
    get: function get$$1() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }
      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    classCallCheck(this, FixedOffsetZone);

    var _this = possibleConstructorReturn(this, (FixedOffsetZone.__proto__ || Object.getPrototypeOf(FixedOffsetZone)).call(this));

    _this.fixed = offset;
    return _this;
  }

  createClass(FixedOffsetZone, [{
    key: 'offsetName',
    value: function offsetName() {
      return this.name;
    }
  }, {
    key: 'offset',
    value: function offset() {
      return this.fixed;
    }
  }, {
    key: 'equals',
    value: function equals(otherZone) {
      return otherZone.type === 'fixed' && otherZone.fixed === this.fixed;
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'fixed';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.fixed === 0 ? 'UTC' : 'UTC' + hoursMinutesOffset(this);
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return true;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return true;
    }
  }]);
  return FixedOffsetZone;
}(Zone);

/**
 * @private
 */

var Formats = function Formats() {
  classCallCheck(this, Formats);
};

Formats.DATE_SHORT = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

Formats.DATE_MED = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

Formats.DATE_FULL = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

Formats.DATE_HUGE = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
};

Formats.TIME_SIMPLE = {
  hour: 'numeric',
  minute: '2-digit'
};

Formats.TIME_WITH_SECONDS = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

Formats.TIME_WITH_SHORT_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

Formats.TIME_WITH_LONG_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'long'
};

Formats.TIME_24_SIMPLE = {
  hour: 'numeric',
  minute: '2-digit',
  hour12: false
};

/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */
Formats.TIME_24_WITH_SECONDS = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */
Formats.TIME_24_WITH_SHORT_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'short'
};

/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */
Formats.TIME_24_WITH_LONG_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'long'
};

/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */
Formats.DATETIME_SHORT = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
};

/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */
Formats.DATETIME_SHORT_WITH_SECONDS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

Formats.DATETIME_MED = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
};

Formats.DATETIME_MED_WITH_SECONDS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

Formats.DATETIME_FULL = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short'
};

Formats.DATETIME_FULL_WITH_SECONDS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

Formats.DATETIME_HUGE = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'long'
};

Formats.DATETIME_HUGE_WITH_SECONDS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'long'
};

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

var English = function () {
  function English() {
    classCallCheck(this, English);
  }

  createClass(English, null, [{
    key: 'months',
    value: function months(length) {
      switch (length) {
        case 'narrow':
          return English.monthsNarrow;
        case 'short':
          return English.monthsShort;
        case 'long':
          return English.monthsLong;
        case 'numeric':
          return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        case '2-digit':
          return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        default:
          return null;
      }
    }
  }, {
    key: 'weekdays',
    value: function weekdays(length) {
      switch (length) {
        case 'narrow':
          return English.weekdaysNarrow;
        case 'short':
          return English.weekdaysShort;
        case 'long':
          return English.weekdaysLong;
        case 'numeric':
          return ['1', '2', '3', '4', '5', '6', '7'];
        default:
          return null;
      }
    }
  }, {
    key: 'eras',
    value: function eras(length) {
      switch (length) {
        case 'narrow':
          return English.erasNarrow;
        case 'short':
          return English.erasShort;
        case 'long':
          return English.erasLong;
        default:
          return null;
      }
    }
  }, {
    key: 'meridiemForDateTime',
    value: function meridiemForDateTime(dt) {
      return English.meridiems[dt.hour < 12 ? 0 : 1];
    }
  }, {
    key: 'weekdayForDateTime',
    value: function weekdayForDateTime(dt, length) {
      return English.weekdays(length)[dt.weekday - 1];
    }
  }, {
    key: 'monthForDateTime',
    value: function monthForDateTime(dt, length) {
      return English.months(length)[dt.month - 1];
    }
  }, {
    key: 'eraForDateTime',
    value: function eraForDateTime(dt, length) {
      return English.eras(length)[dt.year < 0 ? 0 : 1];
    }
  }, {
    key: 'formatString',
    value: function formatString(knownFormat) {
      // these all have the offsets removed because we don't have access to them
      // without all the intl stuff this is backfilling
      var filtered = Util.pick(knownFormat, ['weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hour12']),
          key = stringify(filtered),
          dateTimeHuge = 'EEEE, LLLL d, yyyy, h:mm a';
      switch (key) {
        case stringify(Formats.DATE_SHORT):
          return 'M/d/yyyy';
        case stringify(Formats.DATE_MED):
          return 'LLL d, yyyy';
        case stringify(Formats.DATE_FULL):
          return 'LLLL d, yyyy';
        case stringify(Formats.DATE_HUGE):
          return 'EEEE, LLLL d, yyyy';
        case stringify(Formats.TIME_SIMPLE):
          return 'h:mm a';
        case stringify(Formats.TIME_WITH_SECONDS):
          return 'h:mm:ss a';
        case stringify(Formats.TIME_WITH_SHORT_OFFSET):
          return 'h:mm a';
        case stringify(Formats.TIME_WITH_LONG_OFFSET):
          return 'h:mm a';
        case stringify(Formats.TIME_24_SIMPLE):
          return 'HH:mm';
        case stringify(Formats.TIME_24_WITH_SECONDS):
          return 'HH:mm:ss';
        case stringify(Formats.TIME_24_WITH_SHORT_OFFSET):
          return 'HH:mm';
        case stringify(Formats.TIME_24_WITH_LONG_OFFSET):
          return 'HH:mm';
        case stringify(Formats.DATETIME_SHORT):
          return 'M/d/yyyy, h:mm a';
        case stringify(Formats.DATETIME_MED):
          return 'LLL d, yyyy, h:mm a';
        case stringify(Formats.DATETIME_FULL):
          return 'LLLL d, yyyy, h:mm a';
        case stringify(Formats.DATETIME_HUGE):
          return dateTimeHuge;
        case stringify(Formats.DATETIME_SHORT_WITH_SECONDS):
          return 'M/d/yyyy, h:mm:ss a';
        case stringify(Formats.DATETIME_MED_WITH_SECONDS):
          return 'LLL d, yyyy, h:mm:ss a';
        case stringify(Formats.DATETIME_FULL_WITH_SECONDS):
          return 'LLLL d, yyyy, h:mm:ss a';
        case stringify(Formats.DATETIME_HUGE_WITH_SECONDS):
          return 'EEEE, LLLL d, yyyy, h:mm:ss a';
        default:
          return dateTimeHuge;
      }
    }
  }, {
    key: 'monthsLong',
    get: function get$$1() {
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
  }, {
    key: 'monthsShort',
    get: function get$$1() {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  }, {
    key: 'monthsNarrow',
    get: function get$$1() {
      return ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    }
  }, {
    key: 'weekdaysLong',
    get: function get$$1() {
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
  }, {
    key: 'weekdaysShort',
    get: function get$$1() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  }, {
    key: 'weekdaysNarrow',
    get: function get$$1() {
      return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    }
  }, {
    key: 'meridiems',
    get: function get$$1() {
      return ['AM', 'PM'];
    }
  }, {
    key: 'erasLong',
    get: function get$$1() {
      return ['Before Christ', 'Anno Domini'];
    }
  }, {
    key: 'erasShort',
    get: function get$$1() {
      return ['BC', 'AD'];
    }
  }, {
    key: 'erasNarrow',
    get: function get$$1() {
      return ['B', 'A'];
    }
  }]);
  return English;
}();

function stringifyTokens(splits, tokenToString) {
  var s = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = splits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var token = _step.value;

      if (token.literal) {
        s += token.val;
      } else {
        s += tokenToString(token.val);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return s;
}

var tokenToObject = {
  D: Formats.DATE_SHORT,
  DD: Formats.DATE_MED,
  DDD: Formats.DATE_FULL,
  DDDD: Formats.DATE_HUGE,
  t: Formats.TIME_SIMPLE,
  tt: Formats.TIME_WITH_SECONDS,
  ttt: Formats.TIME_WITH_SHORT_OFFSET,
  tttt: Formats.TIME_WITH_LONG_OFFSET,
  T: Formats.TIME_24_SIMPLE,
  TT: Formats.TIME_24_WITH_SECONDS,
  TTT: Formats.TIME_24_WITH_SHORT_OFFSET,
  TTTT: Formats.TIME_24_WITH_LONG_OFFSET,
  f: Formats.DATETIME_SHORT,
  ff: Formats.DATETIME_MED,
  fff: Formats.DATETIME_FULL,
  ffff: Formats.DATETIME_HUGE,
  F: Formats.DATETIME_SHORT_WITH_SECONDS,
  FF: Formats.DATETIME_MED_WITH_SECONDS,
  FFF: Formats.DATETIME_FULL_WITH_SECONDS,
  FFFF: Formats.DATETIME_HUGE_WITH_SECONDS
};

/**
 * @private
 */

var Formatter = function () {
  createClass(Formatter, null, [{
    key: 'create',
    value: function create(locale) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var formatOpts = Object.assign({}, { round: true }, opts);
      return new Formatter(locale, formatOpts);
    }
  }, {
    key: 'parseFormat',
    value: function parseFormat(fmt) {
      var current = null,
          currentFull = '',
          bracketed = false;
      var splits = [];
      for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);
        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({ literal: bracketed, val: currentFull });
          }
          current = null;
          currentFull = '';
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({ literal: false, val: currentFull });
          }
          currentFull = c;
          current = c;
        }
      }

      if (currentFull.length > 0) {
        splits.push({ literal: bracketed, val: currentFull });
      }

      return splits;
    }
  }]);

  function Formatter(locale, formatOpts) {
    classCallCheck(this, Formatter);

    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  createClass(Formatter, [{
    key: 'formatWithSystemDefault',
    value: function formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }
      var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    }
  }, {
    key: 'formatDateTime',
    value: function formatDateTime(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    }
  }, {
    key: 'formatDateTimeParts',
    value: function formatDateTimeParts(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.formatToParts();
    }
  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.resolvedOptions();
    }
  }, {
    key: 'num',
    value: function num(n) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var opts = Object.assign({}, this.opts);

      if (p > 0) {
        opts.padTo = p;
      }

      return this.loc.numberFormatter(opts).format(n);
    }
  }, {
    key: 'formatDateTimeFromString',
    value: function formatDateTimeFromString(dt, fmt) {
      var _this = this;

      var knownEnglish = this.loc.listingMode() === 'en';
      var string = function string(opts, extract) {
        return _this.loc.extract(dt, opts, extract);
      },
          formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return 'Z';
        }

        var hours = Math.trunc(dt.offset / 60),
            minutes = Math.abs(dt.offset % 60),
            sign = hours >= 0 ? '+' : '-',
            base = '' + sign + Math.abs(hours);

        switch (opts.format) {
          case 'short':
            return '' + sign + _this.num(Math.abs(hours), 2) + ':' + _this.num(minutes, 2);
          case 'narrow':
            return minutes > 0 ? base + ':' + minutes : base;
          case 'techie':
            return '' + sign + _this.num(Math.abs(hours), 2) + _this.num(minutes, 2);
          default:
            throw new RangeError('Value format ' + opts.format + ' is out of range for property format');
        }
      },
          meridiem = function meridiem() {
        return knownEnglish ? English.meridiemForDateTime(dt) : string({ hour: 'numeric', hour12: true }, 'dayperiod');
      },
          month = function month(length, standalone) {
        return knownEnglish ? English.monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: 'numeric' }, 'month');
      },
          weekday = function weekday(length, standalone) {
        return knownEnglish ? English.weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: 'long', day: 'numeric' }, 'weekday');
      },
          maybeMacro = function maybeMacro(token) {
        var macro = tokenToObject[token];
        if (macro) {
          return _this.formatWithSystemDefault(dt, macro);
        } else {
          return token;
        }
      },
          era = function era(length) {
        return knownEnglish ? English.eraForDateTime(dt, length) : string({ era: length }, 'era');
      },
          tokenToString = function tokenToString(token) {
        var outputCal = _this.loc.outputCalendar;

        // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
        switch (token) {
          // ms
          case 'S':
            return _this.num(dt.millisecond);
          case 'u':
          // falls through
          case 'SSS':
            return _this.num(dt.millisecond, 3);
          // seconds
          case 's':
            return _this.num(dt.second);
          case 'ss':
            return _this.num(dt.second, 2);
          // minutes
          case 'm':
            return _this.num(dt.minute);
          case 'mm':
            return _this.num(dt.minute, 2);
          // hours
          case 'h':
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case 'hh':
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case 'H':
            return _this.num(dt.hour);
          case 'HH':
            return _this.num(dt.hour, 2);
          // offset
          case 'Z':
            // like +6
            return formatOffset({ format: 'narrow', allowZ: true });
          case 'ZZ':
            // like +06:00
            return formatOffset({ format: 'short', allowZ: true });
          case 'ZZZ':
            // like +0600
            return formatOffset({ format: 'techie', allowZ: false });
          case 'ZZZZ':
            // like EST
            return dt.offsetNameShort;
          case 'ZZZZZ':
            // like Eastern Standard Time
            return dt.offsetNameLong;
          // zone
          case 'z':
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case 'a':
            return meridiem();
          // dates
          case 'd':
            return outputCal ? string({ day: 'numeric' }, 'day') : _this.num(dt.day);
          case 'dd':
            return outputCal ? string({ day: '2-digit' }, 'day') : _this.num(dt.day, 2);
          // weekdays - standalone
          case 'c':
            // like 1
            return _this.num(dt.weekday);
          case 'ccc':
            // like 'Tues'
            return weekday('short', true);
          case 'cccc':
            // like 'Tuesday'
            return weekday('long', true);
          case 'ccccc':
            // like 'T'
            return weekday('narrow', true);
          // weekdays - format
          case 'E':
            // like 1
            return _this.num(dt.weekday);
          case 'EEE':
            // like 'Tues'
            return weekday('short', false);
          case 'EEEE':
            // like 'Tuesday'
            return weekday('long', false);
          case 'EEEEE':
            // like 'T'
            return weekday('narrow', false);
          // months - standalone
          case 'L':
            // like 1
            return outputCal ? string({ month: 'numeric', day: 'numeric' }, 'month') : _this.num(dt.month);
          case 'LL':
            // like 01, doesn't seem to work
            return outputCal ? string({ month: '2-digit', day: 'numeric' }, 'month') : _this.num(dt.month, 2);
          case 'LLL':
            // like Jan
            return month('short', true);
          case 'LLLL':
            // like January
            return month('long', true);
          case 'LLLLL':
            // like J
            return month('narrow', true);
          // months - format
          case 'M':
            // like 1
            return outputCal ? string({ month: 'numeric' }, 'month') : _this.num(dt.month);
          case 'MM':
            // like 01
            return outputCal ? string({ month: '2-digit' }, 'month') : _this.num(dt.month, 2);
          case 'MMM':
            // like Jan
            return month('short', false);
          case 'MMMM':
            // like January
            return month('long', false);
          case 'MMMMM':
            // like J
            return month('narrow', false);
          // years
          case 'y':
            // like 2014
            return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year);
          case 'yy':
            // like 14
            return outputCal ? string({ year: '2-digit' }, 'year') : _this.num(dt.year.toString().slice(-2), 2);
          case 'yyyy':
            // like 0012
            return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year, 4);
          case 'yyyyyy':
            // like 000012
            return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year, 6);
          // eras
          case 'G':
            // like AD
            return era('short');
          case 'GG':
            // like Anno Domini
            return era('long');
          case 'GGGGG':
            return era('narrow');
          case 'kk':
            return _this.num(dt.weekYear.toString().slice(-2), 2);
          case 'kkkk':
            return _this.num(dt.weekYear, 4);
          case 'W':
            return _this.num(dt.weekNumber);
          case 'WW':
            return _this.num(dt.weekNumber, 2);
          case 'o':
            return _this.num(dt.ordinal);
          case 'ooo':
            return _this.num(dt.ordinal, 3);
          default:
            return maybeMacro(token);
        }
      };

      return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    }
  }, {
    key: 'formatDurationFromString',
    value: function formatDurationFromString(dur, fmt) {
      var _this2 = this;

      var tokenToField = function tokenToField(token) {
        switch (token[0]) {
          case 'S':
            return 'millisecond';
          case 's':
            return 'second';
          case 'm':
            return 'minute';
          case 'h':
            return 'hour';
          case 'd':
            return 'day';
          case 'M':
            return 'month';
          case 'y':
            return 'year';
          default:
            return null;
        }
      },
          tokenToString = function tokenToString(lildur) {
        return function (token) {
          var mapped = tokenToField(token);
          if (mapped) {
            return _this2.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      },
          tokens = Formatter.parseFormat(fmt),
          realTokens = tokens.reduce(function (found, _ref) {
        var literal = _ref.literal,
            val = _ref.val;
        return literal ? found : found.concat(val);
      }, []),
          collapsed = dur.shiftTo.apply(dur, toConsumableArray(realTokens.map(tokenToField).filter(function (t) {
        return t;
      })));
      return stringifyTokens(tokens, tokenToString(collapsed));
    }
  }]);
  return Formatter;
}();

var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (Util.hasIntl()) {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  } else {
    sysLocaleCache = 'en-US';
    return sysLocaleCache;
  }
}

function intlConfigString(locale, numberingSystem, outputCalendar) {
  if (Util.hasIntl()) {
    locale = Array.isArray(locale) ? locale : [locale];

    if (outputCalendar || numberingSystem) {
      locale = locale.map(function (l) {
        l += '-u';

        if (outputCalendar) {
          l += '-ca-' + outputCalendar;
        }

        if (numberingSystem) {
          l += '-nu-' + numberingSystem;
        }
        return l;
      });
    }
    return locale;
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];
  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  var ms = [];
  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === 'error') {
    return null;
  } else if (mode === 'en') {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

/**
 * @private
 */

var PolyNumberFormatter = function () {
  function PolyNumberFormatter(opts) {
    classCallCheck(this, PolyNumberFormatter);

    this.padTo = opts.padTo || 0;
    this.round = opts.round || false;
  }

  createClass(PolyNumberFormatter, [{
    key: 'format',
    value: function format(i) {
      var maybeRounded = this.round ? Math.round(i) : i;
      return Util.padStart(maybeRounded.toString(), this.padTo);
    }
  }]);
  return PolyNumberFormatter;
}();

var PolyDateFormatter = function () {
  function PolyDateFormatter(dt, intl, opts) {
    classCallCheck(this, PolyDateFormatter);

    this.opts = opts;
    this.hasIntl = Util.hasIntl();

    var z = void 0;
    if (dt.zone.universal) {
      // if we have a fixed-offset zone that isn't actually UTC,
      // (like UTC+8), we need to make do with just displaying
      // the time in UTC; the formatter doesn't know how to handle UTC+8
      this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      z = 'UTC';
    } else if (dt.zone.type === 'local') {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var realIntlOpts = Object.assign({}, this.opts);
      if (z) {
        realIntlOpts.timeZone = z;
      }
      this.dtf = new Intl.DateTimeFormat(intl, realIntlOpts);
    }
  }

  createClass(PolyDateFormatter, [{
    key: 'format',
    value: function format() {
      if (this.hasIntl) {
        return this.dtf.format(this.dt.toJSDate());
      } else {
        var tokenFormat = English.formatString(this.opts),
            loc = Locale.create('en-US');
        return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
      }
    }
  }, {
    key: 'formatToParts',
    value: function formatToParts() {
      if (this.hasIntl && Util.hasFormatToParts()) {
        return this.dtf.formatToParts(this.dt.toJSDate());
      } else {
        // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
        // and IMO it's too weird to have an uncanny valley like that
        return [];
      }
    }
  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions() {
      if (this.hasIntl) {
        return this.dtf.resolvedOptions();
      } else {
        return {
          locale: 'en-US',
          numberingSystem: 'latn',
          outputCalendar: 'gregory'
        };
      }
    }
  }]);
  return PolyDateFormatter;
}();

/**
 * @private
 */

var Locale = function () {
  createClass(Locale, null, [{
    key: 'fromOpts',
    value: function fromOpts(opts) {
      return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    }
  }, {
    key: 'create',
    value: function create(locale, numberingSystem, outputCalendar) {
      var defaultToEN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var specifiedLocale = locale || Settings.defaultLocale,

      // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
      localeR = specifiedLocale || (defaultToEN ? 'en-US' : systemLocale()),
          numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
          outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
      return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    }
  }, {
    key: 'resetCache',
    value: function resetCache() {
      sysLocaleCache = null;
    }
  }, {
    key: 'fromObject',
    value: function fromObject() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref.locale,
          numberingSystem = _ref.numberingSystem,
          outputCalendar = _ref.outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar);
    }
  }]);

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    classCallCheck(this, Locale);

    this.locale = locale;
    this.numberingSystem = numbering;
    this.outputCalendar = outputCalendar;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
  }

  // todo: cache me


  createClass(Locale, [{
    key: 'listingMode',
    value: function listingMode() {
      var defaultOk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var hasIntl = Util.hasIntl(),
          hasFTP = hasIntl && Util.hasFormatToParts(),
          isActuallyEn = this.locale === 'en' || this.locale.toLowerCase() === 'en-us' || hasIntl && Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'),
          hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === 'latn') && (this.outputCalendar === null || this.outputCalendar === 'gregory');

      if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOk) {
        return 'error';
      } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
        return 'en';
      } else {
        return 'intl';
      }
    }
  }, {
    key: 'clone',
    value: function clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
      }
    }
  }, {
    key: 'redefaultToEN',
    value: function redefaultToEN() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.clone(Object.assign({}, alts, { defaultToEN: true }));
    }
  }, {
    key: 'redefaultToSystem',
    value: function redefaultToSystem() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.clone(Object.assign({}, alts, { defaultToEN: false }));
    }
  }, {
    key: 'months',
    value: function months(length) {
      var _this = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return listStuff(this, length, defaultOK, English.months, function () {
        var intl = format ? { month: length, day: 'numeric' } : { month: length },
            formatStr = format ? 'format' : 'standalone';
        if (!_this.monthsCache[formatStr][length]) {
          _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
            return _this.extract(dt, intl, 'month');
          });
        }
        return _this.monthsCache[formatStr][length];
      });
    }
  }, {
    key: 'weekdays',
    value: function weekdays(length) {
      var _this2 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return listStuff(this, length, defaultOK, English.weekdays, function () {
        var intl = format ? { weekday: length, year: 'numeric', month: 'long', day: 'numeric' } : { weekday: length },
            formatStr = format ? 'format' : 'standalone';
        if (!_this2.weekdaysCache[formatStr][length]) {
          _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
            return _this2.extract(dt, intl, 'weekday');
          });
        }
        return _this2.weekdaysCache[formatStr][length];
      });
    }
  }, {
    key: 'meridiems',
    value: function meridiems() {
      var _this3 = this;

      var defaultOK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return listStuff(this, undefined, defaultOK, function () {
        return English.meridiems;
      }, function () {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!_this3.meridiemCache) {
          var intl = { hour: 'numeric', hour12: true };
          _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
            return _this3.extract(dt, intl, 'dayperiod');
          });
        }

        return _this3.meridiemCache;
      });
    }
  }, {
    key: 'eras',
    value: function eras(length) {
      var _this4 = this;

      var defaultOK = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return listStuff(this, length, defaultOK, English.eras, function () {
        var intl = { era: length };

        // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
        // to definitely enumerate them.
        if (!_this4.eraCache[length]) {
          _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
            return _this4.extract(dt, intl, 'era');
          });
        }

        return _this4.eraCache[length];
      });
    }
  }, {
    key: 'extract',
    value: function extract(dt, intlOpts, field) {
      var df = this.dtFormatter(dt, intlOpts),
          results = df.formatToParts(),
          matching = results.find(function (m) {
        return m.type.toLowerCase() === field;
      });

      return matching ? matching.value : null;
    }
  }, {
    key: 'numberFormatter',
    value: function numberFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Util.hasIntl()) {
        var realIntlOpts = Object.assign({ useGrouping: false }, intlOpts);

        if (opts.padTo > 0) {
          realIntlOpts.minimumIntegerDigits = opts.padTo;
        }

        if (opts.round) {
          realIntlOpts.maximumFractionDigits = 0;
        }

        return new Intl.NumberFormat(this.intl, realIntlOpts);
      } else {
        return new PolyNumberFormatter(opts);
      }
    }
  }, {
    key: 'dtFormatter',
    value: function dtFormatter(dt) {
      var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
  }]);
  return Locale;
}();

var now = function now() {
  return new Date().valueOf();
};
var defaultZone = null;
var defaultLocale = null;
var defaultNumberingSystem = null;
var defaultOutputCalendar = null;
var throwOnInvalid = false;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
var Settings = function () {
  function Settings() {
    classCallCheck(this, Settings);
  }

  createClass(Settings, null, [{
    key: 'resetCaches',


    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    value: function resetCaches() {
      Locale.resetCache();
    }
  }, {
    key: 'now',

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get$$1() {
      return now;
    }

    /**
     * Set the callback for returning the current timestamp.
     * @type {function}
     */
    ,
    set: function set$$1(n) {
      now = n;
    }

    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: 'defaultZoneName',
    get: function get$$1() {
      return (defaultZone || LocalZone.instance).name;
    }

    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(z) {
      defaultZone = Util.normalizeZone(z);
    }

    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: 'defaultZone',
    get: function get$$1() {
      return defaultZone || LocalZone.instance;
    }

    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultLocale',
    get: function get$$1() {
      return defaultLocale;
    }

    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(locale) {
      defaultLocale = locale;
    }

    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultNumberingSystem',
    get: function get$$1() {
      return defaultNumberingSystem;
    }

    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }

    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultOutputCalendar',
    get: function get$$1() {
      return defaultOutputCalendar;
    }

    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }

    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {Zone}
     */

  }, {
    key: 'throwOnInvalid',
    get: function get$$1() {
      return throwOnInvalid;
    }

    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {Zone}
     */
    ,
    set: function set$$1(t) {
      throwOnInvalid = t;
    }
  }]);
  return Settings;
}();

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/

/**
 * @private
 */

var Util = function () {
  function Util() {
    classCallCheck(this, Util);
  }

  createClass(Util, null, [{
    key: 'isUndefined',

    // TYPES

    value: function isUndefined(o) {
      return typeof o === 'undefined';
    }
  }, {
    key: 'isNumber',
    value: function isNumber(o) {
      return typeof o === 'number';
    }
  }, {
    key: 'isString',
    value: function isString(o) {
      return typeof o === 'string';
    }
  }, {
    key: 'isDate',
    value: function isDate(o) {
      return Object.prototype.toString.call(o) === '[object Date]';
    }

    // OBJECTS AND ARRAYS

  }, {
    key: 'maybeArray',
    value: function maybeArray(thing) {
      return Array.isArray(thing) ? thing : [thing];
    }
  }, {
    key: 'bestBy',
    value: function bestBy(arr, by, compare) {
      if (arr.length === 0) {
        return undefined;
      }
      return arr.reduce(function (best, next) {
        var pair = [by(next), next];
        if (!best) {
          return pair;
        } else if (compare.apply(null, [best[0], pair[0]]) === best[0]) {
          return best;
        } else {
          return pair;
        }
      }, null)[1];
    }
  }, {
    key: 'pick',
    value: function pick(obj, keys) {
      return keys.reduce(function (a, k) {
        a[k] = obj[k];
        return a;
      }, {});
    }

    // NUMBERS AND STRINGS

  }, {
    key: 'numberBetween',
    value: function numberBetween(thing, bottom, top) {
      return Util.isNumber(thing) && thing >= bottom && thing <= top;
    }
  }, {
    key: 'padStart',
    value: function padStart(input) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      return ('0'.repeat(n) + input).slice(-n);
    }
  }, {
    key: 'parseMillis',
    value: function parseMillis(fraction) {
      if (fraction) {
        var f = parseFloat('0.' + fraction) * 1000;
        return Math.round(f);
      } else {
        return 0;
      }
    }

    // DATE BASICS

  }, {
    key: 'isLeapYear',
    value: function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
  }, {
    key: 'daysInYear',
    value: function daysInYear(year) {
      return Util.isLeapYear(year) ? 366 : 365;
    }
  }, {
    key: 'daysInMonth',
    value: function daysInMonth(year, month) {
      if (month === 2) {
        return Util.isLeapYear(year) ? 29 : 28;
      } else {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
      }
    }
  }, {
    key: 'untruncateYear',
    value: function untruncateYear(year) {
      if (year > 99) {
        return year;
      } else return year > 60 ? 1900 + year : 2000 + year;
    }

    // PARSING

  }, {
    key: 'parseZoneInfo',
    value: function parseZoneInfo(ts, offsetFormat, locale) {
      var timeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var date = new Date(ts),
          intl = {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      };

      if (timeZone) {
        intl.timeZone = timeZone;
      }

      var modified = Object.assign({ timeZoneName: offsetFormat }, intl),
          hasIntl = Util.hasIntl();

      if (hasIntl && Util.hasFormatToParts()) {
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
          return m.type.toLowerCase() === 'timezonename';
        });
        return parsed ? parsed.value : null;
      } else if (hasIntl) {
        // this probably doesn't work for all locales
        var without = new Intl.DateTimeFormat(locale, intl).format(date),
            included = new Intl.DateTimeFormat(locale, modified).format(date),
            diffed = included.substring(without.length),
            trimmed = diffed.replace(/^[, ]+/, '');
        return trimmed;
      } else {
        return null;
      }
    }

    // signedOffset('-5', '30') -> -330

  }, {
    key: 'signedOffset',
    value: function signedOffset(offHourStr, offMinuteStr) {
      var offHour = parseInt(offHourStr, 10) || 0,
          offMin = parseInt(offMinuteStr, 10) || 0,
          offMinSigned = offHour < 0 ? -offMin : offMin;
      return offHour * 60 + offMinSigned;
    }

    // COERCION

  }, {
    key: 'friendlyDuration',
    value: function friendlyDuration(duration) {
      if (Util.isNumber(duration)) {
        return Duration.fromMillis(duration);
      } else if (duration instanceof Duration) {
        return duration;
      } else if (duration instanceof Object) {
        return Duration.fromObject(duration);
      } else {
        throw new InvalidArgumentError('Unknown duration argument');
      }
    }
  }, {
    key: 'friendlyDateTime',
    value: function friendlyDateTime(dateTimeish) {
      if (dateTimeish instanceof DateTime) {
        return dateTimeish;
      } else if (dateTimeish.valueOf && Util.isNumber(dateTimeish.valueOf())) {
        return DateTime.fromJSDate(dateTimeish);
      } else if (dateTimeish instanceof Object) {
        return DateTime.fromObject(dateTimeish);
      } else {
        throw new InvalidArgumentError('Unknown datetime argument');
      }
    }
  }, {
    key: 'normalizeZone',
    value: function normalizeZone(input) {
      if (Util.isUndefined(input) || input === null) {
        return Settings.defaultZone;
      } else if (input instanceof Zone) {
        return input;
      } else if (Util.isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === 'local') return LocalZone.instance;else if (lowered === 'utc') return FixedOffsetZone.utcInstance;else if (IANAZone.isValidSpecier(lowered)) return new IANAZone(input);else return FixedOffsetZone.parseSpecifier(lowered) || Settings.defaultZone;
      } else if (Util.isNumber(input)) {
        return FixedOffsetZone.instance(input);
      } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.offset) {
        // This is dumb, but the instanceof check above doesn't seem to really work
        // so we're duck checking it
        return input;
      } else {
        return Settings.defaultZone;
      }
    }
  }, {
    key: 'normalizeObject',
    value: function normalizeObject(obj, normalizer) {
      var ignoreUnknown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var normalized = {};
      for (var u in obj) {
        if (obj.hasOwnProperty(u)) {
          var v = obj[u];
          if (v !== null && !Util.isUndefined(v) && !Number.isNaN(v)) {
            var mapped = normalizer(u, ignoreUnknown);
            if (mapped) {
              normalized[mapped] = v;
            }
          }
        }
      }
      return normalized;
    }
  }, {
    key: 'timeObject',
    value: function timeObject(obj) {
      return Util.pick(obj, ['hour', 'minute', 'second', 'millisecond']);
    }

    // CAPABILITIES

  }, {
    key: 'hasIntl',
    value: function hasIntl() {
      return typeof Intl !== 'undefined' && Intl.DateTimeFormat;
    }
  }, {
    key: 'hasFormatToParts',
    value: function hasFormatToParts() {
      return !Util.isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
    }
  }]);
  return Util;
}();

/*
This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
*/

function combineRegexes() {
  for (var _len = arguments.length, regexes = Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, '');
  return RegExp('^' + full + '$');
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var _ref2 = slicedToArray(_ref, 3),
          mergedVals = _ref2[0],
          mergedZone = _ref2[1],
          cursor = _ref2[2];

      var _ex = ex(m, cursor),
          _ex2 = slicedToArray(_ex, 3),
          val = _ex2[0],
          zone = _ex2[1],
          next = _ex2[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;

      var _ref4 = slicedToArray(_ref3, 2);

      var regex = _ref4[0];
      var extractor = _ref4[1];

      var m = regex.exec(s);
      if (m) {
        return extractor(m);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i = void 0;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInt(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/;
var isoTimeRegex = RegExp('' + isoTimeBaseRegex.source + offsetRegex.source + '?');
var isoTimeExtensionRegex = RegExp('(?:T' + isoTimeRegex.source + ')?');
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)-?(\d)/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse('weekYear', 'weekNumber', 'weekDay');
var extractISOOrdinalData = simpleParse('year', 'ordinal');
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + ' ?(?:' + offsetRegex.source + '|([a-zA-Z_]{1,256}/[a-zA-Z_]{1,256}))?');
var sqlTimeExtensionRegex = RegExp('(?: ' + sqlTimeRegex.source + ')?');

function extractISOYmd(match, cursor) {
  var item = {
    year: parseInt(match[cursor]),
    month: parseInt(match[cursor + 1]) || 1,
    day: parseInt(match[cursor + 2]) || 1
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: parseInt(match[cursor]) || 0,
    minute: parseInt(match[cursor + 1]) || 0,
    second: parseInt(match[cursor + 2]) || 0,
    millisecond: Util.parseMillis(match[cursor + 3])
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = Util.signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? new IANAZone(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO duration parsing

var isoDuration = /^P(?:(?:(\d{1,9})Y)?(?:(\d{1,9})M)?(?:(\d{1,9})D)?(?:T(?:(\d{1,9})H)?(?:(\d{1,9})M)?(?:(\d{1,9})S)?)?|(\d{1,9})W)$/;

function extractISODuration(match) {
  var _match = slicedToArray(match, 8),
      yearStr = _match[1],
      monthStr = _match[2],
      dayStr = _match[3],
      hourStr = _match[4],
      minuteStr = _match[5],
      secondStr = _match[6],
      weekStr = _match[7];

  return {
    years: parseInt(yearStr),
    months: parseInt(monthStr),
    weeks: parseInt(weekStr),
    days: parseInt(dayStr),
    hours: parseInt(hourStr),
    minutes: parseInt(minuteStr),
    seconds: parseInt(secondStr)
  };
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? Util.untruncateYear(parseInt(yearStr)) : parseInt(yearStr),
    month: monthStr.length === 2 ? parseInt(monthStr, 10) : English.monthsShort.indexOf(monthStr) + 1,
    day: parseInt(dayStr),
    hour: parseInt(hourStr),
    minute: parseInt(minuteStr)
  };

  if (secondStr) result.second = parseInt(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? English.weekdaysLong.indexOf(weekdayStr) + 1 : English.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var _match2 = slicedToArray(match, 12),
      weekdayStr = _match2[1],
      dayStr = _match2[2],
      monthStr = _match2[3],
      yearStr = _match2[4],
      hourStr = _match2[5],
      minuteStr = _match2[6],
      secondStr = _match2[7],
      obsOffset = _match2[8],
      milOffset = _match2[9],
      offHourStr = _match2[10],
      offMinuteStr = _match2[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  var offset = void 0;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = Util.signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

// http date

var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var _match3 = slicedToArray(match, 8),
      weekdayStr = _match3[1],
      dayStr = _match3[2],
      monthStr = _match3[3],
      yearStr = _match3[4],
      hourStr = _match3[5],
      minuteStr = _match3[6],
      secondStr = _match3[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var _match4 = slicedToArray(match, 8),
      weekdayStr = _match4[1],
      monthStr = _match4[2],
      dayStr = _match4[3],
      hourStr = _match4[4],
      minuteStr = _match4[5],
      secondStr = _match4[6],
      yearStr = _match4[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

/**
 * @private
 */

var RegexParser = function () {
  function RegexParser() {
    classCallCheck(this, RegexParser);
  }

  createClass(RegexParser, null, [{
    key: 'parseISODate',
    value: function parseISODate(s) {
      return parse(s, [combineRegexes(isoYmdRegex, isoTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset)], [combineRegexes(isoWeekRegex, isoTimeExtensionRegex), combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset)], [combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex), combineExtractors(extractISOOrdinalData, extractISOTime)], [combineRegexes(isoTimeRegex), combineExtractors(extractISOTime, extractISOOffset)]);
    }
  }, {
    key: 'parseRFC2822Date',
    value: function parseRFC2822Date(s) {
      return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
    }
  }, {
    key: 'parseHTTPDate',
    value: function parseHTTPDate(s) {
      return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
    }
  }, {
    key: 'parseISODuration',
    value: function parseISODuration(s) {
      return parse(s, [isoDuration, extractISODuration]);
    }
  }, {
    key: 'parseSQL',
    value: function parseSQL(s) {
      return parse(s, [combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone)], [combineRegexes(sqlTimeRegex), combineExtractors(extractISOTime, extractISOOffset, extractIANAZone)]);
    }
  }]);
  return RegexParser;
}();

var INVALID$1 = 'Invalid Duration';

// unit conversion constants
var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
  minutes: { seconds: 60, milliseconds: 60 * 1000 },
  seconds: { milliseconds: 1000 }
};
var casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix);
var daysInYearAccurate = 146097.0 / 400;
var daysInMonthAccurate = 146097.0 / 4800;
var accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix);

// units ordered by size
var orderedUnits$1 = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];

// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts) {
  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

// some functions really care about the absolute value of a duration, so combined with
// normalize() this tells us whether this duration is positive or negative
function isHighOrderNegative(obj) {
  // only rule is that the highest-order part must be non-negative
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = orderedUnits$1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var k = _step.value;

      if (obj[k]) return obj[k] < 0;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link years}, {@link months}, {@link weeks}, {@link days}, {@link hours}, {@link minutes}, {@link seconds}, {@link milliseconds} accessors.
 * * **Configuration** See  {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link plus}, {@link minus}, {@link normalize}, {@link set}, {@link reconfigure}, {@link shiftTo}, and {@link negate}.
 * * **Output** To convert the Duration into other representations, see {@link as}, {@link toISO}, {@link toFormat}, and {@link toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
var Duration = function () {
  /**
   * @private
   */
  function Duration(config) {
    classCallCheck(this, Duration);

    var accurate = config.conversionAccuracy === 'longterm' || false;
    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? 'longterm' : 'casual';
    /**
     * @access private
     */
    this.invalid = config.invalidReason || null;
    /**
     * @access private
     */
    this.matrix = accurate ? accurateMatrix : casualMatrix;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  createClass(Duration, [{
    key: 'toFormat',


    /**
     * Returns a string representation of this Duration formatted according to the specified format string.
     * @param {string} fmt - the format string
     * @param {object} opts - options
     * @param {boolean} opts.round - round numerical values
     * @return {string}
     */
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.isValid ? Formatter.create(this.loc, opts).formatDurationFromString(this, fmt) : INVALID$1;
    }

    /**
     * Returns a Javascript object with this Duration's values.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {object}
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) return {};

      var base = Object.assign({}, this.values);

      if (opts.includeConfig) {
        base.conversionAccuracy = this.conversionAccuracy;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @return {string}
     */

  }, {
    key: 'toISO',
    value: function toISO() {
      // we could use the formatter, but this is an easier way to get the minimum string
      if (!this.isValid) return null;

      var s = 'P',
          norm = this.normalize();

      // ISO durations are always positive, so take the absolute value
      norm = isHighOrderNegative(norm.values) ? norm.negate() : norm;

      if (norm.years > 0) s += norm.years + 'Y';
      if (norm.months > 0) s += norm.months + 'M';
      if (norm.days > 0 || norm.weeks > 0) s += norm.days + norm.weeks * 7 + 'D';
      if (norm.hours > 0 || norm.minutes > 0 || norm.seconds > 0 || norm.milliseconds > 0) s += 'T';
      if (norm.hours > 0) s += norm.hours + 'H';
      if (norm.minutes > 0) s += norm.minutes + 'M';
      if (norm.seconds > 0) s += norm.seconds + 'S';
      return s;
    }

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.toISO();
    }

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.toISO();
    }

    /**
     * Returns a string representation of this Duration appropriate for the REPL.
     * @return {string}
     */

  }, {
    key: 'inspect',
    value: function inspect() {
      if (this.isValid) {
        return 'Duration {\n  values: ' + this.toISO() + ',\n  locale: ' + this.locale + ',\n  conversionAccuracy: ' + this.conversionAccuracy + ' }';
      } else {
        return 'Duration { Invalid, reason: ' + this.invalidReason + ' }';
      }
    }

    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|number|object} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */

  }, {
    key: 'plus',
    value: function plus(duration) {
      if (!this.isValid) return this;

      var dur = Util.friendlyDuration(duration),
          result = {};

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = orderedUnits$1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var k = _step2.value;

          var val = dur.get(k) + this.get(k);
          if (val !== 0) {
            result[k] = val;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return clone$1(this, { values: result }, true);
    }

    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|number|object} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */

  }, {
    key: 'minus',
    value: function minus(duration) {
      if (!this.isValid) return this;

      var dur = Util.friendlyDuration(duration);
      return this.plus(dur.negate());
    }

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
     * @return {number}
     */

  }, {
    key: 'get',
    value: function get$$1(unit) {
      return this[Duration.normalizeUnit(unit)];
    }

    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */

  }, {
    key: 'set',
    value: function set$$1(values) {
      var mixed = Object.assign(this.values, Util.normalizeObject(values, Duration.normalizeUnit));
      return clone$1(this, { values: mixed });
    }

    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */

  }, {
    key: 'reconfigure',
    value: function reconfigure() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref.locale,
          numberingSystem = _ref.numberingSystem,
          conversionAccuracy = _ref.conversionAccuracy;

      var loc = this.loc.clone({ locale: locale, numberingSystem: numberingSystem }),
          opts = { loc: loc };

      if (conversionAccuracy) {
        opts.conversionAccuracy = conversionAccuracy;
      }

      return clone$1(this, opts);
    }

    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */

  }, {
    key: 'as',
    value: function as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }

    /**
     * Reduce this Duration to its canonical representation in its current units.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @return {Duration}
     */

  }, {
    key: 'normalize',
    value: function normalize() {
      if (!this.isValid) return this;

      var neg = isHighOrderNegative(this.values),
          dur = neg ? this.negate() : this,
          shifted = dur.shiftTo.apply(dur, toConsumableArray(Object.keys(this.values)));
      return neg ? shifted.negate() : shifted;
    }

    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */

  }, {
    key: 'shiftTo',
    value: function shiftTo() {
      for (var _len = arguments.length, units = Array(_len), _key = 0; _key < _len; _key++) {
        units[_key] = arguments[_key];
      }

      if (!this.isValid) return this;

      if (units.length === 0) {
        return this;
      }

      units = units.map(function (u) {
        return Duration.normalizeUnit(u);
      });

      var built = {},
          accumulated = {},
          vals = this.toObject();
      var lastUnit = void 0;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = orderedUnits$1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var k = _step3.value;

          if (units.indexOf(k) >= 0) {
            lastUnit = k;

            var own = 0;

            // anything we haven't boiled down yet should get boiled to this unit
            for (var ak in accumulated) {
              if (accumulated.hasOwnProperty(ak)) {
                own += this.matrix[ak][k] * accumulated[ak];
                accumulated[ak] = 0;
              }
            }

            // plus anything that's already in this unit
            if (Util.isNumber(vals[k])) {
              own += vals[k];
            }

            var i = Math.trunc(own);
            built[k] = i;
            accumulated[k] = own - i;

            // plus anything further down the chain that should be rolled up in to this
            for (var down in vals) {
              if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
                var conv = this.matrix[k][down],
                    added = Math.floor(vals[down] / conv);
                built[k] += added;
                vals[down] -= added * conv;
              }
            }
            // otherwise, keep it in the wings to boil it later
          } else if (Util.isNumber(vals[k])) {
            accumulated[k] = vals[k];
          }
        }

        // anything leftover becomes the decimal for the last unit
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (lastUnit) {
        for (var key in accumulated) {
          if (accumulated.hasOwnProperty(key)) {
            if (accumulated[key] > 0) {
              built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
          }
        }
      }
      return clone$1(this, { values: built }, true);
    }

    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */

  }, {
    key: 'negate',
    value: function negate() {
      if (!this.isValid) return this;
      var negated = {};
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(this.values)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var k = _step4.value;

          negated[k] = -this.values[k];
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return clone$1(this, { values: negated }, true);
    }

    /**
     * Get the years.
     * @return {number}
     */

  }, {
    key: 'equals',


    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    value: function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }

      if (!this.loc.equals(other.loc)) {
        return false;
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = orderedUnits$1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var u = _step5.value;

          if (this.values[u] !== other.values[u]) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return true;
    }
  }, {
    key: 'locale',


    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @return {string}
     */
    get: function get$$1() {
      return this.loc.locale;
    }

    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @return {string}
     */

  }, {
    key: 'numberingSystem',
    get: function get$$1() {
      return this.loc.numberingSystem;
    }
  }, {
    key: 'years',
    get: function get$$1() {
      return this.isValid ? this.values.years || 0 : NaN;
    }

    /**
     * Get the months.
     * @return {number}
     */

  }, {
    key: 'months',
    get: function get$$1() {
      return this.isValid ? this.values.months || 0 : NaN;
    }

    /**
     * Get the weeks
     * @return {number}
     */

  }, {
    key: 'weeks',
    get: function get$$1() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }

    /**
     * Get the days.
     * @return {number}
     */

  }, {
    key: 'days',
    get: function get$$1() {
      return this.isValid ? this.values.days || 0 : NaN;
    }

    /**
     * Get the hours.
     * @return {number}
     */

  }, {
    key: 'hours',
    get: function get$$1() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }

    /**
     * Get the minutes.
     * @return {number}
     */

  }, {
    key: 'minutes',
    get: function get$$1() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }

    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: 'seconds',
    get: function get$$1() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }

    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: 'milliseconds',
    get: function get$$1() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }

    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalid;
    }
  }], [{
    key: 'fromMillis',
    value: function fromMillis(count, opts) {
      return Duration.fromObject(Object.assign({ milliseconds: count }, opts));
    }

    /**
     * Create an Duration from a Javascript object with keys like 'years' and 'hours'.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {string} [obj.locale='en-US'] - the locale to use
     * @param {string} obj.numberingSystem - the numbering system to use
     * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */

  }, {
    key: 'fromObject',
    value: function fromObject(obj) {
      return new Duration({
        values: Util.normalizeObject(obj, Duration.normalizeUnit, true),
        loc: Locale.fromObject(obj),
        conversionAccuracy: obj.conversionAccuracy
      });
    }

    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [obj.locale='en-US'] - the locale to use
     * @param {string} obj.numberingSystem - the numbering system to use
     * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M4DT12H30M5S').toObject() //=> { years: 3, months: 6, day: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */

  }, {
    key: 'fromISO',
    value: function fromISO(text, opts) {
      var obj = Object.assign(RegexParser.parseISODuration(text), opts);
      return Duration.fromObject(obj);
    }

    /**
     * Create an invalid Duration.
     * @param {string} reason - reason this is invalid
     * @return {Duration}
     */

  }, {
    key: 'invalid',
    value: function invalid(reason) {
      if (!reason) {
        throw new InvalidArgumentError('need to specify a reason the Duration is invalid');
      }
      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(reason);
      } else {
        return new Duration({ invalidReason: reason });
      }
    }

    /**
     * @private
     */

  }, {
    key: 'normalizeUnit',
    value: function normalizeUnit(unit) {
      var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var normalized = {
        year: 'years',
        years: 'years',
        month: 'months',
        months: 'months',
        week: 'weeks',
        weeks: 'weeks',
        day: 'days',
        days: 'days',
        hour: 'hours',
        hours: 'hours',
        minute: 'minutes',
        minutes: 'minutes',
        second: 'seconds',
        seconds: 'seconds',
        millisecond: 'milliseconds',
        milliseconds: 'milliseconds'
      }[unit ? unit.toLowerCase() : unit];

      if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);

      return normalized;
    }
  }]);
  return Duration;
}();

var INVALID$2 = 'Invalid Interval';

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  return !!start && !!end && start.isValid && end.isValid && start <= end;
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output*** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toFormat}, and {@link toDuration}.
 */
var Interval = function () {
  /**
   * @private
   */
  function Interval(config) {
    classCallCheck(this, Interval);

    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalidReason || null;
  }

  /**
   * Create an invalid Interval.
   * @return {Interval}
   */


  createClass(Interval, [{
    key: 'length',


    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    value: function length() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';

      return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
    }

    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @return {number}
     */

  }, {
    key: 'count',
    value: function count() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';

      if (!this.isValid) return NaN;
      var start = this.start.startOf(unit),
          end = this.end.startOf(unit);
      return Math.floor(end.diff(start, unit).get(unit)) + 1;
    }

    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */

  }, {
    key: 'hasSame',
    value: function hasSame(unit) {
      return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
    }

    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }

    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: 'isAfter',
    value: function isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    }

    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {Datetime} dateTime
     * @return {boolean}
     */

  }, {
    key: 'isBefore',
    value: function isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e.plus(1) < dateTime;
    }

    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: 'contains',
    value: function contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    }

    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */

  }, {
    key: 'set',
    value: function set$$1() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          start = _ref.start,
          end = _ref.end;

      if (!this.isValid) return this;
      return Interval.fromDateTimes(start || this.s, end || this.e);
    }

    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTimes} dateTimes - the unit of time to count.
     * @return {[Interval]}
     */

  }, {
    key: 'splitAt',
    value: function splitAt() {
      if (!this.isValid) return [];

      for (var _len = arguments.length, dateTimes = Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }

      var sorted = dateTimes.map(Util.friendlyDateTime).sort(),
          results = [];
      var s = this.s,
          i = 0;


      while (s < this.e) {
        var added = sorted[i] || this.e,
            next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        i += 1;
      }

      return results;
    }

    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|number|object} duration - The length of each resulting interval.
     * @return {[Interval]}
     */

  }, {
    key: 'splitBy',
    value: function splitBy(duration) {
      if (!this.isValid) return [];
      var dur = Util.friendlyDuration(duration),
          results = [];
      var s = this.s,
          added = void 0,
          next = void 0;


      while (s < this.e) {
        added = s.plus(dur);
        next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
      }

      return results;
    }

    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {[Interval]}
     */

  }, {
    key: 'divideEqually',
    value: function divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }

    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'overlaps',
    value: function overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }

    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'abutsStart',
    value: function abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }

    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'abutsEnd',
    value: function abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }

    /**
     * Return whether this Interval engulfs the start and end of the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'engulfs',
    value: function engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    }

    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(other) {
      return this.s.equals(other.s) && this.e.equals(other.e);
    }

    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */

  }, {
    key: 'intersection',
    value: function intersection(other) {
      if (!this.isValid) return this;
      var s = this.s > other.s ? this.s : other.s,
          e = this.e < other.e ? this.e : other.e;

      if (s > e) {
        return null;
      } else {
        return Interval.fromDateTimes(s, e);
      }
    }

    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */

  }, {
    key: 'union',
    value: function union(other) {
      if (!this.isValid) return this;
      var s = this.s < other.s ? this.s : other.s,
          e = this.e > other.e ? this.e : other.e;
      return Interval.fromDateTimes(s, e);
    }

    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */

  }, {
    key: 'difference',


    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Interval}
     */
    value: function difference() {
      var _this = this;

      for (var _len2 = arguments.length, intervals = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        intervals[_key2] = arguments[_key2];
      }

      return Interval.xor([this].concat(intervals)).map(function (i) {
        return _this.intersection(i);
      }).filter(function (i) {
        return i && !i.isEmpty();
      });
    }

    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      if (!this.isValid) return INVALID$2;
      return '[' + this.s.toISO() + ' \u2013 ' + this.e.toISO() + ')';
    }

    /**
     * Returns a string representation of this Interval appropriate for the REPL.
     * @return {string}
     */

  }, {
    key: 'inspect',
    value: function inspect() {
      if (this.isValid) {
        return 'Interval {\n  start: ' + this.start.toISO() + ',\n  end: ' + this.end.toISO() + ',\n  zone:   ' + this.start.zone.name + ',\n  locale:   ' + this.start.locale + ' }';
      } else {
        return 'Interval { Invalid, reason: ' + this.invalidReason + ' }';
      }
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {object} opts - The same options as {@link DateTime.toISO}
     * @return {string}
     */

  }, {
    key: 'toISO',
    value: function toISO(opts) {
      if (!this.isValid) return INVALID$2;
      return this.s.toISO(opts) + '/' + this.e.toISO(opts);
    }

    /**
     * Returns a string representation of this Interval formatted according to the specified format string.
     * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
     * @param {object} opts - options
     * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
     * @return {string}
     */

  }, {
    key: 'toFormat',
    value: function toFormat(dateFormat) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$separator = _ref2.separator,
          separator = _ref2$separator === undefined ? ' – ' : _ref2$separator;

      if (!this.isValid) return INVALID$2;
      return '' + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    }

    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */

  }, {
    key: 'toDuration',
    value: function toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }
      return this.e.diff(this.s, unit, opts);
    }
  }, {
    key: 'start',


    /**
     * Returns the start of the Interval
     * @return {DateTime}
     */
    get: function get$$1() {
      return this.isValid ? this.s : null;
    }

    /**
     * Returns the end of the Interval
     * @return {DateTime}
     */

  }, {
    key: 'end',
    get: function get$$1() {
      return this.isValid ? this.e : null;
    }

    /**
     * Returns whether this Interval's end is at least its start, i.e. that the Interval isn't 'backwards'.
     * @return {boolean}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalid;
    }
  }], [{
    key: 'invalid',
    value: function invalid(reason) {
      if (!reason) {
        throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
      }
      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(reason);
      } else {
        return new Interval({ invalidReason: reason });
      }
    }

    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|object|Date} start
     * @param {DateTime|object|Date} end
     * @return {Interval}
     */

  }, {
    key: 'fromDateTimes',
    value: function fromDateTimes(start, end) {
      var builtStart = Util.friendlyDateTime(start),
          builtEnd = Util.friendlyDateTime(end);

      return new Interval({
        start: builtStart,
        end: builtEnd,
        invalidReason: validateStartEnd(builtStart, builtEnd) ? null : 'invalid endpoints'
      });
    }

    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|object|Date} start
     * @param {Duration|number|object} duration - the length of the Interval.
     * @return {Interval}
     */

  }, {
    key: 'after',
    value: function after(start, duration) {
      var dur = Util.friendlyDuration(duration),
          dt = Util.friendlyDateTime(start);
      return Interval.fromDateTimes(dt, dt.plus(dur));
    }

    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|object|Date} end
     * @param {Duration|number|object} duration - the length of the Interval.
     * @return {Interval}
     */

  }, {
    key: 'before',
    value: function before(end, duration) {
      var dur = Util.friendlyDuration(duration),
          dt = Util.friendlyDateTime(end);
      return Interval.fromDateTimes(dt.minus(dur), dt);
    }

    /**
     * Create an Interval from an ISO 8601 string
     * @param {string} string - the ISO string to parse
     * @param {object} opts - options to pass {@see DateTime.fromISO}
     * @return {Interval}
     */

  }, {
    key: 'fromISO',
    value: function fromISO(string, opts) {
      if (string) {
        var _string$split = string.split(/\//),
            _string$split2 = slicedToArray(_string$split, 2),
            s = _string$split2[0],
            e = _string$split2[1];

        if (s && e) {
          return Interval.fromDateTimes(DateTime.fromISO(s, opts), DateTime.fromISO(e, opts));
        }
      }
      return Interval.invalid('invalid ISO format');
    }
  }, {
    key: 'merge',
    value: function merge(intervals) {
      var _intervals$sort$reduc = intervals.sort(function (a, b) {
        return a.s - b.s;
      }).reduce(function (_ref3, item) {
        var _ref4 = slicedToArray(_ref3, 2),
            sofar = _ref4[0],
            current = _ref4[1];

        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      }, [[], null]),
          _intervals$sort$reduc2 = slicedToArray(_intervals$sort$reduc, 2),
          found = _intervals$sort$reduc2[0],
          final = _intervals$sort$reduc2[1];

      if (final) {
        found.push(final);
      }
      return found;
    }

    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */

  }, {
    key: 'xor',
    value: function xor(intervals) {
      var _Array$prototype;

      var start = null,
          currentCount = 0;
      var results = [],
          ends = intervals.map(function (i) {
        return [{ time: i.s, type: 's' }, { time: i.e, type: 'e' }];
      }),
          flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, toConsumableArray(ends)),
          arr = flattened.sort(function (a, b) {
        return a.time - b.time;
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          currentCount += i.type === 's' ? 1 : -1;

          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval.fromDateTimes(start, i.time));
            }

            start = null;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Interval.merge(results);
    }
  }]);
  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
var Info = function () {
  function Info() {
    classCallCheck(this, Info);
  }

  createClass(Info, null, [{
    key: 'hasDST',

    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    value: function hasDST() {
      var zone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Settings.defaultZone;

      var proto = DateTime.local().setZone(zone).set({ month: 12 });

      return !zone.universal && proto.offset !== proto.set({ month: 6 }).offset;
    }

    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {[string]}
     */

  }, {
    key: 'months',
    value: function months() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$locale = _ref.locale,
          locale = _ref$locale === undefined ? null : _ref$locale,
          _ref$numberingSystem = _ref.numberingSystem,
          numberingSystem = _ref$numberingSystem === undefined ? null : _ref$numberingSystem,
          _ref$outputCalendar = _ref.outputCalendar,
          outputCalendar = _ref$outputCalendar === undefined ? 'gregory' : _ref$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length);
    }

    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numbering=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {[string]}
     */

  }, {
    key: 'monthsFormat',
    value: function monthsFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$locale = _ref2.locale,
          locale = _ref2$locale === undefined ? null : _ref2$locale,
          _ref2$numberingSystem = _ref2.numberingSystem,
          numberingSystem = _ref2$numberingSystem === undefined ? null : _ref2$numberingSystem,
          _ref2$outputCalendar = _ref2.outputCalendar,
          outputCalendar = _ref2$outputCalendar === undefined ? 'gregory' : _ref2$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
    }

    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numbering=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {[string]}
     */

  }, {
    key: 'weekdays',
    value: function weekdays() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$locale = _ref3.locale,
          locale = _ref3$locale === undefined ? null : _ref3$locale,
          _ref3$numberingSystem = _ref3.numberingSystem,
          numberingSystem = _ref3$numberingSystem === undefined ? null : _ref3$numberingSystem;

      return Locale.create(locale, numberingSystem, null).weekdays(length);
    }

    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numbering=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {[string]}
     */

  }, {
    key: 'weekdaysFormat',
    value: function weekdaysFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$locale = _ref4.locale,
          locale = _ref4$locale === undefined ? null : _ref4$locale,
          _ref4$numberingSystem = _ref4.numberingSystem,
          numberingSystem = _ref4$numberingSystem === undefined ? null : _ref4$numberingSystem;

      return Locale.create(locale, numberingSystem, null).weekdays(length, true);
    }

    /**
     * Return an array of meridiems.
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'de' }) //=> [ 'vorm.', 'nachm.' ]
     * @return {[string]}
     */

  }, {
    key: 'meridiems',
    value: function meridiems() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$locale = _ref5.locale,
          locale = _ref5$locale === undefined ? null : _ref5$locale;

      return Locale.create(locale).meridiems();
    }

    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {[string]}
     */

  }, {
    key: 'eras',
    value: function eras() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'short';

      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$locale = _ref6.locale,
          locale = _ref6$locale === undefined ? null : _ref6$locale;

      return Locale.create(locale, null, 'gregory').eras(length);
    }

    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `timezones`: whether this environment supports IANA timezones
     * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
     * * `intl`: whether this environment supports general internationalization
     * @example Info.feature() //=> { intl: true, intlTokens: false, timezones: true }
     * @return {object}
     */

  }, {
    key: 'features',
    value: function features() {
      var intl = false,
          intlTokens = false,
          zones = false;

      if (Util.hasIntl()) {
        intl = true;
        intlTokens = Util.hasFormatToParts();

        try {
          zones = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York' }).resolvedOptions().timeZone === 'America/New_York';
        } catch (e) {
          zones = false;
        }
      }

      return { intl: intl, intlTokens: intlTokens, zones: zones };
    }
  }]);
  return Info;
}();

var MISSING_FTP = 'missing Intl.DateTimeFormat.formatToParts support';

function intUnit(regex) {
  var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
    return i;
  };

  return { regex: regex, deser: function deser(_ref) {
      var _ref2 = slicedToArray(_ref, 1),
          s = _ref2[0];

      return post(parseInt(s));
    } };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, '\\.?');
}

function stripInsensitivities(s) {
  return s.replace(/\./, '').toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join('|')),
      deser: function deser(_ref3) {
        var _ref4 = slicedToArray(_ref3, 1),
            s = _ref4[0];

        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return { regex: regex, deser: function deser(_ref5) {
      var _ref6 = slicedToArray(_ref5, 3),
          h = _ref6[1],
          m = _ref6[2];

      return Util.signedOffset(h, m);
    }, groups: groups };
}

function simple(regex) {
  return { regex: regex, deser: function deser(_ref7) {
      var _ref8 = slicedToArray(_ref7, 1),
          s = _ref8[0];

      return s;
    } };
}

function unitForToken(token, loc) {
  var one = /\d/,
      two = /\d{2}/,
      three = /\d{3}/,
      four = /\d{4}/,
      oneOrTwo = /\d{1,2}/,
      oneToThree = /\d{1,3}/,
      twoToFour = /\d{2,4}/,
      literal = function literal(t) {
    return { regex: RegExp(t.val), deser: function deser(_ref9) {
        var _ref10 = slicedToArray(_ref9, 1),
            s = _ref10[0];

        return s;
      }, literal: true };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      // era
      case 'G':
        return oneOf(loc.eras('short', false), 0);
      case 'GG':
        return oneOf(loc.eras('long', false), 0);
      // years
      case 'y':
        return intUnit(/\d{1,6}/);
      case 'yy':
        return intUnit(twoToFour, Util.untruncateYear);
      case 'yyyy':
        return intUnit(four);
      case 'yyyyy':
        return intUnit(/\d{4,6}/);
      case 'yyyyyy':
        return intUnit(/\d{6}/);
      // months
      case 'M':
        return intUnit(oneOrTwo);
      case 'MM':
        return intUnit(two);
      case 'MMM':
        return oneOf(loc.months('short', false, false), 1);
      case 'MMMM':
        return oneOf(loc.months('long', false, false), 1);
      case 'L':
        return intUnit(oneOrTwo);
      case 'LL':
        return intUnit(two);
      case 'LLL':
        return oneOf(loc.months('short', true, false), 1);
      case 'LLLL':
        return oneOf(loc.months('long', true, false), 1);
      // dates
      case 'd':
        return intUnit(oneOrTwo);
      case 'dd':
        return intUnit(two);
      // ordinals
      case 'o':
        return intUnit(oneToThree);
      case 'ooo':
        return intUnit(three);
      // time
      case 'HH':
        return intUnit(two);
      case 'H':
        return intUnit(oneOrTwo);
      case 'hh':
        return intUnit(two);
      case 'h':
        return intUnit(oneOrTwo);
      case 'mm':
        return intUnit(two);
      case 'm':
        return intUnit(oneOrTwo);
      case 's':
        return intUnit(oneOrTwo);
      case 'ss':
        return intUnit(two);
      case 'S':
        return intUnit(oneToThree);
      case 'SSS':
        return intUnit(three);
      case 'u':
        return simple(/\d{1,9}/);
      // meridiem
      case 'a':
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)
      case 'kkkk':
        return intUnit(four);
      case 'kk':
        return intUnit(twoToFour, Util.untruncateYear);
      // weekNumber (W)
      case 'W':
        return intUnit(oneOrTwo);
      case 'WW':
        return intUnit(two);
      // weekdays
      case 'E':
      case 'c':
        return intUnit(one);
      case 'EEE':
        return oneOf(loc.weekdays('short', false, false), 1);
      case 'EEEE':
        return oneOf(loc.weekdays('long', false, false), 1);
      case 'ccc':
        return oneOf(loc.weekdays('short', true, false), 1);
      case 'cccc':
        return oneOf(loc.weekdays('long', true, false), 1);
      // offset/zone
      case 'Z':
      case 'ZZ':
        return offset(/([+-]\d{1,2})(?::(\d{2}))?/, 2);
      case 'ZZZ':
        return offset(/([+-]\d{1,2})(\d{2})?/, 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case 'z':
        return simple(/[A-Za-z_]{1,256}\/[A-Za-z_]{1,256}/);
      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };

  unit.token = token;

  return unit;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + '(' + r.source + ')';
  }, '');
  return ['^' + re + '$', units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;
    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case 'S':
        return 'millisecond';
      case 's':
        return 'second';
      case 'm':
        return 'minute';
      case 'h':
      case 'H':
        return 'hour';
      case 'd':
        return 'day';
      case 'o':
        return 'ordinal';
      case 'L':
      case 'M':
        return 'month';
      case 'y':
        return 'year';
      case 'E':
      case 'c':
        return 'weekday';
      case 'W':
        return 'weekNumber';
      case 'k':
        return 'weekYear';
      default:
        return null;
    }
  };

  var zone = void 0;
  if (!Util.isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!Util.isUndefined(matches.z)) {
    zone = new IANAZone(matches.z);
  } else {
    zone = null;
  }

  if (!Util.isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!Util.isUndefined(matches.u)) {
    matches.S = Util.parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone];
}

/**
 * @private
 */

var TokenParser = function () {
  function TokenParser(loc) {
    classCallCheck(this, TokenParser);

    this.loc = loc;
  }

  createClass(TokenParser, [{
    key: 'explainParse',
    value: function explainParse(input, format) {
      var _this = this;

      var tokens = Formatter.parseFormat(format),
          units = tokens.map(function (t) {
        return unitForToken(t, _this.loc);
      }),
          disqualifyingUnit = units.find(function (t) {
        return t.invalidReason;
      });

      if (disqualifyingUnit) {
        return { input: input, tokens: tokens, invalidReason: disqualifyingUnit.invalidReason };
      } else {
        var _buildRegex = buildRegex(units),
            _buildRegex2 = slicedToArray(_buildRegex, 2),
            regexString = _buildRegex2[0],
            handlers = _buildRegex2[1],
            regex = RegExp(regexString, 'i'),
            _match = match(input, regex, handlers),
            _match2 = slicedToArray(_match, 2),
            rawMatches = _match2[0],
            matches = _match2[1],
            _ref11 = matches ? dateTimeFromMatches(matches) : [null, null],
            _ref12 = slicedToArray(_ref11, 2),
            result = _ref12[0],
            zone = _ref12[1];

        return { input: input, tokens: tokens, regex: regex, rawMatches: rawMatches, matches: matches, result: result, zone: zone };
      }
    }
  }, {
    key: 'parseDateTime',
    value: function parseDateTime(input, format) {
      var _explainParse = this.explainParse(input, format),
          result = _explainParse.result,
          zone = _explainParse.zone,
          invalidReason = _explainParse.invalidReason;

      return [result, zone, invalidReason];
    }
  }]);
  return TokenParser;
}();

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function lastWeekNumber(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function computeOrdinal(year, month, day) {
  return day + (Util.isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = Util.isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return { month: month0 + 1, day: day };
}

/**
 * @private
 */

var Conversions = function () {
  function Conversions() {
    classCallCheck(this, Conversions);
  }

  createClass(Conversions, null, [{
    key: 'gregorianToWeek',
    value: function gregorianToWeek(gregObj) {
      var year = gregObj.year,
          month = gregObj.month,
          day = gregObj.day,
          ordinal = computeOrdinal(year, month, day),
          weekday = dayOfWeek(year, month, day);


      var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
          weekYear = void 0;

      if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = lastWeekNumber(weekYear);
      } else if (weekNumber > lastWeekNumber(year)) {
        weekYear = year + 1;
        weekNumber = 1;
      } else {
        weekYear = year;
      }

      return Object.assign({ weekYear: weekYear, weekNumber: weekNumber, weekday: weekday }, Util.timeObject(gregObj));
    }
  }, {
    key: 'weekToGregorian',
    value: function weekToGregorian(weekData) {
      var weekYear = weekData.weekYear,
          weekNumber = weekData.weekNumber,
          weekday = weekData.weekday,
          weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
          daysInYear = Util.daysInYear(weekYear);

      var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
          year = void 0;

      if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += Util.daysInYear(year);
      } else if (ordinal > daysInYear) {
        year = weekYear + 1;
        ordinal -= Util.daysInYear(year);
      } else {
        year = weekYear;
      }

      var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
          month = _uncomputeOrdinal.month,
          day = _uncomputeOrdinal.day;

      return Object.assign({ year: year, month: month, day: day }, Util.timeObject(weekData));
    }
  }, {
    key: 'gregorianToOrdinal',
    value: function gregorianToOrdinal(gregData) {
      var year = gregData.year,
          month = gregData.month,
          day = gregData.day,
          ordinal = computeOrdinal(year, month, day);


      return Object.assign({ year: year, ordinal: ordinal }, Util.timeObject(gregData));
    }
  }, {
    key: 'ordinalToGregorian',
    value: function ordinalToGregorian(ordinalData) {
      var year = ordinalData.year,
          ordinal = ordinalData.ordinal,
          _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
          month = _uncomputeOrdinal2.month,
          day = _uncomputeOrdinal2.day;

      return Object.assign({ year: year, month: month, day: day }, Util.timeObject(ordinalData));
    }
  }, {
    key: 'hasInvalidWeekData',
    value: function hasInvalidWeekData(obj) {
      var validYear = Util.isNumber(obj.weekYear),
          validWeek = Util.numberBetween(obj.weekNumber, 1, lastWeekNumber(obj.weekYear)),
          validWeekday = Util.numberBetween(obj.weekday, 1, 7);

      if (!validYear) {
        return 'weekYear out of range';
      } else if (!validWeek) {
        return 'week out of range';
      } else if (!validWeekday) {
        return 'weekday out of range';
      } else return false;
    }
  }, {
    key: 'hasInvalidOrdinalData',
    value: function hasInvalidOrdinalData(obj) {
      var validYear = Util.isNumber(obj.year),
          validOrdinal = Util.numberBetween(obj.ordinal, 1, Util.daysInYear(obj.year));

      if (!validYear) {
        return 'year out of range';
      } else if (!validOrdinal) {
        return 'ordinal out of range';
      } else return false;
    }
  }, {
    key: 'hasInvalidGregorianData',
    value: function hasInvalidGregorianData(obj) {
      var validYear = Util.isNumber(obj.year),
          validMonth = Util.numberBetween(obj.month, 1, 12),
          validDay = Util.numberBetween(obj.day, 1, Util.daysInMonth(obj.year, obj.month));

      if (!validYear) {
        return 'year out of range';
      } else if (!validMonth) {
        return 'month out of range';
      } else if (!validDay) {
        return 'day out of range';
      } else return false;
    }
  }, {
    key: 'hasInvalidTimeData',
    value: function hasInvalidTimeData(obj) {
      var validHour = Util.numberBetween(obj.hour, 0, 23),
          validMinute = Util.numberBetween(obj.minute, 0, 59),
          validSecond = Util.numberBetween(obj.second, 0, 59),
          validMillisecond = Util.numberBetween(obj.millisecond, 0, 999);

      if (!validHour) {
        return 'hour out of range';
      } else if (!validMinute) {
        return 'minute out of range';
      } else if (!validSecond) {
        return 'second out of range';
      } else if (!validMillisecond) {
        return 'millisecond out of range';
      } else return false;
    }
  }]);
  return Conversions;
}();

var INVALID = 'Invalid DateTime';
var INVALID_INPUT = 'invalid input';
var UNSUPPORTED_ZONE = 'unsupported zone';
var UNPARSABLE = 'unparsable';

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = Conversions.gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalidReason: inst.invalidReason
  };
  return new DateTime(Object.assign({}, current, alts, { old: current }));
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  var o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  var o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  var d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);

  // javascript is stupid and i hate it
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(obj.year);
  }
  return +d;
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  var oPre = inst.o,
      c = Object.assign({}, inst.c, {
    year: inst.c.year + dur.years,
    month: inst.c.month + dur.months,
    day: inst.c.day + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as('milliseconds'),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      _fixOffset2 = slicedToArray(_fixOffset, 2),
      ts = _fixOffset2[0],
      o = _fixOffset2[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts: ts, o: o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(UNPARSABLE);
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format) {
  return dt.isValid ? Formatter.create(Locale.create('en-US')).formatDateTimeFromString(dt, format) : null;
}

// technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling
function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === undefined ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === undefined ? false : _ref$suppressMillisec,
      _ref$includeOffset = _ref.includeOffset,
      includeOffset = _ref$includeOffset === undefined ? true : _ref$includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === undefined ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === undefined ? false : _ref$spaceZone;

  var fmt = 'HH:mm';

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += ':ss';
    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += '.SSS';
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += ' ';
  }

  if (includeZone) {
    fmt += 'z';
  } else if (includeOffset) {
    fmt += 'ZZ';
  }

  return toTechFormat(dt, fmt);
}

// defaults for unspecified units in the supported calendars
var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};

// Units in the supported calendars, sorted by bigness
var orderedUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
var orderedWeekUnits = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond'];
var orderedOrdinalUnits = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];

// standardize case and plurality in units
function normalizeUnit(unit) {
  var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var normalized = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal'
  }[unit ? unit.toLowerCase() : unit];

  if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, zone) {
  // assume we have the higher-order units
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = orderedUnits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var u = _step.value;

      if (Util.isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var invalidReason = Conversions.hasInvalidGregorianData(obj) || Conversions.hasInvalidTimeData(obj);
  if (invalidReason) {
    return DateTime.invalid(invalidReason);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      _objToTS2 = slicedToArray(_objToTS, 2),
      ts = _objToTS2[0],
      o = _objToTS2[1];


  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromString}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link valueOf} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
var DateTime = function () {
  /**
   * @access private
   */
  function DateTime(config) {
    classCallCheck(this, DateTime);

    var zone = config.zone || Settings.defaultZone,
        invalidReason = config.invalidReason || (Number.isNaN(config.ts) ? INVALID_INPUT : null) || (!zone.isValid ? UNSUPPORTED_ZONE : null);
    /**
     * @access private
     */
    this.ts = Util.isUndefined(config.ts) ? Settings.now() : config.ts;

    var c = null,
        o = null;
    if (!invalidReason) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      c = unchanged ? config.old.c : tsToObj(this.ts, zone.offset(this.ts));
      o = unchanged ? config.old.o : zone.offset(this.ts);
    }

    /**
     * @access private
     */
    this.zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.invalid = invalidReason;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
  }

  // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} year - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.675
   * @return {DateTime}
   */


  createClass(DateTime, [{
    key: 'get',


    // INFO

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    value: function get$$1(unit) {
      return this[unit];
    }

    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @return {boolean}
     */

  }, {
    key: 'resolvedLocaleOpts',


    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {object} opts - the same options as toLocaleString
     * @return {object}
     */
    value: function resolvedLocaleOpts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
          locale = _Formatter$create$res.locale,
          numberingSystem = _Formatter$create$res.numberingSystem,
          calendar = _Formatter$create$res.calendar;

      return { locale: locale, numberingSystem: numberingSystem, outputCalendar: calendar };
    }

    // TRANSFORM

    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */

  }, {
    key: 'toUTC',
    value: function toUTC() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.setZone(FixedOffsetZone.instance(offset), opts);
    }

    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */

  }, {
    key: 'toLocal',
    value: function toLocal() {
      return this.setZone(new LocalZone());
    }

    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same UTC timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'utc+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
     * @param {object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */

  }, {
    key: 'setZone',
    value: function setZone(zone) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$keepLocalTime = _ref2.keepLocalTime,
          keepLocalTime = _ref2$keepLocalTime === undefined ? false : _ref2$keepLocalTime,
          _ref2$keepCalendarTim = _ref2.keepCalendarTime,
          keepCalendarTime = _ref2$keepCalendarTim === undefined ? false : _ref2$keepCalendarTim;

      zone = Util.normalizeZone(zone);
      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return DateTime.invalid(UNSUPPORTED_ZONE);
      } else {
        var newTS = keepLocalTime || keepCalendarTime // keepCalendarTime is the deprecated name for keepLocalTime
        ? this.ts + (this.o - zone.offset(this.ts)) * 60 * 1000 : this.ts;
        return clone(this, { ts: newTS, zone: zone });
      }
    }

    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */

  }, {
    key: 'reconfigure',
    value: function reconfigure() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref3.locale,
          numberingSystem = _ref3.numberingSystem,
          outputCalendar = _ref3.outputCalendar;

      var loc = this.loc.clone({ locale: locale, numberingSystem: numberingSystem, outputCalendar: outputCalendar });
      return clone(this, { loc: loc });
    }

    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */

  }, {
    key: 'setLocale',
    value: function setLocale(locale) {
      return this.reconfigure({ locale: locale });
    }

    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
     * @param {object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */

  }, {
    key: 'set',
    value: function set$$1(values) {
      if (!this.isValid) return this;

      var normalized = Util.normalizeObject(values, normalizeUnit),
          settingWeekStuff = !Util.isUndefined(normalized.weekYear) || !Util.isUndefined(normalized.weekNumber) || !Util.isUndefined(normalized.weekday);

      var mixed = void 0;
      if (settingWeekStuff) {
        mixed = Conversions.weekToGregorian(Object.assign(Conversions.gregorianToWeek(this.c), normalized));
      } else if (!Util.isUndefined(normalized.ordinal)) {
        mixed = Conversions.ordinalToGregorian(Object.assign(Conversions.gregorianToOrdinal(this.c), normalized));
      } else {
        mixed = Object.assign(this.toObject(), normalized);

        // if we didn't set the day but we ended up on an overflow date,
        // use the last day of the right month
        if (Util.isUndefined(normalized.day)) {
          mixed.day = Math.min(Util.daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }

      var _objToTS3 = objToTS(mixed, this.o, this.zone),
          _objToTS4 = slicedToArray(_objToTS3, 2),
          ts = _objToTS4[0],
          o = _objToTS4[1];

      return clone(this, { ts: ts, o: o });
    }

    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|number|object} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.local().plus(123) //~> in 123 milliseconds
     * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 1 hr, 13 min
     * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 1 hr, 13 min
     * @return {DateTime}
     */

  }, {
    key: 'plus',
    value: function plus(duration) {
      if (!this.isValid) return this;
      var dur = Util.friendlyDuration(duration);
      return clone(this, adjustTime(this, dur));
    }

    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link plus}
     * @param {Duration|number|object} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
    */

  }, {
    key: 'minus',
    value: function minus(duration) {
      if (!this.isValid) return this;
      var dur = Util.friendlyDuration(duration).negate();
      return clone(this, adjustTime(this, dur));
    }

    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */

  }, {
    key: 'startOf',
    value: function startOf(unit) {
      if (!this.isValid) return this;
      var o = {},
          normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case 'years':
          o.month = 1;
        // falls through
        case 'months':
          o.day = 1;
        // falls through
        case 'weeks':
        case 'days':
          o.hour = 0;
        // falls through
        case 'hours':
          o.minute = 0;
        // falls through
        case 'minutes':
          o.second = 0;
        // falls through
        case 'seconds':
          o.millisecond = 0;
          break;
        case 'milliseconds':
          break;
        default:
          throw new InvalidUnitError(unit);
      }

      if (normalizedUnit === 'weeks') {
        o.weekday = 1;
      }

      return this.set(o);
    }

    /**
     * "Set" this DateTime to the end (i.e. the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-03T00:00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */

  }, {
    key: 'endOf',
    value: function endOf(unit) {
      return this.isValid ? this.startOf(unit).plus(defineProperty({}, unit, 1)).minus(1) : this;
    }

    // OUTPUT

    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. See the documentation for the specific format tokens supported.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} fmt - the format string
     * @param {object} opts - options
     * @param {boolean} opts.round - round numerical values
     * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */

  }, {
    key: 'toFormat',
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.isValid ? Formatter.create(this.loc.redefaultToEN(), opts).formatDateTimeFromString(this, fmt) : INVALID;
    }

    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation.
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param opts {object} - Intl.DateTimeFormat constructor options
     * @example DateTime.local().toLocaleString(); //=> 4/20/2017
     * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit'}); //=> 'Thu, Apr 20'
     * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}); //=> 'Thu, Apr 20, 11:27'
     * @example DateTime.local().toLocaleString({hour: '2-digit', minute: '2-digit'}); //=> '11:32'
     * @return {string}
     */

  }, {
    key: 'toLocaleString',
    value: function toLocaleString() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Formats.DATE_SHORT;

      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID;
    }

    /**
     * Returns an array of format "parts", i.e. individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.local().toLocaleString(); //=> [
     *                                    //=>   { type: 'day', value: '25' },
     *                                    //=>   { type: 'literal', value: '/' },
     *                                    //=>   { type: 'month', value: '05' },
     *                                    //=>   { type: 'literal', value: '/' },
     *                                    //=>   { type: 'year', value: '1982' }
     *                                    //=> ]
     */

  }, {
    key: 'toLocaleParts',
    value: function toLocaleParts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @return {string}
     */

  }, {
    key: 'toISO',
    value: function toISO() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) {
        return null;
      }

      return this.toISODate() + 'T' + this.toISOTime(opts);
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @return {string}
     */

  }, {
    key: 'toISODate',
    value: function toISODate() {
      return toTechFormat(this, 'yyyy-MM-dd');
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */

  }, {
    key: 'toISOWeekDate',
    value: function toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc().hour(7).minute(34).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().hour(7).minute(34).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @return {string}
     */

  }, {
    key: 'toISOTime',
    value: function toISOTime() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$suppressMillise = _ref4.suppressMilliseconds,
          suppressMilliseconds = _ref4$suppressMillise === undefined ? false : _ref4$suppressMillise,
          _ref4$suppressSeconds = _ref4.suppressSeconds,
          suppressSeconds = _ref4$suppressSeconds === undefined ? false : _ref4$suppressSeconds,
          _ref4$includeOffset = _ref4.includeOffset,
          includeOffset = _ref4$includeOffset === undefined ? true : _ref4$includeOffset;

      return toTechTimeFormat(this, { suppressSeconds: suppressSeconds, suppressMilliseconds: suppressMilliseconds, includeOffset: includeOffset });
    }

    /**
     * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */

  }, {
    key: 'toRFC2822',
    value: function toRFC2822() {
      return toTechFormat(this, 'EEE, dd LLL yyyy hh:mm:ss ZZZ');
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */

  }, {
    key: 'toHTTP',
    value: function toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string}
     */

  }, {
    key: 'toSQLDate',
    value: function toSQLDate() {
      return toTechFormat(this, 'yyyy-MM-dd');
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */

  }, {
    key: 'toSQLTime',
    value: function toSQLTime() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$includeOffset = _ref5.includeOffset,
          includeOffset = _ref5$includeOffset === undefined ? true : _ref5$includeOffset,
          _ref5$includeZone = _ref5.includeZone,
          includeZone = _ref5$includeZone === undefined ? false : _ref5$includeZone;

      return toTechTimeFormat(this, { includeOffset: includeOffset, includeZone: includeZone, spaceZone: true });
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: false }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */

  }, {
    key: 'toSQL',
    value: function toSQL() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) {
        return null;
      }

      return this.toSQLDate() + ' ' + this.toSQLTime(opts);
    }

    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.isValid ? this.toISO() : INVALID;
    }

    /**
     * Returns a string representation of this DateTime appropriate for the REPL.
     * @return {string}
     */

  }, {
    key: 'inspect',
    value: function inspect() {
      if (this.isValid) {
        return 'DateTime {\n  ts: ' + this.toISO() + ',\n  zone: ' + this.zone.name + ',\n  locale: ' + this.locale + ' }';
      } else {
        return 'DateTime { Invalid, reason: ' + this.invalidReason + ' }';
      }
    }

    /**
     * Returns the epoch milliseconds of this DateTime
     * @return {number}
     */

  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.isValid ? this.ts : NaN;
    }

    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.toISO();
    }

    /**
     * Returns a Javascript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {object}
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) return {};

      var base = Object.assign({}, this.c);

      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }

    /**
     * Returns a Javascript Date equivalent to this DateTime.
     * @return {Date}
     */

  }, {
    key: 'toJSDate',
    value: function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }

    // COMPARE

    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */

  }, {
    key: 'diff',
    value: function diff(otherDateTime) {
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'milliseconds';
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!this.isValid || !otherDateTime.isValid) return Duration.invalid(this.invalidReason || otherDateTime.invalidReason);

      var units = Util.maybeArray(unit).map(Duration.normalizeUnit);

      var flipped = otherDateTime.valueOf() > this.valueOf(),
          post = flipped ? otherDateTime : this,
          accum = {};

      var cursor = flipped ? this : otherDateTime,
          lowestOrder = null;

      if (units.indexOf('years') >= 0) {
        var dYear = post.year - cursor.year;

        cursor = cursor.set({ year: post.year });

        if (cursor > post) {
          cursor = cursor.minus({ years: 1 });
          dYear -= 1;
        }

        accum.years = dYear;
        lowestOrder = 'years';
      }

      if (units.indexOf('months') >= 0) {
        var _dYear = post.year - cursor.year;
        var dMonth = post.month - cursor.month + _dYear * 12;

        cursor = cursor.set({ year: post.year, month: post.month });

        if (cursor > post) {
          cursor = cursor.minus({ months: 1 });
          dMonth -= 1;
        }

        accum.months = dMonth;
        lowestOrder = 'months';
      }

      var computeDayDelta = function computeDayDelta() {
        var utcDayStart = function utcDayStart(dt) {
          return dt.toUTC(0, { keepLocalTime: true }).startOf('day').valueOf();
        },
            ms = utcDayStart(post) - utcDayStart(cursor);
        return Math.floor(Duration.fromMillis(ms, opts).shiftTo('days').days);
      };

      if (units.indexOf('weeks') >= 0) {
        var days = computeDayDelta();
        var weeks = (days - days % 7) / 7;
        cursor = cursor.plus({ weeks: weeks });

        if (cursor > post) {
          cursor = cursor.minus({ weeks: 1 });
          weeks -= 1;
        }

        accum.weeks = weeks;
        lowestOrder = 'weeks';
      }

      if (units.indexOf('days') >= 0) {
        var _days = computeDayDelta();
        cursor = cursor.set({
          year: post.year,
          month: post.month,
          day: post.day
        });

        if (cursor > post) {
          cursor = cursor.minus({ days: 1 });
          _days -= 1;
        }

        accum.days = _days;
        lowestOrder = 'days';
      }

      var remaining = Duration.fromMillis(post - cursor, opts),
          moreUnits = units.filter(function (u) {
        return ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0;
      }),
          shiftTo = moreUnits.length > 0 ? moreUnits : [lowestOrder],
          shifted = remaining.shiftTo.apply(remaining, toConsumableArray(shiftTo)),
          merged = shifted.plus(Duration.fromObject(Object.assign(accum, opts)));

      return flipped ? merged.negate() : merged;
    }

    /**
     * Return the difference between this DateTime and right now.
     * See {@link diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */

  }, {
    key: 'diffNow',
    value: function diffNow() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.diff(DateTime.local(), unit, opts);
    }

    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Duration}
     */

  }, {
    key: 'until',
    value: function until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }

    /**
     * Return whether this DateTime is in the same unit of time as another DateTime
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
     * @return {boolean}
     */

  }, {
    key: 'hasSame',
    value: function hasSame(otherDateTime, unit) {
      if (!this.isValid) return false;
      if (unit === 'millisecond') {
        return this.valueOf() === otherDateTime.valueOf();
      } else {
        var inputMs = otherDateTime.valueOf();
        return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
      }
    }

    /**
     * Equality check
     * Two DateTimes are equal iff they represent the same millisecond
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(other) {
      return this.isValid && other.isValid ? this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc) : false;
    }

    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalid;
    }

    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @return {string}
     */

  }, {
    key: 'locale',
    get: function get$$1() {
      return this.loc.locale;
    }

    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @return {string}
     */

  }, {
    key: 'numberingSystem',
    get: function get$$1() {
      return this.loc.numberingSystem;
    }

    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @return {string}
     */

  }, {
    key: 'outputCalendar',
    get: function get$$1() {
      return this.loc.outputCalendar;
    }

    /**
     * Get the name of the time zone.
     * @return {String}
     */

  }, {
    key: 'zoneName',
    get: function get$$1() {
      return this.zone.name;
    }

    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @return {number}
     */

  }, {
    key: 'year',
    get: function get$$1() {
      return this.isValid ? this.c.year : NaN;
    }

    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @return {number}
     */

  }, {
    key: 'month',
    get: function get$$1() {
      return this.isValid ? this.c.month : NaN;
    }

    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @return {number}
     */

  }, {
    key: 'day',
    get: function get$$1() {
      return this.isValid ? this.c.day : NaN;
    }

    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @return {number}
     */

  }, {
    key: 'hour',
    get: function get$$1() {
      return this.isValid ? this.c.hour : NaN;
    }

    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @return {number}
     */

  }, {
    key: 'minute',
    get: function get$$1() {
      return this.isValid ? this.c.minute : NaN;
    }

    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @return {number}
     */

  }, {
    key: 'second',
    get: function get$$1() {
      return this.isValid ? this.c.second : NaN;
    }

    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @return {number}
     */

  }, {
    key: 'millisecond',
    get: function get$$1() {
      return this.isValid ? this.c.millisecond : NaN;
    }

    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @return {number}
     */

  }, {
    key: 'weekYear',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }

    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @return {number}
     */

  }, {
    key: 'weekNumber',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }

    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @return {number}
     */

  }, {
    key: 'weekday',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }

    /**
     * Get the ordinal (i.e. the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @return {number|DateTime}
     */

  }, {
    key: 'ordinal',
    get: function get$$1() {
      return this.isValid ? Conversions.gregorianToOrdinal(this.c).ordinal : NaN;
    }

    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @return {string}
     */

  }, {
    key: 'monthShort',
    get: function get$$1() {
      return this.isValid ? Info.months('short', { locale: this.locale })[this.month - 1] : null;
    }

    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @return {string}
     */

  }, {
    key: 'monthLong',
    get: function get$$1() {
      return this.isValid ? Info.months('long', { locale: this.locale })[this.month - 1] : null;
    }

    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @return {string}
     */

  }, {
    key: 'weekdayShort',
    get: function get$$1() {
      return this.isValid ? Info.weekdays('short', { locale: this.locale })[this.weekday - 1] : null;
    }

    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @return {string}
     */

  }, {
    key: 'weekdayLong',
    get: function get$$1() {
      return this.isValid ? Info.weekdays('long', { locale: this.locale })[this.weekday - 1] : null;
    }

    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @return {number}
     */

  }, {
    key: 'offset',
    get: function get$$1() {
      return this.isValid ? this.zone.offset(this.ts) : NaN;
    }

    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @return {String}
     */

  }, {
    key: 'offsetNameShort',
    get: function get$$1() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: 'short',
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @return {String}
     */

  }, {
    key: 'offsetNameLong',
    get: function get$$1() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: 'long',
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @return {boolean}
     */

  }, {
    key: 'isOffsetFixed',
    get: function get$$1() {
      return this.zone.universal;
    }

    /**
     * Get whether the DateTime is in a DST.
     * @return {boolean}
     */

  }, {
    key: 'isInDST',
    get: function get$$1() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
      }
    }

    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @return {boolean}
     */

  }, {
    key: 'isInLeapYear',
    get: function get$$1() {
      return Util.isLeapYear(this.year);
    }

    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @return {number}
     */

  }, {
    key: 'daysInMonth',
    get: function get$$1() {
      return Util.daysInMonth(this.year, this.month);
    }

    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @return {number}
     */

  }, {
    key: 'daysInYear',
    get: function get$$1() {
      return this.isValid ? Util.daysInYear(this.year) : NaN;
    }
  }], [{
    key: 'local',
    value: function local(year, month, day, hour, minute, second, millisecond) {
      if (Util.isUndefined(year)) {
        return new DateTime({ ts: Settings.now() });
      } else {
        return quickDT({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond
        }, Settings.defaultZone);
      }
    }

    /**
     * Create a DateTime in UTC
     * @param {number} year - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
     * @example DateTime.utc()                            //~> now
     * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.675Z
     * @return {DateTime}
     */

  }, {
    key: 'utc',
    value: function utc(year, month, day, hour, minute, second, millisecond) {
      if (Util.isUndefined(year)) {
        return new DateTime({
          ts: Settings.now(),
          zone: FixedOffsetZone.utcInstance
        });
      } else {
        return quickDT({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond
        }, FixedOffsetZone.utcInstance);
      }
    }

    /**
     * Create an DateTime from a Javascript Date object. Uses the default zone.
     * @param {Date} date - a Javascript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */

  }, {
    key: 'fromJSDate',
    value: function fromJSDate(date) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new DateTime({
        ts: Util.isDate(date) ? date.valueOf() : NaN,
        zone: Util.normalizeZone(options.zone),
        loc: Locale.fromObject(options)
      });
    }

    /**
     * Create an DateTime from a count of epoch milliseconds. Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: 'fromMillis',
    value: function fromMillis(milliseconds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new DateTime({
        ts: milliseconds,
        zone: Util.normalizeZone(options.zone),
        loc: Locale.fromObject(options)
      });
    }

    /**
     * Create an DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [obj.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01T00'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @return {DateTime}
     */

  }, {
    key: 'fromObject',
    value: function fromObject(obj) {
      var zoneToUse = Util.normalizeZone(obj.zone);
      if (!zoneToUse.isValid) {
        return DateTime.invalid(UNSUPPORTED_ZONE);
      }

      var tsNow = Settings.now(),
          offsetProvis = zoneToUse.offset(tsNow),
          normalized = Util.normalizeObject(obj, normalizeUnit, true),
          containsOrdinal = !Util.isUndefined(normalized.ordinal),
          containsGregorYear = !Util.isUndefined(normalized.year),
          containsGregorMD = !Util.isUndefined(normalized.month) || !Util.isUndefined(normalized.day),
          containsGregor = containsGregorYear || containsGregorMD,
          definiteWeekDef = normalized.weekYear || normalized.weekNumber,
          loc = Locale.fromObject(obj);

      // cases:
      // just a weekday -> this week's instance of that weekday, no worries
      // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
      // (gregorian month or day) + ordinal -> error
      // otherwise just use weeks or ordinals or gregorian, depending on what's specified

      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }

      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }

      var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;

      // configure ourselves to deal with gregorian dates or week stuff
      var units = void 0,
          defaultValues = void 0,
          objNow = tsToObj(tsNow, offsetProvis);
      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = Conversions.gregorianToWeek(objNow);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = Conversions.gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits;
        defaultValues = defaultUnitValues;
      }

      // set default values for missing stuff
      var foundFirst = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = units[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var u = _step2.value;

          var v = normalized[u];
          if (!Util.isUndefined(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        }

        // make sure the values we have are in range
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var higherOrderInvalid = useWeekData ? Conversions.hasInvalidWeekData(normalized) : containsOrdinal ? Conversions.hasInvalidOrdinalData(normalized) : Conversions.hasInvalidGregorianData(normalized),
          invalidReason = higherOrderInvalid || Conversions.hasInvalidTimeData(normalized);

      if (invalidReason) {
        return DateTime.invalid(invalidReason);
      }

      // compute the actual time
      var gregorian = useWeekData ? Conversions.weekToGregorian(normalized) : containsOrdinal ? Conversions.ordinalToGregorian(normalized) : normalized,
          _objToTS5 = objToTS(gregorian, offsetProvis, zoneToUse),
          _objToTS6 = slicedToArray(_objToTS5, 2),
          tsFinal = _objToTS6[0],
          offsetFinal = _objToTS6[1],
          inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc
      });

      // gregorian data + weekday serves only to validate
      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return DateTime.invalid('mismatched weekday');
      }

      return inst;
    }

    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc')
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */

  }, {
    key: 'fromISO',
    value: function fromISO(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseISO = RegexParser.parseISODate(text),
          _RegexParser$parseISO2 = slicedToArray(_RegexParser$parseISO, 2),
          vals = _RegexParser$parseISO2[0],
          parsedZone = _RegexParser$parseISO2[1];

      return parseDataToDateTime(vals, parsedZone, opts);
    }

    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Tue, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */

  }, {
    key: 'fromRFC2822',
    value: function fromRFC2822(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseRFC = RegexParser.parseRFC2822Date(text),
          _RegexParser$parseRFC2 = slicedToArray(_RegexParser$parseRFC, 2),
          vals = _RegexParser$parseRFC2[0],
          parsedZone = _RegexParser$parseRFC2[1];

      return parseDataToDateTime(vals, parsedZone, opts);
    }

    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {object} options - options to affect the creation
     * @param {string|Zone} [options.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [options.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [options.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */

  }, {
    key: 'fromHTTP',
    value: function fromHTTP(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseHTT = RegexParser.parseHTTPDate(text),
          _RegexParser$parseHTT2 = slicedToArray(_RegexParser$parseHTT, 2),
          vals = _RegexParser$parseHTT2[0],
          parsedZone = _RegexParser$parseHTT2[1];

      return parseDataToDateTime(vals, parsedZone, options);
    }

    /**
     * Create a DateTime from an input string and format string
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options to affect the creation
     * @param {string|Zone} [options.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [options.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [options.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} options.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: 'fromString',
    value: function fromString(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (Util.isUndefined(text) || Util.isUndefined(fmt)) {
        throw new InvalidArgumentError('fromString requires an input string and a format');
      }

      var _options$locale = options.locale,
          locale = _options$locale === undefined ? null : _options$locale,
          _options$numberingSys = options.numberingSystem,
          numberingSystem = _options$numberingSys === undefined ? null : _options$numberingSys,
          parser = new TokenParser(Locale.fromOpts({ locale: locale, numberingSystem: numberingSystem, defaultToEN: true })),
          _parser$parseDateTime = parser.parseDateTime(text, fmt),
          _parser$parseDateTime2 = slicedToArray(_parser$parseDateTime, 3),
          vals = _parser$parseDateTime2[0],
          parsedZone = _parser$parseDateTime2[1],
          invalidReason = _parser$parseDateTime2[2];

      if (invalidReason) {
        return DateTime.invalid(invalidReason);
      } else {
        return parseDataToDateTime(vals, parsedZone, options);
      }
    }

    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} options - options to affect the creation
     * @param {string|Zone} [options.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [options.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [options.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} options.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */

  }, {
    key: 'fromSQL',
    value: function fromSQL(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseSQL = RegexParser.parseSQL(text),
          _RegexParser$parseSQL2 = slicedToArray(_RegexParser$parseSQL, 2),
          vals = _RegexParser$parseSQL2[0],
          parsedZone = _RegexParser$parseSQL2[1];

      return parseDataToDateTime(vals, parsedZone, options);
    }

    /**
     * Create an invalid DateTime.
     * @return {DateTime}
     */

  }, {
    key: 'invalid',
    value: function invalid(reason) {
      if (!reason) {
        throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
      }
      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(reason);
      } else {
        return new DateTime({ invalidReason: reason });
      }
    }
  }, {
    key: 'min',
    value: function min() {
      for (var _len = arguments.length, dateTimes = Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }

      return Util.bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.min);
    }

    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */

  }, {
    key: 'max',
    value: function max() {
      for (var _len2 = arguments.length, dateTimes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        dateTimes[_key2] = arguments[_key2];
      }

      return Util.bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.max);
    }

    // MISC

    /**
     * Explain how a string would be parsed by fromString()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {object} options - options taken by fromString()
     * @return {object}
     */

  }, {
    key: 'fromStringExplain',
    value: function fromStringExplain(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var parser = new TokenParser(Locale.fromOpts(options));
      return parser.explainParse(text, fmt);
    }

    // FORMAT PRESETS

    /**
     * {@link toLocaleString} format like 10/14/1983
     */

  }, {
    key: 'DATE_SHORT',
    get: function get$$1() {
      return Formats.DATE_SHORT;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     */

  }, {
    key: 'DATE_MED',
    get: function get$$1() {
      return Formats.DATE_MED;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     */

  }, {
    key: 'DATE_FULL',
    get: function get$$1() {
      return Formats.DATE_FULL;
    }

    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     */

  }, {
    key: 'DATE_HUGE',
    get: function get$$1() {
      return Formats.DATE_HUGE;
    }

    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_SIMPLE',
    get: function get$$1() {
      return Formats.TIME_SIMPLE;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_WITH_SECONDS',
    get: function get$$1() {
      return Formats.TIME_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_WITH_SHORT_OFFSET',
    get: function get$$1() {
      return Formats.TIME_WITH_SHORT_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_WITH_LONG_OFFSET',
    get: function get$$1() {
      return Formats.TIME_WITH_LONG_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     */

  }, {
    key: 'TIME_24_SIMPLE',
    get: function get$$1() {
      return Formats.TIME_24_SIMPLE;
    }

    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     */

  }, {
    key: 'TIME_24_WITH_SECONDS',
    get: function get$$1() {
      return Formats.TIME_24_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     */

  }, {
    key: 'TIME_24_WITH_SHORT_OFFSET',
    get: function get$$1() {
      return Formats.TIME_24_WITH_SHORT_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     */

  }, {
    key: 'TIME_24_WITH_LONG_OFFSET',
    get: function get$$1() {
      return Formats.TIME_24_WITH_LONG_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_SHORT',
    get: function get$$1() {
      return Formats.DATETIME_SHORT;
    }

    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_SHORT_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_SHORT_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_MED',
    get: function get$$1() {
      return Formats.DATETIME_MED;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_MED_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_MED_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_FULL',
    get: function get$$1() {
      return Formats.DATETIME_FULL;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:303 AM EDT'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_FULL_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_FULL_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_HUGE',
    get: function get$$1() {
      return Formats.DATETIME_HUGE;
    }

    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_HUGE_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_HUGE_WITH_SECONDS;
    }
  }]);
  return DateTime;
}();

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.Interval = Interval;
exports.Info = Info;
exports.Zone = Zone;
exports.Settings = Settings;
//# sourceMappingURL=luxon.js.map


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rankingListData = exports.salesData = exports.visitData = undefined;

var _luxon = __webpack_require__(194);

var visitData = [];
var beginDay = new Date().getTime();
var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];

for (var i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: _luxon.DateTime.fromMillis(beginDay + 1000 * 60 * 60 * 24 * i).toFormat('yyyy-LL-dd'),
    y: fakeY[i]
  });
}

var salesData = [];
for (var _i = 0; _i < 12; _i += 1) {
  salesData.push({
    x: _i + 1 + '\u6708',
    y: Math.floor(Math.random() * 1000) + 200
  });
}

var rankingListData = [];
for (var _i2 = 0; _i2 < 7; _i2 += 1) {
  rankingListData.push({
    title: '\b\b\u660E\u73E0\u8DEF ' + _i2 + ' \u53F7\u5E97',
    total: 323234
  });
}

exports.visitData = visitData;
exports.salesData = salesData;
exports.rankingListData = rankingListData;

/***/ }),
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"miniProgress":"miniProgress38I3S","tooltip":"tooltip38I3S","w-tooltip-children":"w-tooltip-children38I3S","progressWrap":"progressWrap38I3S","progress":"progress38I3S","target":"target38I3S"};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _index = __webpack_require__(197);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniProgress = function MiniProgress(_ref) {
  var target = _ref.target,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'rgb(19, 194, 194)' : _ref$color,
      strokeWidth = _ref.strokeWidth,
      percent = _ref.percent;
  return _react2.default.createElement(
    'div',
    { className: _index2.default.miniProgress },
    _react2.default.createElement(
      _uiw.Tooltip,
      { content: '\u76EE\u6807\u503C:' + target + '%', className: _index2.default.tooltip },
      _react2.default.createElement(
        'div',
        {
          className: _index2.default.target,
          style: { left: target ? target + '%' : null }
        },
        _react2.default.createElement('span', { style: { backgroundColor: color || null } }),
        _react2.default.createElement('span', { style: { backgroundColor: color || null } })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _index2.default.progressWrap },
      _react2.default.createElement('div', {
        className: _index2.default.progress,
        style: {
          backgroundColor: color || null,
          width: percent ? percent + '%' : null,
          height: strokeWidth || null
        }
      })
    )
  );
};

exports.default = MiniProgress;

/***/ }),
/* 199 */,
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"field":"field14ri-"};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(200);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function Field(_ref) {
  var label = _ref.label,
      value = _ref.value,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['label', 'value']);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: _index2.default.field }, rest),
    _react2.default.createElement(
      'span',
      null,
      label
    ),
    _react2.default.createElement(
      'span',
      null,
      value
    )
  );
};

exports.default = Field;

/***/ }),
/* 202 */,
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"card":"card2mo34","chartCard":"chartCard2mo34","chartTop":"chartTop2mo34","chartTopMargin":"chartTopMargin2mo34","chartTopHasMargin":"chartTopHasMargin2mo34","metaWrap":"metaWrap2mo34","avatar":"avatar2mo34","meta":"meta2mo34","action":"action2mo34","total":"total2mo34","content":"content2mo34","contentFixed":"contentFixed2mo34","footer":"footer2mo34","footerMargin":"footerMargin2mo34"};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(32);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiw = __webpack_require__(10);

var _index = __webpack_require__(203);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartCard = function ChartCard(_ref) {
  var contentHeight = _ref.contentHeight,
      title = _ref.title,
      avatar = _ref.avatar,
      action = _ref.action,
      total = _ref.total,
      footer = _ref.footer,
      children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['contentHeight', 'title', 'avatar', 'action', 'total', 'footer', 'children']);

  var content = _react2.default.createElement(
    'div',
    { className: _index2.default.chartCard },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_index2.default.chartTop, (0, _defineProperty3.default)({}, _index2.default.chartTopMargin, !children && !footer)) },
      _react2.default.createElement(
        'div',
        { className: _index2.default.avatar },
        avatar
      ),
      _react2.default.createElement(
        'div',
        { className: _index2.default.metaWrap },
        _react2.default.createElement(
          'div',
          { className: _index2.default.meta },
          _react2.default.createElement(
            'span',
            { className: _index2.default.title },
            title
          ),
          _react2.default.createElement(
            'span',
            { className: _index2.default.action },
            action
          )
        ),
        total !== undefined && _react2.default.createElement('div', { className: _index2.default.total, dangerouslySetInnerHTML: { __html: total } })
      )
    ),
    children && _react2.default.createElement(
      'div',
      { className: _index2.default.content, style: { height: contentHeight || 'auto' } },
      _react2.default.createElement(
        'div',
        { className: contentHeight && _index2.default.contentFixed },
        children
      )
    ),
    footer && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_index2.default.footer, (0, _defineProperty3.default)({}, _index2.default.footerMargin, !children)) },
      footer
    )
  );

  return _react2.default.createElement(
    _uiw.Card,
    (0, _extends3.default)({
      bodyStyle: { padding: '20px 24px 8px 24px' },
      className: _index2.default.card
    }, rest),
    content
  );
};

exports.default = ChartCard;


ChartCard.propTypes = {
  // title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // action: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // avatar: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  total: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.number, _propTypes2.default.string]),
  contentHeight: _propTypes2.default.number
};
ChartCard.defaultProps = {
  // tooltip: false,
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _g = __webpack_require__(64);

var _g2 = _interopRequireDefault(_g);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _equal = __webpack_require__(59);

var _equal2 = _interopRequireDefault(_equal);

var _index = __webpack_require__(58);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniBar = function (_PureComponent) {
  (0, _inherits3.default)(MiniBar, _PureComponent);

  function MiniBar() {
    (0, _classCallCheck3.default)(this, MiniBar);
    return (0, _possibleConstructorReturn3.default)(this, (MiniBar.__proto__ || (0, _getPrototypeOf2.default)(MiniBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(MiniBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderChart(this.props.data);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _equal2.default)(this.props, nextProps)) {
        this.renderChart(nextProps.data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }, {
    key: 'handleRef',
    value: function handleRef(n) {
      this.node = n;
    }
  }, {
    key: 'renderChart',
    value: function renderChart(data) {
      var _props = this.props,
          _props$height = _props.height,
          height = _props$height === undefined ? 0 : _props$height,
          _props$fit = _props.fit,
          fit = _props$fit === undefined ? true : _props$fit,
          _props$color = _props.color,
          color = _props$color === undefined ? '#1890FF' : _props$color;


      if (!data || data && data.length < 1) {
        return;
      }

      this.node.innderHTML = '';

      var Frame = _g2.default.Frame;

      var frame = new Frame(data);

      var chart = new _g2.default.Chart({
        container: this.node,
        forceFit: fit,
        height: height + 54,
        plotCfg: {
          margin: [36, 5, 30, 5]
        },
        legend: null
      });

      chart.axis(false);

      chart.source(frame, {
        x: { type: 'cat' },
        y: { min: 0 }
      });

      chart.tooltip({
        title: null,
        crosshairs: false,
        map: { name: 'x' }
      });
      chart.interval().position('x*y').color(color);
      chart.render();

      this.chart = chart;
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.props.height;

      return _react2.default.createElement(
        'div',
        { className: _index2.default.miniChart, style: { height: height } },
        _react2.default.createElement(
          'div',
          { className: _index2.default.chartContent },
          _react2.default.createElement('div', { ref: this.handleRef.bind(this) })
        )
      );
    }
  }]);
  return MiniBar;
}(_react.PureComponent);

exports.default = MiniBar;


MiniBar.propTypes = {
  color: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  data: _propTypes2.default.array
};
MiniBar.defaultProps = {
  // tooltip: false,
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _g = __webpack_require__(64);

var _g2 = _interopRequireDefault(_g);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _equal = __webpack_require__(59);

var _equal2 = _interopRequireDefault(_equal);

var _index = __webpack_require__(58);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniArea = function (_PureComponent) {
  (0, _inherits3.default)(MiniArea, _PureComponent);

  function MiniArea() {
    (0, _classCallCheck3.default)(this, MiniArea);
    return (0, _possibleConstructorReturn3.default)(this, (MiniArea.__proto__ || (0, _getPrototypeOf2.default)(MiniArea)).apply(this, arguments));
  }

  (0, _createClass3.default)(MiniArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderChart(this.props.data);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _equal2.default)(this.props, nextProps)) {
        this.renderChart(nextProps.data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }, {
    key: 'handleRef',
    value: function handleRef(n) {
      this.node = n;
    }
  }, {
    key: 'renderChart',
    value: function renderChart(data) {
      var _props = this.props,
          _props$height = _props.height,
          height = _props$height === undefined ? 0 : _props$height,
          _props$fit = _props.fit,
          fit = _props$fit === undefined ? true : _props$fit,
          color = _props.color,
          _props$borderWidth = _props.borderWidth,
          borderWidth = _props$borderWidth === undefined ? 2 : _props$borderWidth,
          line = _props.line,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis,
          _props$animate = _props.animate,
          animate = _props$animate === undefined ? true : _props$animate;

      var borderColor = this.props.borderColor || color;

      if (!data || data && data.length < 1) {
        return;
      }

      // clean
      this.node.innerHTML = '';

      var chart = new _g2.default.Chart({
        container: this.node,
        forceFit: fit,
        height: height + 54,
        animate: animate,
        plotCfg: {
          margin: [36, 5, 30, 5]
        },
        legend: null
      });

      if (!xAxis && !yAxis) {
        chart.axis(false);
      }

      if (xAxis) {
        chart.axis('x', xAxis);
      } else {
        chart.axis('x', false);
      }

      if (yAxis) {
        chart.axis('y', yAxis);
      } else {
        chart.axis('y', false);
      }

      var dataConfig = {
        x: (0, _extends3.default)({ type: 'cat', range: [0, 1] }, xAxis),
        y: (0, _extends3.default)({ min: 0 }, yAxis)
      };

      chart.tooltip({
        title: null,
        crosshairs: false,
        map: {
          title: null,
          name: 'x',
          value: 'y'
        }
      });

      var view = chart.createView();
      view.source(data, dataConfig);

      view.area().position('x*y').color(color).shape('smooth').style({ fillOpacity: 1 });

      if (line) {
        var view2 = chart.createView();
        view2.source(data.dataConfig);
        view2.line().position('x*y').color(borderColor).size(borderWidth).shape('smooth');
        view2.tooltip(false);
      }
      chart.render();
      this.chart = chart;
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.props.height;

      return _react2.default.createElement(
        'div',
        { className: _index2.default.miniChart, style: { height: height } },
        _react2.default.createElement(
          'div',
          { className: _index2.default.chartContent },
          _react2.default.createElement('div', { ref: this.handleRef.bind(this) })
        )
      );
    }
  }]);
  return MiniArea;
}(_react.PureComponent);

exports.default = MiniArea;


MiniArea.propTypes = {
  color: _propTypes2.default.string,
  height: _propTypes2.default.number,
  borderColor: _propTypes2.default.string,
  line: _propTypes2.default.bool,
  animate: _propTypes2.default.bool,
  xAxis: _propTypes2.default.shape({ title: _propTypes2.default.any, line: _propTypes2.default.any, gridAlign: _propTypes2.default.any, labels: _propTypes2.default.any, tickLine: _propTypes2.default.any, grid: _propTypes2.default.any }),
  yAxis: _propTypes2.default.shape({ title: _propTypes2.default.any, line: _propTypes2.default.any, gridAlign: _propTypes2.default.any, labels: _propTypes2.default.any, tickLine: _propTypes2.default.any, grid: _propTypes2.default.any }),
  data: _propTypes2.default.array
};
MiniArea.defaultProps = {
  borderColor: '#1890FF',
  color: 'rgba(24, 144, 255, 0.2)'
};

/***/ }),
/* 207 */,
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(48),
    createWrap = __webpack_require__(102),
    getHolder = __webpack_require__(45),
    replaceHolders = __webpack_require__(37);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bind = __webpack_require__(208);
var factory_1 = __webpack_require__(117);
var applicators_1 = __webpack_require__(103);
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(bind, new applicators_1.BindApplicator()));
/**
 * Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
 *
 * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.
 *
 * Note: Unlike native Function#bind, this method doesn't set the "length" property of bound functions.
 * @param {...*} [partials] The argument to be partially applied.
 * @example
 *
 * class MyClass {
 *   @Bind()
 *   bound() {
 *     return this;
 *   }
 *
 *   unbound() {
 *     return this;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.bound.call(null); // => myClass {}
 * myClass.unbound.call(null); // => null
 */
function Bind() {
    var partials = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partials[_i] = arguments[_i];
    }
    return decorator.apply(void 0, partials);
}
exports.Bind = Bind;
exports.bind = Bind;
exports.default = decorator;
//# sourceMappingURL=bind.js.map

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var isFunction = __webpack_require__(33);
var isObject = __webpack_require__(23);
var Applicator_1 = __webpack_require__(15);
var utils_1 = __webpack_require__(27);
var MemoizeApplicator = (function (_super) {
    tslib_1.__extends(MemoizeApplicator, _super);
    function MemoizeApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemoizeApplicator.prototype.apply = function (_a) {
        var value = _a.value, instance = _a.instance, execute = _a.config.execute, args = _a.args, target = _a.target;
        var resolver = utils_1.resolveFunction(isFunction(args[0]) ? args[0] : isObject(args[0]) ? args[0].resolver : args[0], instance, target, false);
        if (resolver && instance) {
            resolver = resolver.bind(instance);
        }
        var memoized = resolver ? execute(value, resolver) : execute(value);
        if (isObject(args[0])) {
            var _b = args[0], cache = _b.cache, type = _b.type;
            if (cache) {
                memoized.cache = cache;
            }
            else if (isFunction(type)) {
                memoized.cache = new type();
            }
        }
        return memoized;
    };
    return MemoizeApplicator;
}(Applicator_1.Applicator));
exports.MemoizeApplicator = MemoizeApplicator;
//# sourceMappingURL=MemoizeApplicator.js.map

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var Applicator_1 = __webpack_require__(15);
var InvokeApplicator = (function (_super) {
    tslib_1.__extends(InvokeApplicator, _super);
    function InvokeApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvokeApplicator.prototype.apply = function (_a) {
        var args = _a.args, target = _a.target, execute = _a.config.execute, value = _a.value;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            return execute.apply(void 0, [value.bind(this)].concat(invokeArgs, args));
        };
    };
    return InvokeApplicator;
}(Applicator_1.Applicator));
exports.InvokeApplicator = InvokeApplicator;
//# sourceMappingURL=InvokeApplicator.js.map

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var Applicator_1 = __webpack_require__(15);
var BindApplicator = (function (_super) {
    tslib_1.__extends(BindApplicator, _super);
    function BindApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindApplicator.prototype.apply = function (_a) {
        var value = _a.value, execute = _a.config.execute, args = _a.args, instance = _a.instance, target = _a.target;
        if (!instance) {
            return value;
        }
        return execute.apply(void 0, [value, instance].concat(args));
    };
    return BindApplicator;
}(Applicator_1.Applicator));
exports.BindApplicator = BindApplicator;
//# sourceMappingURL=BindApplicator.js.map

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var Applicator_1 = __webpack_require__(15);
var utils_1 = __webpack_require__(27);
var WrapApplicator = (function (_super) {
    tslib_1.__extends(WrapApplicator, _super);
    function WrapApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrapApplicator.prototype.apply = function (_a) {
        var args = _a.args, execute = _a.config.execute, target = _a.target, value = _a.value;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            return execute(utils_1.resolveFunction(args[0], this, target), value).apply(this, invokeArgs);
        };
    };
    return WrapApplicator;
}(Applicator_1.Applicator));
exports.WrapApplicator = WrapApplicator;
//# sourceMappingURL=WrapApplicator.js.map

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var Applicator_1 = __webpack_require__(15);
var PreValueApplicator = (function (_super) {
    tslib_1.__extends(PreValueApplicator, _super);
    function PreValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreValueApplicator.prototype.apply = function (_a) {
        var value = _a.value, execute = _a.config.execute, args = _a.args;
        return execute.apply(void 0, [value].concat(args));
    };
    return PreValueApplicator;
}(Applicator_1.Applicator));
exports.PreValueApplicator = PreValueApplicator;
//# sourceMappingURL=PreValueApplicator.js.map

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var Applicator_1 = __webpack_require__(15);
var PostValueApplicator = (function (_super) {
    tslib_1.__extends(PostValueApplicator, _super);
    function PostValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostValueApplicator.prototype.apply = function (_a) {
        var _b = _a.config, execute = _b.execute, bound = _b.bound, args = _a.args, value = _a.value;
        return execute.apply(void 0, args.concat([value]));
    };
    return PostValueApplicator;
}(Applicator_1.Applicator));
exports.PostValueApplicator = PostValueApplicator;
//# sourceMappingURL=PostValueApplicator.js.map

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var isFunction = __webpack_require__(33);
var Applicator_1 = __webpack_require__(15);
var utils_1 = __webpack_require__(27);
var PartialValueApplicator = (function (_super) {
    tslib_1.__extends(PartialValueApplicator, _super);
    function PartialValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialValueApplicator.prototype.apply = function (_a) {
        var args = _a.args, target = _a.target, value = _a.value, execute = _a.config.execute;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            var fn = value;
            var argIndex = 0;
            if (!isFunction(fn)) {
                fn = utils_1.resolveFunction(args[0], this, target);
                argIndex = 1;
            }
            return execute.apply(void 0, [fn].concat(args.slice(argIndex))).apply(this, invokeArgs);
        };
    };
    return PartialValueApplicator;
}(Applicator_1.Applicator));
exports.PartialValueApplicator = PartialValueApplicator;
//# sourceMappingURL=PartialValueApplicator.js.map

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(119);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(217);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(98),
    composeArgsRight = __webpack_require__(97),
    replaceHolders = __webpack_require__(37);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(47),
    createCtor = __webpack_require__(46),
    root = __webpack_require__(18);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(93),
    isIndex = __webpack_require__(112);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(222),
    arrayIncludes = __webpack_require__(106);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(61),
    LodashWrapper = __webpack_require__(94),
    copyArray = __webpack_require__(93);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(61),
    LodashWrapper = __webpack_require__(94),
    baseLodash = __webpack_require__(60),
    isArray = __webpack_require__(63),
    isObjectLike = __webpack_require__(20),
    wrapperClone = __webpack_require__(226);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(228);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(61),
    getData = __webpack_require__(95),
    getFuncName = __webpack_require__(229),
    lodash = __webpack_require__(227);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(47),
    createCtor = __webpack_require__(46),
    createHybrid = __webpack_require__(99),
    createRecurry = __webpack_require__(96),
    getHolder = __webpack_require__(45),
    replaceHolders = __webpack_require__(37),
    root = __webpack_require__(18);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(46),
    root = __webpack_require__(18);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(51),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(48),
    createWrap = __webpack_require__(102),
    getHolder = __webpack_require__(45),
    replaceHolders = __webpack_require__(37);

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = baseRest(function(func, partials) {
  var holders = replaceHolders(partials, getHolder(partial));
  return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

module.exports = partial;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var partial = __webpack_require__(236);
var Applicator_1 = __webpack_require__(15);
var PartialedApplicator = (function (_super) {
    tslib_1.__extends(PartialedApplicator, _super);
    function PartialedApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialedApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, value = _a.value, args = _a.args;
        return partial.apply(void 0, [execute, value].concat(args));
    };
    return PartialedApplicator;
}(Applicator_1.Applicator));
exports.PartialedApplicator = PartialedApplicator;
//# sourceMappingURL=PartialedApplicator.js.map

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var Applicator_1 = __webpack_require__(15);
var utils_1 = __webpack_require__(27);
var PartialApplicator = (function (_super) {
    tslib_1.__extends(PartialApplicator, _super);
    function PartialApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialApplicator.prototype.apply = function (_a) {
        var args = _a.args, target = _a.target, execute = _a.config.execute;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            return execute.apply(void 0, [utils_1.resolveFunction(args[0], this, target)].concat(args.slice(1))).apply(this, invokeArgs);
        };
    };
    return PartialApplicator;
}(Applicator_1.Applicator));
exports.PartialApplicator = PartialApplicator;
//# sourceMappingURL=PartialApplicator.js.map

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(17);
var identity = __webpack_require__(38);
var Applicator_1 = __webpack_require__(15);
var utils_1 = __webpack_require__(27);
var ComposeApplicator = (function (_super) {
    tslib_1.__extends(ComposeApplicator, _super);
    function ComposeApplicator(_config) {
        if (_config === void 0) { _config = {}; }
        var _this = _super.call(this) || this;
        _this._config = _config;
        return _this;
    }
    Object.defineProperty(ComposeApplicator.prototype, "post", {
        get: function () {
            return this._config.post === true;
        },
        enumerable: true,
        configurable: true
    });
    ComposeApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, _b = _a.value, value = _b === void 0 ? identity : _b, args = _a.args, target = _a.target;
        var applicator = this;
        return function () {
            var _this = this;
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            var _args = args.map(function (method) { return utils_1.resolveFunction(method, _this, target); }).slice();
            if (applicator.post) {
                _args.push(value);
            }
            else {
                _args.unshift(value);
            }
            return execute.apply(void 0, _args).apply(this, invokeArgs);
        };
    };
    return ComposeApplicator;
}(Applicator_1.Applicator));
exports.ComposeApplicator = ComposeApplicator;
//# sourceMappingURL=ComposeApplicator.js.map

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(109);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    getPrototype = __webpack_require__(240),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObjectLike = __webpack_require__(20),
    isPlainObject = __webpack_require__(241);

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(47),
    baseRest = __webpack_require__(48),
    isError = __webpack_require__(242);

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = baseRest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

module.exports = attempt;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(108),
    isObjectLike = __webpack_require__(20);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(51);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(246),
    defineProperty = __webpack_require__(245),
    identity = __webpack_require__(38);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(47);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 254 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(254),
    baseIsNaN = __webpack_require__(253),
    strictIndexOf = __webpack_require__(252);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 261 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(51),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(50);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(50);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(50);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(50);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 269 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(269),
    listCacheDelete = __webpack_require__(268),
    listCacheGet = __webpack_require__(266),
    listCacheHas = __webpack_require__(265),
    listCacheSet = __webpack_require__(264);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(52);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(52);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 274 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 275 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(18);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(277);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(33),
    isMasked = __webpack_require__(278),
    isObject = __webpack_require__(23),
    toSource = __webpack_require__(276);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(52);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(280),
    hashDelete = __webpack_require__(274),
    hashGet = __webpack_require__(273),
    hashHas = __webpack_require__(272),
    hashSet = __webpack_require__(271);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(281),
    ListCache = __webpack_require__(270),
    Map = __webpack_require__(263);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(282),
    mapCacheDelete = __webpack_require__(262),
    mapCacheGet = __webpack_require__(260),
    mapCacheHas = __webpack_require__(259),
    mapCacheSet = __webpack_require__(258);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(283),
    setCacheAdd = __webpack_require__(257),
    setCacheHas = __webpack_require__(256);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(284),
    arrayIncludes = __webpack_require__(106),
    arrayIncludesWith = __webpack_require__(251),
    arrayMap = __webpack_require__(250),
    baseUnary = __webpack_require__(110),
    cacheHas = __webpack_require__(249);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(285),
    baseRest = __webpack_require__(48),
    isArrayLikeObject = __webpack_require__(244);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assignAll_1 = __webpack_require__(107);
var PROPERTY_EXCLUDES = [
    'length',
    'name',
    'arguments',
    'called',
    'prototype'
];
/**
 * Wraps a constructor in a wrapper function and copies all static properties
 * and methods to the new constructor.
 * @export
 * @param {Function} Ctor
 * @param {(Ctor: Function, ...args: any[]) => any} wrapper
 * @returns {Function}
 */
function wrapConstructor(Ctor, wrapper) {
    function ConstructorWrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return wrapper.call.apply(wrapper, [this, Ctor].concat(args));
    }
    ConstructorWrapper.prototype = Ctor.prototype;
    Object.defineProperty(ConstructorWrapper, 'name', {
        // These values should coincide with the default descriptor values for `name`.
        configurable: true,
        enumerable: false,
        value: Ctor.name,
        writable: false
    });
    return assignAll_1.assignAll(ConstructorWrapper, Ctor, PROPERTY_EXCLUDES);
}
exports.wrapConstructor = wrapConstructor;
//# sourceMappingURL=wrapConstructor.js.map

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var copyMetaData_1 = __webpack_require__(114);
/**
 * Binds a function and copies metadata.
 * @private
 * @export
 * @param {Function} fn
 * @param {*} context
 * @returns {Function}
 */
function bind(fn, context) {
    return copyMetaData_1.copyMetadata(fn.bind(context), fn);
}
exports.bind = bind;
//# sourceMappingURL=bind.js.map

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(38);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(109);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 291 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(291),
    nativeKeys = __webpack_require__(290);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(120);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(113)(module)))

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isLength = __webpack_require__(111),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(294),
    baseUnary = __webpack_require__(110),
    nodeUtil = __webpack_require__(293);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 296 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(18),
    stubFalse = __webpack_require__(296);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(113)(module)))

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(298),
    isObjectLike = __webpack_require__(20);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(300),
    isArguments = __webpack_require__(299),
    isArray = __webpack_require__(63),
    isBuffer = __webpack_require__(297),
    isIndex = __webpack_require__(112),
    isTypedArray = __webpack_require__(295);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(301),
    baseKeys = __webpack_require__(292),
    isArrayLike = __webpack_require__(108);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 303 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(303);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(304),
    keys = __webpack_require__(302);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(305),
    castFunction = __webpack_require__(289);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a function the returns the specific index.
 * @private
 * @export
 * @param {Function} fn
 * @param {number} index
 * @returns {Function}
 */
function returnAtIndex(fn, index) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        fn.call.apply(fn, [this].concat(args));
        return args[index];
    };
}
exports.returnAtIndex = returnAtIndex;
//# sourceMappingURL=returnAtIndex.js.map

/***/ }),
/* 308 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isUndefined = __webpack_require__(308);
/**
 * A map for weakly holding nested references.
 * @private
 * @export
 * @class CompositeKeyWeakMap
 * @template T
 */
var CompositeKeyWeakMap = (function () {
    function CompositeKeyWeakMap() {
        this._weakMap = new WeakMap();
    }
    CompositeKeyWeakMap.prototype.set = function (keys, value) {
        var map = this._weakMap;
        for (var i = 0, len = keys.length - 1; i < len; i++) {
            var key = keys[i];
            var next = map.get(key);
            if (!next) {
                next = new Map();
                map.set(key, next);
            }
            map = next;
        }
        map.set(keys[keys.length - 1], value);
    };
    CompositeKeyWeakMap.prototype.get = function (keys) {
        var next = this._weakMap;
        for (var i = 0, len = keys.length; i < len; i++) {
            next = next.get(keys[i]);
            if (isUndefined(next)) {
                break;
            }
        }
        return next;
    };
    CompositeKeyWeakMap.prototype.has = function (keys) {
        return !isUndefined(this.get(keys));
    };
    return CompositeKeyWeakMap;
}());
exports.CompositeKeyWeakMap = CompositeKeyWeakMap;
//# sourceMappingURL=CompositeKeyWeakMap.js.map

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isArray = __webpack_require__(63),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isFunction = __webpack_require__(33);
var isString = __webpack_require__(310);
var log_1 = __webpack_require__(115);
/**
  * Resolves a function on the current target object. It first will
  * try and resolve on the context object, then the target object,
  * then an error will be thrown if the method can not be resolved.
  * @private
  * @param {Function|string} method The method or method name.
  * @param {Object} [context] The context object to resolve from.
  * @param {Object} [target] The target object to resolve from.
  * @returns {Function} The resolved function.
  */
function resolveFunction(method, context, target, throwNotFound) {
    if (throwNotFound === void 0) { throwNotFound = true; }
    if (isFunction(method)) {
        return method;
    }
    else if (isString(method)) {
        if (context && isFunction(context[method])) {
            return context[method];
        }
        else if (target && isFunction(target[method])) {
            return target[method];
        }
    }
    if (throwNotFound) {
        throw new ReferenceError(log_1.log("Can not resolve method " + method + " on any target Objects"));
    }
}
exports.resolveFunction = resolveFunction;
//# sourceMappingURL=resolveFunction.js.map

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isFunction = __webpack_require__(33);
var common_1 = __webpack_require__(116);
var utils_1 = __webpack_require__(27);
var InternalDecoratorFactory = (function () {
    function InternalDecoratorFactory() {
    }
    InternalDecoratorFactory.prototype.createDecorator = function (config) {
        var _this = this;
        var applicator = config.applicator;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return function (target, name, _descriptor) {
                var descriptor = _this._resolveDescriptor(target, name, _descriptor);
                var value = descriptor.value, get = descriptor.get, set = descriptor.set;
                // If this decorator is being applied after an instance decorator we simply ignore it
                // as we can't apply it correctly.
                if (!common_1.InstanceChainMap.has([target, name])) {
                    if (isFunction(value)) {
                        descriptor.value = utils_1.copyMetadata(applicator.apply({ config: config, target: target, value: value, args: args }), value);
                    }
                    else if (isFunction(get) && config.getter) {
                        descriptor.get = utils_1.copyMetadata(applicator.apply({ config: config, target: target, value: get, args: args }), get);
                    }
                    else if (isFunction(set) && config.setter) {
                        descriptor.set = utils_1.copyMetadata(applicator.apply({ config: config, target: target, value: set, args: args }), get);
                    }
                }
                return descriptor;
            };
        };
    };
    InternalDecoratorFactory.prototype.createInstanceDecorator = function (config) {
        var _this = this;
        var applicator = config.applicator, bound = config.bound;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return function (target, name, _descriptor) {
                var descriptor = _this._resolveDescriptor(target, name, _descriptor);
                var value = descriptor.value, writable = descriptor.writable, enumerable = descriptor.enumerable, configurable = descriptor.configurable, get = descriptor.get, set = descriptor.set;
                var isFirstInstance = !common_1.InstanceChainMap.has([target, name]);
                var chainData = common_1.InstanceChainMap.get([target, name]) || { fns: [], properties: [] };
                var isGetter = isFirstInstance && isFunction(get);
                var isSetter = isFirstInstance && isFunction(set);
                var isMethod = isFirstInstance && isFunction(value);
                var isProperty = isFirstInstance && !isGetter && !isSetter && !isMethod;
                chainData.properties.push(name);
                chainData.fns.push(function (fn, instance, context) {
                    if (!_this._isApplicable(context, config)) {
                        return fn;
                    }
                    if (bound) {
                        fn = utils_1.bind(fn, instance);
                    }
                    return utils_1.copyMetadata(applicator.apply({ args: args, target: target, instance: instance, value: fn, config: config }), fn);
                });
                common_1.InstanceChainMap.set([target, name], chainData);
                if (!isFirstInstance) {
                    return descriptor;
                }
                chainData.isSetter = isSetter;
                chainData.isGetter = isGetter;
                chainData.isMethod = isMethod;
                chainData.isProperty = isProperty;
                var applyChain = function (fn, context, instance) {
                    return chainData.fns.reduce(function (result, next) { return next(result, instance, context); }, fn);
                };
                var applyDecorator = function (instance) {
                    var getter = get || undefined;
                    var setter = set || undefined;
                    if (isGetter || isSetter) {
                        // If we have a getter apply the decorators to the getter and assign it to the instance.
                        if (isGetter) {
                            getter = applyChain(get, { value: get, getter: true }, instance);
                        }
                        if (isSetter) {
                            setter = applyChain(set, { value: set, setter: true }, instance);
                        }
                        Object.defineProperty(instance, name, {
                            enumerable: enumerable,
                            configurable: configurable,
                            get: getter,
                            set: setter
                        });
                    }
                    else if (isMethod || isProperty) {
                        var newFn = isMethod
                            ? applyChain(value, { value: value, method: true }, instance)
                            : applyChain(value, { value: value, property: true }, instance);
                        Object.defineProperty(instance, name, {
                            writable: writable,
                            enumerable: enumerable,
                            configurable: configurable,
                            value: newFn
                        });
                    }
                };
                if (isMethod || isProperty) {
                    delete descriptor.value;
                    delete descriptor.writable;
                }
                descriptor.get = function () {
                    applyDecorator(this);
                    var descriptor = Object.getOwnPropertyDescriptor(this, name);
                    if (descriptor.get) {
                        return descriptor.get.call(this);
                    }
                    return descriptor.value;
                };
                descriptor.set = function (value) {
                    applyDecorator(this);
                    var descriptor = Object.getOwnPropertyDescriptor(this, name);
                    if (descriptor.set) {
                        descriptor.set.call(this, value);
                    }
                    else if (isProperty || isMethod) {
                        this[name] = value;
                    }
                };
                return descriptor;
            };
        };
    };
    InternalDecoratorFactory.prototype._isApplicable = function (context, config) {
        return !Boolean(context.getter && !config.getter
            || context.setter && !config.setter
            || context.method && !config.method
            || context.property && !config.property);
    };
    InternalDecoratorFactory.prototype._resolveDescriptor = function (target, name, descriptor) {
        if (descriptor) {
            return descriptor;
        }
        return Object.getOwnPropertyDescriptor(target, name) || {};
    };
    return InternalDecoratorFactory;
}());
exports.InternalDecoratorFactory = InternalDecoratorFactory;
exports.DecoratorFactory = new InternalDecoratorFactory();
//# sourceMappingURL=DecoratorFactory.js.map

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DecoratorConfig = (function () {
    function DecoratorConfig(execute, applicator, options) {
        if (options === void 0) { options = {}; }
        this.execute = execute;
        this.applicator = applicator;
        this.options = options;
    }
    Object.defineProperty(DecoratorConfig.prototype, "bound", {
        get: function () {
            return this.options.bound != null ? this.options.bound : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoratorConfig.prototype, "setter", {
        get: function () {
            return this.options.setter != null ? this.options.setter : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoratorConfig.prototype, "getter", {
        get: function () {
            return this.options.getter != null ? this.options.getter : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoratorConfig.prototype, "property", {
        get: function () {
            return this.options.property != null ? this.options.property : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoratorConfig.prototype, "method", {
        get: function () {
            return this.options.method != null ? this.options.method : true;
        },
        enumerable: true,
        configurable: true
    });
    return DecoratorConfig;
}());
exports.DecoratorConfig = DecoratorConfig;
//# sourceMappingURL=DecoratorConfig.js.map

/***/ }),
/* 314 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(118);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 317 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(18);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23),
    now = __webpack_require__(318),
    toNumber = __webpack_require__(119);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var debounce = __webpack_require__(319);
var factory_1 = __webpack_require__(117);
var applicators_1 = __webpack_require__(103);
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(debounce, new applicators_1.PreValueApplicator(), { setter: true }));
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
 * Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function.
 * Subsequent calls to the debounced function return the result of the last func invocation.
 *
 * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the wait timeout.
 *
 * If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.
 *
 * @param {number} [wait=0] The number in milliseconds to delay.
 * @param {DebounceOptions} [options] The options object.
 * @example
 *
 * class MyClass {
 *   value = 100;
 *
 *   @Debounce(10)
 *   add(a) {
 *     this.value += a;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.add(10);
 * myClass.add(50);
 * myClass.add(20);
 *
 * myClass.value; // => 100;
 *
 * setTimeout(() => {
 *   myClass.value; // => 120;
 * }, 11);
 */
function Debounce(wait, options) {
    return decorator(wait, options);
}
exports.Debounce = Debounce;
exports.debounce = Debounce;
exports.default = decorator;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(29);
var $getOwnPropertyDescriptor = __webpack_require__(65).f;

__webpack_require__(89)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(321);
var $Object = __webpack_require__(9).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(322), __esModule: true };

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__(323);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _desc, _value, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _g = __webpack_require__(64);

var _g2 = _interopRequireDefault(_g);

var _debounce = __webpack_require__(320);

var _debounce2 = _interopRequireDefault(_debounce);

var _bind = __webpack_require__(209);

var _bind2 = _interopRequireDefault(_bind);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _equal = __webpack_require__(59);

var _equal2 = _interopRequireDefault(_equal);

var _index = __webpack_require__(58);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Bar = (_dec = (0, _bind2.default)(), _dec2 = (0, _debounce2.default)(200), (_class = function (_PureComponent) {
  (0, _inherits3.default)(Bar, _PureComponent);

  function Bar(props) {
    (0, _classCallCheck3.default)(this, Bar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Bar.__proto__ || (0, _getPrototypeOf2.default)(Bar)).call(this, props));

    _this.state = {
      autoHideXLables: false
    };
    return _this;
  }

  (0, _createClass3.default)(Bar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
      this.renderChart(this.props.data);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _equal2.default)(this.props, nextProps)) {
        this.renderChart(nextProps.data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
      if (this.chart) {
        this.chart.destroy();
      }
      this.resize.cancel();
    }
    /**
     * Bind() 绑定当前方法，类等等
     * Denounce(200) 延迟2毫秒执行下面方法
    */

  }, {
    key: 'resize',
    value: function resize() {
      if (!this.node) {
        return;
      }
      var canvasWidth = this.node.parentNode.clientWidth;
      var _props = this.props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          _props$autoLabel = _props.autoLabel,
          autoLabel = _props$autoLabel === undefined ? true : _props$autoLabel;

      if (!autoLabel) {
        return;
      }
      var minWidth = data.length * 30;
      var autoHideXLabels = this.state.autoHideXLabels;


      if (canvasWidth <= minWidth) {
        if (!autoHideXLabels) {
          this.setState({
            autoHideXLabels: true
          });
          this.renderChart(data);
        }
      } else if (autoHideXLabels) {
        this.setState({
          autoHideXLabels: false
        });
        this.renderChart(data);
      }
    }
  }, {
    key: 'handleRef',
    value: function handleRef(n) {
      this.node = n;
    }
  }, {
    key: 'renderChart',
    value: function renderChart(data) {
      var autoHideXLables = this.state.autoHideXLables;
      var _props2 = this.props,
          _props2$height = _props2.height,
          height = _props2$height === undefined ? 0 : _props2$height,
          _props2$fit = _props2.fit,
          fit = _props2$fit === undefined ? true : _props2$fit,
          _props2$color = _props2.color,
          color = _props2$color === undefined ? 'rgba(24, 144, 255, 0.85)' : _props2$color,
          _props2$margin = _props2.margin,
          margin = _props2$margin === undefined ? [32, 0, autoHideXLables ? 8 : 32, 40] : _props2$margin;


      if (!data || data && data.length < 1) {
        return;
      }

      // clean
      this.node.innerHTML = '';

      var Frame = _g2.default.Frame;

      var frame = new Frame(data);

      var chart = new _g2.default.Chart({
        container: this.node,
        forceFit: fit,
        height: height - 22,
        legend: null,
        plotCfg: { margin: margin }
      });

      if (autoHideXLables) {
        chart.axis('x', {
          title: false,
          tickLine: false,
          labels: false
        });
      } else {
        chart.axis('x', { title: false });
      }
      chart.axis('y', {
        title: false,
        line: false,
        tickLine: false
      });

      chart.source(frame, {
        x: { type: 'cat' },
        y: { min: 0 }
      });

      chart.tooltip({
        title: null,
        crosshairs: false,
        map: { name: 'x' }
      });
      chart.interval().position('x*y').color(color).style({
        fillOpacity: 1
      });

      chart.render();
      this.chart = chart;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          height = _props3.height,
          title = _props3.title;


      return _react2.default.createElement(
        'div',
        { className: _index2.default.chart, style: { height: height } },
        _react2.default.createElement(
          'div',
          null,
          title && _react2.default.createElement(
            'h4',
            null,
            title
          ),
          _react2.default.createElement('div', { ref: this.handleRef.bind(this) })
        )
      );
    }
  }]);
  return Bar;
}(_react.PureComponent), (_applyDecoratedDescriptor(_class.prototype, 'resize', [_dec, _dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'resize'), _class.prototype)), _class));
exports.default = Bar;


Bar.propTypes = {
  color: _propTypes2.default.bool,
  margin: _propTypes2.default.array,
  height: _propTypes2.default.number,
  data: _propTypes2.default.array,
  autoLabel: _propTypes2.default.bool
};
Bar.defaultProps = {
  // tooltip: false,
};

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _numeral = __webpack_require__(121);

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yuan = function yuan(val) {
  return '&yen; ' + (0, _numeral2.default)(val).format('0,0');
};

exports.default = yuan;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yuan = __webpack_require__(325);

Object.defineProperty(exports, 'yuan', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_yuan).default;
  }
});

var _Bar = __webpack_require__(324);

Object.defineProperty(exports, 'Bar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bar).default;
  }
});

var _MiniArea = __webpack_require__(206);

Object.defineProperty(exports, 'MiniArea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MiniArea).default;
  }
});

var _MiniBar = __webpack_require__(205);

Object.defineProperty(exports, 'MiniBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MiniBar).default;
  }
});

var _ChartCard = __webpack_require__(204);

Object.defineProperty(exports, 'ChartCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ChartCard).default;
  }
});

var _Field = __webpack_require__(201);

Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Field).default;
  }
});

var _MiniProgress = __webpack_require__(198);

Object.defineProperty(exports, 'MiniProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MiniProgress).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__(121);

var _numeral2 = _interopRequireDefault(_numeral);

var _classnames = __webpack_require__(26);

var _classnames2 = _interopRequireDefault(_classnames);

var _uiw = __webpack_require__(10);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _Charts = __webpack_require__(326);

var _chartDatas = __webpack_require__(195);

var _Trend = __webpack_require__(193);

var _Trend2 = _interopRequireDefault(_Trend);

var _Analysis = __webpack_require__(190);

var _Analysis2 = _interopRequireDefault(_Analysis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = _uiw.Layout.Row,
    Col = _uiw.Layout.Col;

var topColResponseiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
};

var Analysis = function (_Component) {
  (0, _inherits3.default)(Analysis, _Component);

  function Analysis(props) {
    (0, _classCallCheck3.default)(this, Analysis);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Analysis.__proto__ || (0, _getPrototypeOf2.default)(Analysis)).call(this, props));

    _this.onClick = function (idx) {
      _this.setState({ btnactive: idx });
    };

    _this.onClickDate = function (idx) {
      _this.setState({ dateactive: idx });
    };

    _this.state = {
      btnactive: 0,
      dateactive: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Analysis, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: '\u6570\u636E\u5206\u6790', showBreadcrumb: false },
        _react2.default.createElement(
          Row,
          null,
          _react2.default.createElement(
            Col,
            topColResponseiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,
                title: '\u603B\u9500\u552E\u989D',
                action: _react2.default.createElement(
                  _uiw.Tooltip,
                  { content: '\u6307\u6807\u8BF4\u660E', className: _Analysis2.default.tooltip },
                  _react2.default.createElement(_uiw.Icon, { type: 'information-o' })
                ),
                total: (0, _Charts.yuan)(126560),
                footer: _react2.default.createElement(_Charts.Field, { label: '\u65E5\u5747\u9500\u552E\u989D', value: '\uFFE5' + (0, _numeral2.default)(12423).format('0,0') }),
                contentHeight: 46
              },
              _react2.default.createElement(
                _Trend2.default,
                { flag: 'up', style: { marginRight: 16 } },
                '\u5468\u540C\u6BD4',
                _react2.default.createElement(
                  'span',
                  { className: _Analysis2.default.trendText },
                  '12%'
                )
              ),
              _react2.default.createElement(
                _Trend2.default,
                { flag: 'down' },
                '\u65E5\u73AF\u6BD4',
                _react2.default.createElement(
                  'span',
                  { className: _Analysis2.default.trendText },
                  '11%'
                )
              )
            )
          ),
          _react2.default.createElement(
            Col,
            topColResponseiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,
                title: '\u8BBF\u95EE\u91CF',
                action: _react2.default.createElement(
                  _uiw.Tooltip,
                  { content: '\u6307\u6807\u8BF4\u660E', className: _Analysis2.default.tooltip },
                  _react2.default.createElement(_uiw.Icon, { type: 'information-o' })
                ),
                total: (0, _numeral2.default)(8846).format('0,0'),
                footer: _react2.default.createElement(_Charts.Field, { label: '\u65E5\u8BBF\u95EE\u91CF', value: (0, _numeral2.default)(1234).format(0, 0) }),
                contentHeight: 46
              },
              _react2.default.createElement(_Charts.MiniArea, {
                color: '#975FE4',
                height: 46,
                data: _chartDatas.visitData
              })
            )
          ),
          _react2.default.createElement(
            Col,
            topColResponseiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,
                title: '\u652F\u4ED8\u7B14\u6570',
                action: _react2.default.createElement(
                  _uiw.Tooltip,
                  { content: '\u6307\u6807\u8BF4\u660E', className: _Analysis2.default.tooltip },
                  _react2.default.createElement(_uiw.Icon, { type: 'information-o' })
                ),
                total: (0, _numeral2.default)(6560).format('0,0'),
                footer: _react2.default.createElement(_Charts.Field, { label: '\u8F6C\u5316\u7387', value: '60%' }),
                contentHeight: 46
              },
              _react2.default.createElement(_Charts.MiniBar, {
                height: 46,
                data: _chartDatas.visitData
              })
            )
          ),
          _react2.default.createElement(
            Col,
            topColResponseiveProps,
            _react2.default.createElement(
              _Charts.ChartCard,
              {
                bordered: false,
                title: '\u8FD0\u8425\u6D3B\u52A8\u6548\u679C',
                action: _react2.default.createElement(
                  _uiw.Tooltip,
                  { title: '\u6307\u6807\u8BF4\u660E' },
                  _react2.default.createElement(_uiw.Icon, { type: 'info-circle-o' })
                ),
                total: '78%',
                footer: _react2.default.createElement(
                  'div',
                  { style: { whiteSpace: 'nowrap', overflow: 'hidden' } },
                  _react2.default.createElement(
                    _Trend2.default,
                    { flag: 'up', style: { marginRight: 16 } },
                    '\u5468\u540C\u6BD4',
                    _react2.default.createElement(
                      'span',
                      { className: _Analysis2.default.trendText },
                      '12%'
                    )
                  ),
                  _react2.default.createElement(
                    _Trend2.default,
                    { flag: 'down' },
                    '\u65E5\u73AF\u6BD4',
                    _react2.default.createElement(
                      'span',
                      { className: _Analysis2.default.trendText },
                      '11%'
                    )
                  )
                ),
                contentHeight: 46
              },
              _react2.default.createElement(_Charts.MiniProgress, { percent: 78, strokeWidth: 8, target: 80, color: '#13C2C2' })
            )
          ),
          _react2.default.createElement(
            Col,
            { span: '24' },
            _react2.default.createElement(
              _uiw.Card,
              {
                bordered: false,
                bodyStyle: { padding: 0 },
                style: { margin: '0 9px' }
              },
              _react2.default.createElement(
                'div',
                { className: _Analysis2.default.salesCard },
                _react2.default.createElement(
                  Row,
                  { className: _Analysis2.default.row },
                  ['销售额', '访问量'].map(function (item, idx) {
                    return _react2.default.createElement(
                      Col,
                      { span: '4', key: idx },
                      _react2.default.createElement(
                        'div',
                        {
                          className: (0, _classnames2.default)(_Analysis2.default.tabModal, (0, _defineProperty3.default)({}, '' + _Analysis2.default.moduleActive, _this2.state.btnactive === idx)),
                          onClick: _this2.onClick.bind(_this2, idx)
                        },
                        _react2.default.createElement(
                          'div',
                          null,
                          item
                        )
                      )
                    );
                  }),
                  _react2.default.createElement(
                    'div',
                    { className: _Analysis2.default.datePicker },
                    ['今天', '本周', '本月', '本年'].map(function (item, idx) {
                      return _react2.default.createElement(
                        'span',
                        {
                          key: idx,
                          className: (0, _classnames2.default)((0, _defineProperty3.default)({}, '' + _Analysis2.default.dateActive, _this2.state.dateactive === idx)),
                          onClick: _this2.onClickDate.bind(_this2, idx)
                        },
                        item
                      );
                    }),
                    _react2.default.createElement(_uiw.DatePicker, { showToday: true, style: { width: 125 } }),
                    _react2.default.createElement(_uiw.DatePicker, { showToday: true, style: { width: 125 } })
                  )
                ),
                this.state.btnactive ? _react2.default.createElement(
                  Row,
                  { type: 'flex' },
                  _react2.default.createElement(
                    Col,
                    { xl: 16, lg: 12, md: 12, sm: 24, xs: 24 },
                    _react2.default.createElement(
                      'div',
                      { className: _Analysis2.default.salesBar },
                      _react2.default.createElement(_Charts.Bar, {
                        height: 295,
                        title: '\u9500\u552E\u989D\u8D8B\u52BF',
                        data: _chartDatas.salesData
                      })
                    )
                  ),
                  _react2.default.createElement(
                    Col,
                    { xl: 8, lg: 12, md: 12, sm: 24, xs: 24 },
                    _react2.default.createElement(
                      'div',
                      { className: _Analysis2.default.salesRank },
                      _react2.default.createElement(
                        'h4',
                        { className: _Analysis2.default.rankingTitle },
                        '\u95E8\u5E97\u9500\u552E\u989D\u6392\u540D'
                      ),
                      _react2.default.createElement(
                        'ul',
                        { className: _Analysis2.default.rankingList },
                        _chartDatas.rankingListData.map(function (item, i) {
                          return _react2.default.createElement(
                            'li',
                            { key: item.title },
                            _react2.default.createElement(
                              'span',
                              { className: i < 3 ? _Analysis2.default.active : '' },
                              i + 1
                            ),
                            _react2.default.createElement(
                              'span',
                              null,
                              item.title
                            ),
                            _react2.default.createElement(
                              'span',
                              null,
                              (0, _numeral2.default)(item.total).format('0,0')
                            )
                          );
                        })
                      )
                    )
                  )
                ) : _react2.default.createElement(
                  Row,
                  { type: 'flex' },
                  _react2.default.createElement(
                    Col,
                    { xl: 16, lg: 12, md: 12, sm: 24, xs: 24 },
                    _react2.default.createElement(
                      'div',
                      { className: _Analysis2.default.salesBar },
                      _react2.default.createElement(_Charts.Bar, {
                        height: 296,
                        title: '\u9500\u552E\u989D\u8D8B\u52BF',
                        data: _chartDatas.salesData
                      })
                    )
                  ),
                  _react2.default.createElement(
                    Col,
                    { xl: 8, lg: 12, md: 12, sm: 24, xs: 24 },
                    _react2.default.createElement(
                      'div',
                      { className: _Analysis2.default.salesRank },
                      _react2.default.createElement(
                        'h4',
                        { className: _Analysis2.default.rankingTitle },
                        '\u95E8\u5E97\u9500\u552E\u989D\u6392\u540D'
                      ),
                      _react2.default.createElement(
                        'ul',
                        { className: _Analysis2.default.rankingList },
                        _chartDatas.rankingListData.map(function (item, i) {
                          return _react2.default.createElement(
                            'li',
                            { key: item.title },
                            _react2.default.createElement(
                              'span',
                              { className: i < 3 ? _Analysis2.default.active : '' },
                              i + 1
                            ),
                            _react2.default.createElement(
                              'span',
                              null,
                              item.title
                            ),
                            _react2.default.createElement(
                              'span',
                              null,
                              (0, _numeral2.default)(item.total).format('0,0')
                            )
                          );
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Analysis;
}(_react.Component);

exports.default = Analysis;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(14);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function (_Component) {
  (0, _inherits3.default)(Dashboard, _Component);

  function Dashboard() {
    (0, _classCallCheck3.default)(this, Dashboard);
    return (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageHeaderLayout2.default,
        { title: '\u4EEA\u8868\u76D8', content: '\u6B22\u8FCE\u56DE\u6765', showBreadcrumb: false },
        '\u8FD9\u91CC\u662F\u5185\u5BB9'
      );
    }
  }]);
  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),
/* 329 */,
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wapper":"wapper2pQrI","breadcrumb":"breadcrumb2pQrI","content":"content2pQrI"};

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuData = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuData = [{
  name: '仪表盘',
  icon: 'appstore-o',
  path: 'dashboard',
  children: [{
    name: '仪表盘',
    icon: 'pie-chart',
    path: 'dashboard'
  }, {
    name: '数据分析',
    icon: 'coffee',
    path: 'analysis'
  }, {
    name: '工作台',
    icon: 'coffee',
    path: 'workplace'
  }]
}, {
  name: '组件',
  icon: 'inbox',
  path: 'component',
  children: [{
    name: '表单页面',
    icon: 'pie-chart',
    path: 'form-page',
    children: [{
      name: '分步表单',
      path: 'step-form'
    }, {
      name: '高级表单',
      path: 'advanced-form'
    }]
  }, {
    name: '表单',
    icon: 'pie-chart',
    path: 'form',
    children: [{
      name: '表单元素',
      path: 'form'
    }]
  }, {
    name: '头像列表',
    icon: 'smile',
    path: 'avatarlist'
  }, {
    name: '倒计时',
    icon: 'time',
    path: 'countdown'
  }, {
    name: '文本省略',
    icon: 'pie-chart',
    path: 'ellipsis'
  }, {
    name: '描述列表',
    icon: 'dot-chart',
    path: 'description-list'
  }, {
    name: '处理结果',
    icon: 'circle-check',
    path: 'result'
  }, {
    name: '底部工具栏',
    icon: 'cut',
    path: 'footer-toolbar'
  }, {
    name: '全局页脚',
    icon: 'copyright',
    path: 'global-footer'
  }, {
    name: '图表',
    icon: 'area-chart',
    path: 'charts',
    children: [{
      name: '柱状图',
      path: 'bar-chart'
    }]
  }]
}, {
  name: '异常',
  icon: 'warning-o',
  path: 'exception',
  children: [{
    name: '403',
    path: '403'
  }, {
    name: '404',
    path: '404'
  }, {
    name: '500',
    path: '500'
  }]
}];

/* eslint no-useless-escape:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
function isUrl(path) {
  return reg.test(path);
}
function formatter(data) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var parentAuthority = arguments[2];

  return data.map(function (item) {
    var path = item.path;

    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    var result = (0, _extends3.default)({}, item, {
      path: path,
      authority: item.authority || parentAuthority
    });
    if (item.children) {
      result.children = formatter(item.children, '' + parentPath + item.path + '/', item.authority);
    }
    return result;
  });
}

var getMenuData = exports.getMenuData = function getMenuData() {
  return formatter(menuData);
};

/***/ }),
/* 332 */,
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sider":"sider3Hl8e","logo":"logo3Hl8e"};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(36);

var _uiw = __webpack_require__(10);

var _index = __webpack_require__(333);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /user/23/info => ['/user','/user/23,'/user/23/info']
function urlToList(url) {
  var urllist = url.split('/').filter(function (i) {
    return i;
  });
  return urllist.map(function (urlItem, index) {
    return '/' + urllist.slice(0, index + 1).join('/');
  });
}

var GlobalHeader = function (_PureComponent) {
  (0, _inherits3.default)(GlobalHeader, _PureComponent);

  function GlobalHeader(props) {
    (0, _classCallCheck3.default)(this, GlobalHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GlobalHeader.__proto__ || (0, _getPrototypeOf2.default)(GlobalHeader)).call(this, props));

    _this.getSelectedMenuKeys = function () {
      var pathname = _this.props.location.pathname;

      return urlToList(pathname);
    };

    _this.state = {
      defaultOpened: []
    };
    return _this;
  }

  (0, _createClass3.default)(GlobalHeader, [{
    key: 'onClose',
    value: function onClose() {}
  }, {
    key: 'onSelect',
    value: function onSelect() {}
  }, {
    key: 'getNavMenuItems',
    value: function getNavMenuItems(menuData) {
      var _this2 = this;

      if (!menuData) {
        return [];
      }
      return menuData.map(function (item) {
        if (!item.name) {
          return null;
        }
        var itemPath = item.path;
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
            _this2.getNavMenuItems(item.children, itemPath)
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
            { to: itemPath, target: item.target, replace: itemPath === _this2.props.location.pathname },
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
    key: 'render',
    value: function render() {
      var menuData = this.props.menuData;

      var defaultOpened = this.getSelectedMenuKeys();
      var defaultActive = defaultOpened && defaultOpened.length > 0 ? defaultOpened[defaultOpened.length - 1] : '/';
      return _react2.default.createElement(
        'div',
        { className: _index2.default.sider },
        _react2.default.createElement(
          'div',
          { className: _index2.default.logo },
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
              'Uiw Admin'
            )
          )
        ),
        _react2.default.createElement(
          _uiw.Menu,
          {
            defaultActive: defaultActive,
            defaultOpened: defaultOpened,
            onClose: this.onClose.bind(this),
            onSelect: this.onSelect.bind(this)
          },
          this.getNavMenuItems(menuData)
        )
      );
    }
  }]);
  return GlobalHeader;
}(_react.PureComponent);

exports.default = GlobalHeader;

/***/ }),
/* 335 */,
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header1oG7d","headerLeft":"headerLeft1oG7d","headerRight":"headerRight1oG7d","item":"item1oG7d"};

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _uiw = __webpack_require__(10);

var _index = __webpack_require__(336);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalHeader = function (_PureComponent) {
  (0, _inherits3.default)(GlobalHeader, _PureComponent);

  function GlobalHeader() {
    (0, _classCallCheck3.default)(this, GlobalHeader);
    return (0, _possibleConstructorReturn3.default)(this, (GlobalHeader.__proto__ || (0, _getPrototypeOf2.default)(GlobalHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(GlobalHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default.header },
        _react2.default.createElement(
          'div',
          { className: _index2.default.headerLeft },
          _react2.default.createElement(
            'a',
            { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/uiw-react/uiw-admin' },
            _react2.default.createElement(_uiw.Icon, { type: 'github' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default.headerRight },
          _react2.default.createElement(
            'div',
            { className: _index2.default.item },
            _react2.default.createElement(_uiw.Icon, { type: 'lock' })
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default.item },
            _react2.default.createElement(
              _uiw.Badge,
              { dot: true, count: 4 },
              _react2.default.createElement(_uiw.Icon, { type: 'bell' })
            )
          )
        )
      );
    }
  }]);
  return GlobalHeader;
}(_react.PureComponent);

exports.default = GlobalHeader;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(402);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(36);

var _GlobalHeader = __webpack_require__(337);

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _SiderMenu = __webpack_require__(334);

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

var _ = __webpack_require__(152);

var _2 = _interopRequireDefault(_);

var _menu = __webpack_require__(331);

var _BasicLayout = __webpack_require__(330);

var _BasicLayout2 = _interopRequireDefault(_BasicLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 根据菜单取得重定向地址.
 */
var redirectData = [];
var getRedirect = function getRedirect(item) {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: '' + item.path,
        to: '' + item.children[0].path
      });
      item.children.forEach(function (children) {
        getRedirect(children);
      });
    }
  }
};
(0, _menu.getMenuData)().forEach(getRedirect);

var BasicLayout = function (_Component) {
  (0, _inherits3.default)(BasicLayout, _Component);

  function BasicLayout() {
    (0, _classCallCheck3.default)(this, BasicLayout);
    return (0, _possibleConstructorReturn3.default)(this, (BasicLayout.__proto__ || (0, _getPrototypeOf2.default)(BasicLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(BasicLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          routerData = _props.routerData,
          location = _props.location;

      var RouteComponents = [];
      (0, _keys2.default)(routerData).forEach(function (path, idx) {
        if (path !== '/') {
          RouteComponents.push(_react2.default.createElement(_reactRouterDom.Route, { exact: true, key: idx + 1, path: path, component: routerData[path].component }));
        }
      });
      return _react2.default.createElement(
        'div',
        { className: _BasicLayout2.default.wapper },
        _react2.default.createElement(_SiderMenu2.default, {
          location: location,
          menuData: (0, _menu.getMenuData)()
        }),
        _react2.default.createElement(
          'div',
          { className: _BasicLayout2.default.content },
          _react2.default.createElement(_GlobalHeader2.default, null),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            redirectData.map(function (item) {
              return _react2.default.createElement(_reactRouterDom.Redirect, { key: item.from, exact: true, from: item.from, to: item.to });
            }),
            RouteComponents,
            _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
          )
        )
      );
    }
  }]);
  return BasicLayout;
}(_react.Component);

exports.default = BasicLayout;

/***/ })
]]);