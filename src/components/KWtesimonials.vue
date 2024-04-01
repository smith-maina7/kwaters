<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonial-cards" ref="testimonialCards">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img
                src="../assets/testimonirails/brooke-cagle-NoRsyXmHGpI-unsplash.jpg"
                alt="Brooke-Cagle"
              />
            </div>
            <div class="testimonial-message">
              <p>
                "KWaters has revolutionized the way I think about water
                solutions. Their expertise and dedication are unmatched!"
              </p>
              <p>- Brooke Cagle</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img
                src="../assets/testimonirails//conner-ching-7ACuT0u-DoA-unsplash.jpg"
                alt="Conner-Ching"
              />
            </div>
            <div class="testimonial-message">
              <p>
                "I've been a loyal customer of KWaters for years. Their
                commitment to quality and sustainability is truly commendable."
              </p>
              <p>- Conner Ching</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img
                src="../assets/testimonirails/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
                alt="Jake Nackos"
              />
            </div>
            <div class="testimonial-message">
              <p>
                "Being a mom of two it is important for me that my childred are
                drinking safe and clean water, I am happy that KWaters does this
                for me"
              </p>
              <p>- Jake Nackos</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img
                src="../assets/testimonirails/terricks-noah-QhyzMkkbjZU-unsplash (1).jpg"
                alt="Terry Noah"
              />
            </div>
            <div class="testimonial-message">
              <p>
                "As a business woman I always want the best for my emplolyees
                and KWaters allows me to do just that."
              </p>
              <p>- Terry Noah</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img
                src="../assets/testimonirails/african-american-man-wearing-round-glasses-denim-shirt.jpg"
                alt="Ben Adams"
              />
            </div>
            <div class="testimonial-message">
              <p>
                "I have worked at KWaters for three years and I can confidently
                say that KWaters has provided a safe and productive way to
                provide for my familey."
              </p>
              <p>- Ben Adams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const testimonialCards = ref(null);

onMounted(() => {
  setTimeout(moveCards, 15000); // Call moveCards function after 15 seconds
});

function moveCards() {
  if (testimonialCards.value) {
    const cards = testimonialCards.value.children;
    const containerWidth = testimonialCards.value.offsetWidth;

    // Loop through each testimonial card and move it to the right
    for (let card of cards) {
      const currentPosition = parseFloat(getComputedStyle(card).left);
      const newPosition = currentPosition + containerWidth + 20; // Move one card width + margin
      card.style.transition = "left 1s";
      card.style.left = newPosition + "px";
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
}

.testimonial-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.testimonial-card {
  width: 380px; /* Adjusted width */
  height: auto; /* Adjusted height */
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #ccc; /* Add border around the card */
}

.testimonial-content {
  display: flex;
  flex-direction: column; /* Adjusted flex direction */
}

.testimonial-message {
  flex: 1;
  margin: 20px; /* Adjusted margin */
}

.testimonial-image {
  width: 100%; /* Adjusted width */
  height: 220px; /* Adjusted height */
  overflow: hidden;
  border-bottom: 2px solid #ccc; /* Add border at the bottom of the image */
}

.testimonial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
