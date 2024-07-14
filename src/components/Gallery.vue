<template>
  <section class="gallery" id="gallery">
    <h2>Nossa Galeria</h2>
    <div class="gallery-container">
      <img :src="currentImage" :alt="'Image ' + (currentIndex + 1)" />
      <div class="btn_next_prev">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  </section>
</template>

<script>
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import image1 from "@/assets/gallery/image1.jpg";
import image2 from "@/assets/gallery/image2.jpg";
import image3 from "@/assets/gallery/image3.jpg";
import image4 from "@/assets/gallery/image4.jpg";

export default {
  name: "Gallery",
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      images: [image1, image2, image3, image4],
      currentIndex: 0,
    };
  },
    computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },

};
</script>

<style scoped>
.gallery {
  padding: 6rem;
  background: #fff;
  height: 65vh;
}

.gallery h2 {
  text-align: center;
  font-size: 2.5em;
}

.gallery-container {
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
}
.gallery-container img{
  width: 30%;

}
.gallery-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-button {
  background-color: #ff5100;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
}
.nav-button:hover {
  background-color: #e04a00;
}
.gallery-grid {
  display: flex;
  justify-content: center;
}
.gallery-grid img {
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 10px;
}
.btn_next_prev {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 1.5rem;
}

@media (max-width: 768px) {
  .gallery {
    padding: 0;
     height: 60vh;
     margin-top: 6rem;
  }
  .gallery h2 {
    font-size: 2em;
  }

  .gallery img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
    margin: 0 20px;
  }
  .gallery-container {
    text-align: center;
    margin-top: 3rem;
  }
  .gallery-container img{
  width: 80%;

}

  .gallery h2 {
    font-size: 2.5em;
  }

  .btn_next_prev {
    margin-bottom: 4rem;
  }

  .service-card {
    padding: 12px;
  }

  .gallery img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
    margin: 0 20px;
  }
}
</style>
