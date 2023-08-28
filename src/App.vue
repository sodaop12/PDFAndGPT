<template>
  <nav>
    <router-link to="/">GPT Page</router-link> |
    <router-link to="/about">Bard Page</router-link> |
    <router-link to= "/GPTdes"> GPT des  </router-link> | 
    <router-link to= "/Barddes"> Bard des  </router-link> |
      <router-link to= "/PDF"> PDF  </router-link> |
      <router-link to= "/PDF1"> PDF view </router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
