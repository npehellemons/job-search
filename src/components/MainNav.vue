<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- <img src="https://www.svgrepo.com/show/90383/cloud.svg" class="flex items-center h-full scale-50 mr-0" /> -->
        <a :href="url" class="flex items-center h-full text-xl text-blue-400">{{
          company.firstName
        }}</a>
        <a
          :href="url"
          class="flex items-center h-full ml-1 text-xl text-gray-500"
          >{{ company.lastName }}</a
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a
                :href="menuItem.url"
                class="flex items-center h-full py-2.5 text-gray-600 hover:text-black"
                >{{ menuItem.name }}</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <action-button
            v-if="!isLoggedIn"
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="loginUser"
          />
          <profile-image v-else data-test="profile-image" />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import Subnav from "@/components/Subnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: {
        firstName: "Cloud ",
        lastName: "Careers",
      },
      url: "https://careers.google.com",
      menuItems: [
        {
          name: "Teams",
          url: "https://careers.google.com/teams",
        },
        {
          name: "Locations",
          url: "https://careers.google.com/locations",
        },
        {
          name: "Benefits",
          url: "https://careers.google.com/benefits",
        },
        {
          name: "Jobs",
          url: "https://careers.google.com/jobs",
        },
        {
          name: "Students",
          url: "https://careers.google.com/students",
        },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
