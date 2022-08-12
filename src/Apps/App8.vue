<script>
export default {
  mounted() {
    this.$refs.pm.textContent = 'mounted!'
    // 改變參考 pm 的元素 其中的 textContent
  }
}
</script>

<template>
  <p ref="pm">hello</p>
</template>