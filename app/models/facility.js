import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  website: DS.attr('string'),
  phone: DS.attr('string'),
  intake: DS.attr('string'),
  hotline: DS.attr('string'),
  address: DS.attr('string'),
  services: DS.attr('string'),
});