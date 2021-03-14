<template>
  <div class="">
    <button type="button" class="btn-icon-clipboard">
      <div>
        <IconifyIcon :icon="icons.userIcon" />
        <span>Following</span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconifyIcon from '@iconify/vue';
import userIcon from '@iconify/icons-pixelarticons/user';
import StatsCard from '@/components/Cards/StatsCard.vue';

@Component({
  components: {
    IconifyIcon,
    StatsCard
  },
  data() {
    return {
      icons: {
        userIcon
      }
    }
  }
})
export default class Home extends Vue {}
</script>


