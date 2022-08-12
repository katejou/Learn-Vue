<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        // 多了 done 這個屬性
        { id: id++, text: 'Learn HTML', done: true }, 
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false }
      ]
    }
  },
  computed: {
    // ...
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <!-- v-model="todo.done" 的 checkbox 會打勾 -->
      <input type="checkbox" v-model="todo.done">
      <!-- 如果class='done'的話，會畫線 -->
      <!-- done: todo.done，這個是三元的運算式。如果todo.done為true則回 done 的文字，為 false 則不回 -->
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <!-- 隱藏和顯示，如果按下去，則顛倒是非-->
  <!-- 所以v-on這個方法，不止是綁方法的名稱，還能直接寫要做什麼 -->
  <button @click="hideCompleted = !hideCompleted">
  <!-- 三元運算式的完全版 -->
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>