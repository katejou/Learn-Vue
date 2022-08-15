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
            user: {},
            toggleBtn: false,
        }
    },
    computed: {
        async userComputed() {
            try {
                //const res = await axios.get('https://randomuser.me/api/')
                //return res.data.results[0];
                const res = await (await fetch('https://randomuser.me/api/')).json()
                return res.results[0];
            } catch (error) {
                console.log(error)
            }
        }
    },
    watch: {
        async toggleBtn() { //由屬性，轉為方法！
            this.user = 'loading...'//兩個一模一樣的 asyn 方法，除了多這一行。
            try {
                //const res = await axios.get('https://randomuser.me/api/')
                //return res.data.results[0];
                const res = await (await fetch('https://randomuser.me/api/')).json()
                this.user = res.results[0]; //和這一行！
            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>


<template>
    <div>
        <button type="button" @click="toggleBtn = true">
            取得 User
        </button>
        <p> {{ userComputed }} </p>
        <p> {{ user }} </p>
        <!-- watch 和 computed 不同, computed 無法進行非同步工作 -->
    </div>
</template>