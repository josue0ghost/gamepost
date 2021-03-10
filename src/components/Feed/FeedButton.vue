<template>
    <div class="text-center feed-button">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FeedButton extends Vue {
  @Prop() private msg!: string;
}
</script>


