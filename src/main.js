// 這個js檔案，被index.html引入，作為和vue檔之間的中介

import { createApp } from 'vue'// 在這裡 import 了，就不用再在各個 App 之中 import。
//import './index.css' //這個是預設的…

import App from './Apps/App.vue'
import App1 from './Apps/App1.vue'
import App2 from './Apps/App2.vue'
import App3 from './Apps/App3.vue'
import App4 from './Apps/App4.vue'
import App5 from './Apps/App5.vue'
import App6 from './Apps/App6.vue'
import App7 from './Apps/App7.vue'
import App7F from './Apps/App7F.vue'
import App8 from './Apps/App8.vue'
import App9 from './Apps/App9.vue'
import App10 from './Apps/App10.vue'
import App11 from './Apps/App11.vue'
import App12 from './Apps/App12.vue'
import App13 from './Apps/App13.vue'
import App14 from './Apps/App14.vue'
import App15 from './Apps/App15.vue'
import App16 from './Apps/App16.vue'
import App17 from './Apps/App17.vue'
import App18 from './Apps/App18.vue'
import App19 from './Apps/App19.vue'
import App20 from './Apps/App20.vue'
import App21 from './Apps/App21.vue'
import App22 from './Apps/App22.vue'
import App23 from './Apps/App23.vue'
import App25 from './Apps/App25.vue'
import App26 from './Apps/App26.vue'
import App27 from './Apps/App27.vue'
// import * as Vue from 'vue' // <--- 放棄使用 axios ...
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import App28 from './Apps/App28.vue'
import App29 from './Apps/App29.vue'
import App30 from './Apps/App30.vue'
import App31 from './Apps/App31.vue'
import App32 from './Apps/App32.vue'
import App33 from './Apps/App33.vue'
import App34 from './Apps/App34.vue'
import App35 from './Apps/App35.vue'
import App36 from './Apps/App36.vue'
import App37 from './Apps/App37.vue'
import App38 from './Apps/App38.vue'
import App39 from './Apps/App39.vue'
import App40 from './Apps/App40.vue'
import App41 from './Apps/App41.vue'
import App42 from './Apps/App42.vue'
import App43 from './Apps/App43.vue'
import App44 from './Apps/App44.vue'
import App45 from './Apps/App45.vue'

//createApp(App).mount('#app')//這是第一層(檔案生成的預設例子)

//以下的實作，都是按官網的教學(2022/08的版本)︰
//https://vuejs.org/tutorial/

//createApp(App1).mount('#app')//在同層傳值 (data的設定)
//createApp(App2).mount('#app')//在同層綁css style (data成為屬性) v-bind
//createApp(App3).mount('#app')//Event Listeners(method的設定) v-on

//---- 下方的都只是基本範例，還有它們還有進階 ----
//createApp(App4).mount('#app')// Form Bindings | v-model 的使用
//createApp(App5).mount('#app')// Conditional Rendering | v-if 
//createApp(App6).mount('#app')// List Rendering | v-for
//createApp(App7).mount('#app')// Computed Property | before 和 迴圈
//createApp(App7F).mount('#app')// Computed Property | after
//createApp(App8).mount('#app')// Lifecycle and Template Refs | mount 
//createApp(App9).mount('#app')// Watchers | await 和 fetch ! 
//createApp(App10).mount('#app')// Component召喚 
//createApp(App11).mount('#app')// 召喚者的傳值 | props
//createApp(App12).mount('#app')// 反面給值(召喚獸給召喚者？) | emit 
//createApp(App13).mount('#app')// 兒子以slot接值 | <slot>
//createApp(App14).mount('#app')// 綜合練習 v-for, key value 和 index 

//#region ---- 記，一些有的沒的理論上？ ----

// #region 另一個Mount
// const app8F = createApp({
//     data() {
//       return {
//         count: 0
//       }
//     }
// })
// app8F.mount('#app')
//
{/* <div id="app">
  <button @click="count++">{{ count }}</button>
</div> */}
// #endregion

// #region mtui-Mount

//The createApp API allows multiple Vue applications to co-exist on the same page, 
//each with its own scope for configuration and global assets

// const app1 = createApp({
//     /* ... */
//   })
//   app1.mount('#container-1')
  
