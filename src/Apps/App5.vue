<script>
export default {
  data() {
    return {
      awesome: true
    }
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome
    }
  }
}
</script>

<template>
  <button @click="toggle">顛倒黑白</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<!-- awesome 是一個 bool值 -->
<!-- 在 v-if 的判斷下，它會顯示，或不顯示這個Component -->
<!-- 還可以有 v-else-if ? 要怎麼增加 & 和 | 的判斷呢？ -->