<template>
  <div class="slides">
    <div
      class="slides-inner"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="slide in slides" :key="slide.id" class="slide">
        <img :src="slide.src" alt="Slide" />
      </div>
    </div>
  </div>
</template>

<script setup>
const slides = [
  { src: require("../assets/Plant/Plant.jpg"), id: 1 },
  { src: require("../assets/Plant/plant2.jpg"), id: 2 },
  { src: require("../assets/Plant/plant3.jpg"), id: 3 },
];

let currentIndex = 0;

// Function to advance to the next slide
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
};

// Automatically advance to the next slide every 5 seconds
setInterval(nextSlide, 5000);
</script>

<style scoped>
.slides {
  width: 100vw; /* Set the width to occupy the full viewport width */
  height: 100vh; /* Set the height to occupy the full viewport height */
  overflow: hidden; /* Hide overflow to prevent scrollbar */
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
  object-fit: cover; /* Ensure the images cover the entire slide */
}
</style>
