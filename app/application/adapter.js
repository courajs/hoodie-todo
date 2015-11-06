// export { default } from 'ember-local-storage/adapters/adapter';

console.log('funky')

import DS from 'ember-data';
import Store from 'npm:pouchdb-hoodie-store';
import randomString from 'npm:random-string';
import humbleLocalStorage from 'npm:humble-localstorage';

var storeId = humbleLocalStorage.getItem('storeId')
if (!storeId) {
  storeId = 'store-' + randomString({length: 7}).toLowerCase()
  humbleLocalStorage.setItem('storeId', storeId)
}


var store = window.store = new Store(storeId, {
  remote: '/api'
})

export default DS.Adapter.extend({
    findRecord() {
      return Promise.reject('funky')
    },
    createRecord() {
      return Promise.reject('funky')
    },
    updateRecord() {
      return Promise.reject('funky')
    },
    deleteRecord() {
      return Promise.reject('funky')
    },
    findAll() {
      return store.findAll().then(toJsonApi)
    },
    query() {
      return Promise.reject('funky')
    }
});

function toJsonApi(data) {
  if (!Array.isArray(data)) {
    return toJsonApiRecord(data)
  }

  return {
    data: data.map(toJsonApiRecord)
  }
}

function toJsonApiRecord(record) {
  return {
    id: record.id,
    type: record.type,
    attributes: {
      title: record.title
    }
  }
}

function toHoodieData(data) {

}
