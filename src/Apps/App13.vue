<script>
import ChildComp4 from '../components/ChildComp4.vue'

export default {
  components: {
    ChildComp4
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
  <ChildComp4>To children : {{ msg }}</ChildComp4>
  <!-- 用兒子的slot，接得到父的msg -->
</template>