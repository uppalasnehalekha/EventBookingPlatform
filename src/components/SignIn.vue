
<template>
  <b-container class="pt-5 d-flex justify-content-center">

    <MDBCard class=" col-12 col-md-6 col-lg-4">
      <MDBCardBody>
        <b-row class="pb-2 d-flex justify-content-center text-blue">
          <b>Sign In</b>
        </b-row>
        <form>
          <!-- Email input -->
          <MDBInput
              type="email"
              placeholder="Email address"
              id="form1Email"
              v-model="form1Email"
              wrapperClass="mb-4"
          />
          <!-- Password input -->
          <MDBInput
              type="password"
              placeholder="Password"
              id="form1Password"
              v-model="form1Password"
              wrapperClass="mb-4"
          />
          <!-- 2 column grid layout for inline styling -->
          <MDBRow class="mb-4">
            <MDBCol class="d-flex justify-content-center">
              <!-- Checkbox -->
              <MDBCheckbox
                  label="Remember me"
                  id="form1LoginCheck"
                  v-model="form1LoginCheck"
                  wrapperClass="mb-3 mb-md-0"
              />
            </MDBCol>
            <MDBCol>
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>
          <!-- Submit button -->
          <b-button class="bg-blue w-75 " color="primary" block> Sign in</b-button>
        </form>
      </MDBCardBody>
    </MDBCard>
  </b-container>
</template>


<script>

// import 'mdb-vue-ui-kit/css/mdb.min.css';

// import {ref} from "vue";

// const form1Email = ref("");
// const form1Password = ref("");
// const form1LoginCheck = ref(true);

export default {
  name: "SignIn"
}


</script>

<style scoped>
/*@import "mdb-vue-ui-kit/css/mdb.min.css";*/

</style>