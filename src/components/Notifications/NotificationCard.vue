<template>
    <div class="notification my-2">
        <card style="border-radius: 10px;">
            <b-row align-v="center">
                <b-col cols="2">
                    <div class="friend"></div>
                </b-col>
                <b-col cols="8">
                    <b-link style="float: left; margin-left: 1rem;">{{model.name}}</b-link>
                </b-col>
                <b-col cols="2">
                    <IconifyIcon :icon="icons.moreHorizontal" height="24" style="float: right; margin-right: .5rem"/>
                </b-col>
            </b-row>
        </card>
    </div>
</template>

<script>
import Vue from 'vue'
import card from '@/components/Cards/Card.vue'
import IconifyIcon from '@iconify/vue';
import moreHorizontal from '@iconify/icons-pixelarticons/more-horizontal';

export default Vue.extend({
    components: {
        card,
        IconifyIcon
    },
    data() {
        return {
            icons: {
                moreHorizontal
            },
            model: {
                name: 'Arlene commented your post'
            }
        }
    }
})
</script>
