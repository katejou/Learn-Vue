<script>
export default {
  data() {
    return {
      todoId: 1,
      todoData: null
    }
  },
  methods: {
    // 這是一個不同步方法，所以我會等到有結果為止
    async fetchData() {
      // 清空Data  
      this.todoData = null
      // 去抓資料
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      )
      // 抓回來的資料物件，以 json 格式化，再給予 todoData
      this.todoData = await res.json()
    }
  },
  // 以生命週期來說，這個是 Render 之前的
  mounted() {
    this.fetchData() //進行這個method
  },
  // 這個是所有 postback 之後，重新 render 之前
  watch: {
    todoId(newCount) { // todoId變成一個方法？它不是Data嗎？
      // 這是指每次todoId這個Data改變的時候︰
      this.fetchData()// <--都要做這個　side effect ? 
      console.log(`new count is: ${newCount}`) // newCount 在()中，是可加可不加。
      // 加了，就可以取新值出來，作個log什麼的…
    }
  }
}
</script>

<template>
<!-- 綁定todoId這個變數 -->
  <p>Todo id: {{ todoId }}</p>
  <!-- 每次按下的時候，todoId這個變數+1 -->
  <button @click="todoId++">Fetch next todo</button>
  <!-- 這個是在內容和Loading之間的切換！ (null = false) 在 side effect的時候，它會 null 一陣子-->
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>