<script>
import { valueToPoint } from './util.js'

export default {
    props: {
        stat: Object,
        index: Number,
        total: Number
    },
    computed: { // 監察著︰當一有改變，永遠將文字，顯示到最適當的位置。
        point: function () {
            //為什麼要加 10 和也不知道？
            return valueToPoint(+this.stat.value + 10, this.index, this.total)
        }
    }
}
</script>

<template> 
    <text :x="point.x" :y="point.y">{{ stat.label }}</text>
</template>