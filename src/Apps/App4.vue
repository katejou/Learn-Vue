<!-- 這個使用 v-bind 和 v-on -->
<!-- <script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onInput(e) {
      this.text = e.target.value
    }
  }
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
</template> -->

<!-- 這個使用 v-model 一次代替並簡化以上二者-->
<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>

<!-- 不用設定 methods ， v-model=的值，是自動和data之中的值同步 -->