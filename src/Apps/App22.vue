<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default {

  data: () => ({
    branches: ['main', 'v2-compat'],
    currentBranch: 'main',
    commits: null
  }),

  created() {
    // fetch on init
    this.fetchData()
  },

  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: 'fetchData'
    // App9 的寫法，是不一樣的，但是是同樣的行為。
    // 監視一個屬性︰currentBranch
    // 每次改變的時候，都作︰fetchData 這個動作。
    // 這個寫法，是比 App9 更簡潔，但是無法要求進行多於一個的動作？
    // 所以兩個方法都有好處。
  },

  methods: {

    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`
      this.commits = await (await fetch(url)).json()
    },

    truncate(v) {
      const newline = v.indexOf('\n')//找到第一個 \n 的 index
      return newline > 0 ? v.slice(0, newline) : v
      // 回傳由 index 0 到第一個 \n 的句子。如果沒有 \n 就回傳原句
      // 這個方法要 recursive 地利用，才可以顯示出一個段落？
    },
    
//補充︰https://medium.com/@bebebobohaha/slice-splice-split-%E5%82%BB%E5%82%BB%E5%88%86%E4%B8%8D%E6%B8%85-46d9c8992729

// #region 什麼是 slice ? 

//因為是做shallow copy，所以原值不改變。

//arr.slice()
//arr.slice(begin)
//arr.slice(begin, end)

//arr (= and also string )
//begin 為開始的索引值，負數代表從後面開始算起，-1為倒數第一個元素。
//end 為結束的索引值，沒有填寫時則得到arr中的所有元素。

//const str = 'The quick brown fox jumps over the lazy dog.';

//console.log(str.slice(31));
// expected output: "the lazy dog."

//console.log(str.slice(4, 19));
// expected output: "quick brown fox"

//console.log(str.slice(-4));
// expected output: "dog."

//console.log(str.slice(-9, -5));
// expected output: "lazy"

// #endregion

// #region 什麼是 splice?

// 從Array中添加/刪除項目，回傳被刪除的項目。

// 參數代表︰
//array.splice(start)
//array.splice(start, deleteCount)
//array.splice(start, deleteCount, addItem1, addItem2, ...)

//var myFish1 = ['angel', 'clown', 'drum', 'sturgeon'];
//var removed1 = myFish1.splice(2, 1, 'trumpet');

// outcome :
// myFish1 is ["angel", "clown", "trumpet", "sturgeon"]
// removed1 is ["drum"]

//var myFish2 = ['angel', 'clown', 'drum', 'sturgeon'];
//var removed2 = myFish2.splice(-2, 2, 'trumpet');

// outcome :
// myFish2 is ["angel", "clown", "trumpet"]
// removed2 is ["drum", "sturgeon"]

// #endregion

// #region 什麼是 split?

//分割字串成字串組 // 不改變原值

//stringObject.split(separator,howmany)

//separator 字串符或正則表達式，從該參數指定的地方分割stringObject。
//howmany 返回值的最大長度，超過該長度則不顯示。

//var str="How are you ?"
//var splits1 = str.split(" ");
//var splits2 = str.split("");
//var splits3 = str.split(" ",3);

//splits1 contains ["How", "are", "you", "?"]
//splits2 contains ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "?"]
//splits3 contains ["How", "are", "you"]


// #endregion

    formatDate(v) {
      return v.replace(/T|Z/g, ' ') // 將 T 或 Z 的文字，多個，全部取代為 ' '
    }

//補充︰https://dotblogs.com.tw/jgame2012/2016/02/27/150013

// #region js 中 regex 最後面的 i, g, m 意思

// i : 的意思是不區分大小寫的比對，

// 例如 :
//  var reg= /hello/i;
//	var text = "Hello World!";
//	var m = text.match(reg);
//	console.log(m[0]); // 注意這 match 回傳的是 ary

// result :　Hello
//--------------------------------------------

// g : 表示會可比對多個成功的結果

// 預設沒有 g 時，就是比對到一個就停止
// 例如 :
//  var reg= /hello/g;
//	var text = "hello world! hello~";
//	var m = text.match(reg);
//	console.log(m.length]);

// result :　2
// m 的內容︰[ "hello" , "hello" ]

//--------------------------------------------

// m : 意思是辨識每一行文字
// 沒有m的時候，每一句都只有「一組」字首字尾
// 但多了m 之後，它會分\r\n為一行，每一句之中都有「多行」，再以逐行來對比。
// 以上都是我自己推測的解釋。(因為我看不懂它在說什麼)。

//  var reg= /t$/gm; //找出以為t結尾的，多個，分行來找
//	var text = "what\r\nis\r\nit";  // <-- 實際為 ︰ what is it (三行)
//	var m = text.match(reg);
//	var l = m.length

// result :　2 // 有兩行用 t 作結尾。
// m 的內容︰[ "what" , "it" ]

// #endregion

  }
}
</script>

<template>

  <h1>Latest Vue Core Commits</h1>

<!-- template 之中的 template ，用來 v-for 出一個 radio button list -->
  <template v-for="branch in branches">

    <input  type="radio"
            :id="branch"
            :value="branch"
            name="branch"
            v-model="currentBranch">
            <!-- 當變化的時候，將值化為 currentBranch ，而這個 currentBranch 又在 watch 之中，扯了一個動作 -->
    <label  :for="branch">{{ branch }}</label>
    <!-- 每一個label 都是為了該 id? name? 而存在的? -->  
    <!-- id : 給 JavaScript 和 CSS 用的。
       name : 給 server 端去用的。 -->
  </template>

  <!-- currentBranch 隨 radio button 而變 -->
  <p>vuejs/vue@{{ currentBranch }}</p>
  <ul>
    <!-- commits 原為 null，在 created 之中 fetch 回來 -->
    <li v-for="{ html_url, sha, author, commit } in commits">
    <!-- 這是個7個字的連結，以 v-bind 給 herf 值 -->
      <a :href="html_url" target="_blank" class="commit">
      {{ sha.slice(0, 7) }}
      </a>
      <!-- 只顯示第一句由 0 - \n 的句子 -->
      - <span class="message">{{ truncate(commit.message) }}</span>
      <br> by 
      <!-- 這個 class 放在 span 而不在 a 之中 -->
      <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at 
      <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>

<!-- 


 -->