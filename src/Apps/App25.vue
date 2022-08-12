<script>
let id = 0

export default {
data(){
    return{
        num: 0,
    }
},
computed:{
    add(){
        console.log('我有被觸發了！')
        return this.num
    }
},
//剛建立元件時，會印出 「我有被觸發了！」。num = 0
//然後，第一次按下按鈕後， num 變成 1，會印出「我有被觸發了！」。
//---- 但之後按按鈕，add 就不會再觸發，而「我有被觸發了！」這句也不會印出來。

mounted() {
     this.add = 10
}//<--這個會出warning，然後被跳過。
//vue.js:1551 [Vue warn]: Write operation failed: computed property "add" is readonly.

}
</script>

<template>
<div id="app">
  <button @click="num = 1">按我改num</button>
  <p> 用add方法把以下的值由0變1：</p>
  <p> {{ add }} </p>
</div> 
</template>

