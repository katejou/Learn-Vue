<!--
FLIP list transitions with the built-in <TransitionGroup>.
https://aerotwist.com/blog/flip-your-animations/
-->

<script>
import { shuffle } from 'lodash-es'

const getInitialItems = () => [1, 2, 3, 4, 5] // 這是一個屬性，也是一個方法的縮寫，後方是它的預設值。
let id = getInitialItems().length + 1 // 這是未生成的下一個item

export default {
  data() {
    return {
      items: getInitialItems()//getInitialItems 是上方一個 const 方法，而取得的屬性。
      //為什麼要透過 item 來呼叫，是因為不想改到 InitialItems ， InitialItems 要保留作 reset()
      //所以以 item 作為它的複製品？我是這樣覺得。
    }
  },
  methods: {
    insert() {
      const i = Math.round(Math.random() * this.items.length)
      this.items.splice(i, 0, id++)
      //在random的一個地方開始，刪除0個，在那一個地方，加入一個新元素。
      //然後下一個(未生成的)新元素的預備值+1
    },
    reset() {
      this.items = getInitialItems() //將 item 變回預設。
    },
    shuffle() {
      this.items = shuffle(this.items) //這個是 import 進來的，不用自己寫，真好。
    },
    remove(item) {
      const i = this.items.indexOf(item)
      if (i > -1) { //這個是防呆而已，怕 double click 之類的，我想。
        this.items.splice(i, 1) //在該index殺一個。
      }
    }
  }
}
</script>

<template>
  <input type='button' @click="insert" value='insert at random index'/>
  <input type='button' @click="reset" value='reset'/>
  <input type='button' @click="shuffle" value='shuffle'/>

<!-- 這個 name = "fade" 就可以使用下方，所有 fade 開頭的設定嗎？ 明明不是 class 的說… -->
<!-- 反正我就當這個是 TransitionGroup 的神奇作用！ -->
  <TransitionGroup tag="ul" name="fade" class="container">
    <div v-for="item in items" class="item" :key="item">
      {{ item }}
      <input type='button' @click="remove(item)" value='x'/>
    </div>
  </TransitionGroup>
</template>

<style>
.container {
  position: relative;   /* 包裝的箱子，position: relative; = 可浮動？TransitionGroup 用的 */
  padding: 0;
}

.item {                 /* Div用的 */
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition 活動﹑「當」出現﹑「當」消失時的 時間？曲線？( fade in 和 out 的方向，向下右方離開，從下右方升上。 )*/
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state 我也不太看得懂這...反正我覺得這個是 suffle 用的，直上直落 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0); /* 30px 是 item 的 height */
}

/* 
3. ensure leaving items are 「taken out of layout flow」  <--有這個 flow 嗎？ 
   so that moving animations can be calculated correctly. 
*/
.fade-leave-active {
  position: absolute; /* 我也不太看得懂這... 反正就是會消失得更精準。*/
}
</style>