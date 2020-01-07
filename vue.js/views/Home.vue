// what we want the app to do / to be and what it will consist of

<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- catch Add emit we made in AddTodo below -->
    <AddTodo v-on:add-todo="addTodo" />
    <!-- will have Todos embedd -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <!-- v-bind will will get todos array 
    (data below) into Todos component (called it todo's n passes in "todos"
     data) and that is passed in as a props therefore in Todo.vue create props:[] ...
    - v-on:del-todo=".. will call function deleteTodo n allow us to delete todo's as we emit in TodoItem then in Todos previously...-->
  </div>
</template>

<script>
import Todos from "../components/Todos";
//import Header from "../components/layout/Header";
import AddTodo from "../components/AddTodo";
import axios from 'axios';
export default {
  name: "home", // name of component
  components: {
  //  Header, //components associated as it was imported
    Todos, // components associated as it was imported
    AddTodo // components associated as it was imported
  },
  //  data is function that returns an object
  data() {
    return {
      todos: [
        // array of objects:
        //    { id: 1,
        //     title: "Todo one",
        //     completed: false //completed is a bullion value
        //  },
        //   { id: 2,
        //     title: "Todo two",
        //     completed: true
        //  },
        //  { id: 3,
        //     title: "Todo three",
        //     completed: false
        //  }
      ]
    };
  },
  methods: {
    // method e.g. DeleteTodo^ not defined therefore must define HERE.
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //`` so we can add variable with id
     // .then(res => this.todos = this.todos.filter(todo => todo.id !== id )) // we get a promise therefore handle promise with .then() & .catch
    //.catch(err => console.log(err));

      // to delete it.. set this todos n take the current todos n filter (loops through like a foreach does but you can a condition and it will return an array based on that condition)...
      //.. therefore condion is we want everything except that id we chose therefore todo.id is not = the id that is passed in HERE.
      // therefore we are filtering it out
      //if we refresh it will comeback as we only have front-end no back-end language
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    //addTodo whihc is going to take in a new object
    AddTodo(newTodo) {
     const { title, completed } = newTodo;  //destructuring to pull out the following from newTodo list.
     axios.post('https://jsonplaceholder.typicode.com/todos', {
       title,
       completed
     })        // need to make post request & add another parameter with the data that we r sending
     .then(res => this.todos = [...this.todos, res.data]) //spread operater which will copy whats already in todo's and add our newTodo ..NOW USE res.data instead of newTodo
     //..because if you make a post request to http.. it gives you back that todo + the id it creates for u
     //.catch(err => console.log(err));
        //^ will send a promise back therefore .then & .catch
  
    }
  }, 
  created() { // method called created.. which fires off as soon as component loads
  axios.get ('https://jsonplaceholder.typicode.com/todos?_limit=5') //?_limit=5 -- json allows us to put a limit on list todos collected
  .then(res => this.todos = res.data ) // we get a promise therefore handle promise with .then() & .catch
  // => we will set this.todo to res.data
  // therefore we are fill the data return todos array^ and filling it with what we get back from request when page laods 
  //.catch(err => console.log(err));
  }
};
</script>

<style>
// // where your global styling will be.
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.4;
}
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.btn {
  display: -moz-inline-box;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>

