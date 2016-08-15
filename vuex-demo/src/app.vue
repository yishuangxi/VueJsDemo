<template>
  <display></display>
  <increment></increment>
</template>

<script>
  import Display from './components/Display.vue'
  import Increment from './components/Increment.vue'
  import store from './vuex/store'

  export default {
    name: 'app',
    components:{
      Display, Increment
    },
    store: store
  };
</script>
