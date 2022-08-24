<!--
https://eugenkiss.github.io/7guis/tasks/#temp
-->

<script>
export default {
    data() {
        return {
            c: 0,
            f: 32
        }
    },
    methods: {
        setC(e, c = +e.target.value) {
            this.c = c
            this.f = c * (9 / 5) + 32
        },
        setF(e, f = +e.target.value) {  //這個 = +e.target.value 的意思，好像不是要化作「正」數。
                                        //而是把 e.target.value 化作數字！<--這個寫法超簡潔好用的！
            this.f = f
            this.c = (f - 32) * (5 / 9)
        }
    }
}
</script>

<template>
    <input type="number" :value="c" @change="setC"> Celsius

    <br />= <br />
    <input type="number" :value="f" @change="setF"> Fahrenheit
</template>