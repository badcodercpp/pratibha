"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTestable;

function isTestable(value) {
  return function decorator(target) {
    target.isTestable = value;
  };
}