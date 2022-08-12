<!--
Here we show the simplest possible component which accepts a prop and renders it.
Learn more about components in the guide!
-->

<script>
import TodoItem from './App20.vue'

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>

<template>
  <ol>
    <!--
      App20 接收 todo 的物件為 object ，想像成每一個 TodoItem 的生成，都是由 v-for 滾出來的。
      而且每一個 TodoItem 最好都有個獨立的key，以方便將來有更多的操作。
    -->
    <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
  </ol>
</template>