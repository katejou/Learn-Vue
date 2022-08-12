
<!-- 練習2，在同層綁css style -->

<!-- 第一步設定style -->
<style>
.title {
  color: red;
}
</style>

<!-- 第二步，我同層傳值中，設定 titleClass = title 這個單字-->
<script>
export default {
  data() {
    return {
      titleClass: 'title'
    }
  }
}
</script>

<template>
  <!-- <h1 v-bind:class="titleClass">Make me red</h1> -->
  <!-- 下方是 v-bind 的簡寫，基本上，可以當成「以下的屬性內容」由data來對應 -->
  <h1 :class="titleClass">Make me red</h1>
</template>

