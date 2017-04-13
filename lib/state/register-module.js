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
   }
 }
 
