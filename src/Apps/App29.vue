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

        doForeach() {
            console.log( "doForeach" );
            // 記得要加 this 去拿 data
            this.gridData.forEach(function (item, index, array) {
                item.power = item.power + 100; // 直接對陣列內元素做操作，加入新property
                console.log( item );
            });
        }

        // 這個練習的重點，是 array.forEach(function (item, index, array){ ... })
        // forEach 的 function(...)之中，至少有一個參數作為迴圈值，後方兩個可有可無，但是有的話，就是按順序。

    }

}
</script>

<template>
    <button id="btn" @click="doForeach">按我！</button>

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