<template>
  <NavbarComponent/>
    
  <router-view/>
  <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
// import HomeView from '@/components/Home.vue';
import NavbarComponent from "@/components/NavbarComponent.vue"

export default {
  components: {
    // HomeView,
    NavbarComponent,
    FooterComponent
  }
}
</script>


<style>

@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&family=Share+Tech+Mono&display=swap");


#app {
  margin: 0;
  padding: 0;
  font-family: "Share Tech Mono", monospace;
  text-align: center;
}

nav a {
  color: rgb(69, 68, 68);
  text-decoration: none;
  font-size: 17px;
}

nav a:hover {
  background-color: rgba(128, 128, 128, 0.172);
  color: white;
  border-radius: 25px;
  border: solid 1px;
  border-color: rgb(128, 128, 128);
}
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50; */
/* } */ 

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
