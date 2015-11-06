import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addTodo(title) {
      this.store.createRecord('todo', {title}).save();
    },
    deleteTodo(todo) {
      todo.destroyRecord()
    },
    saveTodo(todo) {
      todo.save()
    }
  }
});
