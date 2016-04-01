<template>
  <div id="TodoApp">
      <todo-header></todo-header>
      <todo-list></todo-list>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

export default {
  components: {
    TodoHeader,
    TodoList
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
