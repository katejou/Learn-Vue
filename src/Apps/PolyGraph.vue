<script>
import AxisLabel from './AxisLabel.vue'
import { valueToPoint } from './util.js'

export default {
    components: {
        AxisLabel
    },
    props: {
        stats: Array  //也是接收，雖然上方寫作 Export
    },
    computed: {
        // a computed property for the polygon's points
        points() {
            const total = this.stats.length //有多少個點

            return this.stats.map((stat, i) => { //map是逐一回傳，以組成一個新的array。 i 是 index。
                const { x, y } = valueToPoint(stat.value, i, total) //這方法是引用自一個 js 檔的。
                return `${x},${y}`
            })
            .join(' ') //以空格來連結這個「文字」的 Array ?
        }
    }
}
</script>

<template>
    <g>
        <!-- 這個多邊型，是HTML5預設的元素？對，例子︰ -->
        <!-- https://www.w3schools.com/graphics/svg_polygon.asp -->
        <polygon :points="points"></polygon>
        <!-- 外面的圓圈 ， cx 和 cy 是圓心所有的位置 App36 中的 svg h:200 w:200 也和這裡對應。-->
        <circle cx="100" cy="100" r="80"></circle>
        <!-- 這個會自動地環繞圓圈，分出多少等份的距離? -->
        <!-- 不，他是連結到 AxisLabel.vue 的，但為什麼可以用小寫，中間又有 - 還可以傳入…這我就不知道了。 -->
        <axis-label v-for="(stat, index) in stats" 
                    :stat="stat" 
                    :index="index" 
                    :total="stats.length">
        </axis-label>
    </g>
</template>