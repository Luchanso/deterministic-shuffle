"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var badRandom = exports.badRandom = function badRandom() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

exports.default = {
  badRandom: badRandom
};