import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import Page from "../models/page";

const {
  set
} = Ember;

export default Ember.Route.extend({
  model() {
    return this.store.queryRecord('page', 1);
  },
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    // initialize page if localStorage empty
    if( !model ) {
      let page = this.store.createRecord('page', {id: 1})

      set(controller, 'model', page);
    }
  }
});
