import Vue from 'vue'
import Vuex from 'vuex'
import machines from './data/machines';
import bagel from './data/bagel';
import stocks from './data/stocks';
import upgrades from './data/upgrades';
import achievements from './data/achievements';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    machines,
    bagel,
    stocks,
    upgrades,
    achievements

  },
  mutations: {

  },
  actions: {

  }
})
