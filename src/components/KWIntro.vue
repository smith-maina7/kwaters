<template>
  <section class="about-us">
    <div class="container">
      <div class="about-content">
        <h2 class="section-title">Discover Our Story</h2>

        <p>
          Kwaters was founded in 2020 by
          <span class="founder">Kennah Njeri</span> with a mission to provide
          clean water solutions to communities. We believe in ensuring access to
          safe and reliable water sources for all. With a dedicated team of 200
          employees, we have built a safe and healthy workplace environment. Our
          services are available to Nairobi residents and its environs.
        </p>

        <a href="/about" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* About Us Component */
.about-us {
  background-color: #f9f9f9;
  padding: 50px 0;
}
.about-content {
  text-align: center;
}
.about-content .section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.about-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
}
.about-content .btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.about-content .btn:hover {
  background-color: #0056b3;
}
.founder {
  font-weight: bold;
  font-style: italic;
  font-size: 1em;
  color: #171819; /* Or any other color that matches your design */
}
</style>
