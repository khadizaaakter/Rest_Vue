<template>
  <HeaderMain />
  <div class="main-container">
    <h2>Restaurant List</h2>
    <table class="custom-table">
      <thead>
        <tr>
          <th>SL</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in restData" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item?.name }}</td>
          <td>{{ item?.address }}</td>
          <td>{{ item?.contact }}</td>
        </tr>

        <!-- No data state -->
        <tr v-if="!restData || restData.length === 0">
          <td colspan="4" class="no-data">No data found</td>
        </tr>
      </tbody>
    </table>
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
.main-container {
  max-width: 1200px;
  margin: auto;
  padding: 16px 28px;
  align-items: center;
  justify-content: space-between;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  font-family: "Inter", sans-serif;
}

/* Header */
.custom-table thead {
  background: linear-gradient(135deg, #6366f1, #06b6d4);
}

.custom-table th {
  padding: 14px 16px;
  text-align: left;
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
}

/* Body */
.custom-table td {
  padding: 14px 16px;
  font-size: 14px;
  color: #1f2933;
  border-bottom: 1px solid #e5e7eb;
}

/* Zebra rows */
.custom-table tbody tr:nth-child(even) {
  background: #f9fafb;
}

/* Hover effect */
.custom-table tbody tr:hover {
  background: #eef2ff;
  transition: background 0.25s ease;
}

/* No data */
.no-data {
  text-align: center;
  padding: 20px;
  color: #6b7280;
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .custom-table th,
  .custom-table td {
    padding: 10px;
    font-size: 13px;
  }
}
</style>
