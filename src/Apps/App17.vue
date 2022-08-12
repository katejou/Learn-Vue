<!--
We can render content conditionally or in a loop with the v-if and v-for directives.
-->

<script>
export default {
  data() {
    return {
      show: true, // show 的參數，決定了它要不要滾出來。
      list: [1, 2, 3]
    }
  }
}
</script>

<template>
  <button @click="show = !show">Toggle List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

<!-- list.length 是 0 的話，也等如 false -->
  <ul v-if="show && list.length">
    <li v-for="item of list">
        {{ item }}
    </li>
  </ul>
  <!-- 這個 if else if 的組合，在 show 為 false，List不為空時，這樣顯示 -->
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>