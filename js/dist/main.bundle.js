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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (TextField) {
  return function (_React$Component) {
    _inherits(FancyText, _React$Component);

    function FancyText(props) {
      _classCallCheck(this, FancyText);

      var _this = _possibleConstructorReturn(this, (FancyText.__proto__ || Object.getPrototypeOf(FancyText)).call(this, props));

      _this.handleChange = _this.handleChange.bind(_this);
      _this.state = {
        characterCount: props.value.length
      };
      return _this;
    }

    _createClass(FancyText, [{
      key: 'handleChange',
      value: function handleChange(e) {
        this.setState({
          characterCount: e.target.value.length
        });

        this.props.onChange(e);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(TextField, _extends({}, this.props, { onChange: this.handleChange })),
          _react2.default.createElement(
            'small',
            null,
            'Character count: ',
            this.state.characterCount
          )
        );
      }
    }]);

    return FancyText;
  }(_react2.default.Component);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (TextField) {
  return function (props) {
    var timeout = void 0;
    var passwordCheck = function passwordCheck(e) {
      e.persist();
      timeout && window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        if (!e.target.value.match(/\d{2}/)) {
          alert('The text must contain at least two consecutive digits');
        }
      }, 1000);

      return e;
    };
    var newProps = _extends({}, props, {
      onChange: (0, _redux.compose)(props.onChange, passwordCheck)
    });

    return _react2.default.createElement(TextField, newProps);
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

var _TextFieldPasswordStrengthCheckerCreator = __webpack_require__(4);

var _TextFieldPasswordStrengthCheckerCreator2 = _interopRequireDefault(_TextFieldPasswordStrengthCheckerCreator);

var _FormActionAwesomenessCreator = __webpack_require__(2);

var _FormActionAwesomenessCreator2 = _interopRequireDefault(_FormActionAwesomenessCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Injector2.default.customise('File', _CustomGalleryItemCreator2.default);
_Injector2.default.customise('TextField', _TextFieldCharacterCounterCreator2.default);
_Injector2.default.customise('TextField', _TextFieldPasswordStrengthCheckerCreator2.default);
_Injector2.default.customise('FormAction', _FormActionAwesomenessCreator2.default);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ })
/******/ ]);