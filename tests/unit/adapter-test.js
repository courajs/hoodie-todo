import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Hoodie Adapter', {
  needs: ['model:todo', 'serializer:application'],
  beforeEach(){
    this.adapter = this.container.lookup('adapter:application');
    this.store = this.container.lookup('service:store');

    return hoodieStore.removeAll();
  }
});

test("It creates a record in the pouchdb store", function(assert){
  return Ember.run(() => {
    return this.store.createRecord('todo', {title:'test todo'}).save()

    .then(function(){
      return hoodieStore.findAll()
    })

    .then(function(all){
      assert.equal(all.length, 1)
    })
  });

});
