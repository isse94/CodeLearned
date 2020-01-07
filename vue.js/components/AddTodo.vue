
// 

<template>
    <div>
        <!-- in our form we need an event (something to happen with we add to input title n click submit) 
        e.g. @submit method.. NOT "$@emit" as we want to first construct todo then send that then emit it-->
        <form @submit="addTodo" >
            <!-- v-vmodel allow for our title array to pass through -->
            <input type="text" v-model="title" name="title" placeholder="Add 
            Todo...">
            <input type="submit" value="Submit" class="btn" >
        </form>
    </div>
</template>


<script>
//import uuid from 'uuid';//imports id generated from terminal
//^ NOT NEEDED NOW AS JSON GIVES US NEW ID AUTOMATICALLY WHEN NEW RESOURCE IS CREATED
export default {
    name: "AddTodo",
    // add functionality to our Add todo therefore create data to add more e.g. title as we have one already
    data(){
        return {
            title: ''
        }
    }, 
    methods: {
        // we want to construct an object
        addTodo(e) { //pass in event parameter and call e.perent default() because dont want form to submit to an actual file. 
          e.preventDefault();
          const  newTodo = {
          // id needs to be unique..(in terminal create id on the fly)
          //id: uuid.v4(), //generates unique id .. NOT NEEDED NOW AS JSON GIVES US NEW ID AUTOMATICALLY WHEN NEW RESOURCE IS CREATED
          title: this.title, // data in title bounded by input title (there whatever user enters)
          completed: false // always false when we first add a todo.
          }
          //send up parent
          this.$emit('add-todo', newTodo); //created name is add-todo with the parameters newTodo
        this.title = '';
        }
    }
}
</script>

<style scoped>

form {
display: flex;
}
input [type="text"]{
    flex:10;
    padding: 5px;
}

input [type="submit"]{
    flex:2;

}


</style>
