<template>
    <div>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Notification from '@/components/Notifications/NotificationCard.vue'

export default Vue.extend({
    components: {
        Notification,
    }
})
</script>
