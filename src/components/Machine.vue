<template lang="html">
  <button :disabled=disabled id={this.props.id} key={this.props.id} @click="clickMachine" class="machine">
      <img :src=image :alt=name />
      <span class="name">{{ name }}</span>
      <span class="price">{{ Math.floor(this.props.cost,2) }}</span>
      <span class="produces">{{ Math.floor(this.props.generates,2) }}</span>
      <span class="owned">#{{ this.props.owned }}</span>
  </button>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'Machine',
  computed: {
    image() { return this.props.src },
    name() { return this.props.isReadable?this.props.name:"?????????" },
    disabled() {return this.bagel.produced<this.props.cost }
  },
  methods:{
    clickMachine(){ }
  },
  ...mapState(['bagel'])
}
</script>

<style lang="css">
  .machine {border: 1px solid blue}
</style>
