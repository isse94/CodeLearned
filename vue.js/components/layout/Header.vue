
// how we want our header to look like and then import it to app.vue

<template>
    <header class="header">
        <h1>TodoList</h1>
         <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- routerlink to.. instead of a href to link pages  -->
    </div>
    </header>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.header {
background: #333;
color: #fff;
text-align: center;
padding: 10px;
}

.header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
    
    
}


</style>