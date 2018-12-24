"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateArrayBuffer = void 0;

var validateArrayBuffer = function validateArrayBuffer(buffer) {
  return buffer.constructor === ArrayBuffer;
};

exports.validateArrayBuffer = validateArrayBuffer;