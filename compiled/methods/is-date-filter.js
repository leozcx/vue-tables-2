"use strict";

module.exports = function (column) {
  return this.query && this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) > -1;
};