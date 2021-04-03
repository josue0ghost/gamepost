<template>
  <div class="gray-background">
    <NavBar />
    <Settings style="margin-top: 1.3rem;" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Settings from "@/components/Settings/Settings.vue";

@Component({
  components: {
    NavBar,
    Settings
  }
})
export default class Home extends Vue {}
</script>
