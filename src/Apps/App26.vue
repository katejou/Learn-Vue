<script>

export default {

  data() {
    return {
      greeting: '您好！',
      name: 'Alysa'
    }
  },
  computed: {
    greetUserComputed() {
      return `${this.name} ${this.greeting}`
    }
  },
  methods: {
    greetUserMethods() {
      return `${this.name} ${this.greeting}`
    }
  }

}
</script>

<template>
  <div id="app">
    <label for="name">輸入名稱：</label>
    <input type="text" v-model="name" id="name">
    <p> {{ greetUserComputed }} </p>
    <p> {{ greetUserMethods() }} </p>
  </div>
</template>

<!-- 如果在模版裏呼叫 methods 函式，而該函式裏的有使用在 data 裏建立的資料，一旦這些資料出現變化，就會執行此 methods 函式。 -->
<!-- 官網詳解︰https://vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity -->
<!-- @^@ 看不懂，可能官網已改版了，反正記得有這件事就好… -->
