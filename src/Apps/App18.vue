<!--
We can create two-way bindings between state and form inputs using the v-model directive.
-->

<script>
export default {
  data() {
    return {
      text: 'Edit me',
      checked: true,
      checkedNames: ['Jack'],
      picked: 'One',
      selected: 'A',
      multiSelected: ['A']
    }
  }
}
</script>

<template>
  <h2>Text Input</h2>
  <input v-model="text"> {{ text }}

  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">Checked: {{ checked }}</label>

  <!--
    multiple checkboxes can bind to the same
    [array] v-model value !!!! <-- v-model這個很通人性的設計
  -->
  <h2>Multi Checkbox</h2>
  <input type="checkbox" 
  id="jack" value="Jack" 
  v-model="checkedNames">
  <label for="jack">
    <!-- 這個 label 是和 id 為 jack 的 check box 綁在一起，它們三個 chechbox 的 v-model 都綁在一個 array 上面 -->
    Jack
    </label>
    <!-- 使 Jack 這個 value 是預被勾選的。很通人性。 -->
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <p>Checked names: <pre>{{ checkedNames }}</pre></p>

  <h2>Radio</h2>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>

  <h2>Select</h2>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>

  <h2>Multi Select</h2>
  <select v-model="multiSelected" multiple style="width:100px">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ multiSelected }}</span>
</template>