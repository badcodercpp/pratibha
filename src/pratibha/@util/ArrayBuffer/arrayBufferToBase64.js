"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayBufferToBase64 = void 0;

var arrayBufferToBase64 = function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;

  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
};

exports.arrayBufferToBase64 = arrayBufferToBase64;