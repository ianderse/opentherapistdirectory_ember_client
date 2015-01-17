import Ember from 'ember';

export default Ember.ObjectController.extend({
  firstFacilities: function() {
    return this.get('content').slice(0,49);
  }.property('content.@each').cacheable()
});