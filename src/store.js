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
      state.machines[id].owned++ = state.machines.map( machine => { if (machine.id === id ) machine.owned++; return machine });
      state.bagel.produced -= state.machines.filter( machine => machine.id === id ).map( machine => machine.cost)
      state.machines = state.machines.map( machine => { if (machine.id === id ){ machine.cost *= 1.1, machine.isReadable = true}; return machine; })
    },

    updateBagelProduction(state){
      var multiplier = state.upgrades.productionBonus.generates;
      state.bagel.production = state.machines.reduce( (sum, machine)  => { return sum += machine.owned*machine.generates*(1+multiplier)^(machine.owned)},0)
    },
    makeVisible( state, id ){
      state.machines[id].
    },
    produceBagels(state){
      state.bagel.produced += state.bagel.production;
    }
  },
  actions: {
    makeBagel({ commit }){
      commit('makeBagel');
    },

    async buyMachine({ commit }, machine){
        commit('buyMachine', machine )
        await commit('updateBagelProduction');
    },

    produceBagels( {commit} ){
      console.log( "Producing Bagels");
      commit('produceBagels');
    }


  }
})
