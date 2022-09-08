<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- <img src="https://www.svgrepo.com/show/90383/cloud.svg" class="flex items-center h-full scale-50 mr-0" /> -->
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          ><span class="text-blue-400 mr-1">Cloud </span>Careers</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5 text-gray-600 hover:text-black"
                >{{ menuItem.name }}</router-link
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
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Teams",
          url: "/",
        },
        {
          name: "Locations",
          url: "/",
        },
        {
          name: "Benefits",
          url: "/",
        },
        {
          name: "Jobs",
          url: "/jobs/results",
        },
        {
          name: "Students",
          url: "/",
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
