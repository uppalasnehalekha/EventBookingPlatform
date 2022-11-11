<template>

  <b-navbar fixed="top" id="navbar" toggleable="sm">
    <b-navbar-brand class="heroText" href="/">IndiaBMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto">
        <b-nav-form class="d-flex align-items-center search-container mx-3">
          <input class="search expandright" id="searchright" type="search" name="q" placeholder="Search">
          <label class="button searchbutton" for="searchright">
            <BootstrapIcon
                icon="search"
            />
          </label>

        </b-nav-form>


        <b-nav-text class="heroText mx-3">
          <a href="/login" class="heroText text-decoration-none" >SignIn</a>
        </b-nav-text>

        <b-nav-text class="heroText mx-3">
          <a href="/register" class="heroText text-decoration-none">Register</a>
        </b-nav-text>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// import HomeComponent from './components/HomePage.vue'

export default {
  name: 'NavbarComponent'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top: 60px;*/
  color: #2c3e50;
}

.heroText {
  color: blue !important;
}

#navbar {
  border-bottom: 5px solid blue;
  /*top: 0;*/
  background-color: white;
  z-index: 100;
}


.search-container {
  position: relative;
  display: inline-block;
  margin: 4px 2px;
  /*height: 50px;*/
  /*width: 50px;*/
  vertical-align: bottom;
}


.searchbutton {
  position: absolute;
  font-size: 22px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: white;
  color: black;
}

.search {
  position: absolute;
  left: 49px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
  background-color: white;
  outline: none;
  border: none;
  padding: 0;
  width: 0;
  height: 100%;
  z-index: 10;
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
}

.search:focus {
  width: 363px; /* Bar width+1px */
  padding: 0 16px 0 0;
}

.expandright {
  left: auto;
  right: 49px; /* Button width-1px */
}

.expandright:focus {
  padding: 0 0 0 16px;
}

</style>
