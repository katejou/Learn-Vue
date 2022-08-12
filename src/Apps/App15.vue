
<!-- <script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
</template> -->

<!--
This example demonstrates handling user input with the v-on directive.
-->

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('') //反轉訊息的方法
    },
    notify() {
      alert('navigation was prevented.')
    }
  }
}
</script>

<template>
  <!--
    Note we don't need .value inside templates because
    refs are automatically "unwrapped" in templates.
  -->
  <h1>{{ message }}</h1>

  <!--
    Bind to a method/function.
    The @click syntax is short for v-on:click.
  -->
  <button @click="reverseMessage">Reverse Message</button>

  <!-- Can also be an inline expression statement -->
  <button @click="message += '!'">Append "!"</button>

  <!--
    Vue also provides modifiers for common tasks
    such as e.preventDefault() and e.stopPropagation()
  -->
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>
<!-- @click.prevent = e.preventDefault() = 取消事件的預設行為。但不會影響事件的傳遞
    (所以是自己寫一個事件？) 寫成 notify 事件，而不是跳出這個網址的分頁。
    (對只是展示，但尚未完成的功能，可以這樣用) -->

<style>
button, a {
  display: block;
  margin-bottom: 1em;
}
</style>