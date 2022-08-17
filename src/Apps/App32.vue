<!-- 
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 -->

 <script>
 export default {
 
     methods: {
 
         // some() 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是布林值。
         doArray_Some() {
 
             const array = [1, 2, 3, 4, 5];
 
             // checks whether an element is even
             const even = (element) => element % 2 === 0;
 
             console.log(even);// 這是一個算式，記得它還沒有開始跑。
 
             var str = "";// 正確條列元素的方法 forEach ︰
             array.forEach(function (value, index, array) {
                 str += value + ",";
             });
             console.log("forEach + function : ", str);
 
             var str1 = "";// 實作Linq，不 Arrow functions 寫法的 forEach︰
             //array.forEach(element => str1 += element + ",");
             array.forEach((element, index) => str1 += index + ":" + element + ",");
             console.log("forEach + Arrow functions : ", str1);
 
             // some 的功用很小，就只是來檢查有沒有其中一個回傳 true
             console.log(array.some(even));
             // 如有其中一個為 true，則停了，回傳 true 
 
 
             // 我覺得 Arrow functions 要本身就很熟這個方法，才用得方便，不然很抽象。
 
             // 如果 forEach有初始值
             let arr2 = [5, 10, 20, 30];
             [1, 2, 3].forEach(function (x, i) {
                 console.log(this + "" + i);
             }, arr2); // this ->obj
 
             /* 印出︰ 
             [ 5, 10, 20, 30 ]
             [ 5, 10, 20, 30 ]
             [ 5, 10, 20, 30 ]
             */
 
             //這是一個arr按長度來做一件事的方法。 
 
 
 
         },
 
         //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some
         doArray_Some2() {
 
             function isBiggerThan10(element, index, array) {
                 return element > 10;
             }
 
             var a = [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
             var b = [12, 5, 8, 1, 4].some(isBiggerThan10); // true
 
             console.log(a);
             console.log(b);
 
             // Arrow functions
 
             var c = [2, 5, 8, 1, 4].some(x => x > 10);     // false
             var d = [12, 5, 8, 1, 4].some(x => x > 10);    // true
 
             console.log(c);
             console.log(d);
 
             // some 和 includes 的不同，是 some 是帶條件的。(但不是篩選)
 
             var e = [12, 5, 8, 1, 4].includes(1);
             console.log(e); // true
 
             //arr.includes(searchElement[, fromIndex])
             // includes 的第二個參數，是從哪一個index開始找
             var f = [12, 5, 8, 1, 4].includes(12, 1);
             console.log(f); // false
 
         },
 
         //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
         doObjectKey() {
 
             //Object.keys() 回傳一個陣列，
             //陣列中的各元素為直屬於 obj ，對應可列舉屬性名的字串。
             //回傳結果的排序，與手動對物件屬性作迴圈迭代的結果排序相同。
 
             var arr = ['a', 'b', 'c'];
             console.log(Object.keys(arr)); // console: ['0', '1', '2']
 
             // 類似陣列的物件
             var obj = { 0: 'a', 1: 'b', 2: 'c' };
             console.log(Object.keys(obj)); // console: ['0', '1', '2']
 
             // 擁有隨機 key 排序，類似陣列的物件
             var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
             console.log(Object.keys(an_obj)); // console: ['2', '7', '100']
             // 會自動排序？
 
             console.log(Object.values(an_obj)); // console: ['b', 'a', 'c']
 
             // getFoo 不是可列舉的屬性
             var my_obj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
             my_obj.foo = 1;
             console.log(Object.keys(my_obj)); // console: ['foo']

            // 最後的這個我看不懂，但是我算了。
 
         }
 
     }
 
 }
 </script>

<template>
    <button @click="doArray_Some">Array_Some(= if even element)按我！</button>
    <button @click="doArray_Some2">承上，例子二</button>
    <button @click="doObjectKey">Object.keys按我！</button>
</template>