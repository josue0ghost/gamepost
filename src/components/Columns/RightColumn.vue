<template>
    <div>
        <Button />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from '@/components/Buttons/ButtonSettings.vue'


@Component({
    components: {
        Button
    }
})
export default class Home extends Vue {}
</script>