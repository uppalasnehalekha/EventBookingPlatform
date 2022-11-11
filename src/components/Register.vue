<template>
  <b-container class="pt-5 d-flex justify-content-center">

    <MDBCard class=" col-12 col-md-6 col-lg-4">
      <MDBCardBody>
        <b-row class="pb-2 d-flex justify-content-center text-blue">
          <b>Register</b>
        </b-row>
        <form>
          <!-- Name input -->
          <MDBInput
              type="text"
              placeholder="Name"
              id="form7RegisterName"
              v-model="form7RegisterName"
              wrapperClass="mb-4"
          />

          <!-- Username input -->
          <MDBInput
              type="text"
              placeholder="Username"
              id="form7RegisterUsername"
              v-model="form7RegisterUsername"
              wrapperClass="mb-4"
          />

          <!-- Email input -->
          <MDBInput
              type="email"
              placeholder="Email"
              id="form7RegisterEmail"
              v-model="form7RegisterEmail"
              wrapperClass="mb-4"
          />

          <!-- Password input -->
          <MDBInput
              type="password"
              placeholder="Password"
              id="form7RegisterPassword"
              v-model="form7RegisterPassword"
              wrapperClass="mb-4"
          />

          <!-- Repeat Password input -->
          <MDBInput
              type="password"
              placeholder="Confirm password"
              id="form7RegisterPasswordRepeat"
              v-model="form7RegisterPasswordRepeat"
              wrapperClass="mb-4"
          />

          <!-- Checkbox -->
          <MDBCheckbox
              label="I have read and agree to the terms"
              id="form7RegsiterTermsCheck"
              v-model="form7RegsiterTermsCheck"
              wrapperClass="d-flex justify-content-center mb-4"
          />

          <!-- 2 column grid layout for inline styling -->

          <!-- Submit button -->
          <b-button class="bg-blue w-75 " color="primary" block> Register</b-button>
        </form>
      </MDBCardBody>
    </MDBCard>
  </b-container>
</template>

<script>
export default {
  name: "RegisterComponent"
}
</script>

<style scoped>

</style>