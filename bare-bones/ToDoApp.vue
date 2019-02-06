<template>
  <ul id="todo_widget">
    <li class="header"><h2 class="title">My to do list</h2></li>
    <li class="new_item"><input ref="newItem" placeholder="Add a new task..." /> </li>
    <li class="button add"><button v-on:click="_handleAddItem">Add</button></li>
    <li class="button reset"><button v-on:click="_handleResetList">Reset</button></li>
    <li class="todo_item" v-for="(item, index) in list" :key="index"><input class="checkbox" type="checkbox" onclick="_handleUpdateDoneList"/>{{item}}</li>
    <li class="footer"> <button class="remove" onClick="_handleRemoveDoneItems">Remove</button></li>
  </ul>
</template>

<script>
export default {
  name: "ToDoApp",
  data() {
    return { 
              list: ['item1','item2'],
              doneList:[] 
           }
  },
  methods: {
    init() {
         
       },
    _handleAddItem() {
        },
    _handleUpdateDoneList(e) {
         },
    _handleRemoveDoneItems(e) {
    },
     _handleResetList() {
    }
  

  },
  mounted(){
    this.init()
  }
};

</script>

<style scoped>

/***************  Style sheet goes here   ***********/
</style>