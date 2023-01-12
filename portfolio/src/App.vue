<template>
  <nav>
    <!-- <div>
      <img src="../src/assets/pfp.jpg" alt="myself" srcset="" />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/project">Project</router-link>
    <router-link to="/testimonials">Testimonials</router-link>
    <router-link to="/contact">Contact</router-link>
    </div> -->
   
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&family=Share+Tech+Mono&display=swap");

#app {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
}

/* nav {
  padding: 30px;
} */

nav a {
  color: rgb(69, 68, 68);
  text-decoration: none;
  padding: 4px 20px;
  font-size: 17px;
}

nav img {
  width: 5%;
  height: 5%;
  margin-left: 0;
  border-radius: 50%;
  float: left;
}

nav a:hover {
  background-color: rgba(128, 128, 128, 0.172);
  color: white;
  border-radius: 25px;
  border: solid 1px;
  border-color: grey;
}
/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
