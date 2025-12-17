<template>
  <div class="main-page">
    <div class="card">
      <h1>Welcome to Food Mood 🍽️</h1>
      <p>Manage restaurants, update menus, and explore food experiences with ease.</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 600px;
  background: rgba(255, 255, 255, 0.08);
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  color: #ebf4f6;
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.card h1 {
  font-size: 28px;
  margin-bottom: 12px;
}

.card p {
  font-size: 15px;
  opacity: 0.85;
}
</style>
