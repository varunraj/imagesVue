<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img
        v-for="image in allImages"
        :key="image.id"
        :src="image.link"
        class="ui medium rounded image"
      />
    </div>
    <div v-else>
      <p>You need to be logged in to see the images.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn']),
  },
  methods: {
    ...mapActions(['fetchImages']),
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0px;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
