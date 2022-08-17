<script>
export default {

    data: () => ({

        gridColumns: ['name', 'power'],
        gridData: [
            { name: 'Chuck Norris', power: 1 },
            { name: 'Bruce Lee', power: 2 },
            { name: 'Jackie Chan', power: 3 },
            { name: 'Jet Li', power: 4 }
        ]
    }),
    methods: {

        //用來兩兩相運算(比較也是運算的一種)的方法︰
        doReduce_Two() {
            let lastValue = this.gridData.reduce
                (
                    function (preValue, value, index, array) {
                        console.log(' index = ', index, 'preValue.name = ', preValue.name, ' currValue.name = ', value.name, ' currValue.power = ', value.power);
                        return { name: value.name, power: value.power } // 回傳當下的，作下一個的 preValue
                    }
                    , { name: 'initName', power: 0 } //preValue 的起始值
                );

            console.log('lastValue : ', lastValue);

        },

        //用來兩兩累加︰
        doReduce_Sum() {// 0 + 1 + 2 + 3 + 4

            // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
            const array1 = [1, 2, 3, 4];
            const initialValue = 0;
            const sumWithInitial = array1.reduce(
                //簡寫的方法，取 reduce 預設的 function 中的頭兩個參數，作輸入。並回傳相加的值。
                //(previousValue, currentValue) => previousValue + currentValue, //<--這是最簡的，沒有{}和 return
                (previousValue, currentValue) => { console.log(previousValue,' : ',currentValue); return previousValue + currentValue },
                //(previousValue, currentValue) => { console.log(previousValue + currentValue); return previousValue + currentValue },
                initialValue
            );

            console.log(sumWithInitial);// expected output: 10
            
            // 這個練習，就一邊比較，一邊累加…
        
        }

    }

}
</script>

<template>
    <button @click="doReduce_Two">Reduce兩兩對比按我！</button>
    <button @click="doReduce_Sum">Reduce累加+對比按我！</button>
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