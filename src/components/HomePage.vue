<template>

  <div class="banner">
    <MDBCarousel
        v-model="carousel5"
        :items="items5"
    />
  </div>

  <div class="mt-5 d-flex justify-content-center">
    <div class="col col-9 col-md-6 col-lg-3">
    <MDBInput
        v-model="search1"
        inputGroup
        :formOutline="false"
        wrapperClass="mb-3"
        placeholder="Start searching for your favorite events"
        aria-label="Search"
        aria-describedby="button-addon2">

      <b-button class="bg-white">
        <!--        <MDBIcon icon="search"/>-->
        <BootstrapIcon
            icon="search"
        />
      </b-button>
    </MDBInput>
    </div>
  </div>


  <b-container fluid class="p-5 ">
    <b-row class="justify-content-center">
      <b-col class="col col-6 col-md-4 col-lg-2 mb-3" v-for="image in images" :key="image.id">
        <b-link href="#">
        <b-img thumbnail fluid :src="image.src" alt="Image 1"></b-img>
        <span class="text-blue">
          <b>{{ image.caption }}</b>
        </span>
        </b-link>
      </b-col>
    </b-row>

    <b-row class="justify-content-center mt-4">
      <b-col class="h5">
        <b>Find more events and categories</b>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-2">
      <b-button class="bg-white border-0 w-25">
        <BootstrapIcon
            size="2x"
            icon="chevron-double-down"
        />
      </b-button>
    </b-row>
    <b-row class="justify-content-center mt-3">
      <b-col class="h5 text-blue ">
        <b>OR</b>
      </b-col>
    </b-row>

    <b-row class="justify-content-center mt-2">
      <b-button class="bg-blue border-0 col-12 col-md-6 col-lg-3" href="/create_event">
        + Add your own event >
      </b-button>
    </b-row>
  </b-container>


</template>
<script>
import {ref} from "vue";


export default {
  name: 'HomeComponent',
  components: {},

  setup() {
    const items5 = [
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
        alt: "...",
        label: "First slide label",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
        alt: "...",
        label: "Second slide label",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
        alt: "...",
        label: "Third slide label",
        caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    ];

    const images = [
      {
        id: 1,
        src: "https://picsum.photos/250/250/?image=54",
        caption: "Category 1"
      },
      {
        id: 2,
        src: "https://picsum.photos/250/250/?image=58",
        caption: "Category 2"
      },
      {
        id: 3,
        src: "https://picsum.photos/250/250/?image=59",
        caption: "Category 3"
      }
    ]
    const carousel5 = ref(0);
    const search1 = ref('');
    // const images = ref('');

    return {
      items5,
      carousel5,
      search1,
      images
    };
  }
};

</script>


<style scoped>
.banner {
  max-height: 350px;
}

.bg-white {
  background-color: white;
  color: blue;
}



.bg-white:hover {
  color: blue;
}



</style>