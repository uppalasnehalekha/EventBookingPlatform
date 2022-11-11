<template>

  <b-container class="container-fluid ">
    <b-row class="pt-3 d-flex justify-content-center text-blue">
      <b>Add new event</b>
    </b-row>
    <b-row class="mt-4 d-flex justify-content-around">
      <b-col class="col-12 col-md-6 col-lg-5 ">
        <b-row class="w-100">
          <b-form-input placeholder="Title">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-textarea rows="6" placeholder="Description (200 words)">
          </b-form-textarea>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input type="date">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input type="time">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input type="number" step=".01" placeholder="Registration fee">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input class="position-relative z-depth-0" type="text" placeholder="location">
          </b-form-input>
          <BootstrapIcon
              class="position-absolute z-depth-5 text-black"
              variant="dark"
              icon="pin-map"
          />
        </b-row>
      </b-col>
      <b-col class="col-12 col-md-6 col-lg-5 ">
        <b-row class="w-100">
          <b-form-input placeholder="Maximum Registrations">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input placeholder="Age Restrictions">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-1">
          <b-form-checkbox switch inline >
            ID Required
          </b-form-checkbox>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input placeholder="Contact Information">
          </b-form-input>
        </b-row>
        <b-row class="w-100 mt-3  ">
          <b-col class="col-4 p-0 m-0 align-items-center d-flex">
              <b>Event Poster</b>
          </b-col  >
          <b-col class="col-8 p-0 m-0">
            <MDBFile v-model="files1" />
          </b-col>

        </b-row>
        <b-row class="w-100 mt-3  ">
          <b-col class="col-4 p-0 m-0 align-items-center d-flex">
            <b>Gallery</b>
          </b-col  >
          <b-col class="col-8 p-0 m-0">
            <MDBFile v-model="files2" />
          </b-col>
        </b-row>
        <b-row class="w-100 mt-3">
          <b-form-input placeholder="Categories">
          </b-form-input>
        </b-row>
        <b-row class="justify-content-center mt-5 pe-4">
          <b-button class="bg-blue border-0 w-100">
            Create Event
          </b-button>
        </b-row>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
  name: "CreateEvent",
}
</script>

<style scoped>

</style>