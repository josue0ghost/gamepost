<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    -->
    <SignUp/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";

@Component({
  components: {
    HelloWorld,
    LogIn,
    SignUp
  }
})
export default class Home extends Vue {}
</script>
