"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadableMap = exports.WritableMap = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _isArray = require("./../@util/Array/isArray");

var _arrayBufferToBase = require("./../@util/ArrayBuffer/arrayBufferToBase64");

var _base64ToArrayBuffer = require("./../@util/ArrayBuffer/base64ToArrayBuffer");

var _validateArrayBuffer = require("./../@util/ArrayBuffer/validateArrayBuffer");

var _errorCreator = require("./../@util/Error/errorCreator");

var WritableMap = function WritableMap(iterable) {
  var _this = this;

  (0, _classCallCheck2.default)(this, WritableMap);
  (0, _defineProperty2.default)(this, "create", function () {
    var o = _this._iterable;
    var j = JSON.stringify(o);
    var b = (0, _base64ToArrayBuffer.base64ToArrayBuffer)(btoa(j));
    return b;
  });

  if (!(0, _isArray.isArray)(iterable)) {
    throw (0, _errorCreator.errorCreator)("WritableMap can only be created from an iterable");
  }

  this._iterable = iterable;
};

exports.WritableMap = WritableMap;

var ReadableMap = function ReadableMap(writableMap) {
  var _this2 = this;

  (0, _classCallCheck2.default)(this, ReadableMap);
  (0, _defineProperty2.default)(this, "read", function () {
    var o = (0, _arrayBufferToBase.arrayBufferToBase64)(_this2._writableMap);
    var j = atob(o);
    var b = JSON.parse(j);
    return b;
  });

  if (!(0, _validateArrayBuffer.validateArrayBuffer)(writableMap)) {
    throw (0, _errorCreator.errorCreator)("ReadableMap can only be created from WritableMap");
  }

  this._writableMap = writableMap;
};

exports.ReadableMap = ReadableMap;