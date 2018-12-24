"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Div = exports.P = exports.Link = void 0;

var _index = require("./../@component/@core/index");

var Link = function Link(props, display) {
  return function decorator(target) {
    var _this = this;

    target.Link = function (props, display) {
      return _index.L.call(_this, props, display);
    };
  };
};

exports.Link = Link;

var P = function P(props, display) {
  return function decorator(target) {
    var _this2 = this;

    target.P = function (props, display) {
      return _index.Pp.call(_this2, props, display);
    };
  };
};

exports.P = P;

var Div = function Div(props, children) {
  return function decorator(target) {
    var _this3 = this;

    target.Div = function (props, children) {
      return _index.D.call(_this3, props, children);
    };
  };
};

exports.Div = Div;