'use strict';

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {
  if (self.options.cache === false || self.$store.state === undefined || self.$store.state[self.name] === undefined) {

    self.$store.registerModule(self.name, {
      state: (0, _state2.default)(self),
      mutations: (0, _mutations2.default)(self)
    });
  } else {
    // TODO see if there is any better way
    // all info in store should be reset, now we only find page, there might be more
    self.$store.state[self.name] = Object.assign({}, self.$store.state[self.name], { page: 1 });
  }
};