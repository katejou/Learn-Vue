<script>
export default {

    data: () => ({

        gridColumns: ['name', 'power'],
        gridData: [
            { name: 'Chuck Norris', power: 10000 },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
        ]
    }),
    methods: {

        // map/filter
        //最大特色就是都要return，回傳成為新的陣列，舊的陣列不會被修改
        //https://ithelp.ithome.com.tw/articles/10215281
        //https://vimsky.com/zh-tw/examples/usage/javascript-array-map-method.html
        //https://www.runoob.com/jsref/jsref-map.html
        doMap() {
            let newArray = this.gridData.map(function (item, index, array) {
                //if(item.power > 7000) return item;
                // map : 不符合的元素會自動改成回傳成 undefined
                // 所以不能給值Grid，會因為對不上而出錯。
                var someNewValue = 
                { 
                    name : item.name + '_Q',
                    power : item.power + 10
                }
                return someNewValue;
            });
            console.log(newArray);
            this.gridData = newArray;
        },

        //https://ithelp.ithome.com.tw/articles/10229458
        doFilter() {
            let newArray = this.gridData.filter(function (item, index, array) {
                if (item.power > 9000)
                    return item; // 或者寫成下方的哪樣︰
                    //return true;
            });
            // filter : 不符合的元素，會自動篩掉，可以直接給值Grid。
            console.log(newArray);
            this.gridData = newArray;
        },

        // https://ithelp.ithome.com.tw/articles/10229458
        doMapAndFilter() {
            let newArray = this.gridData.map(function (item, index, array) {
                if(item.power > 8000) return item;
            });
            console.log(newArray);
            // map 不到會預設回傳 undefined , filter 會自動 可以排除 '' 和 undefined (=false的東東)
            // 我覺得如果是用來接收 fetch 資料的話，會有用，所以我實作一下作排除用的filter。
            newArray = newArray.filter(function (item, index, array) {
                return item;
            });
            console.log(newArray);
            this.gridData = newArray;
        }

    }

}
</script>

<template>
    <button id="btn" @click="doMap">Map按我！</button>
    <button id="btn" @click="doFilter">Filter按我！</button>
    <button id="btn" @click="doMapAndFilter">Map+Filter按我！</button>

    <table>
        <thead>
            <tr>
                <th v-for="key in gridColumns">
                    {{ key }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in gridData">
                <td v-for="key in gridColumns">
                    {{ entry[key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>