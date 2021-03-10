<template>
    <div>
        <Button msg="HOLA" class="mx-3"/>
        <Button msg="Following" class="mx-3 my-2"/>
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