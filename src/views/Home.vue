<template>
  <div class="home">
    <MoonBagel msg="Lets Make Bagels"/>
    Hello... 
  </div>
</template>

<script>
// @ is an alias to /src
import MoonBagel from '@/components/MoonBagel.vue'

export default {
  name: 'Home',
  components: {
    MoonBagel
  }
}
</script>
