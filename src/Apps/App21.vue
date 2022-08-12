<!--
A simple markdown editor.
這個練習，要先 npm install marked 和 lodash-es ?
還要重新開，才能跑出來。
它存在node_modules的資料夾裡面。
-->

<script>
import { marked } from 'marked'
import { debounce } from 'lodash-es'

export default {
  data: () => ({
    input: '# hello'
  }),
  computed: {
    output() {
      return marked(this.input)
    }
  },
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value
    }, 100)
  }
}
</script>

<template>
  <div class="editor">
    <!-- @input="update" : @input 是真的很通人性了！ -->
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>