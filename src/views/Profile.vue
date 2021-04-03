<template>
  <div class="gray-background">
    <NavBar />
    <Profile style="margin-top: 1.3rem;" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Profile from "@/components/Profile/Profile.vue";

@Component({
  components: {
    NavBar,
    Profile
  }
})
export default class Home extends Vue {}
</script>
