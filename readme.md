
extended options:

perPageEditable: true/false //true by default, whether show "perPage" on top right
fetchDataOnCreated: true/false //true by default, whether fetching data in "create" function; if false, "refresh()" should be called manually
queryMap: object //define map of default query where it is server pagination, e.g. 
  queryMap: {
    limit: 'size'
  }
