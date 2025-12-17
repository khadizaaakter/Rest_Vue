<template>
  <HeaderMain />
  <div>
    <h2>{{ restData }}</h2>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import HeaderMain from "./layouts/header-main.vue";
import axios from "axios";
import { ref } from "vue";
const router = useRouter();

const restData = ref([]);

const fetchRestaurant = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/resaurant`);
    restData.value = res.data;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
  }
};

onMounted(() => {
  const user = localStorage.getItem("userData");
  if (!user) {
    router.push("/");
  }
  fetchRestaurant();
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
