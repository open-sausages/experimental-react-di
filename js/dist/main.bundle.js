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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (FormAction) {
  var ConfirmingFormAction = function (_React$Component) {
    _inherits(ConfirmingFormAction, _React$Component);

    function ConfirmingFormAction(props) {
      _classCallCheck(this, ConfirmingFormAction);

      var _this = _possibleConstructorReturn(this, (ConfirmingFormAction.__proto__ || Object.getPrototypeOf(ConfirmingFormAction)).call(this, props));

      _this.state = { confirming: false };
      _this.confirm = _this.confirm.bind(_this);
      _this.cancel = _this.cancel.bind(_this);
      _this.preClick = _this.preClick.bind(_this);
      return _this;
    }

    _createClass(ConfirmingFormAction, [{
      key: 'confirm',
      value: function confirm(e) {
        this.props.handleClick(e, this.props.name || this.props.id);
        console.log('called handleclick', this.props.handleClick);
        this.setState({ confirming: false });
      }
    }, {
      key: 'cancel',
      value: function cancel() {
        this.setState({ confirming: false });
      }
    }, {
      key: 'preClick',
      value: function preClick(event) {
        event.preventDefault();
        this.setState({ confirming: true });
      }
    }, {
      key: 'render',
      value: function render() {
        var extraButtons = [];
        var _props = this.props,
            confirmText = _props.confirmText,
            cancelText = _props.cancelText;

        var buttonProps = _extends({}, this.props, {
          extraClass: 'ss-ui-action-constructive',
          attributes: _extends({}, this.props.attributes, {
            type: 'button'
          })
        });
        delete buttonProps.name;
        delete buttonProps.type;

        var hideStyle = {
          display: this.state.confirming ? null : 'none'
        };

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(FormAction, _extends({}, buttonProps, { handleClick: this.preClick })),
          _react2.default.createElement(
            'button',
            { style: hideStyle, key: 'confirm', type: 'submit', name: this.props.name, onClick: this.confirm },
            confirmText
          ),
          _react2.default.createElement(
            'button',
            { style: hideStyle, key: 'cancel', type: 'button', onClick: this.cancel },
            cancelText
          )
        );
      }
    }]);

    return ConfirmingFormAction;
  }(_react2.default.Component);

  return ConfirmingFormAction;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var HideableComponent = function HideableComponent(_ref) {
  var Component = _ref.Component,
      props = _objectWithoutProperties(_ref, ['Component']);

  return props.shouldHide ? null : _react2.default.createElement(Component, props);
};

HideableComponent.propTypes = {
  shouldHide: _react2.default.PropTypes.boolean
};

HideableComponent.defaultProps = {
  shouldHide: false
};

exports.default = function (Component) {
  return function (props) {
    return props.shouldHide ? _react2.default.createElement(
      'span',
      null,
      'hidden'
    ) : _react2.default.createElement(Component, props);
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props$value$split = props.value.split('-'),
      _props$value$split2 = _slicedToArray(_props$value$split, 3),
      area = _props$value$split2[0],
      exchange = _props$value$split2[1],
      ext = _props$value$split2[2];

  function handleChange(i, e) {
    var parts = props.value.split('-');
    parts[i] = e.target.value;
    var formatted = parts.join('-');
    props.onChange(formatted, e);
  };
  return _react2.default.createElement(
    'div',
    null,
    '(',
    _react2.default.createElement('input', { type: 'text', value: area, onChange: handleChange.bind(null, 0) }),
    ')',
    _react2.default.createElement('input', { type: 'text', value: exchange, onChange: handleChange.bind(null, 1) }),
    ' -',
    _react2.default.createElement('input', { type: 'text', value: ext, onChange: handleChange.bind(null, 2) })
  );
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__(4);

var _Injector2 = _interopRequireDefault(_Injector);

var _HideableComponentCreator = __webpack_require__(2);

var _HideableComponentCreator2 = _interopRequireDefault(_HideableComponentCreator);

var _PrettyPhoneNumberField = __webpack_require__(3);

var _PrettyPhoneNumberField2 = _interopRequireDefault(_PrettyPhoneNumberField);

var _ConfirmingFormAction = __webpack_require__(1);

var _ConfirmingFormAction2 = _interopRequireDefault(_ConfirmingFormAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sheet = window.document.styleSheets[0];
sheet.insertRule('.green { border: 5px solid green; }', sheet.cssRules.length);

_Injector2.default.react.register('PrettyPhoneNumberField', _PrettyPhoneNumberField2.default);

_Injector2.default.transform('toggle-field', function (updater) {
  updater.react('ReduxFormField', _HideableComponentCreator2.default);

  updater.react('FormAction.AssetAdmin.EditForm.action_save', _ConfirmingFormAction2.default);
});

_Injector2.default.transform('tester', function (updater) {
  updater.form.alterSchema('AssetAdmin.*', function (updateSchema) {
    return function (values, form) {
      return updateSchema(form.updateField('State', {
        shouldHide: values.Country !== 'US'
      }).updateField('action_save', {
        confirmText: 'Are you sure you want to save?',
        cancelText: 'Cancel!!!!'
      }).setFieldClass('PaymentOptions', 'green', values.Price > 500).setFieldComponent('PhoneNumber', 'PrettyPhoneNumberField').getState());
    };
  });
});

_Injector2.default.transform('tester-2', function (updater) {
  updater.form.addValidation('AssetAdmin.*', function (validate) {
    return function (values, errors) {
      var requiredLength = values.Country === 'US' ? 5 : 4;
      if (!values.Country || !values.PostalCode) {
        return;
      }
      return validate(values, _extends({}, errors, {
        PostalCode: values.PostalCode.length !== requiredLength ? 'Invalid postal code' : null
      }));
    };
  });
});

/***/ })
/******/ ]);