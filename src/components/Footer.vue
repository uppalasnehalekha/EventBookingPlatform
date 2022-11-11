<template>
  <b-navbar fixed="bottom" id="footer" toggleable="sm" class="p-0">
    <b-row class="d-flex justify-content-center w-100">
      <b-col>
        <small>@ 2022 IndiaBMS</small>
      </b-col>
    </b-row>
  </b-navbar>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
#footer {
  border-top: 3px solid blue;
  /*top: 0;*/
  background-color: white;
  z-index: 100;
}
</style>