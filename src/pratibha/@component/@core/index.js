"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.D = exports.Pp = exports.L = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var L = function L(props, display) {
  return _react.default.createElement("a", props, display);
};

exports.L = L;

var Pp = function Pp(props, display) {
  return _react.default.createElement("p", props, display);
};

exports.Pp = Pp;

var D = function D(props, children) {
  var k = 0;
  return _react.default.createElement("div", props, (0, _toConsumableArray2.default)(children));
}; //test


exports.D = D;