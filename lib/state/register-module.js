 import state from './state'
 import mutations from './mutations'

 module.exports = function(self) {
   if (self.options.cache === false ||
		self.$store.state === undefined || 
		self.$store.state[self.name] === undefined) {
	 
      self.$store.registerModule(self.name,{
       state:state(self),
       mutations: mutations(self)
     });
   } else {
     // TODO see if there is any better way
     // all info in store should be reset, now we only find page, there might be more
    self.$store.state[self.name] = Object.assign({}, self.$store.state[self.name], {page: 1})
  }
 }
 
