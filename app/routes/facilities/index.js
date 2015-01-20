import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var currentData = this.store.all('facility');
    this.store.find('facility');

    return currentData;
  }
});