<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
    };
  },
};
</script>
