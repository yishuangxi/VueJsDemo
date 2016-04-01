<template>
  <div id='todo-list'>
  <div>{{msg}}</div>
    <todo-item></todo-item>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  components: {
    TodoItem
  }
}
</script>
