<!--
Modal component with customizable slots and CSS transitions.
-->

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<template>

  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- Teleport to 是一個 Vue 之中的特殊的元件嗎？ 和 Transition 是一對？ 會投射到 body 上？-->
    
    <!-- show不show是個 bool 值 -->
    <!-- close是一個action? …在下一層，有 emit 這回事…原來是可以動態 emit 的…-->   
    <modal :show="showModal" @close="showModal = false"><!-- import Modal 為何以以小寫來引用，我也還是不知道… -->

    <!-- 一個元件中的 template 像是套娃一樣  
    # header 就代表以下內容是小視窗的 header…-->
      <template #header>
        <h3>custom header</h3>
      </template>

    </modal>
  </Teleport>

</template>