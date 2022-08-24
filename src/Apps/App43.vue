<!--
https://eugenkiss.github.io/7guis/tasks/#crud
-->

<script>
export default {
    data() {
        return {
            names: ['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'], //一元Array
            selected: '', // 姓 + 名
            prefix: '', //Filter Input 
            first: '', //名
            last: '' // 姓
        }
    },
    computed: { //computed 用於監察 names 和 prefix 兩者相對的變化
        filteredNames() {
            return this.names.filter((n) =>
                n.toLowerCase().startsWith(this.prefix.toLowerCase())
            )
        }// 有，看得懂！
    },
    watch: { // watch 用於 select 的 option 上!!!! <- 要記得這個用法。
    // watch，比較像是fatch/onclick，不是用於「關聯計算」，而是單來單住。

    // !!!! selected 這同時是一個屬性，會被以 this.selected 來使用和給值
    // 給空值的時候，也沒有任何一個 option 被選上！
    // 所以 watch 比 compute 來得複雜！ 詳見 App 27

        selected(name) {
            ;[this.last, this.first] = name.split(', ')
        }
        // ; 為什麼放在前面呢？
        // name 以 , 來分割，再給值 last 和 first 
        // 所以 ;[array] = array ，就可以單行給值多個變數？
        // 好簡潔，好，學起來。
    },
    methods: {
        // filter 就是查詢 (R = Read)
        // 新增 (C)
        create() {
            if (this.hasValidInput()) { // 驗証有過
                // 化成字串的奇怪方法！`${this.X}, ${this.Y}`
                // 不能用 '' 或 "" 來代替
                const fullName = `${this.last}, ${this.first}`
                if (!this.names.includes(fullName)) { // 排除已有 (防 double click?)
                    this.names.push(fullName)
                    this.first = this.last = '' 
                }
            }
        },
        // 更新 (U)
        update() {
            if (this.hasValidInput() && this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names[i] = this.selected = `${this.last}, ${this.first}`
            } 
        },
        // 刪除 (D)
        del() {
            if (this.selected) { // 如有選好的才能刪
                const i = this.names.indexOf(this.selected)
                this.names.splice(i, 1)
                this.selected = this.first = this.last = ''
            } 
        },
        // 驗証
        hasValidInput() {
            return this.first.trim() && this.last.trim()
        }

    }
}
</script>

<template>
    <div><input v-model="prefix" placeholder="Filter (prefix = StartWith)"></div>

    <!-- 預設的高度，顯示5筆資料，但沒有這麼多筆，也是有這個高度。 -->
    <select size="5" v-model="selected">
        <option v-for="name in filteredNames">{{ name }}</option>
    </select>

    <label>Name: <input v-model="first"></label>
    <br />
    <label>Surname: <input v-model="last"></label>

    <div class="buttons">
        <input type='button' class="button" @click="create" value='Create' />
        <input type='button' class="button" @click="update" value='Update' />
        <input type='button' class="button" @click="del" value='Delete' />
    </div>
</template>

<style>
* {
    font-size: inherit;
}

input {
    display: block;
    margin-bottom: 10px;
}

select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
}

.buttons {
    clear: both;
    /* claer 的意思，是不互相重疊。 */
    /* https://zh-tw.learnlayout.com/clear.html */
    display: flex;
}

.button {
    margin-left: 5px;
}
</style>