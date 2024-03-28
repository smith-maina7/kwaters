<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/signin">Sign In</router-link></li>
        </ul>
      </nav>
      <div class="social-media-icons">
        <a
          href="https://www.facebook.com/KWaters"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a
          href="https://twitter.com/KWaters"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          href="https://www.instagram.com/KWaters"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
    </div>
    <p class="copyright">© 2024 KWaters. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 30px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically */
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav ul li {
  display: inline-block;
  margin-right: 20px;
}

.footer-nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.footer-nav ul li a:hover {
  text-decoration: underline;
}

.social-media-icons {
  display: flex; /* Change to flex layout */
  align-items: center; /* Align items vertically */
  margin-top: 10px; /* Add space between social media icons and navigation links */
}

.social-media-icons a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 15px; /* Add space between social media icons */
  transition: color 0.3s ease;
}

.social-media-icons a:last-child {
  margin-right: 0; /* Remove margin from last social media icon */
}

.social-media-icons a:hover {
  color: #ccc;
}

.copyright {
  text-align: center;
  margin-top: 5px;
  font-size: 0.8rem;
}
</style>
