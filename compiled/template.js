'use strict';

module.exports = function (source, that) {
  return function (h) {

    var rows = require('./template/rows')(h, this);
    var normalFilter = require('./template/normal-filter')(h, this);
    var dropdownPagination = require('./template/dropdown-pagination')(h, this);
    var columnFilters = require('./template/column-filters')(h, this);
    var footerHeadings = require('./template/footer-headings')(h, this);
    var noResults = require('./template/no-results')(h, this);
    var pagination = require('./template/pagination')(h, this);
    var dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this);
    var headings = require('./template/headings')(h, this);
    var perPage = require('./template/per-page')(h, this);
    var perPageHolder = h(
      'span',
      null,
      []
    );
    if (this.options.perPageEditable === undefined || this.options.perPageEditable === true) perPageHolder = h(
      'div',
      { 'class': 'col-md-6' },
      [dropdownPagination, perPage]
    );

    return h(
      'div',
      { 'class': "VueTables VueTables--" + this.source },
      [h(
        'div',
        { 'class': 'row' },
        [h(
          'div',
          { 'class': 'col-md-6' },
          [normalFilter]
        ), perPageHolder]
      ), h(
        'table',
        { 'class': 'VueTables__table table ' + this.opts.skin },
        [h(
          'thead',
          null,
          [h(
            'tr',
            null,
            [headings]
          ), columnFilters]
        ), footerHeadings, h(
          'tbody',
          null,
          [noResults, rows]
        )]
      ), pagination, dropdownPaginationCount]
    );
  };
};