import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePage() {
      let model = this.get('model');
      model.save()
    }
  }
});
