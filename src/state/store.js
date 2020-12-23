import Vue from 'vue'
import Vuex from 'vuex'

import CustomerAPI from '../../src/js/customer'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    customers: []
  },
  getters: {
    getCustomers: state => {
      CustomerAPI.get().then(response => {
        state.customers = response
      })
    }
  },
  mutuations: {
    addCustomer: (state, payload) => {
      state.customers.push(payload)
    }
  }
})
