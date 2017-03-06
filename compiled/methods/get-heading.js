'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ucfirst = require('../helpers/ucfirst');

var _ucfirst2 = _interopRequireDefault(_ucfirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (value, h) {

  if (typeof value !== 'string') return '';

  var derivedHeading = (0, _ucfirst2.default)(value.split("_").join(" "));

  if (!this.opts.headings.hasOwnProperty(value)) return derivedHeading;

  if (typeof this.opts.headings[value] === 'function') {
    if (h) return this.opts.headings[value](h);

    return derivedHeading;
  }

  if (_typeof(this.opts.headings[value]) === 'object') {
    return this.opts.headings[value].name || '';
  }
  return this.opts.headings[value];
};