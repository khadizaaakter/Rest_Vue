<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">🍽️ Food Mood</div>

      <!-- Navigation -->
      <nav class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <router-link to="/update-restaurant">Update Restaurant</router-link>
        <a @click="logout" href="#">Logout</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import router from "@/router";

const logout = () => {
  localStorage.clear();
  router.push("/login");
};
</script>

<style scoped>
/* ===== Header Base ===== */
.header {
  width: 100%;
  background: linear-gradient(135deg, #85cbf3, #49c2eb, #0274a5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* ===== Layout Container ===== */
.header-container {
  max-width: 1200px;
  margin: auto;
  padding: 16px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===== Logo ===== */
.logo {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
}

/* ===== Navigation ===== */
.nav {
  display: flex;
  gap: 22px;
}

.nav a {
  position: relative;
  color: #ebf4f6;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 6px 4px;
  transition: all 0.3s ease;
  opacity: 0.85;
}

/* Hover underline animation */
.nav a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: #ebf4f6;
  transition: width 0.3s ease;
}

.nav a:hover {
  opacity: 1;
}

.nav a:hover::after {
  width: 100%;
}

/* Active link */
.nav a.active {
  opacity: 1;
  font-weight: 600;
}

.nav a.active::after {
  width: 100%;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 12px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
