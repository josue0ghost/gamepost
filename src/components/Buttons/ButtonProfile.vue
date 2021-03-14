<template>
    <div class="">
      <router-link to="/profile">
        <button type="button" class="btn-icon-clipboard">
            <div>
                <a class="profile-photo"></a>
                <span>UserName</span>
            </div>
        </button>
      </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  data() {
    return {
    }
  }
})
export default class Home extends Vue {}
</script>


