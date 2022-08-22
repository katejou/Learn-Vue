<!--
A nested tree component that recursively renders itself.
-->

<script>


// import 和 自設的資料，是往「裡」走的
import TreeItem from './TreeItem.vue'
const treeData = {
    name: 'My Tree', //每一個name節點，也只能有一個children兒子。
    // 而第一個一定要有一個兒子，不然就別Recursive了…
    children: [
        { name: '---1---' },
        { name: '---2---' },
        { name: '---3---',
        //由這裡，才進入Recursive。children都是 []
          children: [
                {   name: '--3.1--',
                    children: [ { name: '-3.1.1-' }, 
                                { name: '-3.1.2-' }]
                },
                {   name: '--3.2--' },
                {   name: '--3.3--' },
                {   name: '--3.4--',
                    children: [ { name: '-3.4.1-' }, 
                                { name: '-3.4.2-' }]
                }
            ]
        }
    ]
}

// export的資料，是往「外」走的，我要給呼叫我的人一個 component 和 data。
export default {
    components: {
        TreeItem
    },
    data() {
        return {
            treeData
        }
    }
}
</script>
<!--  我用以下組織的樣子，export 出去。 -->
<template>
    <ul>
        <!-- 我傳入「裡」層的形式︰ -->
        <TreeItem class="item" :model="treeData"></TreeItem>
    </ul>
</template>

<style>
.item {
    cursor: pointer;
    line-height: 1.5;
}

.bold {
    font-weight: bold;
}
</style>