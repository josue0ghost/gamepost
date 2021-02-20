<template>
  <div class="gray-background">
    <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    -->
    <div>
      <NavBar/>
    </div>
    <div>
      <Feed style="margin-top: 1.3rem;"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Feed from "@/components/Feed.vue"

@Component({
  components: {
    NavBar,
    Feed
  }
})
export default class Home extends Vue {}
</script>
