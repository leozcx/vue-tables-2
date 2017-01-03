module.exports = function(h, that) {

 var sortControl = require('./sort-control.jsx')(h, that);

 var headings = [];
 that.allColumns.map(function(column) {
   let heading = that.getHeading(column)
  headings.push(<th on-click={that.orderByColumn.bind(that,column)}
    class={that.sortableClass(column) + ' ' + heading.className ? heading.className : ''}>
    <span class="VueTables__heading">{heading.name}</span>
    {sortControl(column)}
    </th>)
}.bind(that))

 return headings;
}
