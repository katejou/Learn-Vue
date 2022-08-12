<!-- App更像是Compent的組合之地，再輸出給main.js -->

<!-- 這是(預設)顯示圖片的第二層 -->
<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="我是由二傳入第三層的文字！" />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

