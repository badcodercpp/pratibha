"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;

var isArray = function isArray(array) {
  return !(array[Symbol.iterator] === undefined);
};

exports.isArray = isArray;