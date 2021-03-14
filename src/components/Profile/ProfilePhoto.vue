<template>
    <b-row class="justify-content-center">
        <b-col lg="3" class="order-lg-2">
            <div class="card-profile-image">
                <a href="#">
                    <b-img src="/img/logo.png" height="auto" rounded="circle" />
                </a>
                <div class="circle">
                    <a href="#">
                        <IconifyIcon :icon="icons.cameraIcon" color="black"/>
                    </a>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import { Component, Vue } from "vue-property-decorator"
import IconifyIcon from '@iconify/vue';
import cameraIcon from '@iconify/icons-pixelarticons/camera';


@Component({
    components: {
        IconifyIcon
    },
    data() {
        return {
            icons: {
                cameraIcon
            }
        }
    }
})
export default class Home extends Vue {}
</script>
