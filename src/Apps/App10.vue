<!-- App更像是Compent的組合之地，再輸出給main.js -->

<script>
import ChildComp from '../components/ChildComp.vue'// 會引用它

export default {
  components: {
    ChildComp //會輸出它
  }
}
</script>

<template>
    <!-- 會顯示(使用)它 -->
    <ChildComp />
</template>