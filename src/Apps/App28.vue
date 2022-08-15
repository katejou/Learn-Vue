<script>
// 等等，這個練習，要下載axios    // npm install axios
// https://ithelp.ithome.com.tw/articles/10253259
// vue 的作者，比起 fetch 更推薦它(據上述說)，而且絕對比用 jquery 輕的說？ 
//import { axios } from 'axios'; //<-- 不行，說沒有 get 方法？
//Vue.prototype.$http = axios;
//Vue.use(axios);
// 這個下載方法才正確？
//https://ithelp.ithome.com.tw/articles/10203771
//npm install --save axios vue-axios  //要用save才能存到json檔案
//要去main.js當中啟用?
//https://ad57475747.medium.com/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E7%9A%84vue%E5%AD%B8%E7%BF%92%E6%97%A5%E8%AA%8C-%E5%AE%89%E8%A3%9D-axios-1550d6f1c862
////-------------
//https://www.npmjs.com/package/vue-axios
//npm install --save axios vue-axios
// https://ithelp.ithome.com.tw/questions/10208636
// 很怪… 就是引用不了… 一堆錯…我放棄，用fetch好了。

export default {

    data() {
        return {
            user: {
                name: 'Alysa',
                job: 'web developer'
            }
        }
    },
    watch: {
        user: {
            handler(newVal, oldVal) {
                console.log(oldVal)//我發現取得的都是新值，而不是舊值？
                console.log(newVal)//因為物件是 pass by reference，所以新舊值都會是相同。(意思就是拿不到…)
            },
            deep: true, //變動時，也做一做！(這個會一次跑兩行…)
            immediate: true// 當元件建立好，就立即執行一次此函式！(這個只會跑一行…)
        },

        // 無法偵測物件裏屬性的變動
        // user(newVal, oldVal) {
        //     console.log(oldVal)
        //     console.log(newVal)
        // }

        // 以下是錯誤寫法
        // user(newVal, oldVal) {
        //   deep: true,
        //   immediate: true,
        //   console.log(oldVal)
        //   console.log(newVal)
        // }
    }

}
</script>


<template>

    <div id="app">
        <label for="name">輸入名稱：</label>
        <input type="text" v-model="user.name" id="name">
    </div>
</template>