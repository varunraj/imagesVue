<template>
  <div>Logging in...</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  created() {
    const hash = window.location.hash;
    this.finalizeLogin(hash);
  },
  methods: {
    ...mapActions(['finalizeLogin']),
  },
};
</script>
