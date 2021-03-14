<template>
    <div class="">
      <button type="button" class="btn-icon-clipboard">
        <div>
          <IconifyIcon :icon="icons.slidersIcon" />
          <span>Settings & Privacy</span>
        </div>
      </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconifyIcon from '@iconify/vue';
import slidersIcon from '@iconify/icons-pixelarticons/sliders';
import StatsCard from '@/components/Cards/StatsCard.vue';

@Component({
  components: {
    IconifyIcon,
    StatsCard
  },
  data() {
    return {
      icons: {
        slidersIcon
      }
    }
  }
})
export default class Home extends Vue {}
</script>


