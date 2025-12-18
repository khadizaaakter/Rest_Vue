<template>
  <HeaderMain />
  <div class="main-container">
    <div class="form-wrapper">
      <form>
        <!-- Title and Description -->
        <div class="form-header">
          <h2 class="form-title">Update Restaurant</h2>
        </div>

        <!-- Requester Information -->
        <div class="form-group">
          <label for="name" class="form-label">Restaurant Name*</label>
          <input type="text" name="name" class="form-input" required />
        </div>

        <div class="form-group">
          <label for="address" class="form-label">Address*</label>
          <input type="address" name="address" class="form-input" required />
        </div>

        <div class="form-group">
          <label for="contact" class="form-label">Contact*</label>
          <input
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="11"
            placeholder="01XXXXXXXXX"
            class="form-input"
            required
          />
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn">Save</button>
      </form>
    </div>
  </div>
  <FooterMain />
</template>
<script setup>
import HeaderMain from "./layouts/header-main.vue";
import FooterMain from "./layouts/footer-main.vue";
</script>
<style scoped>
/* General Body and Font Styles */
body {
  font-family: "Inter", sans-serif;
  background-color: #f3f4f6;
  margin: 0;
}

/* Main container for centering the form */
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  min-height: 100vh;
  box-sizing: border-box;
}

/* Form wrapper/card */
.form-wrapper {
  width: 100%;
  max-width: 42rem; /* max-w-2xl */
  border-radius: 0.5rem; /* rounded-lg */
  background-color: white;
  padding: 2.5rem; /* p-10 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

/* Top image styling */
.form-image {
  margin-bottom: 1rem; /* mb-12 */
  width: 100%;
  border-radius: 0.5rem;
}

/* Header section for title and description */
.form-header {
  margin-bottom: 2rem; /* mb-8 */
  text-align: center;
}

.form-title {
  font-size: 1.875rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
}

.form-description {
  margin-top: 0.5rem; /* mt-2 */
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* text-gray-600 */
  line-height: 1.5;
}

/* Container for each form field group */
.form-group {
  margin-bottom: 1.5rem; /* mb-6 */
}

/* Form labels */
.form-label {
  display: block;
  margin-bottom: 0.5rem; /* mb-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #4b5563; /* text-gray-600 */
}

/* Common styles for input, select, and textarea */
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid #d1d5db; /* border-gray-300 */
  padding: 0.75rem; /* p-3 */
  font-size: 0.875rem; /* text-sm */
  color: #1f2937; /* text-gray-800 */
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #6366f1; /* focus:border-indigo-500 */
  box-shadow: 0 0 0 1px #6366f1; /* focus:ring-1 focus:ring-indigo-500 */
  outline: none;
}

/* Consent Checkbox Group */
.consent-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.form-checkbox {
  height: 1rem;
  width: 1rem;
  color: #4f46e5;
}

.consent-label {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  border-radius: 0.375rem;
  background-color: #4f46e5;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.submit-btn:hover {
  background-color: #4338ca;
}

.submit-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
}

/* Mobile Responsive Styles */
@media (max-width: 640px) {
  .main-container {
    padding: 1rem;
  }
  .form-wrapper {
    padding: 1.5rem;
  }
  .form-title {
    font-size: 1.5rem;
  }
}
</style>
