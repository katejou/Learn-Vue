<script>
export default {
  // declare emitted events 在 response event時，我有回傳
  emits: ['response'],
  created() {
    // emit with argument 我會回傳時帶上這個句子
    this.$emit('response', 'hello Daddy')
  }
}
</script>

<template>
  <h2>Child component</h2>
</template>