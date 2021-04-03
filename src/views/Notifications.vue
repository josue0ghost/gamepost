<template>
  <div class="gray-background">
    <NavBar />
    <Notifications style="margin-top: 1.3rem;" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Notifications from "@/components/Notifications/Notifications.vue";

@Component({
  components: {
    NavBar,
    Notifications
  }
})
export default class Home extends Vue {}
</script>
