<script>
// give each todo a unique id
let id = 0

export default {
  data() {
    return {
      newTodo: '',//以 v-model 改值
      todos: [ //以 method 改值
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = '' //newTodo是輸入的文字
    },
    removeTodo(todo) {
      //改變這個 ary 
      //使它「沒有了」按下並傳入的該 todo
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <!-- 這一章的主題，是這個 v-for -->
    <!-- Vue 的方法，都和屬性好像，甚至混為一體 -->
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>