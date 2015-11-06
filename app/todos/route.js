import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addTodo(title) {
      this.store.createRecord('todo', {title}).save();
    }
  }
});
