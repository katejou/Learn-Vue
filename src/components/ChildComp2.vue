<script>
export default {
  // 我以 String 的格式，接收給我的 msg 的參數
  props: {
    msg: String
  }
}
</script>

<template>
  <!-- XOR 的使用，是當前者為true，後者就不用做了，所以msg非null即為true -->
  <h2>{{ msg || 'No props passed yet' }}</h2>
  <!-- 開發這個例子和Vue的人，真的好會用簡化的程式… -->
</template>