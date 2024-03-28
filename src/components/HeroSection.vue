<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to K Waters</h1>
      <p class="hero-subtitle">Your Trusted Partner in Water Solutions</p>
      <!-- You can add additional content or buttons here -->
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  background-image: url("../assets/tap.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: left;
  padding: 100px 20px; /* Adjust the padding based on your design */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.2em;
}
</style>
