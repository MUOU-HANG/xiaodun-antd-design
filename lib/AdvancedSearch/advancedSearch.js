"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.default = exports.AdvancedContext = void 0;

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _react = _interopRequireWildcard(require("react"));

var _advancedForm = _interopRequireDefault(require("./advancedForm"));

require("./index.css");

var _quickForm = _interopRequireDefault(require("./quickForm"));

var _toolBar2 = _interopRequireDefault(require("./toolBar"));

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var reset = function reset() {
  var _document$getElementB;

  (_document$getElementB = document.getElementById('xdad-advanced-reset')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.click();
};

exports.reset = reset;
var AdvancedContext = /*#__PURE__*/(0, _react.createContext)({});
exports.AdvancedContext = AdvancedContext;

var AdvancedSearch = function AdvancedSearch(_ref) {
  var children = _ref.children,
      _ref$showAdvanced = _ref.showAdvanced,
      showAdvanced = _ref$showAdvanced === void 0 ? true : _ref$showAdvanced,
      _ref$filterEmpty = _ref.filterEmpty,
      filterEmpty = _ref$filterEmpty === void 0 ? true : _ref$filterEmpty,
      style = _ref.style,
      className = _ref.className,
      formProps = _ref.formProps,
      onSearch = _ref.onSearch,
      onChange = _ref.onChange,
      onKeyEnter = _ref.onKeyEnter;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      allValues = _useState2[0],
      setAllValues = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      quickValues = _useState4[0],
      setQuickValues = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      advancedValues = _useState6[0],
      setAdvancedValues = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isAdvance = _useState8[0],
      setIsAdvance = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      quickForm = _useState10[0],
      setQuickForm = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      advancedForm = _useState12[0],
      setAdvancedForm = _useState12[1];

  var _useState13 = (0, _react.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      advancedProps = _useState14[0],
      setAdvancedProps = _useState14[1];

  var _useState15 = (0, _react.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      quickProps = _useState16[0],
      setQuickProps = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      toolbar = _useState18[0],
      setToolbar = _useState18[1];

  var store = {
    allValues: allValues,
    setAllValues: setAllValues,
    quickValues: quickValues,
    setQuickValues: setQuickValues,
    advancedValues: advancedValues,
    setAdvancedValues: setAdvancedValues
  };
  (0, _react.useEffect)(function () {
    classifySearch();
  }, []); // 搜索分类

  var classifySearch = function classifySearch() {
    var _simpleSearch = [];
    var _advancedSearch = [];
    var _toolBar = [];
    console.log(children); // 分类实现

    var classify = function classify(child) {
      var _child$type;

      var name = child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name;

      if (name === 'QuickForm') {
        var _ref2 = (child === null || child === void 0 ? void 0 : child.props) || {},
            _ref2$children = _ref2.children,
            props_child = _ref2$children === void 0 ? [] : _ref2$children,
            rest = _objectWithoutProperties(_ref2, _excluded);

        setQuickProps(rest);
        var propsPropsChildren = Array.isArray(props_child) ? props_child : [props_child];

        _simpleSearch.push.apply(_simpleSearch, _toConsumableArray(propsPropsChildren));
      }

      if (name === 'AdvancedForm') {
        var _ref3 = (child === null || child === void 0 ? void 0 : child.props) || {},
            _ref3$children = _ref3.children,
            _props_child = _ref3$children === void 0 ? [] : _ref3$children,
            _rest = _objectWithoutProperties(_ref3, _excluded2);

        setAdvancedProps(_rest);
        var advancedPropsChildren = Array.isArray(_props_child) ? _props_child : [_props_child];
        name === 'AdvancedForm' && _advancedSearch.push.apply(_advancedSearch, _toConsumableArray(advancedPropsChildren));
      }

      if (name === 'ToolBar') {
        var _ref4 = (child === null || child === void 0 ? void 0 : child.props) || {},
            _ref4$children = _ref4.children,
            _props_child2 = _ref4$children === void 0 ? [] : _ref4$children,
            _rest2 = _objectWithoutProperties(_ref4, _excluded3);

        setAdvancedProps(_rest2);
        var ToolBarChildren = Array.isArray(_props_child2) ? _props_child2 : [_props_child2];
        name === 'ToolBar' && _toolBar.push.apply(_toolBar, _toConsumableArray(ToolBarChildren));
      }

      if (name !== 'QuickForm' && name !== 'AdvancedForm' && name === 'ToolBar') {
        if (child.props['data-simple']) {
          _simpleSearch.push(child);
        } else if (child.props['data-toolbar']) {
          _toolBar.push(child);
        } else {
          _advancedSearch.push(child);
        }
      }
    }; // 子元素是数组，表示有多个子元素


    if (Array.isArray(children)) {
      children === null || children === void 0 ? void 0 : children.forEach(function (child) {
        classify(child);
      });
    } // 只有一个子元素，就判断是否有data-simple属性，有为快捷搜索，反之为高级搜索


    if (!Array.isArray(children)) {
      classify(children);
    } // 如果元素大于4个，提示信息


    if (_simpleSearch.length > 4) {
      _message2.default.info('快捷搜索建议控制在4个以内！');
    } //  如果快捷搜索的长度为0，则打开高级搜索


    if (_simpleSearch.length === 0) {
      setIsAdvance(true);
    }

    setAdvancedForm(_advancedSearch);
    setQuickForm(_simpleSearch);
    setToolbar(_toolBar);
  };

  return /*#__PURE__*/_react.default.createElement(AdvancedContext.Provider, {
    value: store
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "xdad-advance clearfix ".concat(className),
    style: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "xdad-advance-seach"
  }, /*#__PURE__*/_react.default.createElement(_toolBar2.default, null, toolbar), /*#__PURE__*/_react.default.createElement(_quickForm.default, _objectSpread(_objectSpread({}, formProps), {}, {
    onKeyEnter: onKeyEnter,
    onChange: onChange,
    filterEmpty: filterEmpty
  }, quickProps), quickForm), showAdvanced && advancedForm.length !== 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: 'xdad-advance-btn',
    onClick: function onClick() {
      return setIsAdvance(!isAdvance);
    }
  }, "\u9AD8\u7EA7\u641C\u7D22", isAdvance ? /*#__PURE__*/_react.default.createElement("i", {
    className: "iconfont icon-advancedsearch",
    style: {
      fontSize: '14px',
      marginLeft: '10px',
      display: 'inline-block'
    }
  }) : /*#__PURE__*/_react.default.createElement("i", {
    className: "iconfont icon-advancedsearch",
    style: {
      fontSize: '14px',
      marginLeft: '10px',
      transform: 'rotate(180deg)',
      display: 'inline-block'
    }
  }))), isAdvance && showAdvanced && /*#__PURE__*/_react.default.createElement(_advancedForm.default, _objectSpread(_objectSpread({}, formProps), {}, {
    filterEmpty: filterEmpty,
    onSearch: onSearch
  }, advancedProps), advancedForm)));
};

var _default = AdvancedSearch;
exports.default = _default;