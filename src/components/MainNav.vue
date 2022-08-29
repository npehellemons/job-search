<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m-0 list-none">
          <li v-for="menuItem in menuItems" :key="menuItem.name" class="h-full ml-9 first:ml-0">
            <a :href="menuItem.url" class="flex items-center h-full py-2.5">{{ menuItem.name }}</a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Cloud Careers",
      url: "https://careers.google.com",
      menuItems: [
        {
          name: "Teams",
          url: "https://careers.google.com/teams"
        },
        {
          name: "Locations",
          url: "https://careers.google.com/locations"
        },
        {
          name: "Benefits",
          url: "https://careers.google.com/benefits"
        },
        {
          name: "Jobs",
          url: "https://careers.google.com/jobs"
        },
        {
          name: "Students",
          url: "https://careers.google.com/students"
        }
      ]
    };
  },
};
</script>
