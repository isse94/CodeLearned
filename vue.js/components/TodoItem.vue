
// need a new component (TodoItem.vue) for example if something is competed what happens 
// and adding styles to page, buttons etc.. 
<template>
    <!-- below styling page added etc.. 
     also binding class e.g. is completed on a condition (.completed) e.g. if todo is completed  
      --> 
    <div class="todo-item" 
    v-bind:class="{'is-complete':todo.completed}">
        <p>
               <!-- way of toggle compelete by adding an event  --> 
        <input type="checkbox" v-on:change="markComplete"> <!-- v-on change, click etc.. 
      also error because method markComplete not define therefore must define it in script export below  -->
        {{todo.title}} 
        <!-- want to delete todo's by emiting event with set parameters
        todo.id to which id we're deleting and then catch this in Todos.vue TodoItem component
         -->
        <button @click="$emit('del-todo', todo.id)" class="del"> x </button>
        </p>
        
    </div>
</template>

<script>
export default {
    name: "TodoItem", // name of component
    props: ["todo"],
    methods: { // method e.g. markComplete^ not define therefore must define HERE.
     markComplete() {
         this.todo.completed = !this.todo.completed; // will toggle between true n false of if todo is-complete (style applied therefore line put through todo)
     }
    }      
}
</script>

// scoped meaning just for this component
<style scoped>

.todo-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete {
    text-decoration: line-through;
}

.del{
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}

</style>