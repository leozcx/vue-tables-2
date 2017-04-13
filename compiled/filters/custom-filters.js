"use strict";

module.exports = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var customFilters = arguments[1];
  var customQueries = arguments[2];


  var passing;

  return data.filter(function (row) {

    passing = true;

    customFilters.forEach(function (filter) {
      var value = customQueries[filter.name];
      if (value && !filter.callback(row, value)) passing = false;
    });

    return passing;
  });
};