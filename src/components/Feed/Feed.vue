<template>
  <div class="row">
    <div class="col-3">
      <LColumn />
    </div>
    <div class="col-6">
      <CColumn />
    </div>
    <div class="col-3">
      <RColumn />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import LColumn from "@/components/Columns/LeftColumn.vue";
import CColumn from "@/components/Columns/FeedCenterColumn.vue";
import RColumn from "@/components/Columns/RightColumn.vue";
import Posts from "@/store/apiroutes.js";

export default {
  components: {
    LColumn,
    CColumn,
    RColumn
  },
  mounted() {
    try {
      Posts.getposts().then(response => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
</script>
