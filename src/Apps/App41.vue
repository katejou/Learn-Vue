<!--
https://eugenkiss.github.io/7guis/tasks/#flight
-->

<script>
// 文 > 日
function stringToDate(str) {
    const [y, m, d] = str.split('-')
    return new Date(+y, m - 1, +d)
}
// 日 > 文
function dateToString(date) {
    return (
        date.getFullYear() +
        '-' +
        pad(date.getMonth() + 1) +  // date.getMonth() 原來是 index ...
        '-' +
        pad(date.getDate())
    )
}

function pad(n, s = String(n)) {  // 收數字，另一個是由數字轉換而成的文字…(好簡潔的接收兼轉換型態)
    return s.length < 2 ? `0${s}` : s   // 如非兩位數，在前方補零
}

export default {
    data() {
        return {
            flightType: 'one-way flight', // 預設的DDL值
            departureDate: dateToString(new Date()),  //預設輸入框值︰new Date()是今天
            returnDate: dateToString(new Date())
        }
    },
    computed: {
        isReturn() { // dll 的聯動，當只有兩個選項，只用 true/false 就好。
            return this.flightType === 'return flight'
        },
        canBook() {
            return (
                !this.isReturn || // 如「是」來回 -> 則看 日期的比較，是不是 回程的 比 去程的 晚。  
                stringToDate(this.returnDate) > stringToDate(this.departureDate)
            )
        }
    },
    methods: {
        book() { // book 成功後顯示的訊息
            alert(
                this.isReturn
                    ? `You have booked a return flight leaving on ${this.departureDate} and returning on ${this.returnDate}.`
                    : `You have booked a one-way flight leaving on ${this.departureDate}.`
            )
        }
    }
}
</script>

<template>
    <!-- v-model 綁定 DDL 的預設選項 -->
    <select v-model="flightType">
        <option value="one-way flight">One-way Flight</option>
        <option value="return flight">Return Flight</option>
    </select>

    <input type="date" v-model="departureDate">
    <input type="date" v-model="returnDate" :disabled="!isReturn">
    <!-- 這個 :disabled 綁因 DDL 值來改變的 bool ，非常方便！ -->

    <button :disabled="!canBook" @click="book">Book</button>
    <!-- button 的 :disabled 卡驗證！ -->
    <!-- 即使只是選日期時，警告的訊息，和 button 的 disable 都是即時同步的！ -->
    <p>{{ canBook ? '' : 'Return date must be after departure date.' }}</p>
</template>

<style>
select,
input,
button {
    display: block;
    margin: 0.5em 0;
    font-size: 15px;
}

input[disabled] {
    color: #999;
}

p {
    color: red;
}
</style>