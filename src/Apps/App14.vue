<script>
export default {
  data() {
  	return {
	    myObject: {
  	        A: 'Apple',
	        B: 'Banana',
      	    C: 'Cat'
    	}
  	}
	}
}
</script>

<template>
	<ul>
    <!-- index是沒有值，於是自動為0開始數 -->
    <!-- 注意key 和 value 在 v-for 傳入時的位置，是有固定的。先value 後key-->
    <li v-for="(po_value, po_key, auto_index) in myObject">
		  {{ auto_index }}. {{ po_key }}: {{ po_value }}
		</li>
  </ul>
</template>