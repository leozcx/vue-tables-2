module.exports = function(column) {
  return this.query && this.query.hasOwnProperty(column) &&
        this.opts.listColumns.hasOwnProperty(column);
}
