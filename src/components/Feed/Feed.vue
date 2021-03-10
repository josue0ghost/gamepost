<template>
    <div class="row">
        <div class="col-3">
            <LColumn/>
        </div>
        <div class="col-6">
            <CColumn/>
        </div>
        <div class="col-3">
            <RColumn/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LColumn from '@/components/Feed/FeedLeftColumn.vue'
import CColumn from '@/components/Feed/FeedCenterColumn.vue'
import RColumn from '@/components/Feed/FeedRightColumn.vue'

@Component({
    components: {
        LColumn,
        CColumn,
        RColumn
    }
})
export default class Home extends Vue {}
</script>