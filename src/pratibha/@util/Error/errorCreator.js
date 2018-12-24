"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorCreator = void 0;

var errorCreator = function errorCreator(error) {
  return new Error(error);
};

exports.errorCreator = errorCreator;