<template>
    <div>
        <ButtonProfile class="mx-3"/>
        <ButtonFollowing class="mx-3 my-2"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ButtonFollowing from '@/components/Buttons/ButtonFollowing.vue'
import ButtonProfile from '@/components/Buttons/ButtonProfile.vue'

@Component({
    components: {
        ButtonFollowing,
        ButtonProfile
    }
})
export default class Home extends Vue {}
</script>