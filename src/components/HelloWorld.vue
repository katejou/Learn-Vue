<!-- 這是顯示文字的第三層 -->
<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h1>{{ msg.split('').reverse().join('') }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>這是顯示文字的第三層 <code>/這/是跳脫「被讀取」為code可能的文字/</code> 這是顯示文字的第三層</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String //這是第二層傳入的參數，會帶到上方的msg
  },
  data() {
    return {
      count: 0  //這是Local的參數
    }
  }
}
</script>
