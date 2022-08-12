<script>
import ChildComp2 from '../components/ChildComp2.vue'

export default {
  components: {
    ChildComp2
  },
  data() {
    return {
      greeting: 'Hello from parent'
    }
  }
}
</script>

<template>
  <!-- 傳達Data中的greeting參數，作為給兒子的msg -->
  <ChildComp2 :msg="greeting" />
</template>