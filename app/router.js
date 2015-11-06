import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', function(){
    this.route('show', {path: ':todo_id'});
  });
});

export default Router;
