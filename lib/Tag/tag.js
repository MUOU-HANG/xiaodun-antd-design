"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 自定义标签，用法与antd的Tag标签相同
 * @param color 传入的参数为颜色（必须为十六进制数）
 * @param card 是否在card模式
 * @returns
 */

/* 转换颜色 */
var changeHexToRgba = function changeHexToRgba(str, alpha) {
  var _colorStr$match;

  var REGCOLOR = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  var ISRGBA = REGCOLOR.test(str);

  if (ISRGBA === false) {
    throw Error("\u8F93\u5165\u7684".concat(str, "\u503C\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u768416\u8FDB\u5236\u989C\u8272\u503C"));
  } // 去掉#号


  var colorStr = str.slice(1);
  var len = colorStr.length;

  if (len === 3) {
    var _color = colorStr.split('').map(function (ele) {
      return parseInt("0x".concat(ele.repeat(2)));
    }).join(',');

    return "rgba(".concat(_color, ",").concat(alpha, ")");
  }

  var regMatch = (_colorStr$match = colorStr.match(/[A-z0-9]{2}/g)) !== null && _colorStr$match !== void 0 ? _colorStr$match : [];
  var color = regMatch.map(function (ele) {
    return parseInt("0x".concat(ele));
  });

  if (len === 6) {
    return "rgba(".concat(color.join(','), ",").concat(alpha, ")");
  }

  if (len === 8) {
    var _color$pop;

    var opacityValue = (_color$pop = color.pop()) !== null && _color$pop !== void 0 ? _color$pop : 0;
    var opacity = (opacityValue / 255).toFixed(2);
    return "rgba(".concat(color.slice(0, 3).join(','), ", ").concat(opacity, ")");
  }
};

var Tag = function Tag(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$card = _ref.card,
      card = _ref$card === void 0 ? false : _ref$card,
      _ref$point = _ref.point,
      point = _ref$point === void 0 ? true : _ref$point,
      children = _ref.children,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '默认' : _ref$text;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: card ? 'xdad-tag-card' : 'xdad-tag',
    style: {
      backgroundColor: changeHexToRgba(color, 0.1)
    }
  }, point && /*#__PURE__*/_react.default.createElement("span", {
    className: 'xdad-tag-point',
    style: {
      backgroundColor: changeHexToRgba(color, 1)
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: card ? 'xdad-tag-card-text' : 'xdad-tag-text',
    style: {
      color: "".concat(color)
    }
  }, children !== null && children !== void 0 ? children : text));
};

var _default = Tag;
exports.default = _default;