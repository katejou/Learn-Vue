<script>
export default {

    data: () => ({

        gridColumns: ['name', 'power'],
        gridData: [
            { name: 'Chuck Norris', power: 1 },
            { name: 'Bruce Lee', power: 2 },
            { name: 'Jackie Chan', power: 3},
            { name: 'Jet Li', power: 4 }
        ]
    }),
    methods: {

        //用來兩兩相運算(比較也是運算的一種)的方法，也就是說至少要兩個值才能使用?
        //為什麼和 https://ithelp.ithome.com.tw/articles/10207154 說的不一樣。
        // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        doReduce() {
            let newArray = this.gridData.reduce
                (
                    function (preValue, value, index, array) {
                        console.log('preValue = ', preValue.name, ' value = ', value.name, ' index = ', index);
                        return preValue.power + value.power;
                    }
                ,0);
            console.log(newArray);
        }

    }

}
</script>

<template>
    <button @click="doReduce">Reduce按我！</button>

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