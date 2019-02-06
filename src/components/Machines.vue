<template lang="html">
  <div class="machines">
    <h1>Machines</h1>
    <Machine v-for="machine in machines" :key="machine.id" v-bind:machine="machine" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Machine from './Machine.vue'

export default {
  name:'Machines',
  components:{
      Machine
  },
  computed: mapState(['machines'])
}
</script>

<style lang="css">
  .machines { float: right; width: 30%; height: 400px; border: 1px solid red}
</style>