//   const app2 = createApp({
//     /* ... */
//   })
//   app2.mount('#container-2')

// #endregion

// #endregion ----

// 官方的 Examples : 

//createApp(App15).mount('#app')// e.preventDefault() , Reverse Message, inline expression statement
//createApp(App16).mount('#app')// hover on span, change class and style by movement
//createApp(App17).mount('#app')// v-else-if, list.push , list.pop(), list.reverse
//createApp(App18).mount('#app')// From : Text Input, Checkbox, Multi Checkbox, Radio, Select, Multi Select
//createApp(App19).mount('#app')// (19) 引用隔壁 (20) 的 Component，19 以 v-for 迴圈傳值並生成 20，
//createApp(App21).mount('#app')// import + npm 外掛！ , @input 的指令…
//createApp(App22).mount('#app')// fetch Data ! 生命週期 created() , watch .. 
//createApp(App23).mount('#app')// Grid的操作，即時篩選，排序。

//<23>的實作 引發補充 1︰
//createApp(App25).mount('#app')  // computed 的生命週期和觸發條件補充 筆記見 watch_computed.js 的內容。
//createApp(App26).mount('#app')  // computed 和 method 的相似 筆記見 watch_computed.js 的內容。
//createApp(App27).mount('#app')  // watch 和 computed 不同, computed 無法進行非同步工作
//#region --- 放棄太難用的 axios

// const app = createApp(App27)  
// app.use(VueAxios, axios) 
// app.mount('#app')

//or

//createApp(App27).use(VueAxios, axios).mount('#app')

//#endregion ---
//createApp(App28).mount('#app')  // watch 若加上  deep: true 和  immediate: true ，也可以在掛上和該值變化的時候，自動跑一次。

//<23>的實作 引發補充 2︰
//https://ithelp.ithome.com.tw/articles/10207154
//https://learnku.com/vuejs/t/53162
//createApp(App29).mount('#app') // array.forEach(function (item, index, array){ ... })
//createApp(App30).mount('#app') // array.map(function(currentValue, index, arr), thisValue)
                                 // arr.filter(callback(element[, index[, array]])[, thisArg])
//createApp(App31).mount('#app') // arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
//createApp(App32).mount('#app') // Object.keys(obj) 是  
                                 // .some() 方法會透過「給函式」、測試陣列中是否至少有一個元素
                                 // arrow function

//createApp(App33).mount('#app') // 綜合練習︰https://gist.github.com/DanDiplo/30528387da41332ff22b
//createApp(App34).mount('#app') // App23->24看不懂的東東，在這裡驗証

//createApp(App35).mount('#app') // TreeItem.vue !!! recursively render !!!!
//createApp(App36).mount('#app') // input type="range" , PolyGraph。(未解的地方很多，但我趕時間學angular)
                                 // 加上 graph 什麼的，好像不常用，所以算了…
//createApp(App37).mount('#app') // Modal with Transition 黑幕鎖屏 及 跳出視窗
//createApp(App38).mount('#app') // Transition 除了可以用在 黑幕鎖屏 之外，還可以做小動畫。
                                 // TransitionGroup 
//createApp(App39).mount('#app') // 另一個 Todolist ， 介紹了一個MVC 的模版網站…我不細看了(因為我暫時用不到)
                                 // 加上 Todolist 已經練習過，而且它的 css 好複雜，又難改，又不好看…(可能是我能力不足？)
//createApp(App40).mount('#app') // 華氏和攝氏的簡單例子！ 學到 +e.target.value 的意思
//createApp(App41).mount('#app') // 學習DDL和日曆，Disenable ﹑ Alert ﹑還有驗証！ 
                                 //常用方法︰dateToString 的方法 + 如非兩位數，在前方補零
//createApp(App42).mount('#app') // timer, 可以用來做個假的進度條？ 
                                 // 比較像和生命週期的關係…
                                 // this.handle 是 while alive 的感覺。
                                 // performance.now()
                                 // this.handle = requestAnimationFrame(update) 
                                 // cancelAnimationFrame(this.handle)
createApp(App43).mount('#app')  //  前端CRUD
//createApp(App44).mount('#app')
//createApp(App44).mount('#app')