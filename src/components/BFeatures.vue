<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">Benefits & Features</h2>
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>Fast Resolution for Water Meter Issues</h3>
          <p>
            Kwaters offers expedited solutions for water meter vandalism or
            malfunctions, ensuring minimal downtime and disruption in water
            supply.
          </p>
        </div>
      </div>
      <!-- Repeat the feature cards for other points -->
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>Secure Payment Systems:</h3>
          <p>
            Kwaters prioritizes the security of payment transactions, offering
            encrypted and secure payment methods to safeguard customer data.
          </p>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>Reliable Water Solutions:</h3>
          <p>
            Customers can rely on Kwaters for consistent and uninterrupted
            access to clean water, backed by advanced infrastructure and
            technology..
          </p>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>24/7 Customer Support:</h3>
          <p>
            Kwaters provides round-the-clock customer support, ensuring prompt
            assistance and resolution of inquiries or concerns.
          </p>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>Efficient Leak Detection:</h3>
          <p>
            With advanced leak detection systems, Kwaters quickly identifies and
            addresses leaks in the water supply network, preventing water
            wastage and minimizing environmental impact.
          </p>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>Transparent Billing:</h3>
          <p>
            Kwaters provides transparent and detailed billing statements,
            empowering customers with clear insights into their water usage and
            associated charges.
          </p>
        </div>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="feature-details">
          <h3>Community Engagement Programs:</h3>
          <p>
            Kwaters actively engages with local communities through educational
            programs and initiatives, raising awareness about water conservation
            and promoting responsible usage.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script setup needed for this component
</script>

<style scoped>
.features {
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

.feature-card {
  display: flex;
  margin-bottom: 30px;
}

.feature-icon {
  flex: 0 0 80px; /* Fixed width for icon */
  font-size: 2rem;
  margin-right: 20px;
}

.feature-icon i {
  color: #007bff; /* Adjust color */
}

.feature-details h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.feature-details p {
  font-size: 1rem;
}
</style>
