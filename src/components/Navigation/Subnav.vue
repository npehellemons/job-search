<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="isOnJobsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3 text-gray-600" />
        <span class="text-gray-600"> <span class="text-brand-green-1">1633</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  data() {
    return {
      isOnJobsPage: true,
    }
  }
};
</script>

<style scoped></style>
