import Ember from 'ember';

export default Ember.ObjectController.extend({
  firstFacilities: function() {
    return this.get('content').slice(0,19);
  }.property('content.@each')
});