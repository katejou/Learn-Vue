<!-- 
https://gist.github.com/DanDiplo/30528387da41332ff22b
 -->

 <script>
 export default {
 
     data() {
         return {
             gridColumns: ['name', 'age'],
             people: [
                 { name: "John", age: 20 },
                 { name: "Mary", age: 35 },
                 { name: "Arthur", age: 78 },
                 { name: "Mike", age: 27 },
                 { name: "Judy", age: 42 },
                 { name: "Tim", age: 8 }
             ]
         }
     },
 
     // Arrow function 是屬於 ES6 的
     methods: {
         // filter is equivalent to Where
         do_Q1() {
 
             //var Q1 = this.gridColumns.reduce((ini, col) => ((ini[col] = 1), ini), {})
             var Q1 = this.gridColumns.reduce((o, key) => ((o[key] = 1), o), {})
             console.log("what is sortOrders : ", Q1);
 
         },
 
         // map is equivalent to Select
         do_ExplainQ1() {
 
             var Q1 = this.gridColumns.reduce(
 
                 //(ini, col) => ((ini[col] = 1), ini), {}
                 //的意思︰
                 function (ini, col) {
                     console.log("ini : " + ini);
                     console.log("col : " + col);
                     console.log("ini[col] : " + ini[col]);
                     console.log("(ini[col] = 1) : " + (ini[col] = 1));
                     return (ini);
                 }, {}
             )
             // 所以 Arrow function 的 =>(,) ，在逗號之前，是所進行的事，之後，是回傳的事物。
             // 如果沒有逗號的話，才是整個回傳。 
             // 並不是說有()就是回傳一個 object。

             console.log("what is sortOrders : ", Q1);

         }
 
    }
 
 }
 </script>

<template>

    <table>
        <thead>
            <tr>
                <th v-for="key in gridColumns">
                    {{ key }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in people">
                <td v-for="key in gridColumns">
                    {{ p[key] }}
                </td>
            </tr>
        </tbody>
    </table>

    <button @click="do_Q1">do_Q1</button>
    <button @click="do_ExplainQ1">do_ExplainQ1</button>

</template>