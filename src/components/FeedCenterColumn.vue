<template>
    <div>
        <FeedUserPost/>
        <FeedPost style="margin-top: 1rem;"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FeedUserPost from '@/components/FeedUserPost.vue'
import FeedPost from '@/components/FeedPost.vue'

export default Vue.extend({
    components: {
        FeedUserPost,
        FeedPost
    }
})
</script>