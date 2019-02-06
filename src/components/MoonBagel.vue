<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Bagel />
    <Machines />
  </div>
</template>

<script>
import Bagel from './Bagel.vue'
import Machines from './Machines.vue'

export default {
  name: 'MoonBagel',
  props: {
      msg: String
    },
  components: {
    Bagel,
    Machines
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
