<template>
  <div class="gray-background">
    <NavBar />
    <Search style="margin-top: 1.3rem;" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Search from "@/components/Search/Search.vue";

@Component({
  components: {
    NavBar,
    Search
  }
})
export default class Home extends Vue {}
</script>
