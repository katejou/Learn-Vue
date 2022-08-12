<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <!-- <button v-on:click="increment">{{ count }}</button> -->
  <!-- 下方是v-on的簡寫@，是指這個屬性的文字，是從上面method來的 -->
  <button @click="increment">count is: {{ count }}</button>
</template>