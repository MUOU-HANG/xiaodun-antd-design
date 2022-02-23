"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _ResizableTitle = _interopRequireDefault(require("./ResizableTitle"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale/zh_CN"));

var _excluded = ["dataSource", "columns", "total", "pagination"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TdResizableTable = function TdResizableTable(_ref) {
  var _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total,
      pagination = _ref.pagination,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(columns),
      _useState2 = _slicedToArray(_useState, 2),
      columnsInner = _useState2[0],
      setColumnsInner = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationInner = _useState4[0],
      setPaginationInner = _useState4[1];

  var defaultPagination = {
    total: total,
    showTotal: function showTotal(total, range) {
      return "\u7B2C".concat(range[0], "-").concat(range[1], "\u9875/\u5171").concat(total, "\u6761");
    }
  };
  (0, _react.useEffect)(function () {
    setPaginationInner(_objectSpread(_objectSpread({}, defaultPagination), pagination));
  }, [pagination]); // 更改列宽

  var handleResize = function handleResize(index) {
    return function (_, _ref2) {
      var size = _ref2.size;
      setColumnsInner(function (columnsInner) {
        var nextColumns = _toConsumableArray(columnsInner);

        nextColumns[index] = _objectSpread(_objectSpread({}, nextColumns[index]), {}, {
          width: size.width
        });
        return nextColumns;
      });
    };
  }; // 重写columns,使得实时更新列宽


  var _columns = columnsInner.map(function (col, index) {
    return _objectSpread(_objectSpread({}, col), {}, {
      onHeaderCell: function onHeaderCell(column) {
        return {
          width: column.width,
          onResize: handleResize(index)
        };
      }
    });
  });

  return /*#__PURE__*/_react.default.createElement(_configProvider.default, {
    locale: _zh_CN.default
  }, /*#__PURE__*/_react.default.createElement(_table.default, _objectSpread(_objectSpread({
    style: {
      margin: 10,
      padding: 10
    }
  }, rest), {}, {
    columns: _columns,
    dataSource: dataSource,
    pagination: paginationInner,
    components: {
      header: {
        cell: _ResizableTitle.default
      }
    }
  })));
};

var _default = TdResizableTable;
exports.default = _default;