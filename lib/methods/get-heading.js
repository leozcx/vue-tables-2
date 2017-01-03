import ucfirst from '../helpers/ucfirst'

module.exports = function(value) {
  let heading = this.opts.headings[value] || {}
  heading = typeof heading === 'string' ? {name: heading} : heading
  heading.name = heading.name || ucfirst(value.split("_").join(" "))
  return heading
  }
