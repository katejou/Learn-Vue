
//https://ithelp.ithome.com.tw/articles/10274622


//#region  watch 和 computed 的差別 :

//computed 最大特點是必須回傳一個值，並且會把它緩存起來，當函式裏的依賴改變時，才會重新執行和求值。
//但 watch 與 methods 不會強制要求回傳一個值，它們只需執行動作，不一定要回傳值。
//watch 會偵測單一個值，當它有變化時就執行。
//至於 methods，只要呼叫它，它就會執行，
//但 computed 和 watch 則不是透過呼叫來執行。

//#endregion


//#region -------- computed --------

//computed 屬性的最明顯特點：

//1.當元件被創建時（created 生命週期），computed 函式會被建立和執行一次。
//  之後如果依賴沒有更新，就不會重新執行和求值，而是回傳之前緩存起來的值。
//見App25的例子。

//2.computed 的值只能被該 computed 函式修改，不能被其他方法修改，例如 this.某computed 函式 = 123 會報錯。
//見App25的例子。

//3.computed 的函式必須要回傳一個值。
//4.computed 的函式無法傳入參數。

//计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
//響應式依賴？意思是在一個 computed 函式裏，它所用到在 data 建立的資料。
//一旦這些資料有變化，這個 computed 函式就會被重新執行和求值。

// 以下 total 的依賴就是 this.price, this.quantity, this.discount。
//只要其中一樣有變化，都會重新執行 total，並回傳新的值：
// computed:{
//   total(){
//       return this.price * this.quantity * this.discount
//   }
// }
// 以下情況，如果 greeting 有變化，會否觸發 total？  
// computed:{
//   total(){
//       console.log(this.greeting)
//       return this.price * this.quantity * this.discount
//   }
// }
// 會。即使 greeting 並沒有用來計算 total，但它也是在 total 這個 computed 函式內
// ，因此也是其中一個依賴。
//再看一個例子，如果 quantity 有變化，以下會否觸發 total？
// let quantity = 1;
// computed:{
//     total(){
//         return this.price * quantity * this.discount
//     }
// }
//不會。因為 quantity 不是在 data 裏建立，
//Vue 不會偵察到 quantity 的變化。所以不會觸發 total。

//作為 computed 依賴的data，沒有真正的變化，即使一直被「給值」也不會觸動函式︰
//見 App25

//剛建立元件時，會印出 「我有被觸發了！」。num = 0
//然後，第一次按下按鈕後， num 變成 1，會印出「我有被觸發了！」。
//---- 但之後按按鈕，add 就不會再觸發，而「我有被觸發了！」這句也不會印出來。

//因為 computed 的運作原理只有 getter （取值）沒有 setter（存值）。
//因此 computed property 只是唯讀。
//見 App25

//#endregion --------- --------- 

// method 就是 method ，和其化程式語言一樣，沒有什麼好說的。傳入﹑回傳﹑被呼叫，沒有特別。
// method 和 computed 在某些情況下，同樣會在「沒有呼叫」的時候被觸發。

//#region --------- watch ---------




//#endregion --------- --------- 




