<template>
    <div>
        <Button msg="Settingsprivacy"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from '@/components/Feed/FeedButton.vue'


@Component({
    components: {
        Button
    }
})
export default class Home extends Vue {}
</script>