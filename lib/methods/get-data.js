var merge = require('merge');

module.exports = function(promiseOnly) {

  this.options.queryMap = this.options.queryMap || {}
  this.options.queryMap.query = this.options.queryMap.query || 'query'
  this.options.queryMap.limit = this.options.queryMap.limit || 'limit'
  this.options.queryMap.orderBy = this.options.queryMap.orderBy || 'orderBy'
  this.options.queryMap.ascending = this.options.queryMap.ascending || 'ascending'
  this.options.queryMap.page = this.options.queryMap.page || 'page'
  this.options.queryMap.byColumn = this.options.queryMap.byColumn || 'byColumn'
  
  var data =  {};
  
  data[this.options.queryMap.query] = this.query
  data[this.options.queryMap.limit] = this.limit
  data[this.options.queryMap.orderBy] = this.orderBy.column
  data[this.options.queryMap.ascending] = this.orderBy.ascending?1:0
  data[this.options.queryMap.page] = this.page
  data[this.options.queryMap.byColumn] = this.opts.filterByColumn?1:0

  data = merge(data, this.opts.params, this.customQueries);

  this.dispatch('loading', data);

  var promise = this.$http.get(this.url, {params:data}).then(function(data) {
    return data.json();
  }.bind(this),  function(e) {
    this.dispatch('error', e);
  }.bind(this));

  if (promiseOnly) return promise;

  return promise.then(function(data) {
    return this.setData(data);
  });


}
