<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title fade-in">Welcome to K Waters</h1>
      <p class="hero-subtitle fade-in">
        Your Trusted Partner in Water Solutions
      </p>
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
  background-image: url("../assets/istockphoto-175426122-1024x1024.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: right;
  padding: 100px 20px;
  height: 25vw;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title,
.hero-subtitle {
  opacity: 0; /* Start with opacity set to 0 */
}

.fade-in {
  animation: fadeIn 1s ease forwards; /* Apply the fade-in animation */
}

@keyframes fadeIn {
  from {
    opacity: 0; /* Start from opacity 0 */
  }
  to {
    opacity: 1; /* End with opacity 1 */
  }
}
</style>
