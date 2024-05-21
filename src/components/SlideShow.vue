<template>
  <div class="slides">
    <div
      class="slides-inner"
      :style="{ transform: `translateX(-${currentIndex.value * 100}%)` }"
    >
      <div v-for="slide in slides" :key="slide.id" class="slide">
        <img :src="slide.src" alt="Slide" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const slides = [
  { src: require("../assets/Plant/Plant.jpg"), id: 1 },
  { src: require("../assets/Plant/plant2.jpg"), id: 2 },
  { src: require("../assets/Plant/plant3.jpg"), id: 3 },
];

const currentIndex = ref(0);

// Function to advance to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

// Automatically advance to the next slide every 5 seconds
onMounted(() => {
  nextTick(() => {
    setInterval(nextSlide, 5000);
  });
});
</script>

<style scoped>
/* Adjust the slides container to account for the navigation bar */
.slides {
  width: 99vw; /* Set the width to occupy the full viewport width */
  overflow: hidden; /* Hide overflow to prevent scrollbar */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.slides-inner {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Add transition effect for smooth sliding */
}

.slide {
  flex: 0 0 100vw; /* Each slide occupies the full viewport width */
}

.slide img {
  width: 100%;
  height: 100%; /* Make the images occupy the full height of the slides */
  object-fit: contain; /* Ensure the images are fully visible within the slides */
}
</style>
