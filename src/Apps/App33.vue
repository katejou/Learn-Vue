<!-- 
https://gist.github.com/DanDiplo/30528387da41332ff22b
 -->

 <script>
 export default {
 
     data() {
         return {
             gridColumns: ['name', 'age'],
             people: [
                 { name: "John", age: 20 },
                 { name: "Mary", age: 35 },
                 { name: "Arthur", age: 78 },
                 { name: "Mike", age: 27 },
                 { name: "Judy", age: 42 },
                 { name: "Tim", age: 8 }
             ]
         }
     },
 
     // Arrow function 是屬於 ES6 的
     methods: {
         // filter is equivalent to Where
         do_filter() {
 
             var youngsters = this.people.filter(function (item) {
                 return item.age < 30;
             });
 
             const youngPeople = this.people.filter(p => p.age < 30);
 
             console.log("People younger than 30: ", youngsters);
             console.log("People younger than 30: ", youngPeople);
 
         },
 
         // map is equivalent to Select
         do_map() {
 
             var names = this.people.map(function (item) {
                 return item.name;
             });
 
             const justNames = this.people.map(p => p.name);
 
             console.log("Just the names of people: ", names);
             console.log("Just the names of people: ", justNames);
         },
 
         // every is equivalent to All
         do_every() {
 
             var allUnder40 = this.people.every(function (item) {
                 return item.age < 40;
             });
             const peopleUnder40 = this.people.every(p => p.age < 40);
 
             console.log("Are all people under 40? ", allUnder40); // false
             console.log("Are all people under 40? ", peopleUnder40); // false
 
         },
 
         // some is equivalent to Any
         do_some() {
 
             var anyUnder30 = this.people.some(function (item) {
                 return item.age < 30;
             });
 
             const areAnyUnder30 = this.people.some(p => p.age < 30);
 
             console.log("Are any people under 30? ", anyUnder30); // true
             console.log("Are any people under 30? ", areAnyUnder30); // true
 
         },
 
         // reduce is "kinda" equivalent to Aggregate (and also can be used to Sum)
         do_reduce() {
 
             var aggregate = this.people.reduce(function (item1, item2) {
                 return { name: '', age: item1.age + item2.age };
             }); // 所以初始值不設，就是 0
 
             const aggregatedAge = this.people.reduce((p1, p2) => {
                 return { name: '', age: p1.age + p2.age }
             });
 
             console.log("Aggregate age : ", aggregate.age);  // { age: 210 }
             console.log("Aggregate age : ", aggregatedAge.age);  // { age: 210 }
         },
 
         // sort is "kinda" like OrderBy (but it sorts the array in place?)
         do_sort() {
 
             var ByName = this.people.sort(function (a, b) {
                 return a.name < b.name ? -1 : 1;
             })
             // 1往右，-1往左的意思？ a 是 pre , b 是 curr？
 
             //console.log("Ordered by name : ", ByName);
 
             //const ByAge = this.people.sort((p1, p2) => p1.age > p2.age ? 1 : -1);
 
             console.log("Ordered by name : ", ByName);
             //console.log("Ordered by age : ", ByAge);
 
             // https://zh.wikipedia.org/zh-tw/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95
             // 原地演算法 in-place algorithm
 
             // 為什麼 ByAge 和 ByName 會連動？
             // 因為 ByAge 和 ByName 都只是一個 Ref ，指向同一個Array。
 
             // 所以這個程式，是都跑完再印，而不是邊印邊跑的。
             // 合理…因為是靜態的程式嘛…動態的就不是這樣…(這兩個真的很難分)
 
             //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
             // Old way
             const cloneSheeps = this.people.slice();
             // ES6 way
             const cloneSheepsES6 = [...this.people];
 
             const ByAge = cloneSheeps.sort((p1, p2) => p1.age < p2.age ? -1 : 1);
             console.log("Ordered by age : ", ByAge);

             const ByAge2 = cloneSheepsES6.sort((p1, p2) => p1.age < p2.age ? -1 : 1);
             console.log("Ordered by age2 : ", ByAge2);

         },
 
         // and, of course, you can chain function calls 
         do_chain_func() {
 
             var namesOfPeopleOver30OrderedDesc = this.people
                 .filter(function (person) { return person.age > 30; })
                 .map(function (person) { return person.name; })
                 .sort(function (a, b) { return a > b ? 1 : -1; });
 
 
             const peepsOver30OrderedDesc = this.people
                 .filter(p => p.age > 30)
                 .map(p => p.name)
                 .sort((p1, p2) => p1 > p2 ? -1 : 1);
 
             //只取大於 30 的人，只取名字，以名字來排序。
             console.log("Chained ", namesOfPeopleOver30OrderedDesc);
             console.log("Chained ", peepsOver30OrderedDesc);
         }
 
     }
 
 }
 </script>

<template>

    <table>
        <thead>
            <tr>
                <th v-for="key in gridColumns">
                    {{ key }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in people">
                <td v-for="key in gridColumns">
                    {{ p[key] }}
                </td>
            </tr>
        </tbody>
    </table>

    <button @click="do_filter">do_filter</button>
    <button @click="do_map">do_map</button>
    <button @click="do_every">do_every</button>
    <button @click="do_some">do_some</button>
    <button @click="do_reduce">do_reduce</button>
    <button @click="do_sort">do_sort</button>
    <button @click="do_chain_func">do_chain_func</button>

</template>