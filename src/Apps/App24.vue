<script>
export default {

  //從 23 來的資料，以什麼格式來接收
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },

  data() {
    return {
      sortKey: '',
      //找出 array.reduce 這個方法幹的是什麼？ 我在App29去研究…
      //sortOrders: this.columns.reduce((o, key) => ((o[key] = 1), o), {})// 這句看不懂。
      sortOrders: this.columns.reduce((ini, col) => ((ini[col] = 1), ini), {})
      // 我在 App34 有解釋 ， reduce 是用作兩兩運算和對比。ini 一開始是空obj，
      // 之後是ini加入並設定 name : 1，回傳 ini，
      // 之後是ini再次加入並設定 power : 1，再回傳 ini。
      // 兩個回傳，結成 array ，給值 sortOrders : {{name:1},{power:1}}
    }
  },

  computed: {

    filteredData() {

      const sortKey = this.sortKey // 預設為空
      const filterKey = this.filterKey && this.filterKey.toLowerCase() // 從23傳入，也預設為''
      //意指如有值，化為小寫，再回傳給 filterKey? 這個 filterKey 應該不是 bool 值。
      //所以這個也是Vue的三元運算式的一種，用 && 和 || 來給值。
      const order = this.sortOrders[sortKey] || 1
      // 預設是空的 sortKey 放入 sortOrder : {{name:1},{power:1}}，所以為false
      // 但後方又有1。
      // 所以︰如果sortKey為空，即回傳 1 給 order
      let data = this.data // 也是從上頁接回來的，就是表格的內容。

      if (filterKey) { // 這是一個字串，但也可以用作 bool (凡不是 '' 或 null 之類的，都為 true? (0=true))

        //filter 是只回傳為 true 的值，(見App30)
        data = data.filter(

          // 是 function 的縮寫 (見App30) row = item (也就是 foreach row 的意思)
          (row) => {
            // Object.keys(X).some()
            // some 回傳的是 bool 的值 = is there any
            return Object.keys(row).some( // 此行的key之中，是否有︰
              (key) => { //見 App 33 ，這個 key 也 = item 也就是 (foreach key)
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                // 如每行的key對應的內容，其中包括 filterKey的話，回傳 true  
              }
            )
          }
        ) // 注意︰一個Row只有兩個Key(Name﹑Power)，這個 filter 用「同一個」輸入框，篩「多個」欄位的內容！
      }

      if (sortKey) { // 這個預設為空，也就是false，但如有值則跑︰
        data = data.slice() // slice的意思複製，由X到Y。不填的話，則是全部。
          .sort( // 如 App 33 行 94，將這個複製品，兩兩為一組去對比，做 「原地演算法」來排序。
            (a, b) => {
              a = a[sortKey] // 這個 sortKey 是 column name
              b = b[sortKey]
              // 如 a 等如 b 則回 0 ，如否，再判斷 a 若大於 b，則回 1，否則回 -1
              return (a === b ? 0 : (a > b ? 1 : -1)) * order
              // 在沒有 sortkey的情況下，order 預設為 1 ，但能跑進來，肯定不為空。
              // sortOrders : {{name:1},{power:1}} 會影響 order，取其中一方的值。
              // 如 name/power 變成-1，而且 sortKey 指定為該 name/power
              // 這個 order 就會反轉了這個 sort 的排序方法！
            }
          )//所以順排和逆排，都可以用這個方法！
      }

      return data
    }
    // filteredData 的方法，一次包括篩選和排序，記得，是先篩選再排序。那個data才不會多跑幾次。
  },// 以上的 compute ，自動監察相關的元素。

  methods: {
    sortBy(key) {
      this.sortKey = key //改由這個欄位來做排序
      this.sortOrders[key] = this.sortOrders[key] * -1 //負負得正，每次跑排序，都把次序排轉逆，逆轉順。
      //預設 sortOrders : {{name:1},{power:1}}
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
      //第一個字傳為大寫，再接上其他。
    }
  }
}
</script>

<template>
  <!-- 如果 filteredData.length = 0 的話，是不用寫下去的意思？-->
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <!-- 生成兩個th，on click 呼叫 method，扯出 compute … -->
        <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
          <!-- 每一個欄位的 onclick都綁定他們呼叫 sortBy() 所傳的值 -->
          <!-- 如果 當下的 sortKey = 這一個欄位，即把 active 回傳給 class -->
          <!-- 因為每次生成，都要做capitalize，所以寫成方法。 -->
          {{ capitalize(key) }}
          <!-- 該欄的 sortOrders 是 正1 或 負1，影響箭頭 向上或向下 -->
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"> </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- 是以 filteredData 來生成，意指一開始 sortKey 根本沒有值時，跳過那兩個if，以原生的 data 來生成 -->
      <tr v-for="entry in filteredData">
      <!-- columns 是 App23 傳入的兩個欄位，能對應到 entry 的 -->
        <td v-for="key in columns">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
  <!-- 如為 else 則不是 table ！ -->
  <p v-else>No matches found.</p>
</template>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}


/* 這個是 active 的 樣式表 */
th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

/* 這個是箭頭的樣子 */
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

/* 向上和向下的差別，是最後一句？所以向上向下的圖案設定是預設的，只是它們 border 的距離不一樣？ */
.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>