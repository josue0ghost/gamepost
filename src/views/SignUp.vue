<template>
  <div class="home">
    <sign-up/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUp from "@/components/SignUp.vue";

@Component({
  components: {
    SignUp
  }
})
export default class Home extends Vue {}
</script>
