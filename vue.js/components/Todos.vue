// //created seperate component (Todos.vue) to display the todos etc.. on app

<template>
  <div>
      <!-- "todo in todos" can change name of todo but 
      not todos as todos pertains to the props v-that are passed in.
      need a unique key so you don't get errors therefore vbind the key and 
      give it a unique id-->
      <div v-bind:key="todo.id" v-for="todo in todos"> 
          <!-- outputed TodoItem by for importing it (see below) 
          and show the actual data by vbind the div above ^ todo 
          which will pass the loop into TodoItem
          and also make a prop in TodoItem for it to work -->
          <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />  
          <!-- ^ emit again to app.vue and also now catch this app.vue  -->
      </div>

      </div> 
</template>

<script>
import TodoItem from './TodoItem.vue'; // import TodoItem

export default {
    name: "Todos" , // name of component
    components: {
        TodoItem // components associated as it was imported
    } ,
    props: ["todos"] // this an Array therefore want to loop through them using v-for ^ 
}

</script>
// scoped meaning just for this component
<style scoped> 

</style>