<template>
  <div class="layout">
    <HeaderMain />

    <main class="content">
      <MainPage />
    </main>

    <FooterMain />
  </div>
</template>

<script setup>
import HeaderMain from "./header-main.vue";
import FooterMain from "./footer-main.vue";
// import MainPage from "./MainPage.vue";
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 40px 24px;
}
</style>
