<template>
  
  <div id="app">
    <current-time class="col-4"/>
    <task-input class="col-6"/>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>

import CurrentTime from './components/CurrentTime.vue'
import TaskInput from './components/TaskInput.vue'

export default {
  name: 'app',
  components: {
    CurrentTime,
    TaskInput
  }
}
</script>
    TaskInput