<template lang="html">
  <div class="machines">
    <h1>Machines</h1>
    <Machine v-for="machine in visibleMachines" :key="machine.id" v-bind:machine="machine" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Machine from './Machine.vue'

export default {
  name:'Machines',
  components:{
      Machine
  },
  computed: {
    ...mapGetters(['visibleMachines'])
  }
}
</script>

<style lang="css">
  .machines { float: right; width: 30%; height: 400px; border: 1px solid red}
</style>
