<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    -->
    <LogIn/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import LogIn from "@/components/LogIn.vue";

@Component({
  components: {
    HelloWorld,
    LogIn
  }
})
export default class Home extends Vue {}
</script>
