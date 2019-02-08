<template lang="html">
  <button :disabled=disabled id={this.machine.id} key={this.machine.id} @click="buyMachine(machine.id)" class="machine">

      <img width="10%" :src=image :alt=name />
      <span class="name">{{ name }}</span> |
      <span class="price">{{ Math.floor(this.machine.cost,2) }}</span> |
      <span class="produces">{{ Math.floor(this.machine.generates,2) }}</span> |
      <span class="owned">#{{ this.machine.owned }}</span>
  </button>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Machine',
  props: ['machine'],
  computed: {
    image() { return this.machine.src },
    name() { return this.machine.isReadable?this.machine.name:"?????????" },
    disabled() {return this.bagel.produced<this.machine.cost },
    ...mapState(['bagel'])
  },
  methods:{
    buyMachine(id){
      this.$store.dispatch('buyMachine', id)
    }
  },

}
</script>

<style lang="css">
  .machine {border: 1px solid blue}
</style>
