<script>
import ChildComp3 from '../components/ChildComp3.vue'

export default {
  components: {
    ChildComp3
  },
  data() {
    return {
      childMsg: 'No child msg yet'
    }
  }
}
</script>

<template>
<!-- v-on response (response是固定的動作(event)名稱嗎，如click？對！) -->
<!-- 
      (msg) => childMsg = msg 的意思是︰
        取兒子的emit出來的值，作為msg
        msg給值childMsg，
        但如果兒子沒有任何msg給出，
        那就算了，沒這回事
-->
  <ChildComp3 @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>