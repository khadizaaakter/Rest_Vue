<template>
  <HeaderMain />
  <div><h2>Home</h2></div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import HeaderMain from "./layouts/header-main.vue";
const router = useRouter();

onMounted(() => {
  const user = localStorage.getItem("userData");
  if (!user) {
    router.push("/");
  }
});
</script>
<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background: #f0f2f5;
}
</style>
