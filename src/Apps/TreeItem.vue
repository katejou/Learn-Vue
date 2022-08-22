<script>
// 將資料送去上層 App35
export default {
    name: 'TreeItem', // necessary for self-reference ? 
    props: {
        model: Object  // 這裡卻是接收 App35 傳入資料的地方，及所有自我呼叫的傳入地方
        //model 可能是枝，也可能是葉
        //所以 Recursive 的時候，要有方法判斷
    },


    data() {
        return {
            isOpen: false // 預設不打開？
        }
    },
    computed: {
        isFolder() { // 回傳︰若無子，回傳 False, 若有「子」回傳有多少個。
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle() {
            if (this.isFolder) { // 若'this'有子(為樹枝)
                this.isOpen = !this.isOpen  // 打開/關上
            }
        },
        changeType() {
            if (!this.isFolder) { // 若'this'無子(為葉子)
                this.model.children = [] // 給'this'一個空串列
                this.addChild() // 給空串列一個object 
                this.isOpen = true // 打開'this'
            }
        },
        addChild() {
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
}
</script>

<template>
    <li>
        <!-- 如為枝，則 bold in style -->
        <!-- 如單按，toggle (葉子做這個會沒有反應) -->
        <!-- 如雙按，在單擊中，沒有反應的葉子，會執行changeType，化為一個枝子！ -->
        <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
            {{ model.name }}
            <!-- 如果是枝子，還有符號 -->
            <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <!-- 為什麼入Recursive 之前要有一個頭？因為Recursive之時，進行的方法都參考著上面 -->
        <!-- 如果是葉子的話，就停下來了，是枝子的話，才繼續做下面 -->
        <ul v-show="isOpen" v-if="isFolder">
            <!--
                A component can "recursively render" itself using its
                "name" option (inferred from filename if using SFC)
            -->
            <TreeItem class="item" v-for="model in model.children" :model="model">
            </TreeItem>
            <!-- 上方，就是recusive的地方，這個TreeItem是在App35呼叫的 -->
            <!-- 但是這裡也可以以這個元素來呼叫的原因，應該是︰ name: 'TreeItem' -->
            <!-- 有這個設定，代表它叫它自己做TreeItem，然後再呼叫一次自己 -->
            <!-- 這次的呼叫，還是用迴圈來呼叫，每次都傳入它的children -->
            <li class="add" @click="addChild">+</li>
            <!-- 每一個children的迴圈之後，都加一個「末端」，給新增的可能-->
        </ul>

    </li>
</template>