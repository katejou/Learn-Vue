<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false }
      ]
    }
  },
  // 這個是重點！它會隨時隨地在監察！所有轉為computed狀態的元素。
  computed: {
    filteredTodos() {
      //三元運算翻譯︰
      //如果 hideCompleted 為 true，就回傳 todos 的 filter，反正則不 filter
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  // 和上一個練習一樣
  methods: {
    //按新增
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    //按單項刪除
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <!-- 這個表單提交時，(由按鈕引起)，進行addTodo動作 -->
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <!-- 列表 -->
  <ul>
    <!-- filteredTodos 是一個 computed 的方法！-->
    <!-- 它代理了 todo 的陣列回傳，並時刻在調控 -->
    <li v-for="todo in filteredTodos" :key="todo.id">
      <!-- v-model 控制該方法該元素中的 done 值 -->
      <input type="checkbox" v-model="todo.done">
      <!-- v-bind 三元簡化運算式的翻譯︰如 todo.done 為 true 則回 done -->
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <!-- v-on.... -->
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <!-- v-on.... -->
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>