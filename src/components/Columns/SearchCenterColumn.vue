<template>
  <div>
    <User />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import User from "@/components/Cards/User.vue";

export default Vue.extend({
  components: {
    User
  }
});
</script>
