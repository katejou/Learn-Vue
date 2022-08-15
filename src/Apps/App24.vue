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
      sortOrders: this.columns.reduce((o, key) => ((o[key] = 1), o), {})// 這句看不懂。
      // this.columns.reduce((item, index) => ((item[index] = 1), item), {}) // <-- 是這個意思？
    }
  },

  computed: {

    filteredData() {

      const sortKey = this.sortKey // 預設為空？
      const filterKey = this.filterKey && this.filterKey.toLowerCase() // 從23傳入，也預設為''
      const order = this.sortOrders[sortKey] || 1 // 將空的 sortKey 放入 sortOrder 這個方法
      let data = this.data // 也是從上頁接回來的

      if (filterKey) { // 這是一個布林，因為從23傳入預設為空，所以預設false。但如有值，並能化作小寫的話︰

       //filter 是只回傳為 true 的值，(見App30)
        data = data.filter(

          // 是 function 的縮寫
          (row) => {
            // Object.keys(X).some()
            // 這個
            return Object.keys(row).some( // 取每行的key出來作迴圈
              (key) => {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                // 如每行的key化為小寫，其中包括 filterKey的話，就回傳這結果>這Key>這行  
              }
            )
          }
        ) // 真的是一個超級濃縮精簡的寫法
      }

      if (sortKey) { // 這個預設為空，也就是false
        data = data.slice()
          .sort(
            (a, b) => { //data以兩兩為一組去對比?
            a = a[sortKey] // 這個sortKey是數字index，不是 0 name 就是 1 
            b = b[sortKey]
            // 如 a 等如 b 則回 0 ，如否，再判斷 a 若大於 b，則回 1，否則回 -1
            return (a === b ? 0 : (a > b ? 1 : -1)) * order
            // * order ? order 不是 bool 嗎 ? ... 追下去，又到了我看不懂的那一行
            }
          )//如果回傳的是數字，那到底是怎麼給sort去…是若為負數則排後，正數則排前？
      }

      return data
    }
    // filteredData 的方法，一次包括排序和篩選
  },

  methods: {
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
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
          {{ capitalize(key) }} 
          <!-- sortOrders是Data，它原來是一個Array嗎？ -->
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
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

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

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