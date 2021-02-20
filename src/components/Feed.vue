<template>
    <div class="row">
        <div class="col-3">
        </div>
        <div class="col-6">
            <CColumn/>
        </div>
        <div class="col-3">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LColumn from '@/components/FeedLeftColumn.vue'
import CColumn from '@/components/FeedCenterColumn.vue'
import RColumn from '@/components/FeedRightColumn.vue'

@Component({
    components: {
        LColumn,
        CColumn,
        RColumn
    }
})
export default class Home extends Vue {}
</script>