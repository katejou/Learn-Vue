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
import App28 from './Apps/App28.vue'


//createApp(App).mount('#app')//這是第一層(預設)

//以下的實作，都是按官網的教學︰
//https://vuejs.org/tutorial/

//createApp(App1).mount('#app')//在同層傳值 (data的設定)
//createApp(App2).mount('#app')//在同層綁css style (data成為屬性) v-bind
//createApp(App3).mount('#app')//Event Listeners(method的設定) v-on

//---- 下方的都只是基本範例，還有它們還有進階 ----
//createApp(App4).mount('#app')//Form Bindings | v-model 的使用
//createApp(App5).mount('#app')//Conditional Rendering | v-if 
//createApp(App6).mount('#app')//List Rendering | v-for
//createApp(App7).mount('#app')//Computed Property | before 和 迴圈
//createApp(App7F).mount('#app')//Computed Property | after
//createApp(App8).mount('#app')//Lifecycle and Template Refs | mount 
//createApp(App9).mount('#app')//Watchers | await 和 fetch ! 
//createApp(App10).mount('#app')//Component召喚 
//createApp(App11).mount('#app')//召喚者的傳值 | props
//createApp(App12).mount('#app')//反面給值(召喚獸給召喚者？) | emit 
//createApp(App13).mount('#app')//兒子以slot接值 | <slot>

//---- 進階練習 ----
//createApp(App14).mount('#app')// v-for, key value 和 index

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

// 官方的 Examples : 

//createApp(App15).mount('#app')// e.preventDefault() , Reverse Message, inline expression statement
//createApp(App16).mount('#app')// hover on span, change class and style by movement
//createApp(App17).mount('#app')// v-else-if, list.push , list.pop(), list.reverse
//createApp(App18).mount('#app')// From : Text Input, Checkbox, Multi Checkbox, Radio, Select, Multi Select
//createApp(App19).mount('#app')// (19) 引用隔壁 (20) 的 Component，19 以 v-for 迴圈傳值並生成 20，
//createApp(App21).mount('#app')// import + npm 外掛！ , @input 的指令…
//createApp(App22).mount('#app')// fetch Data ! 生命週期 created() , watch .. 
//createApp(App23).mount('#app')// Grid的操作，即時篩選，排序。
createApp(App25).mount('#app') // watch 和 computed 差別的補充 筆記見 watch_computed.js 的內容。
//createApp(App26).mount('#app')
//createApp(App27).mount('#app')
//createApp(App28).mount('#app')

