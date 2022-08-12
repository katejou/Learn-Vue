<script>
import ChildComp from '../components/ChildComp4.vue'

export default {
  components: {
    ChildComp
  },
  data() {
    return {
      msg: 'from parent'
    }
  }
}
</script>

<template>
 <!-- 不是以props傳值，而是用slot來接 -->
  <ChildComp>To children : {{ msg }}</ChildComp>
  <!-- 用兒子的slot，接得到父的msg -->
</template>