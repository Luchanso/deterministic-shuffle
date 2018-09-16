'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badRandom = require('./lib/bad-random');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DAY = 3600 * 24 * 1000;

var shuffle = function shuffle(array, startDate) {
  var startDay = startDate.getTime() / DAY;
  var currentDay = Date.now() / DAY;
  var seed = Math.floor((currentDay - startDate) / array.length);

  var result = [].concat(_toConsumableArray(array));
  for (var i = array.length - 1; i > 0; i--, seed++) {
    var n = Math.round((0, _badRandom.badRandom)(seed) * i);
    var temp = result[i];
    result[i] = result[n];
    result[n] = temp;
  }

  return result;
};

exports.default = shuffle;