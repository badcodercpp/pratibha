"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToArrayBuffer = void 0;

var base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }

  return bytes.buffer;
};

exports.base64ToArrayBuffer = base64ToArrayBuffer;