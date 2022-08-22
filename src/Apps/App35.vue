<!--
A nested tree component that recursively renders itself.
-->

<script>


// import 和 自設的資料，是往「裡」走的
import TreeItem from './TreeItem.vue'
const treeData = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'wat' }]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'wat' }]
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