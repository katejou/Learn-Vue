<!--
https://eugenkiss.github.io/7guis/tasks/#timer
-->

<script>
export default {
    data() {
        return { // 初始設定
            duration: 15 * 1000, 
            elapsed: 0
        }
    },
    // 這是生命的週期︰
    created() {
        let lastTime = performance.now() // 這個只在 create 時給予一次

        const update = () => {
            const time = performance.now() // time 和 lastime 中間有差多少？
            
            this.elapsed += Math.min(time - lastTime, this.duration - this.elapsed) // 累加兩者之間較少的
            // 以上是確保進度條不會倒回去，只是前進的速度有變化
            
            lastTime = time //在 update 中的給予，是一直在同步 lastTime 這個值，使其不斷變晚。 
            
            this.handle = requestAnimationFrame(update) // 這個 AnimationFrame 是 Vue之中的方法。
            //(這個是個 recursive 的東東？在created 時被呼叫一次之後，就一直不斷的呼叫自己，所以叫做 update？)
        }

        update() //現在才呼叫(第一次)
    },
    unmounted() {
        cancelAnimationFrame(this.handle)
        //我預計是取消這個一直在 recursive 的東東，以免秏能。

        // this.handle 是 while alive 的感覺!!!!!!
    }
}
</script>

<template>
    <label>Elapsed Time:
        <!-- ( 從開始到現在的秒數 / duration(盡頭的) 的) 進度條 -->
        <progress :value="elapsed / duration"></progress>
    </label>

    <!-- (從開始到現在的) 秒數計 -->
    <div>{{ (elapsed / 1000).toFixed(1) }}s</div>

    <!-- (duration 的) 拉伸桿 -->
    <div>
        Duration: <input type="range" v-model="duration" min="1" max="30000">
        {{ (duration / 1000).toFixed(1) }}s
    </div>

    <!-- 清空 ( 從開始到現在的秒數 ) 鍵 -->
    <button @click="elapsed = 0">Reset</button>
</template>

<style>
.elapsed-container {
    width: 300px;
}

.elapsed-bar {
    background-color: red;
    height: 10px;
}
</style>