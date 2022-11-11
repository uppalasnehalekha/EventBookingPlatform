<template>

  <NavbarComponent></NavbarComponent>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>

import NavbarComponent from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #2c3e50;
}

.carousel-item{
  max-height: 350px;
}
.form-control{
  border-color : blue;
}

.text-blue {
  color: blue;
}

.form-check-inline{
  text-align: left;
}
.bg-blue {
  background-color: blue !important;
  color: white !important;
}

.card {
  border: 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%);
}


</style>
