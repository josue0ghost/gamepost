<template>
  <div>
    <FeedUserPost />
    <FeedPost/>
  </div>
</template>

<script>
import FeedUserPost from "@/components/Feed/FeedUserPost.vue";
import FeedPost from "@/components/Feed/FeedPost.vue";

export default {
  components: {
    FeedUserPost,
    FeedPost
  }
}
</script>
