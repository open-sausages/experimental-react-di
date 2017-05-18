/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (File) {
  return function (props) {
    props.item.title = 'U.C. owns this space';
    return _react2.default.createElement(File, props);
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (FormAction) {
  return function (props) {
    var newProps = _extends({}, props, {
      data: _extends({}, props.data, {
        buttonStyle: props.loading ? 'danger' : props.data.buttonStyle
      }),
      handleClick: function handleClick(e) {
        if (window.confirm('Did you really mean to click this?')) {
          props.handleClick(e);
        }
      }
    });

    return _react2.default.createElement(FormAction, newProps);
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (TextField) {
    return function (props) {
        props.warningBuffer = 10;
        var warningBuffer = props.warningBuffer,
            limit = props.limit,
            length = props.value.length;

        var remainingChars = limit - length;
        var showWarning = length + warningBuffer >= limit;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(TextField, props),
            showWarning && _react2.default.createElement(
                'small',
                null,
                'Characters remaining: ',
                remainingChars
            )
        );
    };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (TextField) {
  return function (props) {
    props.limit = 40;
    var limit = props.limit,
        value = props.value;

    var invalid = limit !== undefined && value.length > limit;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(TextField, props),
      invalid && _react2.default.createElement(
        'span',
        { style: { color: 'red' } },
        'Text is too long! Must be ' + limit + ' characters'
      )
    );
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__(5);

var _Injector2 = _interopRequireDefault(_Injector);

var _CustomGalleryItemCreator = __webpack_require__(1);

var _CustomGalleryItemCreator2 = _interopRequireDefault(_CustomGalleryItemCreator);

var _TextFieldCharacterCounterCreator = __webpack_require__(3);

var _TextFieldCharacterCounterCreator2 = _interopRequireDefault(_TextFieldCharacterCounterCreator);

var _TextFieldLengthCheckerCreator = __webpack_require__(4);

var _TextFieldLengthCheckerCreator2 = _interopRequireDefault(_TextFieldLengthCheckerCreator);

var _FormActionAwesomenessCreator = __webpack_require__(2);

var _FormActionAwesomenessCreator2 = _interopRequireDefault(_FormActionAwesomenessCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Injector2.default.update({
  name: 'module-a',
  after: 'module-b'
}, function (update) {
  update('File', _CustomGalleryItemCreator2.default);
  update('TextField', _TextFieldCharacterCounterCreator2.default);
  update('FormAction', _FormActionAwesomenessCreator2.default);
});

_Injector2.default.update({
  name: 'module-b'
}, function (update) {
  update('TextField', _TextFieldLengthCheckerCreator2.default);
});

/***/ })
/******/ ]);