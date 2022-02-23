"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["columns", "dataSource", "firstRun", "url", "queryParams", "format", "pagination", "onPageChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BasicTable = function BasicTable(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? null : _ref$dataSource,
      _ref$firstRun = _ref.firstRun,
      firstRun = _ref$firstRun === void 0 ? true : _ref$firstRun,
      url = _ref.url,
      _ref$queryParams = _ref.queryParams,
      queryParams = _ref$queryParams === void 0 ? {} : _ref$queryParams,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? false : _ref$format,
      pagination = _ref.pagination,
      onPageChange = _ref.onPageChange,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      total = _useState2[0],
      setTotal = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1]; // 当前页


  var _useState5 = (0, _react.useState)(10),
      _useState6 = _slicedToArray(_useState5, 2),
      pageSize = _useState6[0],
      setPageSize = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      dataSourceInner = _useState8[0],
      setDataSourceInner = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var getTaleData = function getTaleData() {
    // 如果url或queryParams.url不为空，则请求数据为内部请求
    var _queryParams$params = queryParams.params,
        params = _queryParams$params === void 0 ? {} : _queryParams$params,
        _queryParams$headers = queryParams.headers,
        headers = _queryParams$headers === void 0 ? {} : _queryParams$headers,
        _queryParams$method = queryParams.method,
        method = _queryParams$method === void 0 ? 'GET' : _queryParams$method,
        queryURL = queryParams.url;
    var init = {
      method: method,
      headers: headers,
      body: JSON.stringify(params)
    };
    var ISPOST = method.toUpperCase() === 'POST';
    (url || queryURL) && fetch(url || queryURL || '', ISPOST ? init : undefined).then( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
        var resData, _format, _resData$format, _resData$data, _resData$data2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.clone().json();

              case 2:
                resData = _context.sent;

                if (format && typeof format === 'function') {
                  setDataSourceInner(format().list || []);
                  setTotal((_format = format()) === null || _format === void 0 ? void 0 : _format.total);
                }

                if (format && typeof format === 'string') {
                  setDataSourceInner(resData[format].list || []);
                  setTotal((_resData$format = resData[format]) === null || _resData$format === void 0 ? void 0 : _resData$format.total);
                }

                if (!format) {
                  setDataSourceInner((resData === null || resData === void 0 ? void 0 : (_resData$data = resData.data) === null || _resData$data === void 0 ? void 0 : _resData$data.list) || []);
                  setTotal(resData === null || resData === void 0 ? void 0 : (_resData$data2 = resData.data) === null || _resData$data2 === void 0 ? void 0 : _resData$data2.total);
                }

                setLoading(false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  (0, _react.useEffect)(function () {
    firstRun && getTaleData();
  }, [current, pageSize]);

  var onInternalPageChange = function onInternalPageChange(_ref3) {
    var values = _extends({}, _ref3);

    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(values);
    console.log(values);
  };

  return /*#__PURE__*/_react.default.createElement(_table.default, _objectSpread(_objectSpread({}, rest), {}, {
    loading: loading,
    columns: columns,
    pagination: pagination || {
      total: total,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: pageSize,
      onChange: function onChange(current, pageSize) {
        setCurrent(current);
        setPageSize(pageSize);

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        onInternalPageChange({
          current: current,
          pageSize: pageSize,
          rest: rest
        });
      }
    },
    dataSource: dataSource !== null && dataSource !== void 0 ? dataSource : dataSourceInner
  }));
};

var _default = /*#__PURE__*/(0, _react.memo)(BasicTable);

exports.default = _default;