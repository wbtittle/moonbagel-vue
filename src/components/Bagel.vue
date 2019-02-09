<template lang="html">
  <div class='bagel'>
    <button @click="makeBagel">  <img :src=image width="60px" /></button>
    <h1>Produced:  {{ Math.floor(bagel.produced) }}</h1>
    <h1>Production: {{ Math.floor(bagel.production) }}</h1>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Bagel',
  timers:{
    produceBagels: { time: 1000, autostart: true, repeat: true }
  },
  computed: {
    image(){ return this.bagel.icon },
    ...mapState(['bagel'])
  },
  methods: {
    ...mapActions(['makeBagel', 'produceBagels'])
  }

}
</script>

<style lang="css">

</style>
