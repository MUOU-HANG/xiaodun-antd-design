"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var AdvancedSearch = function AdvancedSearch(_ref) {
  var children = _ref.children,
      formProps = _ref.formProps,
      _ref$showAdvanced = _ref.showAdvanced,
      showAdvanced = _ref$showAdvanced === void 0 ? true : _ref$showAdvanced,
      _ref$filterEmpty = _ref.filterEmpty,
      filterEmpty = _ref$filterEmpty === void 0 ? true : _ref$filterEmpty,
      onKeyEnter = _ref.onKeyEnter,
      onChange = _ref.onChange,
      onSearch = _ref.onSearch;

  var _Form$useForm = _form.default.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      advancedForm = _Form$useForm2[0];

  var _Form$useForm3 = _form.default.useForm(),
      _Form$useForm4 = _slicedToArray(_Form$useForm3, 1),
      simpleForm = _Form$useForm4[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAdvance = _useState2[0],
      setIsAdvance = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      simpleSearch = _useState4[0],
      setSimpleSearch = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      advancedSearch = _useState6[0],
      setAdvancedSearch = _useState6[1];

  (0, _react.useEffect)(function () {
    classifySearch();
  }, []); // 搜索分类

  var classifySearch = function classifySearch() {
    var _simpleSearch = [];
    var _advancedSearch = [];
    children === null || children === void 0 ? void 0 : children.forEach(function (child) {
      child.props['data-simple'] ? _simpleSearch.push(child) : _advancedSearch.push(child);
    });

    if (_simpleSearch.length > 4) {
      _message2.default.info('建议快捷搜索控制在4个以内！');
    }

    setAdvancedSearch(_advancedSearch);
    setSimpleSearch(_simpleSearch);
  }; // 过滤空值 undefined|null


  var filterEmptyData = function filterEmptyData(SourceData) {
    for (var _i2 = 0, _Object$entries = Object.entries(SourceData); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (!value) {
        delete SourceData[key];
      }
    }

    return SourceData;
  }; // 合并搜索条件


  var mergeSearchValues = function mergeSearchValues(_filterEmpty) {
    var allSearchValues = _objectSpread(_objectSpread({}, simpleForm.getFieldsValue()), advancedForm.getFieldsValue());

    console.log(allSearchValues, '1234');
    return _filterEmpty ? filterEmptyData(allSearchValues) : allSearchValues;
  }; // 搜索渲染


  var searchRender = function searchRender(type) {
    var renderData = type === 'advanced' ? advancedSearch : simpleSearch;
    return renderData === null || renderData === void 0 ? void 0 : renderData.map(function (child, index) {
      var type = child.type;
      var name = child.props['data-name'];
      var itemProps = child.props['data-itemProps'];
      var isSelect = _typeof(type) === 'object' && (type === null || type === void 0 ? void 0 : type.render.name) === 'InternalSelect';
      return /*#__PURE__*/_react.default.createElement(_form.default.Item, _objectSpread(_objectSpread({
        key: name !== null && name !== void 0 ? name : index,
        name: name
      }, itemProps), {}, {
        style: {
          width: isSelect ? '160px' : '240px'
        },
        className: "xdad-advance-form-item"
      }), child);
    });
  }; // 高级搜索


  var onInternalSearch = function onInternalSearch() {
    var allSearchValues = mergeSearchValues(filterEmpty);
    var simpleValues = filterEmpty ? filterEmptyData(simpleForm.getFieldsValue()) : simpleForm.getFieldsValue();
    var advancedValues = filterEmpty ? filterEmptyData(advancedForm.getFieldsValue()) : advancedForm.getFieldsValue();
    onSearch === null || onSearch === void 0 ? void 0 : onSearch(simpleValues, advancedValues, allSearchValues);
  }; // 实时搜索


  var onInternalChange = function onInternalChange(changedValues) {
    var allSearchValues = mergeSearchValues(filterEmpty);
    var simpleValues = filterEmpty ? filterEmptyData(simpleForm.getFieldsValue()) : simpleForm.getFieldsValue();
    var advancedValues = filterEmpty ? filterEmptyData(advancedForm.getFieldsValue()) : advancedForm.getFieldsValue();
    onChange === null || onChange === void 0 ? void 0 : onChange(changedValues, allSearchValues, simpleValues, advancedValues);
  }; // 回车搜索


  var onInternalKeyEnter = function onInternalKeyEnter(e) {
    console.log(e.target.dataset);
    var allSearchValues = mergeSearchValues(filterEmpty);
    var simpleValues = filterEmpty ? filterEmptyData(simpleForm.getFieldsValue()) : simpleForm.getFieldsValue();
    var advancedValues = filterEmpty ? filterEmptyData(advancedForm.getFieldsValue()) : advancedForm.getFieldsValue();
    var currentValues = {};
    var key = Object.keys(simpleValues).filter(function (key) {
      var _e$target, _e$target$dataset;

      return key === ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$dataset = _e$target.dataset) === null || _e$target$dataset === void 0 ? void 0 : _e$target$dataset.name);
    })[0];
    currentValues[key] = simpleValues[key];

    if (e.keyCode === 13) {
      onKeyEnter(currentValues, allSearchValues, simpleValues, advancedValues);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'xdad-advance clearfix'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "xdad-advance-seach",
    onKeyDown: onInternalKeyEnter
  }, /*#__PURE__*/_react.default.createElement(_form.default, {
    layout: "inline",
    form: simpleForm,
    onValuesChange: onInternalChange
  }, searchRender('simple')), showAdvanced && /*#__PURE__*/_react.default.createElement(_button.default, {
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
  }))), isAdvance && showAdvanced && /*#__PURE__*/_react.default.createElement(_form.default, _objectSpread(_objectSpread({
    form: advancedForm
  }, formProps), {}, {
    layout: 'inline',
    className: "xdad-advance-form"
  }), searchRender('advanced'), /*#__PURE__*/_react.default.createElement("span", {
    className: "xdad-advance-form-btns"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onInternalSearch
  }, "\u67E5\u8BE2"), /*#__PURE__*/_react.default.createElement(_button.default, {
    id: "xdad-advanced-reset",
    style: {
      marginLeft: 10
    },
    onClick: function onClick() {
      return advancedForm.resetFields();
    }
  }, "\u91CD\u7F6E"))));
};

var _default = AdvancedSearch;
exports.default = _default;