<template>
  <header class="header">
    <div class="logo">
      <span class="company-name">K Waters</span>
    </div>
    <nav class="navigation">
      <div class="nav-links" v-show="!isMobileMenuOpen">
        <router-link
          to="/"
          class="nav-link"
          :class="{ active: route.path === '/' }"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="nav-link"
          :class="{ active: route.path === '/about' }"
          >About Us</router-link
        >
        <router-link
          to="/services"
          class="nav-link"
          :class="{ active: route.path === '/services' }"
          >Services</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          :class="{ active: route.path === '/contact' }"
          >Contact Us</router-link
        >
        <router-link
          to="/signin"
          class="nav-link"
          :class="{ active: route.path === '/sign-in' }"
          >Sign In</router-link
        >
      </div>
      <div class="mobile-menu-icon" @click="toggleMobileMenu">
        <span>&#9776;</span>
      </div>
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <router-link
          to="/"
          class="nav-link"
          @click="closeMobileMenu"
          :class="{ active: route.path === '/' }"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="nav-link"
          @click="closeMobileMenu"
          :class="{ active: route.path === '/about' }"
          >About Us</router-link
        >
        <router-link
          to="/services"
          class="nav-link"
          @click="closeMobileMenu"
          :class="{ active: route.path === '/services' }"
          >Services</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          @click="closeMobileMenu"
          :class="{ active: route.path === '/contact' }"
          >Contact Us</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const route = useRoute();
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #3498db;
  color: #fff;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
}

.company-name {
  margin-right: 10px;
}

.navigation {
  display: flex;
}

.nav-link {
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  font-family: "Nunito", sans-serif;
  transition: color 0.5s ease; /* Add a smooth transition effect on hover */
}

.nav-link:hover {
  text-decoration: underline;
  color: #ffd700;
}
.navigation {
  display: flex;
  align-items: center;
}

.mobile-menu-icon {
  display: none; /* Initially hide the mobile menu icon */
  cursor: pointer;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #3498db;
  border: 1px solid #fff;
  padding: 10px;
  z-index: 1;
}

@media only screen and (max-width: 768px) {
  .nav-links {
    display: none; /* Hide the desktop navigation links */
  }

  .mobile-menu-icon {
    display: block; /* Display the mobile menu icon for small screens */
    margin-left: auto; /* Push the icon to the right */
  }

  .mobile-menu {
    display: flex;
  }
}
</style>
