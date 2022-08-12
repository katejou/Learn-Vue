<!-- 
An example of creating a reusable grid component and using it with external data.
-->

<script>
import DemoGrid from './App24.vue'

export default {

  components: {
    DemoGrid
  },
  data: () => ({
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  })

}
</script>

<template>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <!-- 將 23 的資料傳過去 24 ，24才是重點。-->
  <DemoGrid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </DemoGrid>
</template>