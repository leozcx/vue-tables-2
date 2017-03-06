'use strict';

module.exports = function (h, that) {

  var sortControl = require('./sort-control')(h, that);

  var headings = [];
  that.allColumns.map(function (column) {
    var heading = that.getHeading(column);
    headings.push(h(
      'th',
      {
        on: {
          'click': that.orderByColumn.bind(that, column)
        },

        'class': that.sortableClass(column) + ' ' + heading.className ? heading.className : '' },
      [h(
        'span',
        { 'class': 'VueTables__heading' },
        [that.getHeading(column, h)]
      ), sortControl(column)]
    ));
  }.bind(that));

  return headings;
};