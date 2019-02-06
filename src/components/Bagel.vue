<template lang="html">
  <div class='bagel'>
    <button @click="makeBagel">  <img :src=image width="60px" /></button>
    <h1>Produced:  {{ Math.floor(bagel.produced) }}</h1>
    <h1>Production: {{ Math.floor(bagel.production) }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Bagel',
  data: function() {
    return {
      bagel: { icon: "/img/bagel-garlic.png", produced: 0, production:0 }
    }
  },
  computed: {
    image(){ return this.bagel.icon }
  },
  methods:{
    makeBagel: function(){ alert('hello');}
  }
}
</script>

<style lang="css">

</style>
