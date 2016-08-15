<template>
  <display></display>
  <increment></increment>
  <decrement></decrement>
</template>

<script>
  import Display from './components/Display.vue'
  import Increment from './components/Increment.vue'
  import Decrement from './components/Decrement.vue'
  import store from './vuex/store'

  export default {
    name: 'app',
    components:{
      Display, Increment, Decrement
    },
    store: store
  };
</script>
