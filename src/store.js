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
  getters: {
    visibleMachines: state => state.machines.filter( machine => machine.isVisible )
  },
  mutations: {
    makeBagel(state){
      state.bagel.produced += 1;
    },

    buyMachine(state, id){
      state.machines = state.machines.map( machine => { if (machine.id === id ) machine.owned++; return machine });
      state.bagel.produced -= state.machines.filter( machine => machine.id === id ).map( machine => machine.owned*machine.cost*(1+0.1)^machine.owned )
    },

    updateBagelProduction(state){
      var multiplier = state.upgrades.productionBonus.generates;
      state.bagel.production = state.machines.reduce( (sum, machine)  => { console.log(sum, machine); return sum += machine.owned*machine.generates*(1+multiplier)^(machine.owned)},0)
    }
  },
  actions: {
    makeBagel({ commit }){
      commit('makeBagel');
    },

    async buyMachine({ commit }, machine){
        commit('buyMachine', machine )
        await commit('updateBagelProduction');
    }


  }
})
