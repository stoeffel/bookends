var _ = require('lodash');

module.exports = {
  hydration: function(spec) {
    return spec.aggregation.params;
  },

  aggregate: function(records, spec) {
    return _.pluck(records, spec.aggregation.params[0]);
  }
};
