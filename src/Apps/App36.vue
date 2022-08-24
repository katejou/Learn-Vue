<!--
Say Hello World with Vue!
-->

<script>
import PolyGraph from './PolyGraph.vue'

export default {
    components: {
        PolyGraph
    },
    data: () => ({
        newLabel: '',
        stats: [
            { label: 'A', value: 100 },
            { label: 'B', value: 100 },
            { label: 'C', value: 100 },
            { label: 'D', value: 100 },
            { label: 'E', value: 100 },
            { label: 'F', value: 100 }
        ]
    }),
    methods: {
        add(e) {

            // 停止預設行為是做 form postback 的行為嗎？
            e.preventDefault()

            //如為空值，別往下做  
            if (!this.newLabel) return

            //串列多加一個
            this.stats.push({
                label: this.newLabel,
                value: 100
            })

            //清空這個值
            this.newLabel = ''
        },

        remove(stat) {
            if (this.stats.length > 3) { //如果這個串列有三個以上，就刪
                this.stats.splice(this.stats.indexOf(stat), 1) //從這個index起，只刪一個。
                //注意 splice(切) 不是 slice(複製) 
            } else {
                alert("Can't delete more!")
            }
        }
    }
}
</script>

<template>
    <!-- svg 和 polygon 元素是什麼的解釋 -->
    <!-- https://www.w3schools.com/graphics/svg_polygon.asp -->
    <svg width="200" height="200">
        <PolyGraph :stats="stats"></PolyGraph>
    </svg>

    <!-- controls -->
    <div v-for="stat in stats">
        <label>{{ stat.label }}</label>

        <input type="range" v-model="stat.value" min="0" max="100">

        <span>{{ stat.value }}</span>
        <input type='button' @click="remove(stat)" class="remove" value='X'/>
    </div>

    <!-- 新的 -->
    <form id="add">
        <input name="newlabel" v-model="newLabel">
        <input type='button' @click="add" value='Add a Stat'/>
        <!-- 原本是 button 而不是 input type='button'，但是會被強制分行，怎調CSS都沒有用。
        所以改成 input type='button'，馬上順眼了。我也不知道為什麼官網那邊就沒有這個問題… -->
    </form>

    <!-- 顯示原本的串列內容 -->
    <pre id="raw">{{ stats }}</pre>
</template>

<style>
polygon {
    fill: #42b983;
    opacity: 0.75;
}

circle {
    fill: transparent;
    stroke: #999;
}

text {
    font-size: 10px;
    fill: #666;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {
    position: absolute;
    top: 0;
    left: 300px;
}

div {
    white-space: nowrap;
}
</style>